# Aestethic Dental Kozina - Web Application

This is a full-stack web application for a dental clinic, built with **Next.js**, **TypeScript**, **Prisma**, **PostgreSQL**.
It supports image uploads via **Cloudinary**, contact form email delivery via **SMTP**, and is deployed on **Vercel**.

## Live Demo

[Aestethic Dental Kozina](https://dental-kozina.vercel.app)

---

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) with App Router
- **Language**: Typescript
- **Database (local)**: PostgreSQL with [pgAdmin 4](https://www.pgadmin.org/)
- **Database (production)**: [Neon](https://neon.tech/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Image Hosting**: [Cloudinary](https://cloudinary.com/)
- **Email Service**: [Nodemailer](https://nodemailer.com/)
- **Deployment**: [Vercel](https://vercel.com/)

---

## Features

- Dental service organized by categories
- Image uploads via Cloudinary
- Messages (contact form) stored in the database
- Admin interface for managing services and messages with login
- SEO-friendly URLs using services and category slugs
- Fully responsive and styled with **Tailwind CSS**

---

## Getting started

### 1. Clone the repo

```bash
#Unutar terminala
git clone https://github.com/bjukic2/dental_kozina.git

cd dental_kozina

npm install
```

### 2. Configure environment variables

```bash
# Copy the example environment file and fill in your own values.
cp .env.example .env.local
# Never commit .env.local - it's ignored by .gitignore.
```

### 3. Set up the database

```bash
# Generate Prisma client and push schema to the local database:
npx prisma generate
npx prisma db push
# Use PgAdmin4 or similar tool to inspect or manage your local database.
```

### 4. Run the development server

```bash
npm run dev
```

> Then open your browser at:
> https://localhost:3000

### 5. Admin Access

To access the admin dashboard, use the credentials defined in .env.local:
**ADMIN_USERNAME**
**ADMIN_PASSWORD**

---

## Deployment (Production)

The app is deployed on **Vercel**:

- The Neon database is used in production <ins>instead</ins> of local database (set its URL as DATABASE_URL in Vercel).
- All other .env.local credentials are the same and are set as Vercel Environment Variables.
- Deployment is triggered via Git push.

### Build for Production

```bash
npm run build
npm start
```

---

## Author

Made by **Bruno Jukić**
[https://github.com/bjukic2]
