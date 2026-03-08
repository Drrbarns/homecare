"use client";

import { useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";

interface StaffResult {
    staff_id: string;
    first_name: string;
    last_name: string;
    role: string;
    department: string | null;
    avatar_url: string | null;
    status: string;
    start_date: string | null;
}

type LookupState = "idle" | "loading" | "found" | "not_found";

export default function WorkersRosterPage() {
    const [staffId, setStaffId] = useState("");
    const [state, setState] = useState<LookupState>("idle");
    const [staff, setStaff] = useState<StaffResult | null>(null);

    const handleLookup = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!staffId.trim()) return;

        setState("loading");
        setStaff(null);

        try {
            const res = await fetch("/api/staff/lookup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ staff_id: staffId.trim() }),
            });
            const data = await res.json();

            if (data.found) {
                setStaff(data.staff);
                setState("found");
            } else {
                setState("not_found");
            }
        } catch {
            setState("not_found");
        }
    };

    const handleReset = () => {
        setStaffId("");
        setState("idle");
        setStaff(null);
    };

    const getInitials = (first: string, last: string) =>
        `${first.charAt(0)}${last.charAt(0)}`.toUpperCase();

    const formatDate = (date: string | null) => {
        if (!date) return null;
        return new Date(date).toLocaleDateString("en-AU", { month: "long", year: "numeric" });
    };

    return (
        <div className="min-h-[80vh] bg-gradient-to-b from-[#f0f7fa] to-white">
            {/* Hero */}
            <div className="bg-[#043b67] text-white py-16 sm:py-20 px-5">
                <div className="max-w-[600px] mx-auto text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                    </div>
                    <h1 className="text-[28px] sm:text-[36px] font-bold mb-3 tracking-tight">
                        Workers Roster
                    </h1>
                    <p className="text-white/80 text-[15px] sm:text-[16px] leading-relaxed">
                        Verify a MidAid staff member by entering their Passport Number or Staff ID below.
                    </p>
                </div>
            </div>

            {/* Lookup Form */}
            <div className="max-w-[480px] mx-auto px-5 -mt-8">
                <form onSubmit={handleLookup} className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8">
                    <label htmlFor="staff-id" className="block text-sm font-semibold text-gray-700 mb-2">
                        Staff Passport Number / Staff ID
                    </label>
                    <div className="flex gap-3">
                        <input
                            id="staff-id"
                            type="text"
                            value={staffId}
                            onChange={(e) => setStaffId(e.target.value.toUpperCase())}
                            placeholder="e.g. MID-00123"
                            className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl text-[15px] font-mono tracking-wider outline-none focus:border-[#043b67] transition-colors uppercase"
                            autoComplete="off"
                        />
                        <button
                            type="submit"
                            disabled={state === "loading" || !staffId.trim()}
                            className="px-5 py-3 bg-[#043b67] text-white rounded-xl font-semibold text-sm hover:bg-[#032d50] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                        >
                            {state === "loading" ? (
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            ) : (
                                <Search className="w-5 h-5" />
                            )}
                        </button>
                    </div>
                </form>
            </div>

            {/* Results Area */}
            <div className="max-w-[480px] mx-auto px-5 py-10">
                {/* FOUND: Verified Staff Card */}
                {state === "found" && staff && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                            {/* Green verified banner */}
                            <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-3 flex items-center gap-2">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                                    <path d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12z" fill="currentColor" />
                                    <path d="M9 12.75L11.25 15 15 9.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className="text-white font-bold text-sm tracking-wide">VERIFIED STAFF MEMBER</span>
                            </div>

                            <div className="p-6 sm:p-8 text-center">
                                {/* Avatar */}
                                <div className="relative inline-block mb-4">
                                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-emerald-100 shadow-md">
                                        {staff.avatar_url ? (
                                            <Image
                                                src={staff.avatar_url}
                                                alt={`${staff.first_name} ${staff.last_name}`}
                                                width={96}
                                                height={96}
                                                className="object-cover w-full h-full"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-[#043b67] flex items-center justify-center text-white text-2xl font-bold">
                                                {getInitials(staff.first_name, staff.last_name)}
                                            </div>
                                        )}
                                    </div>
                                    {/* Verified check badge */}
                                    <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center border-3 border-white shadow-sm">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Name */}
                                <h2 className="text-[22px] font-bold text-gray-900 mb-1">
                                    {staff.first_name} {staff.last_name}
                                </h2>
                                <p className="text-[#3b7ea1] font-semibold text-[15px] mb-4">{staff.role}</p>

                                {/* Details */}
                                <div className="bg-gray-50 rounded-xl p-4 space-y-3 text-left text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Staff ID</span>
                                        <span className="font-mono font-bold text-gray-900">{staff.staff_id}</span>
                                    </div>
                                    {staff.department && (
                                        <div className="flex justify-between border-t border-gray-100 pt-3">
                                            <span className="text-gray-500">Department</span>
                                            <span className="font-medium text-gray-900">{staff.department}</span>
                                        </div>
                                    )}
                                    <div className="flex justify-between border-t border-gray-100 pt-3">
                                        <span className="text-gray-500">Status</span>
                                        <span className="inline-flex items-center gap-1.5">
                                            <span className={`w-2 h-2 rounded-full ${staff.status === "active" ? "bg-emerald-500" : staff.status === "on_leave" ? "bg-amber-500" : "bg-gray-400"}`} />
                                            <span className="font-medium text-gray-900 capitalize">{staff.status.replace("_", " ")}</span>
                                        </span>
                                    </div>
                                    {staff.start_date && (
                                        <div className="flex justify-between border-t border-gray-100 pt-3">
                                            <span className="text-gray-500">Member Since</span>
                                            <span className="font-medium text-gray-900">{formatDate(staff.start_date)}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-5">
                            <button onClick={handleReset} className="text-sm text-[#3b7ea1] hover:text-[#043b67] font-medium underline underline-offset-2 transition-colors">
                                Search for another staff member
                            </button>
                        </div>
                    </div>
                )}

                {/* NOT FOUND */}
                {state === "not_found" && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 sm:p-10 text-center">
                            {/* Animated X icon */}
                            <div className="relative inline-flex items-center justify-center mb-6">
                                <div className="w-20 h-20 rounded-full bg-red-50 flex items-center justify-center animate-pulse-slow">
                                    <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-red-500 animate-shake">
                                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                                            <path d="M15 9l-6 6M9 9l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-[20px] font-bold text-gray-900 mb-2">
                                Staff Not Found
                            </h2>
                            <p className="text-gray-500 text-[14px] leading-relaxed mb-6 max-w-[300px] mx-auto">
                                No staff member was found with ID <span className="font-mono font-bold text-gray-700">{staffId}</span>. Please double-check the ID and try again.
                            </p>

                            <button
                                onClick={handleReset}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-[#043b67] text-white rounded-xl font-semibold text-sm hover:bg-[#032d50] transition-colors"
                            >
                                <Search className="w-4 h-4" />
                                Try Again
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* CSS Animations */}
            <style jsx global>{`
                @keyframes shake {
                    0%, 100% { transform: rotate(0deg); }
                    10%, 30%, 50%, 70%, 90% { transform: rotate(-3deg); }
                    20%, 40%, 60%, 80% { transform: rotate(3deg); }
                }
                @keyframes pulse-slow {
                    0%, 100% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.05); opacity: 0.8; }
                }
                .animate-shake {
                    animation: shake 0.6s ease-in-out;
                }
                .animate-pulse-slow {
                    animation: pulse-slow 2s ease-in-out infinite;
                }
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
