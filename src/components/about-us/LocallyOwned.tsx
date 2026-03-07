import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function LocallyOwned() {
    return (
        <section className="py-12 sm:py-16 md:py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-5 sm:px-6 lg:px-6 xl:px-8 max-w-[1200px]">
                <div className="flex flex-col md:flex-row gap-8 sm:gap-12 lg:gap-16 items-start">
                    {/* Left - Image */}
                    <div className="w-full md:w-[45%] lg:w-[42%]">
                        <div className="relative h-[250px] sm:h-[320px] md:h-[400px] lg:h-[420px] w-full rounded-[8px] overflow-hidden shadow-md">
                            <Image
                                src="/images/Whisk_9894734fe0cb7bb81334f0608272d26adr.jpeg"
                                alt="Caregiver and senior in kitchen"
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                    </div>

                    {/* Right - Content */}
                    <div className="w-full md:w-[55%] lg:w-[58%] pt-2">
                        <h2 className="text-[24px] sm:text-[28px] md:text-[34px] font-bold text-[#043b67] mb-6 font-serif leading-tight">
                            Locally Owned & Nationally Known
                        </h2>
                        <div className="space-y-5 text-[15px] sm:text-[16px] md:text-[17px] text-[#333333] leading-[1.65] font-sans">
                            <p>
                                MidAid stands out as a leader in senior home care, recognized both locally and nationally for our commitment to excellence and quality.
                            </p>
                            <p>
                                Our locally owned offices maintain deep and meaningful roots within their communities, providing seniors with familiar faces and dedicated caregivers they can trust. In addition, our extensive national presence ensures we adhere to rigorous standards of care across the country, delivering consistent and reliable service.
                            </p>
                            <p>
                                This unique combination allows us to offer customized care solutions that meet the individual needs of seniors and their families while upholding our reputation for home care excellence nationwide.
                            </p>
                            <p>
                                Learn more about our compassionate services and caregivers by connecting with a MidAid <Link href="/office-locator" className="underline text-[#3b7ea1] hover:text-[#043b67] transition-colors">local home care office</Link> near you.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
