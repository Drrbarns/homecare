import { PageHeader } from "@/components/layout/PageHeader";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: "Senior Care Near You | MidAid",
    description: "Personalized home care services to help seniors thrive in familiar surroundings.",
}

const servicesGrid = [
    {
        title: "Companion Care",
        desc: "If your loved one needs companionship, interaction, or emotional support, a companion caregiver can be a friendly, familiar face to help them get through the day and reignite their enjoyment of life.",
        link: "/home-care-services",
        imgUrl: "/images/Whisk_5284f1c79ad188d96ea40c3c552f6a8ddr.jpeg"
    },
    {
        title: "Personal Care",
        desc: "If mobility or health issues threaten your loved one’s independence, a personal caregiver can help them with essential daily tasks to maintain their independence.",
        link: "/home-care-services",
        imgUrl: "/images/Whisk_b6a603f7825005bbef04d2682078e1dadr.jpeg"
    },
    {
        title: "Respite Care",
        desc: "Our expert team can give you a break and relieve your caregiving duties for an afternoon, a day, or a week so you can focus on other personal and work obligations.",
        link: "/home-care-services",
        imgUrl: "/images/Whisk_8e2337f3d2e7aa385fd491b1b03a33eddr.jpeg"
    },
    {
        title: "Hospital Transition Care",
        desc: "Our “Ready, Set, Go Home” program provides non-medical support to help seniors successfully adapt to their homes after hospitalization.",
        link: "/home-care-services",
        imgUrl: "/images/Whisk_58fde24840a7474b7a14908eb9963268dr.jpeg"
    },
    {
        title: "Dementia Care",
        desc: "Our caregivers will provide compassionate and personalized support for your loved one facing the challenges and obstacles of dementia.",
        link: "/home-care-services",
        imgUrl: "/images/Whisk_c5faabb9e52a3ccab5d4b76b9c26bf9ddr.jpeg"
    },
    {
        title: "Alzheimer's Care",
        desc: "Every day with Alzheimer’s can be unpredictable. Professional caregivers can guide your loved one’s path and prepare your family for the road ahead.",
        link: "/home-care-services",
        imgUrl: "/images/Whisk_211a92a631317e69afe444d0f71b5259dr.jpeg"
    }
];

