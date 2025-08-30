"use client";

export default function HeroSaaS2() {
  const features = [
    "✨ AI-powered insights",
    "🚀 10x faster deployment",
    "🔒 Enterprise security",
    "📊 Real-time analytics",
  ];

  return (
    <section className="relative w-full h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-black dark:via-zinc-900 dark:to-blue-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              99.9% Uptime Guaranteed
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Scale Your
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Business
              </span>
              <br />
              Effortlessly
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Transform your workflow with our intelligent platform. Automate
              tasks, gain insights, and scale your operations with confidence.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                >
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200">
                Get Started Free
              </button>
              <button className="px-8 py-4 border border-gray-300 dark:border-zinc-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-800 font-semibold rounded-lg transition-colors duration-200">
                Schedule Demo
              </button>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex -space-x-2">
                {[50, 51, 52].map((num) => (
                  <img
                    key={num}
                    src={`https://picsum.photos/200?random=${num}`}
                    alt="Customer"
                    className="w-8 h-8 rounded-full ring-2 ring-white dark:ring-black"
                  />
                ))}
              </div>
              <span>Join 50,000+ happy customers</span>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <img
                  src="https://picsum.photos/600/400?random=101"
                  alt="Dashboard Preview"
                  width={600}
                  height={400}
                  className="w-full rounded-lg"
                />
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-4 border border-gray-200 dark:border-zinc-700">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                  <span className="text-green-600 dark:text-green-400 text-lg">
                    📈
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    Revenue Up
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    +125% this month
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-4 border border-gray-200 dark:border-zinc-700">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-400 text-lg">
                    👥
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    New Users
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    +2,847 today
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
