import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SpinningLogo from "../components/SpinningLogo";
import FloatingOrbs from "../components/FloatingOrbs";
import { CheckCircle2, Heart, Brain, Shield, Users, Sparkles, BookOpen, ChevronDown } from "lucide-react";

const approachPrinciples = [
    {
        icon: <Heart size={28} strokeWidth={1.5} />,
        title: "Trauma-Informed & Person-Centered",
        body: "I operate from a trauma-informed and person-centered approach. I aim to listen non-judgmentally and with care. Most importantly, I believe that people are resilient."
    },
    {
        icon: <Brain size={28} strokeWidth={1.5} />,
        title: "Safe Therapeutic Relationship",
        body: "I focus on developing a safe therapeutic relationship, which includes healthy authentic communication, and makes use of humor, information sharing, and evidence-based approaches."
    },
    {
        icon: <Shield size={28} strokeWidth={1.5} />,
        title: "Culturally Sensitive Treatment",
        body: "I aim to offer culturally sensitive treatment, which includes the acknowledgment and encouragement of people to explore the way their thoughts, feelings, and surroundings impact the choices they make."
    },
    {
        icon: <Users size={28} strokeWidth={1.5} />,
        title: "Connection & Healing",
        body: "Humans are social animals; our brains are built for connection. We crave safe relationships to support us to feel, heal, deal, and grow. We all want to be the best version of ourselves."
    },
    {
        icon: <Sparkles size={28} strokeWidth={1.5} />,
        title: "Warm Presence",
        body: "My approach within sessions is to intentionally strive to provide a warm presence — to listen with care, to be open to diverse opinions. Most importantly, I aim to create a warm and caring connection that helps provide positive emotional experiences. This shows how real change can happen when someone feels safe, understood, and secure in their relationships."
    },
    {
        icon: <BookOpen size={28} strokeWidth={1.5} />,
        title: "Holistic Perspective",
        body: "My multifaceted and holistic perspective compliments my ability to support in the healing of traumatic experiences and facilitate post-traumatic growth."
    },
];

const therapyModalities = [
    { title: "Emotion-Focused Therapy (EFT)", content: "Content for Emotion-Focused Therapy will go here." },
    { title: "Somatic Therapy", content: "Content for Somatic Therapy will go here." },
    { title: "Internal Family Systems (IFS)", content: "Content for Internal Family Systems will go here." },
    { title: "Acceptance & Commitment Therapy (ACT)", content: "Content for Acceptance & Commitment Therapy will go here." },
    { title: "Trauma Focused-Cognitive Behavioural Therapy (TF-CBT)", content: "Content for Trauma Focused-Cognitive Behavioural Therapy will go here." },
    { title: "Strengths Based Therapy", content: "Content for Strengths Based Therapy will go here." },
    { title: "Solution-Focused Therapy", content: "Content for Solution-Focused Therapy will go here." },
    { title: "Motivational Interviewing", content: "Content for Motivational Interviewing will go here." },
    { title: "Thera-play (Level One Foundational)", content: "Content for Thera-play will go here." },
    { title: "Trauma-Focused Expressive Arts Therapy", content: "Content for Trauma-Focused Expressive Arts Therapy will go here." },
    { title: "Cognitive Processing Therapy (CPT)", content: "Content for Cognitive Processing Therapy will go here." },
    { title: "Flash Therapy", content: "Content for Flash Therapy will go here." },
];

const education = [
    "Master of Counselling (Applied Psychology) — University of Lethbridge, 2019",
    "School of Graduate Studies Silver Medal of Merit Award recipient",
    "9+ years of clinical experience in evidence-based assessment, diagnosis, and treatment",
    "Worked with non-profit organizations, school-based services, and Alberta Health Services",
];

const inProgressCerts = [
    { title: "ADHD Certified Clinical Services Provider (ADHD-CCSP) certification", content: "Detailed content about this ADHD certification will be added here as it progresses." },
];

