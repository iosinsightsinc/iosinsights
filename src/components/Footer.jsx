import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SpinningLogo from "./SpinningLogo";

// EVERGREEN footer, Ivory text, Terracotta hover accents, Blush labels
export default function Footer() {
    return (
        <footer style={{ backgroundColor: "#4D5E55" }}>
            {/* Main footer content */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid grid-cols-1 md:grid-cols-12 gap-12">

                {/* Brand col */}
                <div className="md:col-span-5">
                    <div className="flex items-center gap-3 mb-6">
                        <div>
                            <span style={{ fontFamily: "var(--font-logo)", fontSize: "1.4rem", color: "#F4F3F1", display: "block", lineHeight: 1.1 }}>
                                iOS Insights
                            </span>
                            <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.55rem", color: "#DECEBF", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                                Psychological Services
                            </span>
                        </div>
                    </div>
                    <p style={{
                        color: "rgba(244, 243, 241, 0.75)", fontWeight: 300, fontSize: "0.95rem", lineHeight: 1.9, maxWidth: "360px", marginBottom: "2rem"
                    }}>
                        Helping you choose the life you want to live. Serving individuals, children, and families across Sherwood Park and Alberta.
                    </p>
                    {/* CTA: Terracotta on hover */}
                    <a href="https://iosinsights.janeapp.com/" target="_blank" rel="noreferrer"
                        style={{
                            display: "inline-block", border: "1.5px solid rgba(222, 206, 191, 0.3)",
                            color: "#DECEBF", padding: "0.8rem 2rem", borderRadius: "9999px",
                            fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase",
                            fontWeight: 500, transition: "all 0.3s ease", textDecoration: "none",
                        }}
                        onMouseOver={e => { e.currentTarget.style.borderColor = "#B57B66"; e.currentTarget.style.color = "#F4F3F1"; e.currentTarget.style.backgroundColor = "#B57B66"; }}
                        onMouseOut={e => { e.currentTarget.style.borderColor = "rgba(222, 206, 191, 0.3)"; e.currentTarget.style.color = "#DECEBF"; e.currentTarget.style.backgroundColor = "transparent"; }}
                    >
                        Connect with Me
                    </a>
                </div>

                {/* Services links */}
                <div className="md:col-span-3 md:col-start-7">
                    <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem", color: "#DECEBF", marginBottom: "1.5rem" }}>
                        Services
                    </h4>
                    <ul className="space-y-3">
                        {[
                            ["Therapy for Depression", "/services/depression"],
                            ["Trauma Therapy", "/services/trauma"],
                            ["Play Therapy", "/services/play"],
                            ["Assessments", "/services/assessments"],
                            ["Vocational Support", "/services/vocational"],
                            ["Workshops & Groups", "/services/workshops"],
                        ].map(([label, href]) => (
                            <li key={label}>
                                <Link to={href}
                                    style={{ color: "rgba(244, 243, 241, 0.65)", fontSize: "0.875rem", fontWeight: 300, transition: "color 0.2s", textDecoration: "none" }}
                                    onMouseOver={e => e.currentTarget.style.color = "#B57B66"}
                                    onMouseOut={e => e.currentTarget.style.color = "rgba(244, 243, 241, 0.65)"}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div className="md:col-span-3">
                    <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem", color: "#DECEBF", marginBottom: "1.5rem" }}>
                        Connect
                    </h4>
                    <ul className="space-y-3">
                        {[
                            "info@iosinsights.ca",
                            "P: 825-965-9396",
                            "F: 1-866-672-6479",
                            "363 SIOUX RD",
                            "SHERWOOD PARK, AB T8A 4W7",
                        ].map((line) => (
                            <li key={line} style={{ color: "rgba(244, 243, 241, 0.65)", fontSize: "0.875rem", fontWeight: 300 }}>
                                {line}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Bottom bar */}
            <div
                style={{ borderTop: "1px solid rgba(244, 243, 241, 0.08)", padding: "1.5rem 1.5rem" }}
                className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4"
            >
                <p style={{ color: "rgba(244, 243, 241, 0.4)", fontSize: "0.75rem", fontWeight: 300 }}>
                    © {new Date().getFullYear()} iOS Insights INC. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}
