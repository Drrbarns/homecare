import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const body = await request.json();

    // In a real app, this would send an email or save to a database (e.g. Supabase, Salesforce)
    console.log("--------------------------------------------------");
    console.log("New Lead Submission:");
    console.log(JSON.stringify(body, null, 2));
    console.log("--------------------------------------------------");

    return NextResponse.json({ success: true, message: "Lead received successfully" });
}
