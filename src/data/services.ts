/**
 * The old site named its services as patient questions ("I want to know if I
 * have TMJ Dysfunction", "My jaw clicks", ...). That framing is genuinely good
 * - it matches how people search - so we keep it and give each one a real page
 * section instead of an empty stub.
 *
 * VERIFY with Dr Uy: descriptions below are written from her published TMJ
 * material. Prices other than the screening are not published anywhere, so no
 * price is shown for them.
 */

export interface Service {
  id: string;
  question: string;
  title: string;
  summary: string;
  detail: string;
  outcomes: string[];
  price?: string;
  featured?: boolean;
}

export const services: Service[] = [
  {
    id: 'tmj-health-screening',
    question: 'I want to know if I have TMJ Dysfunction',
    title: 'TMJ Health Screening',
    summary:
      'A 15-minute structured diagnostic that tells you whether your jaw joint is the cause. For ages 12 and up.',
    detail:
      'This is the starting point for every TMJ patient at DBU. Rather than treating one symptom at a time, the screening assesses the joint, the bite and the muscle pattern together, so the answer you leave with is about the cause and not the latest flare-up.',
    outcomes: [
      'A clear yes or no on TMJ Dysfunction',
      'An explanation of which symptoms trace back to the joint',
      'The treatment options actually available to you',
    ],
    price: 'Php 3,800.00',
    featured: true,
  },
  {
    id: 'tmj-pain-management',
    question: 'I want the pain to stop coming back',
    title: 'TMJ Pain Management Program',
    summary:
      'The non-surgical program Dr. Uy spent ten years curating, built around your own bite and symptom pattern.',
    detail:
      'Personalised rather than protocol-driven. The program addresses the joint mechanics, the muscle overload and the habits that keep re-loading it, which is why it targets recurrence rather than momentary relief.',
    outcomes: [
      'A plan matched to your diagnosis',
      'Non-surgical throughout',
      'Built to hold, not just to soothe',
    ],
    featured: true,
  },
  {
    id: 'x-ray',
    question: 'I need imaging of my jaw and teeth',
    title: 'X-Ray Services',
    summary: 'On-site digital imaging, so diagnosis does not depend on sending you elsewhere.',
    detail:
      'Imaging is done in-clinic during your visit. Seeing the structure of the joint and the surrounding bone is often what finally explains a symptom that has been investigated for years.',
    outcomes: ['Taken on-site', 'Reviewed with you in the same visit'],
  },
  {
    id: 'grinding',
    question: 'My jaw clicks, or I grind my teeth',
    title: 'Clicking, Grinding & Clenching',
    summary:
      'Treatment for bruxism and joint noise - the two signs most often dismissed as harmless.',
    detail:
      'Clenching is the top and bottom teeth pressing together; when that pressing moves side-to-side or front-to-back it becomes grinding, medically known as dental bruxism. Left alone it wears enamel, overloads the joint and drives the headaches patients arrive with.',
    outcomes: ['Protects the teeth you still have', 'Reduces the load driving the pain'],
  },
  {
    id: 'alignment',
    question: 'My teeth are misaligned',
    title: 'Teeth Alignment',
    summary: 'Invisalign and alignment treatment from a Certified ASEAN Invisalign Provider.',
    detail:
      'Alignment at DBU is planned with the bite in mind, not only the look of the smile. How your teeth meet is what the jaw joint has to work around every time you close.',
    outcomes: ['Certified ASEAN Invisalign Provider', 'Planned around your bite, not just aesthetics'],
  },
  {
    id: 'replacement',
    question: 'I need a tooth replaced',
    title: 'Teeth Replacement',
    summary: 'Restoring missing teeth so the bite loads evenly again.',
    detail:
      'A missing tooth changes where the force goes when you chew. Replacing it is a bite decision as much as a cosmetic one, which is why it belongs in a practice that reads the whole jaw.',
    outcomes: ['Even loading across the bite', 'Planned alongside your jaw health'],
  },
];

export const featuredServices = services.filter((s) => s.featured);
