"use client";
export default function HeroSaaS3() {
  const stats = [
    { value: "99.9%", label: "Uptime" },
    { value: "50K+", label: "Active Users" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <section className="relative w-full min-h-screen bg-white dark:bg-black">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tight">
            THE FUTURE
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              IS NOW
            </span>
          </h1>

          <p className="text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-4xl mx-auto font-light">
            Revolutionary SaaS platform that transforms how businesses operate.
            Experience the next generation of productivity tools.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button className="group px-10 py-5 bg-black dark:bg-white text-white dark:text-black font-bold rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <span className="flex items-center gap-3">
                START BUILDING
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </button>
            <button className="px-10 py-5 border-2 border-black dark:border-white text-black dark:text-white font-bold rounded-full hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300">
              LEARN MORE
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute -inset-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-3xl opacity-30"></div>
          <div className="relative">
            <img
              src="https://picsum.photos/1000/600"
              alt="Platform Interface"
              width={1000}
              height={600}
              className="w-full rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
