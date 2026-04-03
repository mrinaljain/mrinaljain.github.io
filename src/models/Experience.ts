import { model, models, Schema } from "mongoose";

const technologyKeyEnum = [
  "angular",
  "aws",
  "bootstrap",
  "css",
  "dart",
  "flutter",
  "git",
  "html5",
  "javascript",
  "nodejs",
  "react",
] as const;

const ExperienceSchema = new Schema(
  {
    company: { type: String, required: true, trim: true, index: true },
    slug: { type: String, required: true, unique: true, index: true },
    logo: { type: String, required: true },
    companyUrl: { type: String },
    designation: { type: String, required: true, trim: true },
    employmentType: { type: String },
    location: { type: String, required: true },
    yearLabel: { type: String, required: true },
    startDate: { type: Date, index: true },
    endDate: { type: Date, default: null },
    isCurrent: { type: Boolean, default: false },
    summary: { type: String },
    projects: { type: [String], default: [] },
    technologyKeys: {
      type: [String],
      enum: technologyKeyEnum,
      default: [],
    },
    order: { type: Number, default: 0, index: true },
    accentColor: { type: String },
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "published",
      index: true,
    },
    isFeatured: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const ExperienceModel =
  models.Experience || model("Experience", ExperienceSchema);