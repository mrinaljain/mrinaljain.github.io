import { Schema, models, model } from "mongoose";

const VideoSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String },
    youtubeId: { type: String, required: true, unique: true, index: true },
    thumbnailUrl: { type: String, required: true },
    channelName: { type: String },
    tags: { type: [String], default: [] },
    publishedAt: { type: Date },
    durationSec: { type: Number },
    views: { type: Number },
  },
  { timestamps: true }
);

export const VideoModel = models.Video || model("Video", VideoSchema);
