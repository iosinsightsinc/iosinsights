import { motion } from "framer-motion";
import AnimatedLogo from "./AnimatedLogo";

export default function Hero() {
    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background px-6">
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center z-10">

                {/* Animated Logo: plays the mp4, then fades to the static PNG */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="mb-10 w-52 md:w-72 h-52 md:h-72 relative"
                >
                    <AnimatedLogo className="w-full h-full" />
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-serif text-text leading-tight mb-6"
                >
                    Untangle Your Mind. <br className="hidden md:block" />
                    <span className="text-primary italic font-light">Reclaim Your Life.</span>
                </motion.h1>

                {/* Sub-headline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
                    className="text-lg md:text-xl text-text/80 max-w-2xl font-light mb-12"
                >
                    Industry-leading psychological insights and therapy designed to help you find clarity, peace, and order in the chaos.
                </motion.p>

                {/* Call to action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <button className="bg-text text-background px-8 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-primary transition-colors duration-300">
                        Book a Consultation
                    </button>
                    <button className="bg-transparent border border-text/20 text-text px-8 py-4 rounded-full text-sm uppercase tracking-widest hover:border-primary hover:text-primary transition-colors duration-300">
                        Our Approach
                    </button>
                </motion.div>
            </div>

            {/* Ambient glow orbs */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ duration: 3, delay: 1 }}
                className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10"
            />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ duration: 3, delay: 1.5 }}
                className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#e8e4db] rounded-full blur-3xl pointer-events-none -z-10"
            />
        </section>
    );
}
