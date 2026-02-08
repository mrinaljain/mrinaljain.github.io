import { Schema, models, model } from "mongoose";

const VideoSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: {
      type: String,
      required: true,
      index: true
    },
    shortId: {
      type: String, // e.g. "7f3k2c"
      required: true,
      unique: true,
      index: true,
    },
    description: { type: String },
    provider: {
      type: String,
      enum: ["YOUTUBE", "SELF_HOSTED", "VIMEO"],
      required: true,
      index: true,
    },
    providerId: {
      type: String, // youtubeId, vimeoId, etc.
      index: true,
      unique: true
    },
    mp4Url: {
      type: String, // only for self-hosted
    },
    thumbnailUrl: { type: String, required: true },
    channelName: { type: String },
    tags: { type: [String], default: [] },
    publishedAt: { type: Date, index: true, },
    status: {
      type: String,
      enum: ["draft", "published", "unlisted"],
      default: "draft",
      index: true,
    },
    durationSec: { type: Number },
    isIndexable: {
      type: Boolean,
      default: true,
    },
    views: { type: Number, default: 0, },
  },
  { timestamps: true }
);

export const VideoModel = models.Video || model("Video", VideoSchema);
