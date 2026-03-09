import { motion } from "framer-motion";

export default function Approach() {
    return (
        <section className="w-full py-24 bg-white px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Side: Text content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="space-y-8"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-[1px] bg-primary"></div>
                        <span className="uppercase tracking-widest text-primary text-xs font-semibold">Our Approach</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-serif text-text leading-tight">
                        Untangling the <br /> <span className="italic text-text/80">Insidious Monster</span>
                    </h2>

                    <div className="space-y-4 text-text/70 font-light leading-relaxed whitespace-pre-line">
                        <p>
                            Depression and anxiety can often feel like a deeply wound ball of yarn—a tangled, overwhelming mess in the mind that makes the simplest tasks feel impossible.
                        </p>
                        <p>
                            At iOS Insights, we don't just treat the surface symptoms. We gently pull at the threads. Through deep, empathetic counselling, we help you uncover the subconscious blocks and unravel the knots that have been holding you back.
                        </p>
                        <p>
                            The goal isn't just survival; it's transformation. Let us help you resolve the chaos into a clear, single thread of purpose, allowing you to cultivate an elegant mind.
                        </p>
                    </div>

                    <button className="mt-4 pb-1 border-b border-text text-text uppercase tracking-widest text-sm hover:text-primary hover:border-primary transition-colors">
                        Our Philosophy
                    </button>
                </motion.div>

                {/* Right Side: Visual Metaphor using SVG animation */}
                <div className="relative h-96 w-full flex items-center justify-center bg-background/50 rounded-3xl overflow-hidden p-8">
                    <motion.svg
                        viewBox="0 0 500 500"
                        className="w-full h-full max-w-sm"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {/* Tangled mess */}
                        <motion.path
                            d="M100,250 C120,100 200,300 150,200 C100,100 300,50 250,150 C200,250 100,350 150,400 C200,450 300,300 250,250 C200,200 150,250 200,300 C250,350 350,250 300,150 C250,50 400,200 450,250"
                            fill="transparent"
                            stroke="#333333"
                            strokeWidth="2"
                            strokeLinecap="round"
                            variants={{
                                hidden: { pathLength: 0, opacity: 0 },
                                visible: {
                                    pathLength: 1,
                                    opacity: [0, 1, 1, 0.2],
                                    transition: { duration: 3, ease: "easeInOut", times: [0, 0.2, 0.8, 1] }
                                }
                            }}
                        />
                        {/* Straightened line */}
                        <motion.path
                            d="M50,250 L450,250"
                            fill="transparent"
                            stroke="#8A9A86"
                            strokeWidth="4"
                            strokeLinecap="round"
                            variants={{
                                hidden: { pathLength: 0, opacity: 0 },
                                visible: {
                                    pathLength: 1,
                                    opacity: 1,
                                    transition: { delay: 2.5, duration: 1.5, ease: "easeOut" }
                                }
                            }}
                        />
                    </motion.svg>
                </div>

            </div>
        </section>
    );
}
