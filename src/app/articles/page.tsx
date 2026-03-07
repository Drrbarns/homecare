import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Articles of Interest | MidAid",
    description: "Read our articles of interest covering various home care and senior living topics.",
};

// Dummy data for articles to simulate pagination across multiple pages
const allArticles = [
    // Page 1
    { title: "Caring for a Senior With Bladder or Kidney Problems", image: "https://images.unsplash.com/photo-1584824486509-11459482c3ea?q=80&w=600&auto=format&fit=crop", link: "#" },
    { title: "Simple Sleep Strategies for Family Caregivers", image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=600&auto=format&fit=crop", link: "#" },
    { title: "Heart-Healthy Living for Seniors Starts at Home", image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=600&auto=format&fit=crop", link: "#" },
    { title: "How Busy Family Caregivers Can Prioritize Self-Care", image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=600&auto=format&fit=crop", link: "#" },
    { title: "Winter Craft Ideas to Connect With Seniors", image: "https://images.unsplash.com/photo-1581579205466-e4304e287010?q=80&w=600&auto=format&fit=crop", link: "#" },
    { title: "How to Support Seniors Living With Thyroid Disease", image: "https://images.unsplash.com/photo-1574607383476-f517f260d30b?q=80&w=600&auto=format&fit=crop", link: "#" },
    
    // Page 2
    { title: "Winter Blues vs. Seasonal Affective Disorder", image: "https://images.unsplash.com/photo-1584824486509-11459482c3ea?q=80&w=600&auto=format&fit=crop", link: "#" },
    { title: "Ideas for Seniors to Have More Fun This New Year", image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=600&auto=format&fit=crop", link: "#" },
    { title: "Blending Old and New Holiday Traditions With", image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=600&auto=format&fit=crop", link: "#" },
    { title: "Easy, Safe, and Fun Recipes Seniors Will Enjoy", image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=600&auto=format&fit=crop", link: "#" },
    { title: "How to Make Thanksgiving Easier for Elderly Care Recipients", image: "https://images.unsplash.com/photo-1581579205466-e4304e287010?q=80&w=600&auto=format&fit=crop", link: "#" },
    { title: "Caring for a Senior With Type 2 Diabetes", image: "https://images.unsplash.com/photo-1574607383476-f517f260d30b?q=80&w=600&auto=format&fit=crop", link: "#" },

    // Page 3
    { title: "Honoring Our Heroes: In-Home Care for Veterans", image: "https://images.unsplash.com/photo-1584824486509-11459482c3ea?q=80&w=600&auto=format&fit=crop", link: "#" },
    { title: "Halloween Snacks Seniors Can Make With Grandkids", image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=600&auto=format&fit=crop", link: "#" },
    { title: "Caring for an Elderly Parent When You're Not Feeling Well", image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=600&auto=format&fit=crop", link: "#" },
    { title: "In-Home Support for Seniors Recovering from Breast Cancer", image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=600&auto=format&fit=crop", link: "#" },
    { title: "4 Tips to Prevent Injuries While Caring for an Aging Parent", image: "https://images.unsplash.com/photo-1581579205466-e4304e287010?q=80&w=600&auto=format&fit=crop", link: "#" },
    { title: "Helping Senior Parents Overcome Fear and Loneliness at Home", image: "https://images.unsplash.com/photo-1574607383476-f517f260d30b?q=80&w=600&auto=format&fit=crop", link: "#" },

    // Page 4
    { title: "Natural Ways to Ease Anxiety for Seniors at Home", image: "https://images.unsplash.com/photo-1584824486509-11459482c3ea?q=80&w=600&auto=format&fit=crop", link: "#" },
    { title: "Don't Skip These 5 Critical Safety Investments for Senior", image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=600&auto=format&fit=crop", link: "#" },
    { title: "The Emotional Complexity of Being a Family Caregiver", image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=600&auto=format&fit=crop", link: "#" },
    { title: "3 Psoriasis Facts Seniors and Family Caregivers Need to Know", image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=600&auto=format&fit=crop", link: "#" },
    { title: "How Senior Enrichment Courses Inspire Learning and Connection", image: "https://images.unsplash.com/photo-1581579205466-e4304e287010?q=80&w=600&auto=format&fit=crop", link: "#" },
    { title: "Make Home Visits With Your Aging Loved Ones Meaningful", image: "https://images.unsplash.com/photo-1574607383476-f517f260d30b?q=80&w=600&auto=format&fit=crop", link: "#" },

    // Page 5
    { title: "Using AI Tools to Simplify Life As a Family Caregiver", image: "https://images.unsplash.com/photo-1584824486509-11459482c3ea?q=80&w=600&auto=format&fit=crop", link: "#" },
    { title: "3 Stress-Reducing Tips for Seniors Who Love Screen", image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=600&auto=format&fit=crop", link: "#" },
    { title: "Senior Eye Safety Tips for Summer", image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=600&auto=format&fit=crop", link: "#" },
    { title: "How Senior Home Care Helps Make Every Day Independence Day", image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=600&auto=format&fit=crop", link: "#" },
    { title: "How to Manage Combativeness in Seniors with Alzheimer's Disease", image: "https://images.unsplash.com/photo-1581579205466-e4304e287010?q=80&w=600&auto=format&fit=crop", link: "#" },
    { title: "Causes of Headaches in Seniors and How to Help", image: "https://images.unsplash.com/photo-1574607383476-f517f260d30b?q=80&w=600&auto=format&fit=crop", link: "#" }
];

export default async function ArticlesPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    // Resolve searchParams before using
    const resolvedParams = await searchParams;
    
    // Get the current page from the URL, default to 1
    const pageParam = typeof resolvedParams.page === 'string' ? parseInt(resolvedParams.page) : 1;
    const currentPage = isNaN(pageParam) ? 1 : pageParam;
    
    const articlesPerPage = 6;
    const totalPages = Math.ceil(allArticles.length / articlesPerPage);
    
    // Ensure current page is within valid range
    const validCurrentPage = Math.max(1, Math.min(currentPage, totalPages));
    
    // Get articles for the current page
    const startIndex = (validCurrentPage - 1) * articlesPerPage;
    const currentArticles = allArticles.slice(startIndex, startIndex + articlesPerPage);

    return (
        <div className="bg-white min-h-screen">
            {/* Header Banner */}
            <div className="w-full bg-[#f0f9fb] py-8 sm:py-12 md:py-16 relative overflow-hidden">
                {/* Wavy Background Pattern */}
                <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 20 Q 25 0, 50 20 T 100 20\' fill=\'none\' stroke=\'%233b7ea1\' stroke-width=\'2\'/%3E%3C/svg%3E")', backgroundSize: '100px 40px' }}></div>
                
                <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-[1440px] relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6">
                        <h1 className="text-[26px] sm:text-[32px] md:text-[42px] font-bold text-[#043b67] font-sans tracking-tight">
                            Articles of Interest
                        </h1>
                        
                        {/* Search Bar */}
                        <div className="w-full md:w-[450px] relative">
                            <input 
                                type="text" 
                                placeholder="What are you looking for?" 
                                className="w-full pl-6 pr-12 py-3.5 rounded-[4px] border-none shadow-sm focus:outline-none focus:ring-2 focus:ring-[#3b7ea1] text-[15px]"
                            />
                            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#043b67]">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-[1440px] py-8 sm:py-12">
                
                {/* Filter Bar */}
                <div className="flex bg-[#f2e6b5] rounded-[4px] mb-8 sm:mb-12 shadow-sm overflow-hidden">
                    <div className="flex-1 px-4 sm:px-8 py-3 sm:py-4 flex items-center">
                        <span className="text-[#333333] font-medium tracking-wide text-sm sm:text-base">FILTER BY TOPIC</span>
                    </div>
                    <button className="bg-[#dca626] px-6 py-4 hover:bg-[#c99722] transition-colors flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <polyline points="19 12 12 19 5 12"></polyline>
                        </svg>
                    </button>
                </div>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
                    {currentArticles.map((article, index) => (
                        <div key={index} className="border border-gray-200 rounded-[8px] overflow-hidden bg-white shadow-sm hover:shadow-md transition-all flex flex-col h-full group">
                            <div className="relative h-[200px] sm:h-[220px] md:h-[240px] w-full overflow-hidden">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-5 sm:p-6 md:p-8 flex-1 flex flex-col justify-center items-center text-center bg-white min-h-[120px] sm:min-h-[140px]">
                                <Link href={article.link} className="text-[#043b67] hover:text-[#3b7ea1] transition-colors">
                                    <h3 className="text-[17px] sm:text-[18px] md:text-[20px] font-bold font-sans leading-tight underline decoration-2 underline-offset-4">
                                        {article.title}
                                    </h3>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-2 flex-wrap pb-10 sm:pb-16">
                        {Array.from({ length: totalPages }).map((_, index) => {
                            const pageNum = index + 1;
                            const isCurrent = pageNum === validCurrentPage;
                            
                            return (
                                <Link 
                                    key={pageNum}
                                    href={`/articles${pageNum > 1 ? `?page=${pageNum}` : ''}`}
                                    className={`w-10 h-10 sm:w-10 sm:h-10 flex items-center justify-center border rounded-[4px] text-[14px] sm:text-[15px] transition-colors ${
                                        isCurrent 
                                            ? 'bg-[#d0e9ef] border-[#d0e9ef] text-[#043b67] font-medium' 
                                            : 'bg-white border-gray-200 text-[#333333] hover:border-[#3b7ea1] hover:text-[#3b7ea1]'
                                    }`}
                                >
                                    {pageNum}
                                </Link>
                            );
                        })}
                        
                        {/* Next Arrow */}
                        {validCurrentPage < totalPages && (
                            <Link 
                                href={`/articles?page=${validCurrentPage + 1}`}
                                className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-[4px] bg-white text-[#333333] hover:border-[#3b7ea1] hover:text-[#3b7ea1] transition-colors"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </Link>
                        )}
                    </div>
                )}

            </div>
        </div>
    );
}
