import { Schema, models, model } from "mongoose";

const CountrySchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, index: true },
    isoCode: { type: String, trim: true }, // e.g. "IN", "US"
    coordinates: {
      lat: { type: Number, required: true },
      lng: { type: Number, required: true },
    },
    description: { type: String },
    travelledAt: { type: Date },
    coverImage: { type: String },
    // zoom level used when centering the map on this country
    zoomLevel: { type: Number, default: 5 },
  },
  { timestamps: true }
);

export const CountryModel =
  models.Country || model("Country", CountrySchema);
