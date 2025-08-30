import React from "react";

export default function CircleAvatar() {
  const avatars = [
    { src: "https://picsum.photos/200?random=1", size: "small" },
    { src: "https://picsum.photos/200?random=2", size: "medium" },
    { src: "https://picsum.photos/200?random=3", size: "large" },
    { src: "https://picsum.photos/200?random=4", size: "xlarge" }
  ];

  const sizeClasses = {
    small: "w-8 h-8",
    medium: "w-12 h-12",
    large: "w-16 h-16",
    xlarge: "w-24 h-24"
  };

  return (
    <div className="p-8 bg-white dark:bg-black">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Circle Avatars</h3>
      
      <div className="flex flex-wrap items-center gap-6">
        {avatars.map((avatar, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <img
              src={avatar.src}
              alt={`Avatar ${index + 1}`}
              className={`${sizeClasses[avatar.size as keyof typeof sizeClasses]} rounded-full object-cover ring-2 ring-gray-200 dark:ring-zinc-700 hover:ring-blue-500 transition-all duration-200`}
            />
            <span className="text-xs text-gray-500 dark:text-gray-400 capitalize">{avatar.size}</span>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">With Status Indicator</h4>
        <div className="flex gap-6">
          <div className="relative">
            <img
              src="https://picsum.photos/200?random=5"
              alt="Online avatar"
              className="w-16 h-16 rounded-full object-cover"
            />
            <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white dark:border-black rounded-full"></span>
          </div>
          <div className="relative">
            <img
              src="https://picsum.photos/200?random=6"
              alt="Away avatar"
              className="w-16 h-16 rounded-full object-cover"
            />
            <span className="absolute bottom-0 right-0 w-4 h-4 bg-yellow-500 border-2 border-white dark:border-black rounded-full"></span>
          </div>
          <div className="relative">
            <img
              src="https://picsum.photos/200?random=7"
              alt="Offline avatar"
              className="w-16 h-16 rounded-full object-cover"
            />
            <span className="absolute bottom-0 right-0 w-4 h-4 bg-gray-400 border-2 border-white dark:border-black rounded-full"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