export default function ServicesPage() {
    return (
        <div className="relative w-full bg-[#f9fafa] min-h-screen">
            {/* Sticky Get Started Button */}
            <div className="fixed right-0 top-[60%] -translate-y-1/2 z-50 hidden md:block">
                <Link href="/contact-us" className="bg-[#1b3664] hover:bg-[#122648] text-white px-8 py-3.5 rounded-l-full font-bold shadow-xl text-[16px] transition-colors border border-r-0 border-white/10">
                    Get Started
                </Link>
            </div>

            {/* Custom Hero Section */}
            <section className="relative w-full h-[360px] sm:h-[420px] md:h-[500px] bg-[#1b3664] overflow-hidden">
                {/* Right side image */}
                <div className="absolute inset-0 left-auto right-0 w-full md:w-[55%] h-full z-0">
                    <img
                        src="/images/Whisk_746067bfd3a638b986c41556e27fe594dr.jpeg"
                        alt="Caregiver helping senior on stairs"
                        className="w-full h-full object-cover"
                    />
                    {/* Dark gradient overlay on the image specifically to blend the transition if needed */}
                    <div className="absolute inset-0 bg-black/10"></div>
                </div>

                {/* Left side dark blue arc overlay */}
                <div
                    className="absolute inset-0 bg-[#1b3664] z-10 w-full md:w-[70%]"
                    style={{
                        clipPath: 'polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%)',
                    }}
                ></div>

                {/* Smooth Curve SVG Overlay (using a specific mask technique for precise design matching) */}
                <div className="absolute top-0 bottom-0 left-[45%] lg:left-[55%] w-[40%] h-full z-[11] text-[#1b3664]">
                    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full fill-current">
                        <path d="M0,0 Q100,50 0,100 L0,0 Z" />
                    </svg>
                    {/* Add white architectural lines from the screenshot */}
                    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full overflow-visible">
                        <path d="M-10,-5 Q95,45 -10,105" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
                        <path d="M-15,-10 Q90,50 -15,110" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                        <path d="M-20,-15 Q85,55 -20,115" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                    </svg>
                </div>

                {/* Play Button Overlay on image */}
                <div className="absolute right-[20%] top-[45%] -translate-y-1/2 z-20 hidden md:flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-white/70 flex items-center justify-center cursor-pointer hover:bg-white/80 transition-colors backdrop-blur-sm shadow-xl">
                        <div className="w-0 h-0 border-t-[14px] border-t-transparent border-l-[22px] border-l-[#333] border-b-[14px] border-b-transparent ml-2"></div>
                    </div>
                </div>

                {/* Hero Content */}
                <div className="container relative z-20 mx-auto px-5 sm:px-6 lg:px-6 max-w-[1440px] h-full flex flex-col justify-center">
                    <div className="max-w-[550px]">
                        <h1 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-bold text-[#f2b926] mb-4 sm:mb-6 leading-[1.1]">
                            Home Care Services
                        </h1>
                        <p className="text-[15px] sm:text-[17px] md:text-[20px] text-white font-normal leading-relaxed">
                            MidAid has made aging in place possible for older adults across the country for more than 25 years.
                        </p>
                    </div>
                </div>
            </section>

            {/* Intro Content Section */}
            <section className="py-12 sm:py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-5 sm:px-6 lg:px-6 max-w-[1440px]">
                    <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16 max-w-[1100px] mx-auto">

                        {/* Image Left */}
                        <div className="w-full lg:w-[45%] shrink-0">
                            <div className="rounded-[25px] overflow-hidden shadow-lg w-full aspect-square relative">
                                <img
                                    src="/images/Whisk_00dc63d6413722fa54242c75b9901c48dr.jpeg"
                                    alt="Senior man and caregiver smiling outside"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>

                        {/* Text Right */}
                        <div className="w-full lg:w-[55%]">
                            <h2 className="text-[26px] sm:text-[30px] lg:text-[38px] font-bold text-[#1b3664] mb-5 sm:mb-8 leading-[1.2]">
                                Helping Seniors Thrive in Familiar Surroundings
                            </h2>
                            <div className="text-[15px] sm:text-[16px] md:text-[17px] text-[#333333] space-y-5 sm:space-y-6 leading-[1.7] font-sans">
                                <p>
                                    Our compassionate services have empowered seniors to navigate their later years gracefully on their own terms, allowing them to thrive in the comfort of their own homes—the place where they raised a family, built a career, and made cherished memories.
                                </p>
                                <p>
                                    Our professional <Link href="/careers" className="text-[#3b7ea1] underline decoration-[#3b7ea1]/40 decoration-2 underline-offset-4 hover:decoration-[#3b7ea1]">caregivers</Link> offer an alternative to assisted living facilities or a nursing home with in-home care plans that are personalized to the unique needs of your loved one.
                                </p>
                                <p>
                                    Your senior will stay active and engaged with a trusted MidAid caregiver by their side, establishing trust and reassurance for you.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Personalized Solutions Intro */}
            <section className="pt-20 pb-12 bg-transparent relative">
                {/* Wavy subtle background */}
                <div className="absolute inset-0 pointer-events-none opacity-50 z-0"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10 Q 25 20 50 10 T 100 10' fill='none' stroke='%23e0eff2' stroke-width='2'/%3E%3Cpath d='M0 0 Q 25 10 50 0 T 100 0' fill='none' stroke='%23e0eff2' stroke-width='2'/%3E%3C/svg%3E")`,
                        backgroundSize: '120px 24px'
                    }}>
                </div>

                <div className="container mx-auto px-4 max-w-[850px] relative z-10 text-center">
                    <h2 className="text-[32px] lg:text-[40px] font-bold text-[#1b3664] mb-8">
                        Senior Care Options: Personalized Solutions
                    </h2>
                    <p className="text-[17px] text-[#333333] leading-[1.7] mb-6 font-sans">
                        At MidAid, we understand how overwhelming the home care decision can be when searching for professional agencies.
                    </p>
                    <p className="text-[17px] text-[#333333] leading-[1.7] mb-6 font-sans">
                        The good news? We simplify the process by providing expert guidance every step of the way, helping you understand how to provide the best care for your loved one.
                    </p>
                    <p className="text-[17px] text-[#333333] leading-[1.7] font-sans">
                        We can tailor the following home care services to meet your unique needs and requests:
                    </p>
                </div>
            </section>

            {/* Services Card Grid */}
            <section className="pb-12 sm:pb-16 md:pb-24 pt-4 bg-transparent relative">
                {/* Wavy subtle background continuation */}
                <div className="absolute inset-0 pointer-events-none opacity-50 z-0"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10 Q 25 20 50 10 T 100 10' fill='none' stroke='%23e0eff2' stroke-width='2'/%3E%3Cpath d='M0 0 Q 25 10 50 0 T 100 0' fill='none' stroke='%23e0eff2' stroke-width='2'/%3E%3C/svg%3E")`,
                        backgroundSize: '120px 24px'
                    }}>
                </div>

                <div className="container mx-auto px-5 sm:px-6 lg:px-6 max-w-[1280px] relative z-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 gap-y-8 sm:gap-y-10 lg:gap-x-10 lg:gap-y-14">
                        {servicesGrid.map((card, i) => (
                            <div key={i} className="bg-white rounded-[20px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col h-full border border-gray-100 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] transition-shadow">
                                <div className="h-[220px] w-full overflow-hidden shrink-0">
                                    <img
                                        src={card.imgUrl}
                                        alt={card.title}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                </div>
                                <div className="p-5 sm:p-6 md:p-10 flex flex-col items-center flex-grow text-center">
                                    <Link href={card.link} className="inline-block mb-5 pb-1 border-b-[3px] border-[#1b3664] hover:text-[#3b7ea1] hover:border-[#3b7ea1] transition-colors">
                                        <h3 className="text-[22px] font-bold text-[#1b3664] font-sans">
                                            {card.title}
                                        </h3>
                                    </Link>
                                    <p className="text-[15px] text-[#333333] leading-[1.65] font-sans">
                                        {card.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-10 sm:py-14 md:py-16 bg-[#f8f6ee] relative overflow-hidden">
                {/* Wavy background texture */}
                <div className="absolute inset-0 opacity-40 z-0 pointer-events-none mix-blend-multiply"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='30' viewBox='0 0 60 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 15 Q 15 30 30 15 T 60 15' fill='none' stroke='%23e4dfc5' stroke-width='4' stroke-linecap='round'/%3E%3Cpath d='M0 0 Q 15 15 30 0 T 60 0' fill='none' stroke='%23e4dfc5' stroke-width='4' stroke-linecap='round'/%3E%3Cpath d='M0 30 Q 15 45 30 30 T 60 30' fill='none' stroke='%23e4dfc5' stroke-width='4' stroke-linecap='round'/%3E%3C/svg%3E")`,
                        backgroundSize: '90px 45px'
                    }}>
                </div>

                <div className="container mx-auto px-5 sm:px-6 lg:px-6 max-w-[1100px] relative z-10">
                    <div className="text-center mb-8 sm:mb-10">
                        <h2 className="text-[26px] sm:text-[30px] md:text-[36px] font-bold text-[#1b3664] mb-2 font-sans tracking-tight">
                            We're Here For You
                        </h2>
                        <p className="text-[20px] text-[#1b3664] font-medium font-sans">
                            Call <strong className="font-bold">0489 987 299</strong> or fill out the form below.
                        </p>
                    </div>

                    <div className="bg-white rounded-[10px] shadow-[0_10px_40px_rgba(0,0,0,0.08)] overflow-hidden">
                        {/* Top Blue Bar */}
                        <div className="bg-[#0f3f6e] py-4 px-6 flex flex-col md:flex-row items-center justify-center gap-6 text-white w-full">
                            <span className="text-[13px] font-bold tracking-widest uppercase">PLEASE SELECT:</span>
                            <div className="flex gap-6 items-center">
                                <label className="flex items-center gap-2 cursor-pointer font-medium text-[15px]">
                                    <input type="radio" name="inquiry_type" defaultChecked className="w-4 h-4 accent-white" />
                                    Home Care Services
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer font-medium text-[15px]">
                                    <input type="radio" name="inquiry_type" className="w-4 h-4 accent-white" />
                                    Employment Opportunities
                                </label>
                            </div>
                        </div>

                        {/* Form Body */}
                        <div className="p-5 sm:p-8 md:p-10">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-8 mb-8">
                                {/* Row 1 */}
                                <div>
                                    <label className="block text-[#333333] mb-2 text-[14px] font-medium">Your Name <span className="text-red-500">*</span></label>
                                    <input type="text" placeholder="Name" className="w-full border border-gray-200 rounded-[5px] px-4 py-3 placeholder-gray-300 focus:outline-none focus:border-[#3b7ea1] focus:ring-1 focus:ring-[#3b7ea1] text-[15px]" />
                                </div>
                                <div>
                                    <label className="block text-[#333333] mb-2 text-[14px] font-medium">Phone <span className="text-red-500">*</span></label>
                                    <input type="tel" placeholder="Phone" className="w-full border border-gray-200 rounded-[5px] px-4 py-3 placeholder-gray-300 focus:outline-none focus:border-[#3b7ea1] focus:ring-1 focus:ring-[#3b7ea1] text-[15px]" />
                                </div>
                                <div>
                                    <label className="block text-[#333333] mb-2 text-[14px] font-medium">Email <span className="text-red-500">*</span></label>
                                    <input type="email" placeholder="Email" className="w-full border border-gray-200 rounded-[5px] px-4 py-3 placeholder-gray-300 focus:outline-none focus:border-[#3b7ea1] focus:ring-1 focus:ring-[#3b7ea1] text-[15px]" />
                                </div>

                                {/* Row 2 */}
                                <div>
                                    <label className="block text-[#333333] mb-2 text-[14px] font-medium">ZIP Code where care is needed <span className="text-red-500">*</span></label>
                                    <input type="text" placeholder="Zip" className="w-full border border-gray-200 rounded-[5px] px-4 py-3 placeholder-gray-300 focus:outline-none focus:border-[#3b7ea1] focus:ring-1 focus:ring-[#3b7ea1] text-[15px]" />
                                </div>
                                <div className="relative">
                                    <label className="block text-[#333333] mb-2 text-[14px] font-medium">Relationship to the person who needs care <span className="text-red-500">*</span></label>
                                    <select className="w-full border border-gray-200 rounded-[5px] px-4 py-3 appearance-none bg-white focus:outline-none focus:border-[#3b7ea1] focus:ring-1 focus:ring-[#3b7ea1] text-[15px] text-[#333]">
                                        <option value="">Please select</option>
                                        <option value="Self">Self</option>
                                        <option value="Parent">Parent</option>
                                        <option value="Spouse">Spouse</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    <div className="absolute right-4 bottom-4 pointer-events-none text-gray-500">
                                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                    </div>
                                </div>
                                <div className="relative">
                                    <label className="block text-[#333333] mb-2 text-[14px] font-medium">How did you hear about us? <span className="text-red-500">*</span></label>
                                    <select className="w-full border border-gray-200 rounded-[5px] px-4 py-3 appearance-none bg-white focus:outline-none focus:border-[#3b7ea1] focus:ring-1 focus:ring-[#3b7ea1] text-[15px] text-[#333]">
                                        <option value="">Please select</option>
                                        <option value="Internet Search">Internet Search</option>
                                        <option value="TV">TV</option>
                                        <option value="Friend/Family">Friend/Family</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    <div className="absolute right-4 bottom-4 pointer-events-none text-gray-500">
                                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row gap-6 md:items-start justify-between">
                                <p className="text-[12px] text-[#555] leading-[1.6] md:w-3/4">
                                    By submitting this form I agree to be contacted by MidAid via call, email and text. To opt out, you can reply 'stop' at any time or click the unsubscribe link in the emails. Message and data rates may apply. Learn more on our <Link href="#" className="text-[#3b7ea1] hover:underline">Privacy Policy</Link> page.
                                </p>
                                <button className="bg-[#cc9900] hover:bg-[#b38600] text-[#1b3664] font-bold py-3 px-8 rounded-[4px] shrink-0 transition-colors shadow-sm text-[16px]">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="container mx-auto px-5 sm:px-6 lg:px-6 max-w-[1280px]">
                    <h2 className="text-[26px] sm:text-[30px] md:text-[34px] font-bold text-[#1b3664] mb-6 sm:mb-8 md:mb-10 font-sans tracking-tight">
                        Frequently Asked Questions
                    </h2>

                    <div className="space-y-4">
                        {[
                            "Why Is Aging In Place Important?",
                            "How Will I Know When My Loved One Needs Extra Care?",
                            "Why Should I Choose In-Home Care?",
                            "What Home Care Services Does MidAid Provide?",
                            "How Do I Determine What Home Care Services My Loved One Needs?",
                            "What Happens During a Home Care Assessment?"
                        ].map((question, i) => (
                            <div key={i} className="bg-[#f4f4f4] hover:bg-[#ededed] cursor-pointer rounded-sm flex items-center justify-between transition-colors overflow-hidden">
                                <div className="py-5 px-6 font-medium text-[#333333] text-[16px] md:text-[18px] font-sans">
                                    {question}
                                </div>
                                <div className="bg-[#5c4a5c] text-white self-stretch flex items-center justify-center px-6 w-16 shrink-0 transition-opacity hover:opacity-90">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 5v14M19 12l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
