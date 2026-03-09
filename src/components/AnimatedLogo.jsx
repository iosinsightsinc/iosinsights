import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * AnimatedLogo
 * Plays the mp4 animation on load (autoplay, muted, no controls).
 * Once the video ends, cross-fades to the static PNG logo.
 * This perfectly replicates the "draw-on" stroke animation from the original video.
 */
export default function AnimatedLogo({ className = "" }) {
    const [videoEnded, setVideoEnded] = useState(false);
    const videoRef = useRef(null);

    return (
        <div className={`relative ${className}`}>
            {/* MP4 Animation — plays once, then fades out */}
            <AnimatePresence>
                {!videoEnded && (
                    <motion.video
                        key="logo-video"
                        ref={videoRef}
                        src="/logo-animation.mp4"
                        autoPlay
                        muted
                        playsInline
                        onEnded={() => setVideoEnded(true)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full h-full object-contain"
                        // Fallback: if video can't play, mark it ended immediately
                        onError={() => setVideoEnded(true)}
                    />
                )}
            </AnimatePresence>

            {/* Static PNG Logo — cross-fades in after animation ends */}
            <AnimatePresence>
                {videoEnded && (
                    <motion.img
                        key="logo-static"
                        src="/logo.png"
                        alt="iOS Insights — Untangling the Mind"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="w-full h-full object-contain absolute inset-0"
                    />
                )}
            </AnimatePresence>
        </div>
    );
}
