import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import SpinningLogo from "../components/SpinningLogo";
import FloatingOrbs from "../components/FloatingOrbs";

const servicesData = {
    depression: {
        title: "Therapy for Depression",
        subtitle: "in Sherwood Park and Edmonton",
        image: `${import.meta.env.BASE_URL}office-3.jpg`,
        heroText: "Treat the root of the insidious monster. Step toward a life you can't wait to wake up to.",
        sections: [
            {
                heading: "It's Time to Address The Shadow of Depression",
                body: `Are you stuck in a relentless pit of depression? Daily life is dull. You're constantly irritated with yourself and others. The simplest tasks, like getting out of bed and enjoying once-pleasurable activities, feel impossible to even fathom mustering the energy for.

Depression can feel like an endless battle, with no visible end in sight. It's been reported that 11% of Canadians suffer from depression symptoms, however, it is suspected that the true number is much higher than this.

You're here because you're ready to finally look at the root of the issue.`,
            },
            {
                heading: "Depression: The Insidious Monster",
                body: `Depression symptoms can be subtle and insidious. It can feel like not wanting to get out of bed (but then you do anyway because you have a boss and want to keep your job). It can feel like a weight on your shoulders, making everything feel hard.

It can be the critical voice in your head stopping you from embodying your Highest Self. It can hide as a subtle hopelessness about the state of the world, or a cynicism about humanity.

Depression can be the subtle loneliness that you feel each night as you step into your 12th floor downtown apartment, as you wonder if this is all that there is to life. But you can't put these things away forever without consequences.`,
            },
            {
                heading: "What Happens When We Ignore Depression?",
                body: `At its worst, depression can look like overwhelming sadness and despair. The more these symptoms are suppressed, the greater the pressure, and the more likely that they will resurface as health symptoms like inflammation, autoimmune issues, and disease in the body.

If you're wondering if you can combat the weight of depression, regain the desire to fully live life, and to move in the world with a sense of purpose — you absolutely can with the right therapist.`,
            },
        ],
        howItWorks: [
            "A comprehensive assessment to understand your unique emotional landscape.",
            "Examine the roots of your depression in early experiences and family dynamics.",
            "Identify key individuals and relationships shaping your psychology.",
            "Create a timeline of major traumas and stressors — uncovering your deeply rooted triggers.",
            "Develop strategies for immediate symptom relief and long-term healing.",
            "Access innovative modalities: Internal Family Systems, Flash therapy, and Somatic therapy.",
        ],
    },
    anxiety: {
        title: "Therapy for Anxiety",
        subtitle: "in Sherwood Park and Edmonton",
        image: `${import.meta.env.BASE_URL}service-anxiety.png`,
        heroText: "Quiet the noise and find your center. We help you build a sense of safety and calm from within.",
        sections: [
            {
                heading: "Understanding the Weight of Anxiety",
                body: `Anxiety often feels like an internal alarm system that won't shut off. Whether it's racing thoughts, chronic worry, perfectionism, or physical panic, anxiety can exhaust your nervous system and limit your ability to be present in your own life.

It's natural to try to control or avoid the things that make us anxious, but this often makes the anxiety shrink our world even further. You are fundamentally wired for safety, and together we can unravel the fear.`,
            },
            {
                heading: "Moving from Panic to Peace",
                body: `We don't just talk about your worries; we actively work to rewire how your nervous system responds to stress. By understanding the root triggers of your anxiety, we can help your body relearn how to feel safe in the present moment.

Life shouldn't be a constant state of bracing for impact. Relief is possible.`,
            },
        ],
        howItWorks: [
            "Explore the origins of your anxiety and map your nervous system's specific responses.",
            "Learn immediate somatic tools to regulate physical symptoms of panic or stress.",
            "Identify and reframe the deep-seated beliefs driving chronic worry.",
            "Gradually and safely approach avoided situations to build genuine confidence.",
            "Develop long-term strategies for emotional resilience and grounding.",
        ],
    },
    attachment: {
        title: "Attachment Therapy",
        subtitle: "Helping you build the relationship you want with yourself and those who matter",
        image: `${import.meta.env.BASE_URL}service-attachment.png`,
        heroText: "People heal in safe, attuned relationships. Discover the foundation of your attachment style and start thriving.",
        sections: [
            {
                heading: "The Foundation of the Self",
                body: `I believe that people heal in safe, attuned relationships. My approach to therapy integrates evidence-based practices like attachment theory, somatic awareness, Internal Family Systems, Emotion-Focused Therapy and ACT. 

I often use the metaphor of the self as a house — where early attachments form the foundation. When that foundation has cracks, it can show up later in the way we regulate emotions, manage relationships, and see ourselves.`,
            },
            {
                heading: "Doing the Core Repairs",
                body: `In our work together, we'll gently explore those deeper patterns, often working in-session to build skills, regulate emotions, and shift long-standing beliefs held in both mind and body. 

Treatment is always tailored to your needs, and we'll track your progress through a combination of your own insights, relational shifts, and structured tools. My goal is to support you in moving from surviving to thriving.`,
            },
        ],
        howItWorks: [
            "Explore your early foundational relationships to understand your attachment style.",
            "Identify recurring relational patterns that no longer serve you.",
            "Work in-session to build emotion regulation and communication skills.",
            "Shift deep-seated beliefs through somatic and Internal Family Systems work.",
            "Develop secure, attuned relationships with yourself and those who matter.",
        ],
    },
    sandtray: {
        title: "Sandtray Therapy",
        subtitle: "in Sherwood Park and Edmonton",
        image: `${import.meta.env.BASE_URL}service-sandtray.png`,
        heroText: "Process what words cannot capture. Sandtray therapy offers a profound way to map your inner world.",
        sections: [
            {
                heading: "When Words Aren't Enough",
                body: `Sandtray therapy is a powerful, hands-on tool that helps your body communicate deep emotions and past experiences that are too difficult to put into words. Sometimes, trauma or intense feelings are stored in parts of the brain that don't easily access language.

By building scenes in a tray of sand using miniature figures, you can physically map out and explore your inner world in a safe, contained space.`,
            },
            {
                heading: "Externalizing the Internal",
                body: `This modality allows you to take what feels overwhelming inside and place it on the outside. By looking at your experiences from a distance, rather than feeling trapped inside them, it becomes much safer to process difficult emotions and explore your own story.

It is a deeply somatic (body-based) process that engages the whole brain in healing, allowing your body to communicate feelings and traumas that your mind might not yet have the words to name.`,
            },
            {
                heading: "Issues Sandtray Therapy Can Help With",
                body: `Because sandtray therapy bypasses the need for complex language, it is incredibly effective for addressing deeply rooted challenges, including:
• Processing childhood or acute trauma
• Managing severe anxiety and panic
• Processing grief and complex loss
• Regulating overwhelming emotions and emotional dysregulation
• Working through life transitions or feelings of feeling "stuck"
• Improving self-esteem and exploring identity`,
            },
        ],
        howItWorks: [
            "Create physical representations of your inner emotional landscape using sand and miniatures.",
            "Safely externalize and examine complex or overwhelming feelings from a distance.",
            "Process pre-verbal traumas that are held in the body rather than the narrative mind.",
            "Experience deep, embodied neurobiological shifts without needing to talk through every detail.",
            "Integrate fragmented parts of the self into a cohesive, healed whole.",
        ],
    },
    trauma: {
        title: "Trauma Therapy",
        subtitle: "Healing from Within",
        image: `${import.meta.env.BASE_URL}service-trauma.png`,
        heroText: "Healing begins when you are supported to feel safe. We help you process and integrate traumatic experiences.",
        sections: [
            {
                heading: "Understanding Trauma's Grip",
                body: `Trauma is not just what happened to you — it's what happens inside you as a result of what happened. Whether you experienced a single overwhelming event or grew up in an environment of chronic stress and unpredictability, trauma leaves an imprint on your nervous system, your relationships, and your sense of self.

You may notice that you're easily triggered, hyper-vigilant, or feel emotionally numb. Perhaps you struggle with trust, find it hard to relax, or feel disconnected from your body. These are not flaws — they are your nervous system's way of trying to protect you.`,
            },
            {
                heading: "Complex & Developmental Trauma",
                body: `With over 9 years diving deep into the intertwined phenomena of complex and developmental trauma, Iso has developed an understanding of the many factors that collide to keep people healthy — or block their ability to heal.

Complex trauma often arises from repeated, prolonged exposure to distressing situations — particularly in childhood — such as neglect, emotional abuse, or growing up in a chaotic household. This type of trauma shapes the way we relate to ourselves, others, and the world around us.`,
            },
            {
                heading: "Evidence-Based Healing",
                body: `Our trauma therapy integrates multiple evidence-based modalities tailored to your unique needs. We draw from Trauma-Focused CBT (TF-CBT), Emotion-Focused Therapy, Somatic Therapy, and Internal Family Systems (IFS) to create a personalized treatment plan.

The goal is not just symptom reduction — it's post-traumatic growth. We help you move from surviving to thriving, building resilience and reclaiming your sense of agency.`,
            },
        ],
        howItWorks: [
            "Establish safety and stabilization as the foundation of treatment.",
            "Comprehensive trauma assessment to map your unique experience.",
            "Process traumatic memories using evidence-based techniques (TF-CBT, Somatic, Emotion-Focused).",
            "Address attachment wounds and relational patterns.",
            "Build emotional regulation skills and body awareness.",
            "Support post-traumatic growth and meaningful life re-engagement.",
        ],
    },
    play: {
        title: "Play Therapy",
        subtitle: "Supporting Children's Growth",
        image: `${import.meta.env.BASE_URL}service-play.png`,
        heroText: "Play is the natural language of children. Through play, children express thoughts and feelings they cannot yet put into words.",
        sections: [
            {
                heading: "Why Play Therapy?",
                body: `Children don't have the vocabulary or cognitive development to articulate complex emotions the way adults do. Play therapy provides a safe, developmentally appropriate way for children to express their inner world, process difficult experiences, and build resilience.

Through carefully selected toys, games, and creative activities, a trained play therapist can observe and understand a child's emotions, helping them work through challenges like anxiety, behavioural issues, trauma, grief, and social difficulties.`,
            },
            {
                heading: "How Play Therapy Works",
                body: `In a play therapy session, the child leads the play while the therapist observes, reflects, and gently guides. The playroom is a carefully curated space filled with tools that invite expression — sand trays, art supplies, puppets, and miniature figures.

Our approach integrates Thera-play techniques with trauma-informed expressive arts, creating a space where children feel safe enough to explore their feelings and begin healing.`,
            },
            {
                heading: "Benefits for Your Child",
                body: `Play therapy helps children develop coping mechanisms, improve emotional regulation, build healthier relationships, and increase self-esteem. Parents often report improvements in behaviour at home and school, better communication, and a happier, more resilient child.

We also work closely with parents and caregivers, providing guidance on how to support your child's emotional development outside of sessions.`,
            },
        ],
        howItWorks: [
            "Initial parent consultation to understand your child's unique needs.",
            "Create a safe, inviting therapeutic play space.",
            "Child-led play sessions with gentle therapeutic guidance.",
            "Integration of Thera-play and trauma-informed expressive arts.",
            "Regular parent check-ins to share progress and strategies.",
            "Build coping skills and emotional regulation through play-based interventions.",
        ],
    },
    assessments: {
        title: "Psychological Assessments",
        subtitle: "Clarity for Your Path Forward",
        image: `${import.meta.env.BASE_URL}office-4.jpg`,
        heroText: "Comprehensive psychological assessments that provide clear answers and actionable treatment recommendations.",
        sections: [
            {
                heading: "What Are Psychodiagnostic Assessments?",
                body: `A psychodiagnostic assessment is a thorough evaluation of cognitive, emotional, and behavioural functioning. Using standardized psychological tests, clinical interviews, and behavioural observations, we build a comprehensive picture of your mental health.

These assessments provide clarity for individuals who have been struggling without answers — whether it's understanding why you learn differently, why certain emotions feel overwhelming, or why relationships seem challenging.`,
            },
            {
                heading: "What We Assess",
                body: `Our assessments cover a wide range of concerns including ADHD, learning disabilities, autism spectrum conditions, anxiety and depressive disorders, personality assessments, giftedness evaluations, and neurocognitive functioning.

Each assessment is tailored to your specific referral question. We don't use a one-size-fits-all battery — instead, we select evidence-based measures that will provide the most useful and actionable information for your situation.`,
            },
            {
                heading: "The Value of a Clear Diagnosis",
                body: `A clear diagnosis is not a label — it's a roadmap. It opens doors to appropriate treatment, school accommodations, workplace supports, and self-understanding. Many clients describe their assessment results as life-changing, finally making sense of patterns they've struggled with for years.

You'll receive a detailed written report with specific, practical recommendations — not just a diagnosis, but a plan forward.`,
            },
        ],
        howItWorks: [
            "Initial intake interview to understand your concerns and referral questions.",
            "Administer standardized psychological tests tailored to your needs.",
            "Clinical observation and behavioural assessment.",
            "Comprehensive analysis and interpretation of results.",
            "Detailed written report with diagnosis and actionable recommendations.",
            "Feedback session to discuss results and plan next steps.",
        ],
    },
    vocational: {
        title: "Vocational Support",
        subtitle: "Professional Empowerment",
        image: `${import.meta.env.BASE_URL}service-vocational.png`,
        heroText: "Psychological support for workplace challenges, career transitions, and vocational rehabilitation.",
        sections: [
            {
                heading: "Supporting Your Professional Life",
                body: `Your work life profoundly impacts your mental health — and vice versa. Whether you're struggling with workplace stress, facing a career transition, navigating a disability claim, or seeking vocational rehabilitation, psychological support can make a meaningful difference.

We provide comprehensive vocational psychological services that address the intersection of mental health and work life, helping you find balance, purpose, and fulfilment in your professional journey.`,
            },
            {
                heading: "Workplace Mental Health",
                body: `Workplace stress, burnout, conflict, and toxic environments take a real toll on your mental health. We help you develop strategies to manage workplace stressors, set healthy boundaries, and build resilience in your professional life.

For those dealing with workplace injury or disability, we provide psychological assessments and treatment that support your recovery and return-to-work process.`,
            },
            {
                heading: "Career Transitions & Growth",
                body: `Whether you're changing careers, re-entering the workforce, or navigating the psychological impact of job loss, we're here to support you. Our vocational counselling helps you identify your strengths, clarify your values, and build confidence for the next chapter in your professional life.`,
            },
        ],
        howItWorks: [
            "Comprehensive vocational and psychological assessment.",
            "Identify workplace stressors and psychological barriers.",
            "Develop coping strategies for professional challenges.",
            "Support for disability claims and return-to-work planning.",
            "Career counselling and strengths identification.",
            "Ongoing therapeutic support for workplace mental health.",
        ],
    },
    "tele-assessments": {
        title: "Tele-assessments",
        subtitle: "Remote Psychological Care",
        image: `${import.meta.env.BASE_URL}service-tele-assessments.png`,
        heroText: "Access comprehensive psychological assessments from the comfort of your home through secure, evidence-based protocols.",
        sections: [
            {
                heading: "Breaking Down Barriers to Care",
                body: `Geography, mobility, and scheduling shouldn't stand between you and the psychological support you need. Our tele-assessment services bring comprehensive psychological evaluation directly to you through secure video platforms.

As a registered psychologist across Alberta, Manitoba, and Saskatchewan, Iso provides accessible assessment services to individuals who may face barriers to in-person care — whether due to rural location, disability, health concerns, or personal preference.`,
            },
            {
                heading: "How Tele-assessments Work",
                body: `Tele-assessments use the same rigorous, evidence-based protocols as in-person assessments, adapted for secure virtual delivery. Through a combination of video-based clinical interviews, online standardized testing platforms, and mailed assessment materials, we ensure a thorough and valid evaluation.

Our approach maintains the highest standards of psychological assessment while offering the convenience and accessibility of remote service delivery.`,
            },
            {
                heading: "What You'll Need",
                body: `All you need is a stable internet connection, a quiet private space, and a computer with a camera and microphone. We'll guide you through the technical setup and ensure you're comfortable before beginning.

You'll receive the same comprehensive written report and feedback session as our in-person clients, with results delivered securely and privately.`,
            },
        ],
        howItWorks: [
            "Schedule a free 15-minute telephone consultation to discuss your needs.",
            "Receive a technical setup guide and secure platform access.",
            "Complete clinical interviews via secure video connection.",
            "Standardized testing administered through validated online platforms.",
            "Comprehensive report prepared with diagnosis and recommendations.",
            "Feedback session delivered via secure video to discuss your results.",
        ],
    },
};

