"use client"
import React from 'react'

function IntroVideo() {
  return (
     <video autoPlay
        loop
        muted
        
        playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="/mrinal_intro.mp4" type="video/mp4">
        </source>
     </video>
  )
}

export default IntroVideo;