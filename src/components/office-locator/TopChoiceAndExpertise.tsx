import Image from "next/image";
import Link from "next/link";

export function TopChoiceAndExpertise() {
    const servicesLeft = [
        "Camaraderie",
        "Companionship",
        "Help with errands",
        "Housekeeping",
        "Meal planning",
        "Hygiene assistance"
    ];

    const servicesRight = [
        "Meal preparation",
        "Medication reminders",
        "Overnight Care",
        "Personal Care",
        "Respite Care",
        "24-hour Care"
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 lg:px-6 xl:px-8 max-w-[1200px]">
                
                {/* Block 1: A Top Choice */}
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16 mb-24">
                    {/* Left Image */}
                    <div className="w-full md:w-[45%] lg:w-[40%]">
                        <div className="relative h-[300px] md:h-[350px] w-full rounded-[16px] overflow-hidden shadow-sm">
                            <Image
                                src="https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop"
                                alt="Male caregiver walking with senior man"
                                fill
                                className="object-cover object-top"
                            />
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="w-full md:w-[55%] lg:w-[60%]">
                        <h2 className="text-[28px] md:text-[34px] font-bold text-[#043b67] mb-6 font-sans tracking-tight leading-[1.2]">
                            A Top Choice in Home Care Across the Country
                        </h2>
                        <p className="text-[16px] md:text-[18px] text-[#333333] font-bold mb-6 font-sans">
                            Are you looking for professional and reliable <Link href="#" className="underline text-[#3b7ea1] hover:text-[#043b67] transition-colors">home care</Link> services in your area?
                        </p>
                        <div className="space-y-5 text-[15px] text-[#333333] leading-[1.6] font-sans">
                            <p>
                                Visiting Angels provides compassionate and dedicated care tailored to meet your loved one's specific needs. Whether assistance is needed with daily tasks or to provide companionship, our professional caregivers will provide personalized support in the comfort of your senior's home.
                            </p>
                            <p>
                                Simply enter your city, state, or ZIP code to connect with a Visiting Angels agency near you and discover how our dedicated care services can enhance your loved one's quality of life.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Block 2: 25+ Years Expertise */}
                <div className="flex flex-col md:flex-row items-start gap-12 lg:gap-16">
                    {/* Left Content */}
                    <div className="w-full md:w-[45%] lg:w-[45%]">
                        <h2 className="text-[28px] md:text-[34px] font-bold text-[#043b67] mb-6 font-sans tracking-tight leading-[1.2]">
                            25+ Years of Home Care Expertise
                        </h2>
                        <div className="space-y-5 text-[15px] text-[#333333] leading-[1.6] font-sans">
                            <p>
                                With more than 25 years of expertise in home care, Visiting Angels brings a wealth of experience and dedication to providing exceptional care for your loved one. Our seasoned <Link href="#" className="underline text-[#3b7ea1] hover:text-[#043b67] transition-colors">caregivers</Link> excel in meeting diverse needs, ensuring personalized assistance and meaningful companionship.
                            </p>
                            <p>
                                Our nationwide network of franchised offices can coordinate <Link href="#" className="underline text-[#3b7ea1] hover:text-[#043b67] transition-colors">senior care at home</Link> to meet both temporary and long-term needs.
                            </p>
                        </div>
                    </div>

                    {/* Right Card */}
                    <div className="w-full md:w-[55%] lg:w-[55%]">
                        <div className="bg-white border border-gray-200 rounded-[6px] p-8 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                            <h3 className="text-[18px] md:text-[20px] font-bold text-[#043b67] mb-6 font-sans">
                                Visiting Angels Provides Families With:
                            </h3>
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                                <ul className="flex-1 space-y-3">
                                    {servicesLeft.map((service, index) => (
                                        <li key={index} className="flex items-center text-[15px] text-[#333333] font-sans">
                                            <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 shrink-0"></div>
                                            {service}
                                        </li>
                                    ))}
                                </ul>
                                <ul className="flex-1 space-y-3">
                                    {servicesRight.map((service, index) => (
                                        <li key={index} className="flex items-center text-[15px] text-[#333333] font-sans">
                                            <div className="w-2 h-2 rounded-full bg-[#7a4b64] mr-3 shrink-0"></div>
                                            {service}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}