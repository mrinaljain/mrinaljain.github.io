# Dynamic Popup Feature Documentation

## Overview

The Dynamic Popup feature allows you to manage promotional popups on your homepage through a backend API. Popups can display rich content (images, videos), buttons with configurable actions, and are fully manageable through the database.

## Features

✅ **Rich Content Support**
- Display images or videos (YouTube, Vimeo, or self-hosted)
- Customizable title and description
- Configurable button actions

✅ **Backend Manageable**
- Create, read, update, and delete popups via API
- Data stored in MongoDB
- No frontend code changes needed

✅ **Show/Hide Control**
- Control visibility via `isActive` flag
- Time-based display (start and end dates)
- Page-targeting (show on specific pages only)
- Priority system for multiple popups

✅ **Display Configuration**
- Display frequency: `once`, `always`, or `session`
- Display delay (show after X seconds)
- Auto-dismiss after X seconds
- Custom CSS support
- Customizable colors and border styles

✅ **Analytics**
- Track impressions (when popup is shown)
- Track clicks (button interactions)
- Track dismissals (when user closes)
- Real-time analytics data

✅ **Smart User Experience**
- Remembers dismissed popups (localStorage)
- Session-based dismissal
- Overlay to prevent background interaction
- Responsive design

## API Endpoints

### 1. Fetch Active Popup for a Page
```bash
GET /api/popups?page=/
```

**Query Parameters:**
- `page` (string): The page path to get popup for (default: "/")

**Response:**
```json
{
  "popup": {
    "_id": "...",
    "id": "popup-1",
    "content": {
      "title": "Welcome!",
      "description": "...",
      "imageUrl": "...",
      "videoUrl": "...",
      "buttonAction": {
        "label": "Learn More",
        "url": "https://example.com",
        "target": "_blank",
        "actionType": "link"
      },
      "backgroundColor": "#ffffff",
      "textColor": "#000000",
      "borderStyle": "rounded",
      "borderRadius": 12
    },
    "isActive": true,
    "displayFrequency": "once",
    "displayDelay": 2,
    "dismissibleAfter": 30,
    "targetPages": ["/"],
    "priority": 1,
    "analytics": {
      "impressions": 5,
      "clicks": 2,
      "dismissals": 3
    },
    "createdAt": "2024-03-31T10:00:00Z",
    "updatedAt": "2024-03-31T10:15:00Z"
  },
  "showPopup": true
}
```

### 2. Create a New Popup
```bash
POST /api/popups
Content-Type: application/json

{
  "id": "popup-welcome",
  "content": {
    "title": "Welcome to My Portfolio!",
    "description": "Check out my latest projects",
    "imageUrl": "https://example.com/image.jpg",
    "buttonAction": {
      "label": "View Projects",
      "url": "https://example.com/projects",
      "target": "_blank",
      "actionType": "link"
    },
    "backgroundColor": "#ffffff",
    "textColor": "#000000",
    "borderStyle": "rounded",
    "borderRadius": 12
  },
  "isActive": true,
  "displayFrequency": "once",
  "displayDelay": 2,
  "dismissibleAfter": null,
  "targetPages": ["/"],
  "priority": 1,
  "startDate": "2024-03-31T00:00:00Z",
  "endDate": "2024-04-07T23:59:59Z"
}
```

### 3. Get Specific Popup
```bash
GET /api/popups/popup-welcome
```

### 4. Update Popup
```bash
PUT /api/popups/popup-welcome
Content-Type: application/json

{
  "content": {
    "title": "Updated Title"
  },
  "isActive": false
}
```

### 5. Delete Popup
```bash
DELETE /api/popups/popup-welcome
```

### 6. Track Analytics
```bash
POST /api/popups/popup-welcome/analytics
Content-Type: application/json

{
  "eventType": "impression" // or "click" or "dismissal"
}
```

## Database Schema

### Popup Model (MongoDB)

```typescript
{
  _id: ObjectId,
  id: String (unique, indexed),
  content: {
    title: String (required),
    description: String,
    imageUrl: String,
    videoUrl: String,
    videoProvider: "youtube" | "vimeo" | "self-hosted",
    videoDimensions: {
      width: Number,
      height: Number
    },
    buttonAction: {
      label: String,
      url: String,
      target: "_blank" | "_self",
      actionType: "link" | "modal" | "custom"
    },
    backgroundColor: String (default: #ffffff),
    textColor: String (default: #000000),
    borderStyle: "rounded" | "square",
    borderRadius: Number (default: 12)
  },
  isActive: Boolean (default: true, indexed),
  displayFrequency: "once" | "always" | "session" (default: "once"),
  dismissibleAfter: Number (seconds),
  displayDelay: Number (seconds, default: 0),
  targetPages: [String] (default: ["/"]),
  startDate: Date,
  endDate: Date,
  priority: Number (default: 0, indexed),
  customCss: String,
  analytics: {
    impressions: Number,
    clicks: Number,
    dismissals: Number
  },
  createdAt: Timestamp,
  updatedAt: Timestamp
}
```

## Usage Examples

### Example 1: Create a Simple Welcome Popup

