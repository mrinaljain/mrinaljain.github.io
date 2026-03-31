#!/bin/bash

# Dynamic Popup API Examples
# This script demonstrates how to create and manage popups via API

BASE_URL="http://localhost:3000/api/popups"

# Example 1: Create a simple welcome popup
echo "Creating welcome popup..."
curl -X POST $BASE_URL \
  -H "Content-Type: application/json" \
  -d '{
    "id": "welcome-popup",
    "content": {
      "title": "Welcome to My Portfolio!",
      "description": "Explore my latest projects and experience",
      "imageUrl": "https://via.placeholder.com/600x400?text=Welcome",
      "buttonAction": {
        "label": "Explore Projects",
        "url": "#projects",
        "target": "_self",
        "actionType": "link"
      },
      "backgroundColor": "#ffffff",
      "textColor": "#000000",
      "borderStyle": "rounded",
      "borderRadius": 12
    },
    "isActive": true,
    "displayFrequency": "once",
    "displayDelay": 1,
    "dismissibleAfter": null,
    "targetPages": ["/"],
    "priority": 1
  }'

echo -e "\n\n---\n\n"

# Example 2: Create a video popup
echo "Creating video popup..."
curl -X POST $BASE_URL \
  -H "Content-Type: application/json" \
  -d '{
    "id": "video-promo",
    "content": {
      "title": "Check Out My Latest Video!",
      "description": "See what I have been working on",
      "videoUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
      "videoProvider": "youtube",
      "videoDimensions": {
        "width": 560,
        "height": 315
      },
      "buttonAction": {
        "label": "Subscribe to Channel",
        "url": "https://www.youtube.com/@mrinaljain",
        "target": "_blank",
        "actionType": "link"
      },
      "backgroundColor": "#f8f9fa",
      "textColor": "#1a1a1a"
    },
    "isActive": true,
    "displayFrequency": "always",
    "displayDelay": 3,
    "dismissibleAfter": null,
    "targetPages": ["/"],
    "priority": 2
  }'

echo -e "\n\n---\n\n"

# Example 3: Create a time-limited campaign popup
echo "Creating campaign popup..."
curl -X POST $BASE_URL \
  -H "Content-Type: application/json" \
  -d '{
    "id": "spring-2024-campaign",
    "content": {
      "title": "Spring Portfolio Refresh!",
      "description": "Discover my new projects and updates",
      "imageUrl": "https://via.placeholder.com/600x400?text=Spring+Campaign",
      "buttonAction": {
        "label": "View New Work",
        "url": "/projects",
        "target": "_self",
        "actionType": "link"
      },
      "backgroundColor": "#f0f9ff",
      "textColor": "#1e40af",
      "borderStyle": "rounded",
      "borderRadius": 16
    },
    "isActive": true,
    "displayFrequency": "once",
    "displayDelay": 2,
    "dismissibleAfter": 30,
    "targetPages": ["/"],
    "priority": 1,
    "startDate": "2024-03-21T00:00:00Z",
    "endDate": "2024-03-31T23:59:59Z"
  }'

echo -e "\n\n---\n\n"

# Example 4: Create a popup with custom CSS animation
echo "Creating animated popup..."
curl -X POST $BASE_URL \
  -H "Content-Type: application/json" \
  -d '{
    "id": "animated-promo",
    "content": {
      "title": "Limited Time Offer",
      "description": "Available only this month!",
      "imageUrl": "https://via.placeholder.com/600x400?text=Special+Offer",
      "buttonAction": {
        "label": "Learn More",
        "url": "#offer",
        "target": "_self",
        "actionType": "link"
      },
      "backgroundColor": "#fff3cd",
      "textColor": "#856404",
      "borderStyle": "rounded",
      "borderRadius": 8
    },
    "isActive": true,
    "displayFrequency": "always",
    "displayDelay": 1,
    "dismissibleAfter": 25,
    "targetPages": ["/"],
    "priority": 3,
    "customCss": "@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: .5; } } .popup-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }"
  }'

echo -e "\n\n---\n\n"

# Example 5: Get popup data
echo "Fetching popup for homepage..."
curl -X GET "$BASE_URL?page=/" \
  -H "Content-Type: application/json"

echo -e "\n\n---\n\n"

# Example 6: Get specific popup
echo "Getting specific popup..."
curl -X GET "$BASE_URL/welcome-popup" \
  -H "Content-Type: application/json"

echo -e "\n\n---\n\n"

# Example 7: Update popup
echo "Updating popup..."
curl -X PUT "$BASE_URL/welcome-popup" \
  -H "Content-Type: application/json" \
  -d '{
    "content": {
      "title": "Welcome to My Updated Portfolio!",
      "description": "Check out my latest and greatest work"
    }
  }'

echo -e "\n\n---\n\n"

# Example 8: Track impression
echo "Tracking impression..."
curl -X POST "$BASE_URL/welcome-popup/analytics" \
  -H "Content-Type: application/json" \
  -d '{
    "eventType": "impression"
  }'

echo -e "\n\n---\n\n"

# Example 9: Track click
echo "Tracking click..."
curl -X POST "$BASE_URL/welcome-popup/analytics" \
  -H "Content-Type: application/json" \
  -d '{
    "eventType": "click"
  }'

echo -e "\n\n---\n\n"

# Example 10: Track dismissal
echo "Tracking dismissal..."
curl -X POST "$BASE_URL/welcome-popup/analytics" \
  -H "Content-Type: application/json" \
  -d '{
    "eventType": "dismissal"
  }'

echo -e "\n\n---\n\n"

# Example 11: Delete popup (optional)
# echo "Deleting popup..."
# curl -X DELETE "$BASE_URL/welcome-popup" \
#   -H "Content-Type: application/json"
