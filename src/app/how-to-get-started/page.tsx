import Image from "next/image";
import Link from "next/link";
import { InnerPageHero } from "@/components/shared/InnerPageHero";
import { HomeCareInfoSidebar } from "@/components/layout/sidebar/HomeCareInfoSidebar";
import { FloatingGetStarted } from "@/components/layout/FloatingGetStarted";
import { Newsletter } from "@/components/marketing/Newsletter";

export const metadata = {
    title: "How to Get Started With Home Care",
    description: "MidAid makes it easy to support your aging loved one's well-being at home with compassionate care and expert guidance.",
};

export default function HowToGetStartedPage() {
    return (
        <>
            <InnerPageHero
                title="How to Get Started With Home Care"
                description="MidAid makes it easy to support your aging loved one's well-being at home with compassionate care and expert guidance."
                imageSrc="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=1200&auto=format&fit=crop"
                imageAlt="Caregiver walking with senior outdoors"
            />

            <div className="container mx-auto px-5 sm:px-6 lg:px-6 xl:px-8 max-w-[1440px] py-10 sm:py-16 lg:py-24">
                <div className="flex flex-col lg:flex-row gap-12 xl:gap-16">
                    {/* Left Sidebar */}
                    <div className="w-full lg:w-[320px] shrink-0">
                        <HomeCareInfoSidebar />
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 w-full text-[15px] md:text-[16px] text-[#333333] leading-[1.7] font-sans">

                        {/* Easy, Personalized Onboarding */}
                        <h2 className="text-[28px] md:text-[34px] font-bold text-[#043b67] mb-6 font-sans tracking-tight">
                            Easy, Personalized Onboarding
                        </h2>

                        <p className="mb-10 text-[15.5px]">
                            Your first step to starting professional home care services with MidAid is a free, in-person
                            consultation with a care coordinator (also known as a &quot;care manager&quot;). The meeting is an excellent
                            opportunity for you and your family to ask questions and receive personalized guidance. The
                            consultation also helps your care coordinator become acquainted with you and your loved one.
                        </p>

                        {/* 2-Column Grid Layout for Text, Images, and Cards */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6 mb-16">
                            
                            {/* Left Column */}
                            <div className="flex flex-col gap-6">
                                <div>
                                    <p className="mb-6 text-[15.5px]">
                                        During the visit, your coordinator will review the
                                        required care, schedule, specific requests, and
                                        any other information. They'll also assess the
                                        home environment to ensure safety and discuss
                                        how to best match you with caregivers who fit
                                        your personality and care preferences.
                                    </p>
                                    <p className="mb-0 text-[16px] font-bold text-[#043b67]">
                                        The following home care aspects are<br/>commonly discussed:
                                    </p>
                                </div>

                                {/* Physical Needs Card */}
                                <div className="border border-gray-200 rounded-[8px] p-8 hover:shadow-md transition-shadow bg-white h-full">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-[20px] font-bold text-[#043b67] font-sans">Physical Needs</h3>
                                        {/* Dumbbell Icon */}
                                        <svg className="text-[#9c4958] shrink-0 ml-4" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M14.4 14.4L9.6 9.6" />
                                            <path d="M18.6 21.4l-5-5" />
                                            <path d="M5.4 2.6l5 5" />
                                            <rect x="14" y="14" width="4" height="4" rx="1" transform="rotate(-45 16 16)" />
                                            <rect x="6" y="6" width="4" height="4" rx="1" transform="rotate(-45 8 8)" />
                                            <path d="M19 19l2-2" />
                                            <path d="M3 5l2-2" />
                                        </svg>
                                    </div>
                                    <p className="text-[14.5px] text-[#333333] leading-[1.7]">
                                        A determination of specific care assistance will be made by your coordinator and you.{" "}
                                        <Link href="/personal-care" className="underline text-[#3b7ea1] hover:text-[#043b67]">Personal care</Link> requests
                                        may include bathing and grooming, dressing, meals and diet, mobility, incontinence, etc.
                                    </p>
                                </div>

                                {/* Emotional Needs */}
                                <div className="border border-gray-200 rounded-[8px] p-8 hover:shadow-md transition-shadow bg-white h-full">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-[20px] font-bold text-[#043b67] font-sans">Emotional Needs</h3>
                                        {/* Faces Icon */}
                                        <svg className="text-[#9c4958] shrink-0 ml-4" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="9" cy="9" r="7" />
                                            <path d="M6 8h.01" />
                                            <path d="M12 8h.01" />
                                            <path d="M6 11a3 3 0 0 0 6 0" />
                                            <circle cx="15" cy="15" r="7" />
                                            <path d="M12 14h.01" />
                                            <path d="M18 14h.01" />
                                            <path d="M12 18a3 3 0 0 1 6 0" />
                                        </svg>
                                    </div>
                                    <p className="text-[14.5px] text-[#333333] leading-[1.7]">
                                        Your loved one can receive elderly{" "}
                                        <Link href="/elderly-companion-care" className="underline text-[#3b7ea1] hover:text-[#043b67]">companion care</Link>{" "}
                                        that includes social interaction, activities, hobbies, conversation, appointments, and camaraderie.
                                    </p>
                                </div>

                                {/* Schedules */}
                                <div className="border border-gray-200 rounded-[8px] p-8 hover:shadow-md transition-shadow bg-white h-full">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-[20px] font-bold text-[#043b67] font-sans">Schedules</h3>
                                        {/* Clock/Calendar Icon */}
                                        <svg className="text-[#9c4958] shrink-0 ml-4" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                            <path d="M16 2v4" />
                                            <path d="M8 2v4" />
                                            <path d="M3 10h18" />
                                            <circle cx="12" cy="16" r="4" />
                                            <path d="M12 14v2l1.5 1.5" />
                                        </svg>
                                    </div>
                                    <p className="text-[14.5px] text-[#333333] leading-[1.7]">
                                        We'll tailor a specialized program that works with your loved one's daily activities, including sleep,
                                        eating, and medication reminders.
                                    </p>
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="flex flex-col gap-6">
                                {/* Image Block */}
                                <div className="flex gap-4 h-[380px] md:h-[440px]">
                                    {/* Cleaning Image (Left, vertically centered/offset) */}
                                    <div className="flex-1 relative h-[75%] mt-auto rounded-[8px] overflow-hidden shadow-sm">
                                        <Image
                                            src="https://images.unsplash.com/photo-1584824486509-11459482c3ea?q=80&w=600&auto=format&fit=crop"
                                            alt="Caregiver cleaning counter"
                                            fill
                                            className="object-cover object-center"
                                        />
                                    </div>
                                    {/* Walker Image (Right, full height) */}
                                    <div className="flex-1 relative h-full rounded-[8px] overflow-hidden shadow-sm">
                                        <Image
                                            src="https://images.unsplash.com/photo-1581579205466-e4304e287010?q=80&w=600&auto=format&fit=crop"
                                            alt="Senior using walker"
                                            fill
                                            className="object-cover object-center"
                                        />
                                    </div>
                                </div>

                                {/* Homemaking Assistance */}
                                <div className="border border-gray-200 rounded-[8px] p-8 hover:shadow-md transition-shadow bg-white h-full">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-[20px] font-bold text-[#043b67] font-sans">Homemaking Assistance</h3>
                                        {/* Spray Bottle Icon */}
                                        <svg className="text-[#9c4958] shrink-0 ml-4" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M14 4h-4v4h4V4z" />
                                            <path d="M10 8v4c0 1.1-.9 2-2 2H6v8h12v-8h-2c-1.1 0-2-.9-2-2V8" />
                                            <path d="M10 4c0-1.1.9-2 2-2h2" />
                                            <path d="M6 14H4" />
                                            <path d="M6 18H3" />
                                            <path d="M20 18h-2" />
                                        </svg>
                                    </div>
                                    <p className="text-[14.5px] text-[#333333] leading-[1.7]">
                                        If your loved one is unable to tend to housework or needs a little assistance, we'll develop a program that
                                        includes meal preparation, groceries, linens, laundry, and light housekeeping.
                                    </p>
                                </div>

                                {/* Logistics */}
                                <div className="border border-gray-200 rounded-[8px] p-8 hover:shadow-md transition-shadow bg-white h-full">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-[20px] font-bold text-[#043b67] font-sans">Logistics</h3>
                                        {/* Clipboard Icon */}
                                        <svg className="text-[#9c4958] shrink-0 ml-4" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                                            <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                                            <path d="M9 14h6" />
                                            <path d="M9 18h6" />
                                            <path d="M9 10h6" />
                                        </svg>
                                    </div>
                                    <p className="text-[14.5px] text-[#333333] leading-[1.7]">
                                        We'll cover everything you need to know about the home care process, such as access to the home,
                                        documentation, communication with your caregiver(s), and how to contact your local office.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Banner - Customized Care Planning */}
                        <div className="bg-[#043b67] rounded-[4px] overflow-hidden relative mb-16 shadow-lg">
                            {/* Wave Pattern Background */}
                            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100%\' height=\'100%\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3Cpattern id=\'waves\' x=\'0\' y=\'0\' width=\'100\' height=\'40\' patternUnits=\'userSpaceOnUse\'%3E%3Cpath d=\'M0 20 Q 25 0, 50 20 T 100 20\' fill=\'none\' stroke=\'%23ffffff\' stroke-width=\'2\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'100%\' height=\'100%\' fill=\'url(%23waves)\' /%3E%3C/svg%3E")' }}></div>
                            
                            <div className="relative z-10 flex flex-col lg:flex-row items-center p-8 md:p-12 gap-8">
                                <div className="flex-1">
                                    <h2 className="text-[28px] md:text-[32px] font-bold text-white mb-6 font-sans tracking-tight leading-tight">
                                        Customized Care<br />Planning
                                    </h2>
                                    <p className="text-white text-[15.5px] mb-5 leading-relaxed">
                                        Are you ready to begin home care services with MidAid?
                                    </p>
                                    <p className="text-white text-[15.5px] mb-8 leading-relaxed">
                                        Contact your nearest home care location or call 489 987 299 today to schedule
                                        your free home care consultation.
                                    </p>
                                    <Link
                                        href="/office-locator"
                                        className="inline-flex items-center justify-center bg-[#dca626] text-[#043b67] font-bold text-[15px] px-8 py-3.5 rounded-[4px] hover:opacity-90 transition-opacity"
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
