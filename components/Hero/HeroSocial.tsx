export default function HeroSocial() {
  const testimonials = [
    {
      text: "This platform completely transformed our workflow. We're shipping 3x faster now.",
      author: "Sarah Chen",
      role: "CTO at TechCorp",
      avatar: "https://picsum.photos/200?random=70",
      company: "TechCorp",
    },
    {
      text: "The best investment we've made. ROI was positive within the first month.",
      author: "Michael Rodriguez",
      role: "CEO at StartupXYZ",
      avatar: "https://picsum.photos/200?random=71",
      company: "StartupXYZ",
    },
    {
      text: "Incredible support team and feature set. Highly recommend to any growing business.",
      author: "Emily Johnson",
      role: "Product Manager",
      avatar: "https://picsum.photos/200?random=72",
      company: "InnovateLab",
    },
  ];

  const companies = [
    { name: "Microsoft", logo: "M" },
    { name: "Google", logo: "G" },
    { name: "Apple", logo: "A" },
    { name: "Meta", logo: "f" },
    { name: "Tesla", logo: "T" },
  ];

  return (
    <section className="relative w-full min-h-screen bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 rounded-full text-sm font-medium mb-8">
            🏆 Rated #1 by G2 Crowd
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Loved by
            <span className="bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">
              {" "}
              100,000+
            </span>
            <br />
            Developers
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
            Join the community of developers and teams who've revolutionized
            their development process with our platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <button className="px-8 py-4 bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200">
              Join the Community
            </button>
            <button className="px-8 py-4 border border-gray-300 dark:border-zinc-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-800 font-semibold rounded-lg transition-colors duration-200">
              Read Success Stories
            </button>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-center text-lg font-semibold text-gray-900 dark:text-white mb-8">
            Trusted by industry leaders
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {companies.map((company, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gray-200 dark:bg-zinc-800 rounded-lg flex items-center justify-center font-bold text-gray-700 dark:text-gray-300">
                  {company.logo}
                </div>
                <span className="font-semibold text-gray-700 dark:text-gray-300">
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-zinc-800 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-6 px-8 py-4 bg-gray-50 dark:bg-zinc-900 rounded-2xl">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                4.9/5
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                G2 Rating
              </div>
            </div>
            <div className="w-px h-12 bg-gray-300 dark:bg-zinc-700"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                99.9%
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Uptime
              </div>
            </div>
            <div className="w-px h-12 bg-gray-300 dark:bg-zinc-700"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                24/7
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Support
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
