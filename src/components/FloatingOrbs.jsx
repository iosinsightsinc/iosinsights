import { motion } from "framer-motion";

/* Floating decorative orb */
function FloatingOrb({ size, x, y, color, delay, duration }) {
    return (
        <motion.div
            animate={{
                y: [0, -20, 0, 15, 0],
                x: [0, 10, -5, 8, 0],
                scale: [1, 1.08, 0.95, 1.05, 1],
            }}
            transition={{ duration: duration || 12, repeat: Infinity, ease: "easeInOut", delay: delay || 0 }}
            style={{
                position: "absolute", left: x, top: y,
                width: size, height: size, borderRadius: "50%",
                background: color, filter: "blur(1px)",
                pointerEvents: "none",
            }}
        />
    );
}

/* Preset orb configurations for different section types */
const creamPreset = [
    { size: "140px", x: "5%",  y: "10%", color: "rgba(217, 187, 186,0.08)", delay: 0,   duration: 14 },
    { size: "100px", x: "80%", y: "15%", color: "rgba(160, 89, 98,0.06)",   delay: 2,   duration: 11 },
    { size: "80px",  x: "70%", y: "70%", color: "rgba(217, 187, 186,0.06)", delay: 1,   duration: 16 },
    { size: "160px", x: "-3%", y: "60%", color: "rgba(160, 89, 98,0.05)",   delay: 3,   duration: 18 },
    { size: "50px",  x: "45%", y: "85%", color: "rgba(217, 187, 186,0.05)", delay: 4,   duration: 10 },
];

const winePreset = [
    { size: "160px", x: "5%",  y: "12%", color: "rgba(217, 187, 186,0.08)", delay: 0,   duration: 14 },
    { size: "110px", x: "78%", y: "8%",  color: "rgba(252, 246, 242,0.04)", delay: 2,   duration: 11 },
    { size: "85px",  x: "85%", y: "65%", color: "rgba(217, 187, 186,0.06)", delay: 1,   duration: 16 },
    { size: "180px", x: "-5%", y: "55%", color: "rgba(110,51,71,0.1)",    delay: 3,   duration: 18 },
    { size: "55px",  x: "40%", y: "80%", color: "rgba(252, 246, 242,0.03)", delay: 4,   duration: 10 },
];

export default function FloatingOrbs({ variant = "cream" }) {
    const orbs = variant === "wine" ? winePreset : creamPreset;
    return (
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
            {orbs.map((orb, i) => (
                <FloatingOrb key={i} {...orb} />
            ))}
        </div>
    );
}
