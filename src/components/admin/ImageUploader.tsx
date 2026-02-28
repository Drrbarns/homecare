"use client";

import { useState, useRef } from "react";
import { Upload, X, ImageIcon } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

interface ImageUploaderProps {
    value?: string;
    onChange: (url: string) => void;
    bucket?: string;
}

export function ImageUploader({ value, onChange, bucket = "media" }: ImageUploaderProps) {
    const [uploading, setUploading] = useState(false);
    const [dragOver, setDragOver] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const uploadFile = async (file: File) => {
        setUploading(true);
        try {
            const supabase = createClient();
            const ext = file.name.split(".").pop();
            const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${ext}`;
            const filePath = `uploads/${fileName}`;

            const { error: uploadError } = await supabase.storage
                .from(bucket)
                .upload(filePath, file);

            if (uploadError) throw uploadError;

            const { data } = supabase.storage.from(bucket).getPublicUrl(filePath);
            onChange(data.publicUrl);

            await supabase.from("media").insert({
                filename: file.name,
                url: data.publicUrl,
                mime_type: file.type,
                size_bytes: file.size,
            });
        } catch (err) {
            console.error("Upload failed:", err);
            alert("Upload failed. You can also paste an image URL directly.");
        } finally {
            setUploading(false);
        }
    };

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) uploadFile(file);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setDragOver(false);
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith("image/")) uploadFile(file);
    };

    const handleUrlPaste = () => {
        const url = window.prompt("Enter image URL:");
        if (url) onChange(url);
    };

    return (
        <div className="space-y-2">
            {value ? (
                <div className="relative group inline-block">
                    <img src={value} alt="Preview" className="w-full max-w-[300px] h-auto rounded-lg border border-gray-200" />
                    <button
                        type="button"
                        onClick={() => onChange("")}
                        className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>
            ) : (
                <div
                    onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                    onDragLeave={() => setDragOver(false)}
                    onDrop={handleDrop}
                    className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                        dragOver ? "border-[#043b67] bg-[#043b67]/5" : "border-gray-200 hover:border-gray-300"
                    }`}
                >
                    {uploading ? (
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-8 h-8 border-2 border-[#043b67] border-t-transparent rounded-full animate-spin" />
                            <p className="text-sm text-gray-500">Uploading...</p>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                                <ImageIcon className="w-6 h-6 text-gray-400" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Drag and drop an image, or</p>
                                <div className="flex items-center gap-2 mt-2 justify-center">
                                    <button
                                        type="button"
                                        onClick={() => fileInputRef.current?.click()}
                                        className="text-sm font-medium text-[#043b67] hover:underline"
                                    >
                                        <Upload className="w-3.5 h-3.5 inline mr-1" />
                                        Upload file
                                    </button>
                                    <span className="text-gray-300">|</span>
                                    <button
                                        type="button"
                                        onClick={handleUrlPaste}
                                        className="text-sm font-medium text-[#043b67] hover:underline"
                                    >
                                        Paste URL
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
            <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
            />
        </div>
    );
}
