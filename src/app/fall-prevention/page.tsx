import Image from "next/image";
import Link from "next/link";
import { InnerPageHero } from "@/components/shared/InnerPageHero";
import { HomeCareInfoSidebar } from "@/components/layout/sidebar/HomeCareInfoSidebar";
import { FloatingGetStarted } from "@/components/layout/FloatingGetStarted";
import { Newsletter } from "@/components/marketing/Newsletter";
import { FAQAccordion } from "@/components/shared/FAQAccordion";

export const metadata = {
    title: "Fall Prevention for Seniors | Safe and Steady Program",
    description: "Falls are the top cause of serious injuries for seniors. Visiting Angels can play a pivotal role in reducing the risk of falls for your aging loved one at home.",
};

export default function FallPreventionPage() {
    const faqs = [
        {
            question: "What Are Signs Indicating My Loved One Is at Risk of Falling?",
            answer: "Some signs include holding onto walls or furniture while walking, experiencing unsteadiness when standing up, having difficulty getting out of a chair, complaining of dizziness, or taking smaller, shuffled steps."
        },
        {
            question: "How Can Home Care Help Reduce Fall Risk?",
            answer: "Our caregivers can assist with daily activities, monitor mobility, clear hazards from walkways, ensure proper lighting, and help with exercises designed to improve balance and coordination."
        },
        {
            question: "How Can Families Reduce the Risk of Falls at Home?",
            answer: "Families can help by removing trip hazards like throw rugs, installing grab bars in bathrooms, improving home lighting, ensuring seniors wear supportive footwear, and keeping frequently used items within easy reach."
        },
        {
            question: "What Are Some Exercises Seniors Can Do To Improve Balance And Strength?",
            answer: "Gentle exercises like Tai Chi, seated leg lifts, walking, and light resistance training can significantly improve core strength and balance, reducing the likelihood of a fall."
        }
    ];

    return (
        <>
            <InnerPageHero
                title="Fall Prevention"
                description="Falls are the top cause of serious injuries for seniors, causing life-altering issues or hospitalizations that rob them of independence."
                imageSrc="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1200&auto=format&fit=crop"
                imageAlt="Caregiver helping senior man down the stairs"
                showPlayButton={true}
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
                            Visiting Angels can play a pivotal role in reducing the risk of falls for your aging loved one at home.
                            We will equip you and your family with essential knowledge and action steps to lower the risk of
                            hospitalizations and serious injury for your loved one at home.
                        </p>

                        <p className="mb-12 text-[15.5px]">
                            Our experienced caregivers provide hands-on assistance with mobility, ensuring your loved one
                            moves safely around their home. We also help identify and address potential fall hazards, such as
                            loose rugs, poor lighting, or cluttered walkways, creating a safer living environment.
                        </p>

                        <p className="mb-12 text-[15.5px]">
                            We strive to enhance your loved one's independence while minimizing the risk of falls.
                        </p>

                        {/* Image Left, Text Right Layout */}
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 mb-16 items-start">
                            <div className="w-full lg:w-[40%] shrink-0">
                                <div className="relative h-[340px] md:h-[380px] rounded-[8px] overflow-hidden shadow-sm">
                                    <Image
                                        src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=600&auto=format&fit=crop"
                                        alt="Caregiver helping senior on stairs"
                                        fill
                                        className="object-cover object-center"
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-[60%] flex flex-col justify-start">
                                <h2 className="text-[26px] md:text-[30px] font-bold text-[#043b67] mb-5 font-sans tracking-tight leading-tight">
                                    Safe and Steady® Fall Prevention Program
                                </h2>
                                <p className="text-[15.5px] leading-[1.7]">
                                    Through our Safe and Steady Fall Prevention program—
                                    specifically designed to mitigate slips, trips, and falls among the
                                    elderly—our caregivers receive specialized training to deliver
                                    avoidance strategies tailored to each senior's individual needs
                                    and home environment. By fostering safe mobility and ensuring
                                    a secure living space, we empower seniors to uphold their
                                    independence and enjoy a high quality of life with confidence.
                                </p>
                            </div>
                        </div>

                        {/* Why Fall Prevention... */}
                        <h2 className="text-[26px] md:text-[30px] font-bold text-[#043b67] mb-5 font-sans tracking-tight">
                            Why Fall Prevention Is Important for Seniors
                        </h2>
                        <p className="mb-6 text-[15.5px]">
                            At Visiting Angels, we know how much older adults want to live at home for as long as
                            possible. However, remaining safe and comfortable at home alone can be challenging and
                            sometimes impossible.
                        </p>
                        <p className="mb-6 text-[15.5px]">
                            As your loved one ages, they may lose mobility, strength, and coordination, which can impede their
                            daily activities and routines. As a result, they may also lose their independence and self-worth.
                        </p>
                        <p className="mb-10 text-[15.5px]">
                            As one of America's leading home care providers for more than 25 years, Visiting Angels offers a
                            safe, affordable alternative to assisted living—even if your loved one needs Alzheimer's care or
                            dementia care.
                        </p>

                        {/* Box with list */}
                        <div className="border border-[#e5e7eb] bg-[#f8fbfc] rounded-[8px] p-8 md:p-10 mb-12 shadow-sm">
                            <p className="mb-6 text-[15.5px] text-[#3b7ea1] font-medium">
                                Seniors are more vulnerable to falls due to risk factors such as:
                            </p>
                            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                                <ul className="flex-1 space-y-4">
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333] font-bold">Cognitive disorders</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333] font-bold">Decreased strength</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333] font-bold">Hearing loss</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333] font-bold">Limited mobility</span>
                                    </li>
                                </ul>
                                <ul className="flex-1 space-y-4">
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333] font-bold">Poor coordination</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333] font-bold">Reduced eyesight</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333] font-bold">Stiff or painful joints</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333] font-bold">Taking multiple medications</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Text + 2 vertical images layout */}
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 mb-8">
                            <div className="w-full lg:w-[55%] flex flex-col justify-start">
                                <p className="mb-0 text-[15.5px]">
                                    Seniors are also more likely to suffer significant
                                    injuries when falls occur. Hip fractures are
                                    particularly common and dangerous for them.
                                    The recovery period can take up to a year, may
                                    require <Link href="/transition-home-care" className="underline text-[#3b7ea1] hover:text-[#043b67]">transitional care at home</Link>, and can be
                                    life-threatening. Most seniors never fully
                                    recover from a hip fracture, which can cause
                                    them to lose their autonomy at home.
                                </p>
                            </div>
                            <div className="w-full lg:w-[45%] flex gap-4">
                                <div className="flex-1 relative h-[260px] md:h-[320px] rounded-[8px] overflow-hidden shadow-sm mt-4">
                                    <Image
                                        src="https://images.unsplash.com/photo-1581579205466-e4304e287010?q=80&w=600&auto=format&fit=crop"
                                        alt="Caregiver helping senior walk"
                                        fill
                                        className="object-cover object-center"
                                    />
                                </div>
                                <div className="flex-1 relative h-[260px] md:h-[320px] rounded-[8px] overflow-hidden shadow-sm mb-4">
                                    <Image
                                        src="https://images.unsplash.com/photo-1584824486509-11459482c3ea?q=80&w=600&auto=format&fit=crop"
                                        alt="Caregiver walking with senior outdoors"
                                        fill
                                        className="object-cover object-center"
                                    />
                                </div>
                            </div>
                        </div>

                        <p className="mb-16 text-[15.5px]">
                            You can decrease your loved one's risk of falling by making changes in their home environment
                            and being aware of their health changes. Assess your aging parent's fall risk with the
                            CDC's <Link href="#" className="underline text-[#3b7ea1] hover:text-[#043b67]">Timed Up and Go</Link> test.
                        </p>

                        {/* CTA Banner - Teal with Circle Image */}
                        <div className="bg-[#2a7c73] rounded-[4px] overflow-hidden relative mb-16 shadow-lg">
                            {/* Wave Pattern Background */}
                            <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100%\' height=\'100%\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3Cpattern id=\'waves\' x=\'0\' y=\'0\' width=\'100\' height=\'40\' patternUnits=\'userSpaceOnUse\'%3E%3Cpath d=\'M0 20 Q 25 0, 50 20 T 100 20\' fill=\'none\' stroke=\'%23ffffff\' stroke-width=\'2\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'100%\' height=\'100%\' fill=\'url(%23waves)\' /%3E%3C/svg%3E")' }}></div>
                            
                            <div className="relative z-10 flex flex-col lg:flex-row items-center p-8 md:p-12 gap-8">
                                <div className="flex-1">
                                    <h2 className="text-[28px] md:text-[32px] font-bold text-white mb-6 font-sans tracking-tight leading-tight">
                                        How to Start the Safe and Steady®<br />Program?
                                    </h2>
                                    <p className="text-white text-[15.5px] mb-5 leading-relaxed">
                                        When you contact your <Link href="/office-locator" className="underline hover:text-gray-200">local home care office</Link>, a Visiting Angels care
                                        coordinator will set up a free home care consultation with you and
                                        your senior. The coordinator will develop a personalized home care
                                        plan and recommend a caregiver suited to your loved one's needs.
                                    </p>
                                    <p className="text-white text-[15.5px] mb-8 leading-relaxed">
                                        Your loved one will receive compassionate, dedicated care—and
                                        you will gain peace of mind knowing they are safe.
                                    </p>
                                    <Link
                                        href="/office-locator"
                                        className="inline-flex items-center justify-center bg-[#dca626] text-[#043b67] font-bold text-[15px] px-8 py-3.5 rounded-[4px] hover:opacity-90 transition-opacity"
                                    >
                                        View Our Office Locations
                                    </Link>
                                </div>
                                <div className="w-full lg:w-[320px] shrink-0 flex justify-center lg:justify-end">
                                    <div className="w-[260px] h-[260px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden border-4 border-white/20 relative shadow-xl">
                                        <Image
                                            src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=600&auto=format&fit=crop"
                                            alt="Caregiver helping senior man with prosthetic leg"
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
            <Newsletter />
            <FloatingGetStarted />
        </>
    );
}
