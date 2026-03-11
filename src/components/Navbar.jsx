import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import SpinningLogo from "./SpinningLogo";
import { useState, useEffect, useRef } from "react";
import { Phone, MapPin, ChevronDown, Menu, X } from "lucide-react";

const navLinks = [
    {
        label: "Services", href: "/services",
        children: [
            { label: "Therapy for Depression", href: "/services/depression" },
            { label: "Trauma Therapy", href: "/services/trauma" },
            { label: "Play Therapy", href: "/services/play" },
            { label: "Psychodiagnostic Assessments", href: "/services/assessments" },
            { label: "Vocational Support", href: "/services/vocational" },
            { label: "Tele-assessments", href: "/services/tele-assessments" },
        ],
    },
    { label: "My Approach", href: "/approach" },
    { label: "Resources", href: "/blog" },
    { label: "Contact", href: "/#contact" },
];

/* ── Dropdown ── */
function Dropdown({ items }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 30, mass: 0.8 }}
            style={{
                position: "absolute", top: "calc(100% + 0.75rem)", left: "50%", transform: "translateX(-50%)",
                backgroundColor: "rgba(44,27,44,0.92)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(200,162,200,0.12)",
                borderRadius: "1.25rem", minWidth: "280px", overflow: "hidden", zIndex: 200,
                boxShadow: "0 25px 60px rgba(0,0,0,0.45), 0 0 0 1px rgba(200,162,200,0.06)",
                padding: "0.5rem 0",
            }}
        >
            {items.map((item, i) => (
                <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3, ease: "easeOut" }}
                >
                    <Link to={item.href}
                        style={{
                            display: "flex", alignItems: "center", gap: "0.75rem",
                            padding: "0.9rem 1.5rem", color: "rgba(254,251,236,0.7)",
                            fontFamily: "var(--font-sans)", fontSize: "0.8rem", fontWeight: 500,
                            letterSpacing: "0.08em", textTransform: "uppercase",
                            transition: "all 0.2s ease", textDecoration: "none",
                            borderRadius: "0.75rem", margin: "0.15rem 0.5rem",
                        }}
                        onMouseOver={e => {
                            e.currentTarget.style.color = "#fff";
                            e.currentTarget.style.backgroundColor = "rgba(200,162,200,0.12)";
                            e.currentTarget.style.paddingLeft = "1.75rem";
                        }}
                        onMouseOut={e => {
                            e.currentTarget.style.color = "rgba(254,251,236,0.7)";
                            e.currentTarget.style.backgroundColor = "transparent";
                            e.currentTarget.style.paddingLeft = "1.5rem";
                        }}
                    >
                        <span style={{
                            width: "4px", height: "4px", borderRadius: "50%",
                            backgroundColor: "var(--color-lilac)", opacity: 0.5, flexShrink: 0,
                        }} />
                        {item.label}
                    </Link>
                </motion.div>
            ))}
        </motion.div>
    );
}

/* ── Nav item ── */
function NavItem({ link }) {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);
    const timeoutRef = useRef(null);

    const handleEnter = () => { clearTimeout(timeoutRef.current); setOpen(true); };
    const handleLeave = () => { timeoutRef.current = setTimeout(() => setOpen(false), 200); };

    useEffect(() => {
        const close = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
        document.addEventListener("mousedown", close);
        return () => { document.removeEventListener("mousedown", close); clearTimeout(timeoutRef.current); };
    }, []);

    const base = {
        display: "flex", alignItems: "center", gap: "0.3rem",
        fontFamily: "var(--font-sans)", fontSize: "0.88rem", fontWeight: 700,
        letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-cream)",
        background: "none", border: "none", cursor: "pointer", padding: 0,
        transition: "color 0.2s", whiteSpace: "nowrap", textDecoration: "none",
    };

    return (
        <div ref={ref} style={{ position: "relative" }}
            onMouseEnter={link.children ? handleEnter : undefined}
            onMouseLeave={link.children ? handleLeave : undefined}
        >
            {link.children ? (
                <button onClick={() => setOpen(v => !v)} style={base}
                    onMouseOver={e => e.currentTarget.style.color = "var(--color-lilac)"}
                    onMouseOut={e => e.currentTarget.style.color = "var(--color-cream)"}
                >
                    {link.label}
                    <motion.span
                        animate={{ rotate: open ? 180 : 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        style={{ display: "inline-flex" }}
                    >
                        <ChevronDown size={12} />
                    </motion.span>
                </button>
            ) : (
                <Link to={link.href} style={base}
                    onMouseOver={e => e.currentTarget.style.color = "var(--color-lilac)"}
                    onMouseOut={e => e.currentTarget.style.color = "var(--color-cream)"}
                >
                    {link.label}
                </Link>
            )}
            <AnimatePresence>{open && link.children && <Dropdown items={link.children} />}</AnimatePresence>
        </div>
    );
}

/* ── Animated Logo ── */
function NavLogo() {
    return (
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: "0.85rem", textDecoration: "none", flexShrink: 0 }}>
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.15, gap: "0.2rem" }}>
                <span style={{
                    fontFamily: "var(--font-serif)", fontSize: "1.5rem", fontWeight: 500,
                    color: "var(--color-cream)", letterSpacing: "0.02em",
                }}>
                    iOS Insights
                </span>
                <span style={{
                    fontFamily: "var(--font-sans)", fontSize: "0.6rem", fontWeight: 500,
                    color: "var(--color-lilac)", letterSpacing: "0.2em", textTransform: "uppercase",
                }}>
                    Psychological Services
                </span>
            </div>
        </Link>
    );
}

