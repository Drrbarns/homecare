import Link from "next/link";

export function NewToHomeCare() {
    return (
        <section className="py-20 bg-[#043b67] text-white">
            <div className="container mx-auto px-4 lg:px-6 xl:px-8 max-w-[1200px]">
                <div className="mb-14">
                    <h2 className="text-[28px] md:text-[34px] font-bold text-white mb-8 font-serif text-center">
                        New to Professional Home Care?
                    </h2>
                    <p className="text-white leading-relaxed mb-6 text-[15px]">
                        Deciding whether to begin home care services can feel overwhelming, but Visiting Angels is here to help. We provide personalized, compassionate support tailored to your unique needs, making the process simple and stress-free.
                    </p>
                    <p className="text-white leading-relaxed text-[15px]">
                        Learn how to <Link href="#" className="underline decoration-white/50 hover:decoration-white underline-offset-4">Get Started With Professional Home Care</Link> and discover how our flexible care options can help foster comfort and safety and enhance quality of life at home.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 relative">
                    {/* Step 1 */}
                    <div className="bg-white p-8 rounded-[6px] relative text-left flex flex-col h-full shadow-lg">
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
                            <div className="text-[44px] font-bold text-[#8fb4c9] leading-none font-sans tracking-tight">
                                01
                            </div>
                        </div>
                        <h3 className="text-[17px] font-bold text-[#043b67] mb-4 leading-snug">Schedule a Free Home Care Consultation</h3>
                        <p className="text-[#333333] leading-relaxed text-[13.5px]">
                            A Visiting Angels coordinator will meet with your family to discuss specific needs and expectations during a free <Link href="#" className="underline text-[#8fb4c9] hover:text-[#043b67]">home care consultation</Link>. We'll answer your questions and let you know how professional caregivers can help.
                        </p>

                        {/* Arrow to Next Card */}
                        <div className="hidden md:flex absolute top-[55%] -right-3 translate-x-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-[#d6e2e9] border-[4px] border-[#043b67] items-center justify-center">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#043b67" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-white p-8 rounded-[6px] relative text-left flex flex-col h-full shadow-lg">
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
                            <div className="text-[44px] font-bold text-[#8fb4c9] leading-none font-sans tracking-tight">
                                02
                            </div>
                        </div>
                        <h3 className="text-[17px] font-bold text-[#043b67] mb-4 leading-snug">Create A Customized Care Plan</h3>
                        <p className="text-[#333333] leading-relaxed text-[13.5px]">
                            If you choose Visiting Angels, your coordinator will arrange a <Link href="#" className="underline text-[#8fb4c9] hover:text-[#043b67]">home care assessment</Link>, including a walk-through of your loved one's home to monitor any safety hazards, fall risks, and opportunities to optimize the dwelling. The coordinator will then develop a detailed plan and schedule with your approval.
                        </p>

                        {/* Arrow to Next Card */}
                        <div className="hidden md:flex absolute top-[55%] -right-3 translate-x-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-[#d6e2e9] border-[4px] border-[#043b67] items-center justify-center">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#043b67" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-white p-8 rounded-[6px] relative text-left flex flex-col h-full shadow-lg">
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
                            <div className="text-[44px] font-bold text-[#8fb4c9] leading-none font-sans tracking-tight">
                                03
                            </div>
                        </div>
                        <h3 className="text-[17px] font-bold text-[#043b67] mb-4 leading-snug">Meet Your Caregiver</h3>
                        <p className="text-[#333333] leading-relaxed text-[13.5px]">
                            We thoroughly screen and select the best professional caregivers for families. We'll match you with the ideal caregiver based on your loved one's condition, needs, preferences, and personality. You'll feel confident knowing your loved one is safe and comfortable at home with a Visiting Angels' caregiver by their side.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}