"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        // Mock API call
        try {
            await fetch("/api/newsletter", {
                method: "POST",
                body: JSON.stringify({ email }),
                headers: { 'Content-Type': 'application/json' }
            });
            // simulate delay if mock
            await new Promise(resolve => setTimeout(resolve, 800));
            setStatus("success");
            setEmail("");
        } catch (e) {
            setStatus("error");
        }
    };

    return (
        <section className="relative bg-[#043b67] w-full pt-10 pb-2 mt-[30px] sm:mt-[50px] md:mt-[100px]">
            <div className="container mx-auto px-4 lg:px-6 xl:px-8 max-w-[1440px] relative z-20">
                {/* The overlap tan box */}
                <div className="bg-[#f1ebdb] rounded-[4px] px-4 sm:px-6 py-8 sm:py-12 md:py-16 text-center max-w-[1200px] mx-auto relative mt-[-60px] sm:mt-[-80px] md:mt-[-140px] shadow-[0_-5px_15px_rgba(0,0,0,0.03)] z-30">
                    <div className="max-w-[700px] mx-auto">
                        <h2 className="text-[20px] sm:text-[24px] md:text-[28px] font-bold text-[#043b67] mb-3 md:mb-4 font-sans tracking-tight">
                            Get Expert Caregiving Tips Directly to Your Inbox!
                        </h2>
                        <p className="mb-6 md:mb-8 text-[#333333] text-[14px] sm:text-[16px] md:text-[18px] leading-[1.6]">
                            Sign up for our newsletter to receive helpful resources, caregiving advice, and updates on how we can support your loved ones.
                        </p>

                        {status === "success" ? (
                            <div className="bg-white/80 p-6 rounded-[4px] border border-gray-200 text-[#043b67]">
                                <p className="text-[18px] font-bold mb-1">Thank you for subscribing!</p>
                                <p className="opacity-90 text-[15px]">Please check your email to confirm your subscription.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row max-w-[500px] mx-auto border border-gray-300 rounded-[3px] overflow-hidden shadow-sm">
                                <Input
                                    type="email"
                                    placeholder="Enter Email Address"
                                    className="bg-white text-gray-800 border-none h-[50px] md:h-[55px] px-5 rounded-none flex-grow placeholder:text-gray-400 focus-visible:ring-0 text-[15px]"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <Button 
                                    type="submit" 
                                    className="h-[50px] md:h-[55px] px-8 rounded-none font-bold shrink-0 text-[15px] tracking-wide" 
                                    disabled={status === "loading"}
                                    style={{ backgroundColor: '#173559', color: '#ffffff' }}
                                >
                                    {status === "loading" ? "..." : "Subscribe"}
                                </Button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
