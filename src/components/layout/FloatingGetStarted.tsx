import Link from "next/link";

export function FloatingGetStarted() {
    return (
        <>
            {/* Floating button (Desktop & Mobile) */}
            <div className="fixed bottom-6 lg:bottom-12 right-0 z-50">
                <Link 
                    href="/contact-us"
                    className="flex items-center justify-center hover:opacity-90 text-white rounded-l-full rounded-r-none px-6 py-3 lg:px-8 lg:py-4 font-bold shadow-lg transition-opacity border-y border-l border-white/80"
                    style={{ backgroundColor: "#173559", fontSize: "15px" }}
                >
                    Get Started
                </Link>
            </div>
        </>
    );
}
