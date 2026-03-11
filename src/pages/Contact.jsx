import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import FloatingOrbs from "../components/FloatingOrbs";

export default function Contact() {
    return (
        <div style={{ backgroundColor: "var(--color-cream)", position: "relative", overflow: "hidden" }} className="w-full py-24 px-6">
            <FloatingOrbs variant="cream" />
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">

                {/* Left Side: Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-12"
                >
                    <div>
                        <span className="section-label mb-4 block">Get in Touch</span>
                        <h1 style={{
                            fontFamily: "var(--font-serif)", fontSize: "clamp(2.5rem, 5vw, 3.8rem)",
                            color: "var(--color-text-dark)", lineHeight: 1.1, marginBottom: "1.5rem",
                        }}>
                            Begin Your Journey to Clarity
                        </h1>
                        <p style={{ fontSize: "1.1rem", color: "var(--color-text-muted)", fontWeight: 300, maxWidth: "460px" }}>
                            Whether you are ready to connect with me or have a few questions, our team is here to support you in untangling your mind.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {[
                            { icon: <MapPin size={24} strokeWidth={1.5} />, title: "The Clinic", info: "363 SIOUX RD\nSHERWOOD PARK, AB T8A 4W7" },
                            { icon: <Mail size={24} strokeWidth={1.5} />, title: "Email", info: "info@iosinsights.ca" },
                            { icon: <Phone size={24} strokeWidth={1.5} />, title: "Phone", info: "825-965-9396" },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <div style={{
                                    backgroundColor: "rgba(144,70,92,0.1)", color: "var(--color-wine)",
                                    padding: "1rem", borderRadius: "50%",
                                }}>
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", color: "var(--color-text-dark)" }}>{item.title}</h4>
                                    <p style={{ color: "var(--color-text-muted)", fontWeight: 300, whiteSpace: "pre-line" }}>{item.info}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Right Side: Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-white p-10 md:p-14 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[var(--color-lilac)]/20"
                >
                    <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.8rem", color: "var(--color-text-dark)", marginBottom: "2rem" }}>
                        Request a Consultation
                    </h3>
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label style={{ fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-text-muted)", fontWeight: 600 }}>First Name</label>
                                <input type="text" style={{
                                    width: "100%", background: "transparent",
                                    borderBottom: "1.5px solid var(--color-lilac)", padding: "0.5rem 0",
                                    outline: "none", color: "var(--color-text-dark)", fontFamily: "var(--font-sans)", border: "none",
                                    borderBottomWidth: "1.5px", borderBottomStyle: "solid", borderBottomColor: "var(--color-lilac)",
                                }} />
                            </div>
                            <div className="space-y-2">
                                <label style={{ fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-text-muted)", fontWeight: 600 }}>Last Name</label>
                                <input type="text" style={{
                                    width: "100%", background: "transparent",
                                    padding: "0.5rem 0", outline: "none", color: "var(--color-text-dark)",
                                    fontFamily: "var(--font-sans)", border: "none",
                                    borderBottomWidth: "1.5px", borderBottomStyle: "solid", borderBottomColor: "var(--color-lilac)",
                                }} />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label style={{ fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-text-muted)", fontWeight: 600 }}>Email Address</label>
                            <input type="email" style={{
                                width: "100%", background: "transparent",
                                padding: "0.5rem 0", outline: "none", color: "var(--color-text-dark)",
                                fontFamily: "var(--font-sans)", border: "none",
                                borderBottomWidth: "1.5px", borderBottomStyle: "solid", borderBottomColor: "var(--color-lilac)",
                            }} />
                        </div>

                        <div className="space-y-2">
                            <label style={{ fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-text-muted)", fontWeight: 600 }}>How can we help you?</label>
                            <select style={{
                                width: "100%", background: "transparent",
                                padding: "0.5rem 0", outline: "none", color: "var(--color-text-dark)",
                                fontFamily: "var(--font-sans)", fontWeight: 300, border: "none",
                                borderBottomWidth: "1.5px", borderBottomStyle: "solid", borderBottomColor: "var(--color-lilac)",
                            }}>
                                <option value="">Select a service...</option>
                                <option value="depression">Therapy for Depression</option>
                                <option value="trauma">Trauma Therapy</option>
                                <option value="play">Play Therapy</option>
                                <option value="assessments">Psychodiagnostic Assessments</option>
                                <option value="other">Other / Not sure</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label style={{ fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-text-muted)", fontWeight: 600 }}>Message (Optional)</label>
                            <textarea rows="4" style={{
                                width: "100%", background: "transparent",
                                padding: "0.5rem 0", outline: "none", color: "var(--color-text-dark)",
                                fontFamily: "var(--font-sans)", resize: "none", border: "none",
                                borderBottomWidth: "1.5px", borderBottomStyle: "solid", borderBottomColor: "var(--color-lilac)",
                            }}></textarea>
                        </div>

                        <button className="btn-primary w-full" style={{ marginTop: "2rem", padding: "1.1rem" }}>
                            Send Request
                        </button>
                    </form>
                </motion.div>

            </div>
        </div>
    );
}
