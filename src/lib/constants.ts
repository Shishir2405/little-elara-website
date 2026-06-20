/* ============================================================
   SINGLE SOURCE OF TRUTH FOR ALL SITE COPY
   Content from the brand's own posters & brief.
   ============================================================ */

export const SITE = {
  name: "Little Elara Steps",
  category: "Inclusive Day Care & Pre School",
  slogan: "Where little steps become confident journeys.",
  tagline: "Every Child Learns at Their Own Pace. Every Little Step Matters.",
  phone: "+91 93109 82342",
  phoneRaw: "919310982342",
  whatsapp: "919310982342",
  // TODO(client): confirm a contact email
  email: "littleelarasteps@gmail.com",
  address: "B-298, Plot No. 12-B, Block B, New Ashok Nagar, East Delhi, Delhi 110096",
  area: "New Ashok Nagar, East Delhi",
  // TODO(client): confirm opening hours
  hours: "Monday to Saturday, 9:00 AM to 6:00 PM",
  mapsQuery: "New Ashok Nagar, East Delhi, Delhi 110096",
  instagram: "https://www.instagram.com/littleelarasteps",
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Why Us", href: "#why" },
  { label: "Journey", href: "#journey" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  badge: "Inclusive Day Care & Pre School · New Ashok Nagar",
  titleLight: "Every child learns at their own pace.",
  titleBold: "Every little step matters.",
  subtitle:
    "A safe, happy and structured space for every child, including children who need extra developmental support. Learning through play, life skills and lots of love.",
  ctaPrimary: "Book a Visit",
  ctaSecondary: "Our Programs",
  chips: ["Safe & secure", "Inclusive", "Play-based", "Parent-focused"],
};

export const ABOUT = {
  badge: "About Us",
  title: "A warm second home where",
  titleBold: "every child belongs.",
  paragraphs: [
    "Little Elara Steps is an inclusive day care and pre school in New Ashok Nagar, East Delhi. We welcome regular children and children with ASD, ADHD and developmental delays into the same caring, structured environment.",
    "We believe every child grows differently, and every small step matters. Instead of focusing only on studies, we focus on skills, communication, confidence and independence, so each child grows at their own pace.",
    "Parents receive regular updates and progress feedback, so you always understand your child's journey with us.",
  ],
  focusTitle: "We focus on",
  focus: [
    "Skill Development",
    "Participation in Activities",
    "Communication Growth",
    "Social & Emotional Development",
    "Independence & Life Skills",
  ],
  foundersTitle: "Meet the Founders",
  foundersNote:
    "Little Elara Steps was started by educators who believe every child deserves patience, structure and a place to belong.",
  // TODO(client): replace with real founder names, roles, photos and short bios.
  founders: [
    {
      name: "Founder Name",
      role: "Founder & Lead Educator",
      bio: "A passionate early-childhood educator focused on inclusive, play-based learning and life skills for every child.",
    },
    {
      name: "Co-Founder Name",
      role: "Co-Founder & Special Educator",
      bio: "Specialized in supporting children with developmental needs through structured routines and individual care.",
    },
  ],
};

export const PROGRAMS = {
  badge: "Our Programs",
  title: "Caring programs for",
  titleBold: "every little learner",
  subtitle: "Three flexible programs, each shaped around how your child learns and grows best.",
  items: [
    {
      icon: "Sun",
      title: "Play School & Preschool",
      age: "2 to 6 years",
      desc: "A nurturing environment where children learn through play, exploration and social interaction, with age-appropriate activities that support overall development.",
      tint: "sky",
      points: ["Play-based learning", "Social interaction", "Pre-school readiness"],
    },
    {
      icon: "PuzzlePiece",
      title: "Inclusive Learning Program",
      age: "2 to 15 years",
      desc: "For children who benefit from extra developmental support. Activities are planned around each child's current abilities, learning style and developmental goals.",
      tint: "blush",
      points: ["Individualized goals", "Developmental support", "ASD, ADHD & delays"],
    },
    {
      icon: "HandHeart",
      title: "Day Care Program",
      age: "All ages",
      desc: "A safe, structured and engaging space for children through the day, building routine, confidence and independence.",
      tint: "sage",
      points: [
        "Daily routine",
        "Communication skills",
        "Social interaction",
        "Life skills",
        "Play-based learning",
        "Independence building",
      ],
    },
  ],
};

export const WHY = {
  badge: "Why Choose Us",
  title: "What makes",
  titleBold: "Little Elara Steps different",
  subtitle: "Not just lessons, but life. We care for the whole child.",
  items: [
    { icon: "UsersThree", title: "Inclusive environment", tint: "sky" },
    { icon: "Sparkle", title: "Individualized activities", tint: "blush" },
    { icon: "CalendarCheck", title: "Structured daily routine", tint: "sage" },
    { icon: "NotePencil", title: "Progress monitoring", tint: "clay" },
    { icon: "ChatsCircle", title: "Parent guidance & support", tint: "sand" },
    { icon: "PuzzlePiece", title: "Learning through play", tint: "lilac" },
  ],
};

export const JOURNEY = {
  badge: "Age-wise Learning Journey",
  title: "Every child grows",
  titleBold: "step by step",
  subtitle:
    "We follow an age-wise approach that supports each child's overall development at every important stage.",
  steps: [
    {
      age: "2 - 3 years",
      tint: "lilac",
      goals: [
        "Early communication",
        "Following simple instructions",
        "Social interaction",
        "Play & exploration",
      ],
    },
    {
      age: "3 - 4 years",
      tint: "sky",
      goals: [
        "Vocabulary building",
        "Pre-writing skills",
        "Group participation",
        "Self-help skills",
      ],
    },
    {
      age: "4 - 5 years",
      tint: "sage",
      goals: [
        "School readiness",
        "Fine motor development",
        "Attention & listening",
        "Problem solving",
      ],
    },
    {
      age: "5 - 6 years",
      tint: "clay",
      goals: [
        "Confidence building",
        "Communication skills",
        "Independence",
        "Emotional regulation",
      ],
    },
    {
      age: "6+ years",
      tint: "sand",
      goals: ["Life skills", "Social skills", "Responsibility", "Strong foundation for learning"],
    },
  ],
};

export const GALLERY = {
  badge: "A Peek Inside",
  title: "Our safe, happy",
  titleBold: "learning space",
  subtitle: "A bright, inclusive setup designed for happy learning and holistic development.",
  // Real brand photos. TODO(client): add more activity photos of children as they come.
  images: [
    {
      src: "/school-view/school-3.jpg",
      title: "Our Play Room",
      desc: "A bright, branded space made for little hands.",
      tint: "clay",
    },
    {
      src: "/school-view/school-1.jpg",
      title: "Learning Corners",
      desc: "Cozy nooks for stories, play and discovery.",
      tint: "sand",
    },
    {
      src: "/admissions/admissions-1.jpg",
      title: "Age-wise Journey",
      desc: "Goals tailored to every stage of growth.",
      tint: "sage",
    },
    {
      src: "/admissions/admissions-2.jpg",
      title: "Inclusive Care",
      desc: "A safe, happy space for every child.",
      tint: "blush",
    },
    {
      src: "/school-view/school-2.jpg",
      title: "Holistic Setup",
      desc: "Designed for happy, all-round development.",
      tint: "sky",
    },
    {
      src: "/admissions/admissions-3.jpg",
      title: "Progress Tracking",
      desc: "We focus on life skills, not just studies.",
      tint: "lilac",
    },
  ],
};

export const CONTACT = {
  badge: "Admission Enquiry",
  title: "Let's give your child a",
  titleBold: "happy little start",
  subtitle:
    "Admissions are open with limited seats. Book a no-pressure visit, meet our team and see the space for yourself.",
};

export const FOOTER = {
  blurb:
    "An inclusive day care and pre school where every child is safe, supported and celebrated. Small steps today, confident futures tomorrow.",
  madeWith: "Made with care in New Ashok Nagar, Delhi",
};
