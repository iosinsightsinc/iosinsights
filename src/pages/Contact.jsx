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
                                    backgroundColor: "rgba(160, 89, 98,0.1)", color: "var(--color-wine)",
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
                    <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.8rem", color: "var(--color-text-dark)", marginBottom: "1rem" }}>
                        Ready to Connect?
                    </h3>
                    <p style={{ color: "var(--color-text-muted)", fontWeight: 300, marginBottom: "2.5rem", lineHeight: 1.8 }}>
                        To ensure the highest security and privacy of your information, all consultation requests and bookings are handled directly through our secure patient portal.
                    </p>
                    
                    <div style={{
                        backgroundColor: "rgba(160, 89, 98,0.03)", border: "1px solid rgba(160, 89, 98,0.1)",
                        padding: "2rem", borderRadius: "1rem", textAlign: "center", marginBottom: "2rem"
                    }}>
                        <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem", color: "var(--color-wine)", marginBottom: "0.5rem" }}>Secure Booking Portal</h4>
                        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: "1.5rem" }}>
                            Powered by JaneApp — safe, secure, and PIPEDA compliant.
                        </p>
                        <a href="https://iosinsights.janeapp.com/" target="_blank" rel="noreferrer" className="btn-primary w-full inline-block" style={{ padding: "1.1rem" }}>
                            Access Booking Portal
                        </a>
                    </div>
                    
                    <p style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", fontStyle: "italic", textAlign: "center", maxWidth: "80%" }}>
                        If you have questions before booking, please feel free to call us directly at <strong>825-965-9396</strong>.
                    </p>
                </motion.div>

            </div>
        </div>
    );
}
