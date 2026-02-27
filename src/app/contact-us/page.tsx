import { PageHeader } from "@/components/layout/PageHeader";
import { ContactSection } from "@/components/marketing/ContactSection";

export const metadata = {
    title: "Contact Us | Visiting Angels",
    description: "Get in touch with Visiting Angels for a free consultation about our home care services or employment opportunities.",
}

export default function ContactPage() {
    return (
        <>
            <PageHeader
                title="Contact Us"
                subtitle="We're here to help you navigate care options for your loved ones. Reach out anytime."
            />
            <ContactSection />
        </>
    )
}
