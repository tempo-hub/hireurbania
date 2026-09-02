import { notFound } from "next/navigation";
import { connectDB, hasMongoConfig } from "@/lib/mongodb";
import Blog from "@/models/Blog";
import { getBlogBySlug } from "@/lib/blogs";
import Image from "next/image";

function getContentText(content) {
  if (Array.isArray(content)) {
    return content.join(" ");
  }

  if (typeof content === "string") {
    return content.replace(/<[^>]+>/g, " ");
  }

  return "";
}

function normalizeBlogContent(content) {
  if (Array.isArray(content)) {
    return content.map((paragraph) => `<p>${paragraph}</p>`).join("");
  }

  if (typeof content === "string") {
    return content;
  }

  return "";
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  let blog = getBlogBySlug(slug);

  if (hasMongoConfig()) {
    await connectDB();
    const mongoBlog = await Blog.findOne({ slug }).lean();
    if (mongoBlog) {
      blog = mongoBlog;
    }
  }

  if (!blog) {
    return {
      title: "Blog Not Found | Chiku Cabs",
    };
  }

  const description =
    blog.metaDescription ||
    getContentText(blog.content).slice(0, 160) ||
    blog.description;

  return {
    title: `${blog.title} | Chiku Cabs`,
    description,
    openGraph: {
      title: blog.title,
      description,
    },
    twitter: {
      title: blog.title,
      description,
      card: "summary_large_image",
    },
  };
}

export const dynamic = "force-dynamic";

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  let blog = getBlogBySlug(slug);

  if (hasMongoConfig()) {
    await connectDB();
    const mongoBlog = await Blog.findOne({ slug }).lean();
    if (mongoBlog) {
      blog = mongoBlog;
    }
  }

  if (!blog) {
    notFound();
  }

  const blogContent = normalizeBlogContent(blog.content);
  const createdAt = blog.createdAt || new Date().toISOString();

  return (
    <div className="bg-slate-50 min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        {blog.imageId && (
          <div className="relative w-full aspect-video bg-gray-100">
            <Image
              src={`/api/image/${blog.imageId.toString()}`}
              alt={blog.title}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 1024px"
              unoptimized
            />
          </div>
        )}

        <div className="p-6 md:p-10">
          <h1 className="text-3xl md:text-5xl font-black text-slate-800 leading-tight mb-4">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 mb-8 border-b border-slate-200 pb-5">
            <span>
              {new Date(createdAt).toLocaleDateString("en-IN")}
            </span>

            {blog.category && (
              <span className="bg-[#E8F0FE] text-[#0770E3] px-3 py-1 rounded-full font-semibold">
                {blog.category}
              </span>
            )}
          </div>

          <div
            className="blog-content max-w-none overflow-x-auto"
            dangerouslySetInnerHTML={{
              __html: blogContent,
            }}
          />
        </div>
      </div>
    </div>
  );
}
