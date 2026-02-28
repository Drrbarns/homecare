"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { ConfirmDialog } from "@/components/admin/ConfirmDialog";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { Plus, Pencil, Trash2, Star, Save, X } from "lucide-react";
import { toast } from "sonner";
import type { Review } from "@/types/database";

const COLOR_THEMES = ["teal", "purple", "blue", "rose", "brown", "dark-teal", "green", "orange"];

export default function ReviewsPage() {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);
    const [deleteTarget, setDeleteTarget] = useState<Review | null>(null);
    const [editing, setEditing] = useState<Review | null>(null);
    const [isNew, setIsNew] = useState(false);
    const [form, setForm] = useState({
        author_name: "", location: "", review_text: "", rating: 5,
        color_theme: "teal", featured: false, published: true,
    });

    useEffect(() => { loadReviews(); }, []);

    const loadReviews = async () => {
        const supabase = createClient();
        const { data } = await supabase.from("reviews").select("*").order("created_at", { ascending: false });
        setReviews(data ?? []);
        setLoading(false);
    };

    const startCreate = () => {
        setIsNew(true);
        setEditing(null);
        setForm({ author_name: "", location: "", review_text: "", rating: 5, color_theme: "teal", featured: false, published: true });
    };

    const startEdit = (r: Review) => {
        setEditing(r);
        setIsNew(false);
        setForm({ author_name: r.author_name, location: r.location ?? "", review_text: r.review_text, rating: r.rating, color_theme: r.color_theme, featured: r.featured, published: r.published });
    };

    const cancelEdit = () => { setEditing(null); setIsNew(false); };

    const handleSave = async () => {
        if (!form.author_name.trim() || !form.review_text.trim()) {
            toast.error("Name and review text are required");
            return;
        }
        const supabase = createClient();
        if (isNew) {
            const { error } = await supabase.from("reviews").insert(form);
            if (error) { toast.error(error.message); return; }
            toast.success("Review created");
        } else if (editing) {
            const { error } = await supabase.from("reviews").update(form).eq("id", editing.id);
            if (error) { toast.error(error.message); return; }
            toast.success("Review updated");
        }
        cancelEdit();
        loadReviews();
    };

    const handleDelete = async () => {
        if (!deleteTarget) return;
        const supabase = createClient();
        const { error } = await supabase.from("reviews").delete().eq("id", deleteTarget.id);
        if (error) toast.error("Failed to delete");
        else { toast.success("Review deleted"); loadReviews(); }
        setDeleteTarget(null);
    };

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
                    <h1 className="text-2xl font-bold text-gray-900">Reviews</h1>
                    <p className="text-gray-500 text-sm mt-1">{reviews.length} total reviews</p>
                </div>
                <button onClick={startCreate} className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#043b67] text-white text-sm font-medium rounded-lg hover:bg-[#032d50] transition-colors">
                    <Plus className="w-4 h-4" />
                    New Review
                </button>
            </div>

            {(isNew || editing) && (
                <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold text-gray-900">{isNew ? "New Review" : "Edit Review"}</h2>
                        <button onClick={cancelEdit} className="p-1.5 hover:bg-gray-100 rounded-lg"><X className="w-5 h-5 text-gray-400" /></button>
                    </div>
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Author Name</label>
                                <input type="text" value={form.author_name} onChange={(e) => setForm({ ...form, author_name: e.target.value })} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#043b67]/20 focus:border-[#043b67]" placeholder="John D." />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Location</label>
                                <input type="text" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#043b67]/20 focus:border-[#043b67]" placeholder="City, State" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Review Text</label>
                            <textarea value={form.review_text} onChange={(e) => setForm({ ...form, review_text: e.target.value })} rows={4} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#043b67]/20 focus:border-[#043b67] resize-none" placeholder="Write the review..." />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Rating</label>
                                <div className="flex gap-1">
                                    {[1, 2, 3, 4, 5].map((n) => (
                                        <button key={n} type="button" onClick={() => setForm({ ...form, rating: n })}>
                                            <Star className={`w-6 h-6 ${n <= form.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-200"}`} />
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Color Theme</label>
                                <select value={form.color_theme} onChange={(e) => setForm({ ...form, color_theme: e.target.value })} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#043b67]/20 focus:border-[#043b67]">
                                    {COLOR_THEMES.map((t) => (<option key={t} value={t}>{t}</option>))}
                                </select>
                            </div>
                            <div className="flex items-end">
                                <label className="flex items-center gap-3 cursor-pointer pb-2.5">
                                    <input type="checkbox" checked={form.featured} onChange={(e) => setForm({ ...form, featured: e.target.checked })} className="w-4 h-4 rounded border-gray-300 text-[#043b67]" />
                                    <span className="text-sm text-gray-700">Featured</span>
                                </label>
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
                                <Save className="w-4 h-4" />{isNew ? "Create Review" : "Save Changes"}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {reviews.length === 0 ? (
                    <div className="md:col-span-2 bg-white rounded-xl border border-gray-200 p-12 text-center text-gray-400">No reviews yet.</div>
                ) : (
                    reviews.map((review) => (
                        <div key={review.id} className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow">
                            <div className="flex items-start justify-between mb-3">
                                <div className="flex gap-0.5">
                                    {Array.from({ length: 5 }, (_, i) => (
                                        <Star key={i} className={`w-4 h-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-200"}`} />
                                    ))}
                                </div>
                                <div className="flex items-center gap-1">
                                    <StatusBadge status={review.published ? "published" : "draft"} />
                                    <button onClick={() => startEdit(review)} className="p-1.5 text-gray-400 hover:text-[#043b67] hover:bg-gray-100 rounded transition-colors">
                                        <Pencil className="w-4 h-4" />
                                    </button>
                                    <button onClick={() => setDeleteTarget(review)} className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors">
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                            <p className="text-sm text-gray-600 mb-3 line-clamp-3">{review.review_text}</p>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-semibold text-gray-900">{review.author_name}</p>
                                    {review.location && <p className="text-xs text-gray-400">{review.location}</p>}
                                </div>
                                {review.featured && (
                                    <span className="text-xs bg-yellow-50 text-yellow-700 px-2 py-0.5 rounded font-medium">Featured</span>
                                )}
                            </div>
                        </div>
                    ))
                )}
            </div>

            <ConfirmDialog open={!!deleteTarget} title="Delete Review" message="Are you sure you want to delete this review?" onConfirm={handleDelete} onCancel={() => setDeleteTarget(null)} />
        </div>
    );
}
