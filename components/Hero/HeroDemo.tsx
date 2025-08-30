"use client";
import Image from "next/image";
import { useState } from "react";

export default function HeroDemo() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative w-full h-screen bg-white dark:bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full text-sm font-medium mb-8">
            🎉 Product Hunt #1 Product of the Day
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            See It In
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {" "}
              Action
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
            Watch how leading companies use our platform to increase
            productivity by 300% and reduce operational costs by 60%.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto mb-16">
          <div
            className="relative group cursor-pointer"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative bg-gray-900 dark:bg-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://picsum.photos/1000/600?random=103"
                alt="Product Demo"
                width={1000}
                height={600}
                className="w-full"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  {isPlaying ? (
                    <svg
                      className="w-8 h-8 text-gray-900"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                    </svg>
                  ) : (
                    <svg
                      className="w-8 h-8 text-gray-900 ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -top-6 -right-6 bg-white dark:bg-zinc-800 rounded-xl shadow-lg p-4 border border-gray-200 dark:border-zinc-700">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                Live Demo
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-gray-50 dark:bg-zinc-900 rounded-xl">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 dark:text-blue-400 text-xl">
                ⚡
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Lightning Fast
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Sub-second response times guaranteed
            </p>
          </div>

          <div className="text-center p-6 bg-gray-50 dark:bg-zinc-900 rounded-xl">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-green-600 dark:text-green-400 text-xl">
                🔒
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Bank-Level Security
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              SOC 2 Type II certified protection
            </p>
          </div>

          <div className="text-center p-6 bg-gray-50 dark:bg-zinc-900 rounded-xl">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-purple-600 dark:text-purple-400 text-xl">
                🤖
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              AI-Powered
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Smart automation that learns
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
