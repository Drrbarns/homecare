"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { DataTable, type Column } from "@/components/admin/DataTable";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { ConfirmDialog } from "@/components/admin/ConfirmDialog";
import { Users, Trash2, Eye, X, Save } from "lucide-react";
import { toast } from "sonner";
import type { Lead, LeadStatus } from "@/types/database";

const STATUS_OPTIONS: { value: LeadStatus; label: string }[] = [
    { value: "new", label: "New" },
    { value: "contacted", label: "Contacted" },
    { value: "qualified", label: "Qualified" },
    { value: "closed", label: "Closed" },
];

export default function LeadsPage() {
    const [leads, setLeads] = useState<Lead[]>([]);
    const [loading, setLoading] = useState(true);
    const [deleteTarget, setDeleteTarget] = useState<Lead | null>(null);
    const [viewingLead, setViewingLead] = useState<Lead | null>(null);
    const [statusFilter, setStatusFilter] = useState<string>("all");
    const [editNotes, setEditNotes] = useState("");
    const [editStatus, setEditStatus] = useState<LeadStatus>("new");

    useEffect(() => { loadLeads(); }, []);

    const loadLeads = async () => {
        const supabase = createClient();
        let query = supabase.from("leads").select("*").order("created_at", { ascending: false });
        if (statusFilter !== "all") query = query.eq("status", statusFilter);
        const { data } = await query;
        setLeads(data ?? []);
        setLoading(false);
    };

    useEffect(() => { loadLeads(); }, [statusFilter]);

    const openLead = (lead: Lead) => {
        setViewingLead(lead);
        setEditNotes(lead.notes ?? "");
        setEditStatus(lead.status);
    };

    const saveLead = async () => {
        if (!viewingLead) return;
        const supabase = createClient();
        const { error } = await supabase.from("leads").update({ status: editStatus, notes: editNotes }).eq("id", viewingLead.id);
        if (error) { toast.error("Failed to update"); return; }
        toast.success("Lead updated");
        setViewingLead(null);
        loadLeads();
    };

    const handleDelete = async () => {
        if (!deleteTarget) return;
        const supabase = createClient();
        const { error } = await supabase.from("leads").delete().eq("id", deleteTarget.id);
        if (error) toast.error("Failed to delete");
        else { toast.success("Lead deleted"); loadLeads(); }
        setDeleteTarget(null);
    };

    const columns: Column<Lead>[] = [
        { key: "name", label: "Name", sortable: true, render: (item) => (
            <div>
                <p className="font-medium text-gray-900">{item.name}</p>
                <p className="text-xs text-gray-400">{item.email}</p>
            </div>
        )},
        { key: "phone", label: "Phone", render: (item) => <span className="text-gray-600">{item.phone || "-"}</span> },
        { key: "care_type", label: "Type", render: (item) => (
            <span className="text-xs font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded">{item.care_type}</span>
        )},
        { key: "zip_code", label: "Zip", render: (item) => <span className="text-gray-500">{item.zip_code || "-"}</span> },
        { key: "status", label: "Status", sortable: true, render: (item) => <StatusBadge status={item.status} /> },
        { key: "created_at", label: "Date", sortable: true, render: (item) => (
            <span className="text-gray-500 text-xs">
                {new Date(item.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
            </span>
        )},
    ];

    if (loading) {
        return <div className="flex items-center justify-center h-64"><div className="w-8 h-8 border-2 border-[#043b67] border-t-transparent rounded-full animate-spin" /></div>;
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Leads</h1>
                    <p className="text-gray-500 text-sm mt-1">{leads.length} contact submissions</p>
                </div>
                <div className="flex items-center gap-2">
                    {["all", ...STATUS_OPTIONS.map((s) => s.value)].map((s) => (
                        <button
                            key={s}
                            onClick={() => setStatusFilter(s)}
                            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                                statusFilter === s ? "bg-[#043b67] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                            }`}
                        >
                            {s === "all" ? "All" : s.charAt(0).toUpperCase() + s.slice(1)}
                        </button>
                    ))}
                </div>
            </div>

            <DataTable
                columns={columns}
                data={leads}
                searchPlaceholder="Search leads..."
                searchKeys={["name", "email", "phone", "zip_code"]}
                onRowClick={openLead}
                actions={(item) => (
                    <div className="flex items-center gap-1">
                        <button onClick={() => openLead(item)} className="p-1.5 text-gray-400 hover:text-[#043b67] hover:bg-gray-100 rounded transition-colors">
                            <Eye className="w-4 h-4" />
                        </button>
                        <button onClick={() => setDeleteTarget(item)} className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors">
                            <Trash2 className="w-4 h-4" />
                        </button>
                    </div>
                )}
                emptyMessage="No leads yet."
            />

            {viewingLead && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center">
                    <div className="fixed inset-0 bg-black/50" onClick={() => setViewingLead(null)} />
                    <div className="relative bg-white rounded-xl shadow-2xl max-w-lg w-full mx-4 z-10 max-h-[90vh] overflow-y-auto">
                        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                            <h3 className="text-lg font-semibold text-gray-900">Lead Details</h3>
                            <button onClick={() => setViewingLead(null)} className="p-1.5 hover:bg-gray-100 rounded-lg">
                                <X className="w-5 h-5 text-gray-400" />
                            </button>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div><p className="text-xs text-gray-400 mb-1">Name</p><p className="text-sm font-medium text-gray-900">{viewingLead.name}</p></div>
                                <div><p className="text-xs text-gray-400 mb-1">Email</p><p className="text-sm text-gray-700">{viewingLead.email}</p></div>
                                <div><p className="text-xs text-gray-400 mb-1">Phone</p><p className="text-sm text-gray-700">{viewingLead.phone || "-"}</p></div>
                                <div><p className="text-xs text-gray-400 mb-1">Zip Code</p><p className="text-sm text-gray-700">{viewingLead.zip_code || "-"}</p></div>
                                <div><p className="text-xs text-gray-400 mb-1">Care Type</p><p className="text-sm text-gray-700">{viewingLead.care_type}</p></div>
                                <div><p className="text-xs text-gray-400 mb-1">Person Needing Care</p><p className="text-sm text-gray-700">{viewingLead.person_needing_care || "-"}</p></div>
                                <div><p className="text-xs text-gray-400 mb-1">How They Heard</p><p className="text-sm text-gray-700">{viewingLead.heard_about_us || "-"}</p></div>
                                <div><p className="text-xs text-gray-400 mb-1">Cell Phone?</p><p className="text-sm text-gray-700">{viewingLead.is_cell_phone == null ? "-" : viewingLead.is_cell_phone ? "Yes" : "No"}</p></div>
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 mb-1">Submitted</p>
                                <p className="text-sm text-gray-700">{new Date(viewingLead.created_at).toLocaleString("en-US", { dateStyle: "long", timeStyle: "short" })}</p>
                            </div>
                            <hr />
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Status</label>
                                <select value={editStatus} onChange={(e) => setEditStatus(e.target.value as LeadStatus)} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#043b67]/20 focus:border-[#043b67]">
                                    {STATUS_OPTIONS.map((o) => (<option key={o.value} value={o.value}>{o.label}</option>))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Notes</label>
                                <textarea value={editNotes} onChange={(e) => setEditNotes(e.target.value)} rows={4} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#043b67]/20 focus:border-[#043b67] resize-none" placeholder="Add internal notes about this lead..." />
                            </div>
                            <div className="flex justify-end">
                                <button onClick={saveLead} className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#043b67] text-white text-sm font-medium rounded-lg hover:bg-[#032d50] transition-colors">
                                    <Save className="w-4 h-4" />Save Changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <ConfirmDialog open={!!deleteTarget} title="Delete Lead" message="Delete this lead permanently?" onConfirm={handleDelete} onCancel={() => setDeleteTarget(null)} />
        </div>
    );
}
