import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Clock, FileText, AlertCircle } from "lucide-react";
import FloatingOrbs from "./FloatingOrbs";

const individualFees = [
    {
        title: "Virtual Meet & Greet",
        description: "A brief consultation to ask questions, learn more about my approach, and get a sense of whether working together feels like the right fit.",
        detail: "25 minutes",
        price: "$100",
    },
    {
        title: "Intake Appointment",
        description: "Intake appointments are longer sessions designed to explore your concerns, relevant history, current challenges, and goals for therapy. This helps us begin building a clearer understanding of what support may be most helpful.",
        detail: "80 minutes",
        price: "$300",
    },
];

const followUpFees = [
    { label: "50-minute session", price: "$200" },
    { label: "80-minute session", price: "$300" },
];

const faqItems = [
    {
        question: "What is the difference between a meet & greet and an intake?",
        answer: "A meet & greet is a shorter consultation that gives you space to ask questions, learn about my approach, and decide whether it feels like a good fit. An intake is a fuller clinical appointment where we begin exploring your concerns, history, and therapy goals in greater depth.",
    },
    {
        question: "Do you offer both virtual and in-person appointments?",
        answer: "Yes. Intake and follow-up appointments are available both virtually and in person.",
    },
    {
        question: "How do I know whether to book a 50-minute or 80-minute follow-up session?",
        answer: "A 50-minute session is the standard length for most follow-up appointments. An 80-minute session may be a better fit if you would benefit from more time for deeper processing, more complex concerns, or a slower pace.",
    },
    {
        question: "How much does a psychodiagnostic assessment cost?",
        answer: "Because assessments are individualized, pricing depends on the referral question, the time involved, and the assessment tools required. Please contact me directly to discuss your needs and receive more detailed information.",
    },
    {
        question: "Do you provide reports or consultation letters?",
        answer: "Yes. Reports for insurance, third parties, or physician consultation are available for $300 per report.",
    },
    {
        question: "Do you offer couples therapy?",
        answer: "No. At this time, I provide individual services only.",
    },
];

