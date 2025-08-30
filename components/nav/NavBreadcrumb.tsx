export default function NavBreadcrumb() {
  const breadcrumbs = [
    { name: "Home", href: "#", current: false },
    { name: "Projects", href: "#", current: false },
    { name: "Web Development", href: "#", current: false },
    { name: "Dashboard", href: "#", current: true },
  ];

  const examples = [
    {
      title: "Simple Breadcrumb",
      items: [
        { name: "Home", href: "#" },
        { name: "Library", href: "#" },
        { name: "Data", href: "#", current: true },
      ],
    },
    {
      title: "With Icons",
      items: [
        { name: "🏠 Home", href: "#" },
        { name: "📁 Projects", href: "#" },
        { name: "📊 Analytics", href: "#", current: true },
      ],
    },
  ];

  return (
    <div className="p-8 w-full bg-white dark:bg-black">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
        Breadcrumb Navigation
      </h3>

      <div className="space-y-8">
        <div>
          <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Default Style
          </h4>
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              {breadcrumbs.map((item, index) => (
                <li key={item.name}>
                  <div className="flex items-center">
                    {index > 0 && (
                      <svg
                        className="flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-500 mr-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                    <a
                      href={item.href}
                      className={`text-sm font-medium transition-colors duration-200 ${
                        item.current
                          ? "text-gray-700 dark:text-gray-300"
                          : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                      }`}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  </div>
                </li>
              ))}
            </ol>
          </nav>
        </div>

        {examples.map((example, exampleIndex) => (
          <div key={exampleIndex}>
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              {example.title}
            </h4>
            <nav className="flex bg-gray-50 dark:bg-zinc-900 rounded-lg px-4 py-3">
              <ol className="flex items-center space-x-2">
                {example.items.map((item, index) => (
                  <li key={index} className="flex items-center">
                    {index > 0 && (
                      <span className="text-gray-400 dark:text-gray-500 mx-2">
                        /
                      </span>
                    )}
                    <a
                      href={item.href}
                      className={`text-sm transition-colors duration-200 ${
                        item.current
                          ? "text-gray-900 dark:text-white font-medium"
                          : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                      }`}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        ))}

        <div>
          <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Compact Style
          </h4>
          <nav className="text-sm text-gray-500 dark:text-gray-400">
            <span>You are here: </span>
            <span className="text-blue-600 dark:text-blue-400">Home</span>
            <span className="mx-2">›</span>
            <span className="text-blue-600 dark:text-blue-400">Projects</span>
            <span className="mx-2">›</span>
            <span className="text-gray-900 dark:text-white font-medium">
              Current Page
            </span>
          </nav>
        </div>
      </div>
    </div>
  );
}
