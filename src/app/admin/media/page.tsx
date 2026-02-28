"use client";

import { useEffect, useState, useRef } from "react";
import { createClient } from "@/lib/supabase/client";
import { ConfirmDialog } from "@/components/admin/ConfirmDialog";
import { Upload, Trash2, Copy, Search, ImageIcon, X } from "lucide-react";
import { toast } from "sonner";
import type { Media } from "@/types/database";

export default function MediaPage() {
    const [media, setMedia] = useState<Media[]>([]);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);
    const [deleteTarget, setDeleteTarget] = useState<Media | null>(null);
    const [search, setSearch] = useState("");
    const [previewItem, setPreviewItem] = useState<Media | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => { loadMedia(); }, []);

    const loadMedia = async () => {
        const supabase = createClient();
        const { data } = await supabase.from("media").select("*").order("uploaded_at", { ascending: false });
        setMedia(data ?? []);
        setLoading(false);
    };

    const handleUpload = async (files: FileList | null) => {
        if (!files || files.length === 0) return;
        setUploading(true);
        const supabase = createClient();

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const ext = file.name.split(".").pop();
            const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${ext}`;
            const filePath = `uploads/${fileName}`;

            const { error: uploadError } = await supabase.storage.from("media").upload(filePath, file);
            if (uploadError) {
                toast.error(`Failed to upload ${file.name}`);
                continue;
            }

            const { data } = supabase.storage.from("media").getPublicUrl(filePath);

            await supabase.from("media").insert({
                filename: file.name,
                url: data.publicUrl,
                mime_type: file.type,
                size_bytes: file.size,
            });
        }

        toast.success(`Uploaded ${files.length} file(s)`);
        setUploading(false);
        loadMedia();
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        handleUpload(e.dataTransfer.files);
    };

    const copyUrl = (url: string) => {
        navigator.clipboard.writeText(url);
        toast.success("URL copied to clipboard");
    };

    const handleDelete = async () => {
        if (!deleteTarget) return;
        const supabase = createClient();
        const { error } = await supabase.from("media").delete().eq("id", deleteTarget.id);
        if (error) toast.error("Failed to delete");
        else { toast.success("Media deleted"); loadMedia(); }
        setDeleteTarget(null);
    };

    const formatSize = (bytes: number | null) => {
        if (!bytes) return "-";
        if (bytes < 1024) return `${bytes} B`;
        if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
        return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
    };

    const filtered = search
        ? media.filter((m) => m.filename.toLowerCase().includes(search.toLowerCase()) || m.alt_text?.toLowerCase().includes(search.toLowerCase()))
        : media;

    if (loading) {
        return <div className="flex items-center justify-center h-64"><div className="w-8 h-8 border-2 border-[#043b67] border-t-transparent rounded-full animate-spin" /></div>;
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Media Library</h1>
                    <p className="text-gray-500 text-sm mt-1">{media.length} files uploaded</p>
                </div>
                <button
                    onClick={() => fileInputRef.current?.click()}
                    disabled={uploading}
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#043b67] text-white text-sm font-medium rounded-lg hover:bg-[#032d50] transition-colors disabled:opacity-50"
                >
                    <Upload className="w-4 h-4" />
                    {uploading ? "Uploading..." : "Upload Files"}
                </button>
                <input ref={fileInputRef} type="file" accept="image/*" multiple onChange={(e) => handleUpload(e.target.files)} className="hidden" />
            </div>

            <div
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
                className="border-2 border-dashed border-gray-200 rounded-xl p-6 mb-6 text-center hover:border-[#043b67]/30 transition-colors"
            >
                <ImageIcon className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                <p className="text-sm text-gray-500">Drag and drop images here to upload</p>
            </div>

            <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search media by filename..."
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#043b67]/20 focus:border-[#043b67]"
                />
            </div>

            {filtered.length === 0 ? (
                <div className="bg-white rounded-xl border border-gray-200 p-12 text-center text-gray-400">
                    {search ? "No media matching your search." : "No media uploaded yet."}
                </div>
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {filtered.map((item) => (
                        <div key={item.id} className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                            <div
                                className="aspect-square relative cursor-pointer bg-gray-50"
                                onClick={() => setPreviewItem(item)}
                            >
                                {item.mime_type?.startsWith("image/") ? (
                                    <img src={item.url} alt={item.alt_text || item.filename} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <ImageIcon className="w-10 h-10 text-gray-300" />
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                    <div className="flex gap-2">
                                        <button
                                            onClick={(e) => { e.stopPropagation(); copyUrl(item.url); }}
                                            className="p-2 bg-white rounded-lg shadow"
                                        >
                                            <Copy className="w-4 h-4 text-gray-700" />
                                        </button>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); setDeleteTarget(item); }}
                                            className="p-2 bg-white rounded-lg shadow"
                                        >
                                            <Trash2 className="w-4 h-4 text-red-600" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="p-2.5">
                                <p className="text-xs font-medium text-gray-700 truncate">{item.filename}</p>
                                <p className="text-xs text-gray-400">{formatSize(item.size_bytes)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {previewItem && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center">
                    <div className="fixed inset-0 bg-black/70" onClick={() => setPreviewItem(null)} />
                    <div className="relative z-10 max-w-3xl w-full mx-4">
                        <button onClick={() => setPreviewItem(null)} className="absolute -top-10 right-0 text-white hover:text-gray-300">
                            <X className="w-6 h-6" />
                        </button>
                        <img src={previewItem.url} alt={previewItem.alt_text || previewItem.filename} className="w-full rounded-lg" />
                        <div className="mt-3 flex items-center justify-between">
                            <p className="text-white text-sm">{previewItem.filename}</p>
                            <button
                                onClick={() => copyUrl(previewItem.url)}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 text-white rounded-lg text-xs hover:bg-white/20"
                            >
                                <Copy className="w-3.5 h-3.5" /> Copy URL
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <ConfirmDialog open={!!deleteTarget} title="Delete Media" message={`Delete "${deleteTarget?.filename}"?`} onConfirm={handleDelete} onCancel={() => setDeleteTarget(null)} />
        </div>
    );
}
