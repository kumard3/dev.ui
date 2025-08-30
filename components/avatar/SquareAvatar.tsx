export default function SquareAvatar() {
  const avatars = [
    { 
      src: "https://picsum.photos/200?random=10", 
      variant: "rounded",
      label: "Rounded"
    },
    { 
      src: "https://picsum.photos/200?random=11", 
      variant: "square",
      label: "Square"
    },
    { 
      src: "https://picsum.photos/200?random=12", 
      variant: "soft",
      label: "Soft Rounded"
    }
  ];

  const variantClasses = {
    rounded: "rounded-lg",
    square: "rounded-none",
    soft: "rounded-2xl"
  };

  return (
    <div className="p-8 bg-white dark:bg-black">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Square Avatars</h3>
      
      <div className="flex flex-wrap gap-8">
        {avatars.map((avatar, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <img
              src={avatar.src}
              alt={`${avatar.label} avatar`}
              className={`w-20 h-20 object-cover ${variantClasses[avatar.variant as keyof typeof variantClasses]} ring-2 ring-gray-200 dark:ring-zinc-700 hover:ring-blue-500 transition-all duration-200`}
            />
            <span className="text-sm text-gray-600 dark:text-gray-400">{avatar.label}</span>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Avatar Groups</h4>
        <div className="flex -space-x-3">
          {[13, 14, 15, 16].map((num) => (
            <img
              key={num}
              src={`https://picsum.photos/200?random=${num}`}
              alt={`Group avatar ${num}`}
              className="w-12 h-12 rounded-lg object-cover ring-2 ring-white dark:ring-black hover:z-10 hover:scale-110 transition-all duration-200"
            />
          ))}
          <div className="w-12 h-12 rounded-lg bg-gray-200 dark:bg-zinc-800 ring-2 ring-white dark:ring-black flex items-center justify-center">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">+5</span>
          </div>
        </div>
      </div>
    </div>
  );
}