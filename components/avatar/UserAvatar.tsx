export default function UserAvatar() {
  const users = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      status: "online",
      image: "https://picsum.photos/200?random=20",
    },
    {
      name: "Michael Chen",
      role: "Senior Developer",
      status: "away",
      image: "https://picsum.photos/200?random=21",
    },
    {
      name: "Emily Rodriguez",
      role: "UX Designer",
      status: "offline",
      image: "https://picsum.photos/200?random=22",
    },
    {
      name: "David Kim",
      role: "Data Analyst",
      status: "online",
      image: "https://picsum.photos/200?random=23",
    },
  ];

  const statusColors = {
    online: "bg-green-500",
    away: "bg-yellow-500",
    offline: "bg-gray-400",
  };

  return (
    <div className="p-8 bg-white dark:bg-black">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
        User Avatars
      </h3>

      <div className="space-y-4">
        {users.map((user, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-zinc-900 transition-colors duration-200"
          >
            <div className="relative">
              <img
                src={user.image}
                className="w-12 h-12 rounded-full object-cover"
                alt={`${user.name} avatar`}
              />
              <span
                className={`absolute bottom-0 right-0 w-3 h-3 ${statusColors[user.status as keyof typeof statusColors]} border-2 border-white dark:border-black rounded-full`}
              ></span>
            </div>
            <div className="flex-1">
              <h4 className="text-base font-medium text-gray-900 dark:text-white">
                {user.name}
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {user.role}
              </p>
            </div>
            <button className="px-4 py-2 text-sm text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors">
              View Profile
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
          Compact View
        </h4>
        <div className="flex flex-wrap gap-6">
          {users.map((user, index) => (
            <div key={index} className="flex items-center gap-3">
              <img
                src={user.image}
                className="w-10 h-10 rounded-full object-cover"
                alt={`${user.name} avatar`}
              />
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {user.name}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {user.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
