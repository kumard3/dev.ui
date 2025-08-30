import { useState, useRef, useEffect } from "react";

export default function NavDropdown() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const productsRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        productsRef.current &&
        !productsRef.current.contains(event.target as Node)
      ) {
        setIsProductsOpen(false);
      }
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target as Node)
      ) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const products = [
    {
      name: "Analytics",
      description: "Get insights into your data",
      href: "#",
    },
    { name: "Automation", description: "Streamline your workflow", href: "#" },
    { name: "Reports", description: "Generate detailed reports", href: "#" },
    { name: "Integrations", description: "Connect with your tools", href: "#" },
  ];

  const userMenuItems = [
    { name: "Your Profile", href: "#" },
    { name: "Account Settings", href: "#" },
    { name: "Billing", href: "#" },
    { name: "Team Settings", href: "#" },
    { name: "Sign Out", href: "#" },
  ];

  return (
    <div className="p-8 w-full bg-white dark:bg-black">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
        Dropdown Navigation
      </h3>

      <nav className="bg-white dark:bg-black border border-gray-200 dark:border-zinc-800 rounded-lg shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center space-x-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Brand
              </h2>

              <div className="hidden md:flex items-center space-x-8">
                <a
                  href="#"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Home
                </a>

                <div className="relative" ref={productsRef}>
                  <button
                    onClick={() => setIsProductsOpen(!isProductsOpen)}
                    className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    Products
                    <svg
                      className={`w-4 h-4 transform transition-transform ${isProductsOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {isProductsOpen && (
                    <div className="absolute top-full left-0 mt-2 w-80 bg-white dark:bg-zinc-800 rounded-lg shadow-lg border border-gray-200 dark:border-zinc-700 z-50">
                      <div className="p-4">
                        <div className="grid gap-4">
                          {products.map((product) => (
                            <a
                              key={product.name}
                              href={product.href}
                              className="flex flex-col p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-zinc-700 transition-colors"
                            >
                              <div className="text-sm font-medium text-gray-900 dark:text-white">
                                {product.name}
                              </div>
                              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                {product.description}
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <a
                  href="#"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="hidden md:block px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                Sign In
              </button>

              <div className="relative" ref={userMenuRef}>
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors"
                >
                  <img
                    src="https://picsum.photos/200?random=41"
                    alt="User avatar"
                    className="w-8 h-8 rounded-full"
                  />
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isUserMenuOpen && (
                  <div className="absolute right-0 top-full mt-2 w-56 bg-white dark:bg-zinc-800 rounded-lg shadow-lg border border-gray-200 dark:border-zinc-700 z-50">
                    <div className="p-2">
                      {userMenuItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-700 rounded-md transition-colors"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
