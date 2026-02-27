import Image from "next/image";

interface InnerPageHeroProps {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    showPlayButton?: boolean;
}

export function InnerPageHero({ 
    title, 
    description, 
    imageSrc, 
    imageAlt, 
    showPlayButton = false 
}: InnerPageHeroProps) {
    return (
        <section className="relative w-full flex bg-[#173559] overflow-hidden" style={{ height: "460px" }}>
            {/* Background Image (Right side) */}
            <div className="absolute inset-0 z-0 hidden md:block w-full h-full">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-cover object-right"
                    priority
                />
            </div>

            {/* Mobile Image */}
            <div className="absolute inset-0 z-0 md:hidden opacity-40 w-full h-full">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-cover object-center"
                    priority
                />
            </div>

            {/* SVG Curve Overlay (Left side) */}
            <div className="absolute inset-0 z-10 pointer-events-none hidden md:block w-full">
                <svg
                    className="h-full w-full"
                    viewBox="0 0 1440 460"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Dark Blue Base Curve */}
                    <path
                        d="M0,0 L600,0 C850,150 850,310 600,460 L0,460 Z"
                        fill="#173559"
                    />
                    {/* First decorative white line */}
                    <path
                        d="M620,0 C870,150 870,310 620,460"
                        fill="none"
                        stroke="rgba(255,255,255,0.4)"
                        strokeWidth="1"
                    />
                    {/* Second decorative light line */}
                    <path
                        d="M640,0 C890,150 890,310 640,460"
                        fill="none"
                        stroke="rgba(255,255,255,0.15)"
                        strokeWidth="1"
                    />
                </svg>
            </div>

            {/* Content Container */}
            <div className="container mx-auto relative z-20 flex h-full items-center px-4 lg:px-6 xl:px-8 max-w-[1440px]">
                <div className="w-full max-w-[520px]">
                    <h1
                        className="font-bold leading-[1.1] mb-6 tracking-tight font-sans"
                        style={{ fontSize: "48px", color: "#dca626" }}
                    >
                        {title}
                    </h1>
                    <p className="font-normal text-white tracking-wide max-w-[480px] font-sans" style={{ fontSize: "18px", lineHeight: "1.6" }}>
                        {description}
                    </p>
                </div>
            </div>

            {/* Play button overlay on image (desktop) */}
            {showPlayButton && (
                <div className="absolute right-[25%] lg:right-[28%] top-1/2 -translate-y-1/2 z-20 hidden md:flex w-28 h-28 rounded-full bg-white/70 items-center justify-center cursor-pointer hover:bg-white/80 transition-colors shadow-lg">
                    <div className="w-0 h-0 border-t-[16px] border-t-transparent border-b-[16px] border-b-transparent border-l-[26px] border-l-[#173559] ml-2" />
                </div>
            )}
        </section>
    );
}
