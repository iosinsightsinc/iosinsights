import { motion } from "framer-motion";
import { Smartphone, ExternalLink, Star, Brain, Moon, Sparkles, Heart, Shield, Activity } from "lucide-react";
import SpinningLogo from "../components/SpinningLogo";

const mentalHealthApps = [
    {
        name: "Daylio",
        icon: <Sparkles size={24} strokeWidth={1.5} />,
        description: "This app lets you track your mood throughout the day using a simple emoji system. You can add notes and activities to each entry, and the app will generate insightful reports over time.",
        tags: ["Mood Tracking", "Journaling"],
        url: "https://daylio.net/",
    },
    {
        name: "eMood",
        icon: <Activity size={24} strokeWidth={1.5} />,
        description: "This app is specifically designed for people with bipolar disorder, but it can be used by anyone to track their mood. You can track your mood hourly, as well as your medication, sleep, and other factors.",
        tags: ["Mood Tracking", "Bipolar", "Medication"],
        url: "https://emoodtracker.com/",
    },
    {
        name: "MoodNotes",
        icon: <Heart size={24} strokeWidth={1.5} />,
        description: "A super easy mood tracker & journaling app to capture your mood and help you improve your thinking habits. Moodnotes empowers you to track your mood over time, avoid common thinking traps, and develop perspectives associated with increased happiness and well-being.",
        tags: ["Mood Tracking", "CBT", "Journaling"],
        url: "https://apps.apple.com/us/app/moodnotes-mood-tracker/id1019230398",
    },
    {
        name: "MyPossibleSelf",
        icon: <Brain size={24} strokeWidth={1.5} />,
        description: "My Possible Self is a mental health app designed to help individuals manage anxiety, stress, low mood, and sleep issues. It offers clinically certified tools including mood tracking, CBT techniques, guided relaxation exercises, sleep improvement tools, and personalized plans based on your individual needs.",
        tags: ["CBT", "Anxiety", "Sleep", "Personalized"],
        url: "https://www.mypossibleself.com/",
    },
    {
        name: "Mindshift CBT",
        icon: <Shield size={24} strokeWidth={1.5} />,
        description: "MindShift CBT is a free self-help anxiety relief app that helps you reduce worry, stress, and panic by following evidence-based strategies. Using CBT tools, you can challenge negativity, learn more about anxiety, develop more effective ways of thinking, be mindful, and relax.",
        tags: ["CBT", "Anxiety Relief", "Free"],
        url: "https://www.anxietycanada.com/resources/mindshift-cbt/",
    },
    {
        name: "Happify",
        icon: <Star size={24} strokeWidth={1.5} />,
        description: "Happify's science-based activities and games can help you overcome negative thoughts, stress, and life's challenges. Techniques are developed by leading scientists and experts in positive psychology, mindfulness, and cognitive behavioural therapy.",
        tags: ["Positive Psychology", "Mindfulness", "CBT"],
        url: "https://www.happify.com/",
    },
    {
        name: "Flow Neuroscience",
        icon: <Moon size={24} strokeWidth={1.5} />,
        description: "The Flow depression treatment app is a free, science-backed guide to help users understand, treat, and prevent depression. It offers personalized plans, mood tracking, CBT techniques, mindfulness exercises, and psychoeducation to support mental health and emotional well-being.",
        tags: ["Depression", "CBT", "Mindfulness", "Free"],
        links: {
            iphone: "https://apps.apple.com/gb/app/flow-depression-treatment/id1191476056",
            android: "https://play.google.com/store/apps/details?id=com.flowneuroscience.flow.droid&hl=en_CA",
        },
    },
];

const sortedApp = {
    name: "Sorted Mental Health",
    tagline: "Positive Mental Training based on Olympic sports psychology",
    description: "Sorted offers Positive Mental Training audio programmes based on scientific research which can help you feel better, lift your mood and recover from stress, anxiety, and depression by building resilience and developing positive feelings.",
    highlights: [
        "Recommended for use by the NHS",
        "Used by over 2,000 doctors & nurses",
        "Helped 80,000 patients build mental resilience",
        "Based on Olympic sports mind coaching techniques",
        "After only 2 weeks many people feel much better",
    ],
    benefits: [
        "Increased wellbeing & positive mindset",
        "Sleep better & worry less",
        "Reduces depression & stress",
        "See problems as challenges",
        "Increased vitality & self-esteem",
    ],
    url: "https://www.sortedmentalhealth.app/",
    testimonial: "\"The Sorted app sits on my phone home page, ready to access whenever and wherever I am. It is brilliantly simple, easy to use and I like the range of voices, background music and topics it covers. It is very good value for money and I like the fact that it is rooted in the science of sport – if it's good for Olympic athletes, then it's definitely good for me.\"",
    testimonialAuthor: "Suzy Powell, App User",
};

