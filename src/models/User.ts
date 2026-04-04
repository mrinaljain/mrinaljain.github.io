import { model, models, Schema } from "mongoose";

const userTypeEnum = ["admin", "normal"] as const;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      index: true,
      trim: true,
      lowercase: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    displayName: {
      type: String,
      trim: true,
    },
    userType: {
      type: String,
      enum: userTypeEnum,
      default: "normal",
      index: true,
    },
    isActive: {
      type: Boolean,
      default: true,
      index: true,
    },
  },
  { timestamps: true }
);

export const UserModel = models.User || model("User", UserSchema);
