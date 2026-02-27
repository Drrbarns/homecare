import Image from "next/image";
import Link from "next/link";

interface Article {
    title: string;
    imageSrc: string;
    imageAlt: string;
    href: string;
}

interface RelatedArticlesProps {
    title?: string;
    articles: Article[];
    viewAllHref?: string;
}

export function RelatedArticles({ 
    title = "Related Articles", 
    articles,
    viewAllHref = "/articles"
}: RelatedArticlesProps) {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4 lg:px-6 xl:px-8 max-w-[1200px]">
                <h2 className="text-[26px] md:text-[32px] font-bold text-[#043b67] mb-10 font-sans tracking-tight text-center">
                    {title}
                </h2>
                
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
                    {articles.map((article, index) => (
                        <Link 
                            key={index}
                            href={article.href}
                            className="group block bg-white rounded-[4px] overflow-hidden border border-gray-100 shadow-[0_2px_15px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow"
                        >
                            <div className="relative h-[220px] w-full overflow-hidden">
                                <Image
                                    src={article.imageSrc}
                                    alt={article.imageAlt}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-[18px] font-bold text-[#043b67] leading-snug group-hover:text-[#3b7ea1] transition-colors underline decoration-[#b5d7e0] underline-offset-4 decoration-2">
                                    {article.title}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>
                
                {viewAllHref && (
                    <div className="text-center">
                        <Link 
                            href={viewAllHref}
                            className="inline-block text-[#3b7ea1] hover:text-[#043b67] text-[16px] font-bold underline decoration-[#b5d7e0] underline-offset-4 decoration-2 transition-colors"
                        >
                            Read More Articles »
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}
