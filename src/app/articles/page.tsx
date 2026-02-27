import { PageHeader } from "@/components/layout/PageHeader";
import { ArticlesPreview } from "@/components/marketing/ArticlesPreview";

export const metadata = {
    title: "Senior Care Articles | Visiting Angels",
    description: "Read our latest articles on senior care, aging in place, finding the right caregiver, and more.",
}

export default function ArticlesPage() {
    return (
        <>
            <PageHeader
                title="Senior Care Articles"
                subtitle="Valuable insights, guides, and advice on caring for elderly loved ones."
            />

            <div className="container mx-auto px-4 py-16 md:py-24 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white">
                        Insights & Advice
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Whether you are a family caregiver looking for advice or just researching options for the future, our collection of articles is designed to help you make informed decisions.
                    </p>
                </div>

                <ArticlesPreview />
            </div>
        </>
    )
}
