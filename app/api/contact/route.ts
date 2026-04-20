import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

export async function POST(request: Request) {
  const { name, email, message } = (await request
    .json()
    .catch(() => ({}))) as ContactPayload;

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, message: "All fields are required." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, message: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  // TODO: wire up email delivery (Resend, Postmark, SES, etc).
  console.log(`[contact] from=${email} name=${name}: ${message}`);

  return NextResponse.json({ ok: true });
}
