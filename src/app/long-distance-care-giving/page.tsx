import Image from "next/image";
import Link from "next/link";
import { InnerPageHero } from "@/components/shared/InnerPageHero";
import { HomeCareInfoSidebar } from "@/components/layout/sidebar/HomeCareInfoSidebar";
import { FloatingGetStarted } from "@/components/layout/FloatingGetStarted";
import { Newsletter } from "@/components/marketing/Newsletter";
import { FAQAccordion } from "@/components/shared/FAQAccordion";

export const metadata = {
    title: "Long Distance Care Giving | Visiting Angels",
    description: "Professional home care from Visiting Angels can help you bridge the distance gap - whether your loved one lives 90 minutes or a five-hour plane ride away.",
};

export default function LongDistanceCareGivingPage() {
    const faqItems = [
        {
            question: "How Do I Know When It's Time For In-Home Senior Care?",
            answer: "There are several signs that it might be time for in-home care. These include noticeable weight loss, poor personal hygiene, frequent falls, unpaid bills, a cluttered or dirty home, confusion, or a loss of interest in hobbies and activities."
        },
        {
            question: "What Kind of Assistance is Included With Long-Distance Senior Care?",
            answer: "Long-distance senior care can include a wide range of services tailored to your loved one's needs. This often involves personal care (bathing, dressing), companion care, meal preparation, light housekeeping, medication reminders, and transportation to appointments."
        },
        {
            question: "What Happens During the Initial Consultation?",
            answer: "During the initial consultation, a care coordinator will assess your loved one's needs, discuss their daily routine, review any medical conditions, and address your family's concerns. This is also an opportunity to discuss scheduling, costs, and caregiver matching."
        },
        {
            question: "What if My Loved One is Reluctant About Hiring Someone?",
            answer: "It's common for seniors to be hesitant about receiving care. We recommend introducing the idea gradually, focusing on how a caregiver can help them maintain their independence, and involving them in the caregiver selection process."
        },
        {
            question: "How Can I Make Sure My Loved One is Comfortable With Their Caregiver?",
            answer: "We use a rigorous matching process to pair caregivers with clients based on skills, personality, and interests. We also encourage you and your loved one to meet the caregiver beforehand through our Select Your Caregiver® program to ensure a good fit."
        }
    ];

    return (
        <>
            <InnerPageHero
                title="Long Distance Care Giving"
                description="Professional home care from Visiting Angels can help you bridge the distance gap - whether your loved one lives 90 minutes or a five-hour plane ride away."
                imageSrc="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1200&auto=format&fit=crop"
                imageAlt="Caregiver with two seniors at a table"
            />

            <div className="container mx-auto px-4 lg:px-6 xl:px-8 max-w-[1440px] py-16 lg:py-24">
                <div className="flex flex-col lg:flex-row gap-12 xl:gap-16">
                    {/* Left Sidebar */}
                    <div className="w-full lg:w-[320px] shrink-0">
                        <HomeCareInfoSidebar />
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 w-full text-[15px] md:text-[16px] text-[#333333] leading-[1.7] font-sans">
                        
                        {/* Intro Section - Image Left, Text Right */}
                        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 mb-16">
                            <div className="w-full md:w-[40%]">
                                <div className="relative h-[400px] md:h-[500px] rounded-[8px] overflow-hidden shadow-sm">
                                    <Image
                                        src="https://images.unsplash.com/photo-1584824486509-11459482c3ea?q=80&w=600&auto=format&fit=crop"
                                        alt="Caregiver standing and smiling"
                                        fill
                                        className="object-cover object-center"
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-[60%] flex flex-col justify-start">
                                <h2 className="text-[26px] md:text-[30px] font-bold text-[#043b67] mb-6 font-sans tracking-tight leading-tight">
                                    National Network of Home Care<br/>Providers
                                </h2>
                                <p className="mb-6 text-[15.5px]">
                                    Caring for an aging loved one from a distance can leave you
                                    feeling powerless when they need in-home support. Although
                                    phone and video calls or text messages can help you stay in
                                    touch, you need more than a smartphone to deliver hands-on
                                    assistance for quality senior care.
                                </p>
                                <p className="mb-6 text-[15.5px]">
                                    Through the power of our national network, we will connect you
                                    with the best home care provider near your loved one. We'll
                                    customize a <Link href="/home-care-services" className="underline text-[#3b7ea1] hover:text-[#043b67]">senior care</Link> plan based on their health needs,
                                    routines, preferences, and home life.
                                </p>
                            </div>
                        </div>

                        {/* Process Section (Dark Blue Background) */}
                        <div className="bg-[#043b67] rounded-[4px] p-8 md:p-12 mb-16 shadow-lg">
                            <h3 className="text-[20px] md:text-[22px] font-bold text-white mb-8 font-sans leading-tight">
                                Here are some ways Visiting Angels' long-distance support can aid your senior<br/>loved one:
                            </h3>

                            <div className="flex flex-col gap-6 relative">
                                {/* Vertical line behind arrows (optional, but looks good) */}
                                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/20 -translate-x-1/2 hidden md:block"></div>

                                {/* Step 1 */}
                                <div className="bg-white rounded-[6px] p-8 relative">
                                    <div className="absolute top-6 right-8 text-[48px] font-bold text-gray-200 leading-none select-none">01</div>
                                    <div className="flex items-start gap-4 mb-3 relative z-10">
                                        <svg className="text-[#9c4958] shrink-0 mt-1" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                            <line x1="16" y1="2" x2="16" y2="6" />
                                            <line x1="8" y1="2" x2="8" y2="6" />
                                            <line x1="3" y1="10" x2="21" y2="10" />
                                            <circle cx="16" cy="16" r="4" />
                                            <polyline points="16 14 16 16 17.5 17.5" />
                                        </svg>
                                        <h4 className="text-[18px] font-bold text-[#043b67] font-sans pt-1">Long-Distance Consultations</h4>
                                    </div>
                                    <p className="text-[14.5px] text-[#333333] leading-[1.7] relative z-10 w-[85%]">
                                        We will coordinate an initial <Link href="/home-care-services" className="underline text-[#3b7ea1] hover:text-[#043b67]">home care consultation</Link> through video, phone, or email to ensure you
                                        and your family are included—even if you live on the other side of the world.
                                    </p>
                                </div>

                                {/* Down Arrow 1 */}
                                <div className="flex justify-center -my-3 relative z-20">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#043b67" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="12" y1="5" x2="12" y2="19" />
                                            <polyline points="19 12 12 19 5 12" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div className="bg-white rounded-[6px] p-8 relative">
                                    <div className="absolute top-6 right-8 text-[48px] font-bold text-gray-200 leading-none select-none">02</div>
                                    <div className="flex items-start gap-4 mb-3 relative z-10">
                                        <svg className="text-[#9c4958] shrink-0 mt-1" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                            <polyline points="14 2 14 8 20 8" />
                                            <line x1="16" y1="13" x2="8" y2="13" />
                                            <line x1="16" y1="17" x2="8" y2="17" />
                                            <polyline points="10 9 9 9 8 9" />
                                        </svg>
                                        <h4 className="text-[18px] font-bold text-[#043b67] font-sans pt-1">Planning and Scheduling</h4>
                                    </div>
                                    <p className="text-[14.5px] text-[#333333] leading-[1.7] relative z-10 w-[85%]">
                                        After getting to know your loved one and gathering your feedback, a coordinator will develop a
                                        detailed <Link href="/home-care-services" className="underline text-[#3b7ea1] hover:text-[#043b67]">home care plan</Link> and schedule.
                                    </p>
                                </div>

                                {/* Down Arrow 2 */}
                                <div className="flex justify-center -my-3 relative z-20">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#043b67" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="12" y1="5" x2="12" y2="19" />
                                            <polyline points="19 12 12 19 5 12" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div className="bg-white rounded-[6px] p-8 relative">
                                    <div className="absolute top-6 right-8 text-[48px] font-bold text-gray-200 leading-none select-none">03</div>
                                    <div className="flex items-start gap-4 mb-3 relative z-10">
                                        <svg className="text-[#9c4958] shrink-0 mt-1" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
                                            <circle cx="9" cy="9" r="2" />
                                            <circle cx="15" cy="9" r="2" />
                                        </svg>
                                        <h4 className="text-[18px] font-bold text-[#043b67] font-sans pt-1">Ongoing Communication</h4>
                                    </div>
                                    <p className="text-[14.5px] text-[#333333] leading-[1.7] relative z-10 w-[85%]">
                                        We will notify you about changes or concerns regarding your senior's physical, emotional, and
                                        cognitive well-being and keep a watchful eye on their living situation.
                                    </p>
                                </div>
                            </div>

                            <p className="text-white text-[15.5px] mt-10 leading-[1.7]">
                                If your loved one splits time between two cities or makes frequent trips to visit family
                                and friends, we can coordinate assistance through another home care office in our
                                national network. We're here for you, wherever your loved one may be.
                            </p>
                        </div>

                        {/* Teal Banner Section */}
                        <div className="bg-[#1e7b75] rounded-[4px] overflow-hidden relative mb-16 shadow-lg">
                            {/* Wave Pattern Background */}
                            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 20 Q 25 0, 50 20 T 100 20\' fill=\'none\' stroke=\'%23ffffff\' stroke-width=\'2\'/%3E%3C/svg%3E")', backgroundSize: '100px 40px' }}></div>
                            
                            <div className="relative z-10 p-8 md:p-12 flex flex-col lg:flex-row gap-8 lg:gap-12">
                                <div className="flex-1">
                                    <h2 className="text-[28px] md:text-[32px] font-bold text-white mb-6 font-sans tracking-tight">
                                        Home Care Support—Near or Far
                                    </h2>
                                    
                                    <p className="text-white text-[15.5px] mb-6 leading-[1.7]">
                                        Long-distance assistance includes emotional
                                        support and standard services such as <Link href="/elderly-companion-care" className="underline hover:text-gray-200">companion
                                        care</Link> and <Link href="/personal-care" className="underline hover:text-gray-200">personal care</Link>.
                                    </p>
                                    
                                    <p className="text-white text-[15.5px] mb-6 leading-[1.7]">
                                        Specialized services, including <Link href="/alzheimers-care" className="underline hover:text-gray-200">Alzheimer's
                                        care</Link> and <Link href="/dementia-care" className="underline hover:text-gray-200">dementia care</Link>, are available for individuals with
                                        memory disorders.
                                    </p>
                                    
                                    <p className="text-white text-[15.5px] mb-6 leading-[1.7]">
                                        Other services, including the Safe and Steady® <Link href="/fall-prevention" className="underline hover:text-gray-200">fall prevention for seniors</Link> program,
                                        can give you peace of mind if your loved one lives alone or is at high risk of accidents
                                        at home.
                                    </p>

                                    <p className="text-white text-[15.5px] mb-8 leading-[1.7]">
                                        With just one phone call or email to us, you'll gain access to our 25 years of senior care
                                        expertise, which has served countless families across the nation.
                                    </p>

                                    <Link
                                        href="/office-locator"
                                        className="inline-flex items-center justify-center bg-[#dca626] text-[#043b67] font-bold text-[15px] px-8 py-3.5 rounded-[4px] hover:opacity-90 transition-opacity"
                                    >
                                        View Our Office Locations
                                    </Link>
                                </div>
                                <div className="w-full lg:w-[380px] shrink-0">
                                    <div className="relative h-[280px] md:h-[340px] rounded-[8px] overflow-hidden shadow-md">
                                        <Image
                                            src="https://images.unsplash.com/photo-1581579205466-e4304e287010?q=80&w=600&auto=format&fit=crop"
                                            alt="Caregiver helping senior walk"
                                            fill
                                            className="object-cover object-center"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* FAQ Section */}
                        <div className="mb-16">
                            <FAQAccordion faqs={faqItems} title="Frequently Asked Questions" />
                        </div>

                    </div>
                </div>
            </div>

            <Newsletter />
            <FloatingGetStarted />
        </>
    );
}
