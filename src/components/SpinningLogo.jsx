import { motion } from "framer-motion";

export default function SpinningLogo({ size = 120, innerScale = 1, variant = "black" }) {
    // Use the effective size based on whether innerScale was passed, 
    // so we don't blow up the navbar logo too much if it was scaled down.
    const effectiveSize = size * innerScale;

    // To make the black PNG white, we invert it and boost brightness
    const filterStyle = variant === "white" 
        ? "drop-shadow(0 2px 10px rgba(0,0,0,0.15)) invert(1) brightness(200%)"
        : "drop-shadow(0 2px 10px rgba(0,0,0,0.15))";

    return (
        <div style={{
            width: `${effectiveSize}px`, 
            height: `${effectiveSize}px`, 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center",
            position: "relative",
            flexShrink: 0
        }}>
            <motion.img 
                src={`${import.meta.env.BASE_URL}logo.png`}
                alt="iOS Insights" 
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                style={{ 
                    width: "100%", 
                    height: "100%", 
                    objectFit: "contain",
                    filter: filterStyle
                }} 
            />
        </div>
    );
}
