export default function Features4() {
  const features = [
    {
      title: "AI-Powered Assistant",
      description:
        "Get intelligent suggestions and automate repetitive tasks with our advanced AI technology.",
      image: "https://picsum.photos/400/250?random=4",
      badge: "New",
      badgeColor: "bg-green-500",
    },
    {
      title: "Real-time Collaboration",
      description:
        "Work together seamlessly with your team, no matter where they are in the world.",
      image: "https://picsum.photos/400/250?random=5",
      badge: "Popular",
      badgeColor: "bg-blue-500",
    },
    {
      title: "Custom Integrations",
      description:
        "Connect with your favorite tools and services through our extensive API ecosystem.",
      image: "https://picsum.photos/400/250?random=6",
      badge: null,
    },
    {
      title: "Mobile Experience",
      description:
        "Stay productive on the go with our fully-featured mobile applications.",
      image: "https://picsum.photos/400/250?random=7",
      badge: "Beta",
      badgeColor: "bg-purple-500",
    },
    {
      title: "Advanced Reporting",
      description:
        "Generate detailed reports and insights to make data-driven decisions.",
      image: "https://picsum.photos/400/250?random=8",
      badge: null,
    },
    {
      title: "Template Library",
      description:
        "Get started quickly with our collection of professionally designed templates.",
      image: "https://picsum.photos/400/250?random=9",
      badge: "Updated",
      badgeColor: "bg-orange-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-zinc-900 dark:to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Feature-Rich Platform
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Everything you need to succeed, all in one place
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  width={400}
                  height={250}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {feature.badge && (
                  <span
                    className={`absolute top-4 right-4 px-3 py-1 text-xs font-semibold text-white rounded-full ${feature.badgeColor}`}
                  >
                    {feature.badge}
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {feature.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                >
                  Learn more
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
}