/* ── Icon button ── */
function IconBtn({ href, icon, external }) {
    return (
        <a href={href} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
            style={{
                width: "48px", height: "48px", borderRadius: "50%",
                backgroundColor: "var(--color-wine)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "var(--color-cream)", flexShrink: 0,
                transition: "background-color 0.25s, transform 0.2s", textDecoration: "none",
            }}
            onMouseOver={e => { e.currentTarget.style.backgroundColor = "var(--color-wine-dark)"; e.currentTarget.style.transform = "scale(1.08)"; }}
            onMouseOut={e => { e.currentTarget.style.backgroundColor = "var(--color-wine)"; e.currentTarget.style.transform = "scale(1)"; }}
        >
            {icon}
        </a>
    );
}

/* ── Main Navbar ── */
export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                style={{
                    position: "fixed", top: "1rem", left: 0, right: 0,
                    zIndex: 100, display: "flex", justifyContent: "center", padding: "0 1.25rem",
                }}
            >
                {/* Desktop pill — BIGGER */}
                <div
                    className="hidden md:flex"
                    style={{
                        backgroundColor: "var(--color-navbar)", borderRadius: "9999px",
                        alignItems: "center", width: "100%", maxWidth: "1120px",
                        padding: "0.65rem 0.75rem 0.65rem 1.75rem",
                        boxShadow: "0 10px 50px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.04)",
                    }}
                >
                    <NavLogo />
                    <div style={{ display: "flex", alignItems: "center", gap: "1.6rem", flex: 1, justifyContent: "center" }}>
                        {navLinks.map(link => <NavItem key={link.label} link={link} />)}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <a href="https://iosinsights.janeapp.com/" target="_blank" rel="noreferrer"
                            style={{
                                backgroundColor: "var(--color-wine)", color: "var(--color-cream)",
                                padding: "0.65rem 1.25rem", borderRadius: "9999px",
                                fontFamily: "var(--font-sans)", fontSize: "0.68rem", fontWeight: 700,
                                letterSpacing: "0.14em", textTransform: "uppercase", whiteSpace: "nowrap",
                                transition: "background-color 0.25s", textDecoration: "none",
                            }}
                            onMouseOver={e => e.currentTarget.style.backgroundColor = "var(--color-wine-dark)"}
                            onMouseOut={e => e.currentTarget.style.backgroundColor = "var(--color-wine)"}
                        >
                            Connect with Me
                        </a>
                        <IconBtn href="tel:825-965-9396" icon={<Phone size={16} strokeWidth={2} />} />
                        <IconBtn href="https://maps.google.com/?q=363+SIOUX+RD+SHERWOOD+PARK+AB" icon={<MapPin size={16} strokeWidth={2} />} external />
                    </div>
                </div>

                {/* Mobile pill — BIGGER */}
                <div className="flex md:hidden flex-col" style={{ width: "100%", gap: "0.5rem" }}>
                    <div style={{
                        backgroundColor: "var(--color-navbar)", borderRadius: "9999px",
                        display: "flex", alignItems: "center", justifyContent: "space-between",
                        padding: "0.5rem 0.6rem 0.5rem 0.85rem",
                        boxShadow: "0 10px 50px rgba(0,0,0,0.4)",
                    }}>
                        <Link to="/" style={{ display: "flex", alignItems: "center", gap: "0.6rem", textDecoration: "none" }}>
                            <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", color: "var(--color-cream)", fontWeight: 500 }}>iOS Insights</span>
                        </Link>
                        <div style={{ display: "flex", gap: "0.4rem", alignItems: "center" }}>
                            <a href="https://iosinsights.janeapp.com/" target="_blank" rel="noreferrer" style={{
                                backgroundColor: "var(--color-wine)", color: "var(--color-cream)",
                                padding: "0.5rem 1rem", borderRadius: "9999px",
                                fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none",
                            }}>Connect</a>
                            <button onClick={() => setMobileOpen(v => !v)} style={{
                                width: "42px", height: "42px", borderRadius: "50%",
                                backgroundColor: "rgba(255,255,255,0.08)",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                color: "var(--color-cream)", border: "none", cursor: "pointer",
                            }}>
                                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
                            </button>
                        </div>
                    </div>
                    <AnimatePresence>
                        {mobileOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
                                style={{ backgroundColor: "var(--color-navbar)", borderRadius: "1.5rem", overflow: "hidden", padding: "1.25rem 1.5rem 1.5rem" }}
                            >
                                {navLinks.map(link => (
                                    <Link key={link.label} to={link.href} onClick={() => setMobileOpen(false)}
                                        style={{ display: "block", fontFamily: "var(--font-serif)", fontSize: "1.7rem", color: "var(--color-cream)", padding: "0.65rem 0", borderBottom: "1px solid rgba(255,255,255,0.06)", textDecoration: "none" }}>
                                        {link.label}
                                    </Link>
                                ))}
                                <a href="https://iosinsights.janeapp.com/" target="_blank" rel="noreferrer" onClick={() => setMobileOpen(false)}
                                    style={{ display: "block", marginTop: "1.25rem", backgroundColor: "var(--color-wine)", color: "var(--color-cream)", textAlign: "center", padding: "0.85rem", borderRadius: "9999px", fontFamily: "var(--font-sans)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none" }}>
                                    Connect with Me
                                </a>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>

            {/* Spacer */}
            <div style={{ height: "6rem" }} />
        </>
    );
}
