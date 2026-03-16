import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FloatingOrbs from "./FloatingOrbs";

const services = [
    {
        category: "Individual Therapy",
        title: "Therapy for Depression",
        excerpt: "Treat the root of the insidious monster. Step toward a life you can't wait to wake up to.",
        link: "/services/depression"
    },
    {
        category: "Individual Therapy",
        title: "Therapy for Anxiety",
        excerpt: "Quiet the noise and find your center. Regain a sense of safety and calm.",
        link: "/services/anxiety"
    },
    {
        category: "Therapy",
        title: "Attachment Therapy",
        excerpt: "Build the relationships you want. Shift long-standing beliefs held in mind and body.",
        link: "/services/attachment"
    },
    {
        category: "Therapy",
        title: "Trauma Therapy",
        excerpt: "Safely process past experiences and regulate your nervous system to restore inner peace.",
        link: "/services/trauma",
    },
    {
        category: "Child Therapy",
        title: "Play Therapy",
        excerpt: "Children communicate through play. We provide a safe space for them to express complex emotions.",
        link: "/services/play",
    },
    {
        category: "Therapy",
        title: "Sandtray Therapy",
        excerpt: "Process what words cannot capture. A hands-on tool to safely map and explore your inner world.",
        link: "/services/sandtray",
    },
    {
        category: "Assessments",
        title: "Psychodiagnostic Assessments",
        excerpt: "Gain clarity through comprehensive psychological evaluations to better understand your unique mind.",
        link: "/services/assessments",
    },
    {
        category: "Career",
        title: "Vocational Support",
        excerpt: "Navigate career transitions, workplace stress, and find professional fulfillment and purpose.",
        link: "/services/vocational",
    },
    {
        category: "Virtual",
        title: "Tele-assessments",
        excerpt: "Accessible and rigorous psychological assessments conducted remotely for your convenience.",
        link: "/services/tele-assessments",
    },
];

export default function ServicesOverview() {
    return (
        <section style={{ backgroundColor: "var(--color-wine)", position: "relative", overflow: "hidden" }} className="w-full py-28 px-6">
            <FloatingOrbs variant="wine" />
            <div className="max-w-7xl mx-auto relative z-10">

                {/* Section header */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p style={{
                            fontFamily: "var(--font-sans)", fontSize: "0.7rem", fontWeight: 600,
                            letterSpacing: "0.2em", textTransform: "uppercase",
                            color: "var(--color-lilac)", marginBottom: "1rem",
                        }}>
                            Areas of Practice
                        </p>
                        <h2 style={{
                            fontFamily: "var(--font-serif)", fontSize: "clamp(2.2rem, 4vw, 3.8rem)",
                            color: "var(--color-cream)", lineHeight: 1.15,
                        }}>
                            Specialized Therapy <br />
                            <em>for Every Thread of You</em>
                        </h2>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col justify-end"
                    >
                        <p style={{ color: "rgba(244, 243, 241,0.7)", fontWeight: 300, lineHeight: 1.9, fontSize: "1.2rem" }}>
                            Each of our therapy streams is deep, empathetic, and tailored specifically to your unique mental landscape. We don't treat symptoms — we unravel causes.
                        </p>
                        <Link to="/services"
                            style={{
                                display: "inline-block", alignSelf: "flex-start", marginTop: "2rem",
                                padding: "0.9rem 2.5rem", borderRadius: "9999px",
                                border: "1.5px solid rgba(244, 243, 241,0.35)", color: "var(--color-cream)",
                                fontFamily: "var(--font-sans)", fontSize: "0.75rem", fontWeight: 600,
                                letterSpacing: "0.15em", textTransform: "uppercase",
                                transition: "all 0.3s ease", textDecoration: "none",
                            }}
                            onMouseOver={e => { e.currentTarget.style.backgroundColor = "var(--color-cream)"; e.currentTarget.style.color = "var(--color-lilac-dark)"; e.currentTarget.style.borderColor = "var(--color-cream)"; }}
                            onMouseOut={e => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "var(--color-cream)"; e.currentTarget.style.borderColor = "rgba(244, 243, 241,0.35)"; }}
                        >
                            View All Services
                        </Link>
                    </motion.div>
                </div>

                {/* Service cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: i * 0.1 }}
                        >
                            <Link
                                to={service.link}
                                style={{ backgroundColor: "var(--color-cream)", borderRadius: "1.25rem", textDecoration: "none" }}
                                className="flex flex-col h-full p-10 md:p-12 group hover:shadow-lg transition-shadow duration-300 block"
                            >
                                <div className="flex items-center justify-between mb-8">
                                    <span style={{
                                        fontFamily: "var(--font-sans)", fontSize: "0.68rem", letterSpacing: "0.18em",
                                        color: "var(--color-wine)", fontWeight: 600, textTransform: "uppercase"
                                    }}>
                                        {service.category}
                                    </span>
                                    {service.tag && (
                                        <span style={{
                                            backgroundColor: "var(--color-wine)", color: "var(--color-cream)",
                                            fontSize: "0.62rem", letterSpacing: "0.12em",
                                            padding: "0.25rem 0.75rem", borderRadius: "9999px",
                                            fontWeight: 600, textTransform: "uppercase"
                                        }}>
                                            {service.tag}
                                        </span>
                                    )}
                                </div>
                                <h3 style={{
                                    fontFamily: "var(--font-serif)", fontSize: "1.9rem",
                                    color: "var(--color-text-dark)", marginBottom: "1rem", lineHeight: 1.2
                                }}>
                                    {service.title}
                                </h3>
                                <p style={{ color: "var(--color-text-muted)", fontWeight: 300, flexGrow: 1, fontSize: "1.15rem", lineHeight: 1.8 }}>
                                    {service.excerpt}
                                </p>
                                <div
                                    className="flex items-center gap-2 mt-8 group-hover:gap-4 transition-all"
                                    style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-wine)", fontWeight: 600 }}
                                >
                                    Learn More <span>→</span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
