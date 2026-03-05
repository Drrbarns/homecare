"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { ConfirmDialog } from "@/components/admin/ConfirmDialog";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { ImageUploader } from "@/components/admin/ImageUploader";
import { Plus, Pencil, Trash2, Save, X, GripVertical } from "lucide-react";
import { toast } from "sonner";
import type { Service } from "@/types/database";

export default function ServicesPage() {
    const [services, setServices] = useState<Service[]>([]);
    const [loading, setLoading] = useState(true);
    const [deleteTarget, setDeleteTarget] = useState<Service | null>(null);
    const [editing, setEditing] = useState<Service | null>(null);
    const [isNew, setIsNew] = useState(false);
    const [form, setForm] = useState({
        name: "", slug: "", short_description: "", long_description: "",
        icon_name: "", image_url: "", sort_order: 0, published: true,
    });

    useEffect(() => { loadServices(); }, []);

    const loadServices = async () => {
        const supabase = createClient();
        const { data } = await supabase.from("services").select("*").order("sort_order", { ascending: true });
        setServices(data ?? []);
        setLoading(false);
    };

    const generateSlug = (name: string) =>
        name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

    const startCreate = () => {
        setIsNew(true); setEditing(null);
        setForm({ name: "", slug: "", short_description: "", long_description: "", icon_name: "", image_url: "", sort_order: services.length, published: true });
    };

    const startEdit = (s: Service) => {
        setEditing(s); setIsNew(false);
        setForm({ name: s.name, slug: s.slug, short_description: s.short_description ?? "", long_description: s.long_description ?? "", icon_name: s.icon_name ?? "", image_url: s.image_url ?? "", sort_order: s.sort_order, published: s.published });
    };

    const cancelEdit = () => { setEditing(null); setIsNew(false); };

    const handleSave = async () => {
        if (!form.name.trim()) { toast.error("Name is required"); return; }
        const supabase = createClient();
        const payload = { ...form, slug: form.slug || generateSlug(form.name) };
        if (isNew) {
            const { error } = await supabase.from("services").insert(payload);
            if (error) { toast.error(error.message); return; }
            toast.success("Service created");
        } else if (editing) {
            const { error } = await supabase.from("services").update(payload).eq("id", editing.id);
            if (error) { toast.error(error.message); return; }
            toast.success("Service updated");
        }
        cancelEdit(); loadServices();
    };

    const handleDelete = async () => {
        if (!deleteTarget) return;
        const supabase = createClient();
        const { error } = await supabase.from("services").delete().eq("id", deleteTarget.id);
        if (error) toast.error("Failed to delete");
        else { toast.success("Service deleted"); loadServices(); }
        setDeleteTarget(null);
    };

    if (loading) {
        return <div className="flex items-center justify-center h-64"><div className="w-8 h-8 border-2 border-[#043b67] border-t-transparent rounded-full animate-spin" /></div>;
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Services</h1>
                    <p className="text-gray-500 text-sm mt-1">{services.length} care services</p>
                </div>
                <button onClick={startCreate} className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#043b67] text-white text-sm font-medium rounded-lg hover:bg-[#032d50] transition-colors">
                    <Plus className="w-4 h-4" />New Service
                </button>
            </div>

            {(isNew || editing) && (
                <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold text-gray-900">{isNew ? "New Service" : "Edit Service"}</h2>
                        <button onClick={cancelEdit} className="p-1.5 hover:bg-gray-100 rounded-lg"><X className="w-5 h-5 text-gray-400" /></button>
                    </div>
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Name</label>
                                <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value, slug: form.slug || generateSlug(e.target.value) })} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#043b67]/20 focus:border-[#043b67]" placeholder="Service name" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Slug</label>
                                <input type="text" value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#043b67]/20 focus:border-[#043b67]" placeholder="service-slug" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Short Description</label>
                            <textarea value={form.short_description} onChange={(e) => setForm({ ...form, short_description: e.target.value })} rows={2} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#043b67]/20 focus:border-[#043b67] resize-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Long Description</label>
                            <textarea value={form.long_description} onChange={(e) => setForm({ ...form, long_description: e.target.value })} rows={5} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#043b67]/20 focus:border-[#043b67] resize-none" />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Icon Name (Lucide)</label>
                                <input type="text" value={form.icon_name} onChange={(e) => setForm({ ...form, icon_name: e.target.value })} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#043b67]/20 focus:border-[#043b67]" placeholder="heart" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Sort Order</label>
                                <input type="number" value={form.sort_order} onChange={(e) => setForm({ ...form, sort_order: parseInt(e.target.value) || 0 })} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#043b67]/20 focus:border-[#043b67]" />
                            </div>
                            <div className="flex items-end">
                                <label className="flex items-center gap-3 cursor-pointer pb-2.5">
                                    <input type="checkbox" checked={form.published} onChange={(e) => setForm({ ...form, published: e.target.checked })} className="w-4 h-4 rounded border-gray-300 text-[#043b67]" />
                                    <span className="text-sm text-gray-700">Published</span>
                                </label>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Image</label>
                            <ImageUploader value={form.image_url} onChange={(url) => setForm({ ...form, image_url: url })} />
                        </div>
                        <div className="flex justify-end">
                            <button onClick={handleSave} className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#043b67] text-white text-sm font-medium rounded-lg hover:bg-[#032d50] transition-colors">
                                <Save className="w-4 h-4" />{isNew ? "Create Service" : "Save Changes"}
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
                                <th className="px-4 py-3 text-left font-semibold text-gray-600 w-8"></th>
                                <th className="px-4 py-3 text-left font-semibold text-gray-600">Service</th>
                                <th className="px-4 py-3 text-left font-semibold text-gray-600">Slug</th>
                                <th className="px-4 py-3 text-left font-semibold text-gray-600">Status</th>
                                <th className="px-4 py-3 text-left font-semibold text-gray-600">Order</th>
                                <th className="px-4 py-3 text-right font-semibold text-gray-600 w-24">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {services.length === 0 ? (
                                <tr><td colSpan={6} className="px-4 py-12 text-center text-gray-400">No services yet.</td></tr>
                            ) : (
                                services.map((s) => (
                                    <tr key={s.id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50">
                                        <td className="px-4 py-3"><GripVertical className="w-4 h-4 text-gray-300" /></td>
                                        <td className="px-4 py-3 font-medium text-gray-900">{s.name}</td>
                                        <td className="px-4 py-3 text-gray-500">/{s.slug}</td>
                                        <td className="px-4 py-3"><StatusBadge status={s.published ? "published" : "draft"} /></td>
                                        <td className="px-4 py-3 text-gray-500">{s.sort_order}</td>
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

            <ConfirmDialog open={!!deleteTarget} title="Delete Service" message={`Delete "${deleteTarget?.name}"? This cannot be undone.`} onConfirm={handleDelete} onCancel={() => setDeleteTarget(null)} />
        </div>
    );
}
