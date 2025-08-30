"use client";
export default function HeroFeatures() {
  const features = [
    {
      icon: "🚀",
      title: "Deploy in Seconds",
      description: "One-click deployment to global edge network",
    },
    {
      icon: "📊",
      title: "Real-time Analytics",
      description: "Monitor performance with live dashboards",
    },
    {
      icon: "🔗",
      title: "API-First Design",
      description: "Integrate seamlessly with existing tools",
    },
    {
      icon: "🛡️",
      title: "Enterprise Security",
      description: "SOC 2 compliant with end-to-end encryption",
    },
    {
      icon: "⚡",
      title: "Lightning Performance",
      description: "Sub-100ms response times globally",
    },
    {
      icon: "🤝",
      title: "24/7 Support",
      description: "Expert help whenever you need it",
    },
  ];

  return (
    <section className="relative w-full h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-zinc-900 dark:to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm font-medium mb-8">
            ✨ Everything you need to succeed
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-8">
            Built for
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Modern Teams
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
            Everything your team needs to build, ship, and scale world-class
            products. From development to deployment, we've got you covered.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200">
              Start Your Free Trial
            </button>
            <button className="px-8 py-4 bg-white dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-700 font-semibold rounded-lg transition-colors duration-200">
              Schedule a Demo
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-white dark:bg-zinc-900 rounded-2xl shadow-lg hover:shadow-xl border border-gray-200 dark:border-zinc-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-full">
            <div className="flex -space-x-2">
              {[60, 61, 62, 63].map((num) => (
                <img
                  key={num}
                  src={`https://picsum.photos/200?random=${num}`}
                  alt="Customer"
                  className="w-8 h-8 rounded-full ring-2 ring-white dark:ring-black"
                />
              ))}
            </div>
            <span className="text-sm font-medium">
              Join 100,000+ developers building the future
            </span>
          </div>
        </div>
      </div>

      <div className="absolute top-1/4 left-10 w-24 h-24 bg-blue-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-purple-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-pink-500 rounded-full blur-3xl opacity-10 animate-pulse"></div>
    </section>
  );
}
