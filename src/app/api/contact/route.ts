import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  email: string;
  company: string;
  message: string;
};

export async function POST(req: Request) {
  const body = (await req.json()) as Partial<ContactPayload>;

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const company = String(body.company ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (name.length < 2) {
    return NextResponse.json(
      { error: "Name must be at least 2 characters." },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  if (message.length < 10) {
    return NextResponse.json(
      { error: "Message must be at least 10 characters." },
      { status: 400 }
    );
  }

  // TODO: Hook this up to your email/CRM provider (SendGrid, HubSpot, etc).
  // For now we respond success so the UI works end-to-end.
  console.log("Contact request:", { name, email, company, message });

  return NextResponse.json({ ok: true }, { status: 200 });
}

