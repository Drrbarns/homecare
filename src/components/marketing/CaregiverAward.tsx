import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CaregiverAward() {
    return (
        <section className="py-12 sm:py-16 md:py-20 overflow-hidden" style={{ backgroundColor: '#28756c' }}>
            <div className="container mx-auto px-5 sm:px-6 lg:px-6 xl:px-8 max-w-[1440px]">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 max-w-[1100px] mx-auto">
                    
                    {/* Left - Content */}
                    <div className="w-full md:w-[45%] text-left text-white">
                        <h2 className="text-[26px] md:text-[28px] font-bold mb-4 font-sans tracking-wide">
                            Caregiver of The Year Award
                        </h2>
                        <p className="text-white/95 leading-relaxed mb-6 text-[15px]">
                            We are happy to announce the winner and the finalist of this year's <strong>Caregiver of The Year Award.</strong>
                        </p>
                        <Button 
                            asChild 
                            className="transition-opacity hover:opacity-90 rounded-[4px] px-8 py-6 font-bold shadow-sm inline-flex"
                            style={{ backgroundColor: '#dca626', color: '#000000', fontSize: '15px' }}
                        >
                            <Link href="/about-us">Meet The Winner</Link>
                        </Button>
                    </div>

                    {/* Right - Logo Graphic */}
                    <div className="w-full md:w-[50%] flex justify-end items-center text-white">
                        <div className="flex items-center gap-4 select-none">
                            {/* Heart Icon */}
                            <div className="shrink-0">
                                <svg width="90" height="90" viewBox="0 0 100 100" fill="currentColor">
                                    {/* Base Heart Shape */}
                                    <path d="M50 90 C 20 65, 10 45, 10 30 C 10 15, 25 5, 40 5 C 45 5, 50 8, 50 12 C 50 8, 55 5, 60 5 C 75 5, 90 15, 90 30 C 90 45, 80 65, 50 90 Z" fill="white" />
                                    {/* Cutouts for People */}
                                    <path d="M 40 45 A 8 8 0 1 0 40 29 A 8 8 0 1 0 40 45 Z" fill="#28756c" />
                                    <path d="M 60 45 A 8 8 0 1 0 60 29 A 8 8 0 1 0 60 45 Z" fill="#28756c" />
                                    <path d="M 25 80 C 25 60, 40 55, 40 55 C 40 55, 45 60, 50 60 C 55 60, 60 55, 60 55 C 60 55, 75 60, 75 80" fill="none" stroke="#28756c" strokeWidth="6" strokeLinecap="round" />
                                    <path d="M50 40 A 6 6 0 1 0 50 28 A 6 6 0 1 0 50 40 Z" fill="#28756c" />
                                </svg>
                            </div>
                            
                            {/* Text Lockup */}
                            <div className="flex flex-col items-start -mt-2">
                                <div className="text-[14px] uppercase tracking-widest font-sans font-medium mb-[-6px] ml-1 opacity-90">
                                    Visiting Angels <span className="font-bold">2025</span>
                                </div>
                                <div className="font-serif font-bold text-[60px] leading-[0.85] tracking-tight">
                                    Caregiver
                                </div>
                                <div className="flex items-center ml-[88px] mt-[-5px]">
                                    <div className="flex flex-col leading-[0.85] mr-1 text-[20px] font-bold font-serif">
                                        <span>of</span>
                                        <span>the</span>
                                    </div>
                                    <div className="font-serif font-bold text-[60px] leading-[0.8] tracking-tight">
                                        Year
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}