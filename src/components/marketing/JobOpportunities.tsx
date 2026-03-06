import Image from "next/image";
import Link from "next/link";

export function JobOpportunities() {
    return (
        <section className="py-10 sm:py-14 lg:py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-5 sm:px-6 lg:px-6 xl:px-8 max-w-[1440px]">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    
                    {/* Left - Content */}
                    <div className="w-full lg:w-[45%] xl:w-[40%] pr-0 sm:pr-4 lg:pr-12 mb-8 sm:mb-10 lg:mb-0">
                        <h2 className="text-[24px] sm:text-[28px] md:text-[34px] font-bold text-[#043b67] mb-4 sm:mb-6 font-serif leading-tight">
                            Home Care Job Opportunities
                        </h2>
                        
                        <p className="text-gray-800 leading-relaxed mb-8 text-[15px]">
                            Join our team of compassionate caregivers and develop a rewarding career providing seniors with respectful, dignified care in the comforts of their home.
                        </p>

                        <div className="flex rounded-[3px] overflow-hidden max-w-full sm:max-w-[420px] h-[46px] border border-gray-300">
                            <input
                                type="text"
                                placeholder="Enter Your Zip Code"
                                className="flex-grow px-4 text-gray-700 outline-none text-[14px] placeholder:text-gray-500 w-full bg-white"
                            />
                            <button
                                className="font-bold px-6 transition-opacity hover:opacity-90 shrink-0"
                                style={{ backgroundColor: '#dca626', color: '#043b67', fontSize: '14px' }}
                            >
                                Find Jobs Near You
                            </button>
                        </div>
                    </div>

                    {/* Right - Image */}
                    <div className="w-full lg:w-[50%] xl:w-[55%] relative flex justify-end">
                        <div 
                            className="relative h-[250px] sm:h-[320px] md:h-[450px] lg:h-[500px] w-full" 
                            style={{ 
                                borderTopLeftRadius: '200px', 
                                borderBottomLeftRadius: '200px',
                                overflow: 'hidden'
                            }}
                        >
                            <Image
                                src="/images/Whisk_e32bc940bc8e40cbbbb4f2faff8d6c40dr.jpeg"
                                alt="Caregiver helping senior woman"
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}