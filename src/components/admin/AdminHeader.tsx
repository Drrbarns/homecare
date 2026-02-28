"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Menu, LogOut, ChevronDown } from "lucide-react";

interface AdminHeaderProps {
    onMenuToggle: () => void;
    userEmail?: string;
}

export function AdminHeader({ onMenuToggle, userEmail }: AdminHeaderProps) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const router = useRouter();

    const handleLogout = async () => {
        const supabase = createClient();
        await supabase.auth.signOut();
        router.push("/admin/login");
        router.refresh();
    };

    return (
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 lg:px-6 sticky top-0 z-30">
            <button
                onClick={onMenuToggle}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
                <Menu className="w-5 h-5 text-gray-600" />
            </button>

            <div className="hidden lg:block" />

            <div className="relative">
                <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                    <div className="w-8 h-8 rounded-full bg-[#043b67] flex items-center justify-center text-white text-xs font-bold">
                        {userEmail?.charAt(0).toUpperCase() || "A"}
                    </div>
                    <span className="hidden sm:block text-sm text-gray-700 font-medium max-w-[180px] truncate">
                        {userEmail || "Admin"}
                    </span>
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>

                {dropdownOpen && (
                    <>
                        <div className="fixed inset-0 z-40" onClick={() => setDropdownOpen(false)} />
                        <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                            <div className="px-4 py-3 border-b border-gray-100">
                                <p className="text-sm font-medium text-gray-900">Signed in as</p>
                                <p className="text-sm text-gray-500 truncate">{userEmail}</p>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
                            >
                                <LogOut className="w-4 h-4" />
                                Sign Out
                            </button>
                        </div>
                    </>
                )}
            </div>
        </header>
    );
}
