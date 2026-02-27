"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function HomeCareInfoSidebar() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    const menuItems = [
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
        { label: "Veterans Benefits", href: "/veterans-benefits" },
    ];

    const currentLabel = menuItems.find(item => item.href === pathname)?.label || "Home Care Info";

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

            {/* Sidebar Contact Form Block - hidden on mobile */}
            <div className="bg-[#eaf6f9] p-6 rounded-[3px] hidden lg:block">
                <h3 className="text-[20px] font-bold text-[#043b67] mb-4 font-sans leading-snug">
                    Contact Us About Our Home Care
                </h3>
                <p className="text-[14px] text-[#333333] mb-6">
                    Call <a href="tel:800-365-4189" className="text-[#3b7ea1] hover:underline">800-365-4189</a> or fill out the form below.
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

                    <p className="text-[11px] text-[#666] leading-[1.5] mt-3">
                        By submitting this form, I agree to be contacted by Visiting Angels via call, email and text. To opt out, you can reply 'stop' at any time or click the unsubscribe link in the emails. Message and data rates may apply. Learn more on our <a href="/privacy-policy" className="text-[#3b7ea1] hover:underline">Privacy Policy</a> page.
                    </p>
                </form>
            </div>
        </div>
    );
}
