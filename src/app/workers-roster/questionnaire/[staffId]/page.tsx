"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

interface StaffInfo {
    staff_id: string;
    first_name: string;
    last_name: string;
    role: string;
}

export default function QuestionnairePage() {
    const params = useParams();
    const staffId = (params.staffId as string)?.toUpperCase();

    const [staffInfo, setStaffInfo] = useState<StaffInfo | null>(null);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const [form, setForm] = useState({
        availability: "",
        preferred_shifts: "",
        transport_mode: "",
        max_travel_distance: "",
        special_skills: "",
        certifications: "",
        languages: "",
        emergency_contact_name: "",
        emergency_contact_phone: "",
        health_conditions: "",
        additional_notes: "",
    });

    useEffect(() => {
        if (!staffId) return;
        fetch("/api/staff/lookup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ staff_id: staffId }),
        })
            .then((r) => r.json())
            .then((data) => {
                if (data.found) {
                    setStaffInfo({
                        staff_id: data.staff.staff_id,
                        first_name: data.staff.first_name,
                        last_name: data.staff.last_name,
                        role: data.staff.role,
                    });
                }
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [staffId]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.availability || !staffInfo) return;

        setSubmitting(true);
        try {
            const res = await fetch("/api/staff/questionnaire", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    staff_id: staffInfo.staff_id,
                    staff_name: `${staffInfo.first_name} ${staffInfo.last_name}`,
                    ...form,
                }),
            });
            const data = await res.json();
            if (data.success) {
                setSubmitted(true);
            }
        } catch {
            // silent fail
        }
        setSubmitting(false);
    };

    const inputClass = "w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-[15px] outline-none focus:border-[#043b67] transition-colors";
    const labelClass = "block text-sm font-semibold text-gray-700 mb-1.5";

    if (loading) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-[#043b67] border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    if (!staffInfo) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center px-5">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Staff Not Found</h1>
                    <p className="text-gray-500 mb-6">We couldn&apos;t verify your staff ID. Please check and try again.</p>
                    <Link href="/workers-roster" className="inline-flex px-6 py-3 bg-[#043b67] text-white rounded-xl font-semibold text-sm hover:bg-[#032d50] transition-colors">
                        Back to Workers Roster
                    </Link>
                </div>
            </div>
        );
    }

    if (submitted) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center px-5">
                <div className="text-center max-w-[420px] animate-in">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-50 mb-6">
                        <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Thank You, {staffInfo.first_name}!</h1>
                    <p className="text-gray-500 mb-6 leading-relaxed">
                        Your questionnaire has been submitted successfully. Our team will review your information and get back to you with your duty schedule.
                    </p>
                    <Link href="/workers-roster" className="inline-flex px-6 py-3 bg-[#043b67] text-white rounded-xl font-semibold text-sm hover:bg-[#032d50] transition-colors">
                        Back to Workers Roster
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#f0f7fa] to-white">
            {/* Header */}
            <div className="bg-[#043b67] text-white py-10 sm:py-14 px-5">
                <div className="max-w-[640px] mx-auto text-center">
                    <h1 className="text-[24px] sm:text-[30px] font-bold mb-2 tracking-tight">
                        Duty Readiness Questionnaire
                    </h1>
                    <p className="text-white/80 text-[14px] sm:text-[15px]">
                        Hi <span className="font-semibold text-white">{staffInfo.first_name}</span>, please fill out the form below so we can prepare your daily duties.
                    </p>
                </div>
            </div>

            {/* Form */}
            <div className="max-w-[640px] mx-auto px-5 -mt-6 pb-16">
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8 space-y-6">
                    {/* Staff Info Banner */}
                    <div className="bg-[#f0f7fa] rounded-xl p-4 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#043b67] flex items-center justify-center text-white font-bold text-sm shrink-0">
                            {staffInfo.first_name.charAt(0)}{staffInfo.last_name.charAt(0)}
                        </div>
                        <div>
                            <p className="font-bold text-gray-900">{staffInfo.first_name} {staffInfo.last_name}</p>
                            <p className="text-sm text-gray-500">{staffInfo.role} &middot; {staffInfo.staff_id}</p>
                        </div>
                    </div>

                    {/* Availability */}
                    <div>
                        <label className={labelClass}>Your Availability *</label>
                        <select value={form.availability} onChange={(e) => setForm({ ...form, availability: e.target.value })} className={inputClass} required>
                            <option value="">Select your availability</option>
                            <option value="Full-time (Mon-Fri)">Full-time (Mon-Fri)</option>
                            <option value="Part-time">Part-time</option>
                            <option value="Weekends only">Weekends only</option>
                            <option value="Flexible / On-call">Flexible / On-call</option>
                            <option value="Specific days only">Specific days only</option>
                        </select>
                    </div>

                    {/* Preferred Shifts */}
                    <div>
                        <label className={labelClass}>Preferred Shift Times</label>
                        <select value={form.preferred_shifts} onChange={(e) => setForm({ ...form, preferred_shifts: e.target.value })} className={inputClass}>
                            <option value="">Select preferred shift</option>
                            <option value="Morning (6am - 2pm)">Morning (6am - 2pm)</option>
                            <option value="Afternoon (2pm - 10pm)">Afternoon (2pm - 10pm)</option>
                            <option value="Night (10pm - 6am)">Night (10pm - 6am)</option>
                            <option value="Any shift">Any shift</option>
                            <option value="Live-in (24hr)">Live-in (24hr)</option>
                        </select>
                    </div>

                    {/* Transport & Distance */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className={labelClass}>Mode of Transport</label>
                            <select value={form.transport_mode} onChange={(e) => setForm({ ...form, transport_mode: e.target.value })} className={inputClass}>
                                <option value="">Select transport</option>
                                <option value="Own car">Own car</option>
                                <option value="Public transport">Public transport</option>
                                <option value="Bicycle">Bicycle</option>
                                <option value="Walk">Walk</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div>
                            <label className={labelClass}>Max Travel Distance</label>
                            <select value={form.max_travel_distance} onChange={(e) => setForm({ ...form, max_travel_distance: e.target.value })} className={inputClass}>
                                <option value="">Select distance</option>
                                <option value="Up to 10km">Up to 10km</option>
                                <option value="Up to 20km">Up to 20km</option>
                                <option value="Up to 30km">Up to 30km</option>
                                <option value="Up to 50km">Up to 50km</option>
                                <option value="No limit">No limit</option>
                            </select>
                        </div>
                    </div>

                    {/* Skills & Certifications */}
                    <div>
                        <label className={labelClass}>Special Skills or Training</label>
                        <textarea value={form.special_skills} onChange={(e) => setForm({ ...form, special_skills: e.target.value })} rows={2} className={inputClass + " resize-none"} placeholder="e.g. Dementia care, wound care, physiotherapy assistance..." />
                    </div>

                    <div>
                        <label className={labelClass}>Certifications</label>
                        <textarea value={form.certifications} onChange={(e) => setForm({ ...form, certifications: e.target.value })} rows={2} className={inputClass + " resize-none"} placeholder="e.g. Certificate III in Individual Support, First Aid, CPR..." />
                    </div>

                    <div>
                        <label className={labelClass}>Languages Spoken</label>
                        <input type="text" value={form.languages} onChange={(e) => setForm({ ...form, languages: e.target.value })} className={inputClass} placeholder="e.g. English, Mandarin, Arabic..." />
                    </div>

                    {/* Emergency Contact */}
                    <div className="border-t border-gray-100 pt-6">
                        <p className="text-sm font-bold text-gray-800 mb-4">Emergency Contact</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className={labelClass}>Contact Name</label>
                                <input type="text" value={form.emergency_contact_name} onChange={(e) => setForm({ ...form, emergency_contact_name: e.target.value })} className={inputClass} placeholder="Full name" />
                            </div>
                            <div>
                                <label className={labelClass}>Contact Phone</label>
                                <input type="tel" value={form.emergency_contact_phone} onChange={(e) => setForm({ ...form, emergency_contact_phone: e.target.value })} className={inputClass} placeholder="Phone number" />
                            </div>
                        </div>
                    </div>

                    {/* Health & Notes */}
                    <div>
                        <label className={labelClass}>Health Conditions (if any)</label>
                        <textarea value={form.health_conditions} onChange={(e) => setForm({ ...form, health_conditions: e.target.value })} rows={2} className={inputClass + " resize-none"} placeholder="Any conditions we should be aware of..." />
                    </div>

                    <div>
                        <label className={labelClass}>Additional Notes</label>
                        <textarea value={form.additional_notes} onChange={(e) => setForm({ ...form, additional_notes: e.target.value })} rows={3} className={inputClass + " resize-none"} placeholder="Anything else you'd like us to know..." />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={submitting || !form.availability}
                        className="w-full py-3.5 bg-[#043b67] text-white rounded-xl font-bold text-[15px] hover:bg-[#032d50] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {submitting ? "Submitting..." : "Submit Questionnaire"}
                    </button>
                </form>
            </div>

            <style jsx global>{`
                .animate-in {
                    animation: animateIn 0.5s ease-out forwards;
                }
                @keyframes animateIn {
                    from { opacity: 0; transform: translateY(16px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
}
