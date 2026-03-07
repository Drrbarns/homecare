import Image from "next/image";
import Link from "next/link";

export function LocalApproach() {
    return (
        <section className="py-20" style={{ backgroundColor: '#28756c' }}>
            <div className="container mx-auto px-4 lg:px-6 xl:px-8 max-w-[1200px]">
                
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16 mb-16">
                    {/* Left Content */}
                    <div className="w-full md:w-[50%] lg:w-[55%] text-white">
                        <h2 className="text-[28px] md:text-[34px] font-bold mb-6 font-sans tracking-tight leading-[1.2]">
                            A Local Approach to Home Care Services
                        </h2>
                        
                        <div className="space-y-5 text-[15px] leading-[1.6] font-sans text-white/95">
                            <p>
                                Every MidAid office is locally owned and operated with roots in your community. Your local team will collaborate closely with you, offering personalized, one-on-one support throughout the caregiving process.
                            </p>
                            <p>
                                When you connect with your local MidAid agency, we'll arrange a <Link href="#" className="underline hover:text-white/80 transition-colors font-bold">free, no-obligation consultation</Link>. During this initial meeting, your care coordinator will learn about your loved one's care needs, develop a custom care plan, and answer any questions you might have about our in-home senior care services.
                            </p>
                            <p>
                                Get started with a free home care consultation. Contact your local MidAid office today!
                            </p>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="w-full md:w-[50%] lg:w-[45%]">
                        <div className="relative h-[350px] md:h-[400px] w-full rounded-[16px] overflow-hidden shadow-lg">
                            <Image
                                src="/images/Whisk_05c25109353fe2d88f1437b47bfffa90dr.jpeg"
                                alt="Caregiver greeting senior woman at door"
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom Bar Button */}
                <Link 
                    href="#"
                    className="flex items-center justify-between w-full rounded-[4px] overflow-hidden shadow-md transition-opacity hover:opacity-95"
                    style={{ backgroundColor: '#f1ebdb' }}
                >
                    <div className="px-8 py-5 font-bold text-[#043b67] text-[18px] md:text-[20px] font-sans tracking-tight">
                        View Our Office Locations
                    </div>
                    <div 
                        className="h-full flex items-center justify-center px-6 self-stretch"
                        style={{ backgroundColor: '#dca626' }}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M6 9l6 6 6-6"/>
                        </svg>
                    </div>
                </Link>

            </div>
        </section>
    );
}