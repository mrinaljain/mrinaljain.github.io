import mongoose, { Schema, Document } from "mongoose";

export interface IProject extends Document {
   name: string;
   slug: string;
   description: string;
   tags: string[];
   imageUrl: string;
   githubUrl?: string;
   liveUrl?: string;
   featured: boolean;
   order: number;
   createdAt?: Date;
   updatedAt?: Date;
}

const ProjectSchema = new Schema<IProject>(
   {
      name: { type: String, required: true, trim: true },
      slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
      description: { type: String, required: true, trim: true },
      tags: [{ type: String }],
      imageUrl: { type: String, required: true, trim: true },
      githubUrl: { type: String },
      liveUrl: { type: String },
      featured: { type: Boolean, default: false },
      order: { type: Number, default: 0 },
   },
   { timestamps: true }
);

export default mongoose.models.Project || mongoose.model<IProject>("Project", ProjectSchema);
