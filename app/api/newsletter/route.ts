import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email } = (await request.json().catch(() => ({}))) as {
    email?: string;
  };

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, message: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  // TODO: integrate with your provider (ConvertKit, Buttondown, Resend, etc).
  // For now we just log. Wire this up when you pick a newsletter provider.
  console.log(`[newsletter] subscribe: ${email}`);

  return NextResponse.json({ ok: true });
}
