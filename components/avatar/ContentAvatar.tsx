export default function ContentAvatar() {
  const profiles = [
    {
      name: "Alexandra Smith",
      role: "CEO & Founder",
      image: "https://picsum.photos/200?random=30",
      bio: "Leading innovation in tech for over 15 years",
      social: { twitter: "#", linkedin: "#", github: "#" }
    },
    {
      name: "Robert Johnson",
      role: "CTO",
      image: "https://picsum.photos/200?random=31",
      bio: "Building scalable solutions for tomorrow",
      social: { twitter: "#", linkedin: "#", github: "#" }
    },
    {
      name: "Maria Garcia",
      role: "Head of Design",
      image: "https://picsum.photos/200?random=32",
      bio: "Creating beautiful experiences that matter",
      social: { twitter: "#", linkedin: "#", dribbble: "#" }
    }
  ];

  return (
    <div className="p-8 bg-white dark:bg-black">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Profile Cards</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {profiles.map((profile, index) => (
          <div key={index} className="text-center p-6 bg-gray-50 dark:bg-zinc-900 rounded-2xl hover:shadow-lg transition-shadow duration-300">
            <img
              src={profile.image}
              className="rounded-full w-32 h-32 mb-4 mx-auto object-cover ring-4 ring-gray-200 dark:ring-zinc-700"
              alt={`${profile.name} avatar`}
            />
            <h5 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
              {profile.name}
            </h5>
            <p className="text-sm text-blue-600 dark:text-blue-400 mb-3">{profile.role}</p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{profile.bio}</p>
            <div className="flex justify-center gap-3">
              {Object.keys(profile.social).map((platform) => (
                <a
                  key={platform}
                  href={profile.social[platform as keyof typeof profile.social]}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 dark:bg-zinc-700 hover:bg-blue-500 hover:text-white transition-colors duration-200"
                >
                  <span className="text-xs capitalize">{platform[0]}</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Horizontal Cards</h4>
        <div className="space-y-4">
          {profiles.slice(0, 2).map((profile, index) => (
            <div key={index} className="flex items-center gap-6 p-4 bg-gray-50 dark:bg-zinc-900 rounded-xl">
              <img
                src={profile.image}
                className="w-20 h-20 rounded-full object-cover"
                alt={`${profile.name} avatar`}
              />
              <div className="flex-1">
                <h5 className="text-lg font-semibold text-gray-900 dark:text-white">{profile.name}</h5>
                <p className="text-sm text-blue-600 dark:text-blue-400">{profile.role}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{profile.bio}</p>
              </div>
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                Connect
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
