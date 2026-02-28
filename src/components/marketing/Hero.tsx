import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <section className="relative w-full flex bg-[#043b67]" style={{ minHeight: '480px' }}>
            {/* Background Image (Right side) */}
            <div className="absolute inset-0 z-0 hidden md:block w-full h-full">
                <Image
                    src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=1200&auto=format&fit=crop"
                    alt="Senior woman looking at phone with caregiver"
                    fill
                    className="object-cover object-right"
                    priority
                />
            </div>
            
            {/* Mobile Image */}
            <div className="absolute inset-0 z-0 md:hidden opacity-30 w-full h-full">
                <Image
                    src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=1200&auto=format&fit=crop"
                    alt="Senior woman looking at phone with caregiver"
                    fill
                    className="object-cover object-center"
                    priority
                />
            </div>

            {/* SVG Curve Overlay (Left side) */}
            <div className="absolute inset-0 z-10 pointer-events-none hidden md:block w-full">
                <svg
                    className="h-full w-full"
                    viewBox="0 0 1440 480"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Dark Blue Base Curve */}
                    <path
                        d="M0,0 L700,0 C780,0 850,120 850,240 C850,360 780,480 700,480 L0,480 Z"
                        fill="#043b67"
                    />
                    {/* First decorative white line */}
                    <path
                        d="M720,0 C800,0 870,120 870,240 C870,360 800,480 720,480"
                        fill="none"
                        stroke="rgba(255,255,255,0.4)"
                        strokeWidth="1"
                    />
                    {/* Second decorative light line */}
                    <path
                        d="M740,0 C820,0 890,120 890,240 C890,360 820,480 740,480"
                        fill="none"
                        stroke="rgba(255,255,255,0.2)"
                        strokeWidth="1"
                    />
                </svg>
            </div>

            {/* Content Container */}
            <div className="container mx-auto relative z-20 flex h-full items-center px-4 lg:px-6 xl:px-8 max-w-[1440px] py-16 md:py-24">
                <div className="w-full max-w-[580px]">
                    <h1 className="font-bold leading-[1.2] mb-6 tracking-tight text-[36px] sm:text-[44px] md:text-[52px]" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                        <span className="block" style={{ color: '#d39e24' }}>Compassionate</span>
                        <span className="block" style={{ color: '#d39e24' }}>In-Home Senior Care</span>
                    </h1>

                    <p className="font-normal mb-8 text-white text-[16px] sm:text-[18px] md:text-[20px] font-sans">
                        Find a Visiting Angels home care office near you:
                    </p>

                    <div className="flex flex-col sm:flex-row bg-white overflow-hidden mb-4 rounded-[4px] max-w-[420px]">
                        <input
                            type="text"
                            placeholder="Where is Care Needed?"
                            className="flex-grow px-4 py-3 sm:py-0 text-[#333333] outline-none w-full placeholder:text-gray-500 text-[15px]"
                        />
                        <button
                            className="font-bold px-8 py-3.5 sm:py-0 transition-opacity hover:opacity-90 shrink-0 text-[15px]"
                            style={{ backgroundColor: '#d39e24', color: '#043b67' }}
                        >
                            Find Care
                        </button>
                    </div>

                    <div className="text-white mt-4 text-[13px] font-sans">
                        For services in Connecticut, <Link href="/office-locator" className="underline hover:text-gray-200 transition-colors">click here</Link>.
                    </div>
                </div>
            </div>

            {/* Floating 'Get Started' Button */}
            <div className="absolute bottom-8 right-0 z-30 hidden md:block">
                <Button 
                    asChild 
                    className="hover:opacity-90 text-white rounded-l-full rounded-r-none px-10 py-7 font-bold shadow-xl border border-white/10"
                    style={{ backgroundColor: '#043b67', fontSize: '16px' }}
                >
                    <Link href="/contact-us">Get Started</Link>
                </Button>
            </div>
            
            {/* Mobile floating button */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 md:hidden w-[90%] max-w-xs">
                <Button 
                    asChild 
                    size="lg" 
                    className="hover:opacity-90 text-white rounded-full w-full py-6 text-lg font-bold shadow-xl border border-white/20"
                    style={{ backgroundColor: '#043b67' }}
                >
                    <Link href="/contact-us">Get Started</Link>
                </Button>
            </div>
        </section>
    );
}
