"use client";

import { useState } from "react";
import { US_STATES } from "@/lib/constants/states";

export function NoOfficesContactForm({ stateCode }: { stateCode: string }) {
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
        name: "", phone: "", email: "", zip_code: "",
        person_needing_care: "", heard_about_us: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            const res = await fetch("/api/lead", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...form,
                    care_type: "Home Care Services",
                    notes: `From state location page: ${stateCode}`,
                }),
            });
            if (res.ok) {
                setSubmitted(true);
                setForm({ name: "", phone: "", email: "", zip_code: "", person_needing_care: "", heard_about_us: "" });
            }
        } catch { /* silent */ }
        setSubmitting(false);
    };

    if (submitted) {
        return (
            <div className="bg-white border border-gray-200 shadow-lg rounded-[8px] overflow-hidden p-10 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-50 mb-4">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </div>
                <h3 className="text-[22px] font-bold text-[#043b67] mb-2">Thank You!</h3>
                <p className="text-gray-600">Your inquiry has been submitted. Our team will be in touch shortly.</p>
            </div>
        );
    }

    return (
        <div className="bg-white border border-gray-200 shadow-lg rounded-[8px] overflow-hidden">
            <div className="bg-white py-6 text-center border-b border-gray-200">
                <h3 className="text-[24px] font-bold text-[#043b67]">Contact Us About Senior Home Care Services</h3>
            </div>
            <div className="bg-[#043b67] py-6 text-center text-white">
                <p className="text-[14px] uppercase tracking-wider mb-2 font-semibold">Please Select An Option:</p>
                <h4 className="text-[24px] font-bold">What Are You Interested In?</h4>
            </div>
            <div className="p-8 md:p-10 bg-white">
                <p className="text-[14px] text-gray-500 mb-6">Items marked with * are required.</p>
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <label className="block text-[14px] text-[#333] mb-2">Your Name <span className="text-red-500">*</span></label>
                            <input type="text" required value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} className="w-full border border-gray-300 rounded-[4px] px-4 py-2.5 focus:outline-none focus:border-[#3b7ea1]" />
                        </div>
                        <div>
                            <label className="block text-[14px] text-[#333] mb-2">Phone <span className="text-red-500">*</span></label>
                            <input type="tel" required value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} className="w-full border border-gray-300 rounded-[4px] px-4 py-2.5 focus:outline-none focus:border-[#3b7ea1]" />
                        </div>
                        <div>
                            <label className="block text-[14px] text-[#333] mb-2">Email Address <span className="text-red-500">*</span></label>
                            <input type="email" required value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} className="w-full border border-gray-300 rounded-[4px] px-4 py-2.5 focus:outline-none focus:border-[#3b7ea1]" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <label className="block text-[14px] text-[#333] mb-2">State:</label>
                            <select defaultValue={stateCode} className="w-full border border-gray-300 rounded-[4px] px-4 py-2.5 focus:outline-none focus:border-[#3b7ea1] bg-white">
                                <option value=""></option>
                                {US_STATES.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
                            </select>
                        </div>
                        <div>
                            <label className="block text-[14px] text-[#333] mb-2">Zip Code <span className="text-red-500">*</span></label>
                            <input type="text" required value={form.zip_code} onChange={(e) => setForm({...form, zip_code: e.target.value})} className="w-full border border-gray-300 rounded-[4px] px-4 py-2.5 focus:outline-none focus:border-[#3b7ea1]" />
                        </div>
                        <div>
                            <label className="block text-[14px] text-[#333] mb-2">Person who needs care <span className="text-red-500">*</span></label>
                            <select required value={form.person_needing_care} onChange={(e) => setForm({...form, person_needing_care: e.target.value})} className="w-full border border-gray-300 rounded-[4px] px-4 py-2.5 focus:outline-none focus:border-[#3b7ea1] bg-white">
                                <option value="" disabled>Please select</option>
                                <option value="Self">Self</option>
                                <option value="Parent">Parent</option>
                                <option value="Spouse">Spouse</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-[14px] text-[#333] mb-2">How did you hear about us? <span className="text-red-500">*</span></label>
                        <select required value={form.heard_about_us} onChange={(e) => setForm({...form, heard_about_us: e.target.value})} className="w-full border border-gray-300 rounded-[4px] px-4 py-2.5 focus:outline-none focus:border-[#3b7ea1] bg-white">
                            <option value="" disabled>Please select</option>
                            <option value="Internet Search">Internet Search</option>
                            <option value="TV">TV</option>
                            <option value="Friend/Family">Friend/Family</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    
                    <div className="pt-4">
                        <button type="submit" disabled={submitting} className="bg-[#dca626] hover:bg-[#c59522] text-black font-bold py-3 px-8 rounded-[4px] transition-colors disabled:opacity-50">
                            {submitting ? "Submitting..." : "Submit"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
