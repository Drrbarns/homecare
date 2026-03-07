import Image from "next/image";
import Link from "next/link";
import { InnerPageHero } from "@/components/shared/InnerPageHero";
import { InnerPageSidebar } from "@/components/layout/sidebar/InnerPageSidebar";
import { FloatingGetStarted } from "@/components/layout/FloatingGetStarted";
import { Newsletter } from "@/components/marketing/Newsletter";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { RelatedArticles } from "@/components/shared/RelatedArticles";

export const metadata = {
    title: "Personal Care Services at Home",
    description: "Most aging adults want to live in the comforts of home for as long as possible, but sometimes mobility or health issues can threaten their plans to age in place safely.",
};

export default function PersonalCarePage() {
    const faqs = [
        {
            question: "What's the Difference Between Personal Care and Companion Care?",
            answer: "While companion care focuses on socialization, light housekeeping, and running errands, personal care includes all of that plus direct physical assistance with tasks like bathing, dressing, grooming, and mobility."
        },
        {
            question: "How Can Personal Care Complement Home Health Care?",
            answer: "Personal care provides non-medical assistance with daily activities, which can complement the medical services provided by home health care professionals, ensuring a comprehensive approach to your loved one's well-being."
        },
        {
            question: "How Often Will You Visit My Loved One?",
            answer: "Our care plans are completely customizable. We can schedule visits as frequently as needed, from a few hours a week to 24-hour around-the-clock care, depending on your loved one's specific requirements."
        },
        {
            question: "What If My Loved One's Personal Care Plan Needs To Be Changed?",
            answer: "We regularly review and update care plans to ensure they continue to meet your loved one's evolving needs. You can request changes to the care plan at any time by contacting your local MidAid office."
        },
        {
            question: "Does MidAid Offer Services on the Weekends and Holidays?",
            answer: "Yes, our caregivers are available 24/7, including weekends and holidays, to provide uninterrupted care and support for your loved one."
        }
    ];

    const relatedArticles = [
        {
            title: "Caring for an Elderly Parent When You're Not Feeling Well",
            imageSrc: "/images/Whisk_05c25109353fe2d88f1437b47bfffa90dr.jpeg",
            imageAlt: "Caregiver and senior talking",
            href: "/articles/caring-for-elderly-parent-when-sick"
        },
        {
            title: "In-Home Support for Seniors Recovering from Breast Cancer",
            imageSrc: "/images/Whisk_296661e1eecd735af5f4729a6c9cbca6dr.jpeg",
            imageAlt: "Caregiver smiling with senior",
            href: "/articles/in-home-support-recovering-breast-cancer"
        },
        {
            title: "4 Tips to Prevent Injuries While Caring for an Aging Parent",
            imageSrc: "/images/Whisk_357ee580e5147ee96a948b18c1f186b4dr.jpeg",
            imageAlt: "Caregiver assisting senior",
            href: "/articles/prevent-injuries-caring-aging-parent"
        }
    ];

    return (
        <>
            <InnerPageHero
                title="Personal Care"
                description="Most aging adults want to live in the comforts of home for as long as possible, but sometimes mobility or health issues can threaten their plans to age in place safely."
                imageSrc="/images/Whisk_05c25109353fe2d88f1437b47bfffa90dr.jpeg"
                imageAlt="Caregiver and senior in living room"
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
                        
                        {/* Two Column Layout for Intro */}
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 mb-12">
                            <div className="w-full lg:w-[60%]">
                                <p className="mb-6 text-[15.5px]">
                                    Personal home care can give seniors a lifeline by offering personalized and dedicated in-home assistance to avoid the emotional toll of moving to an assisted living facility or nursing home—even if they have a physical disability or chronic health condition.
                                </p>
                                <p className="mb-10 text-[15.5px]">
                                    Our <Link href="/home-care-services" className="underline text-[#3b7ea1] hover:text-[#043b67]">home care providers</Link> help with activities of daily living so seniors can maintain their routines and quality of life at home. Our personalized approach fosters a sense of dignity and independence, allowing them to age comfortably in the place they call home.
                                </p>

                                <h2 className="text-[26px] md:text-[32px] font-bold text-[#043b67] mb-6 font-sans tracking-tight">
                                    What is Personal Care?
                                </h2>
                                <p className="mb-6 text-[15.5px]">
                                    Personal care is a non-medical <Link href="/home-care-services" className="underline text-[#3b7ea1] hover:text-[#043b67]">home care service</Link> that assists older adults with their day-to-day activities to promote dignity and well-being while helping them maintain their preferred autonomy, lifestyle, and routines.
                                </p>
                                <p className="mb-0 text-[15.5px]">
                                    This type of care offers compassionate support and maintains safety and comfort. It helps seniors receive the respectful assistance they deserve.
                                </p>
                            </div>
                            <div className="w-full lg:w-[40%]">
                                <div className="relative h-[480px] w-full rounded-[4px] overflow-hidden">
                                    <Image
                                        src="/images/Whisk_357ee580e5147ee96a948b18c1f186b4dr.jpeg"
                                        alt="Caregiver helping senior in kitchen"
                                        fill
                                        className="object-cover object-center"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* White Box List */}
                        <div className="border border-[#e5e7eb] rounded-[4px] p-8 md:p-10 mb-16 relative">
                            <p className="mb-6 text-[15.5px] text-[#3b7ea1]">
                                Personal care, sometimes referred to as “private duty” care, provides specialized assistance with activities of daily living such as:
                            </p>
                            
                            <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-6">
                                <ul className="flex-1 space-y-4">
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333]">Bathing, personal hygiene, and grooming</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333]">Dressing</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333]">Errands</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333]">Feeding</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333]">Light Housekeeping</span>
                                    </li>
                                </ul>
                                <ul className="flex-1 space-y-4">
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333]">Meal preparation</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333]">Medication Reminders</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333]">Mobility and transfer support</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333]">Toileting</span>
                                    </li>
                                </ul>
                            </div>

                            <p className="text-[15.5px]">
                                Personal care is helpful for individuals who need thorough physical help due to chronic illness or deficits after a stroke or <Link href="/dementia-care" className="underline text-[#3b7ea1] hover:text-[#043b67]">dementia</Link>.
                            </p>
                        </div>

                        {/* CTA Banner */}
                        <div className="bg-[#663b5e] rounded-[4px] overflow-hidden relative mb-16 shadow-lg">
                            {/* Wave Pattern Background */}
                            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100%\' height=\'100%\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3Cpattern id=\'waves\' x=\'0\' y=\'0\' width=\'100\' height=\'40\' patternUnits=\'userSpaceOnUse\'%3E%3Cpath d=\'M0 20 Q 25 0, 50 20 T 100 20\' fill=\'none\' stroke=\'%23ffffff\' stroke-width=\'2\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'100%\' height=\'100%\' fill=\'url(%23waves)\' /%3E%3C/svg%3E")' }}></div>
                            
                            <div className="relative z-10 flex flex-col lg:flex-row items-center p-8 md:p-12 gap-8">
                                <div className="flex-1">
                                    <h2 className="text-[28px] md:text-[32px] font-bold text-white mb-6 font-sans tracking-tight">
                                        Get Started with<br />Personal Care Services
                                    </h2>
                                    <p className="text-white text-[15.5px] mb-5 leading-relaxed">
                                        If your loved one struggles with daily self-care activities or if you're worried about their physical safety at home, consider reaching out to a reputable home care company, like MidAid.
                                    </p>
                                    <p className="text-white text-[15.5px] mb-5 leading-relaxed">
                                        Our professional caregivers will provide tailored support in familiar surroundings to help your loved one thrive by maintaining their independence and sense of belonging. Our devoted caregivers can also offer <Link href="/elderly-companion-care" className="underline text-[#b5d6d8] hover:text-white">companion care</Link> to alleviate <Link href="/articles" className="underline text-[#b5d6d8] hover:text-white">senior isolation</Link> by providing companionship and emotional support through meaningful connections.
                                    </p>
                                    <p className="text-white text-[15.5px] mb-8 leading-relaxed">
                                        We make it easy to find the perfect <Link href="/careers" className="underline text-[#b5d6d8] hover:text-white">caregiver</Link> for your loved one. At your free consultation, MidAid will learn about your family's needs and lay the foundation for personal care services. We'll use the information to build a custom care plan and <Link href="/about-us" className="underline text-[#b5d6d8] hover:text-white">select a caregiver</Link> for your loved one.
                                    </p>
                                    <Link href="/locations" className="inline-flex items-center justify-center bg-[#d8981e] text-[#043b67] font-bold text-[15px] px-8 py-3.5 rounded-[4px] hover:bg-[#c78b1b] transition-colors">
                                        View Our Office Locations
                                    </Link>
                                </div>
                                <div className="w-full lg:w-[320px] shrink-0 flex justify-center lg:justify-end">
                                    <div className="w-[280px] h-[280px] rounded-full overflow-hidden border-4 border-white/20 relative shadow-xl">
                                        <Image
                                            src="/images/Whisk_296661e1eecd735af5f4729a6c9cbca6dr.jpeg"
                                            alt="Caregiver helping senior in garden"
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
