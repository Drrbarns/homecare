"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { ConfirmDialog } from "@/components/admin/ConfirmDialog";
import { Trash2, Eye, X, ClipboardList } from "lucide-react";
import { toast } from "sonner";
import type { StaffQuestionnaire } from "@/types/database";

export default function QuestionnairesPage() {
    const [responses, setResponses] = useState<StaffQuestionnaire[]>([]);
    const [loading, setLoading] = useState(true);
    const [deleteTarget, setDeleteTarget] = useState<StaffQuestionnaire | null>(null);
    const [viewing, setViewing] = useState<StaffQuestionnaire | null>(null);

    useEffect(() => { loadResponses(); }, []);

    const loadResponses = async () => {
        const supabase = createClient();
        const { data } = await supabase
            .from("staff_questionnaires")
            .select("*")
            .order("submitted_at", { ascending: false });
        setResponses(data ?? []);
        setLoading(false);
    };

    const handleDelete = async () => {
        if (!deleteTarget) return;
        const supabase = createClient();
        const { error } = await supabase.from("staff_questionnaires").delete().eq("id", deleteTarget.id);
        if (error) toast.error("Failed to delete");
        else { toast.success("Response deleted"); loadResponses(); }
        setDeleteTarget(null);
    };

    const formatDate = (date: string) =>
        new Date(date).toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });

    if (loading) {
        return <div className="flex items-center justify-center h-64"><div className="w-8 h-8 border-2 border-[#043b67] border-t-transparent rounded-full animate-spin" /></div>;
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Staff Questionnaires</h1>
                    <p className="text-gray-500 text-sm mt-1">{responses.length} submission{responses.length !== 1 ? "s" : ""}</p>
                </div>
            </div>

            {/* Detail Modal */}
            {viewing && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setViewing(null)}>
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-[600px] max-h-[85vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 sticky top-0 bg-white rounded-t-2xl">
                            <div className="flex items-center gap-3">
                                <ClipboardList className="w-5 h-5 text-[#043b67]" />
                                <h2 className="text-lg font-bold text-gray-900">Questionnaire Details</h2>
                            </div>
                            <button onClick={() => setViewing(null)} className="p-1.5 hover:bg-gray-100 rounded-lg"><X className="w-5 h-5 text-gray-400" /></button>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="bg-[#f0f7fa] rounded-xl p-4">
                                <p className="font-bold text-gray-900 text-lg">{viewing.staff_name}</p>
                                <p className="text-sm text-gray-500">Staff ID: <span className="font-mono font-bold">{viewing.staff_id}</span></p>
                                <p className="text-xs text-gray-400 mt-1">Submitted {formatDate(viewing.submitted_at)}</p>
                            </div>

                            <DetailRow label="Availability" value={viewing.availability} />
                            <DetailRow label="Preferred Shifts" value={viewing.preferred_shifts} />
                            <DetailRow label="Transport Mode" value={viewing.transport_mode} />
                            <DetailRow label="Max Travel Distance" value={viewing.max_travel_distance} />
                            <DetailRow label="Special Skills" value={viewing.special_skills} />
                            <DetailRow label="Certifications" value={viewing.certifications} />
                            <DetailRow label="Languages" value={viewing.languages} />

                            {(viewing.emergency_contact_name || viewing.emergency_contact_phone) && (
                                <div className="border-t border-gray-100 pt-4">
                                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Emergency Contact</p>
                                    <DetailRow label="Name" value={viewing.emergency_contact_name} />
                                    <DetailRow label="Phone" value={viewing.emergency_contact_phone} />
                                </div>
                            )}

                            <DetailRow label="Health Conditions" value={viewing.health_conditions} />
                            <DetailRow label="Additional Notes" value={viewing.additional_notes} />
                        </div>
                    </div>
                </div>
            )}

            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-gray-100 bg-gray-50/50">
                                <th className="px-4 py-3 text-left font-semibold text-gray-600">Staff</th>
                                <th className="px-4 py-3 text-left font-semibold text-gray-600">Staff ID</th>
                                <th className="px-4 py-3 text-left font-semibold text-gray-600">Availability</th>
                                <th className="px-4 py-3 text-left font-semibold text-gray-600">Shifts</th>
                                <th className="px-4 py-3 text-left font-semibold text-gray-600">Submitted</th>
                                <th className="px-4 py-3 text-right font-semibold text-gray-600 w-24">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {responses.length === 0 ? (
                                <tr><td colSpan={6} className="px-4 py-12 text-center text-gray-400">No questionnaire responses yet.</td></tr>
                            ) : (
                                responses.map((r) => (
                                    <tr key={r.id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50">
                                        <td className="px-4 py-3 font-medium text-gray-900">{r.staff_name}</td>
                                        <td className="px-4 py-3 font-mono text-xs text-[#043b67] font-bold">{r.staff_id}</td>
                                        <td className="px-4 py-3 text-gray-600">{r.availability}</td>
                                        <td className="px-4 py-3 text-gray-500">{r.preferred_shifts || "—"}</td>
                                        <td className="px-4 py-3 text-gray-400 text-xs">{formatDate(r.submitted_at)}</td>
                                        <td className="px-4 py-3 text-right">
                                            <div className="flex items-center justify-end gap-1">
                                                <button onClick={() => setViewing(r)} className="p-1.5 text-gray-400 hover:text-[#043b67] hover:bg-gray-100 rounded transition-colors"><Eye className="w-4 h-4" /></button>
                                                <button onClick={() => setDeleteTarget(r)} className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors"><Trash2 className="w-4 h-4" /></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <ConfirmDialog open={!!deleteTarget} title="Delete Response" message={`Delete questionnaire from "${deleteTarget?.staff_name}"? This cannot be undone.`} onConfirm={handleDelete} onCancel={() => setDeleteTarget(null)} />
        </div>
    );
}

function DetailRow({ label, value }: { label: string; value: string | null }) {
    if (!value) return null;
    return (
        <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 py-1.5">
            <span className="text-sm text-gray-500 sm:w-40 shrink-0">{label}</span>
            <span className="text-sm font-medium text-gray-900">{value}</span>
        </div>
    );
}
