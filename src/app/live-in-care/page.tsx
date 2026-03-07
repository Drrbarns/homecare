import Image from "next/image";
import Link from "next/link";
import { InnerPageHero } from "@/components/shared/InnerPageHero";
import { InnerPageSidebar } from "@/components/layout/sidebar/InnerPageSidebar";
import { FloatingGetStarted } from "@/components/layout/FloatingGetStarted";
import { Newsletter } from "@/components/marketing/Newsletter";
import { GetStartedInner } from "@/components/shared/GetStartedInner";
import { FAQAccordion } from "@/components/shared/FAQAccordion";

export const metadata = {
    title: "Live-In Care for Seniors",
    description: "Helping your loved one stay home in safety and comfort with dedicated around-the-clock support.",
};

export default function LiveInCarePage() {
    const faqs = [
        {
            question: "Who Is Live-In Care Right For?",
            answer: "Live-in care is ideal for seniors who need consistent support and supervision throughout the day but don't require constant, active care throughout the night. It's often chosen for individuals with cognitive decline, mobility issues, or those recovering from surgery."
        },
        {
            question: "What's the Difference Between 24-Hour Care and Live-In Care?",
            answer: "Live-in care involves one caregiver staying in the home (needing an 8-hour sleep break), providing a steady companion. 24-hour care utilizes rotating shifts of caregivers to ensure someone is always awake and alert at all times."
        },
        {
            question: "How Does Live-In Care Support Families?",
            answer: "Live-in care provides immense peace of mind for families, knowing their loved one has a dedicated professional ensuring their safety, managing daily tasks, and providing companionship, thereby reducing family caregiver burnout."
        },
        {
            question: "What Is MidAid' Approach to Live-In Care?",
            answer: "Our approach is highly personalized. We carefully match caregivers based on skills and personality, develop customized care plans, and maintain open communication with families to ensure the highest quality of compassionate care."
        }
    ];

    return (
        <>
            <InnerPageHero
                title="Live-In Care"
                description="Helping your loved one stay home in safety and comfort with dedicated around-the-clock support."
                imageSrc="/images/Whisk_05c25109353fe2d88f1437b47bfffa90dr.jpeg"
                imageAlt="Caregiver helping senior in bathroom"
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
                        <p className="mb-6 text-[15.5px]">
                            Aging gracefully at home can bring joy to your loved one's days, even for seniors who need a constant caring presence. With dedicated live-in care, a professional caregiver is always in the home to provide continuous, familiar companionship and personalized non-medical care at any hour.
                        </p>
                        <p className="mb-12 text-[15.5px]">
                            This steady care can make all the difference in preserving a sense of normalcy and calm for seniors. With consistent professional in-home assistance provided each day and night, seniors can continue aging in place comfortably while families gain reassurance knowing someone is always there to provide attentive, devoted care.
                        </p>

                        <h2 className="text-[26px] md:text-[32px] font-bold text-[#043b67] mb-6 font-sans tracking-tight">
                            What Is Live-In Care?
                        </h2>
                        <p className="mb-6 text-[15.5px]">
                            With live-in care, a professional caregiver stays in your loved one's home to provide ongoing support. Unlike hourly care or overnight visits, live-in care emphasizes consistency and relationship-building.
                        </p>
                        <p className="mb-12 text-[15.5px]">
                            Live-in care offers seniors a familiar face who understands their routines, preferences, and needs. This care model supports your loved one's safety and emotional well-being, helping older adults feel secure and independent in their own homes.
                        </p>

                        <p className="mb-6 text-[15.5px]">
                            Live-in care can include a range of non-medical home care services:
                        </p>

                        {/* Bulleted List */}
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start">
                                <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-2 shrink-0"></div>
                                <span className="text-[15.5px]">Maintaining consistent daily routines</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-2 shrink-0"></div>
                                <span className="text-[15.5px]">Meal preparation and light housekeeping</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-2 shrink-0"></div>
                                <Link href="/home-care-services#personal" className="underline text-[#3b7ea1] hover:text-[#043b67] text-[15.5px]">Personal care</Link> <span className="text-[15.5px]">&nbsp;and mobility assistance</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-2 shrink-0"></div>
                                <Link href="#" className="underline text-[#3b7ea1] hover:text-[#043b67] text-[15.5px]">Medication reminders</Link>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-2 shrink-0"></div>
                                <Link href="/elderly-companion-care" className="underline text-[#3b7ea1] hover:text-[#043b67] text-[15.5px]">Companion care</Link> <span className="text-[15.5px]">&nbsp;and social interaction</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-2 shrink-0"></div>
                                <span className="text-[15.5px]">Overnight support for reassurance and safety</span>
                            </li>
                        </ul>

                        <p className="mb-16 text-[15.5px]">
                            As your senior's needs change, we can personalize and evolve your care plan—always with respect for dignity and independence.
                        </p>

                        <h2 className="text-[26px] md:text-[32px] font-bold text-[#043b67] mb-6 font-sans tracking-tight">
                            What's the Difference Between Live-In and 24-Hour Care?
                        </h2>
                        <p className="mb-8 text-[15.5px]">
                            While "live-in" and "24-hour care" may seem similar, they involve different arrangements and caregiving approaches.
                        </p>

                        {/* Unstyled bulleted list for comparisons */}
                        <ul className="space-y-6 mb-8 pl-5" style={{ listStyleType: 'disc' }}>
                            <li className="pl-2">
                                <span className="text-[15.5px]"><strong className="font-bold">Live-in Care:</strong> Features one caregiver staying in the home, providing daily help and companionship, with breaks for rest. Best for those needing steady, but not constant, support.</span>
                            </li>
                            <li className="pl-2">
                                <span className="text-[15.5px]"><strong className="font-bold">24-hour Care:</strong> Ensures continuous, round-the-clock support with caregivers in rotating shifts—ideal for advanced needs or overnight supervision.</span>
                            </li>
                        </ul>

                        <p className="mb-16 text-[15.5px]">
                            The right choice depends on the level of care required and personal preferences, with both promoting comfort and independence at home.
                        </p>

                        <h2 className="text-[26px] md:text-[32px] font-bold text-[#043b67] mb-6 font-sans tracking-tight">
                            Why Choose MidAid for Live-In Care?
                        </h2>
                        <p className="mb-8 text-[15.5px]">
                            Choosing a live-in provider is a big decision. We design our care with a relationship-centered approach:
                        </p>

                        <ul className="space-y-6 mb-16 pl-5" style={{ listStyleType: 'disc' }}>
                            <li className="pl-2">
                                <strong className="font-bold text-[#333333] text-[15.5px]">Local, Compassionate Team</strong>
                                <p className="mt-1 text-[15.5px]">Our caregivers are members of your community, backed by the resources of our <Link href="/why-us" className="underline text-[#3b7ea1] hover:text-[#043b67]">nationally recognized home care experts</Link>.</p>
                            </li>
                            <li className="pl-2">
                                <strong className="font-bold text-[#333333] text-[15.5px]">Experienced Caregivers</strong>
                                <p className="mt-1 text-[15.5px]">We specialize in the nuances of living within a client's home, respecting their boundaries and preferences while providing essential support.</p>
                            </li>
                            <li className="pl-2">
                                <strong className="font-bold text-[#333333] text-[15.5px]">Tailored Care Plans</strong>
                                <p className="mt-1 text-[15.5px]">No two older adults are alike. We customize every plan to fit your loved one's physical and emotional needs.</p>
                            </li>
                            <li className="pl-2">
                                <strong className="font-bold text-[#333333] text-[15.5px]">Overnight Reassurance</strong>
                                <p className="mt-1 text-[15.5px]">Professional caregivers can help with nighttime wandering safety, bathroom assistance, and providing comfort during sleep disturbances.</p>
                            </li>
                        </ul>

                        {/* We will add the GetStartedInner component and Contact CTA here */}
                        <div className="mx-[-16px] lg:mx-0">
                            <GetStartedInner
                                title="Get Started with Live-In Care"
                                description1={
                                    <>
                                        Choosing <Link href="/home-care-services" className="underline hover:text-white transition-colors">in-home senior care</Link> can feel overwhelming. With over 25 years of experience, MidAid is here to guide you—day or night.<br className="hidden md:block"/><br className="hidden md:block"/>
                                        Whether you're ready for live-in support or just exploring options, we make the process simple and reassuring.
                                    </>
                                }
                                description2={null}
                                backgroundColor="#043b67"
                                layout="horizontal"
                            />
                        </div>

                        {/* Contact CTA Block */}
                        <div className="mt-16 flex flex-col md:flex-row gap-8 lg:gap-12 items-center justify-between">
                            <div className="flex-1 max-w-[600px]">
                                <h3 className="text-[26px] md:text-[32px] font-bold text-[#043b67] mb-6 font-sans tracking-tight">
                                    Contact Us Today
                                </h3>
                                <p className="mb-6 text-[15.5px] leading-relaxed">
                                    Don't face the challenges of live-in home care alone. Contact MidAid to discover how our home care services can support your loved one and give you confidence they are receiving attentive, compassionate care.
                                </p>
                                <p className="text-[15.5px]">
                                    Call <a href="tel:489987299" className="text-[#3b7ea1] hover:underline">489 987 299</a> or <Link href="/contact-us" className="text-[#3b7ea1] hover:underline">Complete Our Online Form</Link> to schedule a free in-home consultation.
                                </p>
                            </div>
                            
                            <div className="w-full md:w-auto shrink-0 flex justify-center">
                                <div className="relative w-[280px] h-[280px] lg:w-[320px] lg:h-[320px] rounded-full overflow-hidden shadow-sm">
                                    <Image
                                        src="/images/Whisk_05c25109353fe2d88f1437b47bfffa90dr.jpeg"
                                        alt="Caregiver helping senior woman with mirror"
                                        fill
                                        className="object-cover object-center"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <FAQAccordion title="Frequently Asked Questions About 24/7 Home Care" faqs={faqs} />
            
            <Newsletter />
            <FloatingGetStarted />
        </>
    );
}
