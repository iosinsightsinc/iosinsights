import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-[#2D2D2D] text-[#FDFBF7] py-20 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Brand */}
                <div className="col-span-1 md:col-span-2">
                    <div className="flex items-center gap-3 mb-6">
                        {/* Using a monochrome approach for the footer logo if possible, but standard is fine */}
                        <img src="/logo.png" alt="iOS Insights Logo" className="w-12 h-12 object-contain brightness-0 invert opacity-90" />
                        <span className="font-serif text-2xl tracking-wide font-medium">iOS Insights</span>
                    </div>
                    <p className="font-light text-white/70 max-w-sm mb-8 leading-relaxed">
                        Cultivating an elegant mind through industry-leading psychological insights and bespoke therapy across Vancouver.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h4 className="font-serif text-xl mb-6 text-white/90">Services</h4>
                    <ul className="flex flex-col gap-4 font-light text-sm text-white/60">
                        <li><Link to="/services/depression" className="hover:text-[#8A9A86] transition-colors">Depression Counselling</Link></li>
                        <li><Link to="/services/anxiety" className="hover:text-[#8A9A86] transition-colors">Anxiety & Overwhelm</Link></li>
                        <li><Link to="/services/couples" className="hover:text-[#8A9A86] transition-colors">Couples Integration</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="font-serif text-xl mb-6 text-white/90">Connect</h4>
                    <ul className="flex flex-col gap-4 font-light text-sm text-white/60">
                        <li>hello@iosinsights.com</li>
                        <li>+1 (604) 555-0198</li>
                        <li className="mt-4">
                            <Link to="/contact" className="text-[#8A9A86] hover:text-white transition-colors underline underline-offset-4">
                                View location map
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 font-light">
                <p>&copy; {new Date().getFullYear()} iOS Insights Clinic. All Rights Reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
