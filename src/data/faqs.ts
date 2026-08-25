/**
 * Answers are drawn from the client's own published material (the Jaw Talk
 * articles, the services page and the payment section). These also feed the
 * FAQPage structured data, which is what wins the expandable result in Google
 * for "TMJ Philippines" style queries.
 */

export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  {
    q: 'What is TMJ?',
    a: 'TMJ stands for temporomandibular joint - your jaw joint. It connects your lower teeth and jaw bone to your skull, and it is the joint you use every time you speak, chew or yawn.',
  },
  {
    q: 'What is TMJ Dysfunction?',
    a: 'TMJ Dysfunction, also called TMD, is a condition where the teeth, jaw bone and facial muscles are unable to work harmoniously together. Because those structures are connected to the head, ears and neck, the symptoms often show up somewhere other than the jaw itself.',
  },
  {
    q: 'How much is the TMJ Health Screening?',
    a: 'The TMJ Health Screening is Php 3,800.00. It is a 15-minute diagnostic appointment and is available for patients aged 12 and above.',
  },
  {
    q: 'Do I need a referral to book?',
    a: 'No referral is needed. Most patients book the TMJ Health Screening directly, and many arrive after other treatments have not resolved their symptoms.',
  },
  {
    q: 'Do you accept HMO or Maxicare?',
    a: 'DBU Dental Care is not affiliated with any HMO or Maxicare provider. We do offer 0% interest installment plans through BPI, HSBC, Chinabank, American Express and Metrobank.',
  },
  {
    q: 'Is TMJ treatment at DBU surgical?',
    a: 'The TMJ Pain Management Program is non-surgical. It is a personalised plan built around your own bite, muscle pattern and diagnosis.',
  },
  {
    q: 'Can TMJ Dysfunction cause headaches?',
    a: 'Yes. When the jaw is misaligned or overworked - often from clenching, grinding or poor posture - it can radiate pain to the temples, forehead and even behind the eyes. This is why TMD headaches are so often mistaken for stress or tension headaches.',
  },
  {
    q: 'What is the difference between grinding and clenching?',
    a: 'The top and bottom teeth pressing on each other is called clenching. When that clenching moves side-to-side or forward-and-backward, it becomes teeth grinding, medically known as dental bruxism.',
  },
  {
    q: 'Where is the clinic and when are you open?',
    a: 'DBU Dental Care is on the ground floor at 7405 M. Santillan Street, Makati City, Philippines 1230. We are open Monday to Friday, 10:00 am to 7:00 pm, and closed on weekends.',
  },
  {
    q: 'I have been told my jaw pain is just stress. Is it worth being screened?',
    a: 'It is common for TMD patients to be told their symptoms are stress-related or that they simply have to live with them. A structured screening is what separates a stress-driven habit from a joint problem, and it is the only way to know which one you are dealing with.',
  },
];
