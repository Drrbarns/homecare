import Image from "next/image";
import Link from "next/link";
import { FloatingGetStarted } from "@/components/layout/FloatingGetStarted";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { Newsletter } from "@/components/marketing/Newsletter";

export const metadata = {
    title: "Caregiver Jobs | Part-Time & Full-Time Home Care Careers",
    description: "You're Set for Success from Day One When You Work for MidAid! Part-Time & Full-Time Home Care Careers.",
};

export default function EmploymentPage() {
    const faqItems = [
        {
            question: "What Is a Professional Caregiver?",
            answer: "A professional caregiver provides non-medical assistance to individuals who need help with daily activities. This can include seniors, people with disabilities, or those recovering from illness or injury. Caregivers help clients maintain their independence and quality of life in their own homes."
        },
        {
            question: "Where Are MidAid Offices Located?",
            answer: "MidAid has hundreds of locally owned and operated franchise locations across the United States. You can find an office near you by using our Office Locator tool on our website."
        },
        {
            question: "What Types of Senior Care Jobs Are Available?",
            answer: "We offer a variety of caregiver jobs, including companion care, personal care, specialized dementia and Alzheimer's care, respite care, and end-of-life care. Both full-time and part-time positions are available."
        },
        {
            question: "Do I Need Special Certifications, Training, or Experience to Apply?",
            answer: "Requirements vary by location and the specific role. Some offices may require previous experience or certifications like a CNA or HHA, while others offer training for individuals new to caregiving who possess a compassionate and caring personality."
        },
        {
            question: "How Much Do Caregivers Make Per Hour?",
            answer: "Pay rates vary depending on your location, experience, and the specific duties required. Our local offices offer competitive pay and may provide additional benefits."
        },
        {
            question: "What Scheduling Options Are Available?",
            answer: "We offer flexible scheduling to accommodate your lifestyle. Options may include part-time, full-time, weekends, overnights, or live-in shifts. You can work with your local office to create a schedule that fits your needs."
        },
        {
            question: "What Kind of Qualifications Do You Look For In a Caregiver?",
            answer: "We look for individuals who are compassionate, patient, reliable, and trustworthy. Good communication skills and a genuine desire to help others are essential. All candidates must pass a comprehensive background check."
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative bg-[#043b67] w-full overflow-hidden mb-8 sm:mb-12 md:mb-16">
                <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-[1440px] relative">
                    <div className="flex flex-col lg:flex-row h-auto lg:h-[450px]">
                        
                        {/* Left Content */}
                        <div className="w-full lg:w-[45%] py-8 sm:py-10 lg:py-0 flex flex-col justify-center relative z-20 pr-0 lg:pr-8">
                            <h1 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold text-[#dca626] font-sans leading-tight mb-3 sm:mb-4 tracking-tight">
                                Caregiver Jobs
                            </h1>
                            <p className="text-[15px] sm:text-[18px] md:text-[20px] text-white font-medium mb-4 sm:mb-6 leading-snug">
                                You&apos;re Set for Success from Day One When You Work for MidAid!
                            </p>
                            <p className="text-[14px] sm:text-[16px] text-white mb-6 sm:mb-8">
                                Part-Time & Full-Time Home Care Careers
                            </p>
                            
                            {/* Zip Code Form */}
                            <div className="flex max-w-full sm:max-w-[400px]">
                                <input 
                                    type="text" 
                                    placeholder="Enter Zip Code" 
                                    className="flex-1 px-4 py-3 rounded-l-[4px] border-none focus:outline-none text-[15px]"
                                />
                                <button className="bg-[#dca626] hover:bg-[#c99722] text-[#043b67] font-bold px-8 py-3 rounded-r-[4px] transition-colors">
                                    Submit
                                </button>
                            </div>
                        </div>

                        {/* Middle Curve Overlay (Desktop only) */}
                        <div className="hidden lg:block absolute left-[40%] top-0 bottom-0 w-[15%] z-10">
                            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" fill="#043b67">
                                <path d="M0,0 Q100,50 0,100 Z" />
                                <path d="M20,0 Q120,50 20,100" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                                <path d="M40,0 Q140,50 40,100" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                            </svg>
                        </div>

                        {/* Right Image */}
                        <div className="w-full lg:w-[60%] lg:absolute lg:right-0 lg:top-0 lg:bottom-0 h-[220px] sm:h-[280px] lg:h-auto relative z-0">
                            <Image
                                src="/images/Whisk_f607feefacd88ffab8b4904b9598c762dr.jpeg"
                                alt="Caregiver playing puzzle with senior man"
                                fill
                                className="object-cover object-center lg:object-left"
                            />
                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="w-20 h-20 bg-white/70 rounded-full flex items-center justify-center pl-2 backdrop-blur-sm cursor-pointer pointer-events-auto hover:bg-white/90 transition-all shadow-lg">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="#043b67">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-[1440px] mb-12 sm:mb-16 md:mb-24">
                
                {/* What's Important To You in a Career Section */}
                <div className="flex flex-col md:flex-row gap-8 sm:gap-10 lg:gap-16 mb-12 sm:mb-16 md:mb-24 items-start">
                    {/* Left Images Collage */}
                    <div className="w-full md:w-[45%] flex gap-3 sm:gap-4 h-[300px] sm:h-[400px] md:h-[500px]">
                        {/* Tall Image */}
                        <div className="w-[45%] relative rounded-[8px] overflow-hidden shadow-sm h-full">
                            <Image
                                src="/images/Whisk_99e8dc142646dc682654031eda6618cfdr.jpeg"
                                alt="Smiling caregiver"
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                        {/* Two Stacked Images */}
                        <div className="w-[55%] flex flex-col gap-4 h-full">
                            <div className="relative rounded-[8px] overflow-hidden shadow-sm h-[40%]">
                                <Image
                                    src="/images/Whisk_194bc4765147d5eaa2d4c6b166f535b7dr.jpeg"
                                    alt="Two caregivers smiling"
                                    fill
                                    className="object-cover object-center"
                                />
                            </div>
                            <div className="relative rounded-[8px] overflow-hidden shadow-sm h-[60%]">
                                <Image
                                    src="/images/Whisk_e52f1882674f17c98224937c1a4defb9dr.jpeg"
                                    alt="Caregiver reading with senior man"
                                    fill
                                    className="object-cover object-center"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Text Content */}
                    <div className="w-full md:w-[55%]">
                        <h2 className="text-[28px] md:text-[32px] font-bold text-[#043b67] mb-6 font-sans tracking-tight leading-tight">
                            What's Important To You in a Career?
                        </h2>
                        <p className="text-[15.5px] text-[#333333] mb-6 leading-[1.7]">
                            Build a meaningful career that fits your life while making a real difference
                            for others. As a <Link href="/caregivers" className="underline text-[#3b7ea1] hover:text-[#043b67]">MidAid professional caregiver</Link>, you'll help seniors
                            <Link href="/home-care-services" className="underline text-[#3b7ea1] hover:text-[#043b67]"> live safely and comfortably at home</Link>, forming real connections and bringing
                            peace of mind to families.
                        </p>
                        <p className="text-[15.5px] text-[#333333] mb-10 leading-[1.7]">
                            With MidAid, you'll find a vibrant, supportive workplace where
                            caregivers feel truly valued. We're ready to welcome you with the support
                            and ongoing training you need to succeed. Let's get started!
                        </p>

                        {/* 6 Reasons Box */}
                        <div className="border border-gray-200 rounded-[8px] p-5 sm:p-8 md:p-10 shadow-sm bg-white">
                            <h3 className="text-[20px] font-bold text-[#043b67] mb-6 font-sans">
                                6 Reasons to Join the MidAid Team:
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-center text-[15.5px] text-[#333333]">
                                    <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 shrink-0"></div>
                                    Easy hiring process
                                </li>
                                <li className="flex items-center text-[15.5px] text-[#333333]">
                                    <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 shrink-0"></div>
                                    Competitive pay and benefits
                                </li>
                                <li className="flex items-center text-[15.5px] text-[#333333]">
                                    <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 shrink-0"></div>
                                    Flexible scheduling
                                </li>
                                <li className="flex items-center text-[15.5px] text-[#333333]">
                                    <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 shrink-0"></div>
                                    Caregiver Matching Program
                                </li>
                                <li className="flex items-center text-[15.5px] text-[#333333]">
                                    <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 shrink-0"></div>
                                    Training Programs
                                </li>
                                <li className="flex items-center text-[15.5px] text-[#333333]">
                                    <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 shrink-0"></div>
                                    Career Advancement
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            {/* Start Your New Career Search Banner */}
            <div className="bg-[#fcf8e5] w-full py-10 sm:py-14 md:py-16 mb-0 relative overflow-hidden text-center flex flex-col items-center justify-center">
                {/* Subtle Wavy Pattern Overlay */}
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 20 Q 25 0, 50 20 T 100 20\' fill=\'none\' stroke=\'%23dca626\' stroke-width=\'2\'/%3E%3C/svg%3E")', backgroundSize: '100px 40px' }}></div>
                
                <div className="relative z-10 max-w-xl px-4 w-full">
                    <h2 className="text-[26px] md:text-[30px] font-bold text-[#043b67] mb-4 font-sans">
                        Start Your New Career with MidAid
                    </h2>
                    <p className="text-[15.5px] text-[#333333] mb-6">
                        Enter Your ZIP Code to Find Jobs Near You
                    </p>
                    <div className="flex w-full max-w-[400px] mx-auto shadow-sm">
                        <input 
                            type="text" 
                            placeholder="Enter Zip Code" 
                            className="flex-1 px-4 py-3.5 rounded-l-[4px] border border-gray-200 focus:outline-none focus:border-[#dca626] text-[15px]"
                        />
                        <button className="bg-[#dca626] hover:bg-[#c99722] text-[#043b67] font-bold px-8 py-3.5 rounded-r-[4px] transition-colors">
                            Submit
                        </button>
                    </div>
                </div>
            </div>

            {/* Award-Winning Offices - Full Width Background */}
            <div className="bg-[#eaf6f9] w-full py-12 sm:py-16 md:py-20 mb-12 sm:mb-16 md:mb-24 relative overflow-hidden">
                {/* Wavy Pattern overlay */}
                <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 20 Q 25 0, 50 20 T 100 20\' fill=\'none\' stroke=\'%233b7ea1\' stroke-width=\'2\'/%3E%3C/svg%3E")', backgroundSize: '100px 40px' }}></div>

                <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-[1440px] relative z-10">
                    <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
                        <div className="flex-1 max-w-3xl">
                            <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-[#043b67] mb-4 sm:mb-6 font-sans tracking-tight">
                                Award-Winning Offices
                            </h2>
                            <p className="text-[15.5px] text-[#333333] mb-6 leading-[1.7]">
                                Many of our locations nationwide have won the <a href="#" className="underline text-[#3b7ea1] hover:text-[#043b67]">Best of Home Care® Employer of Choice
                                award</a> from <a href="#" className="underline text-[#3b7ea1] hover:text-[#043b67]">Activated Insights</a> (formerly Home Care Pulse). This exclusive designation is
                                awarded to agencies based on feedback from caregivers and determined by the
                                organization's strength and culture of respect and support.
                            </p>
                            <p className="text-[15.5px] text-[#333333] mb-6 leading-[1.7]">
                                MidAid is also among only 10 brands endorsed as a "Best of Home Care®
                                National Provider."
                            </p>
                            <p className="text-[15.5px] text-[#333333] mb-8 leading-[1.7]">
                                With more than 600 locations across the country, MidAid has rewarding caregiver
                                jobs close to home—no matter where you live.
                            </p>
                            <button className="bg-[#dca626] hover:bg-[#c99722] text-[#043b67] font-bold px-8 py-3.5 rounded-[4px] transition-colors shadow-sm">
                                View Office Locations
                            </button>
                        </div>
                        <div className="w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] md:w-[280px] md:h-[280px] shrink-0 lg:ml-12">
                            <div className="bg-white rounded-full shadow-lg w-full h-full flex flex-col items-center justify-center border-[8px] border-[#4eb3a4] relative overflow-hidden">
                                <div className="absolute top-0 left-0 right-0 h-[65%] flex flex-col items-center justify-center pt-2">
                                    <svg viewBox="0 0 200 60" className="w-[160px] h-[48px] overflow-visible">
                                        <path id="curve" d="M 20 60 A 80 80 0 0 1 180 60" fill="transparent" />
                                        <text width="200" className="text-[20px] font-bold fill-[#043b67] tracking-[4px] uppercase" style={{fontFamily: "sans-serif"}}>
                                            <textPath href="#curve" startOffset="50%" textAnchor="middle">
                                                BEST OF HOME CARE
                                            </textPath>
                                        </text>
                                    </svg>
                                    <div className="flex justify-center gap-1.5 mt-1 mb-2">
                                        <div className="w-2.5 h-8 bg-[#dca626] rounded-full transform -rotate-[20deg]"></div>
                                        <div className="w-2.5 h-10 bg-[#dca626] rounded-full"></div>
                                        <div className="w-2.5 h-8 bg-[#dca626] rounded-full transform rotate-[20deg]"></div>
                                    </div>
                                </div>
                                
                                {/* Teal Ribbon Banner */}
                                <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 z-10 w-[110%] -ml-[5%]">
                                    <div className="bg-[#4eb3a4] text-white py-2 text-center relative shadow-md">
                                        {/* Ribbon ends */}
                                        <div className="absolute top-0 bottom-0 left-[-15px] w-[30px] bg-[#3a8b7f] transform skew-x-[30deg] -z-10"></div>
                                        <div className="absolute top-0 bottom-0 right-[-15px] w-[30px] bg-[#3a8b7f] transform -skew-x-[30deg] -z-10"></div>
                                        
                                        <p className="text-[20px] font-bold tracking-[3px] uppercase" style={{fontFamily: "sans-serif", textShadow: "1px 1px 2px rgba(0,0,0,0.2)"}}>
                                            PROVIDER
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="absolute bottom-6 left-0 right-0 text-center">
                                    <p className="text-[14px] font-bold text-[#043b67] tracking-[3px] uppercase" style={{fontFamily: "sans-serif"}}>
                                        OF CHOICE
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-[1440px] mb-12 sm:mb-16 md:mb-24">

                {/* Easy Hiring Process */}
                <div className="flex flex-col md:flex-row gap-8 sm:gap-10 lg:gap-16 mb-12 sm:mb-16 md:mb-24">
                    <div className="w-full md:w-[35%] shrink-0">
                        <div className="relative h-[280px] sm:h-[350px] md:h-full min-h-[300px] md:min-h-[450px] rounded-[8px] overflow-hidden shadow-sm">
                            <Image
                                src="/images/Whisk_e52f1882674f17c98224937c1a4defb9dr.jpeg"
                                alt="Male and female caregivers smiling"
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-[65%] flex flex-col justify-center">
                        <h2 className="text-[28px] md:text-[32px] font-bold text-[#043b67] mb-6 font-sans tracking-tight">
                            Easy Hiring Process
                        </h2>
                        <h3 className="text-[18px] font-bold text-[#333333] mb-4 font-sans">
                            New to caregiving?
                        </h3>
                        <p className="text-[15.5px] text-[#333333] mb-6 leading-[1.7]">
                            You can learn as you go with MidAid. We take a "character first" approach, hiring
                            caregivers who have caring hearts and a willingness to learn.
                        </p>
                        <p className="text-[15.5px] text-[#333333] mb-6 leading-[1.7]">
                            Applying with MidAid is quick and easy. Our streamlined process makes it easy to
                            start building your future:
                        </p>
                        
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start text-[15.5px] text-[#333333]">
                                <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-2 shrink-0"></div>
                                <span>View open positions at your local MidAid office</span>
                            </li>
                            <li className="flex items-start text-[15.5px] text-[#333333]">
                                <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-2 shrink-0"></div>
                                <span>Submit your application online</span>
                            </li>
                            <li className="flex items-start text-[15.5px] text-[#333333]">
                                <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-2 shrink-0"></div>
                                <span>Complete an interview with your local office team</span>
                            </li>
                            <li className="flex items-start text-[15.5px] text-[#333333]">
                                <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-2 shrink-0"></div>
                                <span>Pass a drug screening and background check</span>
                            </li>
                            <li className="flex items-start text-[15.5px] text-[#333333]">
                                <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 mt-2 shrink-0"></div>
                                <span>Start your MidAid career with training</span>
                            </li>
                        </ul>

                        <p className="text-[15.5px] text-[#333333] leading-[1.7]">
                            When you're invited for an interview, you can expect to answer basic questions about your
                            education and your work history. We'll also ask about the type of caregiving roles you're
                            interested in and about your availability. <a href="/office-locator" className="underline text-[#3b7ea1] hover:text-[#043b67]">Find a MidAid office location near you.</a>
                        </p>
                    </div>
                </div>

            </div>

            {/* Competitive Pay & Benefits Full Width Section */}
            <div className="bg-[#fcf8e5] w-full py-12 sm:py-16 md:py-20 mb-12 sm:mb-16 md:mb-24 relative">
                <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-[1440px]">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
                        <div className="flex-1">
                            <h2 className="text-[28px] md:text-[32px] font-bold text-[#043b67] mb-6 font-sans tracking-tight">
                                Competitive Pay & Benefits
                            </h2>
                            <p className="text-[15.5px] text-[#333333] mb-6 leading-[1.7]">
                                The pay range for MidAid caregivers varies depending on where you live, your
                                duties, and the shifts you work. Your local office team will provide specifics when you apply.
                            </p>
                            <p className="text-[15.5px] text-[#333333] mb-6 leading-[1.7]">
                                If you work full-time, you may be eligible for career benefits including
                            </p>
                            
                            <ul className="space-y-4">
                                <li className="flex items-center text-[15.5px] text-[#333333]">
                                    <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 shrink-0"></div>
                                    401(K) retirement plan
                                </li>
                                <li className="flex items-center text-[15.5px] text-[#333333]">
                                    <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 shrink-0"></div>
                                    Annual performance reviews and raises
                                </li>
                                <li className="flex items-center text-[15.5px] text-[#333333]">
                                    <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 shrink-0"></div>
                                    Holiday pay
                                </li>
                                <li className="flex items-center text-[15.5px] text-[#333333]">
                                    <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 shrink-0"></div>
                                    Medical and dental insurance
                                </li>
                                <li className="flex items-center text-[15.5px] text-[#333333]">
                                    <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 shrink-0"></div>
                                    Paid onboarding and training
                                </li>
                                <li className="flex items-center text-[15.5px] text-[#333333]">
                                    <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 shrink-0"></div>
                                    Travel reimbursement
                                </li>
                            </ul>
                        </div>
                        <div className="w-full lg:w-[45%] shrink-0">
                            <div className="relative h-[250px] sm:h-[320px] md:h-[450px] rounded-[8px] overflow-hidden shadow-md">
                                <Image
                                    src="/images/Whisk_4777d1aca768ca183634529eb0d1b567dr.jpeg"
                                    alt="Caregiver smiling on phone"
                                    fill
                                    className="object-cover object-center"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-[1440px] mb-12 sm:mb-16 md:mb-24">
                
                {/* Supporting Our Caregivers at Every Step */}
                <div className="mb-12 sm:mb-16 md:mb-24 text-center max-w-4xl mx-auto">
                    <h2 className="text-[28px] md:text-[32px] font-bold text-[#043b67] mb-6 font-sans tracking-tight">
                        Supporting Our Caregivers at Every Step
                    </h2>
                    <p className="text-[15.5px] text-[#333333] leading-[1.7]">
                        Our caregivers are the heart of what we do. That's why we're committed to creating an environment where you feel supported, prepared,
                        and valued from day one—so you can focus on building meaningful relationships and making a difference in the lives of others.
                    </p>
                </div>

                {/* 3 Column Info Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-24">
                    {/* Flexible Scheduling */}
                    <div className="border border-gray-200 rounded-[8px] p-5 sm:p-8 md:p-10 shadow-sm bg-white hover:shadow-md transition-shadow">
                        <h3 className="text-[20px] font-bold text-[#043b67] mb-4 font-sans">
                            Flexible Scheduling
                        </h3>
                        <p className="text-[14.5px] text-[#333333] leading-[1.7]">
                            Full-time and part-time positions
                            are available in numerous
                            caregiving roles. It's a great career
                            for students, retirees, and parents
                            of young kids—you can choose to
                            work evenings, weekends, or even
                            overnight shifts. MidAid
                            also offers holiday pay!
                        </p>
                    </div>

                    {/* Caregiver Matching Program */}
                    <div className="border border-gray-200 rounded-[8px] p-5 sm:p-8 md:p-10 shadow-sm bg-white hover:shadow-md transition-shadow">
                        <h3 className="text-[20px] font-bold text-[#043b67] mb-4 font-sans">
                            Caregiver Matching<br/>Program
                        </h3>
                        <p className="text-[14.5px] text-[#333333] leading-[1.7]">
                            One of the reasons why clients
                            love MidAid is our Select a
                            Caregiver® program. We carefully
                            match each senior with the right
                            caregiver. That means you'll work
                            with families who are compatible
                            with your availability, experience,
                            personality, and shared interests.
                            It's how we set you up for success
                            from the start.
                        </p>
                    </div>

                    {/* Caregiver University */}
                    <div className="border border-gray-200 rounded-[8px] p-5 sm:p-8 md:p-10 shadow-sm bg-white hover:shadow-md transition-shadow sm:col-span-2 md:col-span-1">
                        <h3 className="text-[20px] font-bold text-[#043b67] mb-4 font-sans">
                            Caregiver University
                        </h3>
                        <p className="text-[14.5px] text-[#333333] leading-[1.7]">
                            With MidAid, you can take
                            advantage of paid in-person or
                            online training opportunities
                            through your local office. Learn to
                            specialize in caring for seniors
                            with specific health needs, such
                            as military veterans or older
                            adults with Alzheimer's disease
                            or dementia.
                        </p>
                    </div>
                </div>

                {/* Career Advancement Box */}
                <div className="border border-gray-200 rounded-[8px] p-5 sm:p-8 md:p-12 mb-12 sm:mb-16 md:mb-24 shadow-sm bg-white">
                    <h2 className="text-[28px] md:text-[32px] font-bold text-[#043b67] mb-6 font-sans tracking-tight">
                        Career Advancement
                    </h2>
                    <p className="text-[15.5px] text-[#333333] mb-6 leading-[1.7]">
                        Becoming a MidAid caregiver is a great way to kick off a rewarding career. You can earn annual raises and participate in
                        valuable training classes to boost your expertise.
                    </p>
                    <p className="text-[15.5px] text-[#333333] leading-[1.7]">
                        As you gain confidence in your caregiving skills, you can assume a role with more responsibility, such as a care coordinator, training
                        provider, or administrative support professional. Working with MidAid is a great way to earn hands-on experience for a future
                        career as a patient care assistant, home health aide, or certified nurse assistant (CNA).
                    </p>
                </div>

            </div>

            {/* Caregiver of The Year Banner */}
            <div className="bg-[#1e7b75] w-full py-10 sm:py-14 md:py-16 mb-12 sm:mb-16 md:mb-24 text-white overflow-hidden">
                <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-[1440px]">
                    <div className="flex flex-col md:flex-row gap-8 sm:gap-10 md:gap-12 items-center justify-between">
                        <div className="flex-1 max-w-xl">
                            <h2 className="text-[28px] md:text-[34px] font-bold mb-6 font-sans tracking-tight leading-tight">
                                Caregiver of The Year Award
                            </h2>
                            <p className="text-[16px] mb-8 leading-[1.7]">
                                Every year, MidAid offices across the county celebrate
                                the caregivers who go above and beyond to represent our
                                special brand of caring.
                            </p>
                            <button className="bg-[#dca626] hover:bg-[#c99722] text-[#043b67] font-bold px-8 py-3.5 rounded-[4px] transition-colors">
                                Meet The Finalists and Winner!
                            </button>
                        </div>
                        <div className="flex-1 flex justify-center md:justify-end">
                            {/* SVG Logo for Caregiver of the Year */}
                            <div className="w-[240px] sm:w-[300px] md:w-[400px]">
                                <svg viewBox="0 0 400 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <text x="50%" y="30" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="20" fontFamily="sans-serif" letterSpacing="2">VISITING ANGELS 2025</text>
                                    <text x="50%" y="70" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="48" fontWeight="bold" fontFamily="sans-serif">Caregiver</text>
                                    <text x="50%" y="110" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="32" fontStyle="italic" fontFamily="serif">of The</text>
                                    <text x="50%" y="140" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="56" fontWeight="bold" fontFamily="sans-serif">Year</text>
                                    {/* Abstract Heart Icon */}
                                    <path d="M 60,110 C 60,110 40,80 70,80 C 90,80 100,100 100,100 C 100,100 110,80 130,80 C 160,80 140,110 140,110 C 140,110 100,150 100,150 C 100,150 60,110 60,110 Z" fill="white"/>
                                    <circle cx="100" cy="110" r="15" fill="#1e7b75"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-[1440px] mb-10 sm:mb-16">
                <FAQAccordion faqs={faqItems} title="Frequently Asked Questions" />
                <p className="text-[14.5px] text-[#666666] italic mt-6 font-sans">
                    *MidAid offices determine their own benefits, pay, training opportunities, and hours. Talk with your local office for details.
                </p>
            </div>

            <Newsletter />
            <FloatingGetStarted />
        </div>
    );
}
