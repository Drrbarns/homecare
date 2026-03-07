import Image from "next/image";
import Link from "next/link";
import { InnerPageHero } from "@/components/shared/InnerPageHero";
import { InnerPageSidebar } from "@/components/layout/sidebar/InnerPageSidebar";
import { FloatingGetStarted } from "@/components/layout/FloatingGetStarted";
import { Newsletter } from "@/components/marketing/Newsletter";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { RelatedArticles } from "@/components/shared/RelatedArticles";

export const metadata = {
    title: "Transition to Home Care | Ready-Set-Go Home",
    description: "Recovery after a hospital stay or surgical procedure is an important time for seniors. Professional home care support can provide added safety, comfort, and a smoother return to everyday life.",
};

export default function TransitionHomeCarePage() {
    const faqs = [
        {
            question: "What Causes Hospital Readmission?",
            answer: "Common causes include difficulty managing medications, lack of follow-up care, falls or injuries at home, and inability to adhere to dietary or lifestyle changes prescribed upon discharge."
        },
        {
            question: "How Does \"Ready, Set, Go Home\" Work?",
            answer: "Our program provides a comprehensive approach, starting with support at the hospital before discharge, continuing with in-home care to manage daily tasks, and utilizing our office staff to coordinate care and monitor progress."
        },
        {
            question: "How Can Family Members Support a Loved One's Recovery?",
            answer: "Family members can support recovery by staying involved in the discharge planning, ensuring the home is safe, helping with medication management, and partnering with professional caregivers to share the workload."
        },
        {
            question: "What Are Signs a Loved One's Recovery Needs Additional Assistance at Home?",
            answer: "Signs include confusion about medications, missed follow-up appointments, difficulty with personal hygiene, unexpected weight loss, or an increase in falls or near-misses."
        },
        {
            question: "How Can MidAid Help After Hospitalization?",
            answer: "We provide non-medical support such as personal care, meal preparation, medication reminders, and mobility assistance, helping to create a safe environment that promotes healing and reduces the risk of readmission."
        }
    ];

    const relatedArticles = [
        {
            title: "Gentle Foods for Seniors After Abdominal Surgery",
            imageSrc: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=600&auto=format&fit=crop",
            imageAlt: "Caregiver preparing food with senior",
            href: "/articles/gentle-foods-for-seniors-after-abdominal-surgery"
        },
        {
            title: "Plan a Smooth Hospital Discharge and Return Home for Seniors",
            imageSrc: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=600&auto=format&fit=crop",
            imageAlt: "Senior in wheelchair with doctor",
            href: "/articles/plan-smooth-hospital-discharge-return-home"
        },
        {
            title: "How In-Home Care Can Support Stroke Recovery",
            imageSrc: "https://images.unsplash.com/photo-1581579205466-e4304e287010?q=80&w=600&auto=format&fit=crop",
            imageAlt: "Caregiver helping senior with walker",
            href: "/articles/how-in-home-care-can-support-stroke-recovery"
        }
    ];

    return (
        <>
            <InnerPageHero
                title="Transition to Home Care"
                description="Recovery after a hospital stay or surgical procedure is an important time for seniors. Professional home care support can provide added safety, comfort, and a smoother return to everyday life."
                imageSrc="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=1200&auto=format&fit=crop"
                imageAlt="Caregiver helping senior woman get into a car"
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
                        
                        <p className="mb-8 text-[15.5px]">
                            Unfortunately, readmission to the hospital—shortly after discharge—remains an unfortunate consequence for many seniors. Effective discharge planning and ongoing support at home are essential to reducing the likelihood of hospital readmission.
                        </p>

                        <div className="flex flex-col md:flex-row gap-8 mb-12">
                            <div className="w-full md:w-[35%]">
                                <div className="relative h-[250px] w-full rounded-[4px] overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1581579205466-e4304e287010?q=80&w=800&auto=format&fit=crop"
                                        alt="Caregiver cleaning coffee table while senior sits on couch"
                                        fill
                                        className="object-cover object-center"
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-[65%] pt-2">
                                <p className="mb-6 text-[15.5px]">
                                    As your aging loved one attempts to transition to their home from the hospital, you might need a helping hand to manage discharge instructions and keep up with regular senior care duties.
                                </p>
                                <p className="text-[15.5px]">
                                    MidAid can help!
                                </p>
                            </div>
                        </div>

                        {/* Supportive In-Home Care Section with Staggered Images */}
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-16">
                            <div className="w-full lg:w-[55%]">
                                <h2 className="text-[26px] md:text-[32px] font-bold text-[#043b67] mb-6 font-sans tracking-tight">
                                    Supportive In-Home Care
                                </h2>
                                <p className="mb-6 text-[15.5px]">
                                    MidAid created a "Ready, Set, Go Home" transitional program to provide non-medical <Link href="/home-care-services" className="underline text-[#3b7ea1] hover:text-[#043b67]">home care</Link> support after your senior leaves the hospital or a rehabilitation facility.
                                </p>
                                <p className="mb-6 text-[15.5px]">
                                    Our professional <Link href="/careers" className="underline text-[#3b7ea1] hover:text-[#043b67]">caregivers</Link> can help reduce your loved one's risk of readmission due to preventable mishaps at home—and give you peace of mind during their recovery.
                                </p>
                                <p className="text-[15.5px]">
                                    MidAid designed the "Ready, Set, Go Home" program to help seniors get the best outcomes after hospitalization by providing essential, non-medical <Link href="/personal-care" className="underline text-[#3b7ea1] hover:text-[#043b67]">personal care</Link> services:
                                </p>
                            </div>
                            <div className="w-full lg:w-[45%] relative min-h-[400px] hidden md:block">
                                {/* Top Left Image */}
                                <div className="absolute top-0 left-0 w-[60%] h-[260px] rounded-[4px] overflow-hidden shadow-lg z-10">
                                    <Image
                                        src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=600&auto=format&fit=crop"
                                        alt="Caregiver helping senior man walk in hallway"
                                        fill
                                        className="object-cover object-center"
                                    />
                                </div>
                                {/* Bottom Right Image */}
                                <div className="absolute top-[80px] right-0 w-[55%] h-[320px] rounded-[4px] overflow-hidden shadow-lg z-0">
                                    <Image
                                        src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=600&auto=format&fit=crop"
                                        alt="Smiling caregiver holding a bag of groceries"
                                        fill
                                        className="object-cover object-center"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Services Two-Column Boxes */}
                        <div className="flex flex-col md:flex-row gap-6 mb-12">
                            {/* Box 1 */}
                            <div className="flex-1 bg-white border border-[#e5e7eb] shadow-[0_2px_15px_rgba(0,0,0,0.03)] p-8 md:p-10 rounded-[4px]">
                                <h3 className="text-[20px] font-bold text-[#043b67] mb-6">In Home Services</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333]">Bathing</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333]">Dressing</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333]">Mobility and transfers</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333]">Personal Grooming</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333]">Toileting</span>
                                    </li>
                                </ul>
                            </div>
                            
                            {/* Box 2 */}
                            <div className="flex-1 bg-white border border-[#e5e7eb] shadow-[0_2px_15px_rgba(0,0,0,0.03)] p-8 md:p-10 rounded-[4px]">
                                <h3 className="text-[20px] font-bold text-[#043b67] mb-6">Personal Care Services</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333]">Companionship to reduce <Link href="/articles" className="underline text-[#3b7ea1] hover:text-[#043b67]">senior isolation</Link></span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333]">Errands</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333]">Light housekeeping</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333]">Meal Preparation</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333]">Medication reminders</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Closing Paragraphs */}
                        <p className="mb-6 text-[15.5px]">
                            Our caregivers will keep a watchful eye on your aging loved one during recovery. Identifying issues early—particularly within the first two to seven days after hospitalization—will enable you to promptly follow up with your senior and their primary care provider—reducing the risk of a hospitalization or emergency room visit.
                        </p>
                        <p className="mb-6 text-[15.5px]">
                            In addition to monitoring their condition, our non-medical caregivers assist with daily tasks to promote a smooth and comfortable recovery at home. By providing companionship and emotional support, we'll help reduce stress and anxiety, allowing your loved one to focus on healing.
                        </p>
                        <p className="mb-6 text-[15.5px]">
                            We'll also help coordinate care with family members and other healthcare professionals, ensuring your loved one's needs are consistently met throughout the recovery process.
                        </p>
                        <p className="mb-0 text-[15.5px]">
                            Our goal is to create a safe and stable environment, giving you peace of mind knowing they are receiving attentive care during this critical period.
                        </p>

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
