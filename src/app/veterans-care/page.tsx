import Image from "next/image";
import Link from "next/link";
import { InnerPageHero } from "@/components/shared/InnerPageHero";
import { InnerPageSidebar } from "@/components/layout/sidebar/InnerPageSidebar";
import { FloatingGetStarted } from "@/components/layout/FloatingGetStarted";
import { Newsletter } from "@/components/marketing/Newsletter";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { RelatedArticles } from "@/components/shared/RelatedArticles";

export const metadata = {
    title: "Veterans In-Home Care",
    description: "Honoring military veterans with compassionate assistance at home, tailored to each senior's needs.",
};

export default function VeteransCarePage() {
    const faqs = [
        {
            question: "Do You Provide Medical Home Care Services?",
            answer: "We provide essential non-medical home care services, such as personal care, companionship, and mobility assistance, to help veterans age in place safely. We can work alongside medical home health agencies if your loved one requires medical care."
        },
        {
            question: "How Do I Know if My Loved One Qualifies for In-Home Care?",
            answer: "If your loved one is struggling with daily activities, experiencing mobility issues, or showing signs of isolation, they can benefit from in-home care. We offer a free consultation to assess their needs and discuss care options."
        },
        {
            question: "What Makes the Honoring Our Veterans Program Different?",
            answer: "Our program is specifically designed to recognize the unique needs and experiences of veterans. We focus on respectful communication, honoring their service, and providing compassionate support that preserves their dignity and independence."
        },
        {
            question: "How Do You Match a Caregiver to a Veteran?",
            answer: "We use our 'Select Your Caregiver' program to find the right match. We consider your loved one's specific care needs, personality, and preferences to introduce a caregiver who will be a compatible and trusted companion."
        },
        {
            question: "What If My Loved One Served in a Lesser-Known Conflict or Branch?",
            answer: "We honor the service of all veterans, regardless of their branch, conflict, or peacetime service. Every veteran deserves compassionate care and respect for their dedication to our country."
        },
        {
            question: "What If My Loved One Doesn't Talk About Their Service?",
            answer: "Our caregivers are trained to respect each veteran's boundaries. If they prefer not to discuss their service, we focus on providing compassionate care and engaging them in other meaningful conversations and activities they enjoy."
        }
    ];

    const relatedArticles = [
        {
            title: "Honoring Our Heroes: In-Home Care for Veterans",
            imageSrc: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=600&auto=format&fit=crop",
            imageAlt: "Caregiver helping veteran with prosthetic leg",
            href: "/articles/honoring-our-heroes-in-home-care-for-veterans"
        },
        {
            title: "Veterans Choice Program Can Be a Life Saver",
            imageSrc: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=600&auto=format&fit=crop",
            imageAlt: "Caregiver with older veteran outdoors",
            href: "/articles/veterans-choice-program-can-be-a-life-saver"
        },
        {
            title: "Do Senior Veteran Loved Ones Need Help Sooner?",
            imageSrc: "https://images.unsplash.com/photo-1581579205466-e4304e287010?q=80&w=600&auto=format&fit=crop",
            imageAlt: "Older veteran holding an American flag",
            href: "/articles/do-senior-veteran-loved-ones-need-help-sooner"
        }
    ];

    return (
        <>
            <InnerPageHero
                title="Veterans In-Home Care"
                description="Honoring military veterans with compassionate assistance at home, tailored to each senior's needs."
                imageSrc="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=1200&auto=format&fit=crop"
                imageAlt="Caregiver and senior veteran sitting at table"
                showPlayButton={false}
            />

            <div className="container mx-auto px-5 sm:px-6 lg:px-6 xl:px-8 max-w-[1440px] py-10 sm:py-16 lg:py-24">
                <div className="flex flex-col lg:flex-row gap-12 xl:gap-16">
                    {/* Left Sidebar */}
                    <div className="w-full lg:w-[320px] shrink-0">
                        <InnerPageSidebar />
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 w-full text-[15px] md:text-[16px] text-[#333333] leading-[1.7] font-sans">
                        
                        <h2 className="text-[26px] md:text-[32px] font-bold text-[#043b67] mb-6 font-sans tracking-tight">
                            Respectful Home Care for Senior Veterans
                        </h2>
                        <p className="mb-6 text-[15.5px]">
                            At Visiting Angels, we believe every veteran deserves care that recognizes not only their service to our country but also their humanity. Our <Link href="/careers" className="underline text-[#3b7ea1] hover:text-[#043b67]">caregivers</Link> provide compassionate, in-home support that honors each veteran's life story, values, and independence—helping them live with dignity and comfort in the place they call home.
                        </p>
                        <p className="mb-6 text-[15.5px]">
                            Veterans have given so much in service to our nation, and as they age, they deserve care that reflects the depth and individuality of their experiences. Every veteran's story is unique—their years of service, their sacrifices, and the values they carry forward.
                        </p>
                        <p className="mb-12 text-[15.5px]">
                            We approach their <Link href="/home-care-services" className="underline text-[#3b7ea1] hover:text-[#043b67]">care at home</Link> with respect, understanding, and gratitude, creating meaningful connections that enrich daily life and foster trust.
                        </p>

                        <h2 className="text-[26px] md:text-[32px] font-bold text-[#043b67] mb-6 font-sans tracking-tight">
                            Customized Home Care Plans for Veterans
                        </h2>
                        <p className="mb-8 text-[15.5px]">
                            With support from Visiting Angels, your loved one can maintain the structure and independence they need to age in place at home. We will partner with you to create a care plan that respects their service history and personal dignity.
                        </p>

                        {/* White Box List */}
                        <div className="border border-[#e5e7eb] rounded-[4px] p-8 md:p-10 mb-10 relative">
                            <h3 className="text-[20px] font-bold text-[#3b7ea1] mb-6">Personal Care Services Include:</h3>
                            
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                    <span className="text-[15.5px] text-[#333333]"><Link href="/personal-care" className="underline text-[#3b7ea1] hover:text-[#043b67]">Assistance with daily living activities</Link>, such as bathing, dressing, and grooming</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                    <span className="text-[15.5px] text-[#333333]"><Link href="/home-care-services" className="underline text-[#3b7ea1] hover:text-[#043b67]">Medication reminders</Link></span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                    <span className="text-[15.5px] text-[#333333]">Support for <Link href="/home-care-services" className="underline text-[#3b7ea1] hover:text-[#043b67]">mobility, transfers, and safe movement</Link> around the home</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                    <span className="text-[15.5px] text-[#333333]"><Link href="/home-care-services" className="underline text-[#3b7ea1] hover:text-[#043b67]">Transportation</Link> to appointments, VA visits, and community events</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                    <span className="text-[15.5px] text-[#333333]"><Link href="/elderly-companion-care" className="underline text-[#3b7ea1] hover:text-[#043b67]">Companion care</Link> with veteran-sensitive communication</span>
                                </li>
                            </ul>
                        </div>

                        <p className="mb-12 text-[15.5px]">
                            We also offer related services such as <Link href="/respite-care" className="underline text-[#3b7ea1] hover:text-[#043b67]">respite care</Link> for family members and <Link href="/transition-home-care" className="underline text-[#3b7ea1] hover:text-[#043b67]">transitional care</Link> after hospital stays. As your loved one's needs changes, your Visiting Angels team can provide specialized personal care services, such as <Link href="/alzheimers-care" className="underline text-[#3b7ea1] hover:text-[#043b67]">Alzheimer's</Link> and <Link href="/dementia-care" className="underline text-[#3b7ea1] hover:text-[#043b67]">dementia care</Link>, non-medical <Link href="/palliative-care" className="underline text-[#3b7ea1] hover:text-[#043b67]">palliative care</Link>, and non-medical <Link href="/end-of-life-care" className="underline text-[#3b7ea1] hover:text-[#043b67]">end-of-life care</Link>.
                        </p>

                        <h2 className="text-[26px] md:text-[32px] font-bold text-[#043b67] mb-6 font-sans tracking-tight">
                            Using Veterans Benefits to Pay for Home Care
                        </h2>
                        <p className="mb-6 text-[15.5px]">
                            Veterans may be eligible for <Link href="/articles" className="underline text-[#3b7ea1] hover:text-[#043b67]">benefits, programs, and community resources</Link> that can help cover the cost of home care:
                        </p>
                        <ul className="space-y-4 mb-6 pl-2">
                            <li className="flex items-start">
                                <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-[8px] shrink-0"></div>
                                <span className="text-[15.5px]"><strong>VA Aid and Attendance Benefit:</strong> Helps cover in-home services for veterans who need assistance with daily activities.</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-[8px] shrink-0"></div>
                                <span className="text-[15.5px]"><strong>Veterans Directed Care Program:</strong> Offers flexibility in choosing care providers.</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-[8px] shrink-0"></div>
                                <span className="text-[15.5px]"><strong><Link href="/articles" className="underline text-[#3b7ea1] hover:text-[#043b67]">Veterans Community Care Network</Link>:</strong> Enables eligible veterans to access healthcare services from a network of approved community providers, ensuring timely, high-quality care when VA facilities are not readily available or practical to use.</span>
                            </li>
                        </ul>
                        <p className="mb-16 text-[15.5px]">
                            A Visiting Angels <Link href="/home-care-services" className="underline text-[#3b7ea1] hover:text-[#043b67]">home care coordinator</Link> can help connect you with the right contacts and documentation to explore benefit eligibility and payment options. If you're already working with the VA or another agency, our team coordinates with those services to complement existing benefits and care plans.
                        </p>

                        {/* Custom Get Started Section */}
                        <div className="bg-[#043b67] rounded-[4px] overflow-hidden p-8 md:p-12 mb-16 mx-[-16px] lg:mx-0">
                            <h2 className="text-[26px] md:text-[32px] font-bold text-white mb-6 font-sans tracking-tight text-center">
                                Get Started with In-Home Care
                            </h2>
                            <p className="text-white text-[15.5px] mb-10 text-center max-w-[800px] mx-auto">
                                Starting in-home care for your veteran is easy with Visiting Angels. Follow these straightforward steps to initiate services in your loved one's home.
                            </p>
                            
                            <div className="grid md:grid-cols-3 gap-6 relative">
                                {/* Step 1 */}
                                <div className="bg-white p-8 rounded-[4px] relative text-left flex flex-col h-full shadow-lg">
                                    <div className="flex justify-between items-start mb-6">
                                        {/* Icon */}
                                        <div className="text-[#8c2d38]">
                                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                                <line x1="3" y1="10" x2="21" y2="10"></line>
                                                <circle cx="16" cy="16" r="4"></circle>
                                                <polyline points="16 14 16 16 17.5 16"></polyline>
                                            </svg>
                                        </div>
                                        {/* Number */}
                                        <div className="text-[44px] font-bold text-[#8fb4c9] leading-none font-sans tracking-tight opacity-80">
                                            01
                                        </div>
                                    </div>
                                    <h3 className="text-[17px] font-bold text-[#043b67] mb-4 leading-snug">Step 1: Schedule a Free Home Care Consultation</h3>
                                    <p className="text-[#333333] leading-relaxed text-[13.5px]">
                                        During a <Link href="/contact-us" className="underline text-[#3b7ea1] hover:text-[#043b67]">free home care consultation</Link>, a Visiting Angels coordinator will meet with your family to answer questions and learn about your veteran's preferences, routines, and care requirements.
                                    </p>
                                    {/* Arrow to Next Card */}
                                    <div className="hidden md:flex absolute top-[55%] -right-3 translate-x-1/2 -translate-y-1/2 w-11 h-11 bg-[#eaf6f9] text-[#043b67] border-[#043b67] z-10 rounded-full border-[3px] items-center justify-center shadow-sm">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14M12 5l7 7-7 7"/>
                                        </svg>
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div className="bg-white p-8 rounded-[4px] relative text-left flex flex-col h-full shadow-lg">
                                    <div className="flex justify-between items-start mb-6">
                                        {/* Icon */}
                                        <div className="text-[#8c2d38]">
                                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                                                <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                                                <line x1="9" y1="10" x2="9.01" y2="10"></line>
                                                <line x1="13" y1="10" x2="15" y2="10"></line>
                                                <line x1="9" y1="14" x2="9.01" y2="14"></line>
                                                <line x1="13" y1="14" x2="15" y2="14"></line>
                                                <line x1="9" y1="18" x2="9.01" y2="18"></line>
                                                <line x1="13" y1="18" x2="15" y2="18"></line>
                                            </svg>
                                        </div>
                                        {/* Number */}
                                        <div className="text-[44px] font-bold text-[#8fb4c9] leading-none font-sans tracking-tight opacity-80">
                                            02
                                        </div>
                                    </div>
                                    <h3 className="text-[17px] font-bold text-[#043b67] mb-4 leading-snug">Step 2: Create A Customized Care Plan</h3>
                                    <p className="text-[#333333] leading-relaxed text-[13.5px]">
                                        Your coordinator will arrange a <Link href="/home-care-services" className="underline text-[#3b7ea1] hover:text-[#043b67]">home care assessment</Link>, which includes a walk-through of your loved one's home to identify potential safety issues, such as fall hazards. Together, you'll develop a detailed plan and schedule that works for your family.
                                    </p>
                                    {/* Arrow to Next Card */}
                                    <div className="hidden md:flex absolute top-[55%] -right-3 translate-x-1/2 -translate-y-1/2 w-11 h-11 bg-[#eaf6f9] text-[#043b67] border-[#043b67] z-10 rounded-full border-[3px] items-center justify-center shadow-sm">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14M12 5l7 7-7 7"/>
                                        </svg>
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div className="bg-white p-8 rounded-[4px] relative text-left flex flex-col h-full shadow-lg">
                                    <div className="flex justify-between items-start mb-6">
                                        {/* Icon */}
                                        <div className="text-[#8c2d38]">
                                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                                <circle cx="9" cy="12" r="2"></circle>
                                                <circle cx="15" cy="12" r="2"></circle>
                                                <path d="M7 16c1-1 2-1.5 3-1.5s2 .5 3 1.5"></path>
                                                <path d="M11 16c1-1 2-1.5 3-1.5s2 .5 3 1.5"></path>
                                            </svg>
                                        </div>
                                        {/* Number */}
                                        <div className="text-[44px] font-bold text-[#8fb4c9] leading-none font-sans tracking-tight opacity-80">
                                            03
                                        </div>
                                    </div>
                                    <h3 className="text-[17px] font-bold text-[#043b67] mb-4 leading-snug">Step 3: Meet Your Caregiver</h3>
                                    <p className="text-[#333333] leading-relaxed text-[13.5px]">
                                        We thoroughly screen and <Link href="/careers" className="underline text-[#3b7ea1] hover:text-[#043b67]">select the best professional caregivers</Link> for your senior. You'll feel confident knowing your loved one is safe and comfortable at home with a Visiting Angels' caregiver by their side.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Serving Those Who Served Banner */}
                        <div className="bg-white border border-[#e5e7eb] rounded-[4px] p-8 md:p-12 mb-16 relative shadow-[0_2px_15px_rgba(0,0,0,0.03)] flex flex-col md:flex-row items-center">
                            <div className="w-full md:w-[65%] pr-0 md:pr-10 mb-8 md:mb-0">
                                <h2 className="text-[26px] md:text-[32px] font-bold text-[#043b67] mb-6 font-sans tracking-tight">
                                    Serving Those Who Served
                                </h2>
                                <p className="mb-8 text-[15.5px]">
                                    Visiting Angels is proud to support our nation's veterans with the dignity and compassionate care they deserve. Through personalized in-home services and close collaboration with families and VA programs, we ensure every veteran receives the respect and honor they've earned through their years of service.
                                </p>
                                <Link href="/brochures" className="inline-flex items-center justify-center bg-[#d8981e] text-[#043b67] font-bold text-[15px] px-8 py-3.5 rounded-[4px] hover:bg-[#c78b1b] transition-colors">
                                    View Flipbook
                                </Link>
                            </div>
                            <div className="w-full md:w-[35%] flex justify-center md:justify-end relative h-[300px]">
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[280px] h-[360px] shadow-2xl rounded-[4px] overflow-hidden rotate-2 bg-white p-2">
                                    <div className="relative w-full h-full">
                                        <Image
                                            src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=600&auto=format&fit=crop"
                                            alt="Visiting Angels Veterans Flipbook Cover"
                                            fill
                                            className="object-cover object-center"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 bg-[#043b67] p-4 text-center">
                                            <div className="font-bold text-white text-[13px] mb-1 italic">Visiting Angels</div>
                                            <div className="text-white text-[14px] leading-tight font-semibold">Veterans Pursuing Well Being and Prioritizing Their Health</div>
                                        </div>
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
