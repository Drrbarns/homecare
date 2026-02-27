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
    { label: "Caregivers", href: "/resources" },
    { label: "Fall Prevention", href: "/resources" },
    { label: "Give Us A Review", href: "/resources" },
    { label: "GUIDE Model Program", href: "/resources" },
    { label: "Home Care Costs", href: "/resources" },
    { label: "Home Care FAQs", href: "/resources" },
    { label: "How To Get Started", href: "/resources" },
    { label: "How We Assist", href: "/resources" },
    { label: "Long Distance Care Giving", href: "/resources" },
    { label: "Our Reviews", href: "/resources" },
    { label: "Veterans Benefits", href: "/resources" }
];

export function Header() {
    const [isOpen, setIsOpen] = React.useState(false);
    const handleLinkClick = () => setIsOpen(false);

    return (
        <header className="bg-white z-50 shadow-sm border-b border-gray-100 relative">
            <div className="container mx-auto flex h-[88px] items-center justify-between px-4 lg:px-6 max-w-[1440px]">
                {/* Left: Logo */}
                <Link href="/" className="flex items-center h-full">
                    {/* Next.js Image component to handle the logo perfectly */}
                    <div className="relative w-[340px] h-[75px] md:w-[380px] md:h-[85px] ml-[-15px]">
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

                        {/* Dropdown Menu */}
                        <div className="absolute left-0 top-[64px] invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:top-[88px] transition-all duration-300 w-[260px] bg-white shadow-[0_15px_30px_rgba(0,0,0,0.1)] z-50 py-4 pointer-events-none group-hover:pointer-events-auto border-t-2 border-[#1b3664]">
                            <div className="flex flex-col">
                                {typesOfCareNav.map((item, idx) => (
                                    <Link
                                        key={idx}
                                        href={item.href}
                                        className="px-6 py-3.5 text-[15px] font-semibold text-[#1b3664] hover:text-[#5cb3b1] hover:bg-gray-50 transition-colors normal-case tracking-normal"
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
                        <div className="absolute left-0 top-[64px] invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:top-[88px] transition-all duration-300 w-[260px] bg-white shadow-[0_15px_30px_rgba(0,0,0,0.1)] z-50 py-4 pointer-events-none group-hover:pointer-events-auto border-t-2 border-[#1b3664]">
                            <div className="flex flex-col">
                                {homeCareInfoNav.map((item, idx) => (
                                    <Link
                                        key={idx}
                                        href={item.href}
                                        className="px-6 py-3.5 text-[15px] font-semibold text-[#1b3664] hover:text-[#5cb3b1] hover:bg-gray-50 transition-colors normal-case tracking-normal"
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
                        <SheetContent side="right" className="bg-white">
                            <div className="flex flex-col space-y-6 mt-8">
                                <Link href="/office-locator" onClick={handleLinkClick} className="text-lg font-medium hover:text-[#5cb3b1] uppercase text-[#1b3664]">
                                    Find Care
                                </Link>
                                <Link href="/about-us" onClick={handleLinkClick} className="text-lg font-medium text-[#5cb3b1] uppercase">
                                    About Us
                                </Link>
                                <Link href="/home-care-services" onClick={handleLinkClick} className="text-lg font-medium hover:text-[#5cb3b1] uppercase text-[#1b3664]">
                                    Types of Care
                                </Link>
                                <Link href="/resources" onClick={handleLinkClick} className="text-lg font-medium hover:text-[#5cb3b1] uppercase text-[#1b3664]">
                                    Home Care Info
                                </Link>
                                <Link href="/articles" onClick={handleLinkClick} className="text-lg font-medium hover:text-[#5cb3b1] uppercase text-[#1b3664]">
                                    Articles
                                </Link>
                                <Link href="/careers" onClick={handleLinkClick} className="text-lg font-medium hover:text-[#5cb3b1] uppercase text-[#1b3664]">
                                    Caregiver Jobs
                                </Link>
                                <Link href="/contact-us" onClick={handleLinkClick} className="text-lg font-medium hover:text-[#5cb3b1] uppercase text-[#1b3664]">
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
