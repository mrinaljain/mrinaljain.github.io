"use client"
import React, { useRef, useState, useEffect } from 'react'
import { FaPause, FaPlay, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

function IntroVideo() {
   const videoRef = useRef<HTMLVideoElement | null>(null);
   const [isPlaying, setIsPlaying] = useState(true);
   const [isMuted, setIsMuted] = useState(true);

   useEffect(() => {
      const observer = new IntersectionObserver(
         ([entry]) => {
            if (videoRef.current) {
               if (entry.isIntersecting) {
                  videoRef.current.play();
                  setIsPlaying(true);
               } else {
                  videoRef.current.pause();
                  setIsPlaying(false);
               }
            }
         },
         { threshold: 0.5 } // Video must be at least 50% visible to play
      );

      if (videoRef.current) {
         observer.observe(videoRef.current);
      }

      return () => observer.disconnect();
   }, []);

   const togglePlayPause = () => {
      if (videoRef.current) {
         if (isPlaying) {
            videoRef.current.pause();
         } else {
            videoRef.current.play();
         }
         setIsPlaying(!isPlaying);
      }
   };
   const toggleMute = () => {
      if (videoRef.current) {
         videoRef.current.muted = !isMuted;
         setIsMuted(!isMuted);
      }
   };
  return (
     <div className='relative w-full md:w-3/5 h-full'>
        <video
           ref={videoRef}
           autoPlay
           loop
           muted
           playsInline
           className="absolute inset-0 w-full h-full object-cover">
           <source src="/mrinal_intro.mp4" type="video/mp4">
           </source>
        </video>
        {/* Overlay for Better Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/10"></div>

        {/* Video Controls */}
        <div className="absolute top-5 right-5 flex space-x-3">
           {/* Play/Pause Button */}
           <button
              onClick={togglePlayPause}
              className="w-12 h-12 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center transition transform hover:scale-110"
           >
              {isPlaying ? <FaPause className="text-white text-lg" /> : <FaPlay className="text-white text-lg" />}
           </button>

           {/* Mute/Unmute Button */}
           <button
              onClick={toggleMute}
              className="w-12 h-12 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center transition transform hover:scale-110"
           >
              {isMuted ? <FaVolumeMute className="text-white text-lg" /> : <FaVolumeUp className="text-white text-lg" />}
           </button>
        </div>

        {/* Animated Overlay Text */}
        <div className="absolute bottom-10 left-10 text-white text-2xl font-bold">
           <p className="animate-pulse">Bringing Ideas to Life ✨</p>
        </div>
     </div>

  )
}

export default IntroVideo;