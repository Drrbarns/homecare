import Link from "next/link";

export function FloatingGetStarted() {
    return (
        <>
            {/* Desktop floating button */}
            <div className="fixed bottom-12 right-0 z-50 hidden lg:block">
                <Link 
                    href="/contact-us"
                    className="flex items-center justify-center hover:opacity-90 text-white rounded-l-full rounded-r-none px-8 py-4 font-bold shadow-lg transition-opacity border-y border-l border-white/80"
                    style={{ backgroundColor: "#173559", fontSize: "16px" }}
                >
                    Get Started
                </Link>
            </div>
            {/* Mobile sticky bottom bar */}
            <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-[#173559] border-t border-white/20 shadow-[0_-4px_12px_rgba(0,0,0,0.15)]">
                <Link 
                    href="/contact-us"
                    className="flex items-center justify-center w-full py-3.5 text-white font-bold text-[15px] hover:opacity-90 transition-opacity"
                >
                    Get Started
                </Link>
            </div>
        </>
    );
}