```javascript
const popupData = {
  id: "welcome-popup",
  content: {
    title: "Welcome to My Portfolio!",
    description: "Explore my projects and experience",
    imageUrl: "https://example.com/welcome.jpg",
    buttonAction: {
      label: "Get Started",
      url: "#projects",
      target: "_self",
      actionType: "link"
    }
  },
  isActive: true,
  displayFrequency: "once",
  displayDelay: 1,
  dismissibleAfter: null,
  targetPages: ["/"]
};

fetch("/api/popups", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(popupData)
});
```

### Example 2: Create a Video Popup with Auto-Dismiss

```javascript
const popupData = {
  id: "video-promo",
  content: {
    title: "Check Out My Latest Video!",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
    videoProvider: "youtube",
    videoDimensions: {
      width: 560,
      height: 315
    },
    buttonAction: {
      label: "Subscribe",
      url: "https://youtube.com/channel/...",
      target: "_blank",
      actionType: "link"
    }
  },
  isActive: true,
  displayFrequency: "always",
  displayDelay: 2,
  dismissibleAfter: 20, // Auto-dismiss after 20 seconds
  targetPages: ["/"],
  priority: 2
};

fetch("/api/popups", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(popupData)
});
```

### Example 3: Time-Limited Campaign Popup

```javascript
const popupData = {
  id: "spring-campaign",
  content: {
    title: "Spring Portfolio Refresh!",
    description: "View my new projects",
    imageUrl: "https://example.com/spring-promo.jpg",
    buttonAction: {
      label: "Explore New Work",
      url: "/projects",
      target: "_self",
      actionType: "link"
    },
    backgroundColor: "#f0f9ff",
    textColor: "#1e40af"
  },
  isActive: true,
  displayFrequency: "once",
  targetPages: ["/"],
  startDate: new Date("2024-03-21"),
  endDate: new Date("2024-03-28"),
  priority: 1
};

fetch("/api/popups", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(popupData)
});
```

## Frontend Integration

The popup is automatically rendered on the homepage via the `<DynamicPopup />` component. You can add it to other pages by importing and using it:

```typescript
import DynamicPopup from "@/components/DynamicPopup";

export default function YourPage() {
  return (
    <>
      <DynamicPopup page="/your-page" />
      {/* Your page content */}
    </>
  );
}
```

**Props:**
- `page` (string, optional): The page path to fetch popup for (default: "/")

## Client-Side Storage

The component uses `localStorage` to remember dismissed popups:
- Key: `popup_dismissed_{popupId}` - stores if popup was dismissed
- Key: `popup_impression_{popupId}` - tracks if impression was recorded

## Display Frequency Behavior

| Frequency | Behavior |
|-----------|----------|
| `once` | Shows once per browser, then remembers dismissal |
| `always` | Shows every time, regardless of previous dismissals |
| `session` | Shows once per browser session (cleared when tab closes) |

## Customization Options

### Custom CSS
Use the `customCss` field to add custom styles:

```javascript
{
  ...popupData,
  customCss: `
    .popup-custom {
      animation: slideIn 0.3s ease-out;
    }
    @keyframes slideIn {
      from { transform: scale(0.9); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }
  `
}
```

### Button Actions
Currently supported action types:
- **link**: Opens URL in new/same tab
- **modal**: Can be extended to open custom modals
- **custom**: Can be extended for custom handlers

## Best Practices

1. **Always set an ID**: Use unique, descriptive IDs (e.g., "spring-campaign", "video-promo")
2. **Use Priority**: Higher priority popups show first if multiple are active
3. **Set Time Limits**: Use `startDate` and `endDate` for time-limited campaigns
4. **Test Display Frequency**: Clear localStorage to test "once" frequency behavior
5. **Monitor Analytics**: Track impressions, clicks, and dismissals to measure effectiveness
6. **Clear Messaging**: Keep titles and descriptions concise and compelling
7. **Page Targeting**: Only show popups where relevant using `targetPages`

## Troubleshooting

**Popup not showing?**
1. Check `isActive` is true
2. Verify `targetPages` includes current page
3. Check browser localStorage hasn't saved a dismissal
4. Verify `startDate` and `endDate` are correct for current time

**Analytics not updating?**
1. Check network tab in DevTools for API calls
2. Verify MongoDB connection works
3. Check API response for errors

**Styling issues?**
1. Use `backgroundColor`, `textColor`, and `borderStyle` for basic styling
2. Use `customCss` for advanced styling
3. Component uses Tailwind CSS classes by default

## Environment Variables

Ensure your `.env.local` has:
```
MONGODB_URI=your_mongodb_connection_string
MONGODB_DB_NAME=your_database_name (optional)
```

## Files Created

- `src/types/popup.ts` - TypeScript types and interfaces
- `src/models/Popup.ts` - Mongoose model definition
- `src/app/api/popups/route.ts` - GET and POST popups
- `src/app/api/popups/[id]/route.ts` - GET, PUT, DELETE specific popup
- `src/app/api/popups/[id]/analytics/route.ts` - Track analytics
- `src/components/DynamicPopup.tsx` - React component
- Updated `src/app/page.tsx` - Added popup to homepage

## Next Steps

1. Test the popup creation via the API
2. Verify MongoDB connection and data storage
3. Create a simple admin panel for managing popups
4. Add authentication to the API endpoints (recommended)
5. Extend action types for custom behaviors
6. Create more popup variations for testing