export default function FeesAndFAQ() {
    const [openFAQ, setOpenFAQ] = useState(null);

    return (
        <div style={{ backgroundColor: "var(--color-cream)", position: "relative", overflow: "hidden" }} className="w-full">

            {/* Section Header */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <p className="section-label mb-4">Investment in Your Well-Being</p>
                    <h2 style={{
                        fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 3.5vw, 3rem)",
                        color: "var(--color-text-dark)", lineHeight: 1.15,
                        maxWidth: "700px", margin: "0 auto 1.5rem",
                    }}>
                        Fees & Frequently <br /><em>Asked Questions</em>
                    </h2>
                    <p style={{
                        color: "var(--color-text-muted)", fontWeight: 300,
                        fontSize: "1.1rem", lineHeight: 1.9,
                        maxWidth: "600px", margin: "0 auto",
                    }}>
                        Choosing support can feel like a big step, and having clear information can make that process a little easier. Below you'll find my current service options and fees.
                    </p>
                </motion.div>
            </div>

            {/* Individual Therapy Fees */}
            <div className="max-w-5xl mx-auto px-6 md:px-12 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <p className="section-label mb-6">Individual Therapy</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {individualFees.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                style={{
                                    backgroundColor: "var(--color-cream-dark)",
                                    borderRadius: "1.25rem", padding: "2.5rem",
                                    border: "1px solid rgba(217, 187, 186,0.2)",
                                    transition: "transform 0.3s, box-shadow 0.3s",
                                    display: "flex", flexDirection: "column",
                                }}
                                className="hover:shadow-lg hover:-translate-y-1"
                            >
                                <h3 style={{
                                    fontFamily: "var(--font-serif)", fontSize: "1.5rem",
                                    color: "var(--color-text-dark)", marginBottom: "0.75rem", lineHeight: 1.2,
                                }}>
                                    {item.title}
                                </h3>
                                <p style={{
                                    color: "var(--color-text-muted)", fontWeight: 300,
                                    fontSize: "0.95rem", lineHeight: 1.8, flexGrow: 1,
                                    marginBottom: "1.5rem",
                                }}>
                                    {item.description}
                                </p>
                                <div style={{
                                    borderTop: "1px solid rgba(217, 187, 186,0.3)",
                                    paddingTop: "1.25rem",
                                    display: "flex", alignItems: "center", justifyContent: "space-between",
                                }}>
                                    {item.detail && (
                                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                            <Clock size={16} strokeWidth={1.5} style={{ color: "var(--color-wine)" }} />
                                            <span style={{
                                                color: "var(--color-text-muted)", fontSize: "0.85rem", fontWeight: 400,
                                            }}>
                                                {item.detail}
                                            </span>
                                        </div>
                                    )}
                                    <span style={{
                                        fontFamily: "var(--font-serif)", fontSize: "1.6rem",
                                        color: "var(--color-wine)", fontWeight: 500,
                                        marginLeft: "auto",
                                    }}>
                                        {item.price}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Follow-Up Appointments */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mt-8"
                >
                    <div style={{
                        backgroundColor: "var(--color-cream-dark)",
                        borderRadius: "1.25rem", padding: "2.5rem",
                        border: "1px solid rgba(217, 187, 186,0.2)",
                    }}>
                        <h3 style={{
                            fontFamily: "var(--font-serif)", fontSize: "1.5rem",
                            color: "var(--color-text-dark)", marginBottom: "0.5rem", lineHeight: 1.2,
                        }}>
                            Follow-Up Appointments
                        </h3>
                        <p style={{
                            color: "var(--color-text-muted)", fontWeight: 300,
                            fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.5rem",
                        }}>
                            Follow-up sessions are available virtually or in person, depending on your preferences and needs.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {followUpFees.map((item, i) => (
                                <div key={i} style={{
                                    backgroundColor: "var(--color-cream)",
                                    borderRadius: "1rem", padding: "1.5rem 2rem",
                                    border: "1px solid rgba(217, 187, 186,0.25)",
                                    display: "flex", alignItems: "center", justifyContent: "space-between",
                                }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                        <Clock size={16} strokeWidth={1.5} style={{ color: "var(--color-wine)" }} />
                                        <span style={{ color: "var(--color-text-dark)", fontSize: "1rem", fontWeight: 400 }}>
                                            {item.label}
                                        </span>
                                    </div>
                                    <span style={{
                                        fontFamily: "var(--font-serif)", fontSize: "1.4rem",
                                        color: "var(--color-wine)", fontWeight: 500,
                                    }}>
                                        {item.price}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <p style={{
                            color: "var(--color-text-muted)", fontWeight: 300,
                            fontSize: "0.85rem", lineHeight: 1.7, marginTop: "1.25rem",
                            fontStyle: "italic",
                        }}>
                            If additional time is needed beyond your scheduled appointment, it is billed at $25 per additional 15 minutes.
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Assessment Services — Wine Banner */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ backgroundColor: "var(--color-wine)", position: "relative", overflow: "hidden" }}
                className="py-20 px-6"
            >
                <FloatingOrbs variant="wine" />
                <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <div>
                        <p style={{
                            fontFamily: "var(--font-sans)", fontSize: "0.7rem", fontWeight: 600,
                            letterSpacing: "0.2em", textTransform: "uppercase",
                            color: "var(--color-lilac)", marginBottom: "1.5rem",
                        }}>
                            Assessment Services
                        </p>
                        <h3 style={{
                            fontFamily: "var(--font-serif)", fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                            color: "var(--color-cream)", lineHeight: 1.2, marginBottom: "1.5rem",
                        }}>
                            Psychodiagnostic Assessment
                        </h3>
                        <p style={{
                            color: "rgba(252, 246, 242, 0.7)", fontWeight: 300,
                            fontSize: "1.05rem", lineHeight: 1.9,
                        }}>
                            Psychodiagnostic assessments are tailored to the individual and may vary depending on the reason for referral, the complexity of concerns, the clinical time required, and the formal assessment measures involved. Please contact me for more information about assessment options and pricing.
                        </p>
                    </div>
                    <div className="space-y-6">
                        <div style={{
                            backgroundColor: "rgba(252, 246, 242, 0.08)",
                            border: "1px solid rgba(252, 246, 242, 0.12)",
                            borderRadius: "1.25rem", padding: "2rem",
                        }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                                <FileText size={20} strokeWidth={1.5} style={{ color: "var(--color-lilac)" }} />
                                <h4 style={{
                                    fontFamily: "var(--font-serif)", fontSize: "1.2rem",
                                    color: "var(--color-cream)",
                                }}>
                                    Report Completion
                                </h4>
                            </div>
                            <p style={{
                                color: "var(--color-cream)", fontWeight: 400,
                                fontSize: "1rem", lineHeight: 1.8, marginBottom: "1rem",
                            }}>
                                Reports prepared for insurance, third parties, or physician consultation.
                            </p>
                            <span style={{
                                fontFamily: "var(--font-serif)", fontSize: "1.8rem",
                                color: "var(--color-cream)", fontWeight: 600,
                            }}>
                                $300 <span style={{ fontSize: "0.95rem", fontWeight: 400, color: "var(--color-cream)" }}>per report</span>
                            </span>
                        </div>
                        <div style={{
                            display: "flex", alignItems: "flex-start", gap: "0.75rem",
                            backgroundColor: "rgba(252, 246, 242, 0.05)",
                            border: "1px solid rgba(252, 246, 242, 0.08)",
                            borderRadius: "1rem", padding: "1.25rem 1.5rem",
                        }}>
                            <AlertCircle size={18} strokeWidth={1.5} style={{ color: "var(--color-lilac)", flexShrink: 0, marginTop: "2px" }} />
                            <p style={{
                                color: "var(--color-cream)", fontWeight: 400,
                                fontSize: "0.95rem", lineHeight: 1.7, fontStyle: "italic",
                            }}>
                                I currently provide individual services only and do not offer couples therapy.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* FAQ Section */}
            <div className="max-w-4xl mx-auto px-6 md:px-12 py-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <p className="section-label mb-4">Common Questions</p>
                    <h2 style={{
                        fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 3.5vw, 3rem)",
                        color: "var(--color-text-dark)", lineHeight: 1.15,
                    }}>
                        Frequently Asked <em>Questions</em>
                    </h2>
                </motion.div>

                <div className="flex flex-col gap-4">
                    {faqItems.map((item, i) => {
                        const isOpen = openFAQ === i;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                className="overflow-hidden"
                                style={{
                                    backgroundColor: "var(--color-cream-dark)",
                                    borderRadius: "1rem",
                                    border: "1px solid rgba(217, 187, 186,0.3)",
                                    transition: "all 0.3s ease",
                                }}
                            >
                                <button
                                    onClick={() => setOpenFAQ(isOpen ? null : i)}
                                    className="w-full text-left flex justify-between items-center px-6 py-5 cursor-pointer"
                                >
                                    <span style={{
                                        fontFamily: "var(--font-serif)",
                                        color: "var(--color-text-dark)",
                                        fontSize: "1.2rem",
                                        fontWeight: 500,
                                        lineHeight: 1.4,
                                        paddingRight: "1rem",
                                    }}>
                                        {item.question}
                                    </span>
                                    <motion.div
                                        animate={{ rotate: isOpen ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex-shrink-0"
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
                                                    fontSize: "1.05rem",
                                                    lineHeight: 1.8,
                                                }}
                                            >
                                                {item.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
