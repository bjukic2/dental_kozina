export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";
import nodemailer, { SendMailOptions } from "nodemailer";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
const ALLOWED_TYPES = ["image/jpeg", "image/png", "application/pdf"];

export async function POST(req: Request) {
  try {
    /* --------------------------------------------
       FormData
    -------------------------------------------- */
    const formData = await req.formData();

    const ime = formData.get("ime") as string;
    const email = formData.get("email") as string;
    const poruka = formData.get("poruka") as string;
    const ortopan = formData.get("ortopan") as File | null;

    // Honeypot (skriveno polje)
    const website = formData.get("website") as string | null;
    if (website) {
      return NextResponse.json({ success: true }); // bot → tiho odbaci
    }

    if (!ime || !email || !poruka) {
      return NextResponse.json(
        { success: false, message: "Nedostaju obavezna polja." },
        { status: 400 }
      );
    }

    /* --------------------------------------------
       Validacija ortopana
    -------------------------------------------- */
    if (ortopan && ortopan.size > 0) {
      if (ortopan.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          { success: false, message: "Ortopan je veći od 5 MB." },
          { status: 400 }
        );
      }

      if (!ALLOWED_TYPES.includes(ortopan.type)) {
        return NextResponse.json(
          { success: false, message: "Nedozvoljeni format ortopana." },
          { status: 400 }
        );
      }
    }

    /* --------------------------------------------
       Spremanje u bazu (bez ortopana)
    -------------------------------------------- */
    await prisma.poruka.create({
      data: { ime, email, poruka },
    });

    /* --------------------------------------------
       Nodemailer
    -------------------------------------------- */
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    /* --------------------------------------------
   Attachment (samo ordinacija)
-------------------------------------------- */
    const attachments: SendMailOptions["attachments"] = [];

    if (ortopan && ortopan.size > 0) {
      const buffer = Buffer.from(await ortopan.arrayBuffer());

      attachments.push({
        filename: ortopan.name,
        content: buffer,
        contentType: ortopan.type,
      });
    }

    /* --------------------------------------------
       Mail ordinaciji
    -------------------------------------------- */
    await transporter.sendMail({
      from: `"Kontakt forma" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: "Nova poruka s kontakt forme",
      html: `
        <h3>Nova poruka s web stranice</h3>
        <p><strong>Ime:</strong> ${ime}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Poruka:</strong></p>
        <p>${poruka.replace(/\n/g, "<br />")}</p>
        ${
          ortopan
            ? "<p><strong>📎 Ortopan je priložen.</strong></p>"
            : "<p><em>Nema priloženog ortopana.</em></p>"
        }
      `,
      attachments,
    });

    /* --------------------------------------------
       Auto-reply pacijentu (BEZ attachmenta)
    -------------------------------------------- */
    await transporter.sendMail({
      from: `"Aesthetic Dental Kozina" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Hvala na poruci!",
      text: `Poštovani ${ime},

zaprimili smo Vašu poruku:

"${poruka}"

Kontaktirat ćemo Vas u najkraćem mogućem roku.

Srdačan pozdrav,
Aesthetic Dental Kozina`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Kontakt API error:", error);
    return NextResponse.json(
      { success: false, message: "Greška na serveru." },
      { status: 500 }
    );
  }
}
