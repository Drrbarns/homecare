"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

interface StaffInfo {
    staff_id: string;
    first_name: string;
    last_name: string;
    role: string;
}

export interface QuestionnaireFormData {
    // 1. Personal Information
    full_name: string;
    phone: string;
    email: string;
    address: string;
    can_drive: string;
    has_license: string;
    willing_travel: string;
    // 2. Caregiving Experience
    years_experience: string;
    client_types: string[];
    client_types_other: string;
    difficult_patient_situation: string;
    mobility_care_explain: string;
    cleaner_fields: string;
    // 3. Cooking Ability
    comfortable_preparing_meals: string;
    meal_types: string;
    dish_1: string;
    dish_2: string;
    dish_3: string;
    special_dietary_meals: string;
    handle_new_meal_request: string;
    comfortable_assisting_feeding: string;
    // 4. Emotional Control
    how_often_upset: string;
    manage_stress: string;
    difficult_client_reaction: string;
    patient_qualities: string;
    calm_confused_person: string;
    client_refuses_medication: string;
    communicate_updates: string;
    // 5. Problem-Solving
    client_falls_bathroom: string;
    client_refuses_eat: string;
    client_aggressive: string;
    client_crying_lonely: string;
    client_asks_outside_duties: string;
    // 6. Daily Care Tasks (checkboxes)
    task_bathing: boolean;
    task_dressing: boolean;
    task_medication: boolean;
    task_meal_prep: boolean;
    task_housekeeping: boolean;
    task_laundry: boolean;
    task_mobility: boolean;
    task_companionship: boolean;
    // 7. Character and Attitude
    why_caregiver: string;
    what_makes_good: string;
    describe_personality: string;
    enjoy_most: string;
}

const initialForm: QuestionnaireFormData = {
    full_name: "",
    phone: "",
    email: "",
    address: "",
    can_drive: "",
    has_license: "",
    willing_travel: "",
    years_experience: "",
    client_types: [],
    client_types_other: "",
    difficult_patient_situation: "",
    mobility_care_explain: "",
    cleaner_fields: "",
    comfortable_preparing_meals: "",
    meal_types: "",
    dish_1: "",
    dish_2: "",
    dish_3: "",
    special_dietary_meals: "",
    handle_new_meal_request: "",
    comfortable_assisting_feeding: "",
    how_often_upset: "",
    manage_stress: "",
    difficult_client_reaction: "",
    patient_qualities: "",
    calm_confused_person: "",
    client_refuses_medication: "",
    communicate_updates: "",
    client_falls_bathroom: "",
    client_refuses_eat: "",
    client_aggressive: "",
    client_crying_lonely: "",
    client_asks_outside_duties: "",
    task_bathing: false,
    task_dressing: false,
    task_medication: false,
    task_meal_prep: false,
    task_housekeeping: false,
    task_laundry: false,
    task_mobility: false,
    task_companionship: false,
    why_caregiver: "",
    what_makes_good: "",
    describe_personality: "",
    enjoy_most: "",
};

const CLIENT_TYPE_OPTIONS = [
    "Elderly",
    "Disabled",
    "Hospital Patient support",
    "Dementia/Alzheimer's patients",
    "Children with special needs",
    "Other",
];

const DAILY_TASKS = [
    { key: "task_bathing", label: "Bathing and grooming" },
    { key: "task_dressing", label: "Dressing assistance" },
    { key: "task_medication", label: "Medication reminders" },
    { key: "task_meal_prep", label: "Meal preparation" },
    { key: "task_housekeeping", label: "Light housekeeping" },
    { key: "task_laundry", label: "Laundry" },
    { key: "task_mobility", label: "Mobility assistance" },
    { key: "task_companionship", label: "Companionship" },
] as const;

