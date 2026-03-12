import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SpinningLogo from "./SpinningLogo";

export default function Footer() {
    return (
        <footer style={{ backgroundColor: "var(--color-navbar)" }}>
            {/* Main footer content */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid grid-cols-1 md:grid-cols-12 gap-12">

                {/* Brand col */}
                <div className="md:col-span-5">
                    <div className="flex items-center gap-3 mb-6">
                        <div>
                            <span style={{ fontFamily: "var(--font-sans)", fontSize: "1.4rem", color: "var(--color-cream)", display: "block", lineHeight: 1.1 }}>
                                iOS Insights
                            </span>
                            <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.55rem", color: "var(--color-lilac)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                                Psychological Services
                            </span>
                        </div>
                    </div>
                    <p style={{
                        color: "rgba(252, 246, 242,0.75)", fontWeight: 300, fontSize: "0.95rem", lineHeight: 1.9, maxWidth: "360px", marginBottom: "2rem"
                    }}>
                        Helping you choose the life you want to live. Serving individuals, children, and families across Sherwood Park and Alberta.
                    </p>
                    <a href="https://iosinsights.janeapp.com/" target="_blank" rel="noreferrer"
                        style={{
                            display: "inline-block", border: "1.5px solid rgba(252, 246, 242,0.25)",
                            color: "rgba(252, 246, 242,0.8)", padding: "0.8rem 2rem", borderRadius: "9999px",
                            fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase",
                            fontWeight: 500, transition: "all 0.3s ease", textDecoration: "none",
                        }}
                        onMouseOver={e => { e.currentTarget.style.borderColor = "var(--color-wine)"; e.currentTarget.style.color = "var(--color-cream)"; e.currentTarget.style.backgroundColor = "var(--color-wine)"; }}
                        onMouseOut={e => { e.currentTarget.style.borderColor = "rgba(252, 246, 242,0.25)"; e.currentTarget.style.color = "rgba(252, 246, 242,0.8)"; e.currentTarget.style.backgroundColor = "transparent"; }}
                    >
                        Connect with Me
                    </a>
                </div>

                {/* Services links */}
                <div className="md:col-span-3 md:col-start-7">
                    <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem", color: "var(--color-cream)", marginBottom: "1.5rem" }}>
                        Services
                    </h4>
                    <ul className="space-y-3">
                        {[
                            ["Therapy for Depression", "/services/depression"],
                            ["Trauma Therapy", "/services/trauma"],
                            ["Play Therapy", "/services/play"],
                            ["Psychodiagnostic Assessments", "/services/assessments"],
                            ["Vocational Support", "/services/vocational"],
                        ].map(([label, href]) => (
                            <li key={label}>
                                <Link to={href}
                                    style={{ color: "rgba(252, 246, 242,0.7)", fontSize: "0.875rem", fontWeight: 300, transition: "color 0.2s", textDecoration: "none" }}
                                    onMouseOver={e => e.currentTarget.style.color = "var(--color-lilac)"}
                                    onMouseOut={e => e.currentTarget.style.color = "rgba(252, 246, 242,0.7)"}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div className="md:col-span-3">
                    <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem", color: "var(--color-cream)", marginBottom: "1.5rem" }}>
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
                            <li key={line} style={{ color: "rgba(252, 246, 242,0.7)", fontSize: "0.875rem", fontWeight: 300 }}>
                                {line}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Footer bottom bar */}
            <div
                style={{ borderTop: "1px solid rgba(252, 246, 242,0.08)", padding: "1.5rem 1.5rem" }}
                className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4"
            >
                <p style={{ color: "rgba(252, 246, 242,0.5)", fontSize: "0.75rem", fontWeight: 300 }}>
                    © {new Date().getFullYear()} iOS Insights INC. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}
