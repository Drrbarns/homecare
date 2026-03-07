import Image from "next/image";
import Link from "next/link";
import { InnerPageHero } from "@/components/shared/InnerPageHero";
import { InnerPageSidebar } from "@/components/layout/sidebar/InnerPageSidebar";
import { FloatingGetStarted } from "@/components/layout/FloatingGetStarted";
import { Newsletter } from "@/components/marketing/Newsletter";
import { GetStartedInner } from "@/components/shared/GetStartedInner";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { RelatedArticles } from "@/components/shared/RelatedArticles";

export const metadata = {
    title: "Alzheimer's Care Services at Home",
    description: "Our Alzheimer's care services provide specialized support to enhance quality of life, ensuring your loved one is safe and comfortable at home.",
};

export default function AlzheimersCarePage() {
    const faqs = [
        {
            question: "What Is Alzheimer's Disease?",
            answer: "Alzheimer's disease is a progressive, degenerative brain disorder that slowly destroys memory and thinking skills. It is the most common cause of dementia among older adults."
        },
        {
            question: "What Is the Difference Between Alzheimer's and Dementia?",
            answer: "Dementia is a general term for a decline in mental ability severe enough to interfere with daily life. Alzheimer's is a specific disease that is the most common cause of dementia."
        },
        {
            question: "What Are the Risk Factors for Alzheimer's Disease?",
            answer: "Age is the greatest known risk factor for Alzheimer's. Family history, genetics, and certain lifestyle factors may also increase the risk."
        },
        {
            question: "What Are the Symptoms of Alzheimer's?",
            answer: "Symptoms usually develop slowly and worsen over time, including memory loss that disrupts daily life, challenges in planning or solving problems, difficulty completing familiar tasks, and changes in mood or personality."
        },
        {
            question: "Is There a Cure for Alzheimer's Disease?",
            answer: "Currently, there is no cure for Alzheimer's disease, but treatments for symptoms are available and research continues."
        },
        {
            question: "What Are the Care Options for My Loved One With Alzheimer's?",
            answer: "Care options range from in-home care, like the services provided by MidAid, to adult day care centers, assisted living facilities, and specialized memory care communities."
        },
        {
            question: "What If My Loved One With Alzheimer's Can No Longer Live At Home?",
            answer: "When living at home is no longer safe or practical, transitioning to a specialized memory care facility or nursing home may be necessary to ensure they receive the appropriate level of care."
        }
    ];

    const relatedArticles = [
        {
            title: "Preparing for Mid-Stage & Late-Stage Alzheimer's Care",
            imageSrc: "/images/Whisk_05c25109353fe2d88f1437b47bfffa90dr.jpeg",
            imageAlt: "Caregiver helping senior",
            href: "/articles/preparing-for-mid-stage-late-stage-alzheimers-care"
        },
        {
            title: "How Home Care Changes Between Alzheimer's and Dementia",
            imageSrc: "/images/Whisk_357ee580e5147ee96a948b18c1f186b4dr.jpeg",
            imageAlt: "Caregiver and senior looking at photo album",
            href: "/articles/how-home-care-changes-between-alzheimers-and-dementia"
        },
        {
            title: "Alzheimer's Care: Helping To Manage Sundowner's Syndrome",
            imageSrc: "/images/Whisk_f029a24e84f42a089c94d1b4480b12c2dr.jpeg",
            imageAlt: "Caregiver comforting senior",
            href: "/articles/alzheimers-care-helping-to-manage-sundowners-syndrome"
        }
    ];

    return (
        <>
            <InnerPageHero 
                title="Alzheimer's Care"
                description="A professional caregiver can provide specialized support and assistance for your loved one to enhance their quality of life and ensure their safety and comfort throughout the progression of the disease."
                imageSrc="/images/Whisk_296661e1eecd735af5f4729a6c9cbca6dr.jpeg"
                imageAlt="Caregiver playing cards with senior woman"
            />
            
            <div className="container mx-auto px-5 sm:px-6 lg:px-6 xl:px-8 max-w-[1440px] py-10 sm:py-16 lg:py-24">
                <div className="flex flex-col lg:flex-row gap-12 xl:gap-16">
                    {/* Left Sidebar */}
                    <div className="w-full lg:w-[320px] shrink-0">
                        <InnerPageSidebar />
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 w-full text-[15px] md:text-[16px] text-[#333333] leading-[1.7] font-sans">
                        <p className="mb-10">
                            A professional <Link href="/careers" className="underline text-[#3b7ea1] hover:text-[#043b67]">caregiver</Link> can provide specialized support and assistance for your loved one to enhance their quality of life and ensure their safety and comfort throughout the progression of the disease. You will feel confident knowing your loved one is safe and comfortable at home with MidAid by their side.
                        </p>

                        {/* Memory Care Support Block */}
                        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start mb-16">
                            <div className="w-full md:w-[45%]">
                                <div className="relative h-[400px] w-full rounded-[8px] overflow-hidden">
                                    <Image
                                        src="/images/Whisk_296661e1eecd735af5f4729a6c9cbca6dr.jpeg"
                                        alt="Caregiver playing cards with senior"
                                        fill
                                        className="object-cover object-center"
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-[55%] pt-2">
                                <h2 className="text-[26px] md:text-[32px] font-bold text-[#043b67] mb-6 font-sans tracking-tight">
                                    Memory Care Support at Home
                               </h2>
                               <p className="mb-5">
                                   Alzheimer's disease symptoms can affect nearly every aspect of daily life. You and your family may have to manage your loved one's personality changes, safety concerns, and <Link href="/home-care-services#personal" className="underline text-[#3b7ea1] hover:text-[#043b67]">personal care</Link> such as bathing and dressing.
                               </p>
                               <p className="mb-5">
                                   You don't have to manage Alzheimer's care alone.
                               </p>
                               <p>
                                   MidAid will help you create a comprehensive, personalized <Link href="/home-care-services" className="underline text-[#3b7ea1] hover:text-[#043b67]">home care plan</Link> to address your loved one's unique needs. We tackle daily caregiving responsibilities so you can focus on enjoying meaningful moments and making cherished memories with your loved one.
                               </p>
                            </div>
                        </div>

                        {/* Our Services Include */}
                        <div className="bg-white border border-gray-200 rounded-[8px] p-8 md:p-10 shadow-[0_2px_15px_rgba(0,0,0,0.03)] mb-12">
                            <h3 className="text-[18px] md:text-[20px] font-bold text-[#3b7ea1] mb-6">
                                Our Services Include:
                            </h3>
                            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                                <ul className="flex-1 space-y-4">
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-2 shrink-0"></div>
                                        <span>Accompaniment to appointments</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-2 shrink-0"></div>
                                        <span>Coordinating care with other providers</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-2 shrink-0"></div>
                                        <span>Companionship</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-2 shrink-0"></div>
                                        <span>Grocery shopping</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-2 shrink-0"></div>
                                        <span>Help with dressing, grooming, bathing, and toileting</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-2 shrink-0"></div>
                                        <span>Laundry and light housekeeping</span>
                                    </li>
                                </ul>
                                <ul className="flex-1 space-y-4">
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-2 shrink-0"></div>
                                        <span>Managing episodes of confusion, anxiety, or anger</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-2 shrink-0"></div>
                                        <span>Meal planning and preparation</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-2 shrink-0"></div>
                                        <span>Medication reminders</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-2 shrink-0"></div>
                                        <span>Mobility and transfer assistance</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-2 shrink-0"></div>
                                        <span>Wandering prevention</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <p className="mb-16">
                            Our flexible Alzheimer's care services are offered part-time and full-time, <Link href="/24-hour-home-care" className="underline text-[#3b7ea1] hover:text-[#043b67]">24/7</Link>, temporarily, and via <Link href="/home-care-services#respite" className="underline text-[#3b7ea1] hover:text-[#043b67]">respite care</Link>. We also provide <Link href="/home-care-services#dementia" className="underline text-[#3b7ea1] hover:text-[#043b67]">dementia care services</Link> for people with vascular dementia, Lewy body dementia, Creutzfeldt-Jakob disease, and other memory disorders.
                        </p>

                        {/* Stages Section */}
                        <h2 className="text-[26px] md:text-[32px] font-bold text-[#043b67] mb-6 font-sans tracking-tight">
                            Alzheimer's Care Services for Every Stage
                        </h2>
                        <p className="mb-10">
                            We will meticulously attend to your loved one's well-being and tailor services to their specific requirements and the distinctive hurdles they face during each particular stage of Alzheimer's disease.
                        </p>

                        <div className="relative border-l-[3px] border-[#d6eaee] ml-3 pl-8 pb-4 space-y-12">
                            {/* Early Stage */}
                            <div className="relative">
                                <div className="absolute -left-[45px] top-1 w-6 h-6 rounded-full bg-[#b5d7e0] border-4 border-white"></div>
                                <h3 className="text-[20px] font-bold text-[#3b7ea1] mb-4">Early Stage</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-[8px] shrink-0"></div>
                                        <span>Provide reminders for important tasks or events</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-[8px] shrink-0"></div>
                                        <span>Maintain familiar routines</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-[8px] shrink-0"></div>
                                        <span>Help with daily tasks, such as cooking, errands, light housekeeping, and transportation</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-[8px] shrink-0"></div>
                                        <span>Provide social interaction and companionship</span>
                                    </li>
                                </ul>
                                <div className="w-full border-b border-dashed border-gray-300 mt-10"></div>
                            </div>

                            {/* Middle Stage */}
                            <div className="relative">
                                <div className="absolute -left-[45px] top-1 w-6 h-6 rounded-full bg-[#b5d7e0] border-4 border-white"></div>
                                <h3 className="text-[20px] font-bold text-[#3b7ea1] mb-4">Middle Stage</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-[8px] shrink-0"></div>
                                        <span>Assist with personal care, such as grooming and bathing</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-[8px] shrink-0"></div>
                                        <span>Help cope with changes in behavior, such as wandering or agitation</span>
                                    </li>
                                </ul>
                                <div className="w-full border-b border-dashed border-gray-300 mt-10"></div>
                            </div>

                            {/* Late Stage */}
                            <div className="relative">
                                <div className="absolute -left-[45px] top-1 w-6 h-6 rounded-full bg-[#b5d7e0] border-4 border-white"></div>
                                <h3 className="text-[20px] font-bold text-[#3b7ea1] mb-4">Late Stage</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-[8px] shrink-0"></div>
                                        <span>Provide personal care services, such as grooming, feeding, and bathing</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-[8px] shrink-0"></div>
                                        <span>Observe for changes in needs that may trigger behaviors</span>
                                    </li>
                                </ul>
                                <div className="w-full border-b border-dashed border-gray-300 mt-10"></div>
                            </div>

                            {/* Family Care */}
                            <div className="relative">
                                <div className="absolute -left-[45px] top-1 w-6 h-6 rounded-full bg-[#b5d7e0] border-4 border-white"></div>
                                <h3 className="text-[20px] font-bold text-[#3b7ea1] mb-4">Family Care</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-[8px] shrink-0"></div>
                                        <span>Lower your stress and anxiety</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-[8px] shrink-0"></div>
                                        <span>Give you an extra pair of hands</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-[8px] shrink-0"></div>
                                        <span>Allow you time to work and exercise</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-[8px] shrink-0"></div>
                                        <span>Prevent family <Link href="/articles" className="underline text-[#3b7ea1] hover:text-[#043b67]">caregiver burnout</Link></span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <p className="mt-12 font-bold text-[16px] text-center w-full">
                            Don't miss: <Link href="/articles" className="underline text-[#3b7ea1] hover:text-[#043b67] font-normal">Understanding the Stages of Alzheimer's-Related Memory Loss</Link>
                        </p>

                    </div>
                </div>
            </div>

            <GetStartedInner />
            <FAQAccordion faqs={faqs} />
            <RelatedArticles articles={relatedArticles} />

            <Newsletter />
            <FloatingGetStarted />
        </>
    );
}
