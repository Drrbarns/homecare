import { PageHeader } from "@/components/layout/PageHeader";
import Link from "next/link";
import { CheckCircle2, Clock, Users, GraduationCap, TrendingUp, DollarSign, HeartHandshake } from "lucide-react";

export const metadata = {
    title: "Caregiver Jobs at MidAid | Join Our Team",
    description: "Build a meaningful career that fits your life while making a real difference for others. Join our team of professional caregivers.",
}

const supportFeatures = [
    {
        icon: Clock,
        title: "Flexible Scheduling",
        desc: "Full-time and part-time positions are available in numerous caregiving roles. It’s a great career for students, retirees, and parents of young kids—you can choose to work evenings, weekends, or even overnight shifts. MidAid also offers holiday pay!"
    },
    {
        icon: HeartHandshake,
        title: "Caregiver Matching Program",
        desc: "One of the reasons why clients love MidAid is our Select a Caregiver® program. We carefully match each senior with the right caregiver. That means you’ll work with families who are compatible with your availability, experience, personality, and shared interests."
    },
    {
        icon: GraduationCap,
        title: "Caregiver University",
        desc: "With MidAid, you can take advantage of paid in-person or online training opportunities through your local office. Learn to specialize in caring for seniors with specific health needs, such as military veterans or older adults with Alzheimer’s disease or dementia."
    },
    {
        icon: TrendingUp,
        title: "Career Advancement",
        desc: "Becoming a MidAid caregiver is a great way to kick off a rewarding career. As you gain confidence in your caregiving skills, you can assume a role with more responsibility, such as a care coordinator, training provider, or administrative support professional."
    }
];

const benefits = [
    "401(K) retirement plan",
    "Annual performance reviews and raises",
    "Holiday pay",
    "Medical and dental insurance",
    "Paid onboarding and training",
    "Travel reimbursement"
];

export default function CareersPage() {
    return (
        <>
            <PageHeader
                title="Caregiver Jobs"
                subtitle="You’re Set for Success from Day One When You Work for MidAid! Part-Time & Full-Time Home Care Careers."
            />

            {/* Intro Section */}
            <section className="py-16 md:py-24 bg-white dark:bg-slate-950">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900 dark:text-white">
                        What's Important To You in a Career?
                    </h2>
                    <div className="text-lg text-slate-700 dark:text-slate-300 space-y-6">
                        <p>
                            Build a meaningful career that fits your life while making a real difference for others. As a MidAid professional caregiver, you’ll help seniors live safely and comfortably at home, forming real connections and bringing peace of mind to families.
                        </p>
                        <p>
                            With MidAid, you’ll find a vibrant, supportive workplace where caregivers feel truly valued. We're ready to welcome you with the support and ongoing training you need to succeed. Let’s get started!
                        </p>
                    </div>
                    <div className="mt-10">
                        <Link
                            href="/contact-us"
                            className="inline-flex items-center justify-center bg-primary text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/30"
                        >
                            Apply Now
                        </Link>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                                <DollarSign className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white">
                                Competitive Pay & Benefits
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                                The pay range for MidAid caregivers varies depending on where you live, your duties, and the shifts you work. Your local office team will provide specifics when you apply.
                            </p>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 font-semibold">
                                If you work full-time, you may be eligible for career benefits including:
                            </p>
                        </div>
                        <div className="md:w-1/2 w-full">
                            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                                <ul className="space-y-4">
                                    {benefits.map((benefit, i) => (
                                        <li key={i} className="flex items-center text-lg text-slate-700 dark:text-slate-300">
                                            <CheckCircle2 className="w-6 h-6 text-primary mr-4 shrink-0" />
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Support Features Section */}
            <section className="py-16 md:py-24 bg-white dark:bg-slate-950">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white">
                            Supporting Our Caregivers at Every Step
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">
                            We equip our team members with the tools, training, and flexibility they need to thrive both professionally and personally.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {supportFeatures.map((feature, i) => (
                            <div key={i} className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row gap-6 hover:shadow-md transition-shadow">
                                <div className="shrink-0">
                                    <div className="w-14 h-14 bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700 rounded-xl flex items-center justify-center text-primary">
                                        <feature.icon className="w-7 h-7" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">
                                        {feature.title}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                                        {feature.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
