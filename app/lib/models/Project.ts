import mongoose, { Schema, Document } from "mongoose";

export interface IProject extends Document {
   name: string;
   command: string;
   description: string;
   stack: string[];
   githubUrl?: string;
   liveUrl?: string;
   featured: boolean;
   createdAt?: Date;
}

const ProjectSchema = new Schema<IProject>(
   {
      name: { type: String, required: true },
      command: { type: String, required: true },
      description: { type: String, required: true },
      stack: [{ type: String }],
      githubUrl: { type: String },
      liveUrl: { type: String },
      featured: { type: Boolean, default: false },
   },
   { timestamps: true }
);

export default mongoose.models.Project || mongoose.model<IProject>("Project", ProjectSchema);
