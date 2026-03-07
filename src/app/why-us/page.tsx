import { PageHeader } from "@/components/layout/PageHeader";
import { Approach } from "@/components/marketing/Approach";
import { ShieldCheck, HeartPulse, Award, Users } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Why Choose MidAid | Professional Senior Home Care",
    description: "Learn about our compassionate approach to home care, our rigorous caregiver selection process, and why families across the nation trust MidAid.",
}

const philosophyPoints = [
    {
        icon: HeartPulse,
        title: "Person-Centered Care",
        desc: "We focus on the individual, not just their condition. Our care plans support the physical, emotional, and social well-being of your loved one."
    },
    {
        icon: Users,
        title: "Character Matters",
        desc: "When deciding whether to hire a caregiver, we ask ourselves one question: 'Would I trust this person to care for my own mother?' If the answer isn't a definitive 'yes,' they don't join our team."
    },
    {
        icon: ShieldCheck,
        title: "Safety & Security",
        desc: "All caregivers undergo comprehensive nationwide background checks, reference checks, and ongoing training to ensure the highest standard of safety."
    },
    {
        icon: Award,
        title: "Award-Winning Service",
        desc: "Consistently recognized as a leader in the senior care industry, we hold ourselves to rigorous standards of excellence in every community we serve."
    }
];

export default function WhyUsPage() {
    return (
        <>
            <PageHeader
                title="Why Families Trust MidAid"
                subtitle="America's Choice in Senior Home Care. Discover the difference our compassionate approach makes."
            />

            {/* Mission Statement */}
            <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900 dark:text-white">
                        Our Care Philosophy
                    </h2>
                    <p className="text-xl leading-relaxed text-slate-700 dark:text-slate-300 font-medium italic mb-10">
                        "We believe that care should be person-centered, dignified, and compassionate. Our caregivers are chosen not just for their skills, but for their heart."
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 text-left">
                        {philosophyPoints.map((point, i) => (
                            <div key={i} className="flex gap-4 p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                                <div className="shrink-0 mt-1">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                        <point.icon className="w-6 h-6" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{point.title}</h3>
                                    <p className="text-slate-600 dark:text-slate-400">{point.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Approach Component (already robust) */}
            <Approach />

            {/* CTA Section */}
            <section className="py-20 bg-primary/5 dark:bg-primary/10 text-center border-t border-primary/10">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Experience the MidAid Difference</h2>
                    <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 mb-10 text-lg">
                        You don't have to navigate this journey alone. Let us provide the supportive, compassionate care your family deserves.
                    </p>
                    <Link
                        href="/contact-us"
                        className="inline-block bg-primary text-white py-4 px-10 rounded-full font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-md shadow-primary/20"
                    >
                        Start Your Journey with Us
                    </Link>
                </div>
            </section>
        </>
    )
}
