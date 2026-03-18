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

/* Cream/Blush preset — for use on Ivory or Blush sections */
const creamPreset = [
    { size: "140px", x: "5%",  y: "10%", color: "rgba(181, 123, 102, 0.12)", delay: 0,  duration: 14 }, /* Terracotta glow */
    { size: "100px", x: "80%", y: "15%", color: "rgba(161, 167, 158, 0.15)", delay: 2,  duration: 11 }, /* Sage glow */
    { size: "80px",  x: "70%", y: "70%", color: "rgba(222, 206, 191, 0.18)", delay: 1,  duration: 16 }, /* Blush glow */
    { size: "160px", x: "-3%", y: "60%", color: "rgba(161, 167, 158, 0.12)", delay: 3,  duration: 18 }, /* Sage glow */
    { size: "50px",  x: "45%", y: "85%", color: "rgba(181, 123, 102, 0.08)", delay: 4,  duration: 10 }, /* Terracotta glow */
];

/* Wine/Evergreen preset — for use on Evergreen dark sections */
const winePreset = [
    { size: "160px", x: "5%",  y: "12%", color: "rgba(222, 206, 191, 0.15)", delay: 0,  duration: 14 }, /* Blush glow */
    { size: "110px", x: "78%", y: "8%",  color: "rgba(244, 243, 241, 0.08)", delay: 2,  duration: 11 }, /* Ivory glow */
    { size: "85px",  x: "85%", y: "65%", color: "rgba(222, 206, 191, 0.12)", delay: 1,  duration: 16 }, /* Blush glow */
    { size: "180px", x: "-5%", y: "55%", color: "rgba(181, 123, 102, 0.18)", delay: 3,  duration: 18 }, /* Terracotta glow */
    { size: "55px",  x: "40%", y: "80%", color: "rgba(244, 243, 241, 0.06)", delay: 4,  duration: 10 }, /* Ivory glow */
];

/* Sage preset — soft green orbs exclusively, for use on light/Ivory backgrounds */
const sagePreset = [
    { size: "150px", x: "8%",  y: "10%", color: "rgba(161, 167, 158, 0.35)", delay: 0,  duration: 15 }, /* Sage glow */
    { size: "200px", x: "75%", y: "20%", color: "rgba(161, 167, 158, 0.25)",  delay: 2,  duration: 18 }, /* Sage glow */
    { size: "90px",  x: "85%", y: "75%", color: "rgba(161, 167, 158, 0.28)", delay: 1,  duration: 12 }, /* Sage glow */
    { size: "180px", x: "-2%", y: "65%", color: "rgba(161, 167, 158, 0.3)", delay: 3,  duration: 16 }, /* Sage glow */
    { size: "60px",  x: "40%", y: "85%", color: "rgba(161, 167, 158, 0.18)", delay: 4,  duration: 11 }, /* Sage glow */
];

export default function FloatingOrbs({ variant = "cream" }) {
    let orbs = creamPreset;
    if (variant === "wine") orbs = winePreset;
    if (variant === "sage") orbs = sagePreset;

    return (
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
            {orbs.map((orb, i) => (
                <FloatingOrb key={i} {...orb} />
            ))}
        </div>
    );
}
