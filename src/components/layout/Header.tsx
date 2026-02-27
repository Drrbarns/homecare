"use client";

import * as React from "react";
import Link from "next/link";
import { Search, Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

export const typesOfCareNav = [
    { label: "Home Care Services", href: "/home-care-services" },
    { label: "24-Hour Care", href: "/24-hour-home-care" },
    { label: "Alzheimer's Care", href: "/alzheimers-care" },
    { label: "Companion Care", href: "/elderly-companion-care" },
    { label: "Dementia Care", href: "/dementia-care" },
    { label: "End-Of-Life Care", href: "/end-of-life-care" },
    { label: "Live-In Care", href: "/live-in-care" },
    { label: "Palliative Care", href: "/palliative-care" },
    { label: "Parkinson's Care", href: "/parkinsons-care" },
    { label: "Personal Care", href: "/personal-care" },
    { label: "Respite Care", href: "/respite-care" },
    { label: "Transition to Home Care", href: "/transition-home-care" },
    { label: "Veterans In-Home Care", href: "/veterans-care" }
];

export const homeCareInfoNav = [
    { label: "Caregivers", href: "/caregivers" },
    { label: "Fall Prevention", href: "/fall-prevention" },
    { label: "Give Us A Review", href: "/give-us-a-review" },
    { label: "GUIDE Model Program", href: "/guide-model-program" },
    { label: "Home Care Costs", href: "/home-care-costs" },
    { label: "Home Care FAQs", href: "/home-care-faqs" },
    { label: "How To Get Started", href: "/how-to-get-started" },
    { label: "How We Assist", href: "/how-we-assist" },
    { label: "Long Distance Care Giving", href: "/long-distance-care-giving" },
    { label: "Our Reviews", href: "/our-reviews" },
    { label: "Veterans Benefits", href: "/veterans-benefits" }
];

export function Header() {
    const [isOpen, setIsOpen] = React.useState(false);
    const handleLinkClick = () => setIsOpen(false);

    return (
        <header className="bg-white z-50 shadow-sm border-b border-gray-100 relative">
            <div className="container mx-auto flex h-[64px] md:h-[88px] items-center justify-between px-4 lg:px-6 max-w-[1440px]">
                {/* Left: Logo */}
                <Link href="/" className="flex items-center h-full">
                    <div className="relative w-[200px] h-[50px] sm:w-[280px] sm:h-[65px] md:w-[380px] md:h-[85px] ml-[-8px] md:ml-[-15px]">
                        <Image
                            src="https://www.visitingangels.com/images/layout/VA_Logo_Color.svg"
                            alt="Visiting Angels Logo"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden xl:flex items-center space-x-6 text-[14px] text-[#1b3664] uppercase tracking-wider font-semibold">
                    <Link href="/office-locator" className="hover:text-[#5cb3b1] transition-colors">Find Care</Link>
                    <Link href="/about-us" className="text-[#5cb3b1] transition-colors">About Us</Link>

                    {/* Types of Care Dropdown */}
                    <div className="relative group h-[88px] flex items-center">
                        <div className="flex items-center cursor-pointer group-hover:text-[#5cb3b1] transition-colors h-full">
                            <Link href="/home-care-services">Types of Care</Link>
                            <ChevronDown className="w-4 h-4 ml-1" />
                        </div>

                        {/* Dropdown Menu - pt-2 creates bridge so mouse never leaves group when moving to dropdown */}
                        <div className="absolute left-0 top-full pt-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 w-[260px] z-50 pointer-events-none group-hover:pointer-events-auto">
                            <div className="bg-white shadow-[0_15px_30px_rgba(0,0,0,0.1)] py-4 border-t-2 border-[#1b3664]">
                                {typesOfCareNav.map((item, idx) => (
                                    <Link
                                        key={idx}
                                        href={item.href}
                                        className="block px-6 py-3.5 text-[15px] font-semibold text-[#1b3664] hover:text-[#5cb3b1] hover:bg-gray-50 transition-colors normal-case tracking-normal"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Home Care Info Dropdown */}
                    <div className="relative group h-[88px] flex items-center">
                        <div className="flex items-center cursor-pointer group-hover:text-[#5cb3b1] transition-colors h-full">
                            <Link href="/resources">Home Care Info</Link>
                            <ChevronDown className="w-4 h-4 ml-1" />
                        </div>

                        {/* Dropdown Menu */}
                        <div className="absolute left-0 top-full pt-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 w-[260px] z-50 pointer-events-none group-hover:pointer-events-auto">
                            <div className="bg-white shadow-[0_15px_30px_rgba(0,0,0,0.1)] py-4 border-t-2 border-[#1b3664]">
                                {homeCareInfoNav.map((item, idx) => (
                                    <Link
                                        key={idx}
                                        href={item.href}
                                        className="block px-6 py-3.5 text-[15px] font-semibold text-[#1b3664] hover:text-[#5cb3b1] hover:bg-gray-50 transition-colors normal-case tracking-normal"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <Link href="/articles" className="hover:text-[#5cb3b1] transition-colors">Articles</Link>
                    <Link href="/careers" className="hover:text-[#5cb3b1] transition-colors">Caregiver Jobs</Link>
                    <Link href="/contact-us" className="hover:text-[#5cb3b1] transition-colors">Contact Us</Link>

                    <button className="hover:text-[#5cb3b1] transition-colors ml-2" aria-label="Search">
                        <Search className="w-5 h-5" strokeWidth={2.5} />
                    </button>
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="xl:hidden flex items-center gap-4">
                    <button aria-label="Search" className="text-[#1b3664]">
                        <Search className="w-5 h-5" />
                    </button>
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-[#1b3664]">
                                <Menu className="h-8 w-8" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-white w-[300px] sm:w-[360px] overflow-y-auto">
                            <div className="flex flex-col space-y-2 mt-8">
                                <Link href="/office-locator" onClick={handleLinkClick} className="text-lg font-medium hover:text-[#5cb3b1] uppercase text-[#1b3664] py-3">
                                    Find Care
                                </Link>
                                <Link href="/about-us" onClick={handleLinkClick} className="text-lg font-medium text-[#5cb3b1] uppercase py-3">
                                    About Us
                                </Link>
                                <div className="pt-2 pb-2">
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">Types of Care</span>
                                    <div className="flex flex-col mt-2 space-y-1 pl-2 border-l-2 border-gray-100">
                                        {typesOfCareNav.map((item) => (
                                            <Link
                                                key={item.label}
                                                href={item.href}
                                                onClick={handleLinkClick}
                                                className="text-[15px] font-medium text-[#1b3664] hover:text-[#5cb3b1] py-2 normal-case"
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                                <div className="pt-2 pb-2">
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">Home Care Info</span>
                                    <div className="flex flex-col mt-2 space-y-1 pl-2 border-l-2 border-gray-100">
                                        {homeCareInfoNav.map((item) => (
                                            <Link
                                                key={item.label}
                                                href={item.href}
                                                onClick={handleLinkClick}
                                                className="text-[15px] font-medium text-[#1b3664] hover:text-[#5cb3b1] py-2 normal-case"
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                                <Link href="/articles" onClick={handleLinkClick} className="text-lg font-medium hover:text-[#5cb3b1] uppercase text-[#1b3664] py-3">
                                    Articles
                                </Link>
                                <Link href="/careers" onClick={handleLinkClick} className="text-lg font-medium hover:text-[#5cb3b1] uppercase text-[#1b3664] py-3">
                                    Caregiver Jobs
                                </Link>
                                <Link href="/contact-us" onClick={handleLinkClick} className="text-lg font-medium hover:text-[#5cb3b1] uppercase text-[#1b3664] py-3">
                                    Contact Us
                                </Link>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
