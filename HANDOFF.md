# DBU Dental Care - build notes

Rebuild of `dbudentalcare.com` (Google Sites) as an Astro 5 + Tailwind v4 static site.

**Positioning is unchanged and deliberate:** DBU is not a general dentist, it is a
**TMJ / jaw pain specialist**. The old site's title ("Jaw Pain Specialist PH"), its
tagline ("Find Relief. Restore Comfort."), and its core patient story - people who have
been dismissed by other doctors - all carry over and drive the whole structure.

## Run it

```bash
npm install && npm run dev
```

Dev server on <http://localhost:4466>. `npm run build` outputs to `dist/`.

## What's here

18 pages: home, TMJ Dysfunction (SEO pillar), TMJ self-check, the Pain Management
Program, dental services, about, The Jaw Talk (index + 6 articles), contact, booking,
privacy, terms, 404.

**The interactive piece** is the TMJ self-check (`src/components/SelfCheck.astro`). It
uses the clinic's own nine symptoms, weighted by how specific each is to TMD, and shows
where each one sits on a head diagram plus *why* it traces back to the joint. That
explanation is the point - these patients have been told for years their symptom is
unrelated. It screens, it does not diagnose, and it says so on screen.

**Contact channels** are dual-path, because in PH tap-to-chat converts harder than a
form: an expanding FAB on desktop, a fixed bottom bar on mobile (Messenger / WhatsApp /
Call / Book), plus a booking request form.

## Brand

Sampled 1:1 from the real logo, not invented:

| Token | Value | Where it came from |
| --- | --- | --- |
| Gold | `#AD9952` | exact fill of the logo wordmark |
| Oxblood | `#5B0F00` | the live site's announcement bar |
| Signal red | `#C23B22` | the pain-target rings inside the logo mark |
| Paper | `#F7F4EE` | off-white ground, never pure white |

The logo is the client's own file (`public/brand/dbu-logo.png`), pulled from the live
site - never retyped as text. Worth noticing: the "D" holds a **head in profile with a
red target on the jaw joint**. The mark already says what the clinic does, so it is
reused as a motif throughout (the pulsing rings on the CTA, the 404, the pain map) and
cropped into the favicon.

Fonts are Fraunces (display) + Inter (body). The old site's fonts were Google Sites
defaults, so they were template artifacts rather than brand CI - colours and logo are
kept exactly, typography was upgraded.

## ⚠️ Confirm with Dr Uy before launch

Nothing unverified is published anywhere on the site, but these need a yes:

1. **WhatsApp number.** `wa.me/639175299649` is derived from the clinic's published
   mobile. Confirm that line is actually on WhatsApp, or remove the channel.
   → `src/data/site.ts`, `contact.whatsapp`
2. **Booking form has no backend.** It composes a message and opens the patient's own
   mail app, which works on static hosting from day one. If she wants real online
   booking, wire Cal.com or Fresha - see the note at the top of `src/pages/book.astro`.
3. **Service descriptions.** The old Dental Services page was almost empty (services
   named only as questions). Descriptions were written from her published TMJ material
   and should be read back as her own voice. → `src/data/services.ts`
4. **The Jaw Talk articles.** The six titles and all quoted passages are hers, verbatim.
   The surrounding copy expands on them as general patient education and makes no
   clinical claim she has not already published. She should approve them.
5. **Privacy policy** is drafted against the Data Privacy Act (RA 10173) and needs her
   confirmation on retention periods and the DPO contact.
6. **Photography.** Only one real clinic photo existed (the X-ray suite) and it is used.
   No stock people were substituted for her team. Portraits, clinic interiors and any
   consented before/afters are hers to supply.

Deliberately left empty and flagged, per the no-unverified-proof rule: **no
testimonials, no patient counts, no review scores, no before/after gallery.** The old
site claims "hundreds of relieved patients" and that line is used, since it is hers.

`_client-assets/` holds a before/after photo from the old site that was **not** used -
low resolution and no evidence of patient consent for reuse.

## SEO

- `Dentist` + `MedicalBusiness` + `LocalBusiness` schema with geo, hours and area served
- `MedicalCondition` schema on the TMJ pillar page, `MedicalTherapy` on the program
- `FAQPage`, `BlogPosting`, `BreadcrumbList`, `Physician`, `Service` + `Offer`
- Every title under ~60 chars and description under ~158, so nothing truncates
- Sitemap excludes the noindex legal pages; robots.txt deliberately does **not**
  disallow them (a blocked page can never be crawled, so its noindex is never seen)
- Local signals: geo meta, `en-PH` locale, Makati / Metro Manila / Philippines areaServed

## Accessibility

WCAG 2.1 AA targeted: skip link, visible focus rings, labelled form fields with real
error messages, `aria-live` on the self-check result, `aria-current` on nav, reduced-motion
honoured throughout, and a `<noscript>` fallback so scroll-reveal content is never
invisible without JS.
