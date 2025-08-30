"use client";
import { useState, useEffect, useRef } from "react";

export default function ModalConfirm() {
  const [isModalOpen, setModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  const handleConfirm = () => {
    console.log("Confirmed!");
    setModalOpen(false);
  };

  return (
    <div className="p-8 bg-white dark:bg-black">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Confirmation Modal</h3>
      
      <button
        className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-200"
        onClick={() => setModalOpen(true)}
      >
        Delete Account
      </button>
      
      {isModalOpen && (
        <div className="fixed z-50 inset-0 overflow-y-auto animate-fadeIn">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-900 bg-opacity-50 dark:bg-opacity-70 transition-opacity animate-fadeIn"></div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

            <div 
              ref={modalRef}
              className="inline-block align-bottom bg-white dark:bg-black rounded-2xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full animate-modalSlideIn"
            >
              <div className="px-6 pt-6 pb-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.232 16.5C3.462 18.333 4.422 20 5.982 20z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4 w-full">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Delete Account
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Are you sure you want to delete your account? This action cannot be undone. 
                        All your data will be permanently removed from our servers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-zinc-900 px-6 py-4 sm:flex sm:flex-row-reverse gap-3">
                <button
                  type="button"
                  onClick={handleConfirm}
                  className="w-full inline-flex justify-center rounded-lg shadow-sm px-5 py-2.5 bg-red-600 text-base font-medium text-white hover:bg-red-700 sm:w-auto transition-all duration-200"
                >
                  Delete Account
                </button>
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="mt-3 w-full inline-flex justify-center rounded-lg border border-gray-300 dark:border-zinc-600 shadow-sm px-5 py-2.5 bg-white dark:bg-zinc-800 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-zinc-700 sm:mt-0 sm:w-auto transition-all duration-200"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
          <style jsx>{`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes modalSlideIn {
              from { opacity: 0; transform: translateY(-20px) scale(0.95); }
              to { opacity: 1; transform: translateY(0) scale(1); }
            }
            .animate-fadeIn { animation: fadeIn 0.2s ease-out; }
            .animate-modalSlideIn { animation: modalSlideIn 0.3s ease-out; }
          `}</style>
        </div>
      )}
    </div>
  );
}