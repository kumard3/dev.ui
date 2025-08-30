export default function Features2() {
  const features = [
    {
      title: "Fast Performance",
      description: "Lightning fast response times with optimized code and efficient algorithms",
      icon: "⚡"
    },
    {
      title: "Secure by Default",
      description: "Built-in security features to protect your data and privacy",
      icon: "🔒"
    },
    {
      title: "Cloud Sync",
      description: "Seamless synchronization across all your devices in real-time",
      icon: "☁️"
    },
    {
      title: "Analytics Dashboard",
      description: "Comprehensive insights and metrics to track your progress",
      icon: "📊"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock customer support to help you succeed",
      icon: "🎧"
    },
    {
      title: "Easy Integration",
      description: "Simple API and webhooks for seamless third-party integrations",
      icon: "🔗"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to build amazing products, shipped faster than ever before.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-gray-50 dark:bg-zinc-900 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}