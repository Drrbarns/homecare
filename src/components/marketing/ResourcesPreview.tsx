import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowRight, BookOpen, Calendar, Lightbulb } from "lucide-react";

const articles = [
    {
        title: "5 Signs It's Time for Home Care", // Common topic
        excerpt: "Recognizing when your elderly loved ones need extra support can be difficult. Here are the key indicators to watch for.",
        category: "Care Planning",
        icon: Calendar,
        color: "bg-blue-100 text-blue-600"
    },
    {
        title: "Talking to Parents About Assistance",
        excerpt: "Approaching the subject of home care requires empathy and patience. Use these conversation starters to help.",
        category: "Communication",
        icon: Lightbulb,
        color: "bg-amber-100 text-amber-600"
    },
    {
        title: "Understanding Dementia Stages",
        excerpt: "A guide to the progression of dementia and how care strategies should adapt at each stage.",
        category: "Health Education",
        icon: BookOpen,
        color: "bg-emerald-100 text-emerald-600"
    }
];

export function ResourcesPreview() {
    return (
        <section className="py-24 bg-white dark:bg-slate-950">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">Caregiving Tips & Advice</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">
                            Expert insights to help you navigate the journey of caring for an aging loved one.
                        </p>
                    </div>
                    <Link href="/resources" className="text-primary font-semibold hover:underline flex items-center shrink-0">
                        View all articles <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {articles.map((article, i) => (
                        <Card key={i} className="group border-none shadow-lg hover:shadow-xl transition-shadow bg-slate-50 dark:bg-slate-900 overflow-hidden">
                            <div className="h-2 bg-gradient-to-r from-primary to-secondary"></div>
                            <CardHeader className="pb-4">
                                <div className={`w-fit px-3 py-1 rounded-full text-xs font-semibold mb-4 capitalize ${article.color}`}>
                                    {article.category}
                                </div>
                                <CardTitle className="text-xl md:text-2xl group-hover:text-primary transition-colors">
                                    <Link href={`/resources/article-${i + 1}`}>
                                        {article.title}
                                    </Link>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                                    {article.excerpt}
                                </p>
                                <Link href={`/resources/article-${i + 1}`} className="inline-flex items-center text-sm font-semibold text-slate-900 dark:text-white hover:text-primary transition-colors">
                                    Read more <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
