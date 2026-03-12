import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FloatingOrbs from "./FloatingOrbs";

const credentials = [
    "Registered Psychologist (#6706) — College of Alberta Psychologists",
    "Psychological Associate (#125A) — Psychological Association of Manitoba",
    "Registered Psychologist (#1290) — Saskatchewan College of Psychologists",
    "NIHB-Approved Provider — Alberta & Nova Scotia",
];

const specialties = [
    "Trauma-Informed Therapy",
    "Emotion-Focused Therapy",
    "Internal Family Systems (IFS)",
    "Somatic Therapy",
    "Play Therapy",
    "Acceptance & Commitment (ACT)",
];

export default function AboutMe() {
    return (
        <section style={{ backgroundColor: "var(--color-cream)", position: "relative", overflow: "hidden" }} className="w-full py-28 px-6">
            <FloatingOrbs variant="cream" />
            <div className="max-w-7xl mx-auto relative z-10">

                {/* Two-column: Photo + Bio */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Photo */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative"
                    >
                        {/* Decorative accent behind photo */}
                        <div style={{
                            position: "absolute", top: "-1.5rem", left: "-1.5rem",
                            width: "100%", height: "100%", borderRadius: "1.5rem",
                            border: "2px solid var(--color-lilac)", opacity: 0.4,
                        }} />
                        <div style={{
                            position: "absolute", bottom: "-1.5rem", right: "-1.5rem",
                            width: "60%", height: "60%", borderRadius: "1.5rem",
                            backgroundColor: "var(--color-wine)", opacity: 0.15,
                        }} />
                        <img
                            src={`${import.meta.env.BASE_URL}office-1.jpg`}
                            alt="iOS Insights Office Space"
                            style={{
                                width: "100%", borderRadius: "1.5rem",
                                objectFit: "cover", aspectRatio: "4/5",
                                position: "relative", zIndex: 1,
                                boxShadow: "0 20px 60px rgba(44,27,44,0.15)",
                            }}
                        />
                    </motion.div>

                    {/* Right: Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
                        className="space-y-6"
                    >
                        <p className="section-label">Meet Your Therapist</p>
                        <div className="divider" />
                        <h2 style={{
                            fontFamily: "var(--font-serif)", fontSize: "clamp(2.2rem, 4vw, 3.4rem)",
                            color: "var(--color-text-dark)", lineHeight: 1.15,
                        }}>
                            Hi, I'm Isoken<br />
                            <em style={{ color: "var(--color-wine)" }}>(Iso) Ogumbor</em>
                        </h2>
                        <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem", color: "var(--color-wine)", fontStyle: "italic" }}>
                            Registered Clinical Psychologist
                        </p>
                        <p style={{ color: "var(--color-text-muted)", fontWeight: 300, fontSize: "1.2rem", lineHeight: 1.9 }}>
                            As a BIPOC and neurodivergent psychologist, I am dedicated to helping others reach a place where they feel like they can <strong style={{ color: "var(--color-text-dark)" }}>chill</strong> — aka "choose how I live life"™ — instead of feeling like life has been chosen for them.
                        </p>
                        <p style={{ color: "var(--color-text-muted)", fontWeight: 300, fontSize: "1.2rem", lineHeight: 1.9 }}>
                            I have over 7 years of experience offering therapy to adults, teens, and children in need. I hold additional certifications in trauma-informed expressive arts, attachment-focused therapy, flash therapy, emotion-focused individual & family therapy, and play therapy.
                        </p>

                        {/* Safety Guide Quote */}
                        <div style={{
                            borderLeft: "3px solid var(--color-wine)",
                            paddingLeft: "1.5rem", marginTop: "0.5rem",
                        }}>
                            <p style={{
                                fontFamily: "var(--font-serif)", fontSize: "1.35rem",
                                color: "var(--color-text-dark)", lineHeight: 1.85,
                                fontStyle: "italic",
                            }}>
                                If we are not taught or shown better, we can not do better. Think of me like a safety guide who will guide the intentional exploration of the intertwining nature of your learnt coping skills, relationships, past experiences and events, thoughts, feelings, and actions to ultimately help shift you from a state of <strong>'surviving'</strong> to a place where you are <strong>'thriving'</strong>.
                            </p>
                        </div>

                        {/* Credentials pills */}
                        <div className="flex flex-wrap gap-2 pt-2">
                            {specialties.map((s, i) => (
                                <span key={i} style={{
                                    backgroundColor: "rgba(144,70,92,0.08)", color: "var(--color-wine)",
                                    fontSize: "0.7rem", letterSpacing: "0.1em", fontWeight: 600,
                                    padding: "0.4rem 1rem", borderRadius: "9999px", textTransform: "uppercase",
                                }}>
                                    {s}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center gap-6 pt-4">
                            <Link to="/approach" className="btn-primary">Read My Approach</Link>
                            <a href="https://iosinsights.janeapp.com/" target="_blank" rel="noreferrer"
                                style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-wine)", fontWeight: 600, textDecoration: "none", transition: "all 0.3s ease", display: "inline-block" }}
                                onMouseOver={e => e.currentTarget.style.transform = "translateY(-2px)"}
                                onMouseOut={e => e.currentTarget.style.transform = "translateY(0)"}
                            >
                                Connect with Me →
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Credentials ribbon */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    style={{
                        marginTop: "5rem", padding: "3rem",
                        backgroundColor: "var(--color-cream-dark)",
                        borderRadius: "1.5rem",
                        border: "1px solid var(--color-lilac)",
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                    {credentials.map((cred, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <span style={{ color: "var(--color-wine)", fontSize: "1.2rem", lineHeight: 1, flexShrink: 0, marginTop: "0.15rem" }}>✦</span>
                            <p style={{ color: "var(--color-text-muted)", fontWeight: 300, fontSize: "1.15rem", lineHeight: 1.6 }}>
                                {cred}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
