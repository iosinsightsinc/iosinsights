import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
    return (
        <div className="w-full bg-background min-h-[90vh] pt-32 pb-24 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">

                {/* Left Side: Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-12"
                >
                    <div>
                        <span className="text-primary tracking-widest uppercase text-sm font-semibold mb-4 block">Get in Touch</span>
                        <h1 className="text-5xl md:text-6xl font-serif text-text leading-tight mb-6">
                            Begin Your Journey to Clarity
                        </h1>
                        <p className="text-lg text-text/70 font-light max-w-md">
                            Whether you are ready to book a consultation or have a few questions, our team is here to support you in untangling your mind.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="bg-primary/10 p-4 rounded-full text-primary">
                                <MapPin size={24} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h4 className="font-serif text-lg text-text">The Clinic</h4>
                                <p className="text-text/60 font-light">123 Wellness Ave, Suite 400<br />Vancouver, BC V6B 1A1</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="bg-primary/10 p-4 rounded-full text-primary">
                                <Mail size={24} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h4 className="font-serif text-lg text-text">Email</h4>
                                <p className="text-text/60 font-light">hello@iosinsights.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="bg-primary/10 p-4 rounded-full text-primary">
                                <Phone size={24} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h4 className="font-serif text-lg text-text">Phone</h4>
                                <p className="text-text/60 font-light">+1 (604) 555-0198</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-white p-10 md:p-14 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-text/5"
                >
                    <h3 className="font-serif text-3xl text-text mb-8">Request a Consultation</h3>
                    <form className="space-y-6 form-control" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-text/60 font-semibold">First Name</label>
                                <input type="text" className="w-full bg-transparent border-b border-text/20 pb-2 focus:outline-none focus:border-primary transition-colors text-text" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-text/60 font-semibold">Last Name</label>
                                <input type="text" className="w-full bg-transparent border-b border-text/20 pb-2 focus:outline-none focus:border-primary transition-colors text-text" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-text/60 font-semibold">Email Address</label>
                            <input type="email" className="w-full bg-transparent border-b border-text/20 pb-2 focus:outline-none focus:border-primary transition-colors text-text" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-text/60 font-semibold">How can we help you?</label>
                            <select className="w-full bg-transparent border-b border-text/20 pb-2 focus:outline-none focus:border-primary transition-colors text-text font-light">
                                <option value="">Select a service...</option>
                                <option value="depression">Depression Counselling</option>
                                <option value="anxiety">Anxiety & Overwhelm</option>
                                <option value="couples">Couples Integration</option>
                                <option value="other">Other / Not sure</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-text/60 font-semibold">Message (Optional)</label>
                            <textarea rows="4" className="w-full bg-transparent border-b border-text/20 pb-2 focus:outline-none focus:border-primary transition-colors text-text resize-none"></textarea>
                        </div>

                        <button className="w-full bg-text text-background py-4 rounded-full text-sm uppercase tracking-widest hover:bg-primary transition-colors duration-300 mt-8">
                            Send Request
                        </button>
                    </form>
                </motion.div>

            </div>
        </div>
    );
}
