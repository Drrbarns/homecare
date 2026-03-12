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

                            {viewing.form_data ? (
                                <FormDataDetail formData={viewing.form_data as Record<string, unknown>} />
                            ) : (
                                <>
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
                                </>
                            )}
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

function DetailRow({ label, value }: { label: string; value: string | null | undefined }) {
    if (value == null || value === "") return null;
    if (typeof value === "boolean") return null;
    return (
        <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 py-1.5">
            <span className="text-sm text-gray-500 sm:w-40 shrink-0">{label}</span>
            <span className="text-sm font-medium text-gray-900">{String(value)}</span>
        </div>
    );
}

const FORM_DATA_LABELS: Record<string, string> = {
    full_name: "Full Name",
    phone: "Phone",
    email: "Email",
    address: "Address",
    can_drive: "Can drive (car)",
    has_license: "Driver's license",
    willing_travel: "Willing to travel to clients",
    years_experience: "Years of experience",
    client_types: "Client types",
    client_types_other: "Client types (other)",
    difficult_patient_situation: "Difficult patient situation",
    mobility_care_explain: "Mobility care experience",
    cleaner_fields: "Cleaning experience (fields)",
    comfortable_preparing_meals: "Comfortable preparing meals",
    meal_types: "Types of meals",
    dish_1: "Dish 1",
    dish_2: "Dish 2",
    dish_3: "Dish 3",
    special_dietary_meals: "Special dietary meals",
    handle_new_meal_request: "New meal request – approach",
    comfortable_assisting_feeding: "Comfortable assisting feeding",
    how_often_upset: "How often upset/frustrated",
    manage_stress: "How you manage stress",
    difficult_client_reaction: "Difficult/rude client – reaction",
    patient_qualities: "Patient qualities",
    calm_confused_person: "Calming confused/anxious person",
    client_refuses_medication: "Client refuses medication",
    communicate_updates: "Communicating updates to family",
    client_falls_bathroom: "Client falls in bathroom",
    client_refuses_eat: "Client refuses to eat",
    client_aggressive: "Client becomes aggressive",
    client_crying_lonely: "Client crying and lonely",
    client_asks_outside_duties: "Client asks outside duties",
    task_bathing: "Bathing and grooming",
    task_dressing: "Dressing assistance",
    task_medication: "Medication reminders",
    task_meal_prep: "Meal preparation",
    task_housekeeping: "Light housekeeping",
    task_laundry: "Laundry",
    task_mobility: "Mobility assistance",
    task_companionship: "Companionship",
    why_caregiver: "Why work as caregiver",
    what_makes_good: "What makes you a good caregiver",
    describe_personality: "Describe your personality",
    enjoy_most: "Enjoy most about helping",
};

function FormDataDetail({ formData }: { formData: Record<string, unknown> }) {
    const sections: { title: string; keys: string[] }[] = [
        { title: "1. Personal Information", keys: ["full_name", "phone", "email", "address", "can_drive", "has_license", "willing_travel"] },
        { title: "2. Caregiving Experience", keys: ["years_experience", "client_types", "client_types_other", "difficult_patient_situation", "mobility_care_explain", "cleaner_fields"] },
        { title: "3. Cooking Ability", keys: ["comfortable_preparing_meals", "meal_types", "dish_1", "dish_2", "dish_3", "special_dietary_meals", "handle_new_meal_request", "comfortable_assisting_feeding"] },
        { title: "4. Emotional Control", keys: ["how_often_upset", "manage_stress", "difficult_client_reaction", "patient_qualities", "calm_confused_person", "client_refuses_medication", "communicate_updates"] },
        { title: "5. Problem-Solving", keys: ["client_falls_bathroom", "client_refuses_eat", "client_aggressive", "client_crying_lonely", "client_asks_outside_duties"] },
        { title: "6. Daily Care Tasks", keys: ["task_bathing", "task_dressing", "task_medication", "task_meal_prep", "task_housekeeping", "task_laundry", "task_mobility", "task_companionship"] },
        { title: "7. Character and Attitude", keys: ["why_caregiver", "what_makes_good", "describe_personality", "enjoy_most"] },
    ];

    const formatVal = (key: string, val: unknown): string | null => {
        if (val == null) return null;
        if (typeof val === "boolean") return val ? "Yes" : "No";
        if (Array.isArray(val)) return val.join(", ");
        return String(val);
    };

    return (
        <div className="space-y-6">
                            {sections.map((sec) => (
                                <div key={sec.title}>
                                    <h3 className="text-sm font-bold text-[#043b67] border-b border-gray-100 pb-1.5 mb-2">{sec.title}</h3>
                                    <div className="space-y-1">
                                        {sec.keys.map((key) => {
                                            const val = formData[key];
                                            const display = formatVal(key, val);
                                            if (display == null || display === "") return null;
                                            return (
                                                <DetailRow key={key} label={FORM_DATA_LABELS[key] ?? key} value={display} />
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
    );
}
