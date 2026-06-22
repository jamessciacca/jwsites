# JWSites

Production-ready Next.js marketing website for JWSites.

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

The site runs at `http://localhost:3000`.

## Contact form setup

The contact form sends inquiries to `jsciacca03@gmail.com` through Resend.

1. Create a Resend account.
2. Verify the domain that will send email, such as `jwsites.com`.
3. Create a Resend API key.
4. Add these values to `.env.local`:

```bash
RESEND_API_KEY=re_your_api_key_here
RESEND_FROM_EMAIL=website@jwsites.com
NEXT_PUBLIC_SITE_URL=https://jwsites.com
```

Never commit `.env.local` or an API key.

## Deploying to Vercel

1. Import this project into Vercel.
2. Add `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, and
   `NEXT_PUBLIC_SITE_URL` in Project Settings → Environment Variables.
3. Deploy.
4. Submit a test inquiry through the live contact form and confirm delivery.

Vercel will use `npm run build`. The project does not require a custom build
command.
