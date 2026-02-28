"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { ConfirmDialog } from "@/components/admin/ConfirmDialog";
import { Plus, Pencil, Trash2, GripVertical, ChevronDown, ChevronRight, Save, X } from "lucide-react";
import { toast } from "sonner";
import type { FAQ } from "@/types/database";

const CATEGORIES = [
    { value: "general", label: "General" },
    { value: "alzheimers", label: "Alzheimer's Care" },
    { value: "dementia", label: "Dementia Care" },
    { value: "veterans", label: "Veterans" },
    { value: "employment", label: "Employment" },
    { value: "costs", label: "Costs" },
    { value: "getting-started", label: "Getting Started" },
    { value: "services", label: "Services" },
];

export default function FAQsPage() {
    const [faqs, setFaqs] = useState<FAQ[]>([]);
    const [loading, setLoading] = useState(true);
    const [deleteTarget, setDeleteTarget] = useState<FAQ | null>(null);
    const [editingFaq, setEditingFaq] = useState<FAQ | null>(null);
    const [isNew, setIsNew] = useState(false);
    const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(["general"]));
    const [form, setForm] = useState({ question: "", answer: "", category: "general", sort_order: 0, published: true });

    useEffect(() => { loadFaqs(); }, []);

    const loadFaqs = async () => {
        const supabase = createClient();
        const { data } = await supabase.from("faqs").select("*").order("sort_order", { ascending: true });
        setFaqs(data ?? []);
        setLoading(false);
    };

    const toggleCategory = (cat: string) => {
        setExpandedCategories((prev) => {
            const next = new Set(prev);
            next.has(cat) ? next.delete(cat) : next.add(cat);
            return next;
        });
    };

    const startCreate = () => {
        setIsNew(true);
        setEditingFaq(null);
        setForm({ question: "", answer: "", category: "general", sort_order: 0, published: true });
    };

    const startEdit = (faq: FAQ) => {
        setEditingFaq(faq);
        setIsNew(false);
        setForm({ question: faq.question, answer: faq.answer, category: faq.category, sort_order: faq.sort_order, published: faq.published });
    };

    const cancelEdit = () => {
        setEditingFaq(null);
        setIsNew(false);
    };

    const handleSave = async () => {
        if (!form.question.trim() || !form.answer.trim()) {
            toast.error("Question and answer are required");
            return;
        }
        const supabase = createClient();
        if (isNew) {
            const { error } = await supabase.from("faqs").insert(form);
            if (error) { toast.error(error.message); return; }
            toast.success("FAQ created");
        } else if (editingFaq) {
            const { error } = await supabase.from("faqs").update(form).eq("id", editingFaq.id);
            if (error) { toast.error(error.message); return; }
            toast.success("FAQ updated");
        }
        cancelEdit();
        loadFaqs();
    };

    const handleDelete = async () => {
        if (!deleteTarget) return;
        const supabase = createClient();
        const { error } = await supabase.from("faqs").delete().eq("id", deleteTarget.id);
        if (error) { toast.error("Failed to delete"); } else { toast.success("FAQ deleted"); loadFaqs(); }
        setDeleteTarget(null);
    };

    const groupedFaqs = CATEGORIES.map((cat) => ({
        ...cat,
        faqs: faqs.filter((f) => f.category === cat.value),
    })).filter((group) => group.faqs.length > 0);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="w-8 h-8 border-2 border-[#043b67] border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">FAQs</h1>
                    <p className="text-gray-500 text-sm mt-1">{faqs.length} total FAQs across {groupedFaqs.length} categories</p>
                </div>
                <button
                    onClick={startCreate}
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#043b67] text-white text-sm font-medium rounded-lg hover:bg-[#032d50] transition-colors"
                >
                    <Plus className="w-4 h-4" />
                    New FAQ
                </button>
            </div>

            {(isNew || editingFaq) && (
                <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold text-gray-900">{isNew ? "New FAQ" : "Edit FAQ"}</h2>
                        <button onClick={cancelEdit} className="p-1.5 hover:bg-gray-100 rounded-lg">
                            <X className="w-5 h-5 text-gray-400" />
                        </button>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Question</label>
                            <input
                                type="text"
                                value={form.question}
                                onChange={(e) => setForm({ ...form, question: e.target.value })}
                                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#043b67]/20 focus:border-[#043b67]"
                                placeholder="Enter the question..."
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Answer</label>
                            <textarea
                                value={form.answer}
                                onChange={(e) => setForm({ ...form, answer: e.target.value })}
                                rows={4}
                                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#043b67]/20 focus:border-[#043b67] resize-none"
                                placeholder="Enter the answer..."
                            />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Category</label>
                                <select
                                    value={form.category}
                                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#043b67]/20 focus:border-[#043b67]"
                                >
                                    {CATEGORIES.map((c) => (
                                        <option key={c.value} value={c.value}>{c.label}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Sort Order</label>
                                <input
                                    type="number"
                                    value={form.sort_order}
                                    onChange={(e) => setForm({ ...form, sort_order: parseInt(e.target.value) || 0 })}
                                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#043b67]/20 focus:border-[#043b67]"
                                />
                            </div>
                            <div className="flex items-end">
                                <label className="flex items-center gap-3 cursor-pointer pb-2.5">
                                    <input
                                        type="checkbox"
                                        checked={form.published}
                                        onChange={(e) => setForm({ ...form, published: e.target.checked })}
                                        className="w-4 h-4 rounded border-gray-300 text-[#043b67] focus:ring-[#043b67]"
                                    />
                                    <span className="text-sm text-gray-700">Published</span>
                                </label>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button
                                onClick={handleSave}
                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#043b67] text-white text-sm font-medium rounded-lg hover:bg-[#032d50] transition-colors"
                            >
                                <Save className="w-4 h-4" />
                                {isNew ? "Create FAQ" : "Save Changes"}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="space-y-4">
                {groupedFaqs.length === 0 ? (
                    <div className="bg-white rounded-xl border border-gray-200 p-12 text-center text-gray-400">
                        No FAQs yet. Create your first one!
                    </div>
                ) : (
                    groupedFaqs.map((group) => (
                        <div key={group.value} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                            <button
                                onClick={() => toggleCategory(group.value)}
                                className="w-full flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition-colors"
                            >
                                <div className="flex items-center gap-3">
                                    {expandedCategories.has(group.value) ? (
                                        <ChevronDown className="w-4 h-4 text-gray-400" />
                                    ) : (
                                        <ChevronRight className="w-4 h-4 text-gray-400" />
                                    )}
                                    <h3 className="font-semibold text-gray-900">{group.label}</h3>
                                    <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{group.faqs.length}</span>
                                </div>
                            </button>
                            {expandedCategories.has(group.value) && (
                                <div className="border-t border-gray-100 divide-y divide-gray-50">
                                    {group.faqs.map((faq) => (
                                        <div key={faq.id} className="px-5 py-3 flex items-start justify-between gap-4 hover:bg-gray-50">
                                            <div className="flex items-start gap-3 min-w-0">
                                                <GripVertical className="w-4 h-4 text-gray-300 mt-0.5 shrink-0" />
                                                <div className="min-w-0">
                                                    <p className="text-sm font-medium text-gray-900">{faq.question}</p>
                                                    <p className="text-xs text-gray-400 mt-1 line-clamp-2">{faq.answer}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-1 shrink-0">
                                                <button
                                                    onClick={() => startEdit(faq)}
                                                    className="p-1.5 text-gray-400 hover:text-[#043b67] hover:bg-gray-100 rounded transition-colors"
                                                >
                                                    <Pencil className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={() => setDeleteTarget(faq)}
                                                    className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))
                )}
            </div>

            <ConfirmDialog
                open={!!deleteTarget}
                title="Delete FAQ"
                message={`Are you sure you want to delete this FAQ? This action cannot be undone.`}
                onConfirm={handleDelete}
                onCancel={() => setDeleteTarget(null)}
            />
        </div>
    );
}
