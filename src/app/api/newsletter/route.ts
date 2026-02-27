import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const body = await request.json();

    // In a real app, this would add the email to a marketing list (e.g. Mailchimp, ConvertKit)
    console.log("--------------------------------------------------");
    console.log("New Newsletter Subscription:");
    console.log(JSON.stringify(body, null, 2));
    console.log("--------------------------------------------------");

    return NextResponse.json({ success: true, message: "Subscribed successfully" });
}
