import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
  }

  // Log for now — swap in Resend, Nodemailer, or Formspree here
  console.log("Contact form submission:", { name, email, message });

  return NextResponse.json({ ok: true });
}
