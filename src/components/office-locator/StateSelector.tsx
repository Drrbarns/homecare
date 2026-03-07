"use client";

import { US_STATES } from "@/lib/constants/states";
import { useRouter } from "next/navigation";

export function StateSelector({ currentState }: { currentState: string }) {
    const router = useRouter();

    return (
        <div className="relative w-[240px]">
            <select 
                className="w-full h-[40px] px-4 pr-10 rounded-[4px] border-none outline-none text-[14px] text-gray-800 appearance-none bg-white"
                value={currentState}
                onChange={(e) => {
                    if (e.target.value) {
                        router.push(`/locations/${e.target.value.toLowerCase()}`);
                    }
                }}
            >
                <option value="" disabled>State where care is needed</option>
                {US_STATES.map((s) => (
                    <option key={s.value} value={s.value}>{s.label}</option>
                ))}
            </select>
            <svg className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </div>
    );
}