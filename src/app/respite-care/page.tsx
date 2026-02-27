import Image from "next/image";
import Link from "next/link";
import { InnerPageHero } from "@/components/shared/InnerPageHero";
import { InnerPageSidebar } from "@/components/layout/sidebar/InnerPageSidebar";
import { FloatingGetStarted } from "@/components/layout/FloatingGetStarted";
import { Newsletter } from "@/components/marketing/Newsletter";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { RelatedArticles } from "@/components/shared/RelatedArticles";

export const metadata = {
    title: "Respite Care Services",
    description: "Visiting Angels, a home care agency can provide in-home assistance when you feel overwhelmed with responsibilities and need a break.",
};

export default function RespiteCarePage() {
    const faqs = [
        {
            question: "Do I Need to Hire Respite Care Services?",
            answer: "If you are feeling overwhelmed, stressed, or physically exhausted from your caregiving duties, respite care can provide the essential break you need to recharge and maintain your own well-being."
        },
        {
            question: "Will My Loved One Get the Same Level of Care?",
            answer: "Yes. Our professional caregivers are highly trained and experienced. We work closely with you to understand your loved one's routines and preferences to ensure a seamless transition and consistent, high-quality care."
        },
        {
            question: "How Will Caregivers Respond to My Loved One's Unique Needs?",
            answer: "During our initial consultation, we create a customized care plan tailored specifically to your loved one's physical, emotional, and cognitive needs, ensuring our caregivers are fully prepared to provide the right support."
        },
        {
            question: "Can My Family Afford Respite Services?",
            answer: "We offer flexible scheduling options, allowing you to arrange care for just a few hours a week or more, depending on your budget and needs. We can help you explore options to make care as affordable as possible."
        }
    ];

    const relatedArticles = [
        {
            title: "Respite Care Can Support a Family Caregiver's Well-Being",
            imageSrc: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=600&auto=format&fit=crop",
            imageAlt: "Caregiver and senior talking",
            href: "/articles/respite-care-support-family-caregiver-well-being"
        },
        {
            title: "Helping a Senior Loved One With a Substance Use Problem",
            imageSrc: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=600&auto=format&fit=crop",
            imageAlt: "Family discussion",
            href: "/articles/helping-senior-with-substance-use-problem"
        },
        {
            title: "What Are Qualities of a Visiting Angels Caregiver?",
            imageSrc: "https://images.unsplash.com/photo-1581579205466-e4304e287010?q=80&w=600&auto=format&fit=crop",
            imageAlt: "Caregiver assisting senior",
            href: "/articles/what-are-qualities-of-a-visiting-angels-caregiver"
        }
    ];

    return (
        <>
            <InnerPageHero
                title="Respite Care"
                description="Visiting Angels, a home care agency can provide in-home assistance when you feel overwhelmed with responsibilities and need a break."
                imageSrc="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1200&auto=format&fit=crop"
                imageAlt="Caregiver with an older couple on a couch"
                showPlayButton={true}
            />

            <div className="container mx-auto px-4 lg:px-6 xl:px-8 max-w-[1440px] py-16 lg:py-24">
                <div className="flex flex-col lg:flex-row gap-12 xl:gap-16">
                    {/* Left Sidebar */}
                    <div className="w-full lg:w-[320px] shrink-0">
                        <InnerPageSidebar />
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 w-full text-[15px] md:text-[16px] text-[#333333] leading-[1.7] font-sans">
                        
                        <p className="mb-6 text-[15.5px]">
                            Caring for an aging loved one with complex needs can feel like a full-time job—or a 24/7 commitment. In fact, you might be one of 40+ million Americans providing <Link href="/articles" className="underline text-[#3b7ea1] hover:text-[#043b67]">unpaid elder care</Link>. What happens when you need to run important errands, go to a business meeting at the office, take a vacation, or need a breather? Where can you turn?
                        </p>
                        <p className="mb-12 text-[15.5px]">
                            You'll gain peace of mind knowing your loved one is in capable and experienced hands—even for a brief time.
                        </p>

                        {/* Two Column Layout for "What Is Respite Care?" */}
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 mb-12">
                            <div className="w-full lg:w-[60%]">
                                <h2 className="text-[26px] md:text-[32px] font-bold text-[#043b67] mb-6 font-sans tracking-tight">
                                    What Is Respite Care?
                                </h2>
                                <p className="mb-6 text-[15.5px]">
                                    Respite care is short-term or temporary <Link href="/home-care-services" className="underline text-[#3b7ea1] hover:text-[#043b67]">home care</Link> that offers a much-needed break from your primary caregiver duties. With the support of an experienced care provider, you'll have time to focus on work, attend to personal tasks, and connect with other loved ones.
                                </p>
                                <p className="mb-6 text-[15.5px]">
                                    Respite care can also help recharge your batteries and reduce the risk of "<Link href="/articles" className="underline text-[#3b7ea1] hover:text-[#043b67]">caregiver burnout</Link>," which can occur when the stress and emotional strain of care responsibilities becomes overwhelming.
                                </p>
                                <p className="mb-0 text-[15.5px]">
                                    Short-term <Link href="/home-care-services" className="underline text-[#3b7ea1] hover:text-[#043b67]">senior care</Link> can provide an immediate positive impact. If you need to rest and recuperate, Visiting Angels can provide in-home services while you focus on your well-being. If your daily or weekly caregiving routine has become too demanding, our dedicated caregivers can conduct regular respite care visits to lighten your load.
                                </p>
                            </div>
                            <div className="w-full lg:w-[40%] pt-2">
                                <div className="relative h-[480px] w-full rounded-[4px] overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1581579205466-e4304e287010?q=80&w=800&auto=format&fit=crop"
                                        alt="Caregiver helping a senior woman with a walker on stairs"
                                        fill
                                        className="object-cover object-center"
                                    />
                                </div>
                            </div>
                        </div>

                        <h2 className="text-[26px] md:text-[32px] font-bold text-[#043b67] mb-6 font-sans tracking-tight">
                            Get Started with Respite Care
                        </h2>
                        <p className="mb-8 text-[15.5px]">
                            We offer <Link href="/home-care-services" className="underline text-[#3b7ea1] hover:text-[#043b67]">flexible respite care planning</Link> and scheduling that's customized specifically for your loved one and family.
                        </p>

                        {/* White Box List */}
                        <div className="border border-[#e5e7eb] rounded-[4px] p-8 md:p-10 mb-12 relative">
                            <p className="mb-6 text-[15.5px] text-[#3b7ea1]">
                                Our trained and trusted caregivers can handle many daily tasks, including:
                            </p>
                            
                            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                                <ul className="flex-1 space-y-4">
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333]">Bathing</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333]">Dressing</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333]">Grooming</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333]">Laundry</span>
                                    </li>
                                </ul>
                                <ul className="flex-1 space-y-4">
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333]">Light housekeeping</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333]">Meal planning</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333]">Meal preparation</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333]">Medication reminders</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Middle Section: Image Left, Text Right */}
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start mb-16">
                            <div className="w-full lg:w-[45%]">
                                <div className="relative h-[380px] w-full rounded-[4px] overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=800&auto=format&fit=crop"
                                        alt="Caregiver showing something on a phone to a senior man outdoors"
                                        fill
                                        className="object-cover object-center"
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-[55%] pt-2">
                                <p className="mb-6 text-[15.5px]">
                                    We also offer <Link href="/elderly-companion-care" className="underline text-[#3b7ea1] hover:text-[#043b67]">companion care</Link>, <Link href="/personal-care" className="underline text-[#3b7ea1] hover:text-[#043b67]">personal care</Link>, and specialized memory care for loved ones living with <Link href="/alzheimers-care" className="underline text-[#3b7ea1] hover:text-[#043b67]">Alzheimer's</Link> or other <Link href="/dementia-care" className="underline text-[#3b7ea1] hover:text-[#043b67]">dementia conditions</Link>.
                                </p>
                                <p className="mb-6 text-[15.5px]">
                                    Finding the right care for your loved one should be a stress-free process, which is why we make it easy to get started with a free home care consultation. A local Visiting Angels care coordinator will take the time to understand your loved one's unique needs, preferences, and daily routine to develop a customized care plan tailored specifically for them.
                                </p>
                                <p className="mb-0 text-[15.5px]">
                                    Contact a Visiting Angels <Link href="/locations" className="underline text-[#3b7ea1] hover:text-[#043b67]">home care location near you</Link>.
                                </p>
                            </div>
                        </div>

                        {/* CTA Banner */}
                        <div className="bg-[#2a7d74] rounded-[4px] overflow-hidden relative mb-16 shadow-lg">
                            {/* Wave Pattern Background */}
                            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100%\' height=\'100%\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3Cpattern id=\'waves\' x=\'0\' y=\'0\' width=\'100\' height=\'40\' patternUnits=\'userSpaceOnUse\'%3E%3Cpath d=\'M0 20 Q 25 0, 50 20 T 100 20\' fill=\'none\' stroke=\'%23ffffff\' stroke-width=\'2\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'100%\' height=\'100%\' fill=\'url(%23waves)\' /%3E%3C/svg%3E")' }}></div>
                            
                            <div className="relative z-10 flex flex-col lg:flex-row items-center p-8 md:p-12 gap-8">
                                <div className="flex-1">
                                    <h2 className="text-[28px] md:text-[32px] font-bold text-white mb-6 font-sans tracking-tight">
                                        Fast-Track Services Are Available
                                    </h2>
                                    <p className="text-white text-[15.5px] mb-5 leading-relaxed">
                                        Your local Visiting Angels agency may be able to assist when home care is needed on short notice. In most cases, a care coordinator can fast-track the planning and scheduling process and will do their best to ensure a caregiver is available for your loved one.
                                    </p>
                                    <p className="text-white text-[15.5px] mb-8 leading-relaxed">
                                        You can usually schedule services for a few hours or overnight to a few days or longer. Visiting Angels caregivers can also perform in-home assistance routinely on a weekly, bi-weekly, or monthly basis.
                                    </p>
                                    <Link href="/locations" className="inline-flex items-center justify-center bg-[#d8981e] text-[#043b67] font-bold text-[15px] px-8 py-3.5 rounded-[4px] hover:bg-[#c78b1b] transition-colors">
                                        View Our Office Locations
                                    </Link>
                                </div>
                                <div className="w-full lg:w-[320px] shrink-0 flex justify-center lg:justify-end">
                                    <div className="w-[280px] h-[280px] rounded-full overflow-hidden border-4 border-white/20 relative shadow-xl">
                                        <Image
                                            src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=600&auto=format&fit=crop"
                                            alt="Woman on the phone in a kitchen"
                                            fill
                                            className="object-cover object-center"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <FAQAccordion title="Frequently Asked Questions" faqs={faqs} />
            <RelatedArticles articles={relatedArticles} />
            
            <Newsletter />
            <FloatingGetStarted />
        </>
    );
}
