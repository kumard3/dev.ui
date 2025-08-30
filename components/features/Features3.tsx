export default function Features3() {
  const features = [
    {
      title: "Streamlined Workflow",
      subtitle: "Boost Productivity",
      description:
        "Optimize your daily tasks with our intelligent automation tools. Save hours of manual work and focus on what matters most to your business growth.",
      points: [
        "Automated task scheduling",
        "Smart notifications",
        "Team collaboration tools",
      ],
      image: "https://picsum.photos/600/400?random=1",
    },
    {
      title: "Advanced Analytics",
      subtitle: "Data-Driven Insights",
      description:
        "Make informed decisions with comprehensive analytics and reporting. Track metrics that matter and visualize your progress in real-time.",
      points: [
        "Custom dashboards",
        "Real-time reporting",
        "Predictive analytics",
      ],
      image: "https://picsum.photos/600/400?random=2",
      reverse: true,
    },
    {
      title: "Enterprise Security",
      subtitle: "Peace of Mind",
      description:
        "Rest easy knowing your data is protected by bank-level security. We employ the latest encryption and security protocols to keep your information safe.",
      points: [
        "End-to-end encryption",
        "Two-factor authentication",
        "Regular security audits",
      ],
      image: "https://picsum.photos/600/400?random=3",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Discover the features that set us apart from the competition
          </p>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                feature.reverse ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1 space-y-6">
                <div>
                  <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold uppercase tracking-wider">
                    {feature.subtitle}
                  </span>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-3">
                  {feature.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <svg
                        className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
                <button className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200">
                  Learn More
                  <svg
                    className="w-5 h-5 ml-2"
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
                </button>
              </div>
              <div className="flex-1">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
