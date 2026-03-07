"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function InnerPageSidebar() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    const menuItems = [
        { label: "24-Hour Care", href: "/24-hour-home-care" },
        { label: "Alzheimer's Care", href: "/alzheimers-care" },
        { label: "Companion Care", href: "/elderly-companion-care" },
        { label: "Dementia Care", href: "/dementia-care" },
        { label: "End-of-Life Care", href: "/end-of-life-care" },
        { label: "Live-In Care", href: "/live-in-care" },
        { label: "Palliative Care", href: "/palliative-care" },
        { label: "Parkinson's Care", href: "/parkinsons-care" },
        { label: "Personal Care", href: "/personal-care" },
        { label: "Respite Care", href: "/respite-care" },
        { label: "Transition to Home Care", href: "/transition-home-care" },
        { label: "Veterans In-Home Care", href: "/veterans-care" },
    ];

    const currentLabel = menuItems.find(item => item.href === pathname)?.label || "Types of Care";

    return (
        <div className="w-full">
            {/* Mobile Toggle */}
            <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden flex items-center justify-between w-full px-5 py-4 bg-[#043b67] text-white font-bold text-[15px] rounded-[3px] mb-4"
            >
                <span>{currentLabel}</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 ${mobileOpen ? 'rotate-180' : ''}`}>
                    <path d="M6 9l6 6 6-6"/>
                </svg>
            </button>

            {/* Sidebar Menu */}
            <div className={`flex-col gap-2 mb-10 ${mobileOpen ? 'flex' : 'hidden lg:flex'}`}>
                {menuItems.map((item) => {
                    const isActive = pathname === item.href;
                    const className = `flex items-center justify-between px-6 py-4 font-bold text-[15px] transition-colors rounded-[3px] shadow-sm ${
                        isActive
                            ? "bg-[#043b67] text-white"
                            : "bg-white text-[#3b7ea1] hover:text-[#043b67] border border-gray-100"
                    }`;
                    return isActive ? (
                        <div key={item.label} className={className} aria-current="page">
                            <span>{item.label}</span>
                            <span className="text-[#5cb3b1]">→</span>
                        </div>
                    ) : (
                        <Link key={item.label} href={item.href} className={className}>
                            <span>{item.label}</span>
                            <span className="text-[#3b7ea1] opacity-70">→</span>
                        </Link>
                    );
                })}
            </div>

            {/* Sidebar Contact Form Block - hidden on mobile to save space */}
            <div className="bg-[#eaf6f9] p-6 rounded-[3px] hidden lg:block">
                <h3 className="text-[20px] font-bold text-[#043b67] mb-4 font-sans leading-snug">
                    Contact Us About Our Home Care
                </h3>
                <p className="text-[14px] text-[#333333] mb-6">
                    Call <a href="tel:489987299" className="text-[#3b7ea1] hover:underline">489 987 299</a> or fill out the form below.
                </p>

                <form className="space-y-4">
                    <div className="space-y-2 mb-4">
                        <label className="text-[11px] font-bold text-[#333333] uppercase tracking-widest">PLEASE SELECT</label>
                        <div className="flex flex-col space-y-2 mt-1">
                            <label className="flex items-center cursor-pointer">
                                <input type="radio" name="type" value="Home Care Services" defaultChecked className="mr-2 w-3 h-3 border-gray-300 text-[#043b67]" />
                                <span className="text-[14px] text-[#333333]">Home Care Services</span>
                            </label>
                            <label className="flex items-center cursor-pointer">
                                <input type="radio" name="type" value="Employment Opportunities" className="mr-2 w-3 h-3 border-gray-300 text-[#043b67]" />
                                <span className="text-[14px] text-[#333333]">Employment Opportunities</span>
                            </label>
                        </div>
                    </div>

                    <div>
                        <input type="text" placeholder="Name *" required className="w-full border border-gray-200 rounded-[3px] px-3 py-2 outline-none focus:border-[#3b7ea1] text-[14px]" />
                    </div>
                    <div>
                        <input type="email" placeholder="Email Address *" required className="w-full border border-gray-200 rounded-[3px] px-3 py-2 outline-none focus:border-[#3b7ea1] text-[14px]" />
                    </div>
                    <div>
                        <input type="tel" placeholder="Phone *" required className="w-full border border-gray-200 rounded-[3px] px-3 py-2 outline-none focus:border-[#3b7ea1] text-[14px]" />
                    </div>
                    <div>
                        <input type="text" placeholder="Zip Code *" required className="w-full border border-gray-200 rounded-[3px] px-3 py-2 outline-none focus:border-[#3b7ea1] text-[14px]" />
                    </div>
                    
                    <div>
                        <select required className="w-full border border-gray-200 rounded-[3px] px-3 py-2 outline-none focus:border-[#3b7ea1] bg-white text-[14px] text-gray-500">
                            <option value="" disabled hidden>Person who needs care: Please select</option>
                            <option value="Self">Self</option>
                            <option value="Parent">Parent</option>
                            <option value="Spouse">Spouse</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div>
                        <select required className="w-full border border-gray-200 rounded-[3px] px-3 py-2 outline-none focus:border-[#3b7ea1] bg-white text-[14px] text-gray-500">
                            <option value="" disabled hidden>How did you hear about us? Please select</option>
                            <option value="Google">Google</option>
                            <option value="Facebook">Facebook</option>
                            <option value="Friend/Family">Friend/Family</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <button type="submit" className="w-full mt-4 transition-opacity hover:opacity-90 rounded-[3px] py-3 font-bold shadow-sm" style={{ backgroundColor: '#dca626', color: '#000000', fontSize: '15px' }}>
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}
