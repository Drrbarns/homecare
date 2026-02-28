"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { DataTable, type Column } from "@/components/admin/DataTable";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { ConfirmDialog } from "@/components/admin/ConfirmDialog";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";
import type { Article } from "@/types/database";

export default function ArticlesPage() {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);
    const [deleteTarget, setDeleteTarget] = useState<Article | null>(null);
    const router = useRouter();

    useEffect(() => { loadArticles(); }, []);

    const loadArticles = async () => {
        const supabase = createClient();
        const { data } = await supabase
            .from("articles")
            .select("*")
            .order("created_at", { ascending: false });
        setArticles(data ?? []);
        setLoading(false);
    };

    const handleDelete = async () => {
        if (!deleteTarget) return;
        const supabase = createClient();
        const { error } = await supabase.from("articles").delete().eq("id", deleteTarget.id);
        if (error) {
            toast.error("Failed to delete article");
        } else {
            toast.success("Article deleted");
            loadArticles();
        }
        setDeleteTarget(null);
    };

    const togglePublish = async (article: Article) => {
        const supabase = createClient();
        const { error } = await supabase
            .from("articles")
            .update({ published: !article.published })
            .eq("id", article.id);
        if (error) {
            toast.error("Failed to update");
        } else {
            toast.success(article.published ? "Unpublished" : "Published");
            loadArticles();
        }
    };

    const columns: Column<Article>[] = [
        {
            key: "title",
            label: "Title",
            sortable: true,
            render: (item) => (
                <div className="flex items-center gap-3">
                    {item.image_url && (
                        <img src={item.image_url} alt="" className="w-10 h-10 rounded-lg object-cover shrink-0" />
                    )}
                    <div>
                        <p className="font-medium text-gray-900 line-clamp-1">{item.title}</p>
                        <p className="text-xs text-gray-400 mt-0.5">/{item.slug}</p>
                    </div>
                </div>
            ),
        },
        {
            key: "category",
            label: "Category",
            sortable: true,
            render: (item) => (
                <span className="text-xs font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded">
                    {item.category}
                </span>
            ),
        },
        {
            key: "published",
            label: "Status",
            sortable: true,
            render: (item) => (
                <button onClick={(e) => { e.stopPropagation(); togglePublish(item); }}>
                    <StatusBadge status={item.published ? "published" : "draft"} />
                </button>
            ),
        },
        {
            key: "created_at",
            label: "Created",
            sortable: true,
            render: (item) => (
                <span className="text-gray-500">
                    {new Date(item.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                </span>
            ),
        },
    ];

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
                    <h1 className="text-2xl font-bold text-gray-900">Articles</h1>
                    <p className="text-gray-500 text-sm mt-1">{articles.length} total articles</p>
                </div>
                <Link
                    href="/admin/articles/new"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#043b67] text-white text-sm font-medium rounded-lg hover:bg-[#032d50] transition-colors"
                >
                    <Plus className="w-4 h-4" />
                    New Article
                </Link>
            </div>

            <DataTable
                columns={columns}
                data={articles}
                searchPlaceholder="Search articles..."
                searchKeys={["title", "category", "slug"]}
                onRowClick={(item) => router.push(`/admin/articles/${item.id}/edit`)}
                actions={(item) => (
                    <div className="flex items-center gap-1">
                        <Link
                            href={`/admin/articles/${item.id}/edit`}
                            className="p-1.5 text-gray-400 hover:text-[#043b67] hover:bg-gray-100 rounded transition-colors"
                        >
                            <Pencil className="w-4 h-4" />
                        </Link>
                        <button
                            onClick={() => setDeleteTarget(item)}
                            className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                        >
                            <Trash2 className="w-4 h-4" />
                        </button>
                    </div>
                )}
                emptyMessage="No articles yet. Create your first one!"
            />

            <ConfirmDialog
                open={!!deleteTarget}
                title="Delete Article"
                message={`Are you sure you want to delete "${deleteTarget?.title}"? This action cannot be undone.`}
                onConfirm={handleDelete}
                onCancel={() => setDeleteTarget(null)}
            />
        </div>
    );
}
