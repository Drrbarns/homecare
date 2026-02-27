import Link from "next/link";

export function RelyOnUs() {
    return (
        <section className="py-24 relative bg-[#f1ebdb] overflow-hidden">
            {/* Wave Pattern Background */}
            <div 
                className="absolute inset-0 z-0 opacity-40 pointer-events-none" 
                style={{ 
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='60' viewBox='0 0 120 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30 Q 30 60 60 30 T 120 30' fill='none' stroke='%23d2c39e' stroke-width='2'/%3E%3Cpath d='M0 0 Q 30 30 60 0 T 120 0' fill='none' stroke='%23d2c39e' stroke-width='2'/%3E%3C/svg%3E")`,
                    backgroundSize: '120px 60px'
                }} 
            />
            
            <div className="container mx-auto px-4 lg:px-6 xl:px-8 max-w-[1000px] relative z-10 text-center">
                <h2 className="text-[28px] md:text-[34px] font-bold text-[#043b67] mb-6 font-sans tracking-tight">
                    You Can Rely On Us
                </h2>
                
                <p className="text-[15px] md:text-[16px] text-[#333333] mb-10 font-sans leading-[1.6] max-w-[800px] mx-auto">
                    Visiting Angels provide trusted support that enhances quality of life and fosters independence, supported by our steadfast commitment to compassionate care.
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <Link 
                        href="/home-care-services"
                        className="w-full sm:w-auto transition-opacity hover:opacity-90 rounded-[4px] px-8 py-[12px] font-bold shadow-sm text-center"
                        style={{ backgroundColor: '#dca626', color: '#000000', fontSize: '15px' }}
                    >
                        Types of Care
                    </Link>
                    <Link 
                        href="/contact-us"
                        className="w-full sm:w-auto transition-opacity hover:opacity-90 rounded-[4px] px-8 py-[12px] font-bold shadow-sm text-center"
                        style={{ backgroundColor: '#dca626', color: '#000000', fontSize: '15px' }}
                    >
                        How to Get Started
                    </Link>
                    <Link 
                        href="/resources"
                        className="w-full sm:w-auto transition-opacity hover:opacity-90 rounded-[4px] px-8 py-[12px] font-bold shadow-sm text-center"
                        style={{ backgroundColor: '#dca626', color: '#000000', fontSize: '15px' }}
                    >
                        FAQs
                    </Link>
                </div>
            </div>
        </section>
    );
}