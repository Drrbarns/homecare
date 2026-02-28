"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { DataTable, type Column } from "@/components/admin/DataTable";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { ConfirmDialog } from "@/components/admin/ConfirmDialog";
import { Plus, Pencil, Trash2, Save, X, MapPin } from "lucide-react";
import { toast } from "sonner";
import type { OfficeLocation } from "@/types/database";

export default function OfficesPage() {
    const [offices, setOffices] = useState<OfficeLocation[]>([]);
    const [loading, setLoading] = useState(true);
    const [deleteTarget, setDeleteTarget] = useState<OfficeLocation | null>(null);
    const [editing, setEditing] = useState<OfficeLocation | null>(null);
    const [isNew, setIsNew] = useState(false);
    const [form, setForm] = useState({
        name: "", address: "", city: "", state: "", zip: "",
        phone: "", email: "", lat: "", lng: "", published: true,
    });

    useEffect(() => { loadOffices(); }, []);

    const loadOffices = async () => {
        const supabase = createClient();
        const { data } = await supabase.from("office_locations").select("*").order("state", { ascending: true }).order("city", { ascending: true });
        setOffices(data ?? []);
        setLoading(false);
    };

    const startCreate = () => {
        setIsNew(true); setEditing(null);
        setForm({ name: "", address: "", city: "", state: "", zip: "", phone: "", email: "", lat: "", lng: "", published: true });
    };

    const startEdit = (o: OfficeLocation) => {
        setEditing(o); setIsNew(false);
        setForm({
            name: o.name, address: o.address, city: o.city, state: o.state, zip: o.zip,
            phone: o.phone ?? "", email: o.email ?? "",
            lat: o.lat?.toString() ?? "", lng: o.lng?.toString() ?? "", published: o.published,
        });
    };

    const cancelEdit = () => { setEditing(null); setIsNew(false); };

    const handleSave = async () => {
        if (!form.name.trim() || !form.address.trim() || !form.city.trim() || !form.state.trim() || !form.zip.trim()) {
            toast.error("Name, address, city, state, and zip are required");
            return;
        }
        const supabase = createClient();
        const payload = {
            ...form,
            lat: form.lat ? parseFloat(form.lat) : null,
            lng: form.lng ? parseFloat(form.lng) : null,
        };
        if (isNew) {
            const { error } = await supabase.from("office_locations").insert(payload);
            if (error) { toast.error(error.message); return; }
            toast.success("Office created");
        } else if (editing) {
            const { error } = await supabase.from("office_locations").update(payload).eq("id", editing.id);
            if (error) { toast.error(error.message); return; }
            toast.success("Office updated");
        }
        cancelEdit(); loadOffices();
    };

    const handleDelete = async () => {
        if (!deleteTarget) return;
        const supabase = createClient();
        const { error } = await supabase.from("office_locations").delete().eq("id", deleteTarget.id);
        if (error) toast.error("Failed to delete");
        else { toast.success("Office deleted"); loadOffices(); }
        setDeleteTarget(null);
    };

    const columns: Column<OfficeLocation>[] = [
        { key: "name", label: "Office Name", sortable: true, render: (item) => (
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#043b67]/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#043b67]" />
                </div>
                <span className="font-medium text-gray-900">{item.name}</span>
            </div>
        )},
        { key: "city", label: "Location", sortable: true, render: (item) => <span className="text-gray-600">{item.city}, {item.state} {item.zip}</span> },
        { key: "phone", label: "Phone", render: (item) => <span className="text-gray-500">{item.phone || "-"}</span> },
        { key: "published", label: "Status", render: (item) => <StatusBadge status={item.published ? "published" : "draft"} /> },
    ];

    if (loading) {
        return <div className="flex items-center justify-center h-64"><div className="w-8 h-8 border-2 border-[#043b67] border-t-transparent rounded-full animate-spin" /></div>;
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Office Locations</h1>
                    <p className="text-gray-500 text-sm mt-1">{offices.length} offices</p>
                </div>
                <button onClick={startCreate} className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#043b67] text-white text-sm font-medium rounded-lg hover:bg-[#032d50] transition-colors">
                    <Plus className="w-4 h-4" />New Office
                </button>
            </div>

            {(isNew || editing) && (
                <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold text-gray-900">{isNew ? "New Office" : "Edit Office"}</h2>
                        <button onClick={cancelEdit} className="p-1.5 hover:bg-gray-100 rounded-lg"><X className="w-5 h-5 text-gray-400" /></button>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Office Name</label>
                            <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#043b67]/20 focus:border-[#043b67]" placeholder="Visiting Angels of Bryn Mawr" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Street Address</label>
                            <input type="text" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#043b67]/20 focus:border-[#043b67]" placeholder="123 Main Street, Suite 100" />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">City</label>
                                <input type="text" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#043b67]/20 focus:border-[#043b67]" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">State</label>
                                <input type="text" value={form.state} onChange={(e) => setForm({ ...form, state: e.target.value })} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#043b67]/20 focus:border-[#043b67]" maxLength={2} placeholder="PA" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Zip Code</label>
                                <input type="text" value={form.zip} onChange={(e) => setForm({ ...form, zip: e.target.value })} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#043b67]/20 focus:border-[#043b67]" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone</label>
                                <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#043b67]/20 focus:border-[#043b67]" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                                <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#043b67]/20 focus:border-[#043b67]" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Latitude</label>
                                <input type="text" value={form.lat} onChange={(e) => setForm({ ...form, lat: e.target.value })} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#043b67]/20 focus:border-[#043b67]" placeholder="40.0150" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Longitude</label>
                                <input type="text" value={form.lng} onChange={(e) => setForm({ ...form, lng: e.target.value })} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#043b67]/20 focus:border-[#043b67]" placeholder="-75.3191" />
                            </div>
                            <div className="flex items-end">
                                <label className="flex items-center gap-3 cursor-pointer pb-2.5">
                                    <input type="checkbox" checked={form.published} onChange={(e) => setForm({ ...form, published: e.target.checked })} className="w-4 h-4 rounded border-gray-300 text-[#043b67]" />
                                    <span className="text-sm text-gray-700">Published</span>
                                </label>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button onClick={handleSave} className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#043b67] text-white text-sm font-medium rounded-lg hover:bg-[#032d50] transition-colors">
                                <Save className="w-4 h-4" />{isNew ? "Create Office" : "Save Changes"}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <DataTable
                columns={columns}
                data={offices}
                searchPlaceholder="Search offices..."
                searchKeys={["name", "city", "state", "zip"]}
                actions={(item) => (
                    <div className="flex items-center gap-1">
                        <button onClick={() => startEdit(item)} className="p-1.5 text-gray-400 hover:text-[#043b67] hover:bg-gray-100 rounded transition-colors"><Pencil className="w-4 h-4" /></button>
                        <button onClick={() => setDeleteTarget(item)} className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors"><Trash2 className="w-4 h-4" /></button>
                    </div>
                )}
                emptyMessage="No office locations yet."
            />

            <ConfirmDialog open={!!deleteTarget} title="Delete Office" message={`Delete "${deleteTarget?.name}"?`} onConfirm={handleDelete} onCancel={() => setDeleteTarget(null)} />
        </div>
    );
}
