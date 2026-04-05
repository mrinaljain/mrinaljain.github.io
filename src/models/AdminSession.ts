import { model, models, Schema } from "mongoose";

const AdminSessionSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    tokenHash: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    expiresAt: {
      type: Date,
      required: true,
      index: true,
      expires: 0,
    },
  },
  { timestamps: true }
);

export const AdminSessionModel =
  models.AdminSession || model("AdminSession", AdminSessionSchema);
