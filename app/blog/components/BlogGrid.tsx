import { ArrowRight, Clock } from "lucide-react";
import { BLOG_POSTS } from "@/lib/constants";

export function BlogGrid() {
  const featured = BLOG_POSTS.filter((post) => post.featured);
  const regular = BLOG_POSTS.filter((post) => !post.featured);

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Featured posts */}
        <div className="mb-16 grid gap-8 lg:grid-cols-2">
          {featured.map((post) => (
            <article
              key={post.slug}
              className="group cursor-pointer rounded-2xl border border-gray-200 p-8 transition-all hover:border-blue-300 hover:shadow-lg"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                  {post.category}
                </span>
                <span className="text-xs text-gray-400">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600">
                {post.title}
              </h2>
              <p className="mt-3 text-gray-600">{post.description}</p>
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-gray-400">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{post.readTime}</span>
                </div>
                <span className="flex items-center gap-1 text-sm font-medium text-blue-600 group-hover:gap-2 transition-all">
                  Read more
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Regular posts */}
        <h2 className="mb-8 text-2xl font-bold text-gray-900">All articles</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {regular.map((post) => (
            <article
              key={post.slug}
              className="group cursor-pointer rounded-xl border border-gray-200 p-6 transition-all hover:border-blue-300 hover:shadow-md"
            >
              <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600">
                {post.category}
              </span>
              <h3 className="mt-4 text-lg font-bold text-gray-900 group-hover:text-blue-600">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                {post.description}
              </p>
              <div className="mt-4 flex items-center gap-3 text-xs text-gray-400">
                <span>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
