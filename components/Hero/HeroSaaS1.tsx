export default function HeroSaaS1() {
  return (
    <section className="relative w-full h-screen bg-white dark:bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-zinc-900 dark:via-black dark:to-purple-900/20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            New: AI-powered automation is here
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Build Better
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Products
            </span>
            <br />
            Ship Faster
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            The all-in-one platform that helps teams design, develop, and deploy
            exceptional products. From idea to launch in record time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border-2 border-gray-300 dark:border-zinc-700 text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-zinc-600 font-semibold rounded-lg transition-colors duration-200">
              Watch Demo
            </button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500 dark:text-gray-400">
            <span>Trusted by 10,000+ teams</span>
            <div className="flex items-center gap-6 opacity-60">
              <div className="px-4 py-2 bg-gray-100 dark:bg-zinc-800 rounded font-semibold">
                Stripe
              </div>
              <div className="px-4 py-2 bg-gray-100 dark:bg-zinc-800 rounded font-semibold">
                Airbnb
              </div>
              <div className="px-4 py-2 bg-gray-100 dark:bg-zinc-800 rounded font-semibold">
                Uber
              </div>
              <div className="px-4 py-2 bg-gray-100 dark:bg-zinc-800 rounded font-semibold">
                Netflix
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 relative">
          <div className="relative mx-auto max-w-4xl">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-20"></div>
            <div className="relative bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-gray-100 dark:bg-zinc-800 px-6 py-3 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 text-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    app.yourplatform.com
                  </span>
                </div>
              </div>
              <img
                src="https://picsum.photos/800/500?random=100"
                alt="Platform Dashboard"
                width={800}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-20 right-10 w-20 h-20 bg-purple-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
    </section>
  );
}
