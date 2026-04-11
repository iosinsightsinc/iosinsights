import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SpinningLogo from "./SpinningLogo";

// EVERGREEN footer, Ivory text, Terracotta hover accents, Blush labels
export default function Footer() {
    const sealRef = useRef(null);

    useEffect(() => {
        if (!sealRef.current) return;
        const anchor = sealRef.current;

        // The verified-seal.js listens for DOMContentLoaded which has already
        // fired by the time React mounts, so we replicate its logic directly:
        // decode the data-code URL and inject the JSONP callback script.
        const callbackUrl = atob(
            "aHR0cHM6Ly93d3cucHN5Y2hvbG9neXRvZGF5LmNvbS9hcGkvdmVyaWZpZWQtc2VhbC9zZWFscy8xMy9wcm9maWxlLzEwODM4NDQ/Y2FsbGJhY2s9c3hjYWxsYmFjaw=="
        );

        window.sxcallback = function (data) {
            anchor.setAttribute("target", "_top");
            anchor.style.display = "block";
            anchor.style.backgroundImage =
                'url("data:image/svg+xml;base64,' + data.image.content + '")';
            anchor.style.backgroundRepeat = "no-repeat";
            anchor.style.width = parseInt(data.image.dimensions.width) + "px";
            anchor.style.height = parseInt(data.image.dimensions.height) + "px";
            anchor.title = data.name;
        };

        const script = document.createElement("script");
        script.src = callbackUrl;
        document.body.appendChild(script);

        return () => {
            script.remove();
            delete window.sxcallback;
        };
    }, []);

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
                    {/* Professional verification provided by Psychology Today */}
                    <a ref={sealRef} href="https://www.psychologytoday.com/profile/1083844"
                       className="sx-verified-seal" style={{ marginTop: "1.5rem" }}></a>
                </div>

                {/* Services links */}
                <div className="md:col-span-3 md:col-start-7">
                    <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem", color: "#DECEBF", marginBottom: "1.5rem" }}>
                        Services
                    </h4>
                    <ul className="space-y-3">
                        {[
                            ["Therapy for Depression", "/services/depression"],
                            ["Therapy for Anxiety", "/services/anxiety"],
                            ["Attachment Therapy", "/services/attachment"],
                            ["Sandtray Therapy", "/services/sandtray"],
                            ["Trauma Therapy", "/services/trauma"],
                            ["Play Therapy", "/services/play"],
                            ["Assessments", "/services/assessments"],
                            ["Vocational Support", "/services/vocational"],
                            ["Workshops & Groups", "/services/workshops"],
                            ["Somatic Therapy", "/services/somatic"],
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
