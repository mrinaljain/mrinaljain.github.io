# Cloudinary Integration - Quick Start

## ✅ What's Been Set Up

✓ `next-cloudinary` package installed  
✓ Environment variables added to `.env.local`  
✓ Media upload component created  
✓ Admin dashboard with tabs  
✓ API route for saving metadata  
✓ TypeScript types properly configured  

## 🚀 Getting Started (3 Steps)

### Step 1: Get Cloudinary Credentials
1. Sign up free: https://cloudinary.com/users/register_free
2. Go to Dashboard: https://cloudinary.com/console/dashboard
3. Copy your **Cloud Name**

### Step 2: Create Upload Preset
1. Settings → Upload → Upload Presets
2. Create or use existing **unsigned** preset
3. Copy the preset name

### Step 3: Update `.env.local`
```env
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
NEXT_PUBLIC_CLOUDINARY_API_KEY=your_api_key (optional)
CLOUDINARY_API_SECRET=your_api_secret (optional)
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=your_preset_name
```

Then restart: `npm run dev`

## 📁 File Structure

```
New files created:
├── src/components/admin/MediaUploadTab.tsx    ← Upload UI
├── src/app/api/admin/media/upload/route.ts    ← API for metadata
├── CLOUDINARY_SETUP.md                        ← Full documentation
└── .env.local (updated)                       ← Config

Modified files:
├── src/components/admin/AdminDashboard.tsx    ← Added tabs
└── package.json                               ← next-cloudinary added
```

## 🎯 Access Media Upload

1. Navigate to `/admin/dashboard`
2. Click **Media Upload** tab (🖼️)
3. Click **Choose Image or Video** button
4. Select and upload file
5. Copy CDN URL or remove from list

## 💡 Next Steps

### Option 1: Save to Database
- Create MongoDB schema for media
- Update `/api/admin/media/upload` route to save data
- Use `MediaUploadTab.tsx` to fetch previous uploads on mount

### Option 2: Process Media
- Call external API on successful upload
- Trigger image transformations
- Generate thumbnails or variants

### Option 3: Gallery Integration
- Create gallery page that displays uploaded media
- Use Cloudinary URLs for images/videos
- Apply transformations for different breakpoints

## 🔗 Useful Resources

- [Full Setup Docs](./CLOUDINARY_SETUP.md)
- [Next Cloudinary](https://next-cloudinary.spacejelly.dev/)
- [Cloudinary Docs](https://cloudinary.com/documentation/)

## 🐛 Troubleshooting

**Upload widget not showing?**
- Check `.env.local` has `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`
- Restart dev server: `npm run dev`

**Can't authenticate?**
- Make sure you're logged into admin dashboard
- Check `/admin` login page if needed

**Image not displaying?**
- Verify `public_id` is correct in URL
- Check Cloudinary dashboard to see uploaded files

## 📊 Debug Info

MediaUploadTab shows full upload response including:
- `public_id`: Unique identifier in Cloudinary
- `secure_url`: HTTPS CDN URL for the file
- Dimensions, file size, format, etc.

Use this data structure when building database model.
