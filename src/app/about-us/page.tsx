import { InnerPageHero } from "@/components/shared/InnerPageHero";
import { AmericasChoiceAbout } from "@/components/about-us/AmericasChoiceAbout";
import { BestCareOption } from "@/components/about-us/BestCareOption";
import { StressFreeCare } from "@/components/about-us/StressFreeCare";
import { PersonalizedCare } from "@/components/about-us/PersonalizedCare";
import { LocallyOwned } from "@/components/about-us/LocallyOwned";
import { ApproachSection } from "@/components/marketing/ApproachSection";
import { Newsletter } from "@/components/marketing/Newsletter";
import { FloatingGetStarted } from "@/components/layout/FloatingGetStarted";

export const metadata = {
    title: "About Us",
    description: "Learn about Visiting Angels—America's Choice in Senior Home Care. Compassionate, personalized in-home care for over 25 years.",
};

export default function AboutUsPage() {
    return (
        <>
            <InnerPageHero 
                title="About Us"
                description="At Visiting Angels, we specialize in providing compassionate, personalized care that enriches the lives of aging adults and ensures their thriving in the comfort of home."
                imageSrc="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1200&auto=format&fit=crop"
                imageAlt="Caregiver and senior outdoors"
                showPlayButton={true}
            />
            <AmericasChoiceAbout />
            <BestCareOption />
            <StressFreeCare />
            <PersonalizedCare />
            <LocallyOwned />
            <ApproachSection />
            <Newsletter />
            <FloatingGetStarted />
        </>
    );
}
