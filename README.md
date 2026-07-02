# Teacher Audit — Landing Page

The official landing page for [Teacher Audit](https://github.com/Farhan-Shaikh-25/TeacherAudit), a Flutter-based time tracking app built for teachers.

Built with **Next.js 14 (App Router)** and **Tailwind CSS**.

[Live Link](https://teacher-audit.vercel.app)

---

## Pages

- `/` — Hero section with download links
- `/about` — The backstory and why I built it
- `/features` — Key features breakdown
- `/contact` — Contact form powered by Resend

---

## Tech Stack

| | |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Email | Resend |
| Deployment | Vercel |

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/Farhan-Shaikh-25/TeacherAuditLandingPage.git

# Install dependencies
cd TeacherAuditLandingPage
npm install

# Add your environment variable
cp .env.example .env.local
# Then add your Resend API key to .env.local

# Run locally
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see it.

---

## Environment Variables

Create a `.env.local` file in the root:

```
API_KEY=your_resend_api_key_here
```

Get your API key at [resend.com](https://resend.com).

---

## Deployment

Deployed on Vercel. Any push to `main` triggers an automatic redeploy.

Make sure to add `API_KEY` in your Vercel project's environment variables before deploying.

---

## Related

- [Teacher Audit App](https://github.com/Farhan-Shaikh-25/TeacherAudit) — the actual Flutter app this landing page is for

---

## Author

**Mohammed Farhan Shaikh**
- Portfolio: [portfolio-farhan-25.vercel.app](https://portfolio-farhan-25.vercel.app)
- GitHub: [@Farhan-Shaikh-25](https://github.com/Farhan-Shaikh-25)
- LinkedIn: [mohammed-farhan-shaikh25](https://www.linkedin.com/in/mohammed-farhan-shaikh25)
