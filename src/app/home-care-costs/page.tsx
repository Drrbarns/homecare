import Image from "next/image";
import Link from "next/link";
import { InnerPageHero } from "@/components/shared/InnerPageHero";
import { HomeCareInfoSidebar } from "@/components/layout/sidebar/HomeCareInfoSidebar";
import { FloatingGetStarted } from "@/components/layout/FloatingGetStarted";
import { Newsletter } from "@/components/marketing/Newsletter";

export const metadata = {
    title: "Home Care Costs | Affordable Senior Care",
    description: "MidAid offers affordable rates for professional and compassionate home care services—from respite care to around-the-clock assistance.",
};

export default function HomeCareCostsPage() {
    return (
        <>
            <InnerPageHero
                title="Home Care Costs"
                description="MidAid offers affordable rates for professional and compassionate home care services—from respite care to around-the-clock assistance."
                imageSrc="/images/Whisk_05c25109353fe2d88f1437b47bfffa90dr.jpeg"
                imageAlt="Caregiver and senior looking at paperwork"
                showPlayButton={true}
            />

            <div className="container mx-auto px-5 sm:px-6 lg:px-6 xl:px-8 max-w-[1440px] py-10 sm:py-16 lg:py-24">
                <div className="flex flex-col lg:flex-row gap-12 xl:gap-16">
                    {/* Left Sidebar */}
                    <div className="w-full lg:w-[320px] shrink-0">
                        <HomeCareInfoSidebar />
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 w-full text-[15px] md:text-[16px] text-[#333333] leading-[1.7] font-sans">

                        {/* Flexible Services... with 2 side-by-side images on right */}
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start mb-16">
                            <div className="w-full lg:w-[55%] flex flex-col justify-start">
                                <h2 className="text-[26px] md:text-[30px] font-bold text-[#043b67] mb-6 font-sans tracking-tight">
                                    Flexible Services to Fit Your Budget
                                </h2>
                                <p className="mb-6 text-[15.5px]">
                                    When considering the expenses associated with
                                    caring for a loved one, it's natural to feel
                                    concerned about the potential financial impact.
                                    For many families, opting for <Link href="/home-care-services" className="underline text-[#3b7ea1] hover:text-[#043b67]">in-home care</Link> presents a more affordable and safe
                                    alternative than relocating a senior to a
                                    nursing home.
                                </p>
                                <p className="mb-0 text-[15.5px]">
                                    MidAid offers flexible home care services
                                    to help you receive essential support and avoid
                                    unnecessary costs you may pay for at an
                                    assisted living facility. For example, if you don't
                                    need a 24-hour or full-day caregiver, you can
                                    modify the hours and support level to fit your
                                    budget and schedule.
                                </p>
                            </div>
                            <div className="w-full lg:w-[45%] flex gap-4 mt-2">
                                <div className="flex-1 relative h-[320px] md:h-[380px] rounded-[8px] overflow-hidden shadow-sm">
                                    <Image
                                        src="/images/Whisk_296661e1eecd735af5f4729a6c9cbca6dr.jpeg"
                                        alt="Caregiver smiling on phone"
                                        fill
                                        className="object-cover object-center"
                                    />
                                </div>
                                <div className="flex-1 relative h-[320px] md:h-[380px] rounded-[8px] overflow-hidden shadow-sm">
                                    <Image
                                        src="/images/Whisk_357ee580e5147ee96a948b18c1f186b4dr.jpeg"
                                        alt="Caregiver talking with senior"
                                        fill
                                        className="object-cover object-center"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Our Services Include Box */}
                        <div className="border border-[#e5e7eb] bg-[#f8fbfc] rounded-[8px] p-8 md:p-10 mb-16 shadow-sm">
                            <h3 className="text-[20px] font-bold text-[#3b7ea1] mb-6 font-sans">Our Services Include:</h3>
                            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                                <ul className="flex-1 space-y-4">
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333]">Assistance with activities of daily living</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333]">Daytime, evening, overnight, and <Link href="/24-hour-home-care" className="underline text-[#3b7ea1] hover:text-[#043b67]">24-hour care</Link></span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333]"><Link href="#" className="underline text-[#3b7ea1] hover:text-[#043b67]">Long-distance care</Link> for families separated by distance</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333]">Occasional <Link href="/respite-care" className="underline text-[#3b7ea1] hover:text-[#043b67]">respite care</Link></span>
                                    </li>
                                </ul>
                                <ul className="flex-1 space-y-4">
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333]">Specialized services, like Alzheimer's and dementia care</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333]">Temporary or long-term support</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333]">Weekday, weekend, or holiday visits</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333]">And much more!</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Image Left, Text Right Layout for Affordable Options */}
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-16 items-start">
                            <div className="w-full lg:w-[40%] shrink-0">
                                <div className="relative h-[400px] rounded-[8px] overflow-hidden shadow-sm">
                                    <Image
                                        src="/images/Whisk_8d4f37c2eb7ea69bb8f4fb907c9e48bcdr.jpeg"
                                        alt="Caregiver and senior playing cards"
                                        fill
                                        className="object-cover object-center"
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-[60%] flex flex-col justify-start">
                                <h2 className="text-[26px] md:text-[30px] font-bold text-[#043b67] mb-5 font-sans tracking-tight leading-tight">
                                    Affordable Senior Care Options
                                </h2>
                                <p className="mb-6 text-[15.5px]">
                                    Some of our offices across the country may discount hourly rates
                                    if you schedule on an ongoing, routine basis, or exceed a
                                    specified number of hours per week. In addition, your senior may
                                    qualify for coverage through their state's Medicaid program
                                    or <Link href="/veterans-care" className="underline text-[#3b7ea1] hover:text-[#043b67]">veteran's care</Link> benefits. Some locations also accept long-term
                                    care insurance to help offset the cost of services.
                                </p>
                                <p className="mb-0 text-[15.5px]">
                                    Many families find investing in preventive care and early
                                    intervention can reduce overall costs in the long run. Regular
                                    companionship and light assistance with daily activities can help
                                    seniors maintain independence longer, potentially delaying
                                    the need for intensive and expensive options like nursing
                                    home facilities.
                                </p>
                            </div>
                        </div>

                        {/* Personalized Care Planning */}
                        <h2 className="text-[26px] md:text-[30px] font-bold text-[#043b67] mb-5 font-sans tracking-tight">
                            Personalized Care Planning That Puts Your Family First
                        </h2>
                        <p className="mb-6 text-[15.5px]">
                            When you choose MidAid, we will create a personalized <Link href="#" className="underline text-[#3b7ea1] hover:text-[#043b67]">senior care plan</Link> to meet your loved
                            one's needs and respect your budget.
                        </p>
                        <p className="mb-6 text-[15.5px]">
                            Our goal is to provide compassionate care that gives families peace of mind without unexpected
                            financial surprises.
                        </p>
                        <p className="mb-16 text-[15.5px]">
                            Please note that in-home care expenses vary across the country and are based on your senior's
                            needs (check your <Link href="/office-locator" className="underline text-[#3b7ea1] hover:text-[#043b67]">local home care office</Link> for specific rates). Actual prices usually depend on the
                            level of assistance your loved one needs and the town or city where they live.
                        </p>

                        {/* Financial Resources Banner */}
                        <div className="bg-[#043b67] rounded-[4px] p-8 md:p-12 mb-16 relative overflow-hidden shadow-lg">
                            {/* Wave Pattern Background */}
                            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100%\' height=\'100%\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3Cpattern id=\'waves\' x=\'0\' y=\'0\' width=\'100\' height=\'40\' patternUnits=\'userSpaceOnUse\'%3E%3Cpath d=\'M0 20 Q 25 0, 50 20 T 100 20\' fill=\'none\' stroke=\'%23ffffff\' stroke-width=\'2\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'100%\' height=\'100%\' fill=\'url(%23waves)\' /%3E%3C/svg%3E")' }}></div>
                            
                            <div className="relative z-10">
                                <h2 className="text-[26px] md:text-[30px] font-bold text-white mb-5 font-sans tracking-tight">
                                    Financial Resources and Support for Long-Term Care
                                </h2>
                                <p className="mb-10 text-[15.5px] text-white">
                                    Navigating the financial aspects of long-term care can be complex and overwhelming. A critical component is knowing where to find
                                    supplemental financial assistance. <span className="font-bold">Here are five resources to explore when deciding how to manage costs effectively and ensure quality
                                    care for your loved one:</span>
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="bg-white rounded-[4px] p-8">
                                        <h3 className="text-[20px] font-bold text-[#043b67] mb-4 font-sans">Medical Insurance</h3>
                                        <p className="text-[14.5px] text-[#333333] leading-[1.7]">
                                            Most health and medical insurances do not cover in-home
                                            personal care. But it's a good idea to check with your senior's
                                            medical insurance company to determine whether coverage
                                            is available. Although Medicare does not currently pay for
                                            home care, some states provide coverage through Medicaid,
                                            and some Medicare Advantage plans may offer benefits.
                                        </p>
                                    </div>
                                    <div className="bg-white rounded-[4px] p-8">
                                        <h3 className="text-[20px] font-bold text-[#043b67] mb-4 font-sans">Long-Term Care Insurance</h3>
                                        <p className="text-[14.5px] text-[#333333] leading-[1.7]">
                                            Some seniors may have specific coverage through a long-
                                            term care insurance policy. These policies are separate from
                                            health insurance and are often purchased through an
                                            insurance agency for long-term care expenses.
                                        </p>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="bg-white rounded-[4px] p-8">
                                        <h3 className="text-[20px] font-bold text-[#043b67] mb-4 font-sans">Veterans Benefits</h3>
                                        <p className="text-[14.5px] text-[#333333] leading-[1.7]">
                                            If a senior receives a VA pension, in-
                                            home coverage may be available
                                            through the Department of Veterans
                                            Affairs (VA) programs.
                                        </p>
                                    </div>
                                    <div className="bg-white rounded-[4px] p-8">
                                        <h3 className="text-[20px] font-bold text-[#043b67] mb-4 font-sans">State And Local Assistance<br/>Programs</h3>
                                        <p className="text-[14.5px] text-[#333333] leading-[1.7]">
                                            Certain state or local programs
                                            provide financial assistance for in-
                                            home care. Check with your state's
                                            Department of Aging to determine if
                                            any apply to you or a loved one.
                                        </p>
                                    </div>
                                    <div className="bg-white rounded-[4px] p-8">
                                        <h3 className="text-[20px] font-bold text-[#043b67] mb-4 font-sans">Private Pay</h3>
                                        <p className="text-[14.5px] text-[#333333] leading-[1.7]">
                                            Most MidAid clients pay out-
                                            of-pocket—or "private pay"—which
                                            means they pay through their own
                                            funds. Usually, the funds are from
                                            individual retirement accounts (IRA),
                                            pensions, Social Security benefits,
                                            401(k), or other savings.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA Section - Get Started with In-Home Care Services */}
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center mb-16">
                            <div className="w-full lg:w-[60%]">
                                <h2 className="text-[26px] md:text-[30px] font-bold text-[#043b67] mb-5 font-sans tracking-tight">
                                    Get Started with In-Home Care Services
                                </h2>
                                <p className="mb-6 text-[15.5px]">
                                    Families nationwide have relied on MidAid since 1998 as a leading provider of
                                    affordable, high-quality home care. We're a steadfast partner who understands your
                                    concerns, needs, and preferences. We'll help your loved one live a full, active, and happy life
                                    in familiar surroundings.
                                </p>
                                <p className="mb-0 text-[15.5px]">
                                    Contact a MidAid <Link href="/office-locator" className="underline text-[#3b7ea1] hover:text-[#043b67]">home care location</Link> in your area today to learn more about
                                    their costs. A coordinator can discuss your loved one's needs during a free <Link href="#" className="underline text-[#3b7ea1] hover:text-[#043b67]">in-home
                                    care consultation</Link>.
                                </p>
                            </div>
                            <div className="w-full lg:w-[40%] flex justify-center lg:justify-end">
                                <div className="w-[300px] h-[300px] rounded-full overflow-hidden shadow-lg relative border-4 border-white">
                                    <Image
                                        src="/images/Whisk_05c25109353fe2d88f1437b47bfffa90dr.jpeg"
                                        alt="Caregiver and senior preparing food"
                                        fill
                                        className="object-cover object-center"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Related Articles Title (The component is missing from imports so we build the layout manually for the screenshots if needed, or I'll just use the standard layout) */}
                        <div className="text-center mb-10">
                            <h2 className="text-[28px] md:text-[32px] font-bold text-[#043b67] mb-8 font-sans tracking-tight">
                                Related Articles
                            </h2>
                            <div className="grid md:grid-cols-3 gap-6 mb-8 text-left">
                                {/* Article 1 */}
                                <div className="bg-white border border-gray-100 rounded-[4px] overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full">
                                    <div className="relative h-[200px] w-full">
                                        <Image src="/images/Whisk_296661e1eecd735af5f4729a6c9cbca6dr.jpeg" alt="Senior checking finances" fill className="object-cover" />
                                    </div>
                                    <div className="p-6 flex-1 flex flex-col">
                                        <h3 className="font-bold text-[18px] text-[#043b67] group-hover:text-[#3b7ea1] transition-colors leading-[1.4] underline decoration-1 underline-offset-2">
                                            Health and Financial<br/>Planning Tips for Single and<br/>Widowed Seniors
                                        </h3>
                                    </div>
                                </div>
                                {/* Article 2 */}
                                <div className="bg-white border border-gray-100 rounded-[4px] overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full">
                                    <div className="relative h-[200px] w-full">
                                        <Image src="/images/Whisk_357ee580e5147ee96a948b18c1f186b4dr.jpeg" alt="Family discussing care plan" fill className="object-cover" />
                                    </div>
                                    <div className="p-6 flex-1 flex flex-col">
                                        <h3 className="font-bold text-[18px] text-[#043b67] group-hover:text-[#3b7ea1] transition-colors leading-[1.4] underline decoration-1 underline-offset-2">
                                            Respect Your Senior's Wishes<br/>With Advanced Care<br/>Planning
                                        </h3>
                                    </div>
                                </div>
                                {/* Article 3 */}
                                <div className="bg-white border border-gray-100 rounded-[4px] overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full">
                                    <div className="relative h-[200px] w-full">
                                        <Image src="/images/Whisk_9a4e3ebdd3487db89524e7243e977484dr.jpeg" alt="Couple reviewing paperwork" fill className="object-cover" />
                                    </div>
                                    <div className="p-6 flex-1 flex flex-col">
                                        <h3 className="font-bold text-[18px] text-[#043b67] group-hover:text-[#3b7ea1] transition-colors leading-[1.4] underline decoration-1 underline-offset-2">
                                            Creative Ways to Pay For<br/>Senior Home Care
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <Link href="/articles" className="inline-block text-[#3b7ea1] font-medium hover:text-[#043b67] transition-colors text-[15.5px]">
                                Read More Articles »
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

            <Newsletter />
            <FloatingGetStarted />
        </>
    );
}
