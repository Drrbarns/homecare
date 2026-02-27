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
    title: "Parkinson's Disease Care at Home",
    description: "Professional, non-medical in-home care to help seniors with Parkinson's disease live comfortably and safely.",
};

export default function ParkinsonsCarePage() {
    const faqs = [
        {
            question: "How Much Does Parkinson's Home Care Cost?",
            answer: "The cost of care depends on the level of assistance required and the number of hours per week. We offer customizable care plans to fit your family's needs and budget. We provide a free consultation to discuss costs based on your specific situation."
        },
        {
            question: "Can You Provide 24-Hour Care for Parkinson's?",
            answer: "Yes. For advanced stages of Parkinson's, we offer 24-hour home care and live-in care to ensure continuous safety, monitoring, and assistance."
        },
        {
            question: "Are Caregivers Trained for Parkinson's Specific Needs?",
            answer: "Our caregivers are experienced in helping seniors with mobility issues, fall prevention, and managing daily activities that become difficult with Parkinson's, such as bathing, dressing, and eating."
        },
        {
            question: "What If My Loved One Needs Medical Care?",
            answer: "Visiting Angels provides non-medical care. However, we frequently work alongside home health nurses, physical therapists, and hospice providers to ensure your loved one has a comprehensive care team."
        }
    ];

    const relatedArticles = [
        {
            title: "Parkinson's Disease Care: Providing Help at Home",
            imageSrc: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=600&auto=format&fit=crop",
            imageAlt: "Caregiver helping senior",
            href: "/articles/parkinsons-disease-care-providing-help-at-home"
        },
        {
            title: "Nutrition and Parkinson's Disease: A Caregiver's Guide",
            imageSrc: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=600&auto=format&fit=crop",
            imageAlt: "Preparing food",
            href: "/articles/nutrition-and-parkinsons-disease"
        },
        {
            title: "Managing the Stages of Parkinson's Disease",
            imageSrc: "https://images.unsplash.com/photo-1581579205466-e4304e287010?q=80&w=600&auto=format&fit=crop",
            imageAlt: "Caregiver talking with senior",
            href: "/articles/managing-the-stages-of-parkinsons-disease"
        }
    ];

    return (
        <>
            <InnerPageHero
                title="Parkinson's Care"
                description="Dedicated, in-home support that helps people with Parkinson's disease live safely, comfortably, and independently at home."
                imageSrc="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=1200&auto=format&fit=crop"
                imageAlt="Caregiver pushing senior in wheelchair outdoors"
                showPlayButton={false}
            />

            <div className="container mx-auto px-4 lg:px-6 xl:px-8 max-w-[1440px] py-16 lg:py-24">
                <div className="flex flex-col lg:flex-row gap-12 xl:gap-16">
                    {/* Left Sidebar */}
                    <div className="w-full lg:w-[320px] shrink-0">
                        <InnerPageSidebar />
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 w-full text-[15px] md:text-[16px] text-[#333333] leading-[1.7] font-sans">
                        <p className="mb-6 text-[15.5px]">
                            Parkinson's disease is a progressive neurological condition that can affect mobility, balance, coordination, speech, and overall stamina. Doing everyday tasks such as grooming or bathing may take longer or require assistance. Needs tend to change gradually, and flexible support makes a meaningful difference for families.
                        </p>
                        <p className="mb-6 text-[15.5px]">
                            Living with Parkinson's disease brings changes that can affect movement, energy, communication, and daily routines. As symptoms evolve, families benefit from dependable in-home assistance.
                        </p>
                        <p className="mb-12 text-[15.5px]">
                            Visiting Angels provides personalized, non-medical Parkinson's care—offering familiarity, flexibility, and peace of mind for clients and their loved ones.
                        </p>

                        <h2 className="text-[26px] md:text-[32px] font-bold text-[#043b67] mb-6 font-sans tracking-tight">
                            What Is Parkinson's Care?
                        </h2>
                        <p className="mb-6 text-[15.5px]">
                            Parkinson's care from Visiting Angels is non-medical, in-home assistance that helps seniors continue living safely and comfortably in familiar surroundings. Our caregivers provide respectful support that honors your loved one's independence and preferences.
                        </p>
                        <p className="mb-6 text-[15.5px]">
                            As Parkinson's symptoms evolve, your loved one's care plan can evolve too. This ensures they always receive the right level of support, including:
                        </p>

                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start">
                                <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-2 shrink-0"></div>
                                <span className="text-[15.5px]">Assistance with <Link href="#" className="underline text-[#3b7ea1] hover:text-[#043b67]">mobility support and transfers</Link></span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-2 shrink-0"></div>
                                <span className="text-[15.5px]">Help with <Link href="/home-care-services#personal" className="underline text-[#3b7ea1] hover:text-[#043b67]">daily routines and personal care</Link></span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-2 shrink-0"></div>
                                <span className="text-[15.5px]"><Link href="#" className="underline text-[#3b7ea1] hover:text-[#043b67]">Fall prevention</Link> and home safety support</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-2 shrink-0"></div>
                                <span className="text-[15.5px]"><Link href="#" className="underline text-[#3b7ea1] hover:text-[#043b67]">Medication reminders</Link></span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-2 shrink-0"></div>
                                <span className="text-[15.5px]">Respect for independence, dignity, and personal preferences</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-2 shrink-0"></div>
                                <span className="text-[15.5px]">Familiar routines that help reduce frustration and anxiety</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 mt-2 shrink-0"></div>
                                <span className="text-[15.5px]"><Link href="/elderly-companion-care" className="underline text-[#3b7ea1] hover:text-[#043b67]">Companion care</Link> and emotional reassurance</span>
                            </li>
                        </ul>

                        <p className="mb-16 text-[15.5px]">
                            No two people experience Parkinson's in the same way. Our goal is to support daily life so your loved one can enjoy their independence and keep doing what brings them joy.
                        </p>

                        <h2 className="text-[26px] md:text-[32px] font-bold text-[#043b67] mb-6 font-sans tracking-tight">
                            Why Choose Visiting Angels for Parkinson's Care?
                        </h2>
                        <p className="mb-6 text-[15.5px]">
                            When it comes to Parkinson's care, experience and consistency matter. Families across the country trust Visiting Angels for compassionate home care. Our professional caregivers honor every client relationship with patience, dignity, and trust.
                        </p>
                        
                        <ul className="space-y-6 mb-16 pl-5" style={{ listStyleType: 'disc' }}>
                            <li className="pl-2">
                                <strong className="font-bold text-[#333333] text-[15.5px]">Personalized Care Plans</strong>
                                <p className="mt-1 text-[15.5px]">Together, we can <Link href="/home-care-services" className="underline text-[#3b7ea1] hover:text-[#043b67]">create a customized care plan</Link> tailored to your loved one's unique needs, preferences, and routines. As symptoms change, the plan can be adjusted quickly and easily.</p>
                            </li>
                            <li className="pl-2">
                                <strong className="font-bold text-[#333333] text-[15.5px]">Enhanced Training</strong>
                                <p className="mt-1 text-[15.5px]">Parkinson's can cause challenges with movement, <Link href="#" className="underline text-[#3b7ea1] hover:text-[#043b67]">communication</Link>, energy, and focus. Through Visiting Angels University, caregivers can get extra training to better support clients who have progressive conditions.</p>
                            </li>
                            <li className="pl-2">
                                <strong className="font-bold text-[#333333] text-[15.5px]">Oversight & Communication</strong>
                                <p className="mt-1 text-[15.5px]">Open conversation with families provides peace of mind and <Link href="#" className="underline text-[#3b7ea1] hover:text-[#043b67]">ongoing care plan coordination</Link>. If a caregiver or family member notices a change, your local office will reach out promptly to discuss whether it makes sense to adjust any services.</p>
                            </li>
                            <li className="pl-2">
                                <strong className="font-bold text-[#333333] text-[15.5px]">Flexible, Long-Term Support</strong>
                                <p className="mt-1 text-[15.5px]">Parkinson's is a long-term condition, and <Link href="#" className="underline text-[#3b7ea1] hover:text-[#043b67]">care needs may increase over time</Link>. Visiting Angels makes it simple to scale up or down, with services that range from a few hours of weekly assistance to overnight care or 24/7 support.</p>
                            </li>
                        </ul>

                        <div className="mx-[-16px] lg:mx-0">
                            <GetStartedInner
                                title="Get Started with Parkinson's Home Care"
                                description1={
                                    <>
                                        Deciding to work with a professional caregiver shouldn't feel overwhelming.<br className="hidden md:block"/><br className="hidden md:block"/>
                                        Our team is here to guide you through each step with clarity and compassion.
                                    </>
                                }
                                description2={null}
                                backgroundColor="#043b67"
                                layout="horizontal"
                            />
                        </div>

                        {/* Contact CTA Block */}
                        <div className="mt-16 flex flex-col md:flex-row gap-8 lg:gap-12 items-center justify-between mb-16">
                            <div className="flex-1 max-w-[600px]">
                                <h3 className="text-[26px] md:text-[32px] font-bold text-[#043b67] mb-6 font-sans tracking-tight">
                                    Contact Us Today
                                </h3>
                                <p className="mb-6 text-[15.5px] leading-relaxed">
                                    Don't face the challenges of Parkinson's care alone. Contact Visiting Angels to learn how our specialized Parkinson's home care services can support your loved one and give you confidence they are receiving attentive, compassionate care tailored to their evolving needs.
                                </p>
                                <p className="text-[15.5px]">
                                    Call <a href="tel:800-365-4189" className="text-[#3b7ea1] hover:underline">800-365-4189</a> or <Link href="/contact-us" className="text-[#3b7ea1] hover:underline">Complete Our Online Form</Link> to schedule a free in-home consultation.
                                </p>
                            </div>
                            
                            <div className="w-full md:w-auto shrink-0 flex justify-center">
                                <div className="relative w-[280px] h-[280px] lg:w-[320px] lg:h-[320px] rounded-full overflow-hidden shadow-sm">
                                    <Image
                                        src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=600&auto=format&fit=crop"
                                        alt="Caregiver holding mirror for senior woman"
                                        fill
                                        className="object-cover object-center"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FAQAccordion title="Frequently Asked Questions Parkinson's Home Care" faqs={faqs} />
            <RelatedArticles articles={relatedArticles} />
            
            <Newsletter />
            <FloatingGetStarted />
        </>
    );
}
