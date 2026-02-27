import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function AmericasChoice() {
    const services = [
        "Alzheimer’s Care", "Companion Care", "Dementia Care",
        "End-of-Life Care", "Live-In Care", "Palliative Care",
        "Parkinson's Care", "Personal Care", "Respite Care",
        "Transition to Home Care", "Veterans In-Home Care"
    ];

    return (
        <section className="py-16 lg:py-20 bg-white">
            <div className="container mx-auto px-4 lg:px-6 xl:px-8 max-w-[1440px]">
                <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-12 xl:gap-16 items-start">
                    
                    {/* Left Image Grid */}
                    <div className="w-full lg:w-[55%] xl:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-4 h-auto md:h-[600px]">
                        {/* Main large image */}
                        <div className="relative h-[400px] md:h-full w-full col-span-1 overflow-hidden rounded-[4px]">
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
                    <div className="w-full lg:w-[45%] xl:w-[40%] pt-4">
                        <h2 className="text-[28px] md:text-[34px] font-bold text-[#1b3664] mb-6 font-serif leading-tight">
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

                        {/* Two-column bullet list for services */}
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-2 mb-8">
                            {services.map((service, index) => (
                                <li key={index} className="flex items-start text-[#1b3664] font-bold text-[13px]">
                                    <span className="text-[#dca626] mr-2 mt-[0px] text-lg leading-none">•</span>
                                    {service}
                                </li>
                            ))}
                        </ul>

                        <Link 
                            href="/home-care-services"
                            className="inline-block transition-opacity hover:opacity-90 mt-2"
                            style={{ backgroundColor: '#ce9b36', color: '#000000', borderRadius: '6px', padding: '14px 32px', fontSize: '19px', fontWeight: '500' }}
                        >
                            View All Home Care Services
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}