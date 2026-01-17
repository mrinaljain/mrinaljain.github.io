import mongoose, { Schema, models, model } from "mongoose";

export interface IVideo {
  title: string;
  url: string;
  thumbnailUrl?: string;
  description?: string;
  durationSec?: number;
  tags?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

const VideoSchema = new Schema<IVideo>(
  {
    title: { type: String, required: true, trim: true },
    url: { type: String, required: true },
    thumbnailUrl: { type: String },
    description: { type: String },
    durationSec: { type: Number },
    tags: [{ type: String }],
  },
  { timestamps: true }
);

// Prevent model overwrite on hot-reload in Next.js
const Video = models.Video || model<IVideo>("Video", VideoSchema);

export default Video;
