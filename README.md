# Vonlet Security Services website

A redesign of [vonletsecurity.co.zw](https://vonletsecurity.co.zw), built with Next.js (App Router), React 19, Tailwind CSS v4 and Motion.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all pages are prerendered)
npm start
```

## Project structure

```
src/
  app/                  Routes
    page.tsx            Home
    about/              About us (mission, vision, values)
    leadership/         Directorate, executive & management
    operations-team/
    services/           Services overview + /services/[slug] detail pages
    branches/           Branch locator with live map
    gallery/            Filterable gallery with lightbox
    news/               News list + /news/[slug] articles
    contact/            Contact details + enquiry form
    api/contact/        Enquiry endpoint (sends via Resend)
  components/           Header, footer, cards, hero slider, etc.
  lib/                  All site content (edit these to update the site)
    site.ts             Company details, phones, emails, hours, values, testimonials
    services.ts         The 15 services and their categories
    team.ts             Directorate and management
    branches.ts         Branch addresses and map coordinates
    news.ts             News articles
    gallery.ts          Gallery photos
  assets/images/        Photos (imported statically, so Next.js optimises and blurs them)
```

Most content changes only need an edit in `src/lib/*`.

## Contact form email

The form posts to `/api/contact`. To deliver enquiries by email, create a [Resend](https://resend.com) account, verify the `vonletsecurity.co.zw` domain and set:

```bash
RESEND_API_KEY=re_...
CONTACT_TO_EMAIL=info@vonletsecurity.co.zw          # optional, this is the default
CONTACT_FROM_EMAIL="Vonlet Website <website@vonletsecurity.co.zw>"  # optional
```

Until `RESEND_API_KEY` is set, the form opens the visitor's email app with the enquiry pre-filled instead.

## Old URLs

`next.config.ts` permanently redirects the old WordPress URLs (e.g. `/about-us`, `/service/armed-guards`, `/our-branches`, old post slugs) to their new pages, so existing links and search results keep working.