export default function ServicePage() {
    const { slug } = useParams();
    const service = servicesData[slug];

    if (!service) {
        return (
            <div style={{ backgroundColor: "var(--color-cream)" }} className="w-full pt-40 pb-20 text-center px-6">
                <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "2.5rem", color: "var(--color-text-dark)" }}>Service Not Found</h1>
                <p style={{ color: "var(--color-text-muted)", marginTop: "1rem", fontSize: "1.2rem" }}>The service you're looking for doesn't exist.</p>
                <Link to="/services" className="btn-primary" style={{ marginTop: "2rem", display: "inline-block" }}>View All Services</Link>
            </div>
        );
    }

    return (
        <div style={{ backgroundColor: "var(--color-cream)", position: "relative", overflow: "hidden" }} className="w-full pt-20">
            <FloatingOrbs variant="sage" />

            {/* Hero Banner */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ backgroundColor: "#A1A79E", padding: "4rem 1.5rem", position: "relative", overflow: "hidden" }}
                className="text-center"
            >
                <FloatingOrbs variant="cream" />
                <div className="relative z-10">
                    <p style={{
                        fontFamily: "var(--font-sans)", fontSize: "0.7rem", fontWeight: 600,
                        letterSpacing: "0.2em", textTransform: "uppercase",
                        color: "#B57B66", marginBottom: "1.5rem",
                    }}>
                        Specialized Therapy
                    </p>
                    <h1 style={{
                        fontFamily: "var(--font-serif)", fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                        color: "var(--color-cream)", lineHeight: 1.1,
                        maxWidth: "800px", margin: "0 auto 0.75rem",
                    }}>
                        {service.title}
                    </h1>
                    <p style={{
                        fontFamily: "var(--font-serif)", fontSize: "1.3rem", fontStyle: "italic",
                        color: "rgba(252, 246, 242,0.5)", marginBottom: "2rem",
                    }}>
                        {service.subtitle}
                    </p>
                    <p style={{
                        color: "rgba(252, 246, 242,0.7)", fontWeight: 400,
                        maxWidth: "560px", margin: "0 auto 3rem",
                        fontSize: "1.2rem", lineHeight: 1.9
                    }}>
                        {service.heroText}
                    </p>
                    <a href="https://iosinsights.janeapp.com/" target="_blank" rel="noreferrer" className="btn-light inline-block">
                        Connect with Me
                    </a>
                </div>
            </motion.div>

            {/* Service Image */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-5xl mx-auto px-6"
                style={{ marginTop: "-3rem", position: "relative", zIndex: 10 }}
            >
                <div style={{
                    borderRadius: "1.5rem", overflow: "hidden",
                    boxShadow: "0 20px 60px rgba(42, 23, 25,0.15)",
                }}>
                    <img
                        src={service.image}
                        alt={service.title}
                        style={{
                            width: "100%", height: "400px", objectFit: "cover",
                            display: "block",
                        }}
                    />
                </div>
            </motion.div>

            {/* Long-form content */}
            <div className="max-w-4xl mx-auto px-6 py-20 space-y-20">
                {service.sections.map((section, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h2 style={{
                            fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                            color: "var(--color-text-dark)", lineHeight: 1.2,
                        }}>
                            {section.heading}
                        </h2>
                        <div className="divider" />
                        {section.body.split("\n\n").map((para, j) => (
                            <p key={j} style={{ color: "var(--color-text-muted)", fontWeight: 400, fontSize: "1.2rem", lineHeight: 1.95 }}>
                                {para}
                            </p>
                        ))}
                    </motion.div>
                ))}

                {/* How it works */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{ backgroundColor: "var(--color-cream-dark)", borderRadius: "1.5rem", padding: "3.5rem", border: "1px solid var(--color-lilac)" }}
                >
                    <h2 style={{
                        fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                        color: "var(--color-text-dark)", marginBottom: "2rem", lineHeight: 1.2
                    }}>
                        How It Works at iOS Insights
                    </h2>
                    <div className="space-y-4">
                        {service.howItWorks.map((item, i) => (
                            <div key={i} className="flex gap-4 items-start">
                                <CheckCircle2 size={20} className="flex-shrink-0 mt-1" style={{ color: "var(--color-wine)" }} />
                                <p style={{ color: "var(--color-text-muted)", fontWeight: 400, fontSize: "1.15rem", lineHeight: 1.8 }}>
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Other Services */}
            <div className="max-w-5xl mx-auto px-6 pb-20">
                <h3 style={{
                    fontFamily: "var(--font-serif)", fontSize: "1.8rem",
                    color: "var(--color-text-dark)", marginBottom: "1.5rem", textAlign: "center",
                }}>
                    Explore Other Services
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                    {Object.entries(servicesData).filter(([s]) => s !== slug).map(([s, data]) => (
                        <Link key={s} to={`/services/${s}`}
                            style={{
                                padding: "0.6rem 1.4rem", borderRadius: "9999px",
                                backgroundColor: "rgba(160, 89, 98,0.08)", color: "var(--color-wine)",
                                fontFamily: "var(--font-sans)", fontSize: "0.8rem", fontWeight: 600,
                                letterSpacing: "0.1em", textTransform: "uppercase",
                                textDecoration: "none", transition: "background-color 0.2s",
                            }}
                            onMouseOver={e => e.currentTarget.style.backgroundColor = "rgba(160, 89, 98,0.15)"}
                            onMouseOut={e => e.currentTarget.style.backgroundColor = "rgba(160, 89, 98,0.08)"}
                        >
                            {data.title}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Bottom CTA — Wine */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ backgroundColor: "var(--color-wine)" }}
                className="py-24 px-6 text-center"
            >
                <div className="flex justify-center mb-3 -mt-8">
                    <SpinningLogo size={180} variant="black" />
                </div>
                <p style={{
                    fontFamily: "var(--font-sans)", fontSize: "0.7rem", fontWeight: 600,
                    letterSpacing: "0.2em", textTransform: "uppercase",
                    color: "var(--color-lilac)", marginBottom: "1.5rem",
                }}>
                    Take the First Step
                </p>
                <h2 style={{
                    fontFamily: "var(--font-serif)", fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
                    color: "var(--color-cream)", maxWidth: "700px",
                    margin: "0 auto 1.5rem", lineHeight: 1.15
                }}>
                    Ready to Begin?
                </h2>
                <p style={{ color: "rgba(252, 246, 242,0.7)", fontWeight: 400, maxWidth: "560px", margin: "0 auto 2.5rem", fontSize: "1.2rem", lineHeight: 1.9 }}>
                    Book a free 15-minute consultation to see if we're the right match for your unique journey toward healing.
                </p>
                <a href="https://iosinsights.janeapp.com/" target="_blank" rel="noreferrer" className="btn-light">
                    Connect with Me
                </a>
            </motion.div>
        </div>
    );
}
