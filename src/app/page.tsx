import { Hero } from "@/components/marketing/Hero";
import { AmericasChoice } from "@/components/marketing/AmericasChoice";
import { NewToHomeCare } from "@/components/marketing/NewToHomeCare";
import { ExperienceStats } from "@/components/marketing/ExperienceStats";
import { JobOpportunities } from "@/components/marketing/JobOpportunities";
import { CaregiverAward } from "@/components/marketing/CaregiverAward";
import { ApproachSection } from "@/components/marketing/ApproachSection";
import { ArticlesPreview } from "@/components/marketing/ArticlesPreview";
import { ContactSection } from "@/components/marketing/ContactSection";
import { Newsletter } from "@/components/marketing/Newsletter";

export const metadata = {
  title: "Compassionate In-Home Senior Care",
  description: "MidAid provides compassionate, professional in-home senior care across Australia. Our experienced caregivers help your loved ones thrive at home with personalised care plans, companion care, dementia care, and more.",
  openGraph: {
    title: "MidAid | Compassionate In-Home Senior Care",
    description: "Professional in-home senior care you can trust. Personalised care plans, experienced caregivers, and compassionate support across Australia.",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  },
}

export default function Home() {
  return (
    <>
      <Hero />
      <AmericasChoice />
      <NewToHomeCare />
      <ExperienceStats />
      <JobOpportunities />
      <CaregiverAward />
      <ApproachSection />
      <ArticlesPreview />
      <ContactSection />
      <Newsletter />
    </>
  );
}