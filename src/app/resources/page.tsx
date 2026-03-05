import { PageHeader } from "@/components/layout/PageHeader";
import { ResourcesPreview } from "@/components/marketing/ResourcesPreview";
import { CheckCircle2, ChevronRight, HelpCircle, Phone, Info, DollarSign } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Home Care Info & Resources | Visiting Angels",
    description: "Get answers to frequently asked questions, learn how to get started, and find out about home care costs.",
}

const stepsToStart = [
    {
        title: "Initial Consultation",
        desc: "We schedule a free, no-obligation consultation to meet your family, discuss your needs, and assess the home environment."
    },
    {
        title: "Customized Care Plan",
        desc: "Based on the consultation, we develop a comprehensive, personalized care plan tailored specifically to your loved one."
    },
    {
        title: "Caregiver Matching",
        desc: "Using our Select Your Caregiver® program, we match your loved one with a caregiver whose skills and personality are the perfect fit."
    },
    {
        title: "Ongoing Support & Monitoring",
        desc: "Once care begins, we consistently monitor quality and adjust the care plan as your loved one's needs evolve over time."
    }
];

export default function ResourcesPage() {
    return (
        <>
            <PageHeader
                title="Home Care Information"
                subtitle="Everything you need to know about starting home care, costs, and choosing the right agency."
            />

            {/* How To Get Started Section */}
            <section className="py-16 md:py-24 bg-white dark:bg-slate-950">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-16">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
                            <Info className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white">
                            How To Get Started With Home Care
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Making the decision to bring a professional caregiver into the home can be daunting. We simplify the process so you can get the support you need as quickly as possible.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {stepsToStart.map((step, i) => (
                            <div key={i} className="relative bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 text-center hover:-translate-y-1 transition-transform">
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg shadow-sm">
                                    {i + 1}
                                </div>
                                <h3 className="text-xl font-bold mt-4 mb-3 text-slate-900 dark:text-white">
                                    {step.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Costs & Options */}
            <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white flex items-center">
                                <DollarSign className="w-8 h-8 text-primary mr-3" />
                                Home Care Costs
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                                The cost of home care varies depending on your location and the level of assistance required. Because our care plans are personalized, you only pay for the services you need.
                            </p>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 font-semibold">
                                Ways families commonly pay for care:
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center text-lg text-slate-700 dark:text-slate-300">
                                    <CheckCircle2 className="w-6 h-6 text-primary mr-3 shrink-0" />
                                    Long-Term Care Insurance
                                </li>
                                <li className="flex items-center text-lg text-slate-700 dark:text-slate-300">
                                    <CheckCircle2 className="w-6 h-6 text-primary mr-3 shrink-0" />
                                    Veterans Assistance Programs
                                </li>
                                <li className="flex items-center text-lg text-slate-700 dark:text-slate-300">
                                    <CheckCircle2 className="w-6 h-6 text-primary mr-3 shrink-0" />
                                    Private Pay / Out of Pocket
                                </li>
                                <li className="flex items-center text-lg text-slate-700 dark:text-slate-300">
                                    <CheckCircle2 className="w-6 h-6 text-primary mr-3 shrink-0" />
                                    Life Insurance Conversions
                                </li>
                            </ul>
                        </div>
                        <div className="md:w-1/2 w-full">
                            <div className="bg-white dark:bg-slate-800 p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white border-b pb-4">Contact Us for Pricing</h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-6">
                                    Reach out to your local office to discuss your specific needs and receive a tailored quote for services.
                                </p>
                                <Link
                                    href="/contact-us"
                                    className="w-full inline-flex items-center justify-center bg-primary text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-primary/90 transition-all"
                                >
                                    Get Pricing Information
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Articles Section uses ResourcesPreview component */}
            <ResourcesPreview />

            {/* FAQ Summary */}
            <section className="py-16 bg-white dark:bg-slate-950">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <HelpCircle className="w-12 h-12 text-primary mx-auto mb-6" />
                    <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">Still Have Questions?</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
                        We know you may have dozens of questions. Our care coordinators are available 24/7 to provide answers and give you peace of mind.
                    </p>
                    <Link
                        href="/contact-us"
                        className="inline-flex items-center justify-center border-2 border-primary text-primary font-bold text-lg px-8 py-4 rounded-full hover:bg-primary hover:text-white transition-all shadow-sm"
                    >
                        <Phone className="w-5 h-5 mr-2" />
                        Speak with a Care Coordinator
                    </Link>
                </div>
            </section>
        </>
    )
}
