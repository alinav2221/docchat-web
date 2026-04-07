import { FOOTER } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Subscribe section */}
        <div className="mb-12 rounded-xl bg-gray-50 p-8">
          <div className="max-w-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Get updates
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Stay informed about new features and product updates.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button className="rounded-lg bg-blue-600 text-white px-4 py-2 text-sm font-medium hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer columns */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {FOOTER.columns.map((column) => (
            <div key={column.title}>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-gray-600">{FOOTER.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
