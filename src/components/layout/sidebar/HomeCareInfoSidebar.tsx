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
            <div className="bg-[#eaf6f9] p-6 md:p-8 rounded-[4px] hidden lg:block">
                <h3 className="text-[22px] font-bold text-[#043b67] mb-4 font-sans leading-tight">
                    Contact Us About<br/>Our Home Care
                </h3>
                <p className="text-[15px] text-[#333333] mb-6">
                    Call <a href="tel:489987299" className="text-[#3b7ea1] hover:underline">489 987 299</a> or fill out the form below.
                </p>

                <form className="space-y-4">
                    <div className="space-y-2 mb-5">
                        <label className="text-[12px] font-bold text-[#333333] uppercase tracking-widest">PLEASE SELECT</label>
                        <div className="flex flex-col space-y-2 mt-2">
                            <label className="flex items-center cursor-pointer">
                                <input type="radio" name="type" value="Home Care Services" defaultChecked className="mr-2 w-3.5 h-3.5 border-gray-300 text-[#043b67]" />
                                <span className="text-[14.5px] text-[#333333]">Home Care Services</span>
                            </label>
                            <label className="flex items-center cursor-pointer">
                                <input type="radio" name="type" value="Employment Opportunities" className="mr-2 w-3.5 h-3.5 border-gray-300 text-[#043b67]" />
                                <span className="text-[14.5px] text-[#333333]">Employment Opportunities</span>
                            </label>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div>
                            <input type="text" placeholder="Name *" required className="w-full bg-white border border-transparent rounded-[2px] px-4 py-3 outline-none focus:border-[#3b7ea1] text-[14.5px] shadow-sm placeholder:text-gray-500" />
                        </div>
                        <div>
                            <input type="email" placeholder="Email Address *" required className="w-full bg-white border border-transparent rounded-[2px] px-4 py-3 outline-none focus:border-[#3b7ea1] text-[14.5px] shadow-sm placeholder:text-gray-500" />
                        </div>
                        <div>
                            <input type="tel" placeholder="Phone *" required className="w-full bg-white border border-transparent rounded-[2px] px-4 py-3 outline-none focus:border-[#3b7ea1] text-[14.5px] shadow-sm placeholder:text-gray-500" />
                        </div>
                        <div>
                            <input type="text" placeholder="Zip Code *" required className="w-full bg-white border border-transparent rounded-[2px] px-4 py-3 outline-none focus:border-[#3b7ea1] text-[14.5px] shadow-sm placeholder:text-gray-500" />
                        </div>
                        
                        <div className="relative">
                            <select required className="w-full bg-white border border-transparent rounded-[2px] px-4 py-3 outline-none focus:border-[#3b7ea1] text-[14.5px] text-gray-500 shadow-sm appearance-none">
                                <option value="" disabled hidden>Person who needs care: Please select</option>
                                <option value="Self">Self</option>
                                <option value="Parent">Parent</option>
                                <option value="Spouse">Spouse</option>
                                <option value="Other">Other</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L5 5L9 1" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                        </div>

                        <div className="relative">
                            <select required className="w-full bg-white border border-transparent rounded-[2px] px-4 py-3 outline-none focus:border-[#3b7ea1] text-[14.5px] text-gray-500 shadow-sm appearance-none">
                                <option value="" disabled hidden>How did you hear about us? Please select</option>
                                <option value="Google">Google</option>
                                <option value="Facebook">Facebook</option>
                                <option value="Friend/Family">Friend/Family</option>
                                <option value="Other">Other</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L5 5L9 1" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="w-full mt-6 transition-opacity hover:opacity-90 rounded-[3px] py-3.5 font-bold shadow-sm" style={{ backgroundColor: '#dca626', color: '#043b67', fontSize: '15px' }}>
                        Send Message
                    </button>

                    <p className="text-[12px] text-[#666666] leading-[1.6] mt-4">
                        By submitting this form, I agree to be contacted by MidAid via call, email and text. To opt out, you can reply 'stop' at any time or click the unsubscribe link in the emails. Message and data rates may apply. Learn more on our <a href="/privacy-policy" className="text-[#3b7ea1] hover:underline">Privacy Policy</a> page.
                    </p>
                </form>
            </div>
        </div>
    );
}
