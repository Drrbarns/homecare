import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        if (!body.staff_id || !body.staff_name || !body.availability) {
            return NextResponse.json({ error: "Required fields missing" }, { status: 400 });
        }

        const supabase = createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
        );

        const { error } = await supabase.from("staff_questionnaires").insert({
            staff_id: body.staff_id,
            staff_name: body.staff_name,
            availability: body.availability,
            preferred_shifts: body.preferred_shifts || null,
            transport_mode: body.transport_mode || null,
            max_travel_distance: body.max_travel_distance || null,
            special_skills: body.special_skills || null,
            certifications: body.certifications || null,
            languages: body.languages || null,
            emergency_contact_name: body.emergency_contact_name || null,
            emergency_contact_phone: body.emergency_contact_phone || null,
            health_conditions: body.health_conditions || null,
            additional_notes: body.additional_notes || null,
        });

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ success: true }, { status: 200 });
    } catch {
        return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }
}
