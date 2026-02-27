import Image from "next/image";
import Link from "next/link";
import { InnerPageHero } from "@/components/shared/InnerPageHero";
import { HomeCareInfoSidebar } from "@/components/layout/sidebar/HomeCareInfoSidebar";
import { FloatingGetStarted } from "@/components/layout/FloatingGetStarted";
import { Newsletter } from "@/components/marketing/Newsletter";

export const metadata = {
    title: "GUIDE Model Program | Visiting Angels",
    description: "Helping families navigate dementia with confidence and compassion through the GUIDE Model Program.",
};

export default function GuideModelProgramPage() {
    return (
        <>
            <InnerPageHero
                title="GUIDE Model Program"
                description="Helping families navigate dementia with confidence and compassion."
                imageSrc="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1200&auto=format&fit=crop"
                imageAlt="Caregiver showing folded clothes to senior"
            />

            <div className="container mx-auto px-4 lg:px-6 xl:px-8 max-w-[1440px] py-16 lg:py-24">
                <div className="flex flex-col lg:flex-row gap-12 xl:gap-16">
                    {/* Left Sidebar */}
                    <div className="w-full lg:w-[320px] shrink-0">
                        <HomeCareInfoSidebar />
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 w-full text-[15px] md:text-[16px] text-[#333333] leading-[1.7] font-sans">
                        
                        <p className="mb-6 text-[15.5px]">
                            Visiting Angels proudly supports the Centers for Medicare & Medicaid Services' (CMS) GUIDE Model,
                            a national initiative led by the CMS dedicated to improving the lives of individuals living with various
                            stages of dementia and the caregivers who assist them.
                        </p>
                        <p className="mb-12 text-[14px] italic text-[#666666]">
                            Participation in the CMS GUIDE Model and other programs described may vary by location.
                        </p>

                        <h2 className="text-[26px] md:text-[30px] font-bold text-[#043b67] mb-5 font-sans tracking-tight">
                            What Is the GUIDE Model Program?
                        </h2>
                        <p className="mb-12 text-[15.5px]">
                            The <Link href="https://www.cms.gov/priorities/innovation/innovation-models/guide" target="_blank" rel="noopener noreferrer" className="underline text-[#3b7ea1] hover:text-[#043b67]">Guiding an Improved Dementia Experience (GUIDE)</Link> Model is an innovative Medicare-supported
                            program designed to help families care for loved ones with dementia at home. It provides expert
                            guidance, caregiver support, and respite services at no additional cost for those who qualify.
                        </p>

                        <h2 className="text-[26px] md:text-[30px] font-bold text-[#043b67] mb-5 font-sans tracking-tight">
                            Is There a Cost?
                        </h2>
                        <p className="mb-12 text-[15.5px]">
                            For eligible Medicare beneficiaries, GUIDE services are fully covered by Medicare. There is no cost to
                            the client for services provided under the GUIDE program.
                        </p>

                        <h2 className="text-[26px] md:text-[30px] font-bold text-[#043b67] mb-5 font-sans tracking-tight">
                            Eligibility Requirements
                        </h2>
                        <div className="border border-[#e5e7eb] bg-[#f8fbfc] rounded-[8px] p-8 md:p-10 mb-16 shadow-sm">
                            <p className="mb-6 text-[15.5px] text-[#3b7ea1] font-medium">
                                You may qualify for GUIDE services if:
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                    <span className="text-[15.5px] text-[#333333]">You have traditional Medicare Part A & B, and you are NOT on a Medicare<br/>Advantage plan, PACE program or receiving hospice care.</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                    <span className="text-[15.5px] text-[#333333]">You have a diagnosis of dementia confirmed by a clinician. It is possible you may<br/>qualify if you have an early memory loss diagnosis.</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                    <span className="text-[15.5px] text-[#333333]">You live at home or in the community (not in a nursing home or long-term care<br/>facility).</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                    <span className="text-[15.5px] text-[#333333]">You voluntarily align with a participating GUIDE provider.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Image Left, Text Right Layout */}
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-16 items-start">
                            <div className="w-full lg:w-[40%] shrink-0">
                                <div className="relative h-[400px] md:h-[460px] rounded-[8px] overflow-hidden shadow-sm">
                                    <Image
                                        src="https://images.unsplash.com/photo-1581579205466-e4304e287010?q=80&w=600&auto=format&fit=crop"
                                        alt="Caregiver helping senior in kitchen"
                                        fill
                                        className="object-cover object-center"
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-[60%] flex flex-col justify-start">
                                <h2 className="text-[26px] md:text-[30px] font-bold text-[#043b67] mb-5 font-sans tracking-tight leading-tight">
                                    How Visiting Angels Works With GUIDE
                                </h2>
                                <p className="mb-6 text-[15.5px]">
                                    We collaborate with GUIDE-approved providers by CMS in
                                    your area to offer personalized, home-based dementia care,
                                    which may include:
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333]">Companion and personal care services</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333]">Respite support for family caregivers</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333]">Care coordination and service navigation</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333]">Community resource referrals</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Text Left, Image Right Layout */}
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-16 items-start">
                            <div className="w-full lg:w-[60%] flex flex-col justify-start">
                                <h2 className="text-[26px] md:text-[30px] font-bold text-[#043b67] mb-5 font-sans tracking-tight leading-tight">
                                    Specialized Dementia Care Training
                                </h2>
                                <p className="mb-6 text-[15.5px]">
                                    At Visiting Angels, our caregivers have access to ongoing
                                    training resources to support individuals living with dementia.
                                    Our training focuses on:
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333]">Preserving independence and dignity</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333]">Creating daily routines that bring comfort and meaning</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333]">Communicating with compassion—especially when words are gone</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333]">Recognizing behaviors as expressions of emotion/need</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333]">Reducing safety risks such as falls or wandering</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333]">Providing gentle assistance with personal care needs</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333]">Adapting care as dementia progresses</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full lg:w-[40%] shrink-0">
                                <div className="relative h-[560px] md:h-[620px] rounded-[8px] overflow-hidden shadow-sm">
                                    <Image
                                        src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=600&auto=format&fit=crop"
                                        alt="Caregiver smiling with senior man"
                                        fill
                                        className="object-cover object-center"
                                    />
                                </div>
                            </div>
                        </div>

                        <h2 className="text-[26px] md:text-[30px] font-bold text-[#043b67] mb-5 font-sans tracking-tight">
                            Caring For Someone With Dementia Takes More Than Skill—<br/>It Takes Heart
                        </h2>
                        <p className="mb-6 text-[15.5px]">
                            From the first signs of memory loss to the final stages of life, Visiting Angels offers understanding,
                            compassion, and unwavering support for families.
                        </p>
                        <p className="mb-0 text-[15.5px]">
                            Please contact your <Link href="/office-locator" className="underline text-[#3b7ea1] hover:text-[#043b67]">local Visiting Angels office</Link> to confirm availability.
                        </p>

                    </div>
                </div>
            </div>

            <Newsletter />
            <FloatingGetStarted />
        </>
    );
}
