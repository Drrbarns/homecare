import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(request: NextRequest) {
    try {
        const { staff_id } = await request.json();

        if (!staff_id || typeof staff_id !== "string" || staff_id.trim().length === 0) {
            return NextResponse.json({ error: "Staff ID is required" }, { status: 400 });
        }

        const supabase = createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
        );

        const { data, error } = await supabase
            .from("staff")
            .select("staff_id, first_name, last_name, role, department, avatar_url, status, start_date")
            .eq("staff_id", staff_id.trim().toUpperCase())
            .eq("published", true)
            .single();

        if (error || !data) {
            return NextResponse.json({ found: false }, { status: 200 });
        }

        return NextResponse.json({ found: true, staff: data }, { status: 200 });
    } catch {
        return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }
}
