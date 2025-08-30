"use client";
import { useState } from "react";

export default function Card5() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="p-1 shadow-2xl bg-white border border-zinc-800 hover:border-white rounded-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-black sm:p-8 p-6 rounded-xl relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-white rounded-lg">
              <svg
                className="w-6 h-6 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <span className="text-xs font-medium text-white bg-white/10 px-2 py-1 rounded-full">
              Premium
            </span>
          </div>

          <h5 className="text-xl font-bold text-white mb-3 group-hover:text-gray-300">
            Advanced Analytics Platform
          </h5>

          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            Transform your data into actionable insights with our cutting-edge
            analytics platform designed for modern teams.
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 bg-white rounded-full border-2 border-black" />
                <div className="w-6 h-6 bg-gray-400 rounded-full border-2 border-black" />
                <div className="w-6 h-6 bg-gray-600 rounded-full border-2 border-black" />
              </div>
              <span className="text-xs text-gray-500">10k+ users</span>
            </div>

            <button className="px-4 py-2 bg-white hover:bg-gray-200 text-black text-sm rounded-lg transition-all duration-200 transform hover:scale-105">
              Get Started
            </button>
          </div>
        </div>

        <div
          className={`absolute inset-0 bg-white/5 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
        />
      </div>
    </div>
  );
}
