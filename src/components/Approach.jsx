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

// BLUSH warm alt section for the About/Approach section on homepage
export default function AboutMe() {
    return (
        <section style={{ backgroundColor: "#DECEBF", position: "relative", overflow: "hidden" }} className="w-full py-28 px-6">
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
                            border: "2px solid #B57B66", opacity: 0.3, /* Terracotta border accent */
                        }} />
                        <div style={{
                            position: "absolute", bottom: "-1.5rem", right: "-1.5rem",
                            width: "60%", height: "60%", borderRadius: "1.5rem",
                            backgroundColor: "#A1A79E", opacity: 0.2, /* Sage fill accent */
                        }} />
                        <img
                            src={`${import.meta.env.BASE_URL}iso-profile.png`}
                            alt="Isoken (Iso) Ogumbor — Registered Clinical Psychologist"
                            style={{
                                width: "100%", borderRadius: "1.5rem",
                                objectFit: "cover", aspectRatio: "4/5",
                                position: "relative", zIndex: 1,
                                boxShadow: "0 20px 60px rgba(77, 94, 85, 0.18)",
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
                        {/* Label — Terracotta */}
                        <p style={{
                            fontFamily: "var(--font-sans)", fontSize: "0.7rem", fontWeight: 600,
                            letterSpacing: "0.2em", textTransform: "uppercase", color: "#B57B66",
                        }}>
                            Meet Your Therapist
                        </p>
                        {/* Terracotta divider */}
                        <div style={{ width: "3rem", height: "1.5px", backgroundColor: "#B57B66" }} />

                        {/* Heading — Terracotta on Blush */}
                        <h2 style={{
                            fontFamily: "var(--font-serif)", fontSize: "clamp(2.2rem, 4vw, 3.4rem)",
                            color: "#B57B66", lineHeight: 1.15,
                        }}>
                            Hi, I'm Isoken<br />
                            <em style={{ color: "#4D5E55" }}>(Iso) Ogumbor</em>  {/* Evergreen italic */}
                        </h2>
                        {/* Subtitle — Evergreen italic */}
                        <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem", color: "#4D5E55", fontStyle: "italic" }}>
                            Registered Clinical Psychologist
                        </p>
                        {/* Body text — Evergreen */}
                        <p style={{ color: "#4D5E55", fontWeight: 300, fontSize: "1.2rem", lineHeight: 1.9 }}>
                            My job is to help you gently explore what's been getting in the way — usually unmet needs that haven't been named, or emotional patterns that made sense at some point, but now feel stuck. When we understand the ways our past relationships and environments have shaped how we see ourselves and others, it starts to make sense why we react the way we do — or avoid, shut down, or feel overwhelmed.
                        </p>
                        <p style={{ color: "#4D5E55", fontWeight: 300, fontSize: "1.2rem", lineHeight: 1.9 }}>
                            I have over 9 years of experience offering therapy to adults, teens, and children in need. I hold additional certifications in trauma-informed expressive arts, attachment-focused therapy, flash therapy, emotion-focused individual & family therapy, and play therapy.
                        </p>

                        {/* Blockquote — Terracotta left border */}
                        <div style={{
                            borderLeft: "3px solid #B57B66",
                            paddingLeft: "1.5rem", marginTop: "0.5rem",
                        }}>
                            <p style={{
                                fontFamily: "var(--font-serif)", fontSize: "1.35rem",
                                color: "#4D5E55", lineHeight: 1.85, fontStyle: "italic",
                            }}>
                                If we are not taught or shown better, we can not do better. Think of me like a safety guide who will guide the intentional exploration of the intertwining nature of your learnt coping skills, relationships, past experiences and events, thoughts, feelings, and actions to ultimately help shift you from a state of <strong>'surviving'</strong> to a place where you are <strong>'thriving'</strong>.
                            </p>
                        </div>

                        {/* Specialty pills — Terracotta */}
                        <div className="flex flex-wrap gap-2 pt-2">
                            {specialties.map((s, i) => (
                                <span key={i} style={{
                                    backgroundColor: "rgba(181, 123, 102, 0.1)", color: "#B57B66",
                                    border: "1px solid rgba(181, 123, 102, 0.25)",
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
                                style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#B57B66", fontWeight: 600, textDecoration: "none", transition: "all 0.3s ease", display: "inline-block" }}
                                onMouseOver={e => e.currentTarget.style.transform = "translateY(-2px)"}
                                onMouseOut={e => e.currentTarget.style.transform = "translateY(0)"}
                            >
                                Connect with Me →
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Credentials ribbon — Ivory card on Blush bg */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    style={{
                        marginTop: "5rem", padding: "3rem",
                        backgroundColor: "#F4F3F1",  /* Ivory card */
                        borderRadius: "1.5rem",
                        border: "1px solid rgba(181, 123, 102, 0.2)",
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                    {credentials.map((cred, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <span style={{ color: "#B57B66", fontSize: "1.2rem", lineHeight: 1, flexShrink: 0, marginTop: "0.15rem" }}>✦</span>
                            <p style={{ color: "#4D5E55", fontWeight: 300, fontSize: "1.15rem", lineHeight: 1.6 }}>
                                {cred}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
