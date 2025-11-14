"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Play } from "lucide-react"
import { useState, useRef } from "react"

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayVideo = async () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        try {
          await videoRef.current.play()
          setIsPlaying(true)
        } catch (error) {
          console.error("Video play failed:", error)
          setIsPlaying(false)
        }
      }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        poster="/retail-dashboard.jpg"
      >
        <source src="https://cdn.jsdelivr.net/npm/big-buck-bunny-720p@0.0.7/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          {/* <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4">
            🎆 Revolutionary ERP Solution
          </div> */}
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            A <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">360°</span> Retail Solution
            <br />by the Retailers, for the <span className="text-white">Retailers</span> 
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
           Empowering <strong>thousands</strong> of retail business owners across India to embrace technology and streamline operations.
          <br />One platform, infinite possibilities! 
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          {/* <button
            onClick={handlePlayVideo}
            className="group flex items-center justify-center gap-3 px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-full border border-white/30 hover:bg-white/30 hover:scale-105 transition-all duration-300 font-semibold text-lg"
          >
            <Play size={24} fill="white" className="group-hover:scale-110 transition-transform" />
            {isPlaying ? "⏸️ Pause Video" : "▶️ Watch Demo"}
          </button> */}
          {/* <Link
            href="/contact"
            className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#D7263D] to-[#F03A47] text-white rounded-full hover:scale-105 hover:shadow-2xl transition-all duration-300 font-bold text-lg"
          >
            🚀 Get Started Free
          </Link> */}
        </motion.div>
      </div>

      {/* Scroll Wave Effect */}
      <div className="absolute bottom-0 left-0 right-0 z-5">
        <svg className="w-full h-auto" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,40 Q360,0 720,40 T1440,40 L1440,120 L0,120 Z" fill="#F5F5F5" />
        </svg>
      </div>
    </section>
  )
}
