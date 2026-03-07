"use client";

import { useState } from "react";
import Link from "next/link";

export function ContactSection() {
    const [formData, setFormData] = useState({
        type: "Home Care Services",
        name: "",
        email: "",
        phone: "",
        zipCode: "",
        personNeedingCare: "",
        hearAboutUs: "",
        vaId: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    return (
        <section className="relative w-full">
            {/* Split Backgrounds */}
            <div className="absolute inset-0 w-full h-full flex flex-col md:flex-row z-0">
                {/* Left White Background */}
                <div className="w-full md:w-1/2 bg-white h-full" />
                {/* Right Light Blue Wave Background */}
                <div 
                    className="w-full md:w-1/2 h-full bg-[#eaf6f9]" 
                    style={{ 
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10 Q 25 20 50 10 T 100 10' fill='none' stroke='%23d6eaee' stroke-width='1.5'/%3E%3Cpath d='M0 0 Q 25 10 50 0 T 100 0' fill='none' stroke='%23d6eaee' stroke-width='1.5'/%3E%3C/svg%3E")`,
                        backgroundSize: '100px 20px'
                    }} 
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-6 xl:px-8 max-w-[1440px] relative z-10 py-10 sm:py-16 lg:py-24">
                <div className="flex flex-col md:flex-row gap-0 max-w-[1200px] mx-auto bg-transparent border border-gray-200 md:border-none shadow-[0_4px_20px_rgba(0,0,0,0.03)] md:shadow-none">
                    
                    {/* Left - Contact Form inside Card */}
                    <div className="w-full md:w-[55%] lg:w-[48%] bg-white p-5 sm:p-8 md:p-10 border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] rounded-[4px] z-20 md:my-4">
                        <h2 className="text-[26px] md:text-[30px] font-bold text-[#043b67] mb-4 font-sans tracking-tight">
                            Contact Us About Our Home Care
                        </h2>
                        <p className="text-[#333333] mb-6 text-[15px]">
                            Call <Link href="tel:489987299" className="text-[#3b7ea1] hover:text-[#043b67]">489 987 299</Link> or fill out the form below.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="space-y-2 mb-6">
                                <label className="text-[12px] font-bold text-[#333333] uppercase tracking-widest">PLEASE SELECT</label>
                                <div className="flex flex-col space-y-2 mt-2">
                                    <label className="flex items-center cursor-pointer">
                                        <input type="radio" name="type" value="Home Care Services" checked={formData.type === "Home Care Services"} onChange={handleChange} className="mr-2 w-[14px] h-[14px] border-gray-300 text-[#043b67]" />
                                        <span className="text-[15px] text-[#333333]">Home Care Services</span>
                                    </label>
                                    <label className="flex items-center cursor-pointer">
                                        <input type="radio" name="type" value="Employment Opportunities" checked={formData.type === "Employment Opportunities"} onChange={handleChange} className="mr-2 w-[14px] h-[14px] border-gray-300 text-[#043b67]" />
                                        <span className="text-[15px] text-[#333333]">Employment Opportunities</span>
                                    </label>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[12px] text-gray-800 mb-1 font-sans">Name <span className="text-red-500">*</span></label>
                                    <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full border border-gray-200 rounded-[3px] px-3 py-[10px] outline-none focus:border-[#3b7ea1] text-[15px]" />
                                </div>
                                <div>
                                    <label className="block text-[12px] text-gray-800 mb-1 font-sans">Email Address <span className="text-red-500">*</span></label>
                                    <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border border-gray-200 rounded-[3px] px-3 py-[10px] outline-none focus:border-[#3b7ea1] text-[15px]" />
                                </div>
                                <div>
                                    <label className="block text-[12px] text-gray-800 mb-1 font-sans">Phone <span className="text-red-500">*</span></label>
                                    <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full border border-gray-200 rounded-[3px] px-3 py-[10px] outline-none focus:border-[#3b7ea1] text-[15px]" />
                                </div>
                                <div>
                                    <label className="block text-[12px] text-gray-800 mb-1 font-sans">Zip Code <span className="text-red-500">*</span></label>
                                    <input required type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} className="w-full border border-gray-200 rounded-[3px] px-3 py-[10px] outline-none focus:border-[#3b7ea1] text-[15px]" />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-[12px] text-gray-800 mb-1 font-sans">Person who needs care: <span className="text-red-500">*</span></label>
                                    <div className="relative">
                                        <select required name="personNeedingCare" value={formData.personNeedingCare} onChange={handleChange} className={`w-full border border-gray-200 rounded-[3px] px-3 py-[10px] outline-none focus:border-[#3b7ea1] bg-white text-[15px] appearance-none cursor-pointer ${formData.personNeedingCare === "" ? "text-gray-500" : "text-gray-800"}`}>
                                            <option value="" disabled hidden>Please select</option>
                                            <option value="Child">Child</option>
                                            <option value="Employee">Employee</option>
                                            <option value="Friend">Friend</option>
                                            <option value="Grandparent">Grandparent</option>
                                            <option value="In-Law">In-Law</option>
                                            <option value="Other Relative">Other Relative</option>
                                            <option value="Parent">Parent</option>
                                            <option value="Parents (Both)">Parents (Both)</option>
                                            <option value="Self">Self</option>
                                            <option value="Sibling">Sibling</option>
                                            <option value="Spouse">Spouse</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-[12px] text-gray-800 mb-1 font-sans">How did you hear about us? <span className="text-red-500">*</span></label>
                                    <div className="relative">
                                        <select required name="hearAboutUs" value={formData.hearAboutUs} onChange={handleChange} className={`w-full border border-gray-200 rounded-[3px] px-3 py-[10px] outline-none focus:border-[#3b7ea1] bg-white text-[15px] appearance-none cursor-pointer ${formData.hearAboutUs === "" ? "text-gray-500" : "text-gray-800"}`}>
                                            <option value="" disabled hidden>Please select</option>
                                            <option value="Facebook">Facebook</option>
                                            <option value="Friend/Family/Word of Mouth">Friend/Family/Word of Mouth</option>
                                            <option value="Google">Google</option>
                                            <option value="NextDoor">NextDoor</option>
                                            <option value="Print">Print</option>
                                            <option value="Radio">Radio</option>
                                            <option value="TV">TV</option>
                                            <option value="Streaming">Streaming</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-2 pb-2">
                                <button type="submit" className="transition-opacity hover:opacity-90 rounded-[4px] px-8 py-[12px] font-bold shadow-sm inline-flex font-sans tracking-wide w-full sm:w-[200px] justify-center" style={{ backgroundColor: '#ce9b36', color: '#000000', fontSize: '15px' }}>
                                    Send Message
                                </button>
                            </div>

                            <div className="text-[11.5px] text-gray-800 leading-[1.6] pt-2">
                                By submitting this form, I agree to be contacted by MidAid via call, email and text. To opt out, you can reply &apos;stop&apos; at any time or click the unsubscribe link in the emails. Message and data rates may apply. Learn more on our <Link href="#" className="text-[#3b7ea1] hover:underline">Privacy Policy</Link> page.
                            </div>
                        </form>
                    </div>

                    {/* Right - Info Area mapped over the light blue background */}
                    <div className="w-full md:w-[45%] lg:w-[52%] p-5 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center text-[#043b67] relative z-10 bg-[#eaf6f9] md:bg-transparent">
                        <h2 className="text-[28px] md:text-[34px] lg:text-[40px] font-bold mb-6 font-sans leading-[1.1] tracking-tight text-[#043b67]">
                            Support to help families spend more quality time together.
                        </h2>
                        
                        <p className="text-[15px] leading-[1.6] mb-8 text-[#333333] font-sans">
                            MidAid&apos; dedicated elder care offers valuable support to help families spend more quality time together. At the same time, MidAid provides much-needed respite for family caregivers, reducing their risk of caregiver burnout.
                        </p>
                        
                        <ul className="space-y-3 mb-10 text-[15px] font-medium text-[#333333]">
                            <li className="flex items-center">
                                <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 shrink-0"></div>
                                Personalized senior care plan
                            </li>
                            <li className="flex items-center">
                                <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 shrink-0"></div>
                                In-home care at affordable costs
                            </li>
                            <li className="flex items-center">
                                <div className="w-[6px] h-[6px] rounded-full bg-[#7a4b64] mr-3 shrink-0"></div>
                                National recognition in Home Care services
                            </li>
                        </ul>

                        <div className="mt-auto md:absolute md:bottom-8 md:right-8 lg:bottom-12 lg:right-12 text-right">
                            <Link 
                                href="/contact-us"
                                className="inline-block transition-opacity hover:opacity-90 rounded-l-full rounded-r-none pl-10 pr-6 py-4 font-bold shadow-md"
                                style={{ backgroundColor: '#173559', color: '#ffffff', fontSize: '15px' }}
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}