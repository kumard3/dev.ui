import Link from "next/link";
import ShowCase from "@/website/components/ShowCase";
import HeroShowcase from "@/components/Hero/HeroShowcase";
import Features1 from "@/components/features/Features1";
import Features2 from "@/components/features/Features2";
import Card1 from "@/components/card/Card1";
import Card5 from "@/components/card/Card5";

export const dynamic = "force-static";

const Home = () => {
  const HeroCardData = [
    {
      title: "Easy to use UI elements based on Tailwind CSS " as string,
      description:
        "dev.UI is a toolkit for developers and designers to make creating interfaces easier. Everything is modular and customizable to fit your brand.",
    },
    {
      title: "Get the essentials in one place    ",
      description:
        "We know it's frustrating to find an UI kit with all the right components and then find out that each element costs money, so we're offering 100+ building blocks for free. And there are many more on the way!    ",
    },
    {
      title: "Stop wasting time with CSS",
      description:
        "You don't have to be a professional designer or developer to create something beautiful.Just copy-paste the code from dev.UI into your project, add your own content and hit publish.  ",
    },
  ];
  return (
    <div className="min-h-screen bg-black">
      <HeroShowcase />
      {/* Benefits Section */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {HeroCardData.map((n, index) => {
              return (
                <HeroCard
                  title={n.title}
                  description={n.description}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Premium Components
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Ready-to-use components for your next project
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card1 />
            <div>
              <Card5 />
            </div>
            <div className="bg-black border border-zinc-800 rounded-xl p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">
                  More Components
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Discover our full collection
                </p>
                <Link
                  href="/components"
                  className="inline-block px-4 py-2 bg-white hover:bg-gray-200 text-black text-sm rounded-lg transition-colors"
                >
                  View All
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-white mb-6">
              Ready to build something amazing?
            </h2>
            <p className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of developers who are already building faster with
              Dev.UI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/components"
                className="px-8 py-4 bg-white hover:bg-gray-200 text-black font-semibold rounded-xl transition-all duration-200 transform hover:scale-105"
              >
                Browse Components
              </Link>
              <Link
                href="/templates"
                className="px-8 py-4 border border-white hover:border-gray-300 text-white hover:text-black hover:bg-white font-semibold rounded-xl transition-all duration-200"
              >
                View Templates
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

interface herocard {
  title: string;
  description: string;
}
const HeroCard = ({ title, description }: herocard) => {
  return (
    <div className="bg-black border border-zinc-800 hover:border-white rounded-xl p-6 transition-all duration-300 hover:transform hover:scale-105 group h-auto">
      <div className="mb-4">
        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
          <svg
            className="w-6 h-6 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-300 transition-colors duration-200">
          {title}
        </h3>
      </div>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
};
