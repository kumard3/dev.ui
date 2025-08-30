"use client";
import { useState } from "react";

export default function TabsCard() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: "Features",
      count: 12,
      content: (
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
            Product Features
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 dark:bg-zinc-800 rounded-lg">
              <h5 className="font-medium text-gray-900 dark:text-white mb-2">
                Real-time Updates
              </h5>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Get instant notifications and live data updates
              </p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-zinc-800 rounded-lg">
              <h5 className="font-medium text-gray-900 dark:text-white mb-2">
                Team Collaboration
              </h5>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Work together seamlessly with your team
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Reviews",
      count: 24,
      content: (
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
            Customer Reviews
          </h4>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="text-gray-700 dark:text-gray-300 italic">
                "Amazing product! It has completely transformed how we work."
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                - Sarah Johnson, CEO
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <p className="text-gray-700 dark:text-gray-300 italic">
                "The best investment we've made for our team productivity."
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                - Mike Chen, CTO
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Pricing",
      count: 3,
      content: (
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
            Pricing Plans
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border border-gray-200 dark:border-zinc-700 rounded-lg text-center">
              <h5 className="font-semibold text-gray-900 dark:text-white">
                Starter
              </h5>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-2">
                $9/mo
              </p>
            </div>
            <div className="p-4 border-2 border-blue-500 rounded-lg text-center bg-blue-50 dark:bg-blue-900/20">
              <h5 className="font-semibold text-gray-900 dark:text-white">
                Pro
              </h5>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-2">
                $29/mo
              </p>
            </div>
            <div className="p-4 border border-gray-200 dark:border-zinc-700 rounded-lg text-center">
              <h5 className="font-semibold text-gray-900 dark:text-white">
                Enterprise
              </h5>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-2">
                $99/mo
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="p-8 bg-white dark:bg-black">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
        Card Tabs
      </h3>

      <div className="bg-gray-50 dark:bg-zinc-900 rounded-xl p-6">
        <div className="flex flex-wrap gap-2 mb-6">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                activeTab === index
                  ? "bg-white dark:bg-black text-blue-600 dark:text-blue-400 shadow-sm"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-zinc-800"
              }`}
            >
              {tab.label}
              <span
                className={`px-2 py-0.5 rounded-full text-xs ${
                  activeTab === index
                    ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400"
                    : "bg-gray-200 dark:bg-zinc-700 text-gray-500 dark:text-gray-400"
                }`}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        <div className="bg-white dark:bg-black rounded-lg p-6">
          {tabs[activeTab].content}
        </div>
      </div>
    </div>
  );
}
