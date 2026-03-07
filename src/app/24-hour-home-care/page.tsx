import { InnerPageHero } from "@/components/shared/InnerPageHero";
import { InnerPageSidebar } from "@/components/layout/sidebar/InnerPageSidebar";
import { FloatingGetStarted } from "@/components/layout/FloatingGetStarted";
import { Newsletter } from "@/components/marketing/Newsletter";

export const metadata = {
    title: "24-Hour Home Care",
    description: "Compassionate, round-the-clock support to help your loved one receive the dedicated care and attention they deserve when needed most.",
};

export default function TwentyFourHourCarePage() {
    return (
        <>
            <InnerPageHero 
                title="24-Hour Care"
                description="Compassionate, round-the-clock support to help your loved one receive the dedicated care and attention they deserve when needed most."
                imageSrc="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1200&auto=format&fit=crop"
                imageAlt="Caregiver helping senior man with his shirt"
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
                        <p className="mb-6">
                            The need for home care doesn't always end when the sun goes down. At MidAid, our 24-hour home care services provide around-the-clock support to provide your loved one with continuous, professional assistance in the comforts of their own home.
                        </p>
                        <p className="mb-6">
                            Whether your senior needs overnight supervision, medication reminders, or just the reassurance of having someone nearby, our dedicated caregivers are available day and night to ensure their safety and well-being.
                        </p>
                        
                        {/* The rest of the content will go here, matching the references */}
                    </div>
                </div>
            </div>

            <Newsletter />
            <FloatingGetStarted />
        </>
    );
}
