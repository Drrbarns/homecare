"use client";

import { useState } from "react";

interface FAQItem {
    question: string;
    answer: React.ReactNode;
}

interface FAQAccordionProps {
    title?: string;
    faqs: FAQItem[];
}

export function FAQAccordion({ title = "Frequently Asked Questions", faqs }: FAQAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleOpen = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16">
            <div className="container mx-auto px-4 lg:px-6 xl:px-8 max-w-[1200px]">
                <h2 className="text-[26px] md:text-[32px] font-bold text-[#043b67] mb-8 font-sans tracking-tight">
                    {title}
                </h2>
                
                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div key={index} className="border border-gray-200 rounded-[4px] overflow-hidden bg-[#f5f5f5]">
                                <button
                                    onClick={() => toggleOpen(index)}
                                    className="w-full flex items-center justify-between p-4 md:p-5 text-left transition-colors"
                                >
                                    <span className="font-bold text-[16px] md:text-[18px] text-[#333333]">
                                        {faq.question}
                                    </span>
                                    <span className={`flex items-center justify-center w-8 h-8 rounded bg-[#7a4b64] text-white shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M12 5v14M5 12l7 7 7-7" />
                                        </svg>
                                    </span>
                                </button>
                                
                                {isOpen && (
                                    <div className="p-4 md:p-6 bg-white border-t border-gray-200 text-[#333333] text-[15px] leading-relaxed">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