export default function QuestionnairePage() {
    const params = useParams();
    const rawSegments = params.staffId as string | string[];
    const staffId = (Array.isArray(rawSegments) ? rawSegments.map(decodeURIComponent).join("/") : decodeURIComponent(rawSegments)).toUpperCase();

    const [staffInfo, setStaffInfo] = useState<StaffInfo | null>(null);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");
    const [form, setForm] = useState<QuestionnaireFormData>(initialForm);

    useEffect(() => {
        if (!staffId) return;
        fetch("/api/staff/lookup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ staff_id: staffId }),
        })
            .then((r) => r.json())
            .then((data) => {
                if (data.found) {
                    setStaffInfo({
                        staff_id: data.staff.staff_id,
                        first_name: data.staff.first_name,
                        last_name: data.staff.last_name,
                        role: data.staff.role,
                    });
                    setForm((f) => ({
                        ...f,
                        full_name: `${data.staff.first_name} ${data.staff.last_name}`.trim(),
                    }));
                }
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [staffId]);

    const update = (updates: Partial<QuestionnaireFormData>) => setForm((f) => ({ ...f, ...updates }));

    const toggleClientType = (value: string) => {
        setForm((f) => ({
            ...f,
            client_types: f.client_types.includes(value)
                ? f.client_types.filter((t) => t !== value)
                : [...f.client_types, value],
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (!staffInfo) { setError("Staff info not loaded. Please go back and try again."); return; }
        if (!form.full_name.trim()) { setError("Full name is required."); return; }
        if (!form.email.trim()) { setError("Email address is required."); return; }

        setSubmitting(true);
        try {
            const res = await fetch("/api/staff/questionnaire", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    staff_id: staffInfo.staff_id,
                    staff_name: `${staffInfo.first_name} ${staffInfo.last_name}`,
                    form_data: form,
                }),
            });

            if (!res.ok) {
                const errData = await res.json().catch(() => null);
                setError(errData?.error || `Submission failed (${res.status}). Please try again.`);
                setSubmitting(false);
                return;
            }

            const data = await res.json();
            if (data.success) {
                setSubmitted(true);
            } else {
                setError(data.error || "Submission failed. Please try again.");
            }
        } catch {
            setError("Network error — please check your connection and try again.");
        }
        setSubmitting(false);
    };

    const inputClass = "w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-[15px] outline-none focus:border-[#043b67] transition-colors";
    const labelClass = "block text-sm font-semibold text-gray-700 mb-1.5";
    const sectionTitleClass = "text-lg font-bold text-[#043b67] border-b border-[#043b67]/20 pb-2 mb-4";

    if (loading) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-[#043b67] border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    if (!staffInfo) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center px-5">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Staff Not Found</h1>
                    <p className="text-gray-500 mb-6">We couldn&apos;t verify your staff ID. Please check and try again.</p>
                    <Link href="/workers-roster" className="inline-flex px-6 py-3 bg-[#043b67] text-white rounded-xl font-semibold text-sm hover:bg-[#032d50] transition-colors">
                        Back to Workers Roster
                    </Link>
                </div>
            </div>
        );
    }

    if (submitted) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center px-5">
                <div className="text-center max-w-[420px] animate-in">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-50 mb-6">
                        <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Thank You, {staffInfo.first_name}!</h1>
                    <p className="text-gray-500 mb-6 leading-relaxed">
                        Your interview form has been submitted successfully. Our team will review your information and get back to you.
                    </p>
                    <Link href="/workers-roster" className="inline-flex px-6 py-3 bg-[#043b67] text-white rounded-xl font-semibold text-sm hover:bg-[#032d50] transition-colors">
                        Back to Workers Roster
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#f0f7fa] to-white">
            <div className="bg-[#043b67] text-white py-10 sm:py-14 px-5">
                <div className="max-w-[720px] mx-auto text-center">
                    <h1 className="text-[24px] sm:text-[30px] font-bold mb-2 tracking-tight">
                        Home Care / Personal Support Worker Interview Form
                    </h1>
                    <p className="text-white/80 text-[14px] sm:text-[15px]">
                        Hi <span className="font-semibold text-white">{staffInfo.first_name}</span>, please complete this form so we can better match you with clients and duties.
                    </p>
                </div>
            </div>

            <div className="max-w-[720px] mx-auto px-5 -mt-6 pb-16">
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8 space-y-8">
                    <div className="bg-[#f0f7fa] rounded-xl p-4 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#043b67] flex items-center justify-center text-white font-bold text-sm shrink-0">
                            {staffInfo.first_name.charAt(0)}{staffInfo.last_name.charAt(0)}
                        </div>
                        <div>
                            <p className="font-bold text-gray-900">{staffInfo.first_name} {staffInfo.last_name}</p>
                            <p className="text-sm text-gray-500">{staffInfo.role} · {staffInfo.staff_id}</p>
                        </div>
                    </div>

                    {/* 1. Personal Information */}
                    <section>
                        <h2 className={sectionTitleClass}>1. Personal Information</h2>
                        <div className="space-y-4">
                            <div>
                                <label className={labelClass}>Full Name *</label>
                                <input type="text" value={form.full_name} onChange={(e) => update({ full_name: e.target.value })} className={inputClass} required placeholder="Full name" />
                            </div>
                            <div>
                                <label className={labelClass}>Phone Number (Optional)</label>
                                <input type="tel" value={form.phone} onChange={(e) => update({ phone: e.target.value })} className={inputClass} placeholder="Phone number" />
                            </div>
                            <div>
                                <label className={labelClass}>Email Address *</label>
                                <input type="email" value={form.email} onChange={(e) => update({ email: e.target.value })} className={inputClass} required placeholder="Email" />
                            </div>
                            <div>
                                <label className={labelClass}>Address (Optional)</label>
                                <input type="text" value={form.address} onChange={(e) => update({ address: e.target.value })} className={inputClass} placeholder="Address" />
                            </div>
                            <div>
                                <label className={labelClass}>Can you drive (car)?</label>
                                <select value={form.can_drive} onChange={(e) => update({ can_drive: e.target.value })} className={inputClass}>
                                    <option value="">Select</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                            <div>
                                <label className={labelClass}>Do you have a driver&apos;s license?</label>
                                <select value={form.has_license} onChange={(e) => update({ has_license: e.target.value })} className={inputClass}>
                                    <option value="">Select</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                            <div>
                                <label className={labelClass}>Are you willing to travel to clients&apos; homes or locations day in and out?</label>
                                <select value={form.willing_travel} onChange={(e) => update({ willing_travel: e.target.value })} className={inputClass}>
                                    <option value="">Select</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                        </div>
                    </section>

                    {/* 2. Caregiving Experience */}
                    <section>
                        <h2 className={sectionTitleClass}>2. Caregiving Experience</h2>
                        <div className="space-y-4">
                            <div>
                                <label className={labelClass}>How many years of caregiving or home care experience do you have?</label>
                                <input type="text" value={form.years_experience} onChange={(e) => update({ years_experience: e.target.value })} className={inputClass} placeholder="e.g. 3 years" />
                            </div>
                            <div>
                                <label className={labelClass}>As a Care Giver, what type of clients have you worked with before?</label>
                                <div className="space-y-2">
                                    {CLIENT_TYPE_OPTIONS.map((opt) => (
                                        <label key={opt} className="flex items-center gap-2 cursor-pointer">
                                            <input type="checkbox" checked={form.client_types.includes(opt)} onChange={() => toggleClientType(opt)} className="w-4 h-4 rounded border-gray-300 text-[#043b67] focus:ring-[#043b67]" />
                                            <span className="text-sm text-gray-700">{opt}</span>
                                        </label>
                                    ))}
                                    {form.client_types.includes("Other") && (
                                        <input type="text" value={form.client_types_other} onChange={(e) => update({ client_types_other: e.target.value })} className={inputClass + " mt-2"} placeholder="Please specify" />
                                    )}
                                </div>
                            </div>
                            <div>
                                <label className={labelClass}>Describe a situation where you had to handle a difficult patient.</label>
                                <textarea value={form.difficult_patient_situation} onChange={(e) => update({ difficult_patient_situation: e.target.value })} rows={3} className={inputClass + " resize-none"} placeholder="Describe the situation and how you handled it" />
                            </div>
                            <div>
                                <label className={labelClass}>Have you ever provided care for someone with mobility issues? Explain.</label>
                                <textarea value={form.mobility_care_explain} onChange={(e) => update({ mobility_care_explain: e.target.value })} rows={3} className={inputClass + " resize-none"} placeholder="Explain your experience" />
                            </div>
                            <div>
                                <label className={labelClass}>As a cleaner, which fields have you handled before? (e.g. Home, offices, street)</label>
                                <input type="text" value={form.cleaner_fields} onChange={(e) => update({ cleaner_fields: e.target.value })} className={inputClass} placeholder="e.g. Home, offices, street" />
                            </div>
                        </div>
                    </section>

                    {/* 3. Cooking Ability */}
                    <section>
                        <h2 className={sectionTitleClass}>3. Cooking Ability</h2>
                        <div className="space-y-4">
                            <div>
                                <label className={labelClass}>Are you comfortable preparing meals for clients?</label>
                                <select value={form.comfortable_preparing_meals} onChange={(e) => update({ comfortable_preparing_meals: e.target.value })} className={inputClass}>
                                    <option value="">Select</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                            <div>
                                <label className={labelClass}>What types of meals can you cook confidently?</label>
                                <input type="text" value={form.meal_types} onChange={(e) => update({ meal_types: e.target.value })} className={inputClass} placeholder="e.g. breakfast, lunch, dinner, snacks" />
                            </div>
                            <div>
                                <label className={labelClass}>List 3 dishes you are very good at cooking</label>
                                <div className="space-y-2">
                                    <input type="text" value={form.dish_1} onChange={(e) => update({ dish_1: e.target.value })} className={inputClass} placeholder="Dish 1" />
                                    <input type="text" value={form.dish_2} onChange={(e) => update({ dish_2: e.target.value })} className={inputClass} placeholder="Dish 2" />
                                    <input type="text" value={form.dish_3} onChange={(e) => update({ dish_3: e.target.value })} className={inputClass} placeholder="Dish 3" />
                                </div>
                            </div>
                            <div>
                                <label className={labelClass}>Can you cook special dietary meals (low salt, diabetic, soft foods, etc.)?</label>
                                <input type="text" value={form.special_dietary_meals} onChange={(e) => update({ special_dietary_meals: e.target.value })} className={inputClass} placeholder="Yes/No or describe" />
                            </div>
                            <div>
                                <label className={labelClass}>If a client requests a meal you have never cooked before, how would you handle it?</label>
                                <textarea value={form.handle_new_meal_request} onChange={(e) => update({ handle_new_meal_request: e.target.value })} rows={2} className={inputClass + " resize-none"} placeholder="Your approach" />
                            </div>
                            <div>
                                <label className={labelClass}>Are you comfortable assisting a client with feeding if needed?</label>
                                <select value={form.comfortable_assisting_feeding} onChange={(e) => update({ comfortable_assisting_feeding: e.target.value })} className={inputClass}>
                                    <option value="">Select</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                        </div>
                    </section>

                    {/* 4. Emotional Control and Temperament */}
                    <section>
                        <h2 className={sectionTitleClass}>4. Emotional Control and Temperament</h2>
                        <div className="space-y-4">
                            <div>
                                <label className={labelClass}>Caregiving can be stressful. How often do you get upset or frustrated while working?</label>
                                <select value={form.how_often_upset} onChange={(e) => update({ how_often_upset: e.target.value })} className={inputClass}>
                                    <option value="">Select</option>
                                    <option value="Rarely">Rarely</option>
                                    <option value="Sometimes">Sometimes</option>
                                    <option value="Often">Often</option>
                                </select>
                            </div>
                            <div>
                                <label className={labelClass}>When you feel stressed at work, how do you manage your emotions?</label>
                                <textarea value={form.manage_stress} onChange={(e) => update({ manage_stress: e.target.value })} rows={2} className={inputClass + " resize-none"} />
                            </div>
                            <div>
                                <label className={labelClass}>Describe a time when a patient or client was rude or difficult. How did you react?</label>
                                <textarea value={form.difficult_client_reaction} onChange={(e) => update({ difficult_client_reaction: e.target.value })} rows={3} className={inputClass + " resize-none"} />
                            </div>
                            <div>
                                <label className={labelClass}>What qualities make you patient when caring for elderly or sick people?</label>
                                <textarea value={form.patient_qualities} onChange={(e) => update({ patient_qualities: e.target.value })} rows={2} className={inputClass + " resize-none"} />
                            </div>
                            <div>
                                <label className={labelClass}>How would you calm down a confused or anxious elderly person?</label>
                                <textarea value={form.calm_confused_person} onChange={(e) => update({ calm_confused_person: e.target.value })} rows={2} className={inputClass + " resize-none"} />
                            </div>
                            <div>
                                <label className={labelClass}>If a client refuses medication or assistance, what would you do?</label>
                                <textarea value={form.client_refuses_medication} onChange={(e) => update({ client_refuses_medication: e.target.value })} rows={2} className={inputClass + " resize-none"} />
                            </div>
                            <div>
                                <label className={labelClass}>How do you communicate important updates about a client&apos;s health to the family or employer?</label>
                                <textarea value={form.communicate_updates} onChange={(e) => update({ communicate_updates: e.target.value })} rows={2} className={inputClass + " resize-none"} />
                            </div>
                        </div>
                    </section>

                    {/* 5. Problem-Solving */}
                    <section>
                        <h2 className={sectionTitleClass}>5. Problem-Solving (Briefly: What do you do if…)</h2>
                        <div className="space-y-4">
                            <div>
                                <label className={labelClass}>Client falls in the bathroom:</label>
                                <textarea value={form.client_falls_bathroom} onChange={(e) => update({ client_falls_bathroom: e.target.value })} rows={2} className={inputClass + " resize-none"} />
                            </div>
                            <div>
                                <label className={labelClass}>Client refuses to eat:</label>
                                <textarea value={form.client_refuses_eat} onChange={(e) => update({ client_refuses_eat: e.target.value })} rows={2} className={inputClass + " resize-none"} />
                            </div>
                            <div>
                                <label className={labelClass}>Client becomes aggressive:</label>
                                <textarea value={form.client_aggressive} onChange={(e) => update({ client_aggressive: e.target.value })} rows={2} className={inputClass + " resize-none"} />
                            </div>
                            <div>
                                <label className={labelClass}>Client is crying and lonely:</label>
                                <textarea value={form.client_crying_lonely} onChange={(e) => update({ client_crying_lonely: e.target.value })} rows={2} className={inputClass + " resize-none"} />
                            </div>
                            <div>
                                <label className={labelClass}>Client asks you to do something outside your duties:</label>
                                <textarea value={form.client_asks_outside_duties} onChange={(e) => update({ client_asks_outside_duties: e.target.value })} rows={2} className={inputClass + " resize-none"} />
                            </div>
                        </div>
                    </section>

                    {/* 6. Daily Care Tasks */}
                    <section>
                        <h2 className={sectionTitleClass}>6. Daily Care Tasks</h2>
                        <p className="text-sm text-gray-600 mb-3">Which of the following tasks can you perform? (Tick all that apply)</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {DAILY_TASKS.map(({ key, label }) => (
                                <label key={key} className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-gray-50">
                                    <input
                                        type="checkbox"
                                        checked={form[key]}
                                        onChange={(e) => update({ [key]: e.target.checked })}
                                        className="w-4 h-4 rounded border-gray-300 text-[#043b67] focus:ring-[#043b67]"
                                    />
                                    <span className="text-sm text-gray-700">{label}</span>
                                </label>
                            ))}
                        </div>
                    </section>

                    {/* 7. Character and Attitude */}
                    <section>
                        <h2 className={sectionTitleClass}>7. Character and Attitude</h2>
                        <div className="space-y-4">
                            <div>
                                <label className={labelClass}>Why do you want to work as a caregiver?</label>
                                <textarea value={form.why_caregiver} onChange={(e) => update({ why_caregiver: e.target.value })} rows={3} className={inputClass + " resize-none"} />
                            </div>
                            <div>
                                <label className={labelClass}>What makes you a good caregiver?</label>
                                <textarea value={form.what_makes_good} onChange={(e) => update({ what_makes_good: e.target.value })} rows={3} className={inputClass + " resize-none"} />
                            </div>
                            <div>
                                <label className={labelClass}>In few words, describe your personality.</label>
                                <input type="text" value={form.describe_personality} onChange={(e) => update({ describe_personality: e.target.value })} className={inputClass} placeholder="Brief description" />
                            </div>
                            <div>
                                <label className={labelClass}>What do you enjoy most about helping elderly or vulnerable people?</label>
                                <textarea value={form.enjoy_most} onChange={(e) => update({ enjoy_most: e.target.value })} rows={3} className={inputClass + " resize-none"} />
                            </div>
                        </div>
                    </section>

                    {error && (
                        <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-700 font-medium">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={submitting || !form.full_name.trim() || !form.email.trim()}
                        className="w-full py-3.5 bg-[#043b67] text-white rounded-xl font-bold text-[15px] hover:bg-[#032d50] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {submitting ? "Submitting..." : "Submit Interview Form"}
                    </button>
                </form>
            </div>

            <style jsx global>{`
                .animate-in { animation: animateIn 0.5s ease-out forwards; }
                @keyframes animateIn { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
            `}</style>
        </div>
    );
}
