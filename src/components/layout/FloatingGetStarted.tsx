import Link from "next/link";

export function FloatingGetStarted() {
    return (
        <div className="fixed bottom-12 right-0 z-50 hidden md:block">
            <Link 
                href="/contact-us"
                className="flex items-center justify-center hover:opacity-90 text-white rounded-l-full rounded-r-none px-8 py-4 font-bold shadow-lg transition-opacity border-y border-l border-white/80"
                style={{ backgroundColor: "#173559", fontSize: "16px" }}
            >
                Get Started
            </Link>
        </div>
    );
}
