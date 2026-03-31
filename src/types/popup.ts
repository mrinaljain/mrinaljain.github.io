export interface PopupButtonAction {
  label: string;
  url: string;
  target?: "_blank" | "_self";
  actionType?: "link" | "modal" | "custom";
}

export interface PopupContent {
  title: string;
  description?: string;
  imageUrl?: string;
  videoUrl?: string;
  videoProvider?: "youtube" | "vimeo" | "self-hosted";
  videoDimensions?: {
    width: number;
    height: number;
  };
  buttonAction?: PopupButtonAction;
  backgroundColor?: string;
  textColor?: string;
  borderStyle?: "rounded" | "square";
  borderRadius?: number;
  customCss?: string;
}

export interface PopupConfig {
  _id?: string;
  id: string;
  content: PopupContent;
  isActive: boolean;
  displayFrequency?: "once" | "always" | "session";
  dismissibleAfter?: number; // seconds
  displayDelay?: number; // delay before showing in seconds
  targetPages?: string[]; // which pages to show on (e.g., ["/", "/resume"])
  startDate?: Date;
  endDate?: Date;
  priority?: number; // higher priority shows first
  customCss?: string;
  analytics?: {
    impressions: number;
    clicks: number;
    dismissals: number;
  };
  createdAt?: Date;
  updatedAt?: Date;
}

export interface PopupResponse {
  popup: PopupConfig | null;
  showPopup: boolean;
}
