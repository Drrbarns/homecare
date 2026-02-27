import Image from "next/image";
import Link from "next/link";
import { InnerPageHero } from "@/components/shared/InnerPageHero";
import { InnerPageSidebar } from "@/components/layout/sidebar/InnerPageSidebar";
import { FloatingGetStarted } from "@/components/layout/FloatingGetStarted";
import { Newsletter } from "@/components/marketing/Newsletter";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { RelatedArticles } from "@/components/shared/RelatedArticles";

export const metadata = {
    title: "End of Life Care | Visiting Angels",
    description: "Visiting Angels offers professional, non-medical assistance for individuals during the end-of-life phase.",
};

export default function EndOfLifeCarePage() {
    const faqs = [
        {
            question: "What is End-of-Life Care?",
            answer: "End-of-life care provides physical and emotional support for individuals with a terminal illness during their final stages of life. It focuses on comfort, dignity, and quality of life."
        },
        {
            question: "How is End-of-Life Care Different From Hospice?",
            answer: "While hospice provides medical care and pain management, our end-of-life care offers non-medical support and companionship. We often work alongside hospice providers to ensure comprehensive care."
        },
        {
            question: "Are Caregivers Trained in End-of-Life Care?",
            answer: "Yes, our caregivers receive specialized training to provide compassionate, respectful care during the end-of-life process, focusing on comfort and emotional support for both the client and their family."
        },
        {
            question: "How Will You Support My Family During End-of-Life Care?",
            answer: "We provide emotional support, respite care for family caregivers, and assistance with daily tasks, allowing your family to focus on spending meaningful time together."
        },
        {
            question: "How Should I Start Planning For End-of-Life Care?",
            answer: "Contact your local Visiting Angels office for a free consultation. We will discuss your loved one's needs and create a personalized care plan."
        }
    ];

    const relatedArticles = [
        {
            title: "Providing Comforting Support During Hospice Care",
            imageSrc: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=600&auto=format&fit=crop",
            imageAlt: "Caregiver comforting senior",
            href: "/articles/providing-comforting-support-during-hospice-care"
        },
        {
            title: "Palliative Care and End-of-Life Planning",
            imageSrc: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=600&auto=format&fit=crop",
            imageAlt: "Caregiver and senior talking",
            href: "/articles/palliative-care-and-end-of-life-planning"
        },
        {
            title: "Discussing End-of-Life Care With a Loved One",
            imageSrc: "https://images.unsplash.com/photo-1581579205466-e4304e287010?q=80&w=600&auto=format&fit=crop",
            imageAlt: "Family discussing care",
            href: "/articles/discussing-end-of-life-care-with-a-loved-one"
        }
    ];

    return (
        <>
            <InnerPageHero
                title="End-of-Life Care"
                description="When your loved one is approaching the final stages of life, you'll want to make the most of the precious time left by sharing memories and expressions of love."
                imageSrc="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1200&auto=format&fit=crop"
                imageAlt="Caregiver holding senior's hand in bed"
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
                        <p className="mb-6">
                            Visiting Angels offers professional, non-medical assistance for individuals during the end-of-life phase. Our compassionate <Link href="/home-care-services#palliative" className="underline text-[#3b7ea1] hover:text-[#043b67]">palliative care</Link> services will keep your loved one comfortable and at peace. Although the program does not include hospice care, an expert caregiver will provide comfort and relief assistance that complements hospice services. We'll support you and your family whenever needed.
                        </p>
                        <p className="mb-6">
                            Our dedicated caregivers will also give you peace of mind by managing your day-to-day caregiving responsibilities, letting you focus on what matters most—your loved one.
                        </p>
                        <p className="mb-12">
                            Our professional care providers offer emotional support and companionship, ensuring your loved one never feels alone during this challenging time. With Visiting Angels, you can trust your family will receive the compassionate support and assistance they deserve.
                        </p>

                        {/* Non-Medical End-of-Life Services Block */}
                        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start mb-12">
                            <div className="w-full md:w-[40%]">
                                <div className="relative h-[380px] w-full rounded-[8px] overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=800&auto=format&fit=crop"
                                        alt="Caregiver and senior sitting outside"
                                        fill
                                        className="object-cover object-center"
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-[60%] pt-2">
                                <h2 className="text-[26px] md:text-[32px] font-bold text-[#043b67] mb-6 font-sans tracking-tight">
                                    Non-Medical End-of-Life Services
                                </h2>
                                <p className="mb-5">
                                    Visiting Angels trained <Link href="/careers" className="underline text-[#3b7ea1] hover:text-[#043b67]">caregivers</Link> will follow a personalized plan to create a soothing and relaxing environment for your loved one, ensuring comfort and dignity during the final stages of life. They'll provide emotional support, assist with daily activities, and offer devoted companionship, all tailored to specific needs and requests.
                                </p>
                                <p>
                                    We'll be beside you to offer companionship, emotional support, and spiritual connection. If you need a break or breather, Visiting Angels can provide <Link href="/home-care-services#respite" className="underline text-[#3b7ea1] hover:text-[#043b67]">respite care</Link> – or temporary relief – while your loved one receives support.
                                </p>
                            </div>
                        </div>

                        {/* White Box List */}
                        <div className="bg-white border border-gray-200 rounded-[8px] p-8 md:p-10 shadow-[0_2px_15px_rgba(0,0,0,0.03)] mb-12">
                            <p className="text-[16px] text-[#333333] mb-6 leading-relaxed">
                                We'll work with their care professionals to deliver the following <Link href="/home-care-services#personal" className="underline text-[#3b7ea1] hover:text-[#043b67]">personal home care</Link> services:
                            </p>
                            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                                <ul className="flex-1 space-y-4">
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-2 shrink-0"></div>
                                        <span>Bathing</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-2 shrink-0"></div>
                                        <span>Comfort care</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-2 shrink-0"></div>
                                        <span>Grocery shopping</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-2 shrink-0"></div>
                                        <span>Hospital-to-home transition</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-2 shrink-0"></div>
                                        <span>Laundry</span>
                                    </li>
                                </ul>
                                <ul className="flex-1 space-y-4">
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-2 shrink-0"></div>
                                        <span>Light housekeeping</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-2 shrink-0"></div>
                                        <span>Meal planning</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-2 shrink-0"></div>
                                        <span>Meal preparation</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-2 shrink-0"></div>
                                        <span>Repositioning and transitioning</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-2 shrink-0"></div>
                                        <span>Toileting</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

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
                                        Getting Started with End-of-Life Care
                                    </h3>
                                    <p className="text-[15px] mb-8 leading-relaxed text-white/90">
                                        While we do not provide medical services, our management team communicates with hospice care professionals to provide essential services to support your family through your loved one's final days.
                                    </p>
                                    <p className="text-[15px] mb-8 leading-relaxed text-white/90">
                                        Contact your local Visiting Angels <Link href="/office-locator" className="underline hover:text-white transition-colors">home care office</Link> to discuss end-of-life services.
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
                                            alt="Caregiver walking outside with senior"
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
