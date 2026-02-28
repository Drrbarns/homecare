"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Save, Building2, Phone, Globe, BarChart3, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";
import type { SiteSetting } from "@/types/database";

const GROUPS = [
    { key: "brand", label: "Brand", icon: Building2, description: "Brand name, tagline, and disclaimer" },
    { key: "contact", label: "Contact Info", icon: Phone, description: "Phone, email, and address" },
    { key: "social", label: "Social Media", icon: Globe, description: "Social media profile URLs" },
    { key: "stats", label: "Statistics", icon: BarChart3, description: "Homepage statistics (years, offices, rating)" },
];

export default function SettingsPage() {
    const [settings, setSettings] = useState<SiteSetting[]>([]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [newSetting, setNewSetting] = useState({ key: "", value: "", group_name: "brand", label: "", type: "text" });
    const [showNew, setShowNew] = useState(false);

    useEffect(() => { loadSettings(); }, []);

    const loadSettings = async () => {
        const supabase = createClient();
        const { data } = await supabase.from("site_settings").select("*").order("group_name").order("key");
        setSettings(data ?? []);
        setLoading(false);
    };

    const updateValue = (id: string, value: string) => {
        setSettings((prev) => prev.map((s) => (s.id === id ? { ...s, value } : s)));
    };

    const saveAll = async () => {
        setSaving(true);
        const supabase = createClient();
        const updates = settings.map((s) =>
            supabase.from("site_settings").update({ value: s.value }).eq("id", s.id)
        );
        const results = await Promise.all(updates);
        const hasError = results.some((r) => r.error);
        if (hasError) toast.error("Some settings failed to save");
        else toast.success("Settings saved");
        setSaving(false);
    };

    const addSetting = async () => {
        if (!newSetting.key.trim()) { toast.error("Key is required"); return; }
        const supabase = createClient();
        const { error } = await supabase.from("site_settings").insert(newSetting);
        if (error) { toast.error(error.message); return; }
        toast.success("Setting added");
        setShowNew(false);
        setNewSetting({ key: "", value: "", group_name: "brand", label: "", type: "text" });
        loadSettings();
    };

    const deleteSetting = async (id: string) => {
        const supabase = createClient();
        const { error } = await supabase.from("site_settings").delete().eq("id", id);
        if (error) toast.error("Failed to delete");
        else { toast.success("Setting removed"); loadSettings(); }
    };

    if (loading) {
        return <div className="flex items-center justify-center h-64"><div className="w-8 h-8 border-2 border-[#043b67] border-t-transparent rounded-full animate-spin" /></div>;
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Site Settings</h1>
                    <p className="text-gray-500 text-sm mt-1">Manage global website configuration</p>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setShowNew(!showNew)}
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors"
                    >
                        <Plus className="w-4 h-4" />Add Setting
                    </button>
                    <button
                        onClick={saveAll}
                        disabled={saving}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#043b67] text-white text-sm font-medium rounded-lg hover:bg-[#032d50] transition-colors disabled:opacity-50"
                    >
                        <Save className="w-4 h-4" />
                        {saving ? "Saving..." : "Save All"}
                    </button>
                </div>
            </div>

            {showNew && (
                <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Add New Setting</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
                        <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1">Key</label>
                            <input type="text" value={newSetting.key} onChange={(e) => setNewSetting({ ...newSetting, key: e.target.value })} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#043b67]" placeholder="setting_key" />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1">Label</label>
                            <input type="text" value={newSetting.label} onChange={(e) => setNewSetting({ ...newSetting, label: e.target.value })} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#043b67]" placeholder="Display Label" />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1">Value</label>
                            <input type="text" value={newSetting.value} onChange={(e) => setNewSetting({ ...newSetting, value: e.target.value })} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#043b67]" />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1">Group</label>
                            <select value={newSetting.group_name} onChange={(e) => setNewSetting({ ...newSetting, group_name: e.target.value })} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#043b67]">
                                {GROUPS.map((g) => (<option key={g.key} value={g.key}>{g.label}</option>))}
                            </select>
                        </div>
                        <div className="flex items-end">
                            <button onClick={addSetting} className="w-full px-4 py-2 bg-[#043b67] text-white text-sm font-medium rounded-lg hover:bg-[#032d50]">Add</button>
                        </div>
                    </div>
                </div>
            )}

            <div className="space-y-6">
                {GROUPS.map((group) => {
                    const Icon = group.icon;
                    const groupSettings = settings.filter((s) => s.group_name === group.key);
                    return (
                        <div key={group.key} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                            <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/30 flex items-center gap-3">
                                <div className="w-9 h-9 rounded-lg bg-[#043b67]/10 flex items-center justify-center">
                                    <Icon className="w-5 h-5 text-[#043b67]" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">{group.label}</h3>
                                    <p className="text-xs text-gray-500">{group.description}</p>
                                </div>
                            </div>
                            <div className="p-6">
                                {groupSettings.length === 0 ? (
                                    <p className="text-sm text-gray-400">No settings in this group.</p>
                                ) : (
                                    <div className="space-y-4">
                                        {groupSettings.map((s) => (
                                            <div key={s.id} className="flex items-start gap-4">
                                                <div className="flex-1">
                                                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                                        {s.label || s.key}
                                                    </label>
                                                    {s.type === "textarea" ? (
                                                        <textarea
                                                            value={s.value ?? ""}
                                                            onChange={(e) => updateValue(s.id, e.target.value)}
                                                            rows={3}
                                                            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#043b67]/20 focus:border-[#043b67] resize-none"
                                                        />
                                                    ) : (
                                                        <input
                                                            type="text"
                                                            value={s.value ?? ""}
                                                            onChange={(e) => updateValue(s.id, e.target.value)}
                                                            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#043b67]/20 focus:border-[#043b67]"
                                                        />
                                                    )}
                                                    <p className="text-xs text-gray-400 mt-1">Key: {s.key}</p>
                                                </div>
                                                <button
                                                    onClick={() => deleteSetting(s.id)}
                                                    className="mt-7 p-1.5 text-gray-300 hover:text-red-500 transition-colors"
                                                    title="Delete setting"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
