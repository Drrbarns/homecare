"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { ConfirmDialog } from "@/components/admin/ConfirmDialog";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { Plus, Pencil, Trash2, Save, X, ChevronDown, ChevronRight, GripVertical } from "lucide-react";
import { toast } from "sonner";
import type { NavigationItem } from "@/types/database";

const MENU_GROUPS = [
    { value: "header", label: "Header Navigation" },
    { value: "types_of_care", label: "Types of Care (Dropdown)" },
    { value: "home_care_info", label: "Home Care Info (Dropdown)" },
    { value: "footer", label: "Footer Links" },
];

export default function NavigationPage() {
    const [items, setItems] = useState<NavigationItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [deleteTarget, setDeleteTarget] = useState<NavigationItem | null>(null);
    const [editing, setEditing] = useState<NavigationItem | null>(null);
    const [isNew, setIsNew] = useState(false);
    const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set(["header"]));
    const [form, setForm] = useState({
        menu_group: "header", label: "", href: "", sort_order: 0, published: true,
    });

    useEffect(() => { loadItems(); }, []);

    const loadItems = async () => {
        const supabase = createClient();
        const { data } = await supabase.from("navigation_items").select("*").order("menu_group").order("sort_order", { ascending: true });
        setItems(data ?? []);
        setLoading(false);
    };

    const toggleGroup = (group: string) => {
        setExpandedGroups((prev) => {
            const next = new Set(prev);
            next.has(group) ? next.delete(group) : next.add(group);
            return next;
        });
    };

    const startCreate = () => {
        setIsNew(true); setEditing(null);
        setForm({ menu_group: "header", label: "", href: "", sort_order: 0, published: true });
    };

    const startEdit = (item: NavigationItem) => {
        setEditing(item); setIsNew(false);
        setForm({
            menu_group: item.menu_group, label: item.label, href: item.href,
            sort_order: item.sort_order, published: item.published,
        });
    };

    const cancelEdit = () => { setEditing(null); setIsNew(false); };

    const handleSave = async () => {
        if (!form.label.trim() || !form.href.trim()) { toast.error("Label and URL are required"); return; }
        const supabase = createClient();
        if (isNew) {
            const { error } = await supabase.from("navigation_items").insert(form);
            if (error) { toast.error(error.message); return; }
            toast.success("Nav item created");
        } else if (editing) {
            const { error } = await supabase.from("navigation_items").update(form).eq("id", editing.id);
            if (error) { toast.error(error.message); return; }
            toast.success("Nav item updated");
        }
        cancelEdit(); loadItems();
    };

    const handleDelete = async () => {
        if (!deleteTarget) return;
        const supabase = createClient();
        const { error } = await supabase.from("navigation_items").delete().eq("id", deleteTarget.id);
        if (error) toast.error("Failed to delete");
        else { toast.success("Nav item deleted"); loadItems(); }
        setDeleteTarget(null);
    };

    const grouped = MENU_GROUPS.map((g) => ({
        ...g,
        items: items.filter((i) => i.menu_group === g.value),
    }));

    if (loading) {
        return <div className="flex items-center justify-center h-64"><div className="w-8 h-8 border-2 border-[#043b67] border-t-transparent rounded-full animate-spin" /></div>;
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Navigation</h1>
                    <p className="text-gray-500 text-sm mt-1">Manage header, dropdown, and footer navigation links</p>
                </div>
                <button onClick={startCreate} className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#043b67] text-white text-sm font-medium rounded-lg hover:bg-[#032d50] transition-colors">
                    <Plus className="w-4 h-4" />New Item
                </button>
            </div>

            {(isNew || editing) && (
                <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold text-gray-900">{isNew ? "New Nav Item" : "Edit Nav Item"}</h2>
                        <button onClick={cancelEdit} className="p-1.5 hover:bg-gray-100 rounded-lg"><X className="w-5 h-5 text-gray-400" /></button>
                    </div>
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Menu Group</label>
                                <select value={form.menu_group} onChange={(e) => setForm({ ...form, menu_group: e.target.value })} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#043b67]/20 focus:border-[#043b67]">
                                    {MENU_GROUPS.map((g) => (<option key={g.value} value={g.value}>{g.label}</option>))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Sort Order</label>
                                <input type="number" value={form.sort_order} onChange={(e) => setForm({ ...form, sort_order: parseInt(e.target.value) || 0 })} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#043b67]/20 focus:border-[#043b67]" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Label</label>
                                <input type="text" value={form.label} onChange={(e) => setForm({ ...form, label: e.target.value })} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#043b67]/20 focus:border-[#043b67]" placeholder="Menu item text" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">URL / Href</label>
                                <input type="text" value={form.href} onChange={(e) => setForm({ ...form, href: e.target.value })} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#043b67]/20 focus:border-[#043b67]" placeholder="/about-us" />
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input type="checkbox" checked={form.published} onChange={(e) => setForm({ ...form, published: e.target.checked })} className="w-4 h-4 rounded border-gray-300 text-[#043b67]" />
                                <span className="text-sm text-gray-700">Published</span>
                            </label>
                            <button onClick={handleSave} className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#043b67] text-white text-sm font-medium rounded-lg hover:bg-[#032d50] transition-colors">
                                <Save className="w-4 h-4" />{isNew ? "Create" : "Save"}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="space-y-4">
                {grouped.map((group) => (
                    <div key={group.value} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                        <button onClick={() => toggleGroup(group.value)} className="w-full flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition-colors">
                            <div className="flex items-center gap-3">
                                {expandedGroups.has(group.value) ? <ChevronDown className="w-4 h-4 text-gray-400" /> : <ChevronRight className="w-4 h-4 text-gray-400" />}
                                <h3 className="font-semibold text-gray-900">{group.label}</h3>
                                <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{group.items.length}</span>
                            </div>
                        </button>
                        {expandedGroups.has(group.value) && (
                            <div className="border-t border-gray-100 divide-y divide-gray-50">
                                {group.items.length === 0 ? (
                                    <p className="px-5 py-4 text-sm text-gray-400">No items in this group.</p>
                                ) : (
                                    group.items.map((item) => (
                                        <div key={item.id} className="px-5 py-3 flex items-center justify-between hover:bg-gray-50">
                                            <div className="flex items-center gap-3">
                                                <GripVertical className="w-4 h-4 text-gray-300" />
                                                <div>
                                                    <p className="text-sm font-medium text-gray-900">{item.label}</p>
                                                    <p className="text-xs text-gray-400">{item.href}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <StatusBadge status={item.published ? "published" : "draft"} />
                                                <button onClick={() => startEdit(item)} className="p-1.5 text-gray-400 hover:text-[#043b67] hover:bg-gray-100 rounded transition-colors"><Pencil className="w-4 h-4" /></button>
                                                <button onClick={() => setDeleteTarget(item)} className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors"><Trash2 className="w-4 h-4" /></button>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <ConfirmDialog open={!!deleteTarget} title="Delete Nav Item" message={`Delete "${deleteTarget?.label}"?`} onConfirm={handleDelete} onCancel={() => setDeleteTarget(null)} />
        </div>
    );
}
