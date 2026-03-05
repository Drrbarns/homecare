import Image from "next/image";
import Link from "next/link";
import { InnerPageHero } from "@/components/shared/InnerPageHero";
import { InnerPageSidebar } from "@/components/layout/sidebar/InnerPageSidebar";
import { FloatingGetStarted } from "@/components/layout/FloatingGetStarted";
import { Newsletter } from "@/components/marketing/Newsletter";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { RelatedArticles } from "@/components/shared/RelatedArticles";

export const metadata = {
    title: "Elderly Companion Care Near Me",
    description: "Social interaction and emotional support are vital components of overall well-being—especially for seniors with health or mobility issues.",
};

export default function ElderlyCompanionCarePage() {
    const faqs = [
        {
            question: "What is Companion Care?",
            answer: "Companion care is a type of in-home care service that provides non-medical assistance and social interaction for seniors and individuals with disabilities. The primary goal is to provide emotional support, improve quality of life, and help with everyday activities."
        },
        {
            question: "What Do Companion Caregivers Help With?",
            answer: "Companion caregivers help with a variety of tasks including light housekeeping, meal preparation, medication reminders, errands, transportation to appointments, and most importantly, providing meaningful social interaction and companionship."
        },
        {
            question: "How Can Social Isolation and Loneliness Affect Seniors?",
            answer: "Social isolation and loneliness can lead to serious health issues in seniors, including depression, anxiety, cognitive decline, high blood pressure, weakened immune system, and an increased risk of heart disease and Alzheimer's."
        },
        {
            question: "What's the Difference Between Companion Care and Personal Care?",
            answer: "Companion care focuses primarily on social interaction and light assistance with daily routines (like cooking or cleaning). Personal care includes companion care but adds physical assistance with tasks like bathing, dressing, grooming, and mobility."
        },
        {
            question: "How Often Will You Visit My Loved One?",
            answer: "The frequency of visits is completely tailored to your loved one's needs. We offer flexible scheduling, ranging from a few hours a week for respite care to 24/7 round-the-clock support."
        }
    ];

    const relatedArticles = [
        {
            title: "Caring for an Elderly Parent When You're Not Feeling Well",
            imageSrc: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop",
            imageAlt: "Caregiver hugging senior",
            href: "/articles/caring-for-elderly-parent-when-not-feeling-well"
        },
        {
            title: "Helping Senior Parents Overcome Fear and Loneliness at Home",
            imageSrc: "https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=600&auto=format&fit=crop",
            imageAlt: "Caregiver playing game with senior man",
            href: "/articles/helping-senior-parents-overcome-fear-and-loneliness"
        },
        {
            title: "How Senior Enrichment Courses Inspire Learning and Connection",
            imageSrc: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=600&auto=format&fit=crop",
            imageAlt: "Caregiver and senior playing cards",
            href: "/articles/how-senior-enrichment-courses-inspire-learning"
        }
    ];

    return (
        <>
            <InnerPageHero 
                title="Companion Care"
                description="Social interaction and emotional support are vital components of overall well-being—especially for seniors with health or mobility issues."
                imageSrc="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1200&auto=format&fit=crop"
                imageAlt="Caregiver and senior woman smiling together at a table"
                showPlayButton={true}
            />
            
            <div className="container mx-auto px-5 sm:px-6 lg:px-6 xl:px-8 max-w-[1440px] py-10 sm:py-16 lg:py-24">
                <div className="flex flex-col lg:flex-row gap-12 xl:gap-16">
                    {/* Left Sidebar */}
                    <div className="w-full lg:w-[320px] shrink-0">
                        <InnerPageSidebar />
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 w-full text-[15px] md:text-[16px] text-[#333333] leading-[1.7] font-sans">
                        <p className="mb-6">
                            Loneliness and boredom can result in anxiety, depression, and behavior changes. Professional in-home companion care can elevate the aging experience for seniors with companionship, empathy, and unwavering dedication.
                        </p>
                        <p className="mb-12">
                            From assistance with daily activities to meaningful social engagement, Visiting Angels is committed to fostering a nurturing environment where seniors can thrive at home with dignity and independence.
                        </p>

                        {/* Senior Companion Services Block */}
                        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start mb-12">
                            <div className="w-full md:w-[45%]">
                                <div className="relative h-[380px] w-full rounded-[8px] overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1581579205466-e4304e287010?q=80&w=800&auto=format&fit=crop"
                                        alt="Caregiver helping senior woman with her hair"
                                        fill
                                        className="object-cover object-center"
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-[55%] pt-2">
                                <h2 className="text-[26px] md:text-[32px] font-bold text-[#043b67] mb-6 font-sans tracking-tight">
                                    Senior Companion Services
                               </h2>
                               <p className="mb-5">
                                   Supporting an aging adult while balancing your own responsibilities can be an emotional and logistical challenge. Our professional <Link href="/home-care-services" className="underline text-[#3b7ea1] hover:text-[#043b67]">home care</Link> services will provide an extra layer of support to ensure your loved one <Link href="/articles" className="underline text-[#3b7ea1] hover:text-[#043b67]">ages in place</Link> safely and compassionately.
                               </p>
                               <p>
                                   Our companion caregivers become trusted friends, providing an upbeat, familiar face in the comfort of your loved one's home. We engage older adults with favorite hobbies, social outings, shopping, or sharing meals—relieving loneliness and feelings of isolation.
                               </p>
                            </div>
                        </div>

                        {/* White Box List */}
                        <div className="bg-white border-[2px] border-[#d6eaee] rounded-[8px] p-8 shadow-sm mb-12">
                            <p className="text-[17px] text-[#333333] mb-6 leading-relaxed">
                                Our professional <Link href="/home-care-services" className="font-bold text-[#3b7ea1] hover:text-[#043b67] underline">senior care</Link> services <strong className="text-[#3b7ea1]">improve the quality of life for your loved one</strong> in many ways by helping with:
                            </p>
                            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                                <ul className="flex-1 space-y-4">
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-2 shrink-0"></div>
                                        <span>Camaraderie</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-2 shrink-0"></div>
                                        <span>Errands</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-2 shrink-0"></div>
                                        <span>Comfort and wellness support</span>
                                    </li>
                                </ul>
                                <ul className="flex-1 space-y-4">
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-2 shrink-0"></div>
                                        <span>Light housekeeping</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-2 shrink-0"></div>
                                        <span>Participation in recreational activities</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-2 shrink-0"></div>
                                        <span>Transportation assistance</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <p className="mb-12">
                            Our companion care services can also fill in the gaps when you cannot be with your loved one due to personal, professional, and family commitments. We offer you peace of mind knowing your senior is getting the socialization they need to enhance their attitude and spirit from a dependable and trustworthy care provider.
                        </p>

                        {/* CTA Banner Component */}
                        <div className="relative rounded-[8px] overflow-hidden text-white mb-8" style={{ backgroundColor: '#5c355f' }}>
                            {/* Wavy Background Pattern (simulated with SVG) */}
                            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-overlay">
                                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <pattern id="wave" x="0" y="0" width="100" height="20" patternUnits="userSpaceOnUse">
                                            <path d="M0 10 Q 25 20, 50 10 T 100 10" fill="none" stroke="white" strokeWidth="2" />
                                        </pattern>
                                    </defs>
                                    <rect width="100%" height="100%" fill="url(#wave)" />
                                </svg>
                            </div>

                            <div className="relative z-10 flex flex-col md:flex-row items-center p-8 md:p-12 lg:p-14 gap-8">
                                <div className="flex-1 w-full max-w-[500px]">
                                    <h3 className="text-[28px] md:text-[32px] font-bold mb-6 font-sans leading-tight">
                                        Getting Started with Companion Care
                                    </h3>
                                    <p className="text-[15px] mb-8 leading-relaxed text-white/90">
                                        We make it easy to find the right services and the right <Link href="/home-care-services" className="underline hover:text-white transition-colors">home care provider</Link>. Start with a free <Link href="/contact-us" className="underline hover:text-white transition-colors">home care consultation</Link> to help our caregivers learn about your loved one's situation in detail and lay the foundation for a customized <Link href="/home-care-services" className="underline hover:text-white transition-colors">home care plan</Link>.
                                    </p>
                                    <Link 
                                        href="/office-locator"
                                        className="inline-block transition-opacity hover:opacity-90 rounded-[4px] px-8 py-[14px] font-bold text-[15px]"
                                        style={{ backgroundColor: '#dca626', color: '#000000' }}
                                    >
                                        View Our Office Locations
                                    </Link>
                                </div>
                                <div className="w-full md:w-auto shrink-0 flex justify-center mt-6 md:mt-0">
                                    <div className="relative w-[240px] h-[240px] md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px] rounded-full overflow-hidden border-[6px] border-[#5c355f] shadow-lg transform md:scale-110 lg:scale-110 origin-right">
                                        <Image
                                            src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=600&auto=format&fit=crop"
                                            alt="Caregiver walking outside with senior in wheelchair"
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

            <FAQAccordion faqs={faqs} />
            <RelatedArticles articles={relatedArticles} />

            <Newsletter />
            <FloatingGetStarted />
        </>
    );
}
