/**
 * The nine symptoms listed on the client's own site, turned into a structured
 * self-check. Each carries the plain-English explanation of *why* it points at
 * the jaw joint - that explanation is the whole value of the tool, because
 * these patients have been told for years that their symptom is unrelated.
 *
 * `region` maps the symptom onto the interactive head diagram.
 * `weight` reflects how specific the symptom is to TMD (clicking/locking is
 * far more specific than neck ache), so the score means something.
 */

export type Region = 'jaw' | 'temple' | 'ear' | 'neck' | 'cheek' | 'teeth';

export interface Symptom {
  id: string;
  label: string;
  short: string;
  region: Region;
  weight: number;
  why: string;
}

export const symptoms: Symptom[] = [
  {
    id: 'jaw-pain',
    label: 'Jaw pain, tightness or soreness',
    short: 'Jaw pain',
    region: 'jaw',
    weight: 3,
    why: 'The most direct sign. The muscles that close your jaw are among the strongest in the body, and when the joint sits wrong they stay switched on all day.',
  },
  {
    id: 'clicking',
    label: 'Clicking, popping or locking when you open',
    short: 'Clicking or locking',
    region: 'jaw',
    weight: 4,
    why: 'A small disc cushions the joint. When it slips out of place and snaps back, you hear it. Locking means it is no longer making it back on its own.',
  },
  {
    id: 'headaches',
    label: 'Headaches or migraines, often at the temples',
    short: 'Headaches',
    region: 'temple',
    weight: 3,
    why: 'Your temple is a jaw muscle. Clenching loads it for hours, and it refers pain into the forehead and behind the eyes - which is why this is so often misread as tension headache.',
  },
  {
    id: 'ear',
    label: 'Ear pain, blocked ears or ringing',
    short: 'Ear symptoms',
    region: 'ear',
    weight: 3,
    why: 'The jaw joint sits directly against the ear canal. Patients are frequently treated for an ear infection that repeatedly comes back clear.',
  },
  {
    id: 'neck',
    label: 'Neck, shoulder or upper back tension',
    short: 'Neck tension',
    region: 'neck',
    weight: 2,
    why: 'Your jaw and neck share a postural chain. A jaw pulling to one side is corrected for further down, and the neck pays for it.',
  },
  {
    id: 'chewing',
    label: 'Difficulty or discomfort chewing',
    short: 'Chewing trouble',
    region: 'jaw',
    weight: 3,
    why: 'Avoiding steak, apples or a wide yawn is a coping habit, not a preference. Most patients only notice once they are asked.',
  },
  {
    id: 'facial-pain',
    label: 'Facial pain or pressure',
    short: 'Facial pain',
    region: 'cheek',
    weight: 2,
    why: 'Overloaded chewing muscles refer pain across the cheek and sinus area, which is why sinus treatment often does nothing for it.',
  },
  {
    id: 'grinding',
    label: 'Teeth grinding or clenching',
    short: 'Grinding',
    region: 'teeth',
    weight: 3,
    why: 'Clenching is the top and bottom teeth pressing together. When that pressing moves side-to-side or front-to-back, it becomes grinding - medically, bruxism.',
  },
  {
    id: 'intermittent',
    label: 'Symptoms come and go, then return',
    short: 'Comes and goes',
    region: 'jaw',
    weight: 2,
    why: 'The pattern that costs people years. Each quiet spell reads as recovery, so the underlying joint problem is never actually addressed.',
  },
];

export const maxScore = symptoms.reduce((sum, s) => sum + s.weight, 0);

/**
 * Result bands. Deliberately worded as a *screening indicator*, never a
 * diagnosis - a website cannot diagnose TMD, and saying otherwise would be
 * both wrong and a liability for the clinic.
 */
export const bands = [
  {
    min: 0,
    max: 0,
    key: 'none',
    title: 'Nothing selected yet',
    lede: 'Choose any symptom above that sounds like your experience.',
    body: '',
    cta: null,
  },
  {
    min: 1,
    max: 4,
    key: 'low',
    title: 'A few signals worth watching',
    lede: 'What you have described overlaps with TMJ Dysfunction, but it is limited.',
    body: 'Keep an eye on whether it becomes more frequent, and mention it at your next dental visit. If it starts interrupting sleep, eating or work, get it screened properly rather than waiting it out.',
    cta: 'Ask us a question',
  },
  {
    min: 5,
    max: 11,
    key: 'moderate',
    title: 'A pattern consistent with TMJ Dysfunction',
    lede: 'Several of your answers cluster around the jaw joint rather than the teeth.',
    body: 'This is the point at which a structured screening is genuinely useful. The TMJ Health Screening is a 15-minute diagnostic built to confirm or rule out TMD, so you stop guessing.',
    cta: 'Book the TMJ Health Screening',
  },
  {
    min: 12,
    max: 999,
    key: 'high',
    title: 'A strong pattern, and it deserves a specialist',
    lede: 'The combination you selected is the pattern Dr. Uy sees most often in confirmed TMD patients.',
    body: 'Symptoms this widespread rarely resolve on their own, and they are the ones most often treated in isolation - the ear, the headache, the neck - while the joint driving them goes unexamined. A screening will tell you what you are actually dealing with.',
    cta: 'Book the TMJ Health Screening',
  },
] as const;
