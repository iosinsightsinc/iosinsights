import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function ServicePage() {
    return (
        <div className="w-full bg-background min-h-screen pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-6">

                {/* Breadcrumb */}
                <Link to="/" className="inline-flex items-center gap-2 text-sm text-text/60 hover:text-primary transition-colors mb-12">
                    <ArrowLeft size={16} /> Back to Home
                </Link>

                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <span className="text-primary tracking-widest uppercase text-sm font-semibold mb-4 block">Specialized Therapy</span>
                    <h1 className="text-5xl md:text-6xl font-serif text-text leading-tight mb-8">
                        Depression Counselling in Vancouver
                    </h1>
                    <p className="text-xl text-text/70 font-light leading-relaxed">
                        It’s Time to Address The Shadow of Depression. Are you stuck in a relentless pit of depression? Daily life is dull. You’re constantly irritated with yourself and others.
                    </p>
                </motion.div>

                {/* The Insidious Monster */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-white p-10 md:p-14 rounded-3xl shadow-sm border border-text/5 mb-16"
                >
                    <h2 className="text-3xl font-serif text-text mb-6">Depression: The Insidious Monster</h2>
                    <div className="space-y-6 text-text/80 font-light leading-relaxed">
                        <p>
                            Depression symptoms can be subtle, and insidious. It can feel like not wanting to get out of bed (but then you do anyways because you have a boss and want to keep your job). It can feel like a weight on your shoulders, making everything feel hard.
                        </p>
                        <p>
                            It can be the critical voice in your head stopping you from embodying your Highest Self. It can hide as a subtle hopelessness about the state of the world, or a cynicism about humanity.
                        </p>
                        <p>
                            Depression can be the subtle loneliness that you feel each night as you step into your downtown apartment, as you wonder if this is all that there is to life.
                        </p>
                    </div>
                </motion.div>

                {/* What Happens When We Ignore It */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-serif text-text mb-6">What Happens When We Ignore Depression?</h2>
                    <p className="text-text/80 font-light leading-relaxed mb-8">
                        At its worst, depression can look like overwhelming sadness and despair, and most people are able put that monstrosity away into a little container deep in their bodies. The more these symptoms are suppressed, the greater the pressure, and the more likely that they will resurface as physical manifestations.
                    </p>
                    <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8">
                        <h3 className="text-xl font-serif text-text mb-4">How iOS Insights Can Help Unravel It</h3>
                        <ul className="space-y-4">
                            {["Uncover the subconscious roots of your emotional heaviness.", "Develop gentle, effective coping mechanisms without toxic positivity.", "Relocate your 'pleasure center' and zest for life.", "Address the somatic (physical) symptoms held in your body."].map((item, i) => (
                                <li key={i} className="flex gap-3 text-text/80 font-light">
                                    <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={20} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center py-12 border-t border-text/10"
                >
                    <h2 className="text-3xl font-serif text-text mb-6">Ready to Find Your Pleasure Centre?</h2>
                    <p className="text-text/70 font-light mb-8 max-w-xl mx-auto">
                        A life you can’t wait to wake up to is just a few clicks away. Get a free consultation to see if our therapists are the right match for your journey.
                    </p>
                    <button className="bg-text text-background px-10 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-primary transition-colors duration-300">
                        Book a Free Consultation
                    </button>
                </motion.div>

            </div>
        </div>
    );
}
