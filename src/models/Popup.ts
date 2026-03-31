import { Schema, models, model } from "mongoose";

const PopupSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    content: {
      title: {
        type: String,
        required: true,
        trim: true,
      },
      description: {
        type: String,
        trim: true,
      },
      imageUrl: {
        type: String,
      },
      videoUrl: {
        type: String,
      },
      videoProvider: {
        type: String,
        enum: ["youtube", "vimeo", "self-hosted"],
      },
      videoDimensions: {
        width: { type: Number },
        height: { type: Number },
      },
      buttonAction: {
        label: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
        target: {
          type: String,
          enum: ["_blank", "_self"],
          default: "_blank",
        },
        actionType: {
          type: String,
          enum: ["link", "modal", "custom"],
          default: "link",
        },
      },
      backgroundColor: {
        type: String,
        default: "#ffffff",
      },
      textColor: {
        type: String,
        default: "#000000",
      },
      borderStyle: {
        type: String,
        enum: ["rounded", "square"],
        default: "rounded",
      },
      borderRadius: {
        type: Number,
        default: 12,
      },
    },
    isActive: {
      type: Boolean,
      default: true,
      index: true,
    },
    displayFrequency: {
      type: String,
      enum: ["once", "always", "session"],
      default: "once",
    },
    dismissibleAfter: {
      type: Number,
      default: undefined, // in seconds
    },
    displayDelay: {
      type: Number,
      default: 0, // in seconds
    },
    targetPages: {
      type: [String],
      default: ["/"],
    },
    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },
    priority: {
      type: Number,
      default: 0,
      index: true,
    },
    customCss: {
      type: String,
    },
    analytics: {
      impressions: {
        type: Number,
        default: 0,
      },
      clicks: {
        type: Number,
        default: 0,
      },
      dismissals: {
        type: Number,
        default: 0,
      },
    },
  },
  { timestamps: true }
);

export const Popup = models.Popup || model("Popup", PopupSchema);
