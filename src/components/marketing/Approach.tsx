import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { UserCheck, Clock, HeartHandshake, ShieldCheck } from "lucide-react";

const features = [
    {
        title: "Perfect Match Caregivers",
        description: "We verify skills and background, but we also match based on personality and shared interests to ensure a meaningful bond.",
        icon: UserCheck
    },
    {
        title: "Personalized Care Plans",
        description: "No two families are alike. We build a custom care plan that addresses your specific needs and preferences.",
        icon: HeartHandshake
    },
    {
        title: "Flexible Scheduling",
        description: "Whether you need 4 hours a week or 24/7 live-in support, our scheduling is designed to work for you.",
        icon: Clock
    },
    {
        title: "Peace of Mind",
        description: "With our rigorous screening and ongoing supervision, you can rest easy knowing your loved one is in safe hands.",
        icon: ShieldCheck
    }
];

export function Approach() {
    return (
        <section className="py-24 bg-white dark:bg-slate-950">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white tracking-tight">
                        Our Approach to Care
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400">
                        We believe that home care is about more than just completing tasks. It's about restoring hope and dignity through compassionate relationships.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, i) => (
                        <Card key={i} className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-slate-50 dark:bg-slate-900 duration-300">
                            <CardHeader>
                                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-4 transform rotate-3 hover:rotate-12 transition-transform">
                                    <feature.icon className="w-7 h-7" />
                                </div>
                                <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                                    {feature.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Stat Area */}
                <div className="mt-20 bg-primary/5 rounded-3xl p-8 md:p-12 text-center">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Decades of Trusted Experience</h3>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        For over 25 years, families have trusted us to provide the highest standard of in-home care.
                    </p>
                </div>
            </div>
        </section>
    );
}