export default function MyApproach() {
    const [openModality, setOpenModality] = useState(null);
    const [openInProgress, setOpenInProgress] = useState(null);

    return (
        <div style={{ backgroundColor: "var(--color-cream)", position: "relative", overflow: "hidden" }} className="w-full pt-28">
            <FloatingOrbs variant="sage" />

            {/* Hero Banner — Wine with photo */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ backgroundColor: "#A1A79E", padding: "5rem 1.5rem" }}
            >
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Photo */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative mx-auto md:mx-0"
                        style={{ maxWidth: "380px" }}
                    >
                        <div style={{
                            position: "absolute", top: "-1rem", left: "-1rem",
                            width: "100%", height: "100%", borderRadius: "1.5rem",
                            border: "2px solid var(--color-lilac)", opacity: 0.3,
                        }} />
                        <img
                            src={`${import.meta.env.BASE_URL}iso-profile.png`}
                            alt="Isoken (Iso) Ogumbor"
                            style={{
                                width: "100%", borderRadius: "1.5rem",
                                objectFit: "cover", aspectRatio: "4/5",
                                position: "relative", zIndex: 1,
                                boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
                            }}
                        />
                    </motion.div>

                    {/* Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="text-center md:text-left"
                    >

                        <h1 style={{
                            fontFamily: "var(--font-serif)", fontSize: "clamp(2.5rem, 5vw, 4.2rem)",
                            color: "var(--color-cream)", lineHeight: 1.1,
                            marginBottom: "2rem",
                        }}>
                            My Approach <br />
                            <em style={{ color: "rgba(252, 246, 242,0.65)" }}>to Healing & Growth</em>
                        </h1>
                        <p style={{
                            color: "rgba(252, 246, 242,0.7)", fontWeight: 400,
                            fontSize: "1.2rem", lineHeight: 1.9
                        }}>
                            When we are supported to identify and address the unmet needs that may block us from feeling like 'our best', we gain a greater sense of self.
                        </p>
                    </motion.div>
                </div>
            </motion.div>

            {/* Core Approach Principles */}
            <div className="max-w-7xl mx-auto px-6 py-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="section-label mb-4">Core Principles</p>
                    <h2 style={{
                        fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 3.5vw, 3rem)",
                        color: "var(--color-text-dark)", lineHeight: 1.15, maxWidth: "600px", margin: "0 auto",
                    }}>
                        The Foundation of<br /> <em>My Therapeutic Practice</em>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {approachPrinciples.map((principle, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: i * 0.1 }}
                            style={{
                                backgroundColor: "var(--color-cream-dark)",
                                borderRadius: "1.25rem", padding: "2.5rem",
                                border: "1px solid rgba(217, 187, 186,0.2)",
                                transition: "transform 0.3s, box-shadow 0.3s",
                            }}
                            className="hover:shadow-lg hover:-translate-y-1"
                        >
                            <div style={{ color: "var(--color-wine)", marginBottom: "1.5rem" }}>
                                {principle.icon}
                            </div>
                            <h3 style={{
                                fontFamily: "var(--font-serif)", fontSize: "1.6rem",
                                color: "var(--color-text-dark)", marginBottom: "1rem", lineHeight: 1.2
                            }}>
                                {principle.title}
                            </h3>
                            <p style={{ color: "var(--color-text-muted)", fontWeight: 300, fontSize: "1.15rem", lineHeight: 1.8 }}>
                                {principle.body}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Philosophy Quote — Wine section */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ backgroundColor: "var(--color-wine)" }}
                className="py-20 px-6 text-center"
            >
                <div className="max-w-4xl mx-auto">
                    <span style={{ fontFamily: "var(--font-serif)", fontSize: "6rem", color: "var(--color-lilac)", lineHeight: 0.5, display: "block", marginBottom: "1rem", opacity: 0.5 }}>"</span>
                    <p style={{
                        fontFamily: "var(--font-serif)", fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                        color: "var(--color-cream)", lineHeight: 1.6, fontStyle: "italic",
                    }}>
                        If you're a human, you've likely had some type of hardship that has left you feeling 'off', 'triggered', or 'stuck'. My aim is to support your stride until you can return to a state of balance — emotionally and within every day life.
                    </p>
                    <p style={{ color: "var(--color-lilac)", fontFamily: "var(--font-sans)", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", marginTop: "2rem" }}>
                        — Isoken (Iso) Ogumbor
                    </p>
                </div>
            </motion.div>

            {/* Session Promise — Cream */}
            <div className="max-w-4xl mx-auto px-6 py-24 space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <p className="section-label">In Session</p>
                    <div className="divider" />
                    <h2 style={{
                        fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 3.5vw, 3rem)",
                        color: "var(--color-text-dark)", lineHeight: 1.15,
                    }}>
                        What You Can Expect
                    </h2>
                    <p style={{ color: "var(--color-text-muted)", fontWeight: 300, fontSize: "1.2rem", lineHeight: 1.9, marginBottom: "1.5rem" }}>
                        My job is to help you gently explore what’s been getting in the way — usually unmet needs that haven’t been named, or emotional patterns that made sense at some point, but now feel stuck. When we understand the ways our past relationships and environments have shaped how we see ourselves and others, it starts to make sense why we react the way we do — or avoid, shut down, or feel overwhelmed.
                    </p>
                    <p style={{ color: "var(--color-text-muted)", fontWeight: 300, fontSize: "1.2rem", lineHeight: 1.9, marginBottom: "1.5rem" }}>
                        I use a mix of humor, education, and structured approaches like Emotion-Focused Therapy and ACT. I also draw a lot on somatic therapy and attachment theory. One metaphor I often use is to imagine the self like a house. Your earliest attachments — the relationships that helped form your nervous system and sense of self — are like the foundation. If there were cracks in that foundation, it can show up later as issues in the ‘upper floors’: relationships, emotional regulation, confidence, decision-making, etc.
                    </p>
                    <p style={{ color: "var(--color-text-muted)", fontWeight: 300, fontSize: "1.2rem", lineHeight: 1.9 }}>
                        Sometimes we end up spending years trying to patch up those upper floors — but real change happens when we slowly and safely go down into the basement, where those original patterns or beliefs live, and start doing the core repairs. That’s where we begin shifting what’s called your internal working model — which is just a fancy way of saying the mental blueprint that has been formed in your mind and informs how you expect the world to treat you, and how you believe you’re allowed to show up in it.
                    </p>
                </motion.div>
            </div>

            {/* Therapy Modalities — Cream-dark */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-5xl mx-auto px-6 pb-24"
            >
                <div style={{
                    backgroundColor: "var(--color-cream-dark)", borderRadius: "1.5rem",
                    padding: "3.5rem", border: "1px solid var(--color-lilac)",
                }}>
                    <h2 style={{
                        fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                        color: "var(--color-text-dark)", marginBottom: "2rem", lineHeight: 1.2
                    }}>
                        Therapeutic Modalities & Training
                    </h2>
                    <div className="flex flex-col gap-4">
                        {therapyModalities.map((item, i) => {
                            const isOpen = openModality === i;
                            return (
                                <div 
                                    key={i} 
                                    className="overflow-hidden"
                                    style={{
                                        backgroundColor: "var(--color-cream)", 
                                        borderRadius: "1rem",
                                        border: "1px solid rgba(217, 187, 186,0.3)",
                                        transition: "all 0.3s ease"
                                    }}
                                >
                                    <button 
                                        onClick={() => setOpenModality(isOpen ? null : i)}
                                        className="w-full text-left flex justify-between items-center px-6 py-5 cursor-pointer"
                                    >
                                        <div className="flex items-center gap-3">
                                            <CheckCircle2 size={20} className="flex-shrink-0" style={{ color: "var(--color-wine)" }} />
                                            <span style={{ 
                                                fontFamily: "var(--font-serif)", 
                                                color: "var(--color-text-dark)", 
                                                fontSize: "1.3rem",
                                                fontWeight: 500
                                            }}>
                                                {item.title}
                                            </span>
                                        </div>
                                        <motion.div
                                            animate={{ rotate: isOpen ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="flex-shrink-0 ml-4"
                                            style={{ color: "var(--color-wine)" }}
                                        >
                                            <ChevronDown size={20} />
                                        </motion.div>
                                    </button>
                                    
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                            >
                                                <div 
                                                    className="px-6 pb-6 pt-2"
                                                    style={{ 
                                                        color: "var(--color-text-muted)", 
                                                        fontWeight: 300, 
                                                        fontSize: "1.1rem", 
                                                        lineHeight: 1.8 
                                                    }}
                                                >
                                                    {item.content}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </motion.div>

            {/* Education — Cream */}
            <div className="max-w-4xl mx-auto px-6 pb-24 space-y-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <p className="section-label">Education & Training 👩🏾‍🎓</p>
                    <div className="divider" />
                    <h2 style={{
                        fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 3.5vw, 3rem)",
                        color: "var(--color-text-dark)", lineHeight: 1.15,
                    }}>
                        Academic Background
                    </h2>
                    {education.map((item, i) => (
                        <div key={i} className="flex gap-4 items-start">
                            <span style={{ color: "var(--color-wine)", fontSize: "1.1rem", lineHeight: 1.5, flexShrink: 0 }}>✦</span>
                            <p style={{ color: "var(--color-text-muted)", fontWeight: 300, fontSize: "1.2rem", lineHeight: 1.8 }}>
                                {item}
                            </p>
                        </div>
                    ))}

                    <div className="pt-8 space-y-6">
                        <p className="section-label">In-Progress Certifications</p>
                        <div className="flex flex-col gap-4">
                            {inProgressCerts.map((item, i) => {
                                const isOpen = openInProgress === i;
                                return (
                                    <div 
                                        key={i} 
                                        className="overflow-hidden"
                                        style={{
                                            backgroundColor: "var(--color-cream-dark)", 
                                            borderRadius: "1rem",
                                            border: "1px solid rgba(217, 187, 186,0.3)",
                                            transition: "all 0.3s ease"
                                        }}
                                    >
                                        <button 
                                            onClick={() => setOpenInProgress(isOpen ? null : i)}
                                            className="w-full text-left flex justify-between items-center px-6 py-5 cursor-pointer"
                                        >
                                            <div className="flex items-center gap-3">
                                                <span style={{ color: "var(--color-wine)", fontSize: "1.1rem", lineHeight: 1.5, flexShrink: 0 }}>✦</span>
                                                <span style={{ 
                                                    fontFamily: "var(--font-serif)", 
                                                    color: "var(--color-text-dark)", 
                                                    fontSize: "1.25rem",
                                                    fontWeight: 500
                                                }}>
                                                    {item.title}
                                                </span>
                                            </div>
                                            <motion.div
                                                animate={{ rotate: isOpen ? 180 : 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="flex-shrink-0 ml-4"
                                                style={{ color: "var(--color-wine)" }}
                                            >
                                                <ChevronDown size={20} />
                                            </motion.div>
                                        </button>
                                        
                                        <AnimatePresence>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                >
                                                    <div 
                                                        className="px-6 pb-6 pt-2"
                                                        style={{ 
                                                            color: "var(--color-text-muted)", 
                                                            fontWeight: 300, 
                                                            fontSize: "1.1rem", 
                                                            lineHeight: 1.8 
                                                        }}
                                                    >
                                                        {item.content}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Personal note — light touch */}
            <div className="max-w-4xl mx-auto px-6 pb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{
                        backgroundColor: "var(--color-cream-dark)", borderRadius: "1.5rem",
                        padding: "3rem", border: "1px solid rgba(217, 187, 186,0.2)",
                    }}
                >
                    <p className="section-label mb-4">Beyond the Office</p>
                    <p style={{ color: "var(--color-text-muted)", fontWeight: 300, fontSize: "1.2rem", lineHeight: 1.9 }}>
                        In my spare time, I enjoy spending time with my family, friends, and my furry angels (aka my dogs). When I am not in therapist-mode, you can catch me binge-watching something completely random — reality TV, true crime documentaries, or Disney shows circa 2010. My go-to forms of self-care are weightlifting and spending time perfecting my skills as a dissectologist (it's a fancy way of saying I love to do puzzles) 😊.
                    </p>
                </motion.div>
            </div>

            {/* Bottom CTA — Wine */}
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
                <h2 style={{
                    fontFamily: "var(--font-serif)", fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
                    color: "var(--color-cream)", maxWidth: "700px",
                    margin: "0 auto 1.5rem", lineHeight: 1.15
                }}>
                    Ready to Begin Your Journey?
                </h2>
                <p style={{ color: "rgba(252, 246, 242,0.65)", fontWeight: 300, maxWidth: "500px", margin: "0 auto 2.5rem", fontSize: "1.05rem", lineHeight: 1.9 }}>
                    Book a free 15-minute consultation to see if we're the right fit for your healing journey.
                </p>
                <a href="https://iosinsights.janeapp.com/" target="_blank" rel="noreferrer" className="btn-light">
                    Connect with Me
                </a>
            </motion.div>
        </div>
    );
}
