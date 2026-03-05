"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { createClient } from "@/lib/supabase/client";
import { Toaster } from "sonner";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [userEmail, setUserEmail] = useState<string>();

    useEffect(() => {
        const supabase = createClient();
        supabase.auth.getUser().then(({ data }) => {
            setUserEmail(data.user?.email ?? undefined);
        });
    }, []);

    if (pathname === "/admin/login") {
        return <>{children}</>;
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Toaster position="top-right" richColors />
            <AdminSidebar mobileOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            <div className="lg:ml-64 min-h-screen flex flex-col">
                <AdminHeader onMenuToggle={() => setSidebarOpen(true)} userEmail={userEmail} />
                <main className="flex-1 p-4 lg:p-6">{children}</main>
            </div>
        </div>
    );
}
