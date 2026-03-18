import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SpinningLogo from "../components/SpinningLogo";
import { Heart, Brain, Puzzle, ClipboardList, Briefcase, Monitor, ArrowRight, Wind, Users, Box } from "lucide-react";
import FloatingOrbs from "../components/FloatingOrbs";

const services = [
    {
        slug: "depression",
        icon: <Heart size={32} strokeWidth={1.5} />,
        title: "Therapy for Depression",
        tagline: "Treat the root of the insidious monster.",
        excerpt: "Depression can feel like not wanting to get out of bed, a weight on your shoulders making everything feel hard, or the critical voice in your head. We work to uncover the root causes — not just mask symptoms.",
    },
    {
        slug: "anxiety",
        icon: <Wind size={32} strokeWidth={1.5} />,
        title: "Therapy for Anxiety",
        tagline: "Quiet the noise and find your center.",
        excerpt: "Anxiety can manifest as racing thoughts, chronic worry, or physical panic. We help you understand your nervous system's response and build somatic tools to regain a sense of safety and calm.",
    },
    {
        slug: "attachment",
        icon: <Users size={32} strokeWidth={1.5} />,
        title: "Attachment Therapy",
        tagline: "Build the relationships you want.",
        excerpt: "We believe that people heal in safe, attuned relationships. Explore the foundation of your attachment style to shift long-standing beliefs held in mind and body, moving from surviving to thriving.",
    },
    {
        slug: "sandtray",
        icon: <Box size={32} strokeWidth={1.5} />,
        title: "Sandtray Therapy",
        tagline: "Process what words cannot capture.",
        excerpt: "A powerful, hands-on tool that helps your body communicate emotions and past experiences that are too difficult to put into words. It allows you to physically map out and safely explore your inner world.",
    },
    {
        slug: "trauma",
        icon: <Brain size={32} strokeWidth={1.5} />,
        title: "Trauma Therapy",
        tagline: "Healing begins when you are supported to feel safe.",
        excerpt: "Whether it's complex, developmental, or single-incident trauma, we use evidence-based modalities like somatic therapy, emotion-focused therapy, and Internal Family Systems to support your healing journey.",
    },
    {
        slug: "play",
        icon: <Puzzle size={32} strokeWidth={1.5} />,
        title: "Play Therapy",
        tagline: "Meeting children where they are — in play.",
        excerpt: "Play is the natural language of children. Through play therapy, children express thoughts and feelings they cannot yet put into words, building resilience and emotional regulation.",
    },
    {
        slug: "assessments",
        icon: <ClipboardList size={32} strokeWidth={1.5} />,
        title: "Assessments",
        tagline: "Clarity through comprehensive evaluation.",
        excerpt: "Our thorough psychological assessments identify cognitive, emotional, and behavioural patterns to provide clear diagnoses and actionable treatment recommendations.",
    },
    {
        slug: "vocational",
        icon: <Briefcase size={32} strokeWidth={1.5} />,
        title: "Vocational Support",
        tagline: "Empowering your professional journey.",
        excerpt: "We provide psychological support for workplace stress, career transitions, disability claims, and vocational rehabilitation — helping you thrive professionally.",
    },
    {
        slug: "workshops",
        icon: <Users size={32} strokeWidth={1.5} />,
        title: "Workshops & Therapeutic Groups",
        tagline: "Connect and heal in community.",
        excerpt: "Evidence-based psychoeducational groups, virtual workshops, and parent support sessions designed to foster shared understanding and collective growth.",
    },
];

