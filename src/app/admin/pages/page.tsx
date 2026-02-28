"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { RichTextEditor } from "@/components/admin/RichTextEditor";
import { ImageUploader } from "@/components/admin/ImageUploader";
import { ConfirmDialog } from "@/components/admin/ConfirmDialog";
import { Plus, Pencil, Trash2, Save, X, FileText, ChevronDown, ChevronRight } from "lucide-react";
import { toast } from "sonner";
import type { PageSection } from "@/types/database";

const PAGE_SLUGS = [
    { value: "home", label: "Homepage" },
    { value: "about-us", label: "About Us" },
    { value: "how-to-get-started", label: "How To Get Started" },
    { value: "caregivers", label: "Caregivers" },
    { value: "fall-prevention", label: "Fall Prevention" },
    { value: "home-care-costs", label: "Home Care Costs" },
    { value: "how-we-assist", label: "How We Assist" },
    { value: "long-distance-care-giving", label: "Long Distance Care Giving" },
    { value: "veterans-benefits", label: "Veterans Benefits" },
    { value: "employment", label: "Caregiver Jobs" },
    { value: "contact-us", label: "Contact Us" },
    { value: "resources", label: "Resources" },
];

export default function PagesPage() {
    const [sections, setSections] = useState<PageSection[]>([]);
    const [loading, setLoading] = useState(true);
    const [deleteTarget, setDeleteTarget] = useState<PageSection | null>(null);
    const [editing, setEditing] = useState<PageSection | null>(null);
    const [isNew, setIsNew] = useState(false);
    const [expandedPages, setExpandedPages] = useState<Set<string>>(new Set(["home"]));
    const [form, setForm] = useState({
        page_slug: "home", section_key: "", title: "", subtitle: "",
        body: "", image_url: "", sort_order: 0, published: true,
    });

    useEffect(() => { loadSections(); }, []);

    const loadSections = async () => {
        const supabase = createClient();
        const { data } = await supabase.from("page_sections").select("*").order("page_slug").order("sort_order", { ascending: true });
        setSections(data ?? []);
        setLoading(false);
    };

    const togglePage = (slug: string) => {
        setExpandedPages((prev) => {
            const next = new Set(prev);
            next.has(slug) ? next.delete(slug) : next.add(slug);
            return next;
        });
    };

    const startCreate = () => {
        setIsNew(true); setEditing(null);
        setForm({ page_slug: "home", section_key: "", title: "", subtitle: "", body: "", image_url: "", sort_order: 0, published: true });
    };

    const startEdit = (s: PageSection) => {
        setEditing(s); setIsNew(false);
        setForm({
            page_slug: s.page_slug, section_key: s.section_key, title: s.title ?? "",
            subtitle: s.subtitle ?? "", body: s.body ?? "", image_url: s.image_url ?? "",
            sort_order: s.sort_order, published: s.published,
        });
    };

    const cancelEdit = () => { setEditing(null); setIsNew(false); };

    const handleSave = async () => {
        if (!form.section_key.trim()) { toast.error("Section key is required"); return; }
        const supabase = createClient();
        if (isNew) {
            const { error } = await supabase.from("page_sections").insert(form);
            if (error) { toast.error(error.message); return; }
            toast.success("Section created");
        } else if (editing) {
            const { error } = await supabase.from("page_sections").update(form).eq("id", editing.id);
            if (error) { toast.error(error.message); return; }
            toast.success("Section updated");
        }
        cancelEdit(); loadSections();
    };

    const handleDelete = async () => {
        if (!deleteTarget) return;
        const supabase = createClient();
        const { error } = await supabase.from("page_sections").delete().eq("id", deleteTarget.id);
        if (error) toast.error("Failed to delete");
        else { toast.success("Section deleted"); loadSections(); }
        setDeleteTarget(null);
    };

    const groupedSections = PAGE_SLUGS.map((page) => ({
        ...page,
        sections: sections.filter((s) => s.page_slug === page.value),
    }));

    if (loading) {
        return <div className="flex items-center justify-center h-64"><div className="w-8 h-8 border-2 border-[#043b67] border-t-transparent rounded-full animate-spin" /></div>;
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Page Content</h1>
                    <p className="text-gray-500 text-sm mt-1">Manage editable content sections across pages</p>
                </div>
                <button onClick={startCreate} className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#043b67] text-white text-sm font-medium rounded-lg hover:bg-[#032d50] transition-colors">
                    <Plus className="w-4 h-4" />New Section
                </button>
            </div>

            {(isNew || editing) && (
                <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold text-gray-900">{isNew ? "New Section" : "Edit Section"}</h2>
                        <button onClick={cancelEdit} className="p-1.5 hover:bg-gray-100 rounded-lg"><X className="w-5 h-5 text-gray-400" /></button>
                    </div>
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Page</label>
                                <select value={form.page_slug} onChange={(e) => setForm({ ...form, page_slug: e.target.value })} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#043b67]/20 focus:border-[#043b67]">
                                    {PAGE_SLUGS.map((p) => (<option key={p.value} value={p.value}>{p.label}</option>))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Section Key</label>
                                <input type="text" value={form.section_key} onChange={(e) => setForm({ ...form, section_key: e.target.value })} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#043b67]/20 focus:border-[#043b67]" placeholder="hero, intro, cta..." />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Sort Order</label>
                                <input type="number" value={form.sort_order} onChange={(e) => setForm({ ...form, sort_order: parseInt(e.target.value) || 0 })} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#043b67]/20 focus:border-[#043b67]" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Title</label>
                            <input type="text" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#043b67]/20 focus:border-[#043b67]" placeholder="Section title" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Subtitle</label>
                            <input type="text" value={form.subtitle} onChange={(e) => setForm({ ...form, subtitle: e.target.value })} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#043b67]/20 focus:border-[#043b67]" placeholder="Optional subtitle" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">Body Content</label>
                            <RichTextEditor content={form.body} onChange={(html) => setForm({ ...form, body: html })} />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Image</label>
                            <ImageUploader value={form.image_url} onChange={(url) => setForm({ ...form, image_url: url })} />
                        </div>
                        <div className="flex items-center justify-between">
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input type="checkbox" checked={form.published} onChange={(e) => setForm({ ...form, published: e.target.checked })} className="w-4 h-4 rounded border-gray-300 text-[#043b67]" />
                                <span className="text-sm text-gray-700">Published</span>
                            </label>
                            <button onClick={handleSave} className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#043b67] text-white text-sm font-medium rounded-lg hover:bg-[#032d50] transition-colors">
                                <Save className="w-4 h-4" />{isNew ? "Create Section" : "Save Changes"}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="space-y-3">
                {groupedSections.map((page) => (
                    <div key={page.value} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                        <button onClick={() => togglePage(page.value)} className="w-full flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition-colors">
                            <div className="flex items-center gap-3">
                                {expandedPages.has(page.value) ? <ChevronDown className="w-4 h-4 text-gray-400" /> : <ChevronRight className="w-4 h-4 text-gray-400" />}
                                <FileText className="w-4 h-4 text-[#043b67]" />
                                <h3 className="font-semibold text-gray-900">{page.label}</h3>
                                <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{page.sections.length}</span>
                            </div>
                        </button>
                        {expandedPages.has(page.value) && (
                            <div className="border-t border-gray-100">
                                {page.sections.length === 0 ? (
                                    <p className="px-5 py-4 text-sm text-gray-400">No content sections for this page.</p>
                                ) : (
                                    <div className="divide-y divide-gray-50">
                                        {page.sections.map((s) => (
                                            <div key={s.id} className="px-5 py-3 flex items-center justify-between hover:bg-gray-50">
                                                <div>
                                                    <p className="text-sm font-medium text-gray-900">{s.title || s.section_key}</p>
                                                    <p className="text-xs text-gray-400 mt-0.5">Key: {s.section_key} | Order: {s.sort_order}</p>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <button onClick={() => startEdit(s)} className="p-1.5 text-gray-400 hover:text-[#043b67] hover:bg-gray-100 rounded transition-colors"><Pencil className="w-4 h-4" /></button>
                                                    <button onClick={() => setDeleteTarget(s)} className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors"><Trash2 className="w-4 h-4" /></button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <ConfirmDialog open={!!deleteTarget} title="Delete Section" message="Delete this content section?" onConfirm={handleDelete} onCancel={() => setDeleteTarget(null)} />
        </div>
    );
}
