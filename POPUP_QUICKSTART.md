# Dynamic Popup - Quick Start Guide

## 🚀 Getting Started in 5 Minutes

### Step 1: Verify Environment
Make sure your `.env.local` has MongoDB configuration:
```
MONGODB_URI=your_mongodb_connection_string
MONGODB_DB_NAME=your_database_name (optional)
```

### Step 2: Start Your Dev Server
```bash
npm run dev
# Server runs on http://localhost:3000
```

### Step 3: Create Your First Popup

#### Option A: Using curl (Recommended for quick testing)
```bash
curl -X POST http://localhost:3000/api/popups \
  -H "Content-Type: application/json" \
  -d '{
    "id": "welcome-test",
    "content": {
      "title": "Welcome!",
      "description": "This is my first popup",
      "imageUrl": "https://via.placeholder.com/600x400?text=Welcome",
      "buttonAction": {
        "label": "Learn More",
        "url": "https://github.com",
        "target": "_blank"
      }
    },
    "isActive": true,
    "displayFrequency": "always",
    "displayDelay": 1,
    "targetPages": ["/"]
  }'
```

#### Option B: Using JavaScript (Node.js)
```javascript
const popupData = {
  id: "welcome-test",
  content: {
    title: "Welcome!",
    description: "This is my first popup",
    imageUrl: "https://via.placeholder.com/600x400?text=Welcome",
    buttonAction: {
      label: "Learn More",
      url: "https://github.com",
      target: "_blank"
    }
  },
  isActive: true,
  displayFrequency: "always",
  displayDelay: 1,
  targetPages: ["/"]
};

fetch("http://localhost:3000/api/popups", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(popupData)
})
  .then(res => res.json())
  .then(data => console.log("Popup created:", data))
  .catch(err => console.error("Error:", err));
```

