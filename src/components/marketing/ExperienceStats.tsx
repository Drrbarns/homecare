"use client";

import { useEffect, useState, useRef } from "react";

function CountUp({ end, duration = 2000, suffix = "", prefix = "", decimals = 0 }: { end: number, duration?: number, suffix?: string, prefix?: string, decimals?: number }) {
    const [count, setCount] = useState(0);
    const countRef = useRef<HTMLSpanElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTime: number | null = null;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            
            // easeOutQuart
            const easeProgress = 1 - Math.pow(1 - percentage, 4);
            
            setCount(end * easeProgress);

            if (progress < duration) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration, isVisible]);

    return (
        <span ref={countRef}>
            {prefix}{count.toFixed(decimals)}{suffix}
        </span>
    );
}

export function ExperienceStats() {
    return (
        <section className="py-20 relative bg-[#f1ebdb] border-t border-slate-200 overflow-hidden">
            {/* Wave Pattern Background */}
            <div 
                className="absolute inset-0 z-0 opacity-40 pointer-events-none" 
                style={{ 
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='60' viewBox='0 0 120 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30 Q 30 60 60 30 T 120 30' fill='none' stroke='%23d2c39e' stroke-width='2'/%3E%3Cpath d='M0 0 Q 30 30 60 0 T 120 0' fill='none' stroke='%23d2c39e' stroke-width='2'/%3E%3C/svg%3E")`,
                    backgroundSize: '120px 60px'
                }} 
            />
            
            <div className="container mx-auto px-4 lg:px-6 xl:px-8 max-w-[1200px] relative z-10">
                <div className="text-center mb-10">
                    <h2 className="text-[28px] md:text-[34px] font-bold font-serif text-[#043b67]">
                        Home Care Experience & Excellence
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6 text-center">
                    {/* Card 1 */}
                    <div className="bg-white py-12 px-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] rounded-[2px]">
                        <div className="text-[44px] md:text-[50px] font-bold text-[#043b67] mb-1 leading-none font-sans tracking-tight">
                            <CountUp end={25} suffix="+" duration={2000} />
                        </div>
                        <div className="text-[16px] text-gray-800 mt-3">Years of Service</div>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-white py-12 px-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] rounded-[2px]">
                        <div className="text-[44px] md:text-[50px] font-bold text-[#043b67] mb-1 leading-none font-sans tracking-tight">
                            <CountUp end={600} suffix="+" duration={2200} />
                        </div>
                        <div className="text-[16px] text-gray-800 mt-3">Local Offices Nationwide</div>
                    </div>
                    {/* Card 3 */}
                    <div className="bg-white py-12 px-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] rounded-[2px]">
                        <div className="text-[44px] md:text-[50px] font-bold text-[#043b67] mb-1 leading-none font-sans tracking-tight">
                            <CountUp end={4.8} decimals={1} duration={2400} />
                        </div>
                        <div className="text-[16px] text-gray-800 mt-3">Google Review Rating</div>
                    </div>
                </div>
            </div>
        </section>
    );
}