import Image from "next/image";
import Link from "next/link";
import { InnerPageHero } from "@/components/shared/InnerPageHero";
import { HomeCareInfoSidebar } from "@/components/layout/sidebar/HomeCareInfoSidebar";
import { FloatingGetStarted } from "@/components/layout/FloatingGetStarted";
import { Newsletter } from "@/components/marketing/Newsletter";

export const metadata = {
    title: "Give Us A Review | Visiting Angels",
    description: "We value your feedback. Visiting Angels values the helpful feedback we receive from you – our clients.",
};

export default function GiveUsAReviewPage() {
    return (
        <>
            <InnerPageHero
                title="Give Us A Review"
                description="We value your feedback."
                imageSrc="https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=1200&auto=format&fit=crop"
                imageAlt="Customer satisfaction rating stars"
            />

            <div className="container mx-auto px-5 sm:px-6 lg:px-6 xl:px-8 max-w-[1440px] py-10 sm:py-16 lg:py-24">
                <div className="flex flex-col lg:flex-row gap-12 xl:gap-16">
                    {/* Left Sidebar */}
                    <div className="w-full lg:w-[320px] shrink-0">
                        <HomeCareInfoSidebar />
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 w-full text-[15px] md:text-[16px] text-[#333333] leading-[1.7] font-sans">
                        
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                            {/* Left side Image */}
                            <div className="w-full lg:w-[45%] shrink-0">
                                <div className="relative h-[320px] md:h-[400px] rounded-[8px] overflow-hidden shadow-sm">
                                    <Image
                                        src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=600&auto=format&fit=crop"
                                        alt="Caregiver looking at phone with senior man"
                                        fill
                                        className="object-cover object-center"
                                    />
                                </div>
                            </div>
                            
                            {/* Right side Text */}
                            <div className="w-full lg:w-[55%] flex flex-col justify-start pt-2">
                                <h2 className="text-[26px] md:text-[30px] font-bold text-[#043b67] mb-6 font-sans tracking-tight">
                                    We Want to Hear from You!
                                </h2>
                                
                                <p className="mb-6 text-[15.5px]">
                                    Visiting Angels value the helpful feedback we receive from you
                                    – our clients. Your insight helps us enhance the
                                    compassionate care we provide to families across the
                                    nation and ensures we continue to deliver the best quality
                                    services that have made Visiting Angels "America's choice in-
                                    home care."
                                </p>
                                
                                <p className="mb-8 text-[15.5px]">
                                    Click below to rate your experience with Visiting Angels and
                                    share your thoughts and opinions.
                                </p>
                                
                                <div>
                                    <Link 
                                        href="/contact-us"
                                        className="inline-flex items-center justify-center bg-[#dca626] text-[#043b67] font-bold text-[15px] px-8 py-3.5 rounded-[4px] hover:opacity-90 transition-opacity"
                                    >
                                        Give Us a Review
                                    </Link>
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
