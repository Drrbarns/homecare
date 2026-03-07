import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function PersonalizedCare() {
    return (
        <section className="py-12 sm:py-16 md:py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-5 sm:px-6 lg:px-6 xl:px-8 max-w-[1200px]">
                {/* Block 1: Heading + text left, 3-image collage right */}
                <div className="flex flex-col md:flex-row gap-8 sm:gap-12 lg:gap-16 items-start">
                    <div className="w-full md:w-[48%]">
                        <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-[#043b67] mb-6 font-sans tracking-tight leading-[1.2]">
                            Providing Personalized In-Home Care Solutions
                        </h2>
                        <p className="text-[15px] sm:text-[16px] md:text-[17px] text-[#333333] leading-[1.65] mb-5">
                            At MidAid, we&apos;ll help you find an in-home care professional that meets all your needs and expectations. The process starts with a free, no-obligation consultation to answer all your questions.
                        </p>
                        <p className="text-[15px] sm:text-[16px] md:text-[17px] text-[#333333] leading-[1.65] mb-5">
                            Together, we&apos;ll determine the necessary services and care. Your care coordinator will create a comprehensive and personalized <Link href="/home-care-services" className="underline text-[#3b7ea1] hover:text-[#043b67] transition-colors">home care plan</Link> that reflects your family&apos;s schedules and preferences.
                        </p>
                        <p className="text-[15px] sm:text-[16px] md:text-[17px] text-[#333333] leading-[1.65] mb-5">
                            We&apos;ll match you with a trusted caregiver who will establish a solid and profound relationship with your loved one and be by their side as they face the challenges and complexities of aging.
                        </p>
                        <p className="text-[15px] sm:text-[16px] md:text-[17px] text-[#333333] leading-[1.65] mb-5">
                            You can count on your local MidAid to help your loved one maintain their independence and dignity at home.
                        </p>
                        <p className="text-[15px] sm:text-[16px] md:text-[17px] text-[#333333] leading-[1.65]">
                            Our professional, compassionate caregivers will work closely with your loved one so they can continue to live at home and enjoy the activities and lifestyle that make them content.
                        </p>
                    </div>
                    <div className="w-full md:w-[52%] relative">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="relative h-[200px] sm:h-[240px] md:h-[280px] rounded-[8px] overflow-hidden shadow-md">
                                <Image
                                    src="/images/Whisk_0fba9ea9ff184aba83f4de22c8809506dr.jpeg"
                                    alt="Senior with walker and caregiver"
                                    fill
                                    className="object-cover object-center"
                                />
                            </div>
                            <div className="relative h-[200px] sm:h-[240px] md:h-[280px] rounded-[8px] overflow-hidden shadow-md">
                                <Image
                                    src="/images/Whisk_d8f9606292b5ad791334d8674e7dd92ddr.jpeg"
                                    alt="Caregiver assisting senior on stairs"
                                    fill
                                    className="object-cover object-center"
                                />
                            </div>
                            <div className="relative h-[180px] sm:h-[200px] md:h-[240px] rounded-[8px] overflow-hidden shadow-md sm:col-span-2">
                                <Image
                                    src="/images/Whisk_255b99548e1e1a1ac1e487b499f6f4f7dr.jpeg"
                                    alt="Caregiver and senior smiling"
                                    fill
                                    className="object-cover object-center"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
