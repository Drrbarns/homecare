import Link from "next/link";

interface GetStartedInnerProps {
    title?: string;
    description1?: React.ReactNode;
    description2?: React.ReactNode;
    backgroundColor?: string;
    layout?: "horizontal" | "vertical";
}

export function GetStartedInner({
    title = "Get Started with In-Home Alzheimer's Care",
    description1,
    description2,
    backgroundColor = "#043b67",
    layout = "horizontal"
}: GetStartedInnerProps) {
    // Default descriptions if not provided
    const defaultDesc1 = (
        <>
            We make it easy to find the appropriate services and the right dementia care provider for your loved one.
        </>
    );
    const defaultDesc2 = null;

    return (
        <section className={`${layout === "vertical" ? "py-10 sm:py-12 md:py-16 text-white overflow-hidden rounded-[8px] mx-0 mb-10 sm:mb-16" : "py-12 sm:py-16 md:py-20 text-white overflow-hidden"}`} style={{ backgroundColor }}>
            <div className={layout === "vertical" ? "container mx-auto px-5 sm:px-6 lg:px-8 max-w-[1200px]" : "container mx-auto px-5 sm:px-6 lg:px-6 xl:px-8 max-w-[1200px]"}>
                <div className="mb-8 sm:mb-10 md:mb-14 text-center">
                    <h2 className="text-[22px] sm:text-[26px] md:text-[32px] font-bold text-white mb-4 sm:mb-6 font-sans tracking-tight">
                        {title}
                    </h2>
                    <p className="text-white leading-[1.65] mb-5 text-[15px] max-w-[900px] mx-auto">
                        {description1 || defaultDesc1}
                    </p>
                    {(description2 || defaultDesc2) && (
                        <p className="text-white leading-[1.65] text-[15px] max-w-[900px] mx-auto">
                            {description2 || defaultDesc2}
                        </p>
                    )}
                </div>

                <div className={layout === "vertical" ? "flex flex-col gap-6 md:gap-10 relative" : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 relative"}>
                    {/* Step 1 */}
                    <div className="bg-white p-5 sm:p-6 md:p-8 rounded-[4px] relative text-left flex flex-col h-full shadow-lg">
                        <div className="flex justify-between items-start mb-6">
                            {/* Icon */}
                            <div className="text-[#8c2d38]">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="4" width="14" height="14" rx="1" ry="1" />
                                    <line x1="7" y1="2" x2="7" y2="6" />
                                    <line x1="13" y1="2" x2="13" y2="6" />
                                    <line x1="3" y1="9" x2="17" y2="9" />
                                    <circle cx="17" cy="17" r="5" fill="white" stroke="currentColor" />
                                    <polyline points="17 15 17 17 18.5 17" />
                                </svg>
                            </div>
                            {/* Number */}
                            <div className="text-[44px] font-bold text-[#8fb4c9] leading-none font-sans tracking-tight opacity-80">
                                01
                            </div>
                        </div>
                        <h3 className="text-[17px] font-bold text-[#043b67] mb-4 leading-snug">Schedule a Free Home Care Consultation</h3>
                        <p className="text-[#333333] leading-relaxed text-[13.5px]">
                            We begin with a free <Link href="/contact-us" className="underline text-[#3b7ea1] hover:text-[#043b67]">home care consultation</Link> to understand your needs.
                        </p>

                        {/* Arrow to Next Card */}
                        <div className={`hidden md:flex absolute ${layout === "vertical" ? 'left-1/2 -bottom-[22px] -translate-x-1/2 w-[44px] h-[44px] bg-white text-[#7a4b64] border-[#d6eaee]' : 'top-[55%] -right-3 translate-x-1/2 -translate-y-1/2 w-11 h-11 bg-[#eaf6f9] text-[#043b67] border-[#043b67]'} z-10 rounded-full border-[3px] items-center justify-center shadow-sm`}>
                            <svg width={layout === "vertical" ? "24" : "20"} height={layout === "vertical" ? "24" : "20"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                {layout === "vertical" ? (
                                    <path d="M12 5v14M19 12l-7 7-7-7"/>
                                ) : (
                                    <path d="M5 12h14M12 5l7 7-7 7"/>
                                )}
                            </svg>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-white p-5 sm:p-6 md:p-8 rounded-[4px] relative text-left flex flex-col h-full shadow-lg">
                        <div className="flex justify-between items-start mb-6">
                            {/* Icon */}
                            <div className="text-[#8c2d38]">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                                    <path d="M9 10L10 11L12 9" />
                                    <line x1="14" y1="10" x2="16" y2="10" />
                                    <path d="M9 14L10 15L12 13" />
                                    <line x1="14" y1="14" x2="16" y2="14" />
                                    <path d="M9 18L10 19L12 17" />
                                    <line x1="14" y1="18" x2="16" y2="18" />
                                </svg>
                            </div>
                            {/* Number */}
                            <div className="text-[44px] font-bold text-[#8fb4c9] leading-none font-sans tracking-tight opacity-80">
                                02
                            </div>
                        </div>
                        <h3 className="text-[17px] font-bold text-[#043b67] mb-4 leading-snug">Create A Customized Care Plan</h3>
                        <p className="text-[#333333] leading-relaxed text-[13.5px]">
                            Our care coordinators develop a comprehensive <Link href="/home-care-services" className="underline text-[#3b7ea1] hover:text-[#043b67]">home care plan</Link> tailored to specific requirements.
                        </p>

                        {/* Arrow to Next Card */}
                        <div className={`hidden md:flex absolute ${layout === "vertical" ? 'left-1/2 -bottom-[22px] -translate-x-1/2 w-[44px] h-[44px] bg-white text-[#7a4b64] border-[#d6eaee]' : 'top-[55%] -right-3 translate-x-1/2 -translate-y-1/2 w-11 h-11 bg-[#eaf6f9] text-[#043b67] border-[#043b67]'} z-10 rounded-full border-[3px] items-center justify-center shadow-sm`}>
                            <svg width={layout === "vertical" ? "24" : "20"} height={layout === "vertical" ? "24" : "20"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                {layout === "vertical" ? (
                                    <path d="M12 5v14M19 12l-7 7-7-7"/>
                                ) : (
                                    <path d="M5 12h14M12 5l7 7-7 7"/>
                                )}
                            </svg>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-white p-5 sm:p-6 md:p-8 rounded-[4px] relative text-left flex flex-col h-full shadow-lg">
                        <div className="flex justify-between items-start mb-6">
                            {/* Icon */}
                            <div className="text-[#8c2d38]">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                    <circle cx="9.5" cy="11" r="2" />
                                    <circle cx="14.5" cy="11" r="2" />
                                    <path d="M6 16c1-1 2.5-1.5 3.5-1.5" />
                                    <path d="M18 16c-1-1-2.5-1.5-3.5-1.5" />
                                    <path d="M9.5 14.5c1.5-1 3.5-1 5 0" />
                                </svg>
                            </div>
                            {/* Number */}
                            <div className="text-[44px] font-bold text-[#8fb4c9] leading-none font-sans tracking-tight opacity-80">
                                03
                            </div>
                        </div>
                        <h3 className="text-[17px] font-bold text-[#043b67] mb-4 leading-snug">Meet Your Caregiver</h3>
                        <p className="text-[#333333] leading-relaxed text-[13.5px]">
                            We carefully <Link href="/careers" className="underline text-[#3b7ea1] hover:text-[#043b67]">select caregivers</Link> whose skills and personalities complement your loved one. We'll also provide you with check-ins and updates.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
