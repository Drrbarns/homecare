import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <section className="relative w-full flex bg-[#173559]" style={{ minHeight: '380px' }}>
            {/* Background Image (Right side) */}
            <div className="absolute inset-0 z-0 hidden md:block w-full h-full">
                <Image
                    src="/images/hero.png" // Ensure this image is in public/images/
                    alt="Senior woman smiling with caregiver"
                    fill
                    className="object-cover object-right"
                    priority
                />
            </div>
            
            {/* Mobile Image */}
            <div className="absolute inset-0 z-0 md:hidden opacity-30 w-full h-full">
                <Image
                    src="/images/hero.png"
                    alt="Senior woman smiling with caregiver"
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
                        d="M0,0 L700,0 C740,0 800,100 800,240 C800,380 740,480 700,480 L0,480 Z"
                        fill="#173559"
                    />
                    {/* First decorative white line */}
                    <path
                        d="M720,0 C760,0 820,100 820,240 C820,380 760,480 720,480"
                        fill="none"
                        stroke="rgba(255,255,255,0.4)"
                        strokeWidth="1"
                    />
                    {/* Second decorative light line */}
                    <path
                        d="M740,0 C780,0 840,100 840,240 C840,380 780,480 740,480"
                        fill="none"
                        stroke="rgba(255,255,255,0.2)"
                        strokeWidth="1"
                    />
                </svg>
            </div>

            {/* Content Container */}
            <div className="container mx-auto relative z-20 flex h-full items-center px-4 lg:px-6 xl:px-8 max-w-[1440px] py-10 md:py-16">
                <div className="w-full max-w-[480px]">
                    <h1 className="font-bold leading-[1.1] mb-4 md:mb-6 tracking-tight text-white text-[30px] sm:text-[36px] md:text-[42px]">
                        <span className="block" style={{ color: '#dca626' }}>Compassionate</span>
                        <span className="block" style={{ color: '#dca626' }}>In-Home Senior Care</span>
                    </h1>

                    <p className="font-normal mb-4 md:mb-5 text-white tracking-wide text-[15px] sm:text-[16px] md:text-[18px]">
                        Find a Visiting Angels home care office near you:
                    </p>

                    <div className="flex flex-col sm:flex-row bg-white overflow-hidden mb-3 shadow-sm rounded-[3px] max-w-[420px]">
                        <input
                            type="text"
                            placeholder="Where is Care Needed?"
                            className="flex-grow px-4 py-3 sm:py-0 text-gray-700 outline-none w-full placeholder:text-gray-400 text-[14px]"
                        />
                        <button
                            className="font-bold px-6 py-3 sm:py-0 transition-opacity hover:opacity-90 shrink-0 text-[14px]"
                            style={{ backgroundColor: '#dca626', color: '#173559' }}
                        >
                            Find Care
                        </button>
                    </div>

                    <div className="text-white mt-2 text-[12px]">
                        For services in Connecticut, <Link href="/office-locator" className="underline hover:text-gray-200 transition-colors">click here</Link>.
                    </div>
                </div>
            </div>

            {/* Floating 'Get Started' Button */}
            <div className="absolute bottom-6 right-0 z-30 hidden md:block">
                <Button 
                    asChild 
                    className="hover:opacity-90 text-white rounded-l-full rounded-r-none px-8 py-6 font-bold shadow-lg"
                    style={{ backgroundColor: '#173559', fontSize: '15px' }}
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
                    style={{ backgroundColor: '#173559' }}
                >
                    <Link href="/contact-us">Get Started</Link>
                </Button>
            </div>
        </section>
    );
}