/* ============================================================
   SINGLE SOURCE OF TRUTH FOR ALL SITE COPY
   Content from the brand's own posters & brief.
   ============================================================ */

export const SITE = {
  name: "Little Elara Steps",
  category: "Inclusive Day Care & Pre School",
  // NOTE: client gave "littleelerasteps.com" (spelled 'elera'); brand is 'Elara'. Confirm + change here if needed.
  url: "https://littleelerasteps.com",
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
  // A paragraph is a string, or an array of parts where { b } is highlighted.
  paragraphs: [
    [
      "Little Elara Steps is an inclusive day care and pre school in New Ashok Nagar, East Delhi. We welcome ",
      { b: "regular children" },
      " and children with ",
      { b: "ASD, ADHD" },
      " and ",
      { b: "developmental delays" },
      " into the same caring, structured environment.",
    ],
    [
      "We believe every child grows differently, and ",
      { b: "every small step matters" },
      ". Instead of focusing only on studies, we focus on skills, communication, confidence and independence, so each child grows at their own pace.",
    ],
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

export const FOUNDERS = {
  badge: "Meet the Co-Founders",
  title: "The people behind",
  titleBold: "Little Elara Steps",
  note: "Two child-development professionals who believe every child deserves patience, structure and a place to belong.",
  people: [
    {
      name: "Sakshi",
      role: "Co-Founder & Special Educator",
      tagline: "RCI Registered Professional · M.A. Psychology · 8+ years in child development",
      photo: "/founder/sakshi.jpg",
      short:
        "Passionate child-development professional with 8+ years supporting children with diverse developmental, communication, learning and behavioural needs.",
      bio: [
        "Passionate and dedicated child development professional with 8+ years of experience supporting children with diverse developmental, communication, learning, and behavioural needs. Skilled in designing individualized intervention strategies, fostering inclusive learning environments, and empowering children to achieve greater independence and confidence.",
        "As the Co-Founder of Little Elara Steps, I am committed to creating a nurturing, inclusive, and child-centered environment where every child is encouraged to learn, grow, and reach their full potential through structured routines, activity-based learning, life skills training, and social development programs.",
      ],
      groups: [
        {
          title: "Professional Qualifications",
          items: [
            "Registered Rehabilitation Professional (RCI Registered)",
            "Diploma in Education (D.Ed. Special Education)",
            "Master's Degree (M.A. Psychology)",
            "Speech & Language Development Support",
            "Special Education & Inclusive Learning",
          ],
        },
        {
          title: "Areas of Expertise",
          items: [
            "Special Education",
            "Speech & Language Development",
            "Early Childhood Intervention",
            "Autism Spectrum Disorder (ASD) Support",
            "ADHD Support Strategies",
            "Learning Difficulties & Developmental Delays",
            "Behaviour Management",
            "Social Skills Development",
            "Parent Guidance & Counselling",
            "Individualized Education Planning (IEP)",
            "Activity-Based Learning Programs",
          ],
        },
      ],
      mission:
        "To support every child's unique developmental journey by providing evidence-based interventions, compassionate guidance, and inclusive learning opportunities that promote confidence, independence, communication, and lifelong learning.",
      quote: "Every child learns differently, and every child deserves the opportunity to succeed.",
    },
    {
      name: "Aarti Rani",
      role: "Co-Founder & Child Development Coordinator",
      tagline: "Early Childhood Care · Parent Engagement & Operations · MBA · 5+ years",
      photo: "/founder/aarti.jpg",
      short:
        "Compassionate professional with 5+ years in child development coordination, parent engagement, therapy scheduling and centre operations.",
      bio: [
        "Dedicated and compassionate professional with 5+ years of experience in child development coordination, parent engagement, therapy scheduling, and centre operations management. Experienced in working closely with children, parents, therapists, and multidisciplinary teams to ensure a supportive and child-focused environment.",
        "As the Co-Founder of Little Elara Steps – Day Care & Pre School, I am committed to building a safe, nurturing, and inclusive space where children can learn, grow, develop life skills, and gain confidence through structured routines and activity-based learning experiences.",
        "My professional journey at THERAkids has provided extensive exposure to child development services, parent counselling support, appointment coordination, team management, and operational planning, helping families access the right developmental support for their children.",
      ],
      groups: [
        {
          title: "Education",
          items: ["Bachelor of Arts (B.A.)", "Master's in Political Science", "MBA"],
        },
        {
          title: "Professional Experience",
          items: [
            "Co-Founder – Little Elara Steps Day Care & Pre School",
            "Child Development Coordinator – THERAkids Child Development Centre (5+ years)",
          ],
        },
        {
          title: "Certifications",
          items: [
            "HR Analytics Training",
            "HR Recruitment Training",
            "HR Payroll & Compliance Training",
            "HR Generalist Training",
            "Advanced Microsoft Excel Certification",
          ],
        },
        {
          title: "Core Competencies",
          items: [
            "Child Development Coordination",
            "Parent Relationship Management",
            "Early Childhood Care & Support",
            "Day Care & Preschool Operations",
            "Team Coordination & Scheduling",
            "Client & Family Communication",
            "Child-Centered Program Planning",
            "Administrative & Operational Management",
            "Data Management & Documentation",
            "Parent Guidance Support",
            "Community Outreach & Engagement",
          ],
        },
      ],
      mission:
        "To create a nurturing and inclusive environment where every child feels safe, valued, supported, and encouraged to reach their fullest potential while building strong partnerships with families and caregivers.",
      quote:
        "Every child deserves care, guidance, encouragement, and opportunities to grow with confidence.",
    },
  ],
};
