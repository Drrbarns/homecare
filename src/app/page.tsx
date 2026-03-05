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
  description: "America's Choice in Senior Home Care. Provide your loved ones with the highest quality in-home care.",
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