import Link from "next/link";
import { Home, User, Heart, Brain, RefreshCw, Sparkles } from "lucide-react";

const services = [
    {
        icon: Home,
        title: "Companionship Care",
        desc: "Alleviating loneliness with friendly conversation, games, and shared activities.",
        anchor: "companionship"
    },
    {
        icon: User,
        title: "Personal Care",
        desc: "Respectful assistance with bathing, dressing, grooming, and hygiene routines.",
        anchor: "personal-care"
    },
    {
        icon: RefreshCw,
        title: "Respite Care",
        desc: "Providing family caregivers with much-needed breaks to recharge and rest.",
        anchor: "respite-care"
    },
    {
        icon: Brain,
        title: "Dementia Support",
        desc: "Specialized memory care strategies to ensure safety and reduce anxiety.",
        anchor: "dementia-care"
    },
    {
        icon: Heart,
        title: "Post-Hospital Support",
        desc: "Transitional care to help seniors recover safely and comfortably at home.",
        anchor: "post-hospital"
    },
    {
        icon: Sparkles,
        title: "Light Housekeeping",
        desc: "Help with meal preparation, laundry, and maintaining a clean, safe environment.",
        anchor: "housekeeping"
    },
];

export function ServicesPreview() {
    return (
        <section className="py-12 sm:py-16 md:py-24 bg-slate-50 dark:bg-slate-900">
            <div className="container mx-auto px-5 sm:px-6">
                <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fade-in-up">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white">
                        Comprehensive Home Care Services
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        From friendly companionship to specialized medical support, our services are designed to adapt to your loved one's unique needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
                    {services.map((service, i) => (
                        <Link
                            key={i}
                            href={`/home-care-services#${service.anchor}`}
                            className="group block bg-white dark:bg-slate-800 p-5 sm:p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-slate-700 hover:-translate-y-1"
                        >
                            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <service.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                {service.desc}
                            </p>
                            <div className="mt-4 text-primary font-medium text-sm flex items-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
                                Learn more &rarr;
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link href="/home-care-services" className="inline-flex items-center text-primary font-semibold hover:underline text-lg">
                        View all services &rarr;
                    </Link>
                </div>
            </div>
        </section>
    );
}
