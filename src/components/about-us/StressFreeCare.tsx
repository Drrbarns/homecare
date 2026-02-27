import Link from "next/link";

export function StressFreeCare() {
    return (
        <section className="pb-20 relative bg-[#eaf6f9] overflow-hidden">
            <div className="container mx-auto px-4 lg:px-6 xl:px-8 max-w-[800px] relative z-10 text-center">
                <p className="text-[15px] md:text-[16px] text-[#333333] leading-[1.65] mb-6">
                    We craft stress-free care plans customized to your loved one&apos;s needs. Our service options include <Link href="/home-care-services#personal" className="underline text-[#3b7ea1] hover:text-[#043b67] transition-colors">personal care</Link>, <Link href="/home-care-services#companion" className="underline text-[#3b7ea1] hover:text-[#043b67] transition-colors">companion care</Link>, and <Link href="/home-care-services#respite" className="underline text-[#3b7ea1] hover:text-[#043b67] transition-colors">respite care</Link>.
                </p>
                <p className="text-[15px] md:text-[16px] text-[#333333] leading-[1.65] mb-10">
                    If your loved one has complex needs with conditions such as <Link href="/home-care-services#dementia" className="underline text-[#3b7ea1] hover:text-[#043b67] transition-colors">dementia</Link> and <Link href="/home-care-services#alzheimers" className="underline text-[#3b7ea1] hover:text-[#043b67] transition-colors">Alzheimer&apos;s disease</Link>, our caregivers can provide personalized, expertized support.
                </p>
                <Link
                    href="/home-care-services"
                    className="inline-block transition-opacity hover:opacity-90 rounded-[4px] px-8 py-4 font-bold shadow-sm"
                    style={{ backgroundColor: "#dca626", color: "#000000", fontSize: "15px" }}
                >
                    View Our Services
                </Link>
            </div>
        </section>
    );
}
