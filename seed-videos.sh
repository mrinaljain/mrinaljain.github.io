#!/usr/bin/env bash
set -euo pipefail

API_BASE="${1:-http://localhost:3000}"
API_URL="$API_BASE/api/videos"

echo "Seeding test videos into: $API_URL"

post_video() {
  local payload="$1"
  curl -sS -X POST "$API_URL" \
    -H "Content-Type: application/json" \
    -d "$payload"
  echo ""
}


post_video '{
  "title": "React Performance Patterns",
  "description": "Testing featured slider card 2",
  "provider": "YOUTUBE",
  "providerId": "3JZ_D3ELwOQ",
  "thumbnailUrl": "https://i.ytimg.com/vi/3JZ_D3ELwOQ/hqdefault.jpg",
  "channelName": "Test Channel",
  "tags": ["react","performance"],
  "status": "published",
  "publishedAt": "2026-04-03T10:05:00.000Z",
  "durationSec": 312
}'

post_video '{
  "title": "Tailwind UI Cleanup Tips",
  "description": "Testing featured slider card 3",
  "provider": "YOUTUBE",
  "providerId": "9bZkp7q19f0",
  "thumbnailUrl": "https://i.ytimg.com/vi/9bZkp7q19f0/hqdefault.jpg",
  "channelName": "Design Lab",
  "tags": ["tailwind","ui"],
  "status": "published",
  "publishedAt": "2026-04-03T10:10:00.000Z",
  "durationSec": 188
}'

post_video '{
  "title": "Building Better Cards",
  "description": "Testing featured slider card 4",
  "provider": "YOUTUBE",
  "providerId": "L_jWHffIx5E",
  "thumbnailUrl": "https://i.ytimg.com/vi/L_jWHffIx5E/hqdefault.jpg",
  "channelName": "Design Lab",
  "tags": ["cards","ux"],
  "status": "published",
  "publishedAt": "2026-04-03T10:15:00.000Z",
  "durationSec": 274
}'

post_video '{
  "title": "Horizontal Slider UX Review",
  "description": "Testing featured slider card 5",
  "provider": "YOUTUBE",
  "providerId": "kJQP7kiw5Fk",
  "thumbnailUrl": "https://i.ytimg.com/vi/kJQP7kiw5Fk/hqdefault.jpg",
  "channelName": "UX Studio",
  "tags": ["slider","mobile"],
  "status": "published",
  "publishedAt": "2026-04-03T10:20:00.000Z",
  "durationSec": 221
}'

post_video '{
  "title": "Minimal Featured Section Layout",
  "description": "Testing featured slider card 6",
  "provider": "YOUTUBE",
  "providerId": "hTWKbfoikeg",
  "thumbnailUrl": "https://i.ytimg.com/vi/hTWKbfoikeg/hqdefault.jpg",
  "channelName": "UX Studio",
  "tags": ["minimal","featured"],
  "status": "published",
  "publishedAt": "2026-04-03T10:25:00.000Z",
  "durationSec": 199
}'

echo "Done. Inserted 6 videos."