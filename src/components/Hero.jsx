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
            stroke="rgba(222, 206, 191, 0.2)"
            strokeWidth="1"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, delay: delay || 0, ease: "easeInOut" }}
        />
    );
}

// SAGE hero: #A1A79E background, Ivory text, Terracotta CTA, Blush accents
export default function Hero() {
    return (
        <section
            style={{
                backgroundColor: "#A1A79E",  /* Sage — hero background */
                position: "relative",
                overflow: "hidden",
                minHeight: "85vh",
                display: "flex",
                alignItems: "center",
            }}
        >
            {/* Gradient depth layers */}
            <div style={{
                position: "absolute", inset: 0,
                background: `
                    radial-gradient(ellipse 80% 60% at 20% 20%, rgba(222, 206, 191, 0.18) 0%, transparent 50%),
                    radial-gradient(ellipse 60% 50% at 80% 70%, rgba(77, 94, 85, 0.3) 0%, transparent 50%),
                    radial-gradient(ellipse 40% 40% at 50% 90%, rgba(61, 74, 66, 0.25) 0%, transparent 50%)
                `,
            }} />

            {/* Animated floating orbs: Blush and Sage tones */}
            <FloatingOrb size="200px" x="5%" y="15%" color="rgba(222, 206, 191, 0.14)" delay={0} duration={14} />
            <FloatingOrb size="130px" x="75%" y="10%" color="rgba(244, 243, 241, 0.08)" delay={2} duration={11} />
            <FloatingOrb size="90px" x="85%" y="65%" color="rgba(222, 206, 191, 0.1)" delay={1} duration={16} />
            <FloatingOrb size="220px" x="-5%" y="60%" color="rgba(77, 94, 85, 0.12)" delay={3} duration={18} />
            <FloatingOrb size="60px" x="40%" y="80%" color="rgba(244, 243, 241, 0.06)" delay={4} duration={10} />

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
            <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 lg:px-12 py-12 md:py-20 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-8">
                
                {/* Left: Text */}
                <div className="flex-1 lg:w-3/5 text-left flex flex-col items-start lg:pr-12">

                    {/* Eyebrow label — Blush */}
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        style={{
                            fontFamily: "var(--font-sans)", fontSize: "0.78rem", fontWeight: 600,
                            letterSpacing: "0.25em", textTransform: "uppercase",
                            color: "rgba(244, 243, 241, 0.75)",  /* Ivory — reads cleanly on Sage */
                            marginBottom: "1.5rem",
                        }}
                    >
                        iOS Insights Psychological Services
                    </motion.p>

                    {/* Main heading — Ivory on Sage */}
                    <motion.h1
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        style={{
                            fontFamily: "var(--font-serif)",
                            fontSize: "clamp(2.7rem, 9vw, 5.5rem)",
                            color: "#F4F3F1",  /* Ivory */
                            lineHeight: 1.05,
                            maxWidth: "1000px",
                            marginBottom: "1.5rem",
                            fontWeight: 500,
                        }}
                    >
                        Helping You Choose <br />
                        the Life <em style={{ color: "rgba(244, 243, 241, 0.7)" }}>You Want to Live</em>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        style={{
                            color: "rgba(244, 243, 241, 0.85)", fontWeight: 300,
                            maxWidth: "700px", fontSize: "clamp(1.05rem, 4vw, 1.25rem)", lineHeight: 1.8,
                            marginBottom: "1.5rem",
                        }}
                    >
                        Accessing support is not a sign of weakness — it is a sign of self-love. 🤍
                    </motion.p>

                    {/* Location Badges */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.8 }}
                        className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8"
                    >
                        {["📍 In-Person — Alberta", "💻 Virtual — AB · NS · MB · SK"].map(label => (
                            <span key={label}
                                className="px-3 py-1.5 md:px-5 md:py-2 rounded-full border border-[#DECEBF]/40 text-[#F4F3F1]/90 font-sans text-[0.6rem] md:text-[0.7rem] font-medium tracking-[0.05em] md:tracking-[0.1em] uppercase"
                            >
                                {label}
                            </span>
                        ))}
                    </motion.div>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                        className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto"
                    >
                        {/* Primary CTA: Terracotta */}
                        <a href="https://iosinsights.janeapp.com/" target="_blank" rel="noreferrer" 
                            className="bg-[#B57B66] text-[#F4F3F1] px-6 py-3.5 md:px-9 md:py-4 rounded-full font-sans text-[0.7rem] md:text-[0.85rem] font-bold tracking-[0.15em] uppercase no-underline transition-all duration-300 hover:bg-[#9A6553] hover:-translate-y-[2px] shadow-[0_4px_20px_rgba(181,123,102,0.4)] text-center w-full sm:w-auto"
                        >
                            Connect with Me
                        </a>
                        {/* Secondary CTA: Ivory ghost */}
                        <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} 
                            className="bg-transparent text-[#F4F3F1] px-6 py-3.5 md:px-9 md:py-4 rounded-full font-sans text-[0.7rem] md:text-[0.85rem] font-bold tracking-[0.15em] uppercase no-underline transition-all duration-300 hover:bg-[#F4F3F1]/10 hover:border-[#F4F3F1]/55 border-[1.5px] border-[#F4F3F1]/35 text-center w-full sm:w-auto"
                        >
                            Learn More
                        </a>
                    </motion.div>
                </div>

                {/* Right: Animated Logo */}
                <motion.div
                    className="flex-none w-full lg:w-2/5 flex justify-center lg:justify-end lg:-mr-8 mt-6 lg:mt-0 px-8 sm:px-16 lg:px-0"
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
                        border: "1.5px solid rgba(244, 243, 241, 0.35)",
                        display: "flex", justifyContent: "center", paddingTop: "8px",
                    }}
                >
                    <motion.div
                        animate={{ opacity: [1, 0.3, 1], y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        style={{ width: "3px", height: "8px", borderRadius: "2px", backgroundColor: "rgba(244, 243, 241, 0.5)" }}
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}
