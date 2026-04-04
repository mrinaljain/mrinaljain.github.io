# Cloudinary Media Upload Integration

This guide explains how to set up and use the Cloudinary media upload feature in the admin dashboard.

## Setup Instructions

### 1. Get Cloudinary Credentials

1. Sign up for a free account at [cloudinary.com](https://cloudinary.com/users/register_free)
2. Go to [cloudinary.com/console/dashboard](https://cloudinary.com/console/dashboard)
3. Copy your **Cloud Name** from the dashboard

### 2. Configure Environment Variables

Add the following to your `.env.local` file:

```env
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
NEXT_PUBLIC_CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=your_upload_preset
```

#### Getting Your Credentials

**Cloud Name:**
- Found on your [Cloudinary Dashboard](https://cloudinary.com/console/dashboard)

**API Key & Secret:**
- Go to Settings > API Keys in your Cloudinary account
- Copy the API Key and API Secret

**Upload Preset (for unsigned uploads):**
1. Go to Settings > Upload > Upload Presets
2. Create a new unsigned upload preset or use an existing one
3. Copy the preset name to `.env.local`

### 3. Restart Development Server

```bash
npm run dev
```

## Using the Media Upload Feature

### Access Media Upload Tab

1. Go to `/admin/dashboard`
2. Click the **"Media Upload"** tab (🖼️ icon)

### Upload Files

1. Click **"Choose Image or Video"** button
2. Select an image (JPG, PNG, GIF, WebP, etc.) or video (MP4, WebM, etc.)
3. The file uploads automatically to Cloudinary
4. See upload status and file details in the list below

### What You Can Do With Uploads

#### Copy URL
- Click **"Copy URL"** to get the Cloudinary CDN URL for the file
- Use this URL anywhere in your app for optimized delivery

#### File Information
- See image dimensions, file size, format
- Video files show format and size

#### Remove from List
- Click **"Remove"** to delete from the local list
- (This does NOT delete from Cloudinary - use Cloudinary dashboard for that)

### Debug Information

The upload component displays raw upload response data, which includes:

```json
{
  "public_id": "folder/filename",
  "secure_url": "https://res.cloudinary.com/...",
  "resource_type": "image",
  "type": "upload",
  "width": 1920,
  "height": 1080,
  "format": "jpg",
  "bytes": 123456,
  "created_at": "2026-04-04T10:30:00Z"
}
```

## API Integration

### Save Upload Metadata to Database

An API route is ready at `/api/admin/media/upload`:

**POST - Save media metadata:**
```typescript
const response = await fetch("/api/admin/media/upload", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    public_id: "folder/filename",
    secure_url: "https://res.cloudinary.com/...",
    resource_type: "image",
    type: "image",
    width: 1920,
    height: 1080,
    format: "jpg",
    bytes: 123456,
    created_at: "2026-04-04T10:30:00Z",
  }),
});
```

**GET - Retrieve all uploaded media:**
```typescript
const response = await fetch("/api/admin/media/upload");
const data = await response.json();
```

### Database Integration (TODO)

The API route includes TODO comments for saving to your MongoDB database. You can:

1. Create a Mongoose schema for media:

```typescript
// src/models/Media.ts
const mediaSchema = new Schema({
  public_id: String,
  secure_url: String,
  resource_type: String,
  type: String,
  width: Number,
  height: Number,
  format: String,
  bytes: Number,
  uploadedBy: Schema.Types.ObjectId,
  uploadedAt: Date,
});
```

2. Update the API route to save/fetch from database
3. Update `MediaUploadTab.tsx` to fetch previously uploaded media on mount

## Advanced Features

### Image Transformations

Once files are in Cloudinary, you can apply transformations via URL parameters:

```
// Resize image
https://res.cloudinary.com/cloud/image/upload/w_800/public_id

// Auto-crop to face
https://res.cloudinary.com/cloud/image/upload/g_face,c_thumb,w_500/public_id

// Quality optimization
https://res.cloudinary.com/cloud/image/upload/q_auto:good/public_id
```

Use the [next-cloudinary CldImage component](https://next-cloudinary.spacejelly.dev/cldimage/basic-usage) for easier transformations.

### Video Streaming

Videos uploaded to Cloudinary get automatic:
- Adaptive bitrate streaming
- Format optimization per browser
- Efficient delivery via CDN

Use [CldVideoPlayer](https://next-cloudinary.spacejelly.dev/cldvideoplayer/basic-usage) for playback.

### Signed Uploads (Restricts to Admin)

For production, enable signed uploads in the MediaUploadTab component:

```typescript
<CldUploadWidget
  signedRequest={true}
  signature={generatedFromServer}
  timestamp={timestamp}
/>
```

Generate signatures server-side using `CLOUDINARY_API_SECRET`.

## Troubleshooting

### "Configuration Required" Message

**Problem:** Widget shows configuration error
**Solution:** Ensure `.env.local` has `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` and restart dev server

### Upload Fails

1. Check browser console for error messages
2. Verify upload preset exists and is set to "Unsigned"
3. Check Cloudinary dashboard for upload quota/restrictions

### Image Not Showing

1. Verify `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` is correct
2. Check that `public_id` is correct in URL
3. Ensure image is not in a private folder

## Resources

- [Cloudinary Next.js Guide](https://cloudinary.com/guides/front-end-development/integrating-cloudinary-with-next-js)
- [Next Cloudinary Docs](https://next-cloudinary.spacejelly.dev/)
- [Cloudinary Upload Widget Docs](https://cloudinary.com/documentation/upload_widget)

## File Structure

```
src/
├── components/admin/
│   ├── MediaUploadTab.tsx          # Upload UI component
│   └── AdminDashboard.tsx          # Dashboard with tabs
├── app/api/admin/media/
│   └── upload/route.ts             # API for saving metadata
└── env.local                       # Cloudinary credentials
```
