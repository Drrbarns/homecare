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
    title: "Expert Dementia Care at Home",
    description: "Guidance from a professional caregiver can help your family find the right balance of in-home memory and personal care to adapt to this unpredictable illness.",
};

export default function DementiaCarePage() {
    const faqs = [
        {
            question: "Can You Work With My Loved One in a Dementia Care Facility?",
            answer: "Yes, our caregivers can provide supplemental care and companionship for seniors living in assisted living facilities or memory care communities."
        },
        {
            question: "How Will You Get to Know My Loved One?",
            answer: "We offer a free, comprehensive in-home consultation to learn about your loved one's needs, personality, and preferences. This allows us to make a compatible caregiver match."
        },
        {
            question: "What if My Loved One's Memory Care Needs Change?",
            answer: "Our care plans are flexible. We closely monitor your loved one's condition and can adjust the level of care and services as their dementia progresses."
        },
        {
            question: "Do Caregivers Help With Medication Reminders?",
            answer: "Yes, our caregivers can provide medication reminders to ensure your loved one takes their prescriptions at the correct times."
        },
        {
            question: "Do You Involve Family Members in the Dementia Care Process?",
            answer: "Absolutely. We believe in partnering with families and providing regular updates on your loved one's well-being and any changes in their condition."
        }
    ];

    const relatedArticles = [
        {
            title: "Dementia and Wandering: How to Support Your Aging Loved One",
            imageSrc: "/images/Whisk_05c25109353fe2d88f1437b47bfffa90dr.jpeg",
            imageAlt: "Caregiver supporting senior",
            href: "/articles/dementia-and-wandering"
        },
        {
            title: "Tips for Managing Dementia and Anger in a Senior Loved One",
            imageSrc: "/images/Whisk_d19aa31616742ff887b4b96855587ca2dr.jpeg",
            imageAlt: "Senior man looking stressed with caregiver",
            href: "/articles/managing-dementia-and-anger"
        },
        {
            title: "How Home Care Changes Between Alzheimer's and Dementia",
            imageSrc: "/images/Whisk_357ee580e5147ee96a948b18c1f186b4dr.jpeg",
            imageAlt: "Caregiver and senior looking at photo album",
            href: "/articles/how-home-care-changes-between-alzheimers-and-dementia"
        }
    ];

    return (
        <>
            <InnerPageHero 
                title="Dementia Care"
                description="Guidance from a professional caregiver can help your family find the right balance of in-home memory and personal care to adapt to this unpredictable illness."
                imageSrc="/images/Whisk_296661e1eecd735af5f4729a6c9cbca6dr.jpeg"
                imageAlt="Caregiver and senior walking near door"
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
                        
                        {/* Intro Block with Image */}
                        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start mb-16">
                            <div className="w-full md:w-[35%] shrink-0">
                                <div className="relative h-[420px] w-full rounded-[8px] overflow-hidden">
                                    <Image
                                        src="/images/Whisk_05c25109353fe2d88f1437b47bfffa90dr.jpeg"
                                        alt="Caregiver helping senior woman with folding towels"
                                        fill
                                        className="object-cover object-center"
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-[65%] pt-2">
                               <p className="mb-5 text-[15.5px]">
                                   MidAid <Link href="/careers" className="underline text-[#3b7ea1] hover:text-[#043b67]">caregivers</Link> specializing in dementia and <Link href="/alzheimers-care" className="underline text-[#3b7ea1] hover:text-[#043b67]">Alzheimer's care</Link> will create a comprehensive and personalized memory care plan for your senior. Our dedicated and compassionate caregivers will use their training and experience to foster a sense of security for your loved one and family. They'll also maintain familiar routines and prioritize your aging loved one's dignity and respect.
                               </p>
                               <p className="text-[15.5px]">
                                   Your loved one will receive a customized care plan tailored to their dementia type that is consistent with their diagnosis and makes their daily life as comfortable and enjoyable as possible.
                               </p>
                            </div>
                        </div>

                        {/* Different Dementia Types Section */}
                        <h2 className="text-[26px] md:text-[32px] font-bold text-[#043b67] mb-6 font-sans tracking-tight">
                            Different Dementia Types and Care Services
                        </h2>
                        <p className="mb-10 text-[15.5px]">
                            Understanding the different <Link href="/articles" className="underline text-[#3b7ea1] hover:text-[#043b67]">types of dementia</Link> is essential for providing appropriate and personalized care. In-home care services should be tailored to the specific needs of each dementia type, encompassing daily living assistance and physical and emotional support to enhance your loved one's well-being and quality of life.
                        </p>

                        {/* Two Columns: Types and Services */}
                        <div className="flex flex-col md:flex-row gap-6 mb-16">
                            {/* Left Column: Types of Dementia */}
                            <div className="flex-1 bg-white border border-gray-200 rounded-[8px] p-8 md:p-10 shadow-[0_2px_15px_rgba(0,0,0,0.03)]">
                                <h3 className="text-[22px] font-bold text-[#043b67] mb-6">Types of Dementia</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-2 shrink-0"></div>
                                        <Link href="/alzheimers-care" className="text-[#3b7ea1] hover:text-[#043b67] underline font-bold">Alzheimer's disease</Link>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-2 shrink-0"></div>
                                        <span>Creutzfeldt-Jakob disease</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-2 shrink-0"></div>
                                        <span>Frontotemporal dementia</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-2 shrink-0"></div>
                                        <span>Huntington's disease</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-2 shrink-0"></div>
                                        <Link href="#" className="text-[#3b7ea1] hover:text-[#043b67] underline font-bold">Lewy body dementia</Link>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-2 shrink-0"></div>
                                        <span>Parkinson's disease dementia</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-2 shrink-0"></div>
                                        <span>Vascular dementia</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-2 shrink-0"></div>
                                        <span>Early-onset dementia</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Right Column: Available Services */}
                            <div className="flex-1 bg-white border border-gray-200 rounded-[8px] p-8 md:p-10 shadow-[0_2px_15px_rgba(0,0,0,0.03)]">
                                <h3 className="text-[22px] font-bold text-[#043b67] mb-6">Available Services</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-2 shrink-0"></div>
                                        <span>Help getting dressed</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-2 shrink-0"></div>
                                        <span>Hygiene assistance</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-2 shrink-0"></div>
                                        <span>Light housekeeping</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-2 shrink-0"></div>
                                        <span>Medication reminders</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-2 shrink-0"></div>
                                        <span>Preparing meals</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-2 shrink-0"></div>
                                        <span>Transportation to appointments</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-2 shrink-0"></div>
                                        <span>Walking and mobility assistance</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-2 shrink-0"></div>
                                        <span>Wandering prevention</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* We will add the new blue Get Started block here */}
                        <div className="mx-[-16px] lg:mx-0">
                            <GetStartedInner 
                                title="Get Started with In-Home Dementia Care"
                                description1="We make it easy to find the appropriate services and the right dementia care provider for your loved one."
                                description2={null}
                                backgroundColor="#043b67"
                                layout="vertical"
                            />
                        </div>

                    </div>
                </div>
            </div>

            <FAQAccordion faqs={faqs} />
            <RelatedArticles articles={relatedArticles} />

            <Newsletter />
            <FloatingGetStarted />
        </>
    );
}