export default function Resources() {
    return (
        <div style={{ backgroundColor: "var(--color-cream)" }} className="w-full pt-28">

            {/* Hero Banner — Wine */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ backgroundColor: "#A1A79E", padding: "6rem 1.5rem" }}
                className="text-center"
            >
                <p style={{
                    fontFamily: "var(--font-sans)", fontSize: "0.7rem", fontWeight: 600,
                    letterSpacing: "0.2em", textTransform: "uppercase",
                    color: "#B57B66", marginBottom: "1.5rem",
                }}>
                    Mental Health Resources
                </p>
                <h1 style={{
                    fontFamily: "var(--font-serif)", fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                    color: "var(--color-cream)", lineHeight: 1.1,
                    maxWidth: "800px", margin: "0 auto 2rem",
                }}>
                    Tools to Support <br />
                    <em style={{ color: "#B57B66" }}>Your Journey</em>
                </h1>
                <p style={{
                    color: "rgba(252, 246, 242,0.7)", fontWeight: 400,
                    maxWidth: "600px", margin: "0 auto",
                    fontSize: "1.2rem", lineHeight: 1.9
                }}>
                    Mental health apps provide accessible tools to support emotional well-being, offering features like mood tracking, therapy techniques, mindfulness exercises, and personalized care plans.
                </p>
            </motion.div>

            {/* Featured: Sorted Mental Health */}
            <div className="max-w-6xl mx-auto px-6 py-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <p className="section-label mb-4">Featured Resource</p>
                    <h2 style={{
                        fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 3.5vw, 3rem)",
                        color: "var(--color-text-dark)", lineHeight: 1.15,
                    }}>
                        Sorted Mental Health App
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{
                        background: "linear-gradient(135deg, var(--color-lilac-dark) 0%, var(--color-wine) 100%)",
                        borderRadius: "1.5rem", padding: "3.5rem", color: "var(--color-cream)",
                    }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <p style={{
                                fontFamily: "var(--font-serif)", fontSize: "1.2rem",
                                fontStyle: "italic", color: "var(--color-lilac)", marginBottom: "1.5rem",
                            }}>
                                {sortedApp.tagline}
                            </p>
                            <p style={{ fontSize: "1.2rem", lineHeight: 1.9, fontWeight: 400, color: "rgba(252, 246, 242,0.85)", marginBottom: "2rem" }}>
                                {sortedApp.description}
                            </p>
                            <div className="space-y-3 mb-8">
                                {sortedApp.highlights.map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <Star size={16} style={{ color: "var(--color-lilac)", flexShrink: 0 }} />
                                        <span style={{ fontSize: "1.1rem", fontWeight: 400, color: "rgba(252, 246, 242,0.8)" }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                            <a
                                href={sortedApp.url}
                                target="_blank"
                                rel="noreferrer"
                                className="btn-light"
                                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
                            >
                                Visit Sorted <ExternalLink size={14} />
                            </a>
                        </div>
                        <div className="flex flex-col justify-between">
                            <div style={{
                                backgroundColor: "rgba(252, 246, 242,0.08)", borderRadius: "1.25rem",
                                padding: "2.5rem", border: "1px solid rgba(252, 246, 242,0.1)",
                                marginBottom: "2rem",
                            }}>
                                <span style={{ fontFamily: "var(--font-serif)", fontSize: "3rem", color: "var(--color-lilac)", lineHeight: 0.5, display: "block", marginBottom: "1rem", opacity: 0.5 }}>"</span>
                                <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.35rem", lineHeight: 1.7, fontStyle: "italic", color: "rgba(252, 246, 242,0.85)" }}>
                                    {sortedApp.testimonial}
                                </p>
                                <p style={{ color: "var(--color-lilac)", fontFamily: "var(--font-sans)", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: "1.5rem" }}>
                                    — {sortedApp.testimonialAuthor}
                                </p>
                            </div>
                            <div>
                                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-lilac)", marginBottom: "1rem" }}>
                                    Key Benefits
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {sortedApp.benefits.map((b, i) => (
                                        <span key={i} style={{
                                            padding: "0.4rem 1rem", borderRadius: "9999px",
                                            backgroundColor: "rgba(252, 246, 242,0.1)", color: "var(--color-cream)",
                                            fontFamily: "var(--font-sans)", fontSize: "0.8rem", fontWeight: 500,
                                        }}>
                                            {b}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Mental Health Apps Grid */}
            <div style={{ backgroundColor: "var(--color-cream-dark)" }} className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <p className="section-label mb-4">Apps You'll Want to Know About</p>
                        <h2 style={{
                            fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 3.5vw, 3rem)",
                            color: "var(--color-text-dark)", lineHeight: 1.15, maxWidth: "600px", margin: "0 auto",
                        }}>
                            Recommended <em>Mental Health Apps</em>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {mentalHealthApps.map((app, i) => (
                            <motion.div
                                key={app.name}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: i * 0.08 }}
                                style={{
                                    backgroundColor: "var(--color-cream)", borderRadius: "1.5rem",
                                    padding: "2.5rem", border: "1px solid rgba(217, 187, 186,0.15)",
                                    transition: "transform 0.3s, box-shadow 0.3s",
                                    display: "flex", flexDirection: "column", height: "100%",
                                }}
                                className="hover:shadow-xl hover:-translate-y-1"
                            >
                                <div style={{
                                    color: "var(--color-wine)", marginBottom: "1.5rem",
                                    width: "50px", height: "50px", borderRadius: "50%",
                                    backgroundColor: "rgba(160, 89, 98,0.08)",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                }}>
                                    {app.icon}
                                </div>
                                <div className="flex items-center gap-2 mb-2">
                                    <Smartphone size={14} style={{ color: "var(--color-text-muted)" }} />
                                    <h3 style={{
                                        fontFamily: "var(--font-serif)", fontSize: "1.5rem",
                                        color: "var(--color-text-dark)", lineHeight: 1.2
                                    }}>
                                        {app.name}
                                    </h3>
                                </div>
                                <p style={{ color: "var(--color-text-muted)", fontWeight: 400, fontSize: "1.1rem", lineHeight: 1.8, flexGrow: 1, marginBottom: "1.5rem" }}>
                                    {app.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {app.tags.map(tag => (
                                        <span key={tag} style={{
                                            padding: "0.3rem 0.8rem", borderRadius: "9999px",
                                            backgroundColor: "rgba(160, 89, 98,0.06)", color: "var(--color-wine)",
                                            fontFamily: "var(--font-sans)", fontSize: "0.7rem", fontWeight: 600,
                                            letterSpacing: "0.08em", textTransform: "uppercase",
                                        }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                {app.url && (
                                    <a href={app.url} target="_blank" rel="noreferrer"
                                        style={{
                                            display: "inline-flex", alignItems: "center", gap: "0.5rem",
                                            backgroundColor: "var(--color-wine)", color: "var(--color-cream)",
                                            fontFamily: "var(--font-sans)", fontSize: "0.8rem", fontWeight: 600,
                                            letterSpacing: "0.1em", textTransform: "uppercase",
                                            textDecoration: "none", padding: "0.7rem 1.5rem",
                                            borderRadius: "9999px", transition: "opacity 0.2s",
                                        }}
                                        onMouseOver={e => e.currentTarget.style.opacity = 0.85}
                                        onMouseOut={e => e.currentTarget.style.opacity = 1}
                                    >
                                        Learn More <ExternalLink size={13} />
                                    </a>
                                )}
                                {app.links && (
                                    <div className="flex gap-3">
                                        <a href={app.links.iphone} target="_blank" rel="noreferrer"
                                            style={{
                                                display: "inline-flex", alignItems: "center", gap: "0.4rem",
                                                backgroundColor: "var(--color-wine)", color: "var(--color-cream)",
                                                fontFamily: "var(--font-sans)", fontSize: "0.8rem", fontWeight: 600,
                                                letterSpacing: "0.1em", textTransform: "uppercase",
                                                textDecoration: "none", padding: "0.7rem 1.2rem",
                                                borderRadius: "9999px", transition: "opacity 0.2s",
                                            }}
                                            onMouseOver={e => e.currentTarget.style.opacity = 0.85}
                                            onMouseOut={e => e.currentTarget.style.opacity = 1}
                                        >
                                            iPhone <ExternalLink size={12} />
                                        </a>
                                        <a href={app.links.android} target="_blank" rel="noreferrer"
                                            style={{
                                                display: "inline-flex", alignItems: "center", gap: "0.4rem",
                                                backgroundColor: "var(--color-wine)", color: "var(--color-cream)",
                                                fontFamily: "var(--font-sans)", fontSize: "0.8rem", fontWeight: 600,
                                                letterSpacing: "0.1em", textTransform: "uppercase",
                                                textDecoration: "none", padding: "0.7rem 1.2rem",
                                                borderRadius: "9999px", transition: "opacity 0.2s",
                                            }}
                                            onMouseOver={e => e.currentTarget.style.opacity = 0.85}
                                            onMouseOut={e => e.currentTarget.style.opacity = 1}
                                        >
                                            Android <ExternalLink size={12} />
                                        </a>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Disclaimer + CTA */}
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
                    Need More Support?
                </p>
                <h2 style={{
                    fontFamily: "var(--font-serif)", fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
                    color: "var(--color-cream)", maxWidth: "700px",
                    margin: "0 auto 1rem", lineHeight: 1.15
                }}>
                    Apps Are a Great Start — <br />
                    <em style={{ color: "rgba(252, 246, 242,0.65)" }}>Therapy Goes Deeper</em>
                </h2>
                <p style={{ color: "rgba(252, 246, 242,0.7)", fontWeight: 400, maxWidth: "560px", margin: "0 auto 1rem", fontSize: "1.2rem", lineHeight: 1.9 }}>
                    These apps are wonderful tools for self-support, but they work best alongside professional care. If you're ready for deeper work, we're here.
                </p>
                <p style={{ color: "rgba(252, 246, 242,0.5)", fontStyle: "italic", fontSize: "0.9rem", marginBottom: "2.5rem" }}>
                    *Note: These recommendations are for educational purposes. They are not a substitute for professional therapy.*
                </p>
                <a href="https://iosinsights.janeapp.com/" target="_blank" rel="noreferrer" className="btn-light">
                    Connect with Me
                </a>
            </motion.div>
        </div>
    );
}
