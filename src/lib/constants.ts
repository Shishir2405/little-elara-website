/* ============================================================
   SINGLE SOURCE OF TRUTH FOR ALL SITE COPY
   Edit text here — components read from this file.
   ============================================================ */

export const SITE = {
  name: "Little Elara Steps",
  tagline: "Where little steps become confident journeys.",
  category: "Specialized Day Care · East Delhi",
  // TODO(client): confirm real contact details
  phone: "+91 90000 00000",
  email: "hello@littleelarasteps.com",
  address: "123 Garden Lane, East Delhi, Delhi 110092",
  hours: "Monday to Friday, 8:00 AM to 6:00 PM",
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Daily Routine", href: "#routine" },
  { label: "Progress", href: "#progress" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  badge: "Specialized Day Care · East Delhi",
  // Split so we can bold the second half, matching the reference treatment.
  titleLight: "Every child deserves care",
  titleBold: "that is kind, safe and trusted",
  subtitle:
    "A warm, structured space for every child, including children with ASD, ADHD and developmental delays. Gentle, life-skills-based care that gives parents real peace of mind.",
  ctaPrimary: "Book a visit",
  ctaSecondary: "Explore our programs",
  chips: ["Inclusive by design", "Trained special educators", "Small group sizes"],
};

export const TRUST = {
  title: "Safe hands,",
  titleBold: "caring hearts",
  subtitle: "Everything we do is built so you can feel confident leaving your child with us.",
  items: [
    {
      icon: "ShieldCheck",
      title: "Professional care you can trust",
      tint: "sand",
    },
    { icon: "GraduationCap", title: "Trained special educators", tint: "clay" },
    { icon: "HeartStraight", title: "Complete peace of mind", tint: "sage" },
    { icon: "Sparkle", title: "Inclusive, every single day", tint: "blush" },
  ],
};

export const ABOUT = {
  badge: "About Us",
  title: "Every child's path looks different.",
  titleBold: "We meet them on it.",
  paragraphs: [
    "We believe day care should adapt to the child, not the other way around. Neurotypical children and children with ASD, ADHD and developmental delays are cared for side by side, in the same warm, structured environment, each with individual attention.",
    "Your child being seen, safe and gently challenged, that is the feeling we build every day. Predictable routines help every little one settle, and especially support children who need structure to feel secure.",
    "Trained staff, a life-skills curriculum and low child-to-caregiver ratios mean progress is steady, personal and shared openly with you.",
  ],
  pillars: [
    { icon: "Heartbeat", label: "Individualized care", tint: "sand" },
    { icon: "CalendarCheck", label: "Structured routines", tint: "clay" },
    { icon: "UsersThree", label: "Inclusive environment", tint: "sage" },
    { icon: "Plant", label: "Life-skills focused", tint: "blush" },
  ],
};

export const SERVICES = {
  badge: "What We Offer",
  title: "Programs built around",
  titleBold: "how your child learns best",
  subtitle:
    "Warm early-childhood care and specialized developmental support, under one calm, caring roof.",
  items: [
    {
      icon: "Sun",
      title: "Day Care (Full & Half Day)",
      desc: "Flexible, structured care for every child in a warm, secure setting.",
      tint: "clay",
    },
    {
      icon: "PuzzlePiece",
      title: "Early Intervention & ASD Support",
      desc: "Individualized, life-skills programs for children on the autism spectrum.",
      tint: "sage",
    },
    {
      icon: "Lightning",
      title: "ADHD-Friendly Structured Care",
      desc: "Sensory-aware routines with movement breaks for children who need extra structure.",
      tint: "sand",
    },
    {
      icon: "HandHeart",
      title: "Developmental Delay Support",
      desc: "Gentle, paced support for speech, motor and social-emotional milestones.",
      tint: "blush",
    },
    {
      icon: "BookOpen",
      title: "Life-Skills & Pre-School Readiness",
      desc: "Foundational learning and independence-building activities for all children.",
      tint: "clay",
    },
    {
      icon: "ChatsCircle",
      title: "Parent Guidance & Home Carryover",
      desc: "Regular updates and simple take-home strategies so progress continues at home.",
      tint: "sage",
    },
  ],
};

export const APPROACH = {
  badge: "Our Approach",
  title: "How we",
  titleBold: "support your family",
  subtitle: "A trusted partner at every stage, offering care, comfort and confidence.",
  steps: [
    {
      no: "01",
      title: "We get to know your child",
      desc: "A relaxed first visit and conversation so we understand your child's needs, strengths and what helps them feel safe.",
      icon: "Handshake",
      tint: "sage",
    },
    {
      no: "02",
      title: "We build a gentle plan",
      desc: "Individual goals and a predictable daily routine, shaped around your child rather than a one-size-fits-all timetable.",
      icon: "ClipboardText",
      tint: "clay",
    },
    {
      no: "03",
      title: "We care, observe and adapt",
      desc: "Warm, attentive support all day, with notes on small wins and steady adjustments as your child grows.",
      icon: "Eye",
      tint: "sand",
    },
    {
      no: "04",
      title: "We grow together with you",
      desc: "Regular check-ins and home strategies, so the progress at our centre carries on at home too.",
      icon: "Plant",
      tint: "blush",
    },
  ],
};

export const ROUTINE = {
  badge: "A Day at Little Elara Steps",
  title: "Predictable. Comforting.",
  titleBold: "Built for focus.",
  subtitle:
    "A steady rhythm helps every child settle, and gives children with ADHD and ASD the structure that helps them thrive.",
  // TODO(client): confirm real timings and activities
  stops: [
    { time: "8:30 AM", label: "Warm welcome & morning circle", icon: "Sun" },
    { time: "9:15 AM", label: "Skill-building activities (small groups)", icon: "PuzzlePiece" },
    { time: "10:30 AM", label: "Snack time & sensory play", icon: "BowlFood" },
    { time: "11:30 AM", label: "Outdoor & gross-motor time", icon: "Tree" },
    { time: "12:30 PM", label: "Lunch & independence skills", icon: "ForkKnife" },
    { time: "1:30 PM", label: "Quiet rest & calm-down time", icon: "Moon" },
    { time: "2:30 PM", label: "Story time & creative expression", icon: "PaintBrush" },
    { time: "3:30 PM", label: "Wind-down & happy pickup", icon: "HandWaving" },
  ],
};

export const PROGRESS = {
  badge: "Tracking Growth, Together",
  title: "We celebrate small steps",
  titleBold: "as much as big ones",
  subtitle:
    "Progress here means individual goals and honest, regular communication, not generic test scores.",
  milestones: [
    { title: "Personalized goal setting", icon: "Target", tint: "sage" },
    { title: "Monthly progress notes", icon: "NotePencil", tint: "clay" },
    { title: "Regular parent check-ins", icon: "ChatCircleText", tint: "sand" },
    { title: "Celebrating every milestone", icon: "Confetti", tint: "blush" },
  ],
};

export const GALLERY = {
  badge: "A Peek Inside",
  title: "Where every day brings",
  titleBold: "a small joyful moment",
  subtitle: "Bright, calm rooms made for little hands and big imaginations.",
  // TODO(client): replace with real, consented photographs of the centre.
  slots: [
    { label: "Children at play", shape: "tall" },
    { label: "Art & craft corner", shape: "wide" },
    { label: "Story time", shape: "square" },
    { label: "Outdoor garden", shape: "square" },
    { label: "Sensory play", shape: "wide" },
    { label: "Building blocks", shape: "square" },
  ],
};

export const TESTIMONIALS = {
  badge: "Kind Words from Families",
  title: "Parents feel it the moment",
  titleBold: "they walk in",
  // TODO(client): replace with real, permission-given parent quotes.
  items: [
    {
      quote:
        "From the very first visit, our daughter felt safe. The team treats her with so much patience and warmth.",
      name: "Priya Mehta",
      role: "Parent of a 3-year-old",
    },
    {
      quote:
        "The structured routine made a real difference for our son. We finally feel completely confident at drop-off.",
      name: "Arjun Sharma",
      role: "Working parent",
    },
    {
      quote:
        "Friendly, professional and genuinely caring. The daily updates put my mind at ease every single day.",
      name: "Sneha Reddy",
      role: "Mother of two",
    },
  ],
};

export const CONTACT = {
  badge: "Get in Touch",
  title: "Let's talk about",
  titleBold: "what your child needs",
  subtitle:
    "Book a no-obligation visit and consultation. We would love to show you around and answer your questions.",
};

export const FOOTER = {
  blurb:
    "A safe, structured and joyful space where every child is known, supported and gently guided to their next step.",
  madeWith: "Made with care in East Delhi",
};
