import { NextResponse } from "next/server";
import { connectDB, hasMongoConfig } from "@/lib/mongodb";
import Blog from "@/models/Blog";
import { BLOGS } from "@/lib/blogs";

function normalizeList(value: unknown): string[] {
  if (Array.isArray(value)) return value.map((item) => String(item).trim()).filter(Boolean);

  if (typeof value === "string") {
    return value
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return [];
}

export async function POST(req: Request) {
  try {
    if (!hasMongoConfig()) {
      return NextResponse.json(
        {
          success: false,
          message: "MongoDB is not configured. Add MONGODB_URI to .env.local.",
        },
        { status: 503 },
      );
    }

    await connectDB();

    const body = await req.json();
    const title = String(body.title || "").trim();
    const slug = String(body.slug || "").trim();
    const category = String(body.category || "").trim();
    const description = String(body.description || "").trim();
    const content = String(body.content || "");

    if (!title || !slug || !category || !description || !content) {
      return NextResponse.json(
        { success: false, message: "Missing required blog fields" },
        { status: 400 },
      );
    }

    const blog = await Blog.create({
      title,
      slug,
      category,
      description,
      keywords: normalizeList(body.keywords),
      hashtags: normalizeList(body.hashtags),
      content,
      imageId: body.imageId ? String(body.imageId) : "",
    });

    return NextResponse.json({ success: true, blog }, { status: 201 });
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : "Failed to create blog";

    console.error("Error creating blog:", err);
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}

export async function GET() {
  try {
    console.log("GET /api/blogs - Starting request");
    
    if (!hasMongoConfig()) {
      console.log("MongoDB not configured, returning fallback BLOGS");
      return NextResponse.json({ success: true, blogs: BLOGS }, { status: 200 });
    }

    console.log("Connecting to MongoDB...");
    await connectDB();
    console.log("Connected to MongoDB successfully");

    console.log("Querying blogs from database...");
    const blogs = await Blog.find().sort({ createdAt: -1 }).lean();
    console.log(`Found ${blogs.length} blogs`);

    return NextResponse.json({ success: true, blogs }, { status: 200 });
  } catch (err: unknown) {
    let errorMessage = "Failed to load blogs";
    let errorStack = "";

    if (err instanceof Error) {
      errorMessage = err.message;
      errorStack = err.stack || "";
    } else if (typeof err === "object" && err !== null) {
      errorMessage = JSON.stringify(err);
    } else {
      errorMessage = String(err);
    }

    console.error("Error loading blogs:", errorMessage);
    if (errorStack) console.error("Stack trace:", errorStack);

    return NextResponse.json({ success: false, message: errorMessage }, { status: 500 });
  }
}
