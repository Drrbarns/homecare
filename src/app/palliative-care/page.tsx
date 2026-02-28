import Image from "next/image";
import Link from "next/link";
import { InnerPageHero } from "@/components/shared/InnerPageHero";
import { InnerPageSidebar } from "@/components/layout/sidebar/InnerPageSidebar";
import { FloatingGetStarted } from "@/components/layout/FloatingGetStarted";
import { Newsletter } from "@/components/marketing/Newsletter";
import { FAQAccordion } from "@/components/shared/FAQAccordion";

export const metadata = {
    title: "Palliative In-Home Care for Seniors",
    description: "Provide comforting, supportive care that focuses on the physical, emotional, and spiritual needs of seniors with chronic conditions.",
};

export default function PalliativeCarePage() {
    const faqs = [
        {
            question: "What is Palliative Care?",
            answer: "Palliative care is specialized, non-medical support focused on providing relief from the symptoms and stress of a serious illness or chronic condition. The goal is to improve quality of life for both the patient and the family."
        },
        {
            question: "How is Palliative Care Different From Hospice Care?",
            answer: "Palliative care can be provided at any stage of a serious illness, even while a patient is receiving curative treatments. Hospice care is specifically for those nearing the end of life when curative treatments have stopped."
        },
        {
            question: "Who Can Benefit From Palliative Care?",
            answer: "Anyone living with a serious, chronic, or life-limiting illness such as cancer, heart failure, Alzheimer's, Parkinson's, ALS, or respiratory disease can benefit from the holistic support of palliative care."
        },
        {
            question: "Does Visiting Angels Provide Medical Palliative Care?",
            answer: "No, Visiting Angels provides non-medical palliative care. Our focus is on comfort, companionship, personal care assistance, and emotional support. We work alongside your medical team to ensure comprehensive well-being."
        }
    ];

    return (
        <>
            <InnerPageHero
                title="Palliative Care"
                description="A non-medical approach supporting your loved one's physical, emotional, social, and spiritual well-being."
                imageSrc="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1200&auto=format&fit=crop"
                imageAlt="Caregiver and senior smiling together"
                showPlayButton={false}
            />

            <div className="container mx-auto px-5 sm:px-6 lg:px-6 xl:px-8 max-w-[1440px] py-10 sm:py-16 lg:py-24">
                <div className="flex flex-col lg:flex-row gap-12 xl:gap-16">
                    {/* Left Sidebar */}
                    <div className="w-full lg:w-[320px] shrink-0">
                        <InnerPageSidebar />
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 w-full text-[15px] md:text-[16px] text-[#333333] leading-[1.7] font-sans">
                        <h2 className="text-[26px] md:text-[32px] font-bold text-[#043b67] mb-6 font-sans tracking-tight">
                            Comfort and Peace of Mind for Your Loved One with a Chronic Condition
                        </h2>
                        <p className="mb-6 text-[15.5px]">
                            Visiting Angels excels in non-medical palliative care by providing companionship, emotional support, and assistance with daily activities such as <Link href="/home-care-services#personal" className="underline text-[#3b7ea1] hover:text-[#043b67]">personal care</Link>, meal preparation, and light housekeeping. Our caregivers will offer respite for your family members, ensuring your loved one receives a <Link href="#" className="underline text-[#3b7ea1] hover:text-[#043b67]">holistic approach to palliative care</Link> that promotes comfort and dignity during challenging times.
                        </p>
                        <p className="mb-12 text-[15.5px]">
                            Our personalized approach emphasizes companionship and meaningful engagement, fostering a supportive environment that enhances your loved one's overall well-being.
                        </p>

                        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start mb-12">
                            <div className="w-full md:w-[60%] pt-2">
                                <h2 className="text-[26px] md:text-[32px] font-bold text-[#043b67] mb-6 font-sans tracking-tight">
                                    In-Home Services for Chronic Conditions
                                </h2>
                                <p className="mb-6 text-[15.5px]">
                                    Palliative care is often associated with hospice or end-of-life care. However, there are key <Link href="#" className="underline text-[#3b7ea1] hover:text-[#043b67]">differences between palliative and hospice care</Link>. Hospice delivers services to those with limited life expectancy, while palliative care is provided any time after the diagnosis of a chronic illness — even during treatment.
                                </p>
                                <p className="mb-6 text-[15.5px]">
                                    While both types of care focus on comfort, palliative care takes a broader approach by supporting individuals at any stage of a serious illness. It emphasizes improving quality of life by addressing physical, emotional, social, and spiritual needs—not just symptom management. Families also benefit from palliative care services through guidance, resources, and compassionate support.
                                </p>
                                <p className="text-[15.5px]">
                                    At Visiting Angels, we treat palliative care as a distinct type of care. Our Certified Palliative Care program follows a comforting, holistic approach to address a range of essential non-medical services.
                                </p>
                            </div>
                            <div className="w-full md:w-[40%] shrink-0">
                                <div className="relative h-[480px] w-full rounded-[8px] overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=800&auto=format&fit=crop"
                                        alt="Caregiver helping senior woman with walking"
                                        fill
                                        className="object-cover object-center"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Four Pillars Grid */}
                        {/* Four Pillars Grid */}
                        <div className="grid md:grid-cols-2 gap-6 mb-16">
                            {/* Physical */}
                            <div className="bg-white border-[1.5px] border-gray-100 rounded-[8px] p-8 shadow-[0_2px_15px_rgba(0,0,0,0.03)] relative overflow-hidden">
                                <div className="absolute top-6 right-6 text-[#a74c5d] opacity-90">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M6 18h12M6 6h12M12 2v20M2 12h20M17.5 6.5l-11 11M6.5 6.5l11 11"/>
                                    </svg>
                                </div>
                                <h3 className="text-[20px] font-bold text-[#043b67] mb-4">Physical</h3>
                                <p className="text-[15px] text-[#333333] leading-relaxed pr-8">
                                    Focus on physical concerns and supportive care to provide comfort.
                                </p>
                            </div>

                            {/* Emotional */}
                            <div className="bg-white border-[1.5px] border-gray-100 rounded-[8px] p-8 shadow-[0_2px_15px_rgba(0,0,0,0.03)] relative overflow-hidden">
                                <div className="absolute top-6 right-6 text-[#a74c5d] opacity-90">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10"/>
                                        <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                                        <line x1="9" y1="9" x2="9.01" y2="9"/>
                                        <line x1="15" y1="9" x2="15.01" y2="9"/>
                                    </svg>
                                </div>
                                <h3 className="text-[20px] font-bold text-[#043b67] mb-4">Emotional</h3>
                                <p className="text-[15px] text-[#333333] leading-relaxed pr-8">
                                    Instill positivity and a sense of purpose.
                                </p>
                            </div>

                            {/* Social */}
                            <div className="bg-white border-[1.5px] border-gray-100 rounded-[8px] p-8 shadow-[0_2px_15px_rgba(0,0,0,0.03)] relative overflow-hidden">
                                <div className="absolute top-6 right-6 text-[#a74c5d] opacity-90">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                                    </svg>
                                </div>
                                <h3 className="text-[20px] font-bold text-[#043b67] mb-4">Social</h3>
                                <p className="text-[15px] text-[#333333] leading-relaxed pr-8">
                                    Develop companionship and provide meaningful conversation to relieve loneliness and isolation.
                                </p>
                            </div>

                            {/* Spiritual */}
                            <div className="bg-white border-[1.5px] border-gray-100 rounded-[8px] p-8 shadow-[0_2px_15px_rgba(0,0,0,0.03)] relative overflow-hidden">
                                <div className="absolute top-6 right-6 text-[#a74c5d] opacity-90">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                                        <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/>
                                        <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
                                    </svg>
                                </div>
                                <h3 className="text-[20px] font-bold text-[#043b67] mb-4">Spiritual</h3>
                                <p className="text-[15px] text-[#333333] leading-relaxed pr-8">
                                    Boost the overall sense of inner calm and purpose while helping families find peace of mind during a challenging time.
                                </p>
                            </div>
                        </div>

                        {/* CTA Banner Component */}
                        <div className="relative rounded-[8px] overflow-hidden text-white mb-8" style={{ backgroundColor: '#5c355f' }}>
                            {/* Wavy Background Pattern (simulated with SVG) */}
                            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-overlay">
                                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <pattern id="wave" x="0" y="0" width="100" height="20" patternUnits="userSpaceOnUse">
                                            <path d="M0 10 Q 25 20, 50 10 T 100 10" fill="none" stroke="white" strokeWidth="2" />
                                        </pattern>
                                    </defs>
                                    <rect width="100%" height="100%" fill="url(#wave)" />
                                </svg>
                            </div>

                            <div className="relative z-10 flex flex-col md:flex-row items-stretch min-h-[400px]">
                                <div className="flex-1 p-8 md:p-12 lg:p-14 flex flex-col justify-center">
                                    <h3 className="text-[28px] md:text-[32px] font-bold mb-6 font-sans leading-tight max-w-[400px]">
                                        Getting Started with Non-Medical Palliative Care
                                    </h3>
                                    <p className="text-[15px] mb-6 leading-relaxed text-white/90">
                                        While our caregivers do not provide medical support, we will watch over your loved one at home, in an assisted living facility, or in a long-term care residence. In addition to dedicated <Link href="/home-care-services" className="underline hover:text-white transition-colors font-semibold">home care</Link> services, we also offer a customized program for <Link href="/end-of-life-care" className="underline hover:text-white transition-colors font-semibold">end-of-life care</Link>.
                                    </p>
                                    <p className="text-[15px] mb-10 leading-relaxed text-white/90">
                                        If you'd like to learn more, or if you're ready to get started, contact your local Visiting Angels office today.
                                    </p>
                                    <div>
                                        <Link
                                            href="/office-locator"
                                            className="inline-block transition-opacity hover:opacity-90 rounded-[4px] px-8 py-[14px] font-bold text-[15px]"
                                            style={{ backgroundColor: '#dca626', color: '#000000' }}
                                        >
                                            View Our Office Locations
                                        </Link>
                                    </div>
                                </div>
                                
                                {/* Right Side Image - Absolute positioned on desktop to cover right side */}
                                <div className="w-full md:w-[40%] md:absolute md:right-0 md:top-0 md:bottom-0 h-[300px] md:h-auto overflow-hidden relative">
                                    <Image
                                        src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=800&auto=format&fit=crop"
                                        alt="Caregiver helping senior man with his shoes"
                                        fill
                                        className="object-cover object-center"
                                    />
                                    {/* Gradient overlay to blend image edge with purple background on desktop */}
                                    <div className="hidden md:block absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#5c355f] to-transparent z-10" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <FAQAccordion title="Frequently Asked Questions About Palliative Care" faqs={faqs} />
            
            <Newsletter />
            <FloatingGetStarted />
        </>
    );
}
