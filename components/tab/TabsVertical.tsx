"use client";
import { useState } from "react";

export default function TabsVertical() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: "Dashboard",
      icon: "📊",
      content:
        "Welcome to your dashboard! Here you can monitor all your key metrics and get an overview of your business performance.",
    },
    {
      label: "Projects",
      icon: "📁",
      content:
        "Manage all your projects in one place. Create new projects, track progress, and collaborate with your team members.",
    },
    {
      label: "Messages",
      icon: "💬",
      content:
        "Stay connected with your team through our messaging system. Send direct messages or create group conversations.",
    },
    {
      label: "Calendar",
      icon: "📅",
      content:
        "Schedule meetings, set reminders, and manage your time effectively with our integrated calendar system.",
    },
    {
      label: "Reports",
      icon: "📈",
      content:
        "Generate detailed reports and analytics to make data-driven decisions for your business growth.",
    },
  ];

  return (
    <div className="p-8  bg-white dark:bg-black">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
        Vertical Tabs
      </h3>

      <div className="flex gap-6">
        <div className="w-64 flex-shrink-0">
          <nav className="space-y-2">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left rounded-lg transition-all duration-200 ${
                  activeTab === index
                    ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-l-4 border-blue-500"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-zinc-900 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="flex-1 bg-gray-50 dark:bg-zinc-900 rounded-lg p-6">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            {tabs[activeTab].icon} {tabs[activeTab].label}
          </h4>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {tabs[activeTab].content}
          </p>
        </div>
      </div>
    </div>
  );
}
