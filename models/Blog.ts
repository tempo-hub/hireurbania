import mongoose from "mongoose";
import type { Document } from "mongoose";

interface IBlog extends Document {
  title: string;
  slug: string;
  category: string;
  description: string;
  keywords: string[];
  hashtags: string[];
  content: string;
  imageId: string;
  createdAt: Date;
  updatedAt: Date;
}

const BlogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true },
    category: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    keywords: { type: [String], default: [] },
    hashtags: { type: [String], default: [] },
    content: { type: String, required: true },
    imageId: { type: String, default: "" },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true },
);

const Blog = 
  (mongoose.models.Blog as mongoose.Model<IBlog> | undefined) || 
  mongoose.model<IBlog>("Blog", BlogSchema);

export default Blog;