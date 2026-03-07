import Image from "next/image";
import Link from "next/link";
import { InnerPageHero } from "@/components/shared/InnerPageHero";
import { HomeCareInfoSidebar } from "@/components/layout/sidebar/HomeCareInfoSidebar";
import { FloatingGetStarted } from "@/components/layout/FloatingGetStarted";
import { Newsletter } from "@/components/marketing/Newsletter";

export const metadata = {
    title: "Caregivers | Trusted Home Care Professionals",
    description: "MidAid caregivers are at the core of our heartfelt and compassionate home care services, delivering personalized support that enriches the lives of seniors.",
};

export default function CaregiversPage() {
    return (
        <>
            <InnerPageHero
                title="Caregivers"
                description="MidAid caregivers are at the core of our heartfelt and compassionate home care services, delivering personalized support that enriches the lives of seniors and their families."
                imageSrc="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1200&auto=format&fit=crop"
                imageAlt="Group of MidAid caregivers"
            />

            <div className="container mx-auto px-5 sm:px-6 lg:px-6 xl:px-8 max-w-[1440px] py-10 sm:py-16 lg:py-24">
                <div className="flex flex-col lg:flex-row gap-12 xl:gap-16">
                    {/* Left Sidebar */}
                    <div className="w-full lg:w-[320px] shrink-0">
                        <HomeCareInfoSidebar />
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 w-full text-[15px] md:text-[16px] text-[#333333] leading-[1.7] font-sans">

                        <h2 className="text-[28px] md:text-[34px] font-bold text-[#043b67] mb-6 font-sans tracking-tight">
                            Trusted and Reliable Companions for Seniors
                        </h2>

                        <p className="mb-8 text-[15.5px]">
                            MidAid has recruited and hired trustworthy and dependable home care professionals across
                            the country for more than 25 years. Our skilled caregivers provide companionship, socialization,
                            and specialized support for seniors and families, backed by our rigorous vetting process ensuring
                            compassion, integrity, respect, and trust in every interaction.
                        </p>

                        {/* Characteristics Box */}
                        <div className="border border-[#e5e7eb] bg-[#f8fbfc] rounded-[8px] p-8 md:p-10 mb-12 shadow-sm">
                            <p className="mb-6 text-[16px] text-[#3b7ea1] font-medium">
                                Our team exhibits the following characteristics of exceptional <Link href="/home-care-services" className="underline hover:text-[#043b67]">Home Care</Link>:
                            </p>
                            
                            <ul className="space-y-5">
                                <li className="flex items-start">
                                    <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                    <div>
                                        <span className="font-bold text-[#333333]">Skills & Knowledge:</span><br />
                                        <span className="text-[15.5px] text-[#333333]">Our professional caregivers are <Link href="/articles" className="underline text-[#3b7ea1] hover:text-[#043b67]">qualified to handle</Link> a wide range of responsibilities through companionship, socialization, and specialized support.</span>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                    <div>
                                        <span className="font-bold text-[#333333]">Integrity & Trust:</span><br />
                                        <span className="text-[15.5px] text-[#333333]">Character counts at MidAid. Our vetting system and background checks ensure that every caregiver meets our strict hiring criteria.</span>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                    <div>
                                        <span className="font-bold text-[#333333]">Respect & Compassion:</span><br />
                                        <span className="text-[15.5px] text-[#333333]">Through an attentive and empathetic approach to senior care, our professional caregivers prioritize the dignity and preferences of each individual, ensuring seniors feel cared for and valued.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Text + Images Layout */}
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 mb-16">
                            <div className="w-full lg:w-[55%] flex flex-col justify-center">
                                <p className="mb-6 text-[15.5px]">
                                    With one-on-one support and companionship
                                    from our in-home caregivers, your aging loved
                                    one can age in place safely on their own terms.
                                </p>
                                <p className="mb-0 text-[15.5px]">
                                    We also offer a support system for you and your
                                    family. Sometimes, you may need a break but
                                    worry about leaving your loved one alone. Our
                                    compassionate aides will put those worries to
                                    rest by ensuring your loved one is safe and
                                    comfortable at home.
                                </p>
                            </div>
                            <div className="w-full lg:w-[45%] flex gap-4">
                                <div className="flex-1 relative h-[300px] md:h-[360px] rounded-[8px] overflow-hidden shadow-sm">
                                    <Image
                                        src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=600&auto=format&fit=crop"
                                        alt="Caregiver smiling"
                                        fill
                                        className="object-cover object-center"
                                    />
                                </div>
                                <div className="flex-1 relative h-[300px] md:h-[360px] rounded-[8px] overflow-hidden shadow-sm">
                                    <Image
                                        src="https://images.unsplash.com/photo-1581579205466-e4304e287010?q=80&w=600&auto=format&fit=crop"
                                        alt="Caregiver helping senior walk"
                                        fill
                                        className="object-cover object-center"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Selecting the Right Caregiver */}
                        <h2 className="text-[26px] md:text-[30px] font-bold text-[#043b67] mb-6 font-sans tracking-tight">
                            Selecting the Right Caregiver for Each Senior
                        </h2>
                        <p className="mb-10 text-[15.5px]">
                            MidAid takes a thoughtful approach to the matching process by considering unique aspects
                            of a senior's living situation and personal preferences. We call it <Link href="/select-your-caregiver" className="underline text-[#3b7ea1] hover:text-[#043b67]">Select Your Caregiver®</Link>. Here are
                            some factors we consider when selecting caregivers for seniors:
                        </p>

                        {/* 3 Cards Row */}
                        <div className="grid md:grid-cols-3 gap-6 mb-16">
                            {/* Personality */}
                            <div className="border border-gray-200 rounded-[8px] p-8 hover:shadow-md transition-shadow bg-white flex flex-col">
                                <div className="flex justify-end mb-6">
                                    <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M42 22h-6v-6c0-3.3-2.7-6-6-6s-6 2.7-6 6v6h-6v6c-3.3 0-6 2.7-6 6s2.7 6 6 6v6h6v6c0 3.3 2.7 6 6 6s6-2.7 6-6v-6h6v-6c3.3 0 6-2.7 6-6s-2.7-6-6-6v-6z" stroke="#9c4958" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                                    </svg>
                                </div>
                                <h3 className="text-[18px] font-bold text-[#043b67] mb-4 font-sans">Personality</h3>
                                <p className="text-[14.5px] text-[#333333] leading-[1.7]">
                                    Personal chemistry with your
                                    aging loved one and family is an
                                    important factor in determining a
                                    match with a MidAid
                                    caregiver. That's why we'll take
                                    time to get to know your senior
                                    on a personal level before
                                    making a match.
                                </p>
                            </div>

                            {/* Skills */}
                            <div className="border border-gray-200 rounded-[8px] p-8 hover:shadow-md transition-shadow bg-white flex flex-col">
                                <div className="flex justify-end mb-6">
                                    <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="32" cy="24" r="14" stroke="#9c4958" strokeWidth="2" fill="none"/>
                                        <path d="M32 16l2 4 4.5.5-3.5 3 1 4.5-4-2.5-4 2.5 1-4.5-3.5-3 4.5-.5L32 16z" stroke="#9c4958" strokeWidth="2" strokeLinejoin="round" fill="none"/>
                                        <path d="M22 34l-6 16 16-6M42 34l6 16-16-6" stroke="#9c4958" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                                    </svg>
                                </div>
                                <h3 className="text-[18px] font-bold text-[#043b67] mb-4 font-sans">Skills</h3>
                                <p className="text-[14.5px] text-[#333333] leading-[1.7]">
                                    Specialized senior assistance
                                    involves reliable and
                                    personalized support. Our
                                    matching process covers your
                                    parent's unique lifestyle and
                                    supportive needs to
                                    accommodate their customized
                                    care plan.
                                </p>
                            </div>

                            {/* Scheduling */}
                            <div className="border border-gray-200 rounded-[8px] p-8 hover:shadow-md transition-shadow bg-white flex flex-col">
                                <div className="flex justify-end mb-6">
                                    <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="32" cy="32" r="22" stroke="#9c4958" strokeWidth="2" fill="none"/>
                                        <circle cx="32" cy="32" r="16" stroke="#9c4958" strokeWidth="2" fill="none" strokeDasharray="4 4"/>
                                        <path d="M32 20v12l8 6" stroke="#9c4958" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                                    </svg>
                                </div>
                                <h3 className="text-[18px] font-bold text-[#043b67] mb-4 font-sans">Scheduling</h3>
                                <p className="text-[14.5px] text-[#333333] leading-[1.7]">
                                    As we build your loved one's care
                                    plan, we pay close attention to
                                    their daily routine, personal
                                    preferences, and family coverage
                                    needs. The resulting schedule
                                    assures your senior has
                                    proper care at the right time
                                    while you have the comfort of a
                                    professional by their side.
                                </p>
                            </div>
                        </div>

                        {/* CTA Banner - Teal with Video */}
                        <div className="bg-[#2a7c73] rounded-[4px] overflow-hidden relative mb-16 shadow-lg">
                            {/* Wave Pattern Background */}
                            <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100%\' height=\'100%\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3Cpattern id=\'waves\' x=\'0\' y=\'0\' width=\'100\' height=\'40\' patternUnits=\'userSpaceOnUse\'%3E%3Cpath d=\'M0 20 Q 25 0, 50 20 T 100 20\' fill=\'none\' stroke=\'%23ffffff\' stroke-width=\'2\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'100%\' height=\'100%\' fill=\'url(%23waves)\' /%3E%3C/svg%3E")' }}></div>
                            
                            <div className="relative z-10 flex flex-col lg:flex-row items-center p-0">
                                {/* Video Thumbnail Left */}
                                <div className="w-full lg:w-[45%] shrink-0 relative h-[280px] lg:h-[360px]">
                                    <Image
                                        src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=800&auto=format&fit=crop"
                                        alt="Caregiver and senior playing piano"
                                        fill
                                        className="object-cover object-center"
                                    />
                                    {/* Play Button Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-20 h-20 bg-white/80 rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-colors shadow-lg">
                                            <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
                                                <path d="M22.5 12.268C23.8333 13.0378 23.8333 14.9622 22.5 15.732L3.75 26.5574C2.41667 27.3272 0.75 26.365 0.75 24.8253L0.75 3.17468C0.75 1.63498 2.41667 0.672782 3.75 1.44258L22.5 12.268Z" fill="#2a7c73"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Content Right */}
                                <div className="flex-1 p-8 lg:p-12">
                                    <h2 className="text-[28px] md:text-[32px] font-bold text-white mb-6 font-sans tracking-tight leading-tight">
                                        Get Started with In-Home Care Services
                                    </h2>
                                    <p className="text-white text-[15.5px] mb-8 leading-relaxed">
                                        Schedule a free, no-obligation <Link href="/home-care-services" className="underline hover:text-gray-200">home care consultation</Link> with a
                                        MidAid care coordinator near you. This is one of the best
                                        ways to learn about the services provided by our compassionate,
                                        professional caregivers.
                                    </p>
                                    <Link
                                        href="/office-locator"
                                        className="inline-flex items-center justify-center bg-[#dca626] text-[#043b67] font-bold text-[15px] px-8 py-3.5 rounded-[4px] hover:opacity-90 transition-opacity"
                                    >
                                        Find Your Local Office
                                    </Link>
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
