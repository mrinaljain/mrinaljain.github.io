"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { PopupConfig } from "@/types/popup";

interface PopupProps {
  page?: string;
}

export default function DynamicPopup({ page = "/" }: PopupProps) {
  const [popup, setPopup] = useState<PopupConfig | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(true);
  const impressionTrackedRef = useRef(false);

  // Fetch popup data from API
  useEffect(() => {
    const fetchPopup = async () => {
      try {
        const response = await fetch(`/api/popups?page=${page}`);
        const data = await response.json();

        if (data.popup) {
          setPopup(data.popup);

          // Check if already dismissed
          const isDismissed = localStorage.getItem(
            `popup_dismissed_${data.popup.id}`
          );

          if (data.popup.displayFrequency === "once" && isDismissed) {
            setShowPopup(false);
          } else if (data.popup.displayFrequency === "session") {
            // For session, dismiss after tab close (handled by session storage)
            setShowPopup(true);
          } else {
            setShowPopup(true);
          }
        }
      } catch (error) {
        console.error("Failed to fetch popup:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPopup();
  }, [page]);

  const trackImpression = useCallback(async () => {
    if (!popup || impressionTrackedRef.current) return;
    impressionTrackedRef.current = true;

    try {
      await fetch(`/api/popups/${popup.id}/analytics`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ eventType: "impression" }),
      });

      localStorage.setItem(`popup_impression_${popup.id}`, "true");
    } catch (error) {
      console.error("Failed to track impression:", error);
    }
  }, [popup]);

  // Handle display delay
  useEffect(() => {
    if (!popup || !showPopup) return;

    if (popup.displayDelay && popup.displayDelay > 0) {
      const timer = setTimeout(() => {
        trackImpression();
      }, popup.displayDelay * 1000);

      return () => clearTimeout(timer);
    } else {
      trackImpression();
    }
  }, [popup, showPopup, trackImpression]);

  const handleDismiss = useCallback(async () => {
    if (!popup) return;

    try {
      // Track dismissal
      await fetch(`/api/popups/${popup.id}/analytics`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ eventType: "dismissal" }),
      });

      // Mark as dismissed
      if (popup.displayFrequency === "once" || popup.displayFrequency === "session") {
        localStorage.setItem(`popup_dismissed_${popup.id}`, "true");
      }

      setShowPopup(false);
    } catch (error) {
      console.error("Failed to track dismissal:", error);
      setShowPopup(false);
    }
  }, [popup]);

  // Handle dismissible after timeout
  useEffect(() => {
    if (!popup || !showPopup || !popup.dismissibleAfter) return;

    const timer = setTimeout(() => {
      // Auto-dismiss after X seconds
      handleDismiss();
    }, popup.dismissibleAfter * 1000);

    return () => clearTimeout(timer);
  }, [popup, showPopup, handleDismiss]);

  const handleButtonClick = async () => {
    if (!popup?.content.buttonAction) return;

    try {
      // Track click
      await fetch(`/api/popups/${popup.id}/analytics`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ eventType: "click" }),
      });

      // Handle action based on type
      const action = popup.content.buttonAction;

      switch (action.actionType || "link") {
        case "link":
          window.open(action.url, action.target || "_blank");
          break;
        case "modal":
          // Can be extended to open a modal if needed
          console.log("Modal action triggered:", action.url);
          break;
        case "custom":
          // Can be extended for custom handlers
          console.log("Custom action triggered:", action.url);
          break;
      }
    } catch (error) {
      console.error("Failed to track click:", error);
    }
  };

  if (loading || !popup || !showPopup) return null;

  const { content } = popup;
  const borderRadiusClass =
    content.borderStyle === "square" ? "rounded-none" : `rounded-[${content.borderRadius || 12}px]`;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
        onClick={handleDismiss}
        role="presentation"
      />

      {/* Popup Container */}
      <div
        className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 max-w-lg w-full mx-4 shadow-2xl ${borderRadiusClass}`}
        style={{
          backgroundColor: content.backgroundColor || "#ffffff",
          color: content.textColor || "#000000",
        }}
      >
        {/* Custom CSS */}
        {content.customCss && <style>{content.customCss}</style>}

        {/* Close Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 z-10 p-2 hover:bg-gray-200 rounded-full transition"
          aria-label="Close popup"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Content */}
        <div className="p-6">
          {/* Image */}
          {content.imageUrl && !content.videoUrl && (
            <div className="mb-4">
              <Image
                src={content.imageUrl}
                alt={content.title}
                width={600}
                height={400}
                className={`w-full object-cover ${borderRadiusClass}`}
              />
            </div>
          )}

          {/* Video */}
          {content.videoUrl && (
            <div className="mb-4">
              {content.videoProvider === "youtube" ? (
                <iframe
                  width={content.videoDimensions?.width || undefined}
                  height={content.videoDimensions?.height || 315}
                  src={content.videoUrl}
                  title={content.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={`w-full ${borderRadiusClass}`}
                />
              ) : content.videoProvider === "vimeo" ? (
                <iframe
                  width={content.videoDimensions?.width || undefined}
                  height={content.videoDimensions?.height || 315}
                  src={content.videoUrl}
                  title={content.title}
                  frameBorder="0"
                  allowFullScreen
                  className={`w-full ${borderRadiusClass}`}
                />
              ) : (
                <video
                  width={content.videoDimensions?.width || undefined}
                  height={content.videoDimensions?.height || 315}
                  controls
                  className={`w-full ${borderRadiusClass}`}
                >
                  <source src={content.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          )}

          {/* Title */}
          <h2 className="text-2xl font-bold mb-2">{content.title}</h2>

          {/* Description */}
          {content.description && (
            <p className="text-gray-600 mb-4">{content.description}</p>
          )}

          {/* Button */}
          {content.buttonAction && (
            <button
              onClick={handleButtonClick}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 active:scale-95"
            >
              {content.buttonAction.label}
            </button>
          )}
        </div>
      </div>
    </>
  );
}
