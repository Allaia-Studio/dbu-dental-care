/**
 * Single source of truth for DBU Dental Care.
 *
 * RULE: every fact in here is taken verbatim from the client's own live site
 * (dbudentalcare.com) or their verified public listings. Anything we could not
 * verify is marked `VERIFY:` and must be confirmed by Dr Uy before launch.
 */

export const site = {
  name: 'DBU Dental Care',
  legalName: 'DBU Dental Care',
  /* The old site's <title>. This is the positioning, so it stays. */
  positioning: 'Jaw Pain Specialist PH',
  tagline: 'Find Relief. Restore Comfort.',
  url: 'https://www.dbudentalcare.com',
  locale: 'en_PH',

  description:
    'TMJ and jaw pain specialists in Makati. DBU Dental Care helps patients across the Philippines diagnose and treat TMJ Dysfunction with a non-surgical TMJ Pain Management Program.',

  contact: {
    phone: '(02) 8553 57 86',
    phoneHref: 'tel:+63285535786',

    /* One mobile line, confirmed by the client, carrying calls, WhatsApp and
       Viber. Two display formats on purpose:
         mobile     - exactly as the clinic publishes it (Contact Us, footer)
         mobileIntl - international, for the floating chat/call buttons, since
                      those are the channels reached from outside PH
       Both dial the same number. */
    mobile: '(0917) 529 9649',
    mobileIntl: '+63 917 529 9649',
    mobileHref: 'tel:+639175299649',

    email: 'support@dbudentalcare.com',
    emailHref:
      'mailto:support@dbudentalcare.com' +
      '?subject=' +
      encodeURIComponent('TMJ Health Screening enquiry'),

    whatsapp: '+63 917 529 9649',
    whatsappHref:
      'https://wa.me/639175299649?text=' +
      encodeURIComponent("Hi DBU Dental Care, I'd like to ask about the TMJ Health Screening."),

    /* Viber deep link. The + must stay percent-encoded or the handoff fails. */
    viber: '+63 917 529 9649',
    viberHref: 'viber://chat?number=%2B639175299649',

    /* Verified: facebook.com/DBUDentalCare */
    facebook: 'https://www.facebook.com/DBUDentalCare/',
    messengerHref: 'https://m.me/DBUDentalCare',
  },

  /**
   * Where every "Book" button on the site points.
   *
   * Defaults to the on-site request page. To hand booking over to a real
   * system, put the full URL here and nothing else needs touching - the
   * floating buttons, header, CTAs and blog sidebar all read this value, and
   * anything starting with http opens in a new tab automatically.
   *
   *   Cal.com   https://cal.com/dbu-dental-care/tmj-screening
   *   Fresha    https://www.fresha.com/book-now/...
   *   Calendly  https://calendly.com/dbudentalcare/tmj-screening
   */
  booking: {
    url: '/book',
    label: 'Book a Screening',
  },

  address: {
    street: 'Ground Floor, 7405 M. Santillan Street',
    district: 'Pio del Pilar',
    city: 'Makati City',
    region: 'Metro Manila',
    postalCode: '1230',
    country: 'Philippines',
    countryCode: 'PH',
    full: 'Ground Floor, 7405 M. Santillan Street, Makati City, Philippines 1230',
    mapsQuery: '7405 M. Santillan Street, Pio del Pilar, Makati City, Philippines 1230',
  },

  hours: {
    display: [
      { days: 'Monday - Friday', time: '10:00 am - 7:00 pm', open: true },
      { days: 'Saturday - Sunday', time: 'Closed', open: false },
    ],
    /* schema.org openingHours */
    schema: ['Mo-Fr 10:00-19:00'],
  },

  screening: {
    name: 'TMJ Health Screening',
    price: 3800,
    priceDisplay: 'Php 3,800.00',
    duration: '15 minutes',
    durationIso: 'PT15M',
    minAge: 12,
  },

  /* Verbatim from the live site's payment section. */
  payment: {
    hmo: 'DBU Dental Care is not affiliated with any HMO or Maxicare provider.',
    installments: ['BPI', 'HSBC', 'Chinabank', 'American Express', 'Metrobank'],
    installmentNote: '0% interest installment plans available.',
  },
} as const;

export const doctor = {
  name: 'Dr. Diana Beverly Uy',
  shortName: 'Dr. Uy',
  role: 'Founder & TMJ Specialist',
  /* "DBU" = her initials. */
  initials: 'DBU',
  yearsCurating: 10,
  bio: [
    'Dr. Diana Beverly Uy understands how difficult the patient journey of a TMJ patient is. She pursued specialised studies focusing on the intersection of dentistry and medicine.',
    'Over ten years she curated a TMJ Pain Management Program that worked for her, and for many others since.',
  ],
  education: [
    { year: '2011', school: 'Centro Escolar University', place: 'Makati, Philippines' },
    { year: '2012', school: 'Metropolitan Hospital', place: 'Manila, Philippines' },
    {
      year: '2013',
      school: 'International Council for Open and Distance Education',
      place: 'Schaan, Liechtenstein',
    },
    { year: '2015', school: 'National University of Singapore', place: 'Singapore' },
  ],
  accreditations: [
    'Philippine Dental Association',
    'Professional Regulation Commission - Doctorate in Dental Medicine',
    'Certified ASEAN Invisalign Provider',
    'Asian Congress of Dental Occlusion & Oral Rehabilitation',
    'Craniodontic and Dentofacial TMJ, Airway and Dental Sleep Medicine Group',
    'Pioneer Batch, Biofunctional Study Group Philippines',
  ],
} as const;

export const team = [
  { name: 'Dr. Tseng', field: 'Dental Medicine', focus: 'Surgery' },
  { name: 'Dr. Dabbagh', field: 'Dental Medicine', focus: 'Aesthetic' },
  { name: 'Dr. Masuda', field: 'Medicine', focus: 'Anesthesiology' },
] as const;

/* The four "why DBU" pillars, verbatim from the live site. */
export const pillars = [
  {
    title: 'TMJ Specialist with Advanced Training',
    body: 'Not a general dentist who also sees jaw pain. TMJ Dysfunction is the field Dr. Uy trained for, across four institutions in three countries.',
  },
  {
    title: 'Systematic TMJ Health Screening',
    body: 'A structured 15-minute diagnostic instead of guesswork, so you leave knowing what is actually happening in your jaw.',
  },
  {
    title: 'Personalised Non-surgical Treatment Plan',
    body: 'Your plan is built around your own bite, muscles and symptom pattern. Non-surgical, and yours alone.',
  },
  {
    title: 'Proven Results',
    body: 'Hundreds of relieved patients across the Philippines who arrived with pain no one else could name.',
  },
] as const;

/* Verbatim patient quotes from the live site. These are the objections we answer. */
export const dismissals = [
  "I've seen several doctors and dentists, but no one could explain what's happening.",
  "I've tried medications, mouthguards, and therapies, but my symptoms keep returning.",
  'I was told it was stress or that I just had to live with it.',
] as const;

export const navigation = [
  { label: 'TMJ Dysfunction', href: '/tmj-dysfunction' },
  { label: 'Self-Check', href: '/tmj-self-check' },
  { label: 'The Program', href: '/tmj-pain-management-program' },
  { label: 'Dental Services', href: '/dental-services' },
  { label: 'About', href: '/about' },
  { label: 'The Jaw Talk', href: '/the-jaw-talk' },
  { label: 'Contact', href: '/contact' },
] as const;