export default function ServicesPage() {
    return (
        <div style={{ backgroundColor: "var(--color-cream)", minHeight: "100vh", position: "relative", overflow: "hidden" }} className="w-full pt-24 pb-20">
            <FloatingOrbs variant="sage" />

            {/* Hero Banner */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ backgroundColor: "#A1A79E", padding: "4rem 1.5rem", position: "relative", overflow: "hidden" }}
                className="text-center"
            >
                <FloatingOrbs variant="cream" />
                <div className="relative z-10">
                    <p style={{
                        fontFamily: "var(--font-sans)", fontSize: "0.7rem", fontWeight: 600,
                        letterSpacing: "0.2em", textTransform: "uppercase",
                        color: "#B57B66", marginBottom: "1.5rem",
                    }}>
                        What We Offer
                    </p>
                    <h1 style={{
                        fontFamily: "var(--font-serif)", fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                        color: "var(--color-cream)", lineHeight: 1.1,
                        maxWidth: "800px", margin: "0 auto 2rem",
                    }}>
                        Specialized Therapy <br />
                        <em style={{ color: "#B57B66" }}>for Every Thread of You</em>
                    </h1>
                    <p style={{
                        color: "rgba(252, 246, 242,0.7)", fontWeight: 400,
                        maxWidth: "560px", margin: "0 auto",
                        fontSize: "1.2rem", lineHeight: 1.9
                    }}>
                        Each service is deep, empathetic, and tailored specifically to your unique mental landscape. We don't treat symptoms — we unravel causes.
                    </p>
                </div>
            </motion.div>

            {/* Service Cards Grid */}
            <div className="max-w-7xl mx-auto px-6 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.slug}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: i * 0.1 }}
                        >
                            <Link
                                to={`/services/${service.slug}`}
                                style={{
                                    display: "flex", flexDirection: "column", height: "100%",
                                    backgroundColor: "var(--color-cream-dark)", borderRadius: "1.5rem",
                                    padding: "2.5rem", border: "1px solid rgba(217, 187, 186,0.15)",
                                    transition: "transform 0.3s, box-shadow 0.3s, border-color 0.3s",
                                    textDecoration: "none",
                                }}
                                className="hover:shadow-xl hover:-translate-y-2"
                                onMouseOver={e => e.currentTarget.style.borderColor = "var(--color-wine)"}
                                onMouseOut={e => e.currentTarget.style.borderColor = "rgba(217, 187, 186,0.15)"}
                            >
                                <div style={{
                                    color: "var(--color-wine)", marginBottom: "1.5rem",
                                    width: "60px", height: "60px", borderRadius: "50%",
                                    backgroundColor: "rgba(160, 89, 98,0.08)",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                }}>
                                    {service.icon}
                                </div>
                                <h3 style={{
                                    fontFamily: "var(--font-serif)", fontSize: "1.6rem",
                                    color: "var(--color-text-dark)", marginBottom: "0.5rem", lineHeight: 1.2
                                }}>
                                    {service.title}
                                </h3>
                                <p style={{
                                    fontFamily: "var(--font-serif)", fontSize: "1rem",
                                    color: "var(--color-wine)", fontStyle: "italic", marginBottom: "1.25rem",
                                }}>
                                    {service.tagline}
                                </p>
                                <p style={{
                                    color: "var(--color-text-muted)", fontWeight: 400,
                                    fontSize: "1.15rem", lineHeight: 1.8, flexGrow: 1,
                                }}>
                                    {service.excerpt}
                                </p>
                                <div style={{
                                    display: "flex", alignItems: "center", gap: "0.5rem",
                                    color: "var(--color-wine)", fontFamily: "var(--font-sans)",
                                    fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em",
                                    textTransform: "uppercase", marginTop: "1.5rem",
                                }}>
                                    Learn More <ArrowRight size={14} />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* CTA Banner — Wine */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ backgroundColor: "var(--color-wine)" }}
                className="py-24 px-6 text-center"
            >
                <div className="flex justify-center mb-3 -mt-8">
                    <SpinningLogo size={180} variant="black" />
                </div>
                <p style={{
                    fontFamily: "var(--font-sans)", fontSize: "0.7rem", fontWeight: 600,
                    letterSpacing: "0.2em", textTransform: "uppercase",
                    color: "var(--color-lilac)", marginBottom: "1.5rem",
                }}>
                    Free Consultation
                </p>
                <h2 style={{
                    fontFamily: "var(--font-serif)", fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
                    color: "var(--color-cream)", maxWidth: "700px",
                    margin: "0 auto 1.5rem", lineHeight: 1.15
                }}>
                    Not Sure Where to Start?
                </h2>
                <p style={{ color: "rgba(252, 246, 242,0.7)", fontWeight: 400, maxWidth: "500px", margin: "0 auto 2.5rem", fontSize: "1.2rem", lineHeight: 1.9 }}>
                    Connect with me for a free 15-minute telephone consultation and we'll help you find the right path forward.
                </p>
                <a href="https://iosinsights.janeapp.com/" target="_blank" rel="noreferrer" className="btn-light">
                    Connect with Me
                </a>
            </motion.div>
        </div>
    );
}
