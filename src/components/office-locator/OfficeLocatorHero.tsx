"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { US_STATES } from "@/lib/constants/states";

export function OfficeLocatorHero() {
    const [activeTab, setActiveTab] = useState<"zip" | "state">("zip");
    const [selectedState, setSelectedState] = useState("");
    const [zipCode, setZipCode] = useState("");
    const router = useRouter();

    const handleSearch = () => {
        if (activeTab === "state" && selectedState) {
            router.push(`/locations/${selectedState.toLowerCase()}`);
        } else if (activeTab === "zip" && zipCode) {
            // For now, zip code search could just go to a generic search or we can handle it later.
            // Let's just route to a generic search page or alert for now.
            alert(`Zip code search for ${zipCode} not yet implemented. Please use State search.`);
        }
    };

    return (
        <section className="relative w-full bg-[#f0f8fa] pt-16 pb-20 overflow-hidden">
            {/* Wavy Background Pattern */}
            <div 
                className="absolute inset-0 z-0 opacity-40 pointer-events-none" 
                style={{ 
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='60' viewBox='0 0 120 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30 Q 30 60 60 30 T 120 30' fill='none' stroke='%23d6eaee' stroke-width='2'/%3E%3Cpath d='M0 0 Q 30 30 60 0 T 120 0' fill='none' stroke='%23d6eaee' stroke-width='2'/%3E%3C/svg%3E")`,
                    backgroundSize: '120px 60px'
                }} 
            />

            <div className="container mx-auto px-4 lg:px-6 xl:px-8 max-w-[1440px] relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    
                    {/* Left Content */}
                    <div className="w-full md:w-[45%] lg:w-[40%] text-left">
                        <h1 className="text-[32px] md:text-[38px] lg:text-[42px] font-bold text-[#043b67] mb-4 font-sans tracking-tight leading-[1.1]">
                            Home Care Agency Near Me
                        </h1>
                        <p className="text-[#333333] text-[16px] md:text-[18px] leading-[1.6] mb-8">
                            Let us know where care is needed so we can connect you with the right home care services.
                        </p>

                        <div className="mb-6">
                            <div className="flex border-b border-gray-300 mb-6">
                                <button 
                                    onClick={() => setActiveTab("zip")}
                                    className={`pb-3 px-6 font-bold text-[16px] transition-colors relative ${activeTab === "zip" ? "text-[#043b67]" : "text-gray-500 hover:text-gray-700"}`}
                                >
                                    Zip Code
                                    {activeTab === "zip" && (
                                        <div className="absolute bottom-[-1px] left-0 w-full h-[3px] bg-[#043b67]"></div>
                                    )}
                                </button>
                                <button 
                                    onClick={() => setActiveTab("state")}
                                    className={`pb-3 px-6 font-bold text-[16px] transition-colors relative ${activeTab === "state" ? "text-[#043b67]" : "text-gray-500 hover:text-gray-700"}`}
                                >
                                    State
                                    {activeTab === "state" && (
                                        <div className="absolute bottom-[-1px] left-0 w-full h-[3px] bg-[#043b67]"></div>
                                    )}
                                </button>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3">
                                <div className="relative flex-grow">
                                    {activeTab === "zip" ? (
                                        <>
                                            <input 
                                                type="text" 
                                                placeholder="Zip Code where care is needed"
                                                value={zipCode}
                                                onChange={(e) => setZipCode(e.target.value)}
                                                className="w-full h-[46px] px-4 pr-10 rounded-[4px] border border-gray-300 outline-none focus:border-[#3b7ea1] text-[15px] text-gray-800 placeholder:text-gray-500"
                                            />
                                            <svg className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                        </>
                                    ) : (
                                        <>
                                            <select
                                                value={selectedState}
                                                onChange={(e) => setSelectedState(e.target.value)}
                                                className="w-full h-[46px] px-4 pr-10 rounded-[4px] border border-gray-300 outline-none focus:border-[#3b7ea1] text-[15px] text-gray-800 appearance-none bg-white"
                                            >
                                                <option value="" disabled>State where care is needed</option>
                                                {US_STATES.map((state) => (
                                                    <option key={state.value} value={state.value}>{state.label}</option>
                                                ))}
                                            </select>
                                            <svg className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                        </>
                                    )}
                                </div>
                                <button 
                                    onClick={handleSearch}
                                    className="h-[46px] px-6 rounded-[4px] font-bold transition-opacity hover:opacity-90 shrink-0 shadow-sm"
                                    style={{ backgroundColor: '#dca626', color: '#000000', fontSize: '15px' }}
                                >
                                    Search for Care
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="w-full md:w-[50%] lg:w-[55%] flex justify-end relative">
                        <div 
                            className="relative h-[350px] md:h-[450px] lg:h-[500px] w-full max-w-[700px] overflow-hidden"
                            style={{ borderTopLeftRadius: '300px', borderBottomLeftRadius: '300px' }}
                        >
                            <Image
                                src="/images/Whisk_05c25109353fe2d88f1437b47bfffa90dr.jpeg"
                                alt="Caregiver smiling with senior woman"
                                fill
                                className="object-cover object-center"
                                priority
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}