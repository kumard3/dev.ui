"use client";
import { useState } from "react";

export default function ModalNotification() {
  const [notifications, setNotifications] = useState<
    Array<{ id: number; type: string; message: string }>
  >([]);

  const showNotification = (type: string, message: string) => {
    const id = Date.now();
    setNotifications((prev) => [...prev, { id, type, message }]);

    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, 5000);
  };

  const removeNotification = (id: number) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const notificationTypes = {
    success: {
      icon: "✅",
      bgColor: "bg-green-50 dark:bg-green-900/30",
      borderColor: "border-green-200 dark:border-green-800",
      textColor: "text-green-800 dark:text-green-200",
    },
    error: {
      icon: "❌",
      bgColor: "bg-red-50 dark:bg-red-900/30",
      borderColor: "border-red-200 dark:border-red-800",
      textColor: "text-red-800 dark:text-red-200",
    },
    warning: {
      icon: "⚠️",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/30",
      borderColor: "border-yellow-200 dark:border-yellow-800",
      textColor: "text-yellow-800 dark:text-yellow-200",
    },
    info: {
      icon: "ℹ️",
      bgColor: "bg-blue-50 dark:bg-blue-900/30",
      borderColor: "border-blue-200 dark:border-blue-800",
      textColor: "text-blue-800 dark:text-blue-200",
    },
  };

  return (
    <div className="p-8 bg-white dark:bg-black">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
        Notification Modals
      </h3>

      <div className="flex flex-wrap gap-3 mb-8">
        <button
          onClick={() =>
            showNotification("success", "Operation completed successfully!")
          }
          className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
        >
          Success
        </button>
        <button
          onClick={() =>
            showNotification("error", "Something went wrong. Please try again.")
          }
          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
        >
          Error
        </button>
        <button
          onClick={() =>
            showNotification("warning", "This action requires confirmation.")
          }
          className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg transition-colors"
        >
          Warning
        </button>
        <button
          onClick={() =>
            showNotification("info", "New feature available in your dashboard!")
          }
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
        >
          Info
        </button>
      </div>

      <div className="fixed top-4 right-4 z-50 space-y-2 max-w-sm">
        {notifications.map((notification) => {
          const config =
            notificationTypes[
              notification.type as keyof typeof notificationTypes
            ];
          return (
            <div
              key={notification.id}
              className={`${config.bgColor} ${config.borderColor} ${config.textColor} border rounded-lg p-4 shadow-lg animate-slideIn`}
            >
              <div className="flex items-start gap-3">
                <span className="text-lg flex-shrink-0">{config.icon}</span>
                <div className="flex-1">
                  <p className="text-sm font-medium">{notification.message}</p>
                </div>
                <button
                  onClick={() => removeNotification(notification.id)}
                  className="flex-shrink-0 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
