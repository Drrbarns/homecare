import Link from "next/link";
import Image from "next/image";

export function ArticlesPreview() {
    const articles = [
        {
            title: "Heart-Healthy Living for Seniors Starts at Home",
            image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop",
            link: "/articles/heart-healthy-living"
        },
        {
            title: "How Busy Family Caregivers Can Prioritize Self-Care",
            image: "https://images.unsplash.com/photo-1544367567-0f2fcb046eb9?q=80&w=800&auto=format&fit=crop",
            link: "/articles/caregiver-self-care"
        },
        {
            title: "Winter Craft Ideas to Connect With Seniors",
            image: "https://images.unsplash.com/photo-1518335345758-c0b9356ce733?q=80&w=800&auto=format&fit=crop",
            link: "/articles/winter-craft-ideas"
        }
    ];

    return (
        <section className="pt-20 pb-24 bg-white relative z-10">
            <div className="container mx-auto px-4 lg:px-6 xl:px-8 max-w-[1200px]">
                <div className="text-center mb-10 relative z-10">
                    <h2 className="text-[28px] md:text-[34px] font-bold text-[#043b67] mb-2 font-sans tracking-tight">
                        Navigating Senior Care
                    </h2>
                    <p className="text-[18px] md:text-[20px] text-gray-500 font-sans font-light">
                        Tips, Advice, & Information
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {articles.map((article, i) => (
                        <Link href={article.link} key={i} className="group block bg-white rounded-[6px] border border-gray-200 overflow-hidden shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-shadow p-5 md:p-6">
                            <div className="relative h-[200px] md:h-[220px] w-full rounded-[4px] overflow-hidden">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                {/* Bottom Curve Overlay */}
                                <div className="absolute bottom-0 left-0 w-full h-[60px] z-10">
                                    <svg viewBox="0 0 100 60" preserveAspectRatio="none" className="w-full h-full">
                                        <path d="M0,60 L0,20 C30,50 70,50 100,20 L100,60 Z" fill="#043b67" />
                                        <path d="M0,20 C30,50 70,50 100,20" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="0.5" />
                                        <path d="M0,12 C30,42 70,42 100,12" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
                                    </svg>
                                </div>
                            </div>
                            <div className="pt-6 pb-2 text-center h-[90px] flex items-center justify-center">
                                <h3 className="text-[17px] md:text-[18px] font-bold text-[#043b67] underline decoration-2 underline-offset-4 leading-snug group-hover:text-[#5cb3b1] transition-colors">
                                    {article.title}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="text-center">
                    <Link href="/articles" className="text-[#3b7ea1] underline decoration-1 underline-offset-4 hover:text-[#043b67] transition-colors text-[16px]">
                        View More Articles »
                    </Link>
                </div>
            </div>
        </section>
    );
}