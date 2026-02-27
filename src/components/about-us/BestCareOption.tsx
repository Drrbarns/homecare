import Link from "next/link";

const activitiesList = [
    "Hygiene assistance",
    "Medication reminders",
    "Meal planning and preparation",
    "Laundry and light housekeeping",
    "Errands and transportation",
];

const schedulingList = [
    "Short-term care",
    "Long-term care",
    "Hourly care",
    "Overnight care",
    "24-hour care",
];

function CheckIcon() {
    return (
        <svg className="w-[18px] h-[18px] shrink-0 text-[#3b7ea1] mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" stroke="rgba(59, 126, 161, 0.2)" fill="rgba(59, 126, 161, 0.1)" />
            <path d="M8 12l3 3 5-6" />
        </svg>
    );
}

export function BestCareOption() {
    return (
        <section className="pt-20 pb-10 relative bg-[#eaf6f9] overflow-hidden">
            <div
                className="absolute inset-0 z-0 opacity-50 pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10 Q 25 20 50 10 T 100 10' fill='none' stroke='%23d6eaee' stroke-width='1.5'/%3E%3Cpath d='M0 0 Q 25 10 50 0 T 100 0' fill='none' stroke='%23d6eaee' stroke-width='1.5'/%3E%3C/svg%3E")`,
                    backgroundSize: "100px 20px",
                }}
            />
            <div className="container mx-auto px-4 lg:px-6 xl:px-8 max-w-[1000px] relative z-10 text-center">
                <h2 className="text-[28px] md:text-[34px] font-bold text-[#043b67] mb-6 font-serif">
                    The Best Care Option for Seniors
                </h2>
                <p className="text-[15px] md:text-[16px] text-[#333333] leading-[1.6] max-w-[720px] mx-auto mb-10">
                    When looking for the best care for your loved one, an assisted living facility or nursing home aren't the only options. With a nationally recognized home care provider like Visiting Angels, your loved one can continue to <Link href="/home-care-services" className="underline text-[#3b7ea1] hover:text-[#043b67] transition-colors">age in place at home.</Link>
                </p>
                <p className="text-[15px] md:text-[16px] text-[#333333] font-bold mb-10">
                    Our in-home care professionals are available to provide:
                </p>

                <div className="grid md:grid-cols-2 gap-6 max-w-[800px] mx-auto text-left">
                    <div className="bg-white rounded-[6px] p-8 shadow-[0_2px_12px_rgba(0,0,0,0.06)] border border-gray-100">
                        <h3 className="text-[18px] font-bold text-[#043b67] mb-6 text-center font-sans">
                            Activities of Daily Living
                        </h3>
                        <ul className="space-y-3">
                            {activitiesList.map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-[15px] text-[#333333]">
                                    <CheckIcon />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white rounded-[6px] p-8 shadow-[0_2px_12px_rgba(0,0,0,0.06)] border border-gray-100">
                        <h3 className="text-[18px] font-bold text-[#043b67] mb-6 text-center font-sans">
                            Flexible Scheduling
                        </h3>
                        <ul className="space-y-3">
                            {schedulingList.map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-[15px] text-[#333333]">
                                    <CheckIcon />
                                    {i === schedulingList.length - 1 ? (
                                        <Link href="/home-care-services" className="underline text-[#3b7ea1] hover:text-[#043b67] transition-colors">
                                            {item}
                                        </Link>
                                    ) : (
                                        item
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
