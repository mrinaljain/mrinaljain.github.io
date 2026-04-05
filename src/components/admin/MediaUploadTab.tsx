"use client";

import { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";
import type { CloudinaryUploadWidgetResults } from "next-cloudinary";

type UploadedMedia = {
  public_id: string;
  secure_url: string;
  type: "image" | "video";
  resource_type: string;
  created_at: string;
  width?: number;
  height?: number;
  format?: string;
  bytes?: number;
};

interface UploadResult {
  public_id: string;
  secure_url: string;
  type: string;
  resource_type: string;
  width?: number;
  height?: number;
  format?: string;
  bytes?: number;
}

export default function MediaUploadTab() {
  const [uploadedMedia, setUploadedMedia] = useState<UploadedMedia[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleUploadEvent = (result: CloudinaryUploadWidgetResults) => {
    if (result.event === "success" && result.info) {
      const info = result.info as UploadResult;
      const newMedia: UploadedMedia = {
        public_id: info.public_id,
        secure_url: info.secure_url,
        type: info.type === "video" ? "video" : "image",
        resource_type: info.resource_type,
        created_at: new Date().toISOString(),
        width: info.width,
        height: info.height,
        format: info.format,
        bytes: info.bytes,
      };

      setUploadedMedia((prev) => [newMedia, ...prev]);
      setError(null);

      // You can also handle the upload response here
      // For example: save to database, trigger processing, etc.
      console.log("Upload successful:", newMedia);
    }
  };

  const handleError = () => {
    setError("Failed to upload file. Please try again.");
  };

  const removeMedia = (publicId: string) => {
    setUploadedMedia((prev) => prev.filter((m) => m.public_id !== publicId));
  };

  const formatFileSize = (bytes?: number) => {
    if (!bytes) return "N/A";
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

  if (!cloudName) {
    return (
      <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-6">
        <h3 className="font-semibold text-yellow-900">Configuration Required</h3>
        <p className="mt-2 text-sm text-yellow-800">
          Please configure Cloudinary environment variables in <code className="bg-yellow-100 px-2 py-1">.env.local</code>:
        </p>
        <pre className="mt-3 overflow-auto rounded bg-yellow-100 p-3 text-xs text-yellow-900">
{`NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
NEXT_PUBLIC_CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=your_upload_preset`}
        </pre>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Upload Widget */}
      <div className="rounded-lg border border-slate-200 bg-white p-6">
        <h2 className="mb-4 text-xl font-semibold text-slate-900">Upload Media</h2>

        <CldUploadWidget
          uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || ""}
          onSuccess={handleUploadEvent}
          onError={handleError}
        >
          {({ open }) => (
            <button
              onClick={() => open()}
              className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
            >
              Choose Image or Video
            </button>
          )}
        </CldUploadWidget>

        {error && (
          <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-4 text-red-800">
            {error}
          </div>
        )}
      </div>

      {/* Uploaded Media List */}
      {uploadedMedia.length > 0 && (
        <div className="rounded-lg border border-slate-200 bg-white p-6">
          <h2 className="mb-4 text-xl font-semibold text-slate-900">
            Uploaded Media ({uploadedMedia.length})
          </h2>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {uploadedMedia.map((media) => (
              <div
                key={media.public_id}
                className="overflow-hidden rounded-lg border border-slate-200 bg-slate-50"
              >
                {/* Media Preview */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  {media.type === "image" ? (
                    <CldImage
                      src={media.public_id}
                      alt="Uploaded media"
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-slate-800 text-white">
                      <div className="text-center">
                        <div className="text-3xl">🎬</div>
                        <p className="mt-2 text-sm">{media.format?.toUpperCase()}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Media Info */}
                <div className="space-y-2 p-4">
                  <div className="space-y-1">
                    <p className="truncate text-sm font-medium text-slate-900">
                      {media.public_id.split("/").pop()}
                    </p>
                    <p className="text-xs text-slate-500">
                      {media.type === "image"
                        ? `${media.width}×${media.height}px`
                        : "Video"}
                    </p>
                    <p className="text-xs text-slate-500">
                      {formatFileSize(media.bytes)}
                    </p>
                  </div>

                  {/* Copy URL Button */}
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(media.secure_url);
                      alert("URL copied to clipboard!");
                    }}
                    className="w-full rounded bg-slate-100 px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-200"
                  >
                    Copy URL
                  </button>

                  {/* Delete Button */}
                  <button
                    onClick={() => removeMedia(media.public_id)}
                    className="w-full rounded bg-red-50 px-3 py-2 text-xs font-medium text-red-600 hover:bg-red-100"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Debug Info */}
          <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold text-slate-600">📋 Debug Info</p>
            <pre className="mt-2 overflow-auto text-xs text-slate-700">
              {JSON.stringify(uploadedMedia[0], null, 2)}
            </pre>
          </div>
        </div>
      )}

      {/* Empty State */}
      {uploadedMedia.length === 0 && (
        <div className="rounded-lg border border-dashed border-slate-300 bg-slate-50 p-12 text-center">
          <p className="text-slate-500">No media uploaded yet</p>
          <p className="mt-1 text-xs text-slate-400">
            Click the button above to upload images or videos
          </p>
        </div>
      )}
    </div>
  );
}
