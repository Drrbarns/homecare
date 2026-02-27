import Image from "next/image";
import Link from "next/link";
import { InnerPageHero } from "@/components/shared/InnerPageHero";
import { HomeCareInfoSidebar } from "@/components/layout/sidebar/HomeCareInfoSidebar";
import { FloatingGetStarted } from "@/components/layout/FloatingGetStarted";
import { Newsletter } from "@/components/marketing/Newsletter";

export const metadata = {
    title: "Our Reviews | Home Care Testimonials",
    description: "Client satisfaction drives Visiting Angels. Our reviews speak to the compassionate care we provide nationwide.",
};

export default function OurReviewsPage() {
    return (
        <>
            <InnerPageHero
                title="Our Reviews"
                description="Client satisfaction drives Visiting Angels. Our reviews speak to the compassionate care we provide nationwide."
                imageSrc="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1200&auto=format&fit=crop"
                imageAlt="Caregiver standing with senior woman looking in mirror"
            />

            <div className="container mx-auto px-4 lg:px-6 xl:px-8 max-w-[1440px] py-16 lg:py-24">
                <div className="flex flex-col lg:flex-row gap-12 xl:gap-16">
                    {/* Left Sidebar */}
                    <div className="w-full lg:w-[320px] shrink-0">
                        <HomeCareInfoSidebar />
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 w-full text-[15px] md:text-[16px] text-[#333333] leading-[1.7] font-sans">
                        
                        {/* Intro Section - Image Left, Text Right */}
                        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 mb-16">
                            <div className="w-full md:w-[40%]">
                                <div className="relative h-[400px] md:h-[500px] rounded-[8px] overflow-hidden shadow-sm">
                                    <Image
                                        src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=600&auto=format&fit=crop"
                                        alt="Caregiver standing with senior woman"
                                        fill
                                        className="object-cover object-center"
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-[60%] flex flex-col justify-start">
                                <h2 className="text-[26px] md:text-[30px] font-bold text-[#043b67] mb-6 font-sans tracking-tight leading-tight">
                                    The Impact of Our In-Home Care
                                </h2>
                                <p className="mb-6 text-[15.5px]">
                                    Our home care reviews and testimonials speak volumes about
                                    the dedication and genuine care we provide to families across
                                    the country every day.
                                </p>
                                <p className="mb-6 text-[15.5px]">
                                    From assisting with activities of daily living to offering emotional
                                    support and companionship, our <Link href="/caregivers" className="underline text-[#3b7ea1] hover:text-[#043b67]">caregivers</Link> dedicate themselves
                                    to fostering meaningful relationships and positive experiences.
                                    They create an environment where seniors thrive, and family
                                    members find peace of mind.
                                </p>
                                <p className="text-[15.5px]">
                                    Please read below to learn about the experiences of our clients
                                    and their loved ones, and see why Visiting Angels is a trusted
                                    choice for <Link href="/home-care-services" className="underline text-[#3b7ea1] hover:text-[#043b67]">home care</Link>.
                                </p>
                            </div>
                        </div>

                        {/* Reviews Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                            
                            {/* Review 1 - Teal */}
                            <div className="bg-[#4eb3a4] text-white p-10 rounded-[8px] relative overflow-hidden shadow-sm flex flex-col">
                                {/* Quote Icon */}
                                <div className="absolute top-6 left-8 bg-white rounded-full w-[48px] h-[48px] flex items-center justify-center opacity-90">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#4eb3a4" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 11H6C6 8.23858 8.23858 6 11 6V4C7.13401 4 4 7.13401 4 11V19H10V11ZM20 11H16C16 8.23858 18.2386 6 21 6V4C17.134 4 14 7.13401 14 11V19H20V11Z" />
                                    </svg>
                                </div>
                                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M54.627 0l.83 5.485-5.405.906-1.57-5.46L54.627 0zM28.05 60l-.83-5.485 5.405-.906 1.57 5.46L28.05 60zM5.372 0l-.83 5.485 5.405.906 1.57-5.46L5.373 0zM31.95 60l.83-5.485-5.405-.906-1.57 5.46L31.95 60zM40.916 6.275l2.42-4.908 4.907 2.42-2.316 4.96-5.01-2.472zm-21.83 47.45l-2.42 4.908-4.907-2.42 2.316-4.96 5.01 2.472zm12.35-47.45l-2.42-4.908-4.907 2.42 2.316 4.96 5.01-2.472zm21.83 47.45l2.42 4.908 4.907-2.42-2.316-4.96-5.01 2.472zM24.78 14.86l4.05-3.666 3.665 4.05-3.923 3.797-3.792-4.18zm10.44 30.28l-4.05 3.666-3.665-4.05 3.923-3.797 3.792 4.18zm-20.08-11.45l4.908-2.42 2.42 4.907-4.96 2.316-2.368-4.803zm41.72 11.45l-4.908 2.42-2.42-4.907 4.96-2.316 2.368 4.803zM10.15 37.33l5.484-.83.906 5.405-5.46 1.57-1.03-5.326zm39.7 0l-5.484-.83-.906 5.405 5.46 1.57 1.03-5.326z\' fill=\'%23ffffff\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")' }}></div>
                                
                                <p className="relative z-10 pt-16 text-[15.5px] leading-[1.7] mb-8 font-medium">
                                    Visiting Angels was a trusted
                                    partner in providing care to
                                    supplement hospice during my
                                    father's decline. Care supporting
                                    staff were upbeat, helpful and
                                    arrived as scheduled. Any
                                    scheduling issues were
                                    communicated in advance giving
                                    us time to respond. When my
                                    father's care needs spiked, Visiting
                                    Angels was able to respond quickly
                                    to the change. They were a great
                                    part of our care plan and I'm very
                                    thankful for their help.
                                </p>
                                <div className="mt-auto relative z-10 text-right pr-4">
                                    <p className="font-bold text-[16px] mb-1">— Shawn Smith</p>
                                    <p className="text-[14px] opacity-90">Marshfield, MA</p>
                                </div>
                            </div>

                            {/* Review 2 - Purple */}
                            <div className="bg-[#7871aa] text-white p-10 rounded-[8px] relative overflow-hidden shadow-sm flex flex-col">
                                {/* Quote Icon */}
                                <div className="absolute top-6 left-8 bg-white rounded-full w-[48px] h-[48px] flex items-center justify-center opacity-90">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#7871aa" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 11H6C6 8.23858 8.23858 6 11 6V4C7.13401 4 4 7.13401 4 11V19H10V11ZM20 11H16C16 8.23858 18.2386 6 21 6V4C17.134 4 14 7.13401 14 11V19H20V11Z" />
                                    </svg>
                                </div>
                                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M54.627 0l.83 5.485-5.405.906-1.57-5.46L54.627 0zM28.05 60l-.83-5.485 5.405-.906 1.57 5.46L28.05 60zM5.372 0l-.83 5.485 5.405.906 1.57-5.46L5.373 0zM31.95 60l.83-5.485-5.405-.906-1.57 5.46L31.95 60zM40.916 6.275l2.42-4.908 4.907 2.42-2.316 4.96-5.01-2.472zm-21.83 47.45l-2.42 4.908-4.907-2.42 2.316-4.96 5.01 2.472zm12.35-47.45l-2.42-4.908-4.907 2.42 2.316 4.96 5.01-2.472zm21.83 47.45l2.42 4.908 4.907-2.42-2.316-4.96-5.01 2.472zM24.78 14.86l4.05-3.666 3.665 4.05-3.923 3.797-3.792-4.18zm10.44 30.28l-4.05 3.666-3.665-4.05 3.923-3.797 3.792 4.18zm-20.08-11.45l4.908-2.42 2.42 4.907-4.96 2.316-2.368-4.803zm41.72 11.45l-4.908 2.42-2.42-4.907 4.96-2.316 2.368 4.803zM10.15 37.33l5.484-.83.906 5.405-5.46 1.57-1.03-5.326zm39.7 0l-5.484-.83-.906 5.405 5.46 1.57 1.03-5.326z\' fill=\'%23ffffff\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")' }}></div>
                                
                                <p className="relative z-10 pt-16 text-[15.5px] leading-[1.7] mb-8 font-medium">
                                    Visiting Angels came recommended to
                                    us when we unexpectedly needed
                                    additional assistance in caring for my
                                    dad when he was sent home from the
                                    hospital under hospice care. Everyone
                                    we worked with from Visiting Angels
                                    was wonderful. Our "angels" were so
                                    kind to my dad, treated him with
                                    dignity, and became a part of our
                                    family. I highly recommend using
                                    Visiting Angels for additional support
                                    and care for your loved one.
                                </p>
                                <div className="mt-auto relative z-10 text-right pr-4">
                                    <p className="font-bold text-[16px] mb-1">— K Quinn</p>
                                    <p className="text-[14px] opacity-90">Sterling Heights</p>
                                </div>
                            </div>

                            {/* Review 3 - Blue */}
                            <div className="bg-[#618ac2] text-white p-10 rounded-[8px] relative overflow-hidden shadow-sm flex flex-col">
                                {/* Quote Icon */}
                                <div className="absolute top-6 left-8 bg-white rounded-full w-[48px] h-[48px] flex items-center justify-center opacity-90">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#618ac2" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 11H6C6 8.23858 8.23858 6 11 6V4C7.13401 4 4 7.13401 4 11V19H10V11ZM20 11H16C16 8.23858 18.2386 6 21 6V4C17.134 4 14 7.13401 14 11V19H20V11Z" />
                                    </svg>
                                </div>
                                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M54.627 0l.83 5.485-5.405.906-1.57-5.46L54.627 0zM28.05 60l-.83-5.485 5.405-.906 1.57 5.46L28.05 60zM5.372 0l-.83 5.485 5.405.906 1.57-5.46L5.373 0zM31.95 60l.83-5.485-5.405-.906-1.57 5.46L31.95 60zM40.916 6.275l2.42-4.908 4.907 2.42-2.316 4.96-5.01-2.472zm-21.83 47.45l-2.42 4.908-4.907-2.42 2.316-4.96 5.01 2.472zm12.35-47.45l-2.42-4.908-4.907 2.42 2.316 4.96 5.01-2.472zm21.83 47.45l2.42 4.908 4.907-2.42-2.316-4.96-5.01 2.472zM24.78 14.86l4.05-3.666 3.665 4.05-3.923 3.797-3.792-4.18zm10.44 30.28l-4.05 3.666-3.665-4.05 3.923-3.797 3.792 4.18zm-20.08-11.45l4.908-2.42 2.42 4.907-4.96 2.316-2.368-4.803zm41.72 11.45l-4.908 2.42-2.42-4.907 4.96-2.316 2.368 4.803zM10.15 37.33l5.484-.83.906 5.405-5.46 1.57-1.03-5.326zm39.7 0l-5.484-.83-.906 5.405 5.46 1.57 1.03-5.326z\' fill=\'%23ffffff\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")' }}></div>
                                
                                <p className="relative z-10 pt-16 text-[15.5px] leading-[1.7] mb-8 font-medium">
                                    Visiting Angels of York provided
                                    competent and compassionate
                                    support in caring for our mother
                                    who had Alzheimer's disease.
                                    Through the many twists and turns
                                    of this journey, Visiting Angels were
                                    right beside us, partnering with us
                                    to meet each goal with patience
                                    and professionalism. We could not
                                    have managed without them, and
                                    we are forever grateful.
                                </p>
                                <div className="mt-auto relative z-10 text-right pr-4">
                                    <p className="font-bold text-[16px] mb-1">— Mary Goodwillie</p>
                                    <p className="text-[14px] opacity-90">York, PA</p>
                                </div>
                            </div>

                            {/* Review 4 - Rose */}
                            <div className="bg-[#bb6e6a] text-white p-10 rounded-[8px] relative overflow-hidden shadow-sm flex flex-col">
                                {/* Quote Icon */}
                                <div className="absolute top-6 left-8 bg-white rounded-full w-[48px] h-[48px] flex items-center justify-center opacity-90">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#bb6e6a" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 11H6C6 8.23858 8.23858 6 11 6V4C7.13401 4 4 7.13401 4 11V19H10V11ZM20 11H16C16 8.23858 18.2386 6 21 6V4C17.134 4 14 7.13401 14 11V19H20V11Z" />
                                    </svg>
                                </div>
                                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M54.627 0l.83 5.485-5.405.906-1.57-5.46L54.627 0zM28.05 60l-.83-5.485 5.405-.906 1.57 5.46L28.05 60zM5.372 0l-.83 5.485 5.405.906 1.57-5.46L5.373 0zM31.95 60l.83-5.485-5.405-.906-1.57 5.46L31.95 60zM40.916 6.275l2.42-4.908 4.907 2.42-2.316 4.96-5.01-2.472zm-21.83 47.45l-2.42 4.908-4.907-2.42 2.316-4.96 5.01 2.472zm12.35-47.45l-2.42-4.908-4.907 2.42 2.316 4.96 5.01-2.472zm21.83 47.45l2.42 4.908 4.907-2.42-2.316-4.96-5.01 2.472zM24.78 14.86l4.05-3.666 3.665 4.05-3.923 3.797-3.792-4.18zm10.44 30.28l-4.05 3.666-3.665-4.05 3.923-3.797 3.792 4.18zm-20.08-11.45l4.908-2.42 2.42 4.907-4.96 2.316-2.368-4.803zm41.72 11.45l-4.908 2.42-2.42-4.907 4.96-2.316 2.368 4.803zM10.15 37.33l5.484-.83.906 5.405-5.46 1.57-1.03-5.326zm39.7 0l-5.484-.83-.906 5.405 5.46 1.57 1.03-5.326z\' fill=\'%23ffffff\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")' }}></div>
                                
                                <p className="relative z-10 pt-16 text-[15.5px] leading-[1.7] mb-8 font-medium">
                                    Visiting Angels has been such a
                                    blessing for us. The caregivers are so
                                    helpful and can take Mom on errands
                                    or to the doctor. They are wonderful
                                    companions and help put my mind at
                                    ease knowing someone is with her. The
                                    office is fabulous and flexible about
                                    scheduling and are always prompt and
                                    courteous with responses. I highly
                                    recommend Visiting Angels services!
                                </p>
                                <div className="mt-auto relative z-10 text-right pr-4">
                                    <p className="font-bold text-[16px] mb-1">— Adair Watkins</p>
                                    <p className="text-[14px] opacity-90">Mandeville, LA</p>
                                </div>
                            </div>

                            {/* Review 5 - Brown */}
                            <div className="bg-[#b38258] text-white p-10 rounded-[8px] relative overflow-hidden shadow-sm flex flex-col">
                                {/* Quote Icon */}
                                <div className="absolute top-6 left-8 bg-white rounded-full w-[48px] h-[48px] flex items-center justify-center opacity-90">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#b38258" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 11H6C6 8.23858 8.23858 6 11 6V4C7.13401 4 4 7.13401 4 11V19H10V11ZM20 11H16C16 8.23858 18.2386 6 21 6V4C17.134 4 14 7.13401 14 11V19H20V11Z" />
                                    </svg>
                                </div>
                                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M54.627 0l.83 5.485-5.405.906-1.57-5.46L54.627 0zM28.05 60l-.83-5.485 5.405-.906 1.57 5.46L28.05 60zM5.372 0l-.83 5.485 5.405.906 1.57-5.46L5.373 0zM31.95 60l.83-5.485-5.405-.906-1.57 5.46L31.95 60zM40.916 6.275l2.42-4.908 4.907 2.42-2.316 4.96-5.01-2.472zm-21.83 47.45l-2.42 4.908-4.907-2.42 2.316-4.96 5.01 2.472zm12.35-47.45l-2.42-4.908-4.907 2.42 2.316 4.96 5.01-2.472zm21.83 47.45l2.42 4.908 4.907-2.42-2.316-4.96-5.01 2.472zM24.78 14.86l4.05-3.666 3.665 4.05-3.923 3.797-3.792-4.18zm10.44 30.28l-4.05 3.666-3.665-4.05 3.923-3.797 3.792 4.18zm-20.08-11.45l4.908-2.42 2.42 4.907-4.96 2.316-2.368-4.803zm41.72 11.45l-4.908 2.42-2.42-4.907 4.96-2.316 2.368 4.803zM10.15 37.33l5.484-.83.906 5.405-5.46 1.57-1.03-5.326zm39.7 0l-5.484-.83-.906 5.405 5.46 1.57 1.03-5.326z\' fill=\'%23ffffff\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")' }}></div>
                                
                                <p className="relative z-10 pt-16 text-[15.5px] leading-[1.7] mb-8 font-medium">
                                    The caregivers we've had are
                                    compassionate, trustworthy, and
                                    accommodating. Office staff are
                                    responsive to requests for changes
                                    in the schedule, and work with us
                                    to provide the best care. Highly
                                    recommend your first call be to
                                    Visiting Angels.
                                </p>
                                <div className="mt-auto relative z-10 text-right pr-4">
                                    <p className="font-bold text-[16px] mb-1">— Linda Hart</p>
                                    <p className="text-[14px] opacity-90">Albany, OR</p>
                                </div>
                            </div>

                            {/* Review 6 - Dark Teal */}
                            <div className="bg-[#5f847d] text-white p-10 rounded-[8px] relative overflow-hidden shadow-sm flex flex-col">
                                {/* Quote Icon */}
                                <div className="absolute top-6 left-8 bg-white rounded-full w-[48px] h-[48px] flex items-center justify-center opacity-90">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#5f847d" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 11H6C6 8.23858 8.23858 6 11 6V4C7.13401 4 4 7.13401 4 11V19H10V11ZM20 11H16C16 8.23858 18.2386 6 21 6V4C17.134 4 14 7.13401 14 11V19H20V11Z" />
                                    </svg>
                                </div>
                                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M54.627 0l.83 5.485-5.405.906-1.57-5.46L54.627 0zM28.05 60l-.83-5.485 5.405-.906 1.57 5.46L28.05 60zM5.372 0l-.83 5.485 5.405.906 1.57-5.46L5.373 0zM31.95 60l.83-5.485-5.405-.906-1.57 5.46L31.95 60zM40.916 6.275l2.42-4.908 4.907 2.42-2.316 4.96-5.01-2.472zm-21.83 47.45l-2.42 4.908-4.907-2.42 2.316-4.96 5.01 2.472zm12.35-47.45l-2.42-4.908-4.907 2.42 2.316 4.96 5.01-2.472zm21.83 47.45l2.42 4.908 4.907-2.42-2.316-4.96-5.01 2.472zM24.78 14.86l4.05-3.666 3.665 4.05-3.923 3.797-3.792-4.18zm10.44 30.28l-4.05 3.666-3.665-4.05 3.923-3.797 3.792 4.18zm-20.08-11.45l4.908-2.42 2.42 4.907-4.96 2.316-2.368-4.803zm41.72 11.45l-4.908 2.42-2.42-4.907 4.96-2.316 2.368 4.803zM10.15 37.33l5.484-.83.906 5.405-5.46 1.57-1.03-5.326zm39.7 0l-5.484-.83-.906 5.405 5.46 1.57 1.03-5.326z\' fill=\'%23ffffff\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")' }}></div>
                                
                                <p className="relative z-10 pt-16 text-[15.5px] leading-[1.7] mb-8 font-medium">
                                    Visiting Angels has provided care for
                                    my mother for more than two years. At
                                    times, we have needed around the
                                    clock care, and at other times only
                                    companionship. VA has been
                                    responsive and professional at all
                                    times. I'd happily recommend VA for
                                    anyone in need of care for a loved one.
                                    VA allowed my mother to stay in her
                                    own home as long as possible.
                                </p>
                                <div className="mt-auto relative z-10 text-right pr-4">
                                    <p className="font-bold text-[16px] mb-1">— Amy Hopkins</p>
                                    <p className="text-[14px] opacity-90">Littleton, CO</p>
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
