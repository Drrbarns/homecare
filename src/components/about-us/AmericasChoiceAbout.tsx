import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function AmericasChoiceAbout() {
    return (
        <section className="py-12 sm:py-16 md:py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-5 sm:px-6 lg:px-6 xl:px-8 max-w-[1200px]">
                <div className="flex flex-col md:flex-row gap-8 sm:gap-12 lg:gap-16 items-start">
                    {/* Left - Single vertical image */}
                    <div className="w-full md:w-[40%] lg:w-[38%]">
                        <div className="relative h-[250px] sm:h-[320px] md:h-[400px] lg:h-[480px] w-full rounded-[8px] overflow-hidden shadow-md">
                            <Image
                                src="/images/Whisk_01dfc7367c2a6e295be482b77f61fe58dr.jpeg"
                                alt="Caregiver and senior woman holding hands"
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                    </div>

                    {/* Right - Content */}
                    <div className="w-full md:w-[60%] lg:w-[62%] pt-2">
                        <h2 className="text-[24px] sm:text-[28px] md:text-[34px] font-bold text-[#043b67] mb-6 font-serif leading-tight">
                            America&apos;s Choice in Senior Home Care®
                        </h2>
                        <div className="space-y-5 text-[15px] sm:text-[16px] md:text-[17px] text-[#333333] leading-[1.65] font-sans">
                            <p>
                                For more than 25 years, MidAid has provided exceptional <Link href="/home-care-services" className="underline text-[#3b7ea1] hover:text-[#043b67] transition-colors">home care</Link> to families across the country. Every day, our nationwide network of offices provides vital care and support to hundreds of thousands of older adults.
                            </p>
                            <p>
                                Our senior care providers possess the training and expertise reflective of our longstanding commitment to senior care. Our experienced and dedicated <Link href="/careers" className="underline text-[#3b7ea1] hover:text-[#043b67] transition-colors">caregivers</Link> uphold the dignity and well-being of seniors in the comfort of their own homes.
                            </p>
                            <p>
                                With a deep commitment to enhancing the quality of life for seniors, we offer comprehensive in-home care tailored to the unique needs of each individual. Whether it's assistance with daily tasks, companionship, or specialized care, we support families and their loved ones every step of the way. Our unwavering commitment to compassionate and personalized senior care is one of the reasons why MidAid is a name families have trusted since 1998.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
