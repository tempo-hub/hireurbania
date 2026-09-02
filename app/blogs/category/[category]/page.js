import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOGS, getCategorySlug } from "../../../../lib/blogs";

export function generateStaticParams() {
  return [...new Set(BLOGS.map((blog) => getCategorySlug(blog.category)))].map(
    (category) => ({ category })
  );
}

export default async function BlogCategoryPage({ params }) {
  const { category } = await params;
  const blogs = BLOGS.filter((blog) => getCategorySlug(blog.category) === category);

  if (blogs.length === 0) notFound();

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <Link href="/blogs" className="text-sm font-bold text-blue-600 hover:underline">
          Back to all blogs
        </Link>
        <h1 className="mt-6 text-4xl font-black capitalize text-slate-900">
          {category.replace(/-/g, " ")} blogs
        </h1>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {blogs.map((blog) => (
            <article key={blog._id} className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-sm font-bold text-blue-600">{blog.category}</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-800">{blog.title}</h2>
              <p className="mt-3 leading-7 text-slate-500">{blog.description}</p>
              <Link href={`/blogs/${blog.slug}`} className="mt-5 inline-block font-bold text-blue-600 hover:underline">
                Read article
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
