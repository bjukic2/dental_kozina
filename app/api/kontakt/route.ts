import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import nodemailer from "nodemailer";

const prismaClient= new PrismaClient();

export async function POST(req: Request) {
    const { ime, email, poruka } = await req.json();

    try {
        await prismaClient.poruka.create({
            data: { ime, email, poruka },
        });
    } catch (err) {
        console.error("Greška kod spremanja u bazu:", err);
        return NextResponse.json({ success: false, message: "Greška u bazi" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_USER,
        },
    });

    try {
    await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: email,
        subject: "Hvala na poruci!",
        text: `Pozdrav ${ime}, \n\nZaprimili smo vašu poruku:\n"${poruka}"\n\nKontaktirat ćemo vas uskoro. \n\nLijep pozdrav, \nAestethic Dental Kozina`,    
    });

    return NextResponse.json({ success: true });
    } catch (err) {
        console.error("Greška kod slanja maila:", err);
        return NextResponse.json({ success: false, message: "Greška kod maila" }, { status: 500 });
    }
}