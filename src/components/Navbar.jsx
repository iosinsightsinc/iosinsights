import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-md border-b border-text/5 py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3">
                    <img src="/logo.png" alt="iOS Insights Logo" className="w-10 h-10 object-contain" />
                    <span className="font-serif text-xl tracking-wide font-medium text-text">iOS Insights</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 text-sm font-light tracking-widest uppercase">
                    <Link to="/about" className="hover:text-primary transition-colors">Our Approach</Link>
                    <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
                    <Link to="/resources" className="hover:text-primary transition-colors">Resources</Link>
                    <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
                    <Link to="/book" className="ml-4 px-6 py-2 border border-text rounded-full hover:bg-text hover:text-background transition-colors">
                        Book Now
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden text-text" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "100vh" }}
                    className="md:hidden bg-background absolute top-full left-0 right-0 h-screen flex flex-col items-center pt-24 gap-8 text-xl font-serif"
                >
                    <Link to="/about" onClick={() => setIsOpen(false)}>Our Approach</Link>
                    <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
                    <Link to="/resources" onClick={() => setIsOpen(false)}>Resources</Link>
                    <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                    <Link to="/book" onClick={() => setIsOpen(false)} className="mt-8 px-8 py-3 bg-text text-background rounded-full">
                        Book Consultation
                    </Link>
                </motion.div>
            )}
        </motion.nav>
    );
}
