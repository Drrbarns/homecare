import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function AmericasChoice() {
    const services = [
        { label: "Alzheimer’s Care", href: "/alzheimers-care" },
        { label: "Companion Care", href: "/elderly-companion-care" },
        { label: "Dementia Care", href: "/dementia-care" },
        { label: "End-of-Life Care", href: "/end-of-life-care" },
        { label: "Live-In Care", href: "/live-in-care" },
        { label: "Palliative Care", href: "/palliative-care" },
        { label: "Parkinson's Care", href: "/parkinsons-care" },
        { label: "Personal Care", href: "/personal-care" },
        { label: "Respite Care", href: "/respite-care" },
        { label: "Transition to Home Care", href: "/transition-home-care" },
        { label: "Veterans In-Home Care", href: "/veterans-care" }
    ];

    return (
        <section className="py-10 sm:py-14 lg:py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-5 sm:px-6 lg:px-6 xl:px-8 max-w-[1440px]">
                <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-12 xl:gap-16 items-start">
                    
                    {/* Left Image Grid */}
                    <div className="w-full lg:w-[55%] xl:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-4 h-auto md:h-[600px]">
                        {/* Main large image */}
                        <div className="relative h-[280px] sm:h-[340px] md:h-full w-full col-span-1 overflow-hidden rounded-[4px]">
                            <Image
                                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1200&auto=format&fit=crop"
                                alt="Caregiver helping senior woman with hair"
                                fill
                                className="object-cover"
                            />
                        </div>
                        
                        {/* Right column smaller images */}
                        <div className="hidden md:flex flex-col gap-4 h-full">
                            {/* Top right smaller image */}
                            <div className="relative h-[292px] w-full overflow-hidden rounded-[4px]">
                                <Image
                                    src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=800&auto=format&fit=crop"
                                    alt="Caregiver looking at photo album with senior"
                                    fill
                                    className="object-cover object-top"
                                />
                            </div>
                            
                            {/* Bottom right smaller image */}
                            <div className="relative h-[292px] w-full overflow-hidden rounded-[4px]">
                                <Image
                                    src="https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop"
                                    alt="Male caregiver walking with senior man"
                                    fill
                                    className="object-cover object-top"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="w-full lg:w-[45%] xl:w-[40%] pt-0 lg:pt-4">
                        <h2 className="text-[24px] sm:text-[28px] md:text-[34px] font-bold text-[#1b3664] mb-4 sm:mb-6 font-serif leading-tight">
                            America’s Choice in Senior Home Care
                        </h2>
                        
                        <div className="space-y-4 text-[#4a4a4a] mb-8 text-[14px]" style={{ lineHeight: '1.6' }}>
                            <p>
                                If you're looking for a professional help at home to assist your aging loved one with their daily needs, look no further than Visiting Angels—an esteemed name families have relied on since 1998. Thousands across the country rely on us for the best in-home senior care.
                            </p>
                            <p>
                                Our experienced caregivers are committed to enhancing the quality of life for your senior and providing peace of mind for you and your family. We'll create a customized care plan to help your loved one age safely and contently in their own home—with one-on-one support from a caregiver you both can trust.
                            </p>
                            <p>
                                Discover how Visiting Angels can offer personalized and compassionate care services today.
                            </p>
                        </div>

                        {/* Services List - Styled as a card on mobile, grid on desktop */}
                        <div className="bg-white rounded-[4px] shadow-[0_2px_15px_rgba(0,0,0,0.06)] border border-gray-100 p-6 sm:p-0 sm:shadow-none sm:border-none sm:bg-transparent mb-6 lg:mb-8">
                            <ul className="flex flex-col sm:grid sm:grid-cols-2 gap-y-4 sm:gap-y-2 sm:gap-x-2">
                                {services.map((service, index) => (
                                    <li key={index} className="flex items-center sm:items-start text-[15px] sm:text-[13px]">
                                        <span className="text-[#5c4a5c] sm:text-[#dca626] mr-3 sm:mr-2 text-[10px] sm:text-lg leading-none sm:mt-[0px]">●</span>
                                        <Link 
                                            href={service.href}
                                            className="text-[#3b7ea1] sm:text-[#1b3664] sm:font-bold underline sm:no-underline decoration-1 underline-offset-2 hover:text-[#1b3664] transition-colors"
                                        >
                                            {service.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Link 
                            href="/home-care-services"
                            className="block sm:inline-block text-center transition-opacity hover:opacity-90 mt-0 lg:mt-2 text-[16px] sm:text-[19px] px-6 sm:px-8 py-3.5 sm:py-3.5 rounded-[6px] font-bold sm:font-medium w-full sm:w-auto"
                            style={{ backgroundColor: '#dca626', color: '#000000' }}
                        >
                            View All Home Care Services
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}