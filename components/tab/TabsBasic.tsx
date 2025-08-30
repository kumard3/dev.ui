"use client";
import { useState } from "react";

export default function TabsBasic() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: "Overview",
      content: "This is the overview tab content. Here you can see a summary of all the important information and key metrics for your dashboard."
    },
    {
      label: "Analytics",
      content: "Analytics tab shows detailed insights about your data. Track performance metrics, user engagement, and conversion rates."
    },
    {
      label: "Settings",
      content: "Configure your preferences and account settings. Customize notifications, privacy settings, and integration options."
    },
    {
      label: "Team",
      content: "Manage your team members, permissions, and collaboration settings. Invite new members and assign roles."
    }
  ];

  return (
    <div className="p-8 bg-white dark:bg-black">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Basic Tabs</h3>
      
      <div className="w-full">
        <div className="border-b border-gray-200 dark:border-zinc-800">
          <nav className="flex space-x-8">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                  activeTab === index
                    ? "border-blue-500 text-blue-600 dark:text-blue-400"
                    : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
        
        <div className="py-6">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {tabs[activeTab].content}
          </p>
        </div>
      </div>

      <div className="mt-12">
        <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Pill Tabs</h4>
        <div className="bg-gray-100 dark:bg-zinc-900 p-1 rounded-lg inline-flex">
          {tabs.slice(0, 3).map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                activeTab === index
                  ? "bg-white dark:bg-black text-gray-900 dark:text-white shadow-sm"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}