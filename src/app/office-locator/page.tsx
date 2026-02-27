import { OfficeLocatorHero } from "@/components/office-locator/OfficeLocatorHero";
import { TopChoiceAndExpertise } from "@/components/office-locator/TopChoiceAndExpertise";
import { RelyOnUs } from "@/components/office-locator/RelyOnUs";
import { LocalApproach } from "@/components/office-locator/LocalApproach";
import { Newsletter } from "@/components/marketing/Newsletter";

export const metadata = {
    title: "Find Home Care Agency Near Me | Visiting Angels",
    description: "Locate a Visiting Angels office near you for compassionate local in-home care services.",
}

export default function OfficeLocatorPage() {
    return (
        <>
            <OfficeLocatorHero />
            <TopChoiceAndExpertise />
            <RelyOnUs />
            <LocalApproach />
            <Newsletter />
        </>
    )
}