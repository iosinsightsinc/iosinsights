import { motion } from "framer-motion";

export default function PulsingLogo({ size = 70 }) {
    const imgSize = Math.round(size * 0.75);
    return (
        <motion.div
            animate={{
                boxShadow: [
                    "0 0 0 0 rgba(200,162,200,0)",
                    "0 0 25px 6px rgba(200,162,200,0.25)",
                    "0 0 0 0 rgba(200,162,200,0)",
                ],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{
                width: `${size}px`, height: `${size}px`, borderRadius: "50%",
                backgroundColor: "var(--color-cream)",
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 1.5rem",
                border: "2px solid rgba(200,162,200,0.35)",
            }}
        >
            <img src="/logo.png" alt="iOS Insights" style={{ width: `${imgSize}px`, height: `${imgSize}px`, objectFit: "contain" }} />
        </motion.div>
    );
}
