import { Schema, models, model } from "mongoose";

const PhotoSchema = new Schema({
  url: { type: String, required: true },
  caption: { type: String },
  takenAt: { type: Date },
});

const CitySchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, index: true },
    countrySlug: { type: String, required: true, index: true },
    countryName: { type: String, required: true },
    coordinates: {
      lat: { type: Number, required: true },
      lng: { type: Number, required: true },
    },
    description: { type: String },
    travelledAt: { type: Date },
    coverImage: { type: String },
    photos: { type: [PhotoSchema], default: [] },
  },
  { timestamps: true }
);

export const CityModel = models.City || model("City", CitySchema);
