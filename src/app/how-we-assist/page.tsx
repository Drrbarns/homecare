import Image from "next/image";
import Link from "next/link";
import { InnerPageHero } from "@/components/shared/InnerPageHero";
import { HomeCareInfoSidebar } from "@/components/layout/sidebar/HomeCareInfoSidebar";
import { FloatingGetStarted } from "@/components/layout/FloatingGetStarted";
import { Newsletter } from "@/components/marketing/Newsletter";

export const metadata = {
    title: "How We Assist | Essential In-Home Care Services",
    description: "With a helping hand from MidAid, your loved one can feel content and secure in a familiar place—home.",
};

export default function HowWeAssistPage() {
    return (
        <>
            <InnerPageHero
                title="How We Assist"
                description="With a helping hand from MidAid, your loved one can feel content and secure in a familiar place—home."
                imageSrc="/images/Whisk_05c25109353fe2d88f1437b47bfffa90dr.jpeg"
                imageAlt="Caregiver drying senior woman's hair"
            />

            <div className="container mx-auto px-5 sm:px-6 lg:px-6 xl:px-8 max-w-[1440px] py-10 sm:py-16 lg:py-24">
                <div className="flex flex-col lg:flex-row gap-12 xl:gap-16">
                    {/* Left Sidebar */}
                    <div className="w-full lg:w-[320px] shrink-0">
                        <HomeCareInfoSidebar />
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 w-full text-[15px] md:text-[16px] text-[#333333] leading-[1.7] font-sans">
                        
                        <h2 className="text-[26px] md:text-[30px] font-bold text-[#043b67] mb-6 font-sans tracking-tight">
                            Helping Seniors Age in Place
                        </h2>
                        
                        <p className="mb-6 text-[15.5px]">
                            At MidAid, we know how much older adults want to live at home for as long as
                            possible. However, remaining safe and comfortable at home alone can be challenging and
                            sometimes impossible.
                        </p>
                        
                        <p className="mb-6 text-[15.5px]">
                            As your loved one ages, they may lose mobility, strength, and coordination, which can impede their
                            daily activities and routines. As a result, they may also lose their independence and self-worth.
                        </p>

                        <p className="mb-12 text-[15.5px]">
                            As one of America's leading home care providers for more than 25 years, MidAid offers a
                            safe, affordable alternative to assisted living—even if your loved one needs Alzheimer's care or
                            dementia care.
                        </p>

                        {/* Text + Image Right Layout */}
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start mb-16">
                            <div className="w-full lg:w-[60%] flex flex-col justify-start">
                                <h2 className="text-[26px] md:text-[30px] font-bold text-[#043b67] mb-5 font-sans tracking-tight leading-tight">
                                    Essential In-Home Care Services for<br/>Seniors
                                </h2>
                                <p className="mb-6 text-[15.5px]">
                                    Our professional caregivers provide non-medical assistance and
                                    companionship for seniors of all ages and abilities. We balance
                                    our <Link href="/home-care-services" className="underline text-[#3b7ea1] hover:text-[#043b67]">senior care services</Link> to support your loved one's personal
                                    preferences together with their physical and cognitive needs.
                                    We'll also help restore your peace of mind, knowing your loved
                                    one is aging in place with a dedicated professional caregiver by
                                    their side.
                                </p>
                            </div>
                            <div className="w-full lg:w-[40%] flex gap-4 mt-2">
                                <div className="flex-1 relative h-[320px] md:h-[380px] rounded-[8px] overflow-hidden shadow-sm">
                                    <Image
                                        src="/images/Whisk_8d4f37c2eb7ea69bb8f4fb907c9e48bcdr.jpeg"
                                        alt="Caregiver wiping counter"
                                        fill
                                        className="object-cover object-center"
                                    />
                                </div>
                                <div className="flex-1 relative h-[320px] md:h-[380px] rounded-[8px] overflow-hidden shadow-sm">
                                    <Image
                                        src="/images/Whisk_357ee580e5147ee96a948b18c1f186b4dr.jpeg"
                                        alt="Caregiver helping senior walk with walker"
                                        fill
                                        className="object-cover object-center"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Examples Box */}
                        <div className="border border-[#e5e7eb] bg-[#f8fbfc] rounded-[8px] p-8 md:p-10 mb-16 shadow-sm">
                            <p className="mb-6 text-[15.5px] text-[#3b7ea1] font-medium">
                                Examples of some essential tasks our caregivers can provide for your senior loved one include:
                            </p>
                            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                                <ul className="flex-1 space-y-4">
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333]">Bathing</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333]">Dressing</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333]">Grooming</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333]">Mobility & transfers</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333]">Medication reminders</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333]">Toileting</span>
                                    </li>
                                </ul>
                                <ul className="flex-1 space-y-4">
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333]">Companionship</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333]">Errands</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333]">Laundry</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333]">Light housekeeping</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333]">Meal planning & preparation</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-[9px] shrink-0"></div>
                                        <span className="text-[15.5px] text-[#333333]">Transportation assistance</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Images Left, Text Right Layout */}
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-16 items-center">
                            <div className="w-full lg:w-[45%] flex gap-4">
                                <div className="flex-1 relative h-[320px] md:h-[380px] rounded-[8px] overflow-hidden shadow-sm mt-4">
                                    <Image
                                        src="/images/Whisk_296661e1eecd735af5f4729a6c9cbca6dr.jpeg"
                                        alt="Senior man smiling"
                                        fill
                                        className="object-cover object-center"
                                    />
                                </div>
                                <div className="flex-1 flex flex-col gap-4">
                                    <div className="relative h-[180px] md:h-[220px] rounded-[8px] overflow-hidden shadow-sm">
                                        <Image
                                            src="/images/Whisk_05c25109353fe2d88f1437b47bfffa90dr.jpeg"
                                            alt="Caregiver smiling with senior man"
                                            fill
                                            className="object-cover object-center"
                                        />
                                    </div>
                                    <div className="relative h-[120px] md:h-[140px] rounded-[8px] overflow-hidden shadow-sm">
                                        <Image
                                            src="/images/Whisk_357ee580e5147ee96a948b18c1f186b4dr.jpeg"
                                            alt="Preparing food"
                                            fill
                                            className="object-cover object-center"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-[55%] flex flex-col justify-start">
                                <h2 className="text-[26px] md:text-[30px] font-bold text-[#043b67] mb-5 font-sans tracking-tight leading-tight">
                                    Professional In-Home<br/>Senior Care Services
                                </h2>
                                <p className="mb-6 text-[15.5px]">
                                    Professional in-home senior care services
                                    are provided by bonded, insured
                                    professional caregivers. Your loved one will
                                    get a customized plan tailored to their needs
                                    and preferences. Specialized services, such
                                    as Alzheimer's care, dementia care, and <Link href="/end-of-life-care" className="underline text-[#3b7ea1] hover:text-[#043b67]">end-
                                    of-life care</Link>, are available if they have
                                    advanced needs.
                                </p>
                                <div>
                                    <Link
                                        href="/office-locator"
                                        className="inline-flex items-center justify-center bg-[#dca626] text-[#043b67] font-bold text-[15px] px-8 py-3.5 rounded-[4px] hover:opacity-90 transition-opacity"
                                    >
                                        View Our Office Locations
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Benefits of Aging in Place Banner */}
                        <div className="bg-[#043b67] rounded-[4px] p-8 md:p-12 mb-16 relative overflow-hidden shadow-lg w-[100vw] relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
                            <div className="container mx-auto px-4 lg:px-6 xl:px-8 max-w-[1440px]">
                                {/* Using empty div hack for full width background but keeping content contained */}
                                <div className="flex flex-col lg:flex-row gap-12 xl:gap-16">
                                    {/* Offset left space to match layout */}
                                    <div className="hidden lg:block w-[320px] shrink-0"></div>
                                    
                                    <div className="flex-1 w-full relative z-10">
                                        <h2 className="text-[28px] md:text-[34px] font-bold text-white mb-6 font-sans tracking-tight text-center lg:text-left">
                                            Benefits of Aging in Place
                                        </h2>
                                        
                                        <p className="mb-6 text-[15.5px] text-white">
                                            According to a <Link href="#" className="underline hover:text-gray-200">2021 study conducted by the AARP</Link>, 77% of adults age 50 and older want to remain in their homes as they age.
                                        </p>
                                        
                                        <p className="mb-6 text-[15.5px] text-white">
                                            Without professional home care, many seniors struggle to maintain their independence. While an assisted living facility may be an option, it
                                            requires moving your loved one into a new place.
                                        </p>
                                        
                                        <p className="mb-8 text-[15.5px] text-white">
                                            Our compassionate caregivers can enable your senior to remain safely at home—maintaining their dignity and giving you peace of mind.
                                        </p>
                                        
                                        <p className="mb-8 text-[15.5px] text-white font-bold">
                                            The benefits of professional in-home care include:
                                        </p>
                                        
                                        {/* 3 Column Grid for Top Row */}
                                        <div className="grid md:grid-cols-3 gap-6 mb-6">
                                            {/* Companionship */}
                                            <div className="bg-white rounded-[6px] p-8 flex flex-col h-full hover:shadow-md transition-shadow">
                                                <div className="flex justify-end mb-4">
                                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#9c4958" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                                                    </svg>
                                                </div>
                                                <h3 className="text-[18px] font-bold text-[#043b67] mb-3 font-sans">Companionship</h3>
                                                <p className="text-[14.5px] text-[#333333] leading-[1.7]">
                                                    Professional caregivers provide camaraderie and
                                                    social interaction, which can reduce the risk of
                                                    social isolation, depression, and anxiety. A
                                                    professional caregiver can also encourage your
                                                    loved one to stay connected to friends and
                                                    relatives through phone and video calls as well as
                                                    facilitate in-person visits.
                                                </p>
                                            </div>

                                            {/* Familiar Surroundings */}
                                            <div className="bg-white rounded-[6px] p-8 flex flex-col h-full hover:shadow-md transition-shadow">
                                                <div className="flex justify-end mb-4">
                                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#9c4958" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                                                        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                                                    </svg>
                                                </div>
                                                <h3 className="text-[18px] font-bold text-[#043b67] mb-3 font-sans leading-tight">Familiar Surroundings<br/>and Routines</h3>
                                                <p className="text-[14.5px] text-[#333333] leading-[1.7]">
                                                    Your senior can continue to live in a secure and
                                                    comfortable environment without the hassle of
                                                    relocating to a family member's home or an
                                                    assisted living facility. They can maintain their
                                                    routines—from watching TV in a favorite chair to
                                                    individual mealtime preferences to nightly
                                                    neighborhood strolls—in familiar surroundings.
                                                </p>
                                            </div>

                                            {/* Flexibility */}
                                            <div className="bg-white rounded-[6px] p-8 flex flex-col h-full hover:shadow-md transition-shadow">
                                                <div className="flex justify-end mb-4">
                                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#9c4958" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                                        <polyline points="14 2 14 8 20 8" />
                                                        <line x1="16" y1="13" x2="8" y2="13" />
                                                        <line x1="16" y1="17" x2="8" y2="17" />
                                                        <polyline points="10 9 9 9 8 9" />
                                                    </svg>
                                                </div>
                                                <h3 className="text-[18px] font-bold text-[#043b67] mb-3 font-sans">Flexibility</h3>
                                                <p className="text-[14.5px] text-[#333333] leading-[1.7]">
                                                    MidAid allows you to customize the care
                                                    schedule and receive help when needed to avoid
                                                    paying for unnecessary services and amenities.
                                                </p>
                                            </div>
                                        </div>

                                        {/* 3 Column Grid for Bottom Row */}
                                        <div className="grid md:grid-cols-3 gap-6">
                                            {/* Lower Cost */}
                                            <div className="bg-white rounded-[6px] p-8 flex flex-col h-full hover:shadow-md transition-shadow">
                                                <div className="flex justify-end mb-4">
                                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#9c4958" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="m12 14 4-4" />
                                                        <path d="M3.34 19a10 10 0 1 1 17.32 0" />
                                                        <path d="M8 10h8" />
                                                        <path d="m8 10 4 4" />
                                                    </svg>
                                                </div>
                                                <h3 className="text-[18px] font-bold text-[#043b67] mb-3 font-sans">Lower Cost</h3>
                                                <p className="text-[14.5px] text-[#333333] leading-[1.7]">
                                                    <Link href="/home-care-costs" className="underline text-[#3b7ea1] hover:text-[#043b67]">Home care costs</Link> are usually lower than 24/7
                                                    assisted living or nursing home care rates.
                                                    Assisted living facilities, nursing homes, and
                                                    senior communities often require a large, up-
                                                    front cash deposit — and there may be a lengthy
                                                    waiting list to move in.
                                                </p>
                                            </div>

                                            {/* Personalized Assistance */}
                                            <div className="bg-white rounded-[6px] p-8 flex flex-col h-full hover:shadow-md transition-shadow">
                                                <div className="flex justify-end mb-4">
                                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#9c4958" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                        <circle cx="12" cy="8" r="5" />
                                                        <path d="M20 21a8 8 0 0 0-16 0" />
                                                    </svg>
                                                </div>
                                                <h3 className="text-[18px] font-bold text-[#043b67] mb-3 font-sans">Personalized Assistance</h3>
                                                <p className="text-[14.5px] text-[#333333] leading-[1.7]">
                                                    Staff at assisted living facilities often care for
                                                    more than one older adult during each shift. In-
                                                    home personal care from MidAid will help
                                                    your older adult receive one-on-one assistance
                                                    tailored to their unique needs.
                                                </p>
                                            </div>

                                            {/* Reduced Risk of Falls */}
                                            <div className="bg-white rounded-[6px] p-8 flex flex-col h-full hover:shadow-md transition-shadow">
                                                <div className="flex justify-end mb-4">
                                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#9c4958" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                                                        <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06 7.06l.13.13" />
                                                        <path d="m10 10 2 2" />
                                                    </svg>
                                                </div>
                                                <h3 className="text-[18px] font-bold text-[#043b67] mb-3 font-sans leading-tight">Reduced Risk of Falls,<br/>Injuries, and Household<br/>Accidents</h3>
                                                <p className="text-[14.5px] text-[#333333] leading-[1.7]">
                                                    Our <Link href="/caregivers" className="underline text-[#3b7ea1] hover:text-[#043b67]">caregivers</Link> are trained in <Link href="/fall-prevention" className="underline text-[#3b7ea1] hover:text-[#043b67]">fall prevention</Link> and
                                                    will take precautions to help your loved one stay
                                                    safe at home. A personal home care worker can
                                                    also decrease the risk of accidents in injury-prone
                                                    places, such as the kitchen and bathroom.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* How to Get Started CTA */}
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center mb-16 mt-16">
                            <div className="w-full lg:w-[60%]">
                                <h2 className="text-[26px] md:text-[30px] font-bold text-[#043b67] mb-5 font-sans tracking-tight">
                                    How to Get Started with Home Care
                                </h2>
                                <p className="mb-6 text-[15.5px]">
                                    Choosing the right home care provider is an important decision. A MidAid
                                    care coordinator will guide you through the entire process, starting with a free,
                                    no-obligation <Link href="/home-care-services" className="underline text-[#3b7ea1] hover:text-[#043b67]">home care consultation</Link> to talk about services, schedules, and
                                    personal preferences.
                                </p>
                                <p className="mb-0 text-[15.5px]">
                                    When you're ready to learn more about our compassionate in-home services, contact your
                                    nearest MidAid <Link href="/office-locator" className="underline text-[#3b7ea1] hover:text-[#043b67]">home care location</Link> today or call <a href="tel:489987299" className="underline text-[#3b7ea1] hover:text-[#043b67]">489 987 299</a>.
                                </p>
                            </div>
                            <div className="w-full lg:w-[40%] flex justify-center lg:justify-end">
                                <div className="w-[300px] h-[300px] rounded-full overflow-hidden shadow-lg relative border-4 border-white">
                                    <Image
                                        src="/images/Whisk_296661e1eecd735af5f4729a6c9cbca6dr.jpeg"
                                        alt="Caregiver helping senior woman with mirror"
                                        fill
                                        className="object-cover object-center"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Newsletter />
            <FloatingGetStarted />
        </>
    );
}
