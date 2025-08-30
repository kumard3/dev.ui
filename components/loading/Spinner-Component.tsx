import React from "react";

export default function Spinner() {
  const variants = [
    { type: "basic", label: "Basic Spinner" },
    { type: "button", label: "Loading Button" },
    { type: "dots", label: "Dots Loader" },
    { type: "pulse", label: "Pulse Loader" },
  ];

  const BasicSpinner = () => (
    <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"></div>
  );

  const LoadingButton = () => (
    <button
      type="button"
      className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 transition ease-in-out duration-150 cursor-not-allowed"
    >
      <svg
        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      Processing...
    </button>
  );

  const DotsLoader = () => (
    <div className="flex space-x-2">
      <div className="h-3 w-3 bg-blue-600 rounded-full animate-bounce"></div>
      <div
        className="h-3 w-3 bg-blue-600 rounded-full animate-bounce"
        style={{ animationDelay: "0.1s" }}
      ></div>
      <div
        className="h-3 w-3 bg-blue-600 rounded-full animate-bounce"
        style={{ animationDelay: "0.2s" }}
      ></div>
    </div>
  );

  const PulseLoader = () => (
    <div className="h-12 w-12 bg-blue-600 rounded-full animate-pulse"></div>
  );

  const renderSpinner = (type: string) => {
    switch (type) {
      case "basic":
        return <BasicSpinner />;
      case "button":
        return <LoadingButton />;
      case "dots":
        return <DotsLoader />;
      case "pulse":
        return <PulseLoader />;
      default:
        return <BasicSpinner />;
    }
  };

  return (
    <div className="p-8 w-full bg-white dark:bg-black">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
        Loading Spinners
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {variants.map((variant) => (
          <div
            key={variant.type}
            className="flex flex-col items-center gap-4 p-6 bg-gray-50 dark:bg-zinc-900 rounded-xl"
          >
            <h4 className="text-sm font-medium text-gray-900 dark:text-white">
              {variant.label}
            </h4>
            {renderSpinner(variant.type)}
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
          Page Loading Overlay
        </h4>
        <div className="relative h-32 bg-gray-100 dark:bg-zinc-900 rounded-lg flex items-center justify-center">
          <div className="absolute inset-0 bg-white/80 dark:bg-black/80 flex items-center justify-center">
            <div className="flex flex-col items-center gap-3">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"></div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Loading content...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
