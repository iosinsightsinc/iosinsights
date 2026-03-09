import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Brain, HeartHandshake, CloudLightning } from "lucide-react";

const services = [
    {
        title: "Depression Counselling",
        description: "Address the shadow of depression. Treat the root cause of the insidious monster so you can step into a purposeful, lighter future.",
        icon: <Brain strokeWidth={1} className="w-10 h-10 mb-6 text-primary" />,
        link: "/services/depression"
    },
    {
        title: "Anxiety & Overwhelm",
        description: "Calm the incessant noise. Learn to regulate your nervous system and regain control over panic, stress, and racing thoughts.",
        icon: <CloudLightning strokeWidth={1} className="w-10 h-10 mb-6 text-primary" />,
        link: "/services/anxiety"
    },
    {
        title: "Couples Integration",
        description: "Rebuild connection and intimacy. Navigate conflict with grace and uncover the deep, subconscious blocks in your relationship.",
        icon: <HeartHandshake strokeWidth={1} className="w-10 h-10 mb-6 text-primary" />,
        link: "/services/couples"
    }
];

export default function ServicesOverview() {
    return (
        <section className="w-full py-24 bg-background px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-serif text-text mb-4"
                    >
                        Areas of Practice
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-text/60 font-light max-w-2xl mx-auto"
                    >
                        Specialized psychological insights tailored to your unique mental landscape.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="bg-white p-10 rounded-2xl shadow-sm border border-text/5 hover:shadow-md transition-shadow group flex flex-col items-start"
                        >
                            {service.icon}
                            <h3 className="text-2xl font-serif text-text mb-4">{service.title}</h3>
                            <p className="font-light text-text/70 mb-8 flex-grow leading-relaxed">
                                {service.description}
                            </p>
                            <Link
                                to={service.link}
                                className="text-sm uppercase tracking-widest text-text group-hover:text-primary transition-colors font-medium flex items-center gap-2"
                            >
                                Learn More
                                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
