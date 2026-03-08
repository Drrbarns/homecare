"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { ConfirmDialog } from "@/components/admin/ConfirmDialog";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { ImageUploader } from "@/components/admin/ImageUploader";
import { Plus, Pencil, Trash2, Save, X, UserCheck } from "lucide-react";
import { toast } from "sonner";
import type { Staff } from "@/types/database";

const emptyForm = {
    staff_id: "", first_name: "", last_name: "", role: "Caregiver",
    department: "Care Services", phone: "", email: "", avatar_url: "",
    status: "active" as "active" | "inactive" | "on_leave", start_date: "", published: true,
};

export default function StaffPage() {
    const [staff, setStaff] = useState<Staff[]>([]);
    const [loading, setLoading] = useState(true);
    const [deleteTarget, setDeleteTarget] = useState<Staff | null>(null);
    const [editing, setEditing] = useState<Staff | null>(null);
    const [isNew, setIsNew] = useState(false);
    const [form, setForm] = useState(emptyForm);

    useEffect(() => { loadStaff(); }, []);

    const loadStaff = async () => {
        const supabase = createClient();
        const { data } = await supabase.from("staff").select("*").order("created_at", { ascending: false });
        setStaff(data ?? []);
        setLoading(false);
    };

    const startCreate = () => {
        setIsNew(true); setEditing(null); setForm(emptyForm);
    };

    const startEdit = (s: Staff) => {
        setEditing(s); setIsNew(false);
        setForm({
            staff_id: s.staff_id, first_name: s.first_name, last_name: s.last_name,
            role: s.role, department: s.department ?? "", phone: s.phone ?? "",
            email: s.email ?? "", avatar_url: s.avatar_url ?? "",
            status: s.status, start_date: s.start_date ?? "", published: s.published,
        });
    };

    const cancelEdit = () => { setEditing(null); setIsNew(false); };

    const handleSave = async () => {
        if (!form.staff_id.trim() || !form.first_name.trim() || !form.last_name.trim()) {
            toast.error("Staff ID, first name, and last name are required");
            return;
        }
        const supabase = createClient();
        const payload = {
            ...form,
            staff_id: form.staff_id.toUpperCase(),
            department: form.department || null,
            phone: form.phone || null,
            email: form.email || null,
            avatar_url: form.avatar_url || null,
            start_date: form.start_date || null,
        };

        if (isNew) {
            const { error } = await supabase.from("staff").insert(payload);
            if (error) { toast.error(error.message); return; }
            toast.success("Staff member added");
        } else if (editing) {
            const { error } = await supabase.from("staff").update(payload).eq("id", editing.id);
            if (error) { toast.error(error.message); return; }
            toast.success("Staff member updated");
        }
        cancelEdit(); loadStaff();
    };

    const handleDelete = async () => {
        if (!deleteTarget) return;
        const supabase = createClient();
        const { error } = await supabase.from("staff").delete().eq("id", deleteTarget.id);
        if (error) toast.error("Failed to delete");
        else { toast.success("Staff member removed"); loadStaff(); }
        setDeleteTarget(null);
    };

    if (loading) {
        return <div className="flex items-center justify-center h-64"><div className="w-8 h-8 border-2 border-[#043b67] border-t-transparent rounded-full animate-spin" /></div>;
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Staff / Workers</h1>
                    <p className="text-gray-500 text-sm mt-1">{staff.length} staff members</p>
                </div>
                <button onClick={startCreate} className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#043b67] text-white text-sm font-medium rounded-lg hover:bg-[#032d50] transition-colors">
                    <Plus className="w-4 h-4" />Add Staff
                </button>
            </div>

            {(isNew || editing) && (
                <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold text-gray-900">{isNew ? "New Staff Member" : "Edit Staff Member"}</h2>
                        <button onClick={cancelEdit} className="p-1.5 hover:bg-gray-100 rounded-lg"><X className="w-5 h-5 text-gray-400" /></button>
                    </div>
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Staff ID *</label>
                                <input type="text" value={form.staff_id} onChange={(e) => setForm({ ...form, staff_id: e.target.value.toUpperCase() })} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#043b67]/20 focus:border-[#043b67] font-mono" placeholder="MID-00123" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">First Name *</label>
                                <input type="text" value={form.first_name} onChange={(e) => setForm({ ...form, first_name: e.target.value })} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#043b67]/20 focus:border-[#043b67]" placeholder="John" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Last Name *</label>
                                <input type="text" value={form.last_name} onChange={(e) => setForm({ ...form, last_name: e.target.value })} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#043b67]/20 focus:border-[#043b67]" placeholder="Doe" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Role</label>
                                <input type="text" value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#043b67]/20 focus:border-[#043b67]" placeholder="Caregiver" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Department</label>
                                <input type="text" value={form.department} onChange={(e) => setForm({ ...form, department: e.target.value })} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#043b67]/20 focus:border-[#043b67]" placeholder="Care Services" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Status</label>
                                <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value as Staff["status"] })} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#043b67]/20 focus:border-[#043b67]">
                                    <option value="active">Active</option>
                                    <option value="on_leave">On Leave</option>
                                    <option value="inactive">Inactive</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone</label>
                                <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#043b67]/20 focus:border-[#043b67]" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                                <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#043b67]/20 focus:border-[#043b67]" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Start Date</label>
                                <input type="date" value={form.start_date} onChange={(e) => setForm({ ...form, start_date: e.target.value })} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#043b67]/20 focus:border-[#043b67]" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Avatar Image</label>
                                <ImageUploader value={form.avatar_url} onChange={(url) => setForm({ ...form, avatar_url: url })} />
                            </div>
                            <div className="flex items-end pb-1">
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input type="checkbox" checked={form.published} onChange={(e) => setForm({ ...form, published: e.target.checked })} className="w-4 h-4 rounded border-gray-300 text-[#043b67]" />
                                    <span className="text-sm text-gray-700">Published (visible in roster lookup)</span>
                                </label>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button onClick={handleSave} className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#043b67] text-white text-sm font-medium rounded-lg hover:bg-[#032d50] transition-colors">
                                <Save className="w-4 h-4" />{isNew ? "Add Staff Member" : "Save Changes"}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-gray-100 bg-gray-50/50">
                                <th className="px-4 py-3 text-left font-semibold text-gray-600">Staff ID</th>
                                <th className="px-4 py-3 text-left font-semibold text-gray-600">Name</th>
                                <th className="px-4 py-3 text-left font-semibold text-gray-600">Role</th>
                                <th className="px-4 py-3 text-left font-semibold text-gray-600">Status</th>
                                <th className="px-4 py-3 text-left font-semibold text-gray-600">Published</th>
                                <th className="px-4 py-3 text-right font-semibold text-gray-600 w-24">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {staff.length === 0 ? (
                                <tr><td colSpan={6} className="px-4 py-12 text-center text-gray-400">No staff members yet. Add your first staff member above.</td></tr>
                            ) : (
                                staff.map((s) => (
                                    <tr key={s.id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50">
                                        <td className="px-4 py-3 font-mono font-bold text-[#043b67] text-xs">{s.staff_id}</td>
                                        <td className="px-4 py-3">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-[#043b67] flex items-center justify-center text-white text-xs font-bold shrink-0">
                                                    {s.first_name.charAt(0)}{s.last_name.charAt(0)}
                                                </div>
                                                <span className="font-medium text-gray-900">{s.first_name} {s.last_name}</span>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 text-gray-500">{s.role}</td>
                                        <td className="px-4 py-3">
                                            <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${
                                                s.status === "active" ? "bg-emerald-50 text-emerald-700" :
                                                s.status === "on_leave" ? "bg-amber-50 text-amber-700" :
                                                "bg-gray-100 text-gray-600"
                                            }`}>
                                                <span className={`w-1.5 h-1.5 rounded-full ${
                                                    s.status === "active" ? "bg-emerald-500" :
                                                    s.status === "on_leave" ? "bg-amber-500" :
                                                    "bg-gray-400"
                                                }`} />
                                                {s.status.replace("_", " ")}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3"><StatusBadge status={s.published ? "published" : "draft"} /></td>
                                        <td className="px-4 py-3 text-right">
                                            <div className="flex items-center justify-end gap-1">
                                                <button onClick={() => startEdit(s)} className="p-1.5 text-gray-400 hover:text-[#043b67] hover:bg-gray-100 rounded transition-colors"><Pencil className="w-4 h-4" /></button>
                                                <button onClick={() => setDeleteTarget(s)} className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors"><Trash2 className="w-4 h-4" /></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <ConfirmDialog open={!!deleteTarget} title="Remove Staff Member" message={`Remove "${deleteTarget?.first_name} ${deleteTarget?.last_name}" (${deleteTarget?.staff_id})? This cannot be undone.`} onConfirm={handleDelete} onCancel={() => setDeleteTarget(null)} />
        </div>
    );
}
