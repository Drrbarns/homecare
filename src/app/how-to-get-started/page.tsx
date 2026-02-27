import Image from "next/image";
import Link from "next/link";
import { InnerPageHero } from "@/components/shared/InnerPageHero";
import { HomeCareInfoSidebar } from "@/components/layout/sidebar/HomeCareInfoSidebar";
import { FloatingGetStarted } from "@/components/layout/FloatingGetStarted";
import { Newsletter } from "@/components/marketing/Newsletter";

export const metadata = {
    title: "How to Get Started With Home Care",
    description: "Visiting Angels makes it easy to support your aging loved one's well-being at home with compassionate care and expert guidance.",
};

export default function HowToGetStartedPage() {
    return (
        <>
            <InnerPageHero
                title="How to Get Started With Home Care"
                description="Visiting Angels makes it easy to support your aging loved one's well-being at home with compassionate care and expert guidance."
                imageSrc="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=1200&auto=format&fit=crop"
                imageAlt="Caregiver walking with senior outdoors"
            />

            <div className="container mx-auto px-4 lg:px-6 xl:px-8 max-w-[1440px] py-16 lg:py-24">
                <div className="flex flex-col lg:flex-row gap-12 xl:gap-16">
                    {/* Left Sidebar */}
                    <div className="w-full lg:w-[320px] shrink-0">
                        <HomeCareInfoSidebar />
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 w-full text-[15px] md:text-[16px] text-[#333333] leading-[1.7] font-sans">

                        {/* Easy, Personalized Onboarding */}
                        <h2 className="text-[28px] md:text-[34px] font-bold text-[#043b67] mb-8 font-sans tracking-tight">
                            Easy, Personalized Onboarding
                        </h2>

                        <p className="mb-6 text-[15.5px]">
                            Your first step to starting professional home care services with Visiting Angels is a free, in-person
                            consultation with a care coordinator (also known as a &quot;care manager&quot;). The meeting is an excellent
                            opportunity for you and your family to ask questions and receive personalized guidance. The
                            consultation also helps your care coordinator become acquainted with you and your loved one.
                        </p>

                        {/* Text + Staggered Images Layout */}
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 mb-12">
                            <div className="w-full lg:w-[55%]">
                                <p className="mb-6 text-[15.5px]">
                                    During the visit, your coordinator will review the
                                    required care, schedule, specific requests, and
                                    any other information. They&apos;ll also assess the
                                    home environment to ensure safety and discuss
                                    how to best match you with caregivers who fit
                                    your personality and care preferences.
                                </p>

                                <p className="mb-0 text-[15.5px] font-bold text-[#043b67]" style={{ fontSize: "17px" }}>
                                    The following home care aspects are
                                    commonly discussed:
                                </p>
                            </div>
                            <div className="w-full lg:w-[45%]">
                                <div className="relative h-[340px] md:h-[380px]">
                                    {/* First image - positioned left/top */}
                                    <div className="absolute left-0 top-0 w-[55%] h-[280px] rounded-[4px] overflow-hidden shadow-lg z-10">
                                        <Image
                                            src="https://images.unsplash.com/photo-1581579205466-e4304e287010?q=80&w=600&auto=format&fit=crop"
                                            alt="Senior using walker with caregiver assistance"
                                            fill
                                            className="object-cover object-center"
                                        />
                                    </div>
                                    {/* Second image - positioned right/bottom, overlapping */}
                                    <div className="absolute right-0 bottom-0 w-[55%] h-[280px] rounded-[4px] overflow-hidden shadow-lg z-20">
                                        <Image
                                            src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=600&auto=format&fit=crop"
                                            alt="Caregiver assisting senior at home"
                                            fill
                                            className="object-cover object-center"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Care Aspect Cards - 2 columns */}
                        <div className="grid md:grid-cols-2 gap-6 mb-16">
                            {/* Physical Needs */}
                            <div className="border border-gray-200 rounded-[6px] p-7 hover:shadow-md transition-shadow">
                                <div className="flex justify-end mb-4">
                                    <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="32" cy="32" r="30" stroke="#3b7ea1" strokeWidth="2" fill="none" />
                                        <path d="M32 18c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm-6 12c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h2v6c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-6h2c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2H26z" fill="#3b7ea1"/>
                                    </svg>
                                </div>
                                <h3 className="text-[18px] font-bold text-[#043b67] mb-3 font-sans">Physical Needs</h3>
                                <p className="text-[14.5px] text-[#333333] leading-[1.7]">
                                    A determination of specific care assistance will be made by your coordinator and you.{" "}
                                    <Link href="/personal-care" className="underline text-[#3b7ea1] hover:text-[#043b67]">Personal care</Link> requests
                                    may include bathing and grooming, dressing, meals and diet, mobility, incontinence, etc.
                                </p>
                            </div>

                            {/* Emotional Needs */}
                            <div className="border border-gray-200 rounded-[6px] p-7 hover:shadow-md transition-shadow">
                                <div className="flex justify-end mb-4">
                                    <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="32" cy="32" r="30" stroke="#3b7ea1" strokeWidth="2" fill="none" />
                                        <circle cx="32" cy="28" r="10" stroke="#3b7ea1" strokeWidth="2" fill="none"/>
                                        <circle cx="28" cy="26" r="2" fill="#3b7ea1"/>
                                        <circle cx="36" cy="26" r="2" fill="#3b7ea1"/>
                                        <path d="M27 31c0 0 2.5 4 5 4s5-4 5-4" stroke="#3b7ea1" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                                        <path d="M22 18c-2-6 2-12 10-14" stroke="#3b7ea1" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                                        <path d="M42 18c2-6-2-12-10-14" stroke="#3b7ea1" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                                    </svg>
                                </div>
                                <h3 className="text-[18px] font-bold text-[#043b67] mb-3 font-sans">Emotional Needs</h3>
                                <p className="text-[14.5px] text-[#333333] leading-[1.7]">
                                    Your loved one can receive elderly{" "}
                                    <Link href="/elderly-companion-care" className="underline text-[#3b7ea1] hover:text-[#043b67]">companion care</Link>{" "}
                                    that includes social interaction, activities, hobbies, conversation, appointments, and camaraderie.
                                </p>
                            </div>

                            {/* Homemaking Assistance */}
                            <div className="border border-gray-200 rounded-[6px] p-7 hover:shadow-md transition-shadow">
                                <div className="flex justify-end mb-4">
                                    <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="32" cy="32" r="30" stroke="#3b7ea1" strokeWidth="2" fill="none" />
                                        <path d="M32 16L18 28h4v14h8v-8h4v8h8V28h4L32 16z" fill="#3b7ea1"/>
                                    </svg>
                                </div>
                                <h3 className="text-[18px] font-bold text-[#043b67] mb-3 font-sans">Homemaking Assistance</h3>
                                <p className="text-[14.5px] text-[#333333] leading-[1.7]">
                                    If your loved one is unable to tend to housework or needs a little assistance, we&apos;ll develop a program that
                                    includes meal preparation, groceries, linens, and light housekeeping.
                                </p>
                            </div>

                            {/* Schedules */}
                            <div className="border border-gray-200 rounded-[6px] p-7 hover:shadow-md transition-shadow">
                                <div className="flex justify-end mb-4">
                                    <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="32" cy="32" r="30" stroke="#3b7ea1" strokeWidth="2" fill="none" />
                                        <circle cx="32" cy="32" r="14" stroke="#3b7ea1" strokeWidth="2" fill="none"/>
                                        <path d="M32 22v10l7 5" stroke="#3b7ea1" strokeWidth="2" strokeLinecap="round" fill="none"/>
                                    </svg>
                                </div>
                                <h3 className="text-[18px] font-bold text-[#043b67] mb-3 font-sans">Schedules</h3>
                                <p className="text-[14.5px] text-[#333333] leading-[1.7]">
                                    We&apos;ll tailor a specialized program that works with your loved one&apos;s daily activities, including sleep,
                                    eating, and medication reminders.
                                </p>
                            </div>

                            {/* Logistics */}
                            <div className="border border-gray-200 rounded-[6px] p-7 hover:shadow-md transition-shadow">
                                <div className="flex justify-end mb-4">
                                    <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="32" cy="32" r="30" stroke="#3b7ea1" strokeWidth="2" fill="none" />
                                        <rect x="20" y="16" width="24" height="32" rx="2" stroke="#3b7ea1" strokeWidth="2" fill="none"/>
                                        <path d="M26 24h12M26 30h12M26 36h8" stroke="#3b7ea1" strokeWidth="2" strokeLinecap="round"/>
                                    </svg>
                                </div>
                                <h3 className="text-[18px] font-bold text-[#043b67] mb-3 font-sans">Logistics</h3>
                                <p className="text-[14.5px] text-[#333333] leading-[1.7]">
                                    We&apos;ll cover everything you need to know about the home care process, such as access to the home,
                                    documentation, communication with your caregiver(s), and how to contact your local office.
                                </p>
                            </div>
                        </div>

                        {/* CTA Banner - Customized Care Planning */}
                        <div className="bg-[#043b67] rounded-[4px] overflow-hidden relative mb-16 shadow-lg">
                            <div className="relative z-10 flex flex-col lg:flex-row items-center p-8 md:p-12 gap-8">
                                <div className="flex-1">
                                    <h2 className="text-[28px] md:text-[32px] font-bold text-white mb-6 font-sans tracking-tight leading-tight">
                                        Customized Care<br />Planning
                                    </h2>
                                    <p className="text-white text-[15.5px] mb-5 leading-relaxed">
                                        Are you ready to begin home care services with Visiting Angels?
                                    </p>
                                    <p className="text-white text-[15.5px] mb-8 leading-relaxed">
                                        Contact your nearest home care location or call 800-365-4189 today to schedule
                                        your free home care consultation.
                                    </p>
                                    <Link
                                        href="/office-locator"
                                        className="inline-flex items-center justify-center bg-white text-[#043b67] font-bold text-[15px] px-8 py-3.5 rounded-[4px] hover:bg-gray-100 transition-colors border-2 border-white"
                                    >
                                        View Our Office Locations
                                    </Link>
                                </div>
                                <div className="w-full lg:w-[320px] shrink-0 flex justify-center lg:justify-end">
                                    <div className="w-[260px] h-[260px] md:w-[280px] md:h-[280px] rounded-full overflow-hidden border-4 border-white/20 relative shadow-xl">
                                        <Image
                                            src="https://images.unsplash.com/photo-1581579205466-e4304e287010?q=80&w=600&auto=format&fit=crop"
                                            alt="Two seniors walking together outdoors"
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

            <Newsletter />
            <FloatingGetStarted />
        </>
    );
}