### Step 4: View Your Homepage
Navigate to [http://localhost:3000](http://localhost:3000) in your browser

After 1 second (displayDelay), your popup should appear with:
- Title: "Welcome!"
- Image
- Button labeled "Learn More"
- Close button (X)
- Semi-transparent overlay

### Step 5: Interact with Popup
- **Click Button**: Opens GitHub in a new tab (viewed in console)
- **Click Close Button**: Dismisses popup (analytics tracked)
- **Click Overlay**: Also dismisses popup

### Step 6: Check Analytics
```bash
curl -X GET http://localhost:3000/api/popups/welcome-test
```

Look for the `analytics` object showing:
```json
{
  "impressions": 1,
  "clicks": 1,
  "dismissals": 1
}
```

## 🎨 Try Different Styles

### With Custom Colors
```bash
curl -X POST http://localhost:3000/api/popups \
  -H "Content-Type: application/json" \
  -d '{
    "id": "colored-popup",
    "content": {
      "title": "Styled Popup",
      "imageUrl": "https://via.placeholder.com/600x400?text=Color",
      "buttonAction": {
        "label": "Click Me",
        "url": "#",
        "target": "_self"
      },
      "backgroundColor": "#f0f9ff",
      "textColor": "#1e40af",
      "borderStyle": "rounded",
      "borderRadius": 16
    },
    "isActive": true,
    "displayFrequency": "always",
    "targetPages": ["/"]
  }'
```

### With Video (YouTube)
```bash
curl -X POST http://localhost:3000/api/popups \
  -H "Content-Type: application/json" \
  -d '{
    "id": "video-popup",
    "content": {
      "title": "Check This Video",
      "videoUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
      "videoProvider": "youtube",
      "videoDimensions": {
        "width": 560,
        "height": 315
      },
      "buttonAction": {
        "label": "Subscribe",
        "url": "https://youtube.com",
        "target": "_blank"
      }
    },
    "isActive": true,
    "displayFrequency": "always",
    "targetPages": ["/"]
  }'
```

### With Auto-Dismiss
```bash
curl -X POST http://localhost:3000/api/popups \
  -H "Content-Type: application/json" \
  -d '{
    "id": "auto-dismiss-popup",
    "content": {
      "title": "This popup closes automatically!",
      "imageUrl": "https://via.placeholder.com/600x400?text=Auto-Dismiss",
      "buttonAction": {
        "label": "Got it!",
        "url": "#",
        "target": "_self"
      }
    },
    "isActive": true,
    "displayFrequency": "always",
    "displayDelay": 2,
    "dismissibleAfter": 8,
    "targetPages": ["/"]
  }'
```

## 📋 Useful Commands

### Get all popups for homepage
```bash
curl -X GET http://localhost:3000/api/popups?page=/
```

### Get specific popup
```bash
curl -X GET http://localhost:3000/api/popups/welcome-test
```

### Update popup
```bash
curl -X PUT http://localhost:3000/api/popups/welcome-test \
  -H "Content-Type: application/json" \
  -d '{
    "content": {
      "title": "Updated Title"
    }
  }'
```

### Deactivate popup (hide it)
```bash
curl -X PUT http://localhost:3000/api/popups/welcome-test \
  -H "Content-Type: application/json" \
  -d '{
    "isActive": false
  }'
```

### Delete popup
```bash
curl -X DELETE http://localhost:3000/api/popups/welcome-test
```

## 🧪 Testing Display Frequency

### Test "once" Frequency
1. Create popup with `"displayFrequency": "once"`
2. Visit homepage → popup shows
3. Dismiss popup
4. Refresh page → popup DOES NOT show (saved in localStorage)
5. Open DevTools: `localStorage.getItem('popup_dismissed_welcome-test')` → returns true
6. Clear: `localStorage.clear()`
7. Refresh → popup shows again

### Test "always" Frequency
1. Create popup with `"displayFrequency": "always"`
2. Visit homepage → popup shows
3. Dismiss popup → popup closes but...
4. Reload page → popup shows again (no localStorage restriction)

### Test "session" Frequency
1. Create popup with `"displayFrequency": "session"`
2. Visit homepage → popup shows
3. Dismiss popup
4. Refresh page in same tab → popup does NOT show
5. Close tab completely
6. Open new tab and visit homepage → popup shows again

## 🎯 Browser DevTools Tips

### Check Network Requests
Open DevTools → Network tab and look for:
- `GET /api/popups?page=/` - Fetch popup data
- `POST /api/popups/{id}/analytics` - Track events

### Check Local Storage
DevTools → Application → Storage → Local Storage → http://localhost:3000
Look for keys like:
- `popup_dismissed_welcome-test`
- `popup_impression_welcome-test`

### Check Console Logs
DevTools → Console
Angular shows fetch success/error messages and tracking details

## 🔍 Common Issues & Solutions

### Popup Not Showing?
1. Check `isActive: true`
2. Check `targetPages` includes "/"
3. Check `startDate` and `endDate` (if set)
4. Check localStorage hasn't marked it as dismissed
5. Open DevTools → check Network tab for API response

### Analytics Not Tracking?
1. Check Network tab → POST to `/api/popups/{id}/analytics`
2. Verify MongoDB connection works (`MONGODB_URI`)
3. Check for errors in browser console

### Popup Styling Wrong?
1. Use `backgroundColor` and `textColor` for basic colors
2. Use `customCss` for advanced styling
3. Check `borderStyle` (rounded vs square)
4. Check `borderRadius` value

## 📚 Next Steps

1. **Read Full Documentation**: Check [POPUP_DOCUMENTATION.md](../POPUP_DOCUMENTATION.md)
2. **Create Admin Panel**: Build a UI to manage popups without curl
3. **Add Authentication**: Secure the API endpoints
4. **Track More Events**: Add page exit, time on page, etc.
5. **Create More Pages**: Add popups to `/resume`, `/post`, `/videos`

## 💡 Tips

- Use `displayDelay` to let page load before showing
- Use `dismissibleAfter` to auto-close after X seconds
- Use `priority` to control which popup shows if multiple are active
- Use `startDate` and `endDate` for time-limited campaigns
- Use `customCss` for animations and advanced styling
- Test different frequencies to find what works best
- Monitor analytics to improve popup effectiveness
