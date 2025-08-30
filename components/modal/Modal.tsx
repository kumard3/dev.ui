"use client";
import { useState, useEffect, useRef } from "react";

export default function Modal() {
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

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isModalOpen]);

  return (
    <div className="flex flex-col">
      <button
        className="bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg"
        onClick={() => setModalOpen(true)}
      >
        Open Modal
      </button>
      
      {isModalOpen && (
        <div
          className="fixed z-50 inset-0 overflow-y-auto animate-fadeIn"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 bg-gray-900 bg-opacity-50 dark:bg-opacity-70 transition-opacity animate-fadeIn"
              aria-hidden="true"
            ></div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div 
              ref={modalRef}
              className="inline-block align-bottom bg-white dark:bg-black rounded-2xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full animate-modalSlideIn"
            >
              <div className="bg-white dark:bg-black px-6 pt-6 pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                    <h3
                      className="text-xl leading-6 font-semibold text-gray-900 dark:text-white"
                      id="modal-title"
                    >
                      Lorem ipsum
                    </h3>
                    <div className="mt-4">
                      <p className="text-base text-gray-600 dark:text-gray-400">
                        dolor sit amet consectetur adipisicing elit. Corporis
                        atque beatae exercitationem. Eligendi sit excepturi
                        harum necessitatibus. Veritatis sequi nemo corporis,
                        autem, itaque quae debitis error laboriosam recusandae
                        optio ea!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-zinc-900 px-6 py-4 sm:flex sm:flex-row-reverse gap-3">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="w-full inline-flex justify-center rounded-lg border border-transparent shadow-sm px-5 py-2.5 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 sm:w-auto transition-all duration-200 transform hover:scale-105 active:scale-95"
                >
                  Accept
                </button>
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="mt-3 w-full inline-flex justify-center rounded-lg border border-gray-300 dark:border-zinc-700 shadow-sm px-5 py-2.5 bg-white dark:bg-zinc-800 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-700 sm:mt-0 sm:w-auto transition-all duration-200"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
          <style jsx>{`
            @keyframes fadeIn {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }

            @keyframes modalSlideIn {
              from {
                opacity: 0;
                transform: translateY(-20px) scale(0.95);
              }
              to {
                opacity: 1;
                transform: translateY(0) scale(1);
              }
            }

            .animate-fadeIn {
              animation: fadeIn 0.2s ease-out;
            }

            .animate-modalSlideIn {
              animation: modalSlideIn 0.3s ease-out;
            }
          `}</style>
        </div>
      )}
    </div>
  );
}
