"use client";
import { useState, useEffect } from "react";

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-8 w-full bg-white dark:bg-black">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
        Progress Bars
      </h3>

      <div className="space-y-8">
        <div>
          <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Linear Progress
          </h4>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Progress
                </span>
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {progress}%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-zinc-800 rounded-full h-3">
                <div
                  className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Upload Progress
                </span>
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  75%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-zinc-800 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full w-3/4"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Processing
                </span>
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  45%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-zinc-800 rounded-full h-4">
                <div
                  className="bg-purple-500 h-4 rounded-full"
                  style={{ width: "45%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Circular Progress
          </h4>
          <div className="flex gap-8">
            <div className="relative">
              <svg
                className="w-20 h-20 transform -rotate-90"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  className="text-gray-200 dark:text-zinc-800"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray={`${2 * Math.PI * 40}`}
                  strokeDashoffset={`${2 * Math.PI * 40 * (1 - progress / 100)}`}
                  className="text-blue-600 transition-all duration-300"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {progress}%
                </span>
              </div>
            </div>

            <div className="relative">
              <svg
                className="w-16 h-16 transform -rotate-90"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="10"
                  fill="transparent"
                  className="text-gray-200 dark:text-zinc-800"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="10"
                  fill="transparent"
                  strokeDasharray={`${2 * Math.PI * 40}`}
                  strokeDashoffset={`${2 * Math.PI * 40 * (1 - 0.8)}`}
                  className="text-green-500"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-medium text-gray-900 dark:text-white">
                  80%
                </span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Skeleton Loaders
          </h4>
          <div className="space-y-4">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-gray-300 dark:bg-zinc-700 h-12 w-12"></div>
              <div className="flex-1 space-y-2 py-1">
                <div className="h-4 bg-gray-300 dark:bg-zinc-700 rounded w-3/4"></div>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-300 dark:bg-zinc-700 rounded"></div>
                  <div className="h-3 bg-gray-300 dark:bg-zinc-700 rounded w-5/6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
