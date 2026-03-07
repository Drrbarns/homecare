import { InnerPageHero } from "@/components/shared/InnerPageHero";
import { HomeCareInfoSidebar } from "@/components/layout/sidebar/HomeCareInfoSidebar";
import { FloatingGetStarted } from "@/components/layout/FloatingGetStarted";
import { Newsletter } from "@/components/marketing/Newsletter";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import Link from "next/link";

export const metadata = {
    title: "Home Care FAQs | MidAid",
    description: "Selecting home care for a loved one requires careful consideration. MidAid offers comprehensive answers you need to ensure the best possible in-home care.",
};

export default function HomeCareFAQsPage() {
    const faqs = [
        {
            question: "What Services Do MidAid Caregivers Provide?",
            answer: "Our caregivers provide a wide range of services including assistance with personal care (bathing, dressing, grooming), companion care, light housekeeping, meal preparation, medication reminders, errands, and specialized care such as Alzheimer's or dementia care. Services are customized to meet the unique needs of each senior."
        },
        {
            question: "What Are The Benefits Of In-Home Personal Care?",
            answer: "In-home personal care allows seniors to age in place safely while maintaining their independence, dignity, and preferred routines in familiar surroundings. It also provides peace of mind for families, knowing their loved one is receiving professional, compassionate support tailored to their specific needs."
        },
        {
            question: "How Is In-Home Personal Care Different From Home Health Care?",
            answer: "In-home personal care (or non-medical home care) assists with activities of daily living (ADLs) like bathing, meal prep, and companionship. Home health care involves medical services provided by registered nurses or therapists, such as wound care, administering injections, or physical therapy."
        },
        {
            question: "Does MidAid Provide Services In Assisted Living Facilities?",
            answer: "Yes. While our primary focus is providing care in the home, our caregivers can also provide supplementary support to seniors residing in assisted living facilities, nursing homes, or rehabilitation centers if they require more one-on-one attention than the facility provides."
        },
        {
            question: "Can I Change The Home Care Schedule?",
            answer: "Absolutely. We understand that your loved one's needs and your family's schedule may change over time. Our care plans are flexible, and you can easily adjust the caregiver's schedule by contacting your local MidAid office with reasonable notice."
        },
        {
            question: "Does MidAid Care For People With Alzheimer's or Other Medical Conditions?",
            answer: "Yes, many of our caregivers are experienced in supporting seniors with Alzheimer's disease, dementia, Parkinson's, and other chronic conditions. We provide specialized, non-medical care strategies designed to manage the unique challenges associated with these illnesses."
        },
        {
            question: "Can I Choose Which Caregiver Will Work With My Loved One?",
            answer: "Yes. Through our Select Your Caregiver® program, we introduce you to caregivers we feel are a strong match based on skills, experience, and personality. You have the final say and can choose the caregiver you feel is the best fit for your loved one."
        },
        {
            question: "What If I Would Like to Select a New Caregiver?",
            answer: "Your satisfaction and your loved one's comfort are our top priorities. If for any reason you or your loved one feel the caregiver is not the right match, simply contact your local office, and we will work with you to find a more suitable replacement."
        },
        {
            question: "What If I No Longer Need Services?",
            answer: "We offer flexible scheduling without long-term binding contracts. If you need to pause or cancel services, you can do so by notifying your local MidAid office according to the terms discussed during your initial consultation."
        },
        {
            question: "How Do I Start Home Care Services With MidAid?",
            answer: "Getting started is easy. Simply contact your local MidAid office to schedule a free, no-obligation in-home consultation. During this meeting, a care coordinator will assess your loved one's needs, answer your questions, and develop a customized care plan."
        }
    ];

    return (
        <>
            <InnerPageHero
                title="Home Care FAQs"
                description="What to Know When Choosing In-Home Care."
                imageSrc="/images/Whisk_05c25109353fe2d88f1437b47bfffa90dr.jpeg"
                imageAlt="Caregiver talking with senior man on couch"
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
                            Home Care Questions & Answers
                        </h2>
                        
                        <p className="mb-6 text-[15.5px]">
                            <Link href="/home-care-services" className="underline text-[#3b7ea1] hover:text-[#043b67]">Selecting home care</Link> for a loved one and choosing the right provider requires careful consideration
                            and asking essential questions. MidAid offers comprehensive answers you need to ensure
                            the best possible <Link href="/home-care-services" className="underline text-[#3b7ea1] hover:text-[#043b67]">in-home care</Link>.
                        </p>
                        
                        <p className="mb-6 text-[15.5px]">
                            For more than 25 years, families across the country have relied on our professional and
                            compassionate care support. Our free <Link href="#" className="underline text-[#3b7ea1] hover:text-[#043b67]">home care consultations and assessments</Link> will give you
                            peace of mind without pressure.
                        </p>

                        <p className="mb-12 text-[15.5px]">
                            Discover how our flexible <Link href="/home-care-services" className="underline text-[#3b7ea1] hover:text-[#043b67]">senior care services</Link> can help your loved one live safely and comfortably in
                            their own home.
                        </p>

                        {/* FAQ Accordion Section (using existing component but modifying slightly if needed, or just using it as is since it perfectly matches the design) */}
                        <div className="mb-12">
                            {/* We override the title since the screenshot has it left aligned without the huge padding of the default FAQ component, so we just render the raw questions here for better match */}
                            <h2 className="text-[26px] md:text-[30px] font-bold text-[#043b67] mb-8 font-sans tracking-tight">
                                Frequently Asked Questions
                            </h2>
                            <div className="space-y-4">
                                {faqs.map((faq, index) => (
                                    <details key={index} className="group bg-[#f2f2f2] rounded-[4px] overflow-hidden">
                                        <summary className="flex justify-between items-center cursor-pointer list-none p-5 md:px-6 md:py-5">
                                            <span className="font-medium text-[#333333] text-[15px] md:text-[16px] pr-8">{faq.question}</span>
                                            <span className="transition group-open:rotate-180 bg-[#663b5e] text-white p-2 rounded-[2px] shrink-0">
                                                <svg fill="none" height="16" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" width="16"><path d="M6 9l6 6 6-6"></path></svg>
                                            </span>
                                        </summary>
                                        <div className="text-[#333333] p-5 md:px-6 md:pb-6 md:pt-2 text-[15px] leading-relaxed bg-white border-x border-b border-[#f2f2f2]">
                                            {faq.answer}
                                        </div>
                                    </details>
                                ))}
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
