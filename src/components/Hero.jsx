import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SpinningLogo from "./SpinningLogo";

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

/* Flowing curved line decoration */
function FlowingLine({ d, delay }) {
    return (
        <motion.path
            d={d}
            fill="transparent"
            stroke="rgba(217, 187, 186,0.2)"
            strokeWidth="1"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, delay: delay || 0, ease: "easeInOut" }}
        />
    );
}

export default function Hero() {
    return (
        <section
            style={{
                backgroundColor: "var(--color-wine)",
                position: "relative",
                overflow: "hidden",
                minHeight: "92vh",
                display: "flex",
                alignItems: "center",
            }}
        >
            {/* Gradient overlays for depth */}
            <div style={{
                position: "absolute", inset: 0,
                background: `
                    radial-gradient(ellipse 80% 60% at 20% 20%, rgba(217, 187, 186,0.15) 0%, transparent 50%),
                    radial-gradient(ellipse 60% 50% at 80% 70%, rgba(110,51,71,0.4) 0%, transparent 50%),
                    radial-gradient(ellipse 40% 40% at 50% 90%, rgba(42,31,45,0.3) 0%, transparent 50%)
                `,
            }} />

            {/* Animated floating orbs */}
            <FloatingOrb size="180px" x="5%" y="15%" color="rgba(217, 187, 186,0.08)" delay={0} duration={14} />
            <FloatingOrb size="120px" x="75%" y="10%" color="rgba(252, 246, 242,0.05)" delay={2} duration={11} />
            <FloatingOrb size="90px" x="85%" y="65%" color="rgba(217, 187, 186,0.06)" delay={1} duration={16} />
            <FloatingOrb size="200px" x="-5%" y="60%" color="rgba(110,51,71,0.1)" delay={3} duration={18} />
            <FloatingOrb size="60px" x="40%" y="80%" color="rgba(252, 246, 242,0.04)" delay={4} duration={10} />

            {/* Flowing SVG lines */}
            <svg
                viewBox="0 0 1200 600"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.6 }}
                preserveAspectRatio="none"
            >
                <FlowingLine d="M-50,200 C200,120 400,350 600,250 C800,150 1000,300 1300,200" delay={0.5} />
                <FlowingLine d="M-50,400 C150,320 350,480 550,380 C750,280 950,420 1300,350" delay={1.2} />
                <FlowingLine d="M-50,100 C250,180 450,50 650,150 C850,250 1050,100 1300,180" delay={1.8} />
            </svg>

            {/* Main content */}
            <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 lg:px-12 py-24 md:py-32 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
                
                {/* Left side: Text Content */}
                <div className="flex-1 lg:w-3/5 text-left flex flex-col items-start lg:pr-12">
                    {/* Label */}
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        style={{
                            fontFamily: "var(--font-sans)", fontSize: "0.78rem", fontWeight: 600,
                            letterSpacing: "0.25em", textTransform: "uppercase",
                            color: "var(--color-lilac)", marginBottom: "1.5rem",
                        }}
                    >
                        iOS Insights Psychological Services
                    </motion.p>

                    {/* Main heading — LARGE */}
                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        style={{
                            maxWidth: "1000px",
                            marginBottom: "2rem",
                        }}
                    >
                        Helping You Choose <br />
                        the Life <em style={{ color: "var(--color-lilac)" }}>You Want to Live</em>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        style={{
                            color: "rgba(252, 246, 242,0.7)", fontWeight: 300,
                            maxWidth: "700px", fontSize: "1.25rem", lineHeight: 1.8,
                            marginBottom: "3rem",
                        }}
                    >
                        Accessing support is not a sign of weakness — it is a sign of self-love. 🤍
                    </motion.p>

                    {/* Service Area Badges */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.8 }}
                        className="flex flex-wrap gap-3 mb-10"
                    >
                        <span style={{
                            padding: "0.45rem 1.2rem", borderRadius: "9999px",
                            border: "1px solid rgba(217, 187, 186,0.25)",
                            color: "rgba(252, 246, 242,0.8)", fontFamily: "var(--font-sans)",
                            fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase",
                        }}>
                            📍 In-Person — Alberta
                        </span>
                        <span style={{
                            padding: "0.45rem 1.2rem", borderRadius: "9999px",
                            border: "1px solid rgba(217, 187, 186,0.25)",
                            color: "rgba(252, 246, 242,0.8)", fontFamily: "var(--font-sans)",
                            fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase",
                        }}>
                            💻 Virtual — AB · NS · MB · SK
                        </span>
                    </motion.div>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                        style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
                    >
                        <a href="https://iosinsights.janeapp.com/" target="_blank" rel="noreferrer" style={{
                            backgroundColor: "var(--color-cream)", color: "var(--color-wine-dark)",
                            padding: "1rem 2.25rem", borderRadius: "9999px",
                            fontFamily: "var(--font-sans)", fontSize: "0.85rem", fontWeight: 700,
                            letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none",
                            transition: "all 0.3s", boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                        }}
                        onMouseOver={e => { e.currentTarget.style.backgroundColor = "var(--color-lilac)"; e.currentTarget.style.color = "var(--color-cream)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                        onMouseOut={e => { e.currentTarget.style.backgroundColor = "var(--color-cream)"; e.currentTarget.style.color = "var(--color-wine-dark)"; e.currentTarget.style.transform = "translateY(0)"; }}
                        >
                            Connect with Me
                        </a>
                        <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); }} style={{
                            backgroundColor: "transparent", color: "var(--color-cream)",
                            padding: "1rem 2.25rem", borderRadius: "9999px",
                            fontFamily: "var(--font-sans)", fontSize: "0.85rem", fontWeight: 700,
                            letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none",
                            border: "1px solid rgba(252, 246, 242,0.2)",
                            transition: "all 0.3s",
                        }}
                        onMouseOver={e => { e.currentTarget.style.backgroundColor = "rgba(252, 246, 242,0.05)"; e.currentTarget.style.borderColor = "rgba(252, 246, 242,0.4)"; }}
                        onMouseOut={e => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.borderColor = "rgba(252, 246, 242,0.2)"; }}
                        >
                            Learn More
                        </a>
                    </motion.div>
                </div>

                {/* Right side: Animated Logo */}
                <motion.div
                    className="flex-none lg:w-2/5 flex justify-center lg:justify-end lg:-mr-8"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    <SpinningLogo size={640} innerScale={1} variant="white" />
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)" }}
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        width: "24px", height: "40px", borderRadius: "12px",
                        border: "1.5px solid rgba(252, 246, 242,0.3)",
                        display: "flex", justifyContent: "center", paddingTop: "8px",
                    }}
                >
                    <motion.div
                        animate={{ opacity: [1, 0.3, 1], y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        style={{ width: "3px", height: "8px", borderRadius: "2px", backgroundColor: "rgba(252, 246, 242,0.5)" }}
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}
