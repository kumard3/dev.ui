"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function HeroShowcase() {
  const [currentComponent, setCurrentComponent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const components = [
    { name: "Modal", preview: "🗂️", color: "from-blue-500 to-cyan-500" },
    { name: "Cards", preview: "🃏", color: "from-purple-500 to-pink-500" },
    { name: "Features", preview: "⭐", color: "from-green-500 to-emerald-500" },
    { name: "Hero", preview: "🚀", color: "from-orange-500 to-red-500" },
    { name: "Avatar", preview: "👤", color: "from-indigo-500 to-blue-500" },
    { name: "Loading", preview: "⏳", color: "from-yellow-500 to-orange-500" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentComponent((prev) => (prev + 1) % components.length);
        setIsAnimating(false);
      }, 200);
    }, 3000);

    return () => clearInterval(interval);
  }, [components.length]);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_50%)]" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-left">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-white/10 border border-white/30 rounded-full text-white text-sm font-medium">
                🎨 Open Source UI Library
              </span>
            </div>

            <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Build <span className="gradientText">Beautiful</span>
              <br />
              Interfaces
              <span className="">.</span>
            </h1>

            <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-lg">
              Copy-paste components built with React, TypeScript, and Tailwind
              CSS. No package installs, no dependencies - just beautiful code.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/components"
                className="px-8 py-4 bg-white hover:bg-gray-200 text-black font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
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
            {/* Stats */}
            <div className="flex items-center gap-8 text-sm">
              <div>
                <div className="text-2xl font-bold text-white">100+</div>
                <div className="text-gray-500">Components</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-gray-500">Templates</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">10k+</div>
                <div className="text-gray-500">Developers</div>
              </div>
            </div>
          </div>

          {/* Right Visual - Live Component Demo */}
          <div className="relative">
            {/* Main Preview Window */}
            <div className="relative bg-gradient-to-br from-zinc-900 to-black border border-zinc-700 rounded-3xl p-1 shadow-2xl">
              <div className="bg-black rounded-2xl overflow-hidden">
                {/* Browser Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-zinc-900 border-b border-zinc-700">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-xs text-gray-500 font-mono">
                    localhost:3000
                  </div>
                  <div className="w-4 h-4"></div>
                </div>

                {/* Live Component Display */}
                <div className="h-80 relative overflow-hidden bg-gradient-to-br from-zinc-950 to-black">
                  {/* Animated Grid Background */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:30px_30px] animate-pulse"></div>
                  </div>

                  <div className="relative z-10 p-4 h-full">
                    {/* Component Grid Showcase */}
                    <div className="grid grid-cols-2 gap-3 h-full">
                      {/* Top Left - Button Component */}
                      <div className="bg-zinc-900/50 rounded-lg p-3 border border-zinc-700/50 flex flex-col items-center justify-center hover:bg-zinc-800/50 transition-colors">
                        <div className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs py-1.5 px-3 rounded-md transition-colors cursor-pointer text-center">
                          Get Started
                        </div>
                        <div className="text-gray-400 text-xs mt-2">Button</div>
                      </div>

                      {/* Top Right - Card Component */}
                      <div className="bg-zinc-900/50 rounded-lg p-3 border border-zinc-700/50 hover:bg-zinc-800/50 transition-colors">
                        <div className="bg-black rounded-md p-2 border border-zinc-600">
                          <div className="w-full h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-sm mb-2"></div>
                          <div className="space-y-1">
                            <div className="h-1.5 bg-gray-600 rounded w-3/4"></div>
                            <div className="h-1.5 bg-gray-700 rounded w-1/2"></div>
                          </div>
                        </div>
                        <div className="text-gray-400 text-xs mt-1 text-center">
                          Card
                        </div>
                      </div>

                      {/* Bottom Left - Modal Component */}
                      <div className="bg-zinc-900/50 rounded-lg p-3 border border-zinc-700/50 flex flex-col items-center justify-center hover:bg-zinc-800/50 transition-colors relative">
                        <div className="w-full bg-black border border-zinc-600 rounded-md p-2 relative">
                          <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                          <div className="h-1.5 bg-gray-600 rounded w-2/3 mb-1"></div>
                          <div className="h-1 bg-gray-700 rounded w-1/2"></div>
                        </div>
                        <div className="text-gray-400 text-xs mt-2">Modal</div>
                      </div>

                      {/* Bottom Right - Current Component Showcase */}
                      <div
                        className={`bg-gradient-to-br ${components[currentComponent].color} p-0.5 rounded-lg transform transition-all duration-700 ${isAnimating ? "scale-95 opacity-70" : "scale-100 opacity-100"}`}
                      >
                        <div className="bg-black rounded-md p-3 h-full flex flex-col items-center justify-center">
                          <div className="text-2xl mb-1">
                            {components[currentComponent].preview}
                          </div>
                          <div className="text-white text-xs font-medium">
                            {components[currentComponent].name}
                          </div>
                          <div className="w-2 h-2 bg-white/30 rounded-full animate-ping mt-1"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Code Snippets */}
                  <div className="absolute top-4 right-4 bg-zinc-900/80 backdrop-blur-sm border border-zinc-700 rounded-lg p-2 text-xs font-mono text-green-400 animate-float">
                    &lt;Button /&gt;
                  </div>
                  <div
                    className="absolute bottom-4 left-4 bg-zinc-900/80 backdrop-blur-sm border border-zinc-700 rounded-lg p-2 text-xs font-mono text-blue-400 animate-float"
                    style={{ animationDelay: "2s" }}
                  >
                    &lt;Modal /&gt;
                  </div>
                  <div
                    className="absolute top-1/2 right-8 bg-zinc-900/80 backdrop-blur-sm border border-zinc-700 rounded-lg p-2 text-xs font-mono text-purple-400 animate-float"
                    style={{ animationDelay: "1s" }}
                  >
                    &lt;Card /&gt;
                  </div>
                </div>
              </div>

              {/* Component Navigation Dots */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
                {components.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentComponent(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentComponent
                        ? "bg-blue-500 w-8 shadow-lg shadow-blue-500/50"
                        : "bg-zinc-600 hover:bg-zinc-400"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-blue-500/30 to-transparent rounded-full blur-xl animate-pulse"></div>
            <div
              className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-br from-purple-500/30 to-transparent rounded-full blur-xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-10px) rotate(3deg);
          }
          66% {
            transform: translateY(5px) rotate(-3deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
