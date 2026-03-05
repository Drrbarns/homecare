import Image from "next/image";
import Link from "next/link";
import { InnerPageHero } from "@/components/shared/InnerPageHero";
import { HomeCareInfoSidebar } from "@/components/layout/sidebar/HomeCareInfoSidebar";
import { FloatingGetStarted } from "@/components/layout/FloatingGetStarted";
import { Newsletter } from "@/components/marketing/Newsletter";
import { FAQAccordion } from "@/components/shared/FAQAccordion";

export const metadata = {
    title: "Veterans Benefits for Home Care",
    description: "As the number of aging veterans with chronic conditions grows, so does the need for affordable in-home senior care.",
};

export default function VeteransBenefitsPage() {
    const faqItems = [
        {
            question: "How Do Veterans Benefits Work?",
            answer: "Veterans benefits for home care are typically provided through the VA's Aid and Attendance or Housebound programs. These programs offer financial assistance to eligible veterans and surviving spouses who require the regular attendance of another person to assist in eating, bathing, dressing, and undressing or taking care of the needs of nature."
        },
        {
            question: "How Can Families Apply for Veteran Benefits?",
            answer: "Families can apply for veteran benefits by contacting their regional VA office or working with an accredited claims agent or Veterans Service Organization (VSO) representative. You will need to complete the appropriate VA forms and provide necessary documentation, such as discharge papers (DD-214) and medical evidence of the need for care."
        },
        {
            question: "When Should Seniors Apply for Veterans' Benefits?",
            answer: "It is recommended to apply as soon as the need for care arises, as the approval process can take several months. However, benefits are often retroactive to the date of application. If you anticipate a need for care in the near future, it's a good idea to start gathering the necessary documentation."
        },
        {
            question: "How Can Visiting Angels Help With Veterans Care at Home?",
            answer: "Visiting Angels works closely with veterans and their families to provide compassionate, personalized home care. We can assist with daily living activities, offer companionship, and help ensure a safe home environment. Our care coordinators can also help guide you through the process of utilizing your VA benefits to pay for our services."
        },
        {
            question: "How Can We Get Started with In-home Care?",
            answer: "Getting started is easy. Simply contact your local Visiting Angels office to schedule a free, no-obligation consultation. We will meet with you and your loved one to assess their needs, discuss scheduling and costs, and create a customized care plan."
        }
    ];

    const relatedArticles = [
        {
            title: "Honoring Our Heroes: In-Home Care for Veterans",
            image: "https://images.unsplash.com/photo-1584824486509-11459482c3ea?q=80&w=600&auto=format&fit=crop",
            link: "#"
        },
        {
            title: "Veterans Choice Program Can Be a Life Saver",
            image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=600&auto=format&fit=crop",
            link: "#"
        },
        {
            title: "Do Senior Veteran Loved Ones Need Help Sooner?",
            image: "https://images.unsplash.com/photo-1581579205466-e4304e287010?q=80&w=600&auto=format&fit=crop",
            link: "#"
        }
    ];

    return (
        <>
            {/* Note: In a real app, you might want to pass a specific prop to InnerPageHero to render a play button if it's a video banner */}
            <InnerPageHero
                title="Veterans Benefits for Home Care"
                description="As the number of aging veterans with chronic conditions grows, so does the need for affordable in-home senior care."
                imageSrc="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=1200&auto=format&fit=crop"
                imageAlt="Group of veterans and caregivers smiling"
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
                        
                        {/* Who Qualifies Section - Text Left, Image Right */}
                        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 mb-16">
                            <div className="w-full md:w-[65%] flex flex-col justify-start">
                                <h2 className="text-[26px] md:text-[30px] font-bold text-[#043b67] mb-6 font-sans tracking-tight leading-tight">
                                    Who Qualifies for Veterans Benefits?
                                </h2>
                                <p className="mb-6 text-[15.5px]">
                                    The good news is that many veterans from the U.S. military —
                                    including the Army, Marine Corps, Navy, Air Force, Space Force,
                                    or Coast Guard — are eligible for in-home supportive care
                                    benefits through the <a href="https://www.va.gov" target="_blank" rel="noopener noreferrer" className="underline text-[#3b7ea1] hover:text-[#043b67]">Veterans Administration</a> (VA).
                                </p>
                                <p className="mb-6 text-[15.5px]">
                                    If your loved one served in the U.S. military, they may be eligible
                                    for financial assistance to help pay for home care.
                                </p>
                                <p className="mb-6 text-[15.5px]">
                                    Veterans may qualify for <Link href="/personal-care" className="underline text-[#3b7ea1] hover:text-[#043b67]">personal home care</Link> or health benefits
                                    through the VA if they meet the following criteria:
                                </p>
                            </div>
                            <div className="w-full md:w-[35%]">
                                <div className="relative h-[320px] md:h-[400px] rounded-[8px] overflow-hidden shadow-sm">
                                    <Image
                                        src="https://images.unsplash.com/photo-1584824486509-11459482c3ea?q=80&w=600&auto=format&fit=crop"
                                        alt="Caregiver helping veteran"
                                        fill
                                        className="object-cover object-center"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Criteria Box */}
                        <div className="border border-[#e5e7eb] bg-[#f8fbfc] rounded-[8px] p-8 md:p-10 mb-16 shadow-sm">
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-[#3b7ea1] mr-3 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span className="text-[15.5px] text-[#333333]">
                                        Served in the active military, naval, or air service and separated under any condition
                                        other than dishonorable.
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-[#3b7ea1] mr-3 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span className="text-[15.5px] text-[#333333]">
                                        Current and former members of the Reserves or National Guard who were called to
                                        active duty (other than for training only) by a federal order and completed the full
                                        period for which they were called or ordered to active duty.
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* FAQ Section */}
                        <div className="mb-16">
                            <FAQAccordion faqs={faqItems} title="Frequently Asked Questions" />
                        </div>

                        {/* Related Articles Section */}
                        <div className="mb-16">
                            <h2 className="text-[28px] md:text-[32px] font-bold text-[#043b67] mb-8 font-sans tracking-tight text-center">
                                Related Articles
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {relatedArticles.map((article, index) => (
                                    <div key={index} className="flex flex-col border border-gray-100 rounded-[4px] overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                                        <div className="relative h-[200px] w-full">
                                            <Image
                                                src={article.image}
                                                alt={article.title}
                                                fill
                                                className="object-cover object-center"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-[18px] font-bold text-[#043b67] font-sans leading-tight">
                                                <Link href={article.link} className="hover:underline">
                                                    {article.title}
                                                </Link>
                                            </h3>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="text-center mt-8">
                                <Link href="/articles" className="text-[#3b7ea1] hover:text-[#043b67] font-medium underline text-[15px]">
                                    Read More Articles »
                                </Link>
                            </div>
                        </div>

                        {/* Serving Those Who Served Banner */}
                        <div className="border border-gray-200 bg-[#fbfdfa] rounded-[8px] p-8 md:p-12 mb-16 relative overflow-hidden shadow-sm">
                            <div className="flex flex-col lg:flex-row gap-8 items-center">
                                <div className="flex-1 z-10">
                                    <h2 className="text-[28px] md:text-[34px] font-bold text-[#043b67] mb-6 font-sans tracking-tight leading-tight">
                                        Serving Those Who Served
                                    </h2>
                                    <p className="text-[15.5px] text-[#333333] mb-8 leading-[1.7] max-w-xl">
                                        Visiting Angels is proud to support our nation's veterans with the dignity and
                                        compassionate care they deserve. Through personalized in-home services and close
                                        collaboration with families and VA programs, we ensure every veteran receives the
                                        respect and honor they've earned through their years of service.
                                    </p>
                                    <button className="bg-[#dca626] text-[#043b67] font-bold text-[15px] px-8 py-3.5 rounded-[4px] hover:opacity-90 transition-opacity">
                                        View Flipbook
                                    </button>
                                </div>
                                <div className="w-full lg:w-[350px] shrink-0 z-10">
                                    <div className="relative shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                                        <Image
                                            src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=600&auto=format&fit=crop"
                                            alt="Veterans Pursuing Well Being Flipbook Cover"
                                            width={350}
                                            height={450}
                                            className="rounded-[4px] object-cover"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 bg-[#043b67] text-white p-6 text-center rounded-b-[4px]">
                                            <p className="font-bold text-[18px] leading-tight font-sans">
                                                Veterans Pursuing Well Being<br/>and Prioritizing Their Health
                                            </p>
                                        </div>
                                    </div>
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
