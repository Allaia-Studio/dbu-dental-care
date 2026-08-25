/**
 * The Jaw Talk - the clinic's existing article series.
 *
 * The six titles and the quoted passages are the client's own, taken from the
 * live site. Surrounding copy expands on them as general patient education and
 * makes no clinical claim the clinic has not already published.
 *
 * VERIFY with Dr Uy before launch: she should read these as her own voice, and
 * confirm nothing here overstates the program.
 */

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: 'TMJ Basics' | 'Symptoms' | 'Living with TMD' | 'Oral Health';
  readingMinutes: number;
  published: string;
  body: { heading?: string; paras: string[]; quote?: string; list?: string[] }[];
}

export const posts: Post[] = [
  {
    slug: 'what-is-tmj',
    title: 'What is TMJ?',
    excerpt:
      'Almost everyone with jaw pain has heard the acronym. Very few have been told what the joint actually is, or what it does all day.',
    category: 'TMJ Basics',
    readingMinutes: 3,
    published: '2026-02-10',
    body: [
      {
        paras: [
          'TMJ stands for temporomandibular joint - the "jaw joint". This joint connects your lower teeth and jaw bone to the skull.',
          'You have two of them, one on each side, sitting just in front of your ears. Put a finger there and open your mouth: the movement you feel is the joint at work.',
        ],
        quote:
          'TMJ stands for temporo mandibular joint. This joint connects your lower teeth and jaw bone to the skull.',
      },
      {
        heading: 'The busiest joint you never think about',
        paras: [
          'Your jaw joint moves every time you speak, eat, swallow, yawn or laugh - thousands of times a day, largely without your attention. Unlike a knee or an elbow, it does not simply hinge. It rotates and then slides forward, which is what lets you open wide enough to take a bite.',
          'That extra freedom of movement is exactly what makes it vulnerable. A joint that both hinges and glides depends on a small cushioning disc staying precisely where it should. When it does not, you notice.',
        ],
      },
      {
        heading: 'Why the term causes confusion',
        paras: [
          'In everyday conversation people say "I have TMJ", but strictly speaking everybody has a TMJ - two, in fact. What they mean is TMJ Dysfunction, the condition in which the joint stops working smoothly.',
          'The distinction matters more than it sounds. Searching for the joint returns anatomy. Searching for the dysfunction returns treatment.',
        ],
      },
    ],
  },
  {
    slug: 'what-is-tmj-dysfunction',
    title: 'What is TMJ Dysfunction?',
    excerpt:
      'TMD is not one problem in one place. It is a breakdown in how the teeth, the jaw bone and the facial muscles work together.',
    category: 'TMJ Basics',
    readingMinutes: 4,
    published: '2026-03-04',
    body: [
      {
        paras: [
          'TMJ Dysfunction - also known as TMD - is a medical condition where the teeth, jaw bone and facial muscles are unable to work harmoniously together.',
          'That word "harmoniously" is doing a lot of work. TMD is rarely a single broken part. It is a system in which three components that should share the load smoothly have stopped cooperating, and each one begins to compensate for the others.',
        ],
        quote:
          'TMJ Dysfunction - also known as TMD - is a medical condition where the teeth, jaw bone and facial muscles are unable to work harmoniously together.',
      },
      {
        heading: 'Why it shows up somewhere else',
        paras: [
          'This is the part that costs patients years. Because the jaw joint sits against the ear, under the temple and at the top of the neck\'s postural chain, dysfunction rarely announces itself politely at the jaw.',
          'It presents as an ear that feels blocked. A headache at the temples. A neck that will not release. Each of those symptoms gets investigated by a different specialist, in isolation, and each investigation comes back unremarkable.',
        ],
        list: [
          'The ear is examined, and the ear is fine',
          'The headache is treated as tension or stress',
          'The neck gets massage that helps for a day',
          'Nobody examines the joint sitting in the middle of all three',
        ],
      },
      {
        heading: 'What changes with a diagnosis',
        paras: [
          'Once TMD is confirmed, a scattered list of complaints resolves into one mechanism with one cause. Treatment stops being a series of separate attempts at separate symptoms.',
          'For most patients the relief of simply having a name for it arrives before the clinical relief does.',
        ],
      },
    ],
  },
  {
    slug: 'your-headache-might-not-be-from-stress',
    title: 'Your Headache Might Not Be From Stress',
    excerpt:
      'Temple headaches are routinely filed under stress. Your temple is also a jaw muscle, and it has been clenching all day.',
    category: 'Symptoms',
    readingMinutes: 4,
    published: '2026-04-15',
    body: [
      {
        paras: [
          'When the jaw is misaligned or overworked - often from clenching, grinding, or poor posture - it can radiate pain to the temples, forehead, and even behind the eyes.',
          'Press your fingers to your temples and bite down. The muscle that bulges under your fingertips is the temporalis, one of the muscles that closes your jaw. A headache located exactly there is worth a second look before it is filed under stress.',
        ],
        quote:
          'When the jaw is misaligned or overworked - often from clenching, grinding, or poor posture - it can radiate pain to the temples, forehead, and even behind the eyes.',
      },
      {
        heading: 'The pattern to look for',
        paras: [
          'Jaw-driven headaches tend to carry a signature that separates them from other headaches. Not every patient has all of it, but most recognise several points at once.',
        ],
        list: [
          'Worse in the morning, because the clenching happened overnight',
          'Concentrated at the temples rather than one side of the head',
          'Arrives alongside jaw tightness, ear fullness or neck ache',
          'Painkillers take the edge off but it returns on schedule',
          'Worse during long screen sessions or periods of concentration',
        ],
      },
      {
        heading: 'Why stress is a half-answer',
        paras: [
          'Stress is often genuinely involved - it is a common reason people clench in the first place. But naming stress as the cause stops the investigation one step too early. Stress is why the muscle is being loaded; the loading is what produces the headache.',
          'Managing stress alone leaves the mechanism running. Addressing how the jaw closes and how the muscles are being recruited is what changes the pattern.',
        ],
      },
    ],
  },
  {
    slug: 'how-tmj-dysfunction-affects-work',
    title: 'How TMJ Dysfunction Affects Work',
    excerpt:
      'Understanding sick leave and disability in jaw pain sufferers - and why TMD is under-reported at exactly the point it is costing the most.',
    category: 'Living with TMD',
    readingMinutes: 5,
    published: '2026-05-20',
    body: [
      {
        paras: [
          'Temporomandibular Dysfunction (TMD) can significantly impact a patient\'s quality of life, often leading to frequent sick leaves and in severe cases disability.',
          'TMD is easy to underestimate from the outside. There is no cast, no visible swelling, nothing that reads as injury across a meeting room. What there is, is chronic pain in the part of the body used for speaking and eating.',
        ],
        quote:
          "Temporomandibular Dysfunction (TMD) can significantly impact a patient's quality of life, often leading to frequent sick leaves and in severe cases disability.",
      },
      {
        heading: 'Where the working day is lost',
        paras: [
          'Patients rarely describe TMD as time off. They describe it as a slow tax on the day.',
        ],
        list: [
          'Concentration eroded by pain that never fully leaves',
          'Client calls and presentations that become physically tiring',
          'Meals shortened or skipped, which affects energy by mid-afternoon',
          'Broken sleep from overnight clenching, and the fatigue that follows',
          'Days lost outright when a flare-up peaks',
        ],
      },
      {
        heading: 'Why it goes unreported',
        paras: [
          'Because the condition is often undiagnosed, absence gets recorded as a headache, a migraine or general unwellness. The record shows scattered incidents rather than one persistent condition, and so nothing prompts a proper investigation.',
          'This is one of the reasons a formal diagnosis matters beyond the clinical picture. It converts a pattern of vague absences into a condition with a name and a treatment path.',
        ],
      },
    ],
  },
  {
    slug: 'teeth-grinding-vs-clenching',
    title: 'Teeth Grinding vs. Clenching',
    excerpt:
      'The two are related but not identical, and the difference decides how much damage is being done and how fast.',
    category: 'Symptoms',
    readingMinutes: 3,
    published: '2026-06-11',
    body: [
      {
        paras: [
          'The top and bottom teeth pressing on each other is called clenching. Now, when this clenching moves side-to-side or forward-backward, it results to teeth grinding or medically called as dental bruxism.',
        ],
        quote:
          'The top and bottom teeth pressing on each other is called clenching. Now, when this clenching moves side-to-side or forward-backward, it results to teeth grinding or medically called as dental bruxism.',
      },
      {
        heading: 'Clenching: pressure without movement',
        paras: [
          'Clenching is static load. The teeth hold against each other, sometimes for long stretches, often during concentration or sleep. Because nothing moves, it is quiet - which is why clenchers are usually the last to know.',
          'The damage is to the muscles and the joint rather than the enamel. Morning jaw tightness and temple headache are the usual first clues.',
        ],
      },
      {
        heading: 'Grinding: pressure with movement',
        paras: [
          'Grinding adds motion under that same pressure. Now enamel is being worn away, and the joint is being loaded through a range of movement it was never meant to carry under that force.',
          'Grinding is noisier, more likely to be reported by a partner, and visible to a dentist as flattened, chipped or increasingly sensitive teeth.',
        ],
      },
      {
        heading: 'Why the distinction changes treatment',
        paras: [
          'They are not interchangeable problems. Grinding raises the urgency of protecting the tooth surface before it is lost, while clenching directs attention to muscle load and how the bite closes.',
          'Most patients do some of both, in a mix particular to them. Establishing that mix is part of what a TMJ screening is for.',
        ],
      },
    ],
  },
  {
    slug: 'the-power-of-oral-hygiene',
    title: 'The Power of Oral Hygiene',
    excerpt:
      'Keeping bad breath at bay with regular dental visits - and why the basics still carry more weight than any product on the shelf.',
    category: 'Oral Health',
    readingMinutes: 3,
    published: '2026-07-08',
    body: [
      {
        paras: [
          'Persistent bad breath is one of the few dental complaints people try hardest to solve alone. Mouthwash, mints and gum all promise a fix, and all of them work on the smell rather than the source.',
          'In most cases the source is bacterial activity in places a toothbrush does not reach: between teeth, along the gumline, and across the back of the tongue.',
        ],
      },
      {
        heading: 'What actually moves the needle',
        paras: ['The unglamorous answers remain the effective ones.'],
        list: [
          'Cleaning between the teeth daily, where brushing genuinely cannot reach',
          'Brushing the tongue, not only the teeth',
          'Staying properly hydrated, since a dry mouth concentrates odour',
          'Professional cleaning on a regular schedule, for hardened deposits that no home routine removes',
        ],
      },
      {
        heading: 'When it is a signal rather than a nuisance',
        paras: [
          'Breath that persists despite a good routine is worth investigating rather than masking. It can point to gum disease, an untreated cavity or a failing restoration - all of which are considerably easier to treat early.',
          'A regular visit catches those while they are still small problems.',
        ],
      },
    ],
  },
];

export const postsByDate = [...posts].sort((a, b) => b.published.localeCompare(a.published));
