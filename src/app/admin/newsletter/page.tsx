"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { DataTable, type Column } from "@/components/admin/DataTable";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { ConfirmDialog } from "@/components/admin/ConfirmDialog";
import { Download, Trash2, Mail } from "lucide-react";
import { toast } from "sonner";
import type { NewsletterSubscriber } from "@/types/database";

export default function NewsletterPage() {
    const [subscribers, setSubscribers] = useState<NewsletterSubscriber[]>([]);
    const [loading, setLoading] = useState(true);
    const [deleteTarget, setDeleteTarget] = useState<NewsletterSubscriber | null>(null);

    useEffect(() => { loadSubscribers(); }, []);

    const loadSubscribers = async () => {
        const supabase = createClient();
        const { data } = await supabase.from("newsletter_subscribers").select("*").order("created_at", { ascending: false });
        setSubscribers(data ?? []);
        setLoading(false);
    };

    const toggleSubscription = async (sub: NewsletterSubscriber) => {
        const supabase = createClient();
        const { error } = await supabase
            .from("newsletter_subscribers")
            .update({ subscribed: !sub.subscribed })
            .eq("id", sub.id);
        if (error) toast.error("Failed to update");
        else {
            toast.success(sub.subscribed ? "Unsubscribed" : "Resubscribed");
            loadSubscribers();
        }
    };

    const handleDelete = async () => {
        if (!deleteTarget) return;
        const supabase = createClient();
        const { error } = await supabase.from("newsletter_subscribers").delete().eq("id", deleteTarget.id);
        if (error) toast.error("Failed to delete");
        else { toast.success("Subscriber removed"); loadSubscribers(); }
        setDeleteTarget(null);
    };

    const exportCSV = () => {
        const active = subscribers.filter((s) => s.subscribed);
        if (active.length === 0) { toast.error("No active subscribers to export"); return; }
        const csv = "Email,Subscribed Date\n" +
            active.map((s) => `${s.email},${new Date(s.created_at).toLocaleDateString()}`).join("\n");
        const blob = new Blob([csv], { type: "text/csv" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `newsletter-subscribers-${new Date().toISOString().split("T")[0]}.csv`;
        a.click();
        URL.revokeObjectURL(url);
        toast.success(`Exported ${active.length} subscribers`);
    };

    const activeCount = subscribers.filter((s) => s.subscribed).length;
    const inactiveCount = subscribers.length - activeCount;

    const columns: Column<NewsletterSubscriber>[] = [
        {
            key: "email",
            label: "Email",
            sortable: true,
            render: (item) => (
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#043b67]/10 flex items-center justify-center shrink-0">
                        <Mail className="w-4 h-4 text-[#043b67]" />
                    </div>
                    <span className="font-medium text-gray-900">{item.email}</span>
                </div>
            ),
        },
        {
            key: "subscribed",
            label: "Status",
            sortable: true,
            render: (item) => (
                <button onClick={(e) => { e.stopPropagation(); toggleSubscription(item); }}>
                    <StatusBadge status={item.subscribed ? "active" : "inactive"} />
                </button>
            ),
        },
        {
            key: "created_at",
            label: "Subscribed On",
            sortable: true,
            render: (item) => (
                <span className="text-gray-500 text-sm">
                    {new Date(item.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                </span>
            ),
        },
    ];

    if (loading) {
        return <div className="flex items-center justify-center h-64"><div className="w-8 h-8 border-2 border-[#043b67] border-t-transparent rounded-full animate-spin" /></div>;
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Newsletter Subscribers</h1>
                    <p className="text-gray-500 text-sm mt-1">
                        {activeCount} active, {inactiveCount} unsubscribed
                    </p>
                </div>
                <button
                    onClick={exportCSV}
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#043b67] text-white text-sm font-medium rounded-lg hover:bg-[#032d50] transition-colors"
                >
                    <Download className="w-4 h-4" />
                    Export CSV
                </button>
            </div>

            <DataTable
                columns={columns}
                data={subscribers}
                searchPlaceholder="Search by email..."
                searchKeys={["email"]}
                actions={(item) => (
                    <button
                        onClick={() => setDeleteTarget(item)}
                        className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                    >
                        <Trash2 className="w-4 h-4" />
                    </button>
                )}
                emptyMessage="No subscribers yet."
            />

            <ConfirmDialog
                open={!!deleteTarget}
                title="Remove Subscriber"
                message={`Remove "${deleteTarget?.email}" from the newsletter list?`}
                onConfirm={handleDelete}
                onCancel={() => setDeleteTarget(null)}
            />
        </div>
    );
}
