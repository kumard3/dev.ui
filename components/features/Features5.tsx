export default function Features5() {
  const timeline = [
    {
      year: "2024",
      title: "Next-Gen Platform Launch",
      description: "Revolutionary features that transform how teams work together",
      features: ["AI Integration", "Voice Commands", "Smart Automation"],
      color: "bg-blue-500"
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Reaching millions of users across 50+ countries worldwide",
      features: ["Multi-language Support", "Local Data Centers", "Regional Compliance"],
      color: "bg-green-500"
    },
    {
      year: "2022",
      title: "Enterprise Ready",
      description: "Built for scale with enterprise-grade security and reliability",
      features: ["SSO Integration", "Advanced Security", "SLA Guarantee"],
      color: "bg-purple-500"
    },
    {
      year: "2021",
      title: "The Beginning",
      description: "Started with a simple idea to make work more efficient",
      features: ["MVP Launch", "First 1000 Users", "Seed Funding"],
      color: "bg-orange-500"
    }
  ];

  return (
    <section className="py-20 w-full bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Journey
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Building the future, one milestone at a time
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-zinc-800"></div>
          
          {timeline.map((item, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`w-full md:w-5/12 ${
                  index % 2 === 0 ? "md:pr-8 text-right" : "md:pl-8 text-left"
                }`}
              >
                <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className={`inline-block px-3 py-1 rounded-full text-white text-sm font-semibold mb-4 ${item.color}`}>
                    {item.year}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {item.description}
                  </p>
                  <div className="space-y-2">
                    {item.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className={`flex items-center ${
                          index % 2 === 0 ? "justify-end" : "justify-start"
                        }`}
                      >
                        <span className="text-sm text-gray-500 dark:text-gray-500">
                          • {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white dark:bg-black border-4 border-blue-500 rounded-full z-10"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            And this is just the beginning...
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200">
            Join Our Journey
          </button>
        </div>
      </div>
    </section>
  );
}