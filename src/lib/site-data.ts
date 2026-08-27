/**
 * Single source of truth for all site content.
 * Every media file lives in /public and is referenced with an absolute path,
 * so it works identically on the preview, on Lovable hosting and on Vercel.
 */

export const img = {
  spanishVilla:
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=90",
  luxuryVilla:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=90",
  luxuryHouse:
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2400&q=90",
  courtyard:
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2400&q=90",
  modernVilla:
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2400&q=90",
  classicMansion:
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2400&q=90",
  greyClassic:
    "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=2400&q=90",
  completedVilla:
    "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=2400&q=90",
  brickFront:
    "https://images.unsplash.com/photo-1600047509782-20d39509f26d?auto=format&fit=crop&w=2400&q=90",
};

export const showreelUrl = "/video/showreel.mp4";

export const site = {
  name: "Shoaib Aluminum & Glass",
  short: "Shoaib Aluminum",
  fullName: "Shoaib Aluminum & Glass — Architectural Solutions",
  tagline: "Precision in Every Frame",
  address: "New Super Town, Lahore, Punjab, Pakistan",
  addressShort: "New Super Town, Lahore",
  email: "info@shoaibaluminumglass.com",
  phone: "0306 0221896",
  phoneTel: "+923060221896",
  facebook: "https://facebook.com",
  instagram: "https://instagram.com",
  youtube: "https://youtube.com",
  whatsapp:
    "https://wa.me/923405880689?text=Hello%20Shoaib%20Aluminum%20%26%20Glass%2C%20I%20would%20like%20to%20discuss%20a%20project.",
  hours: [
    { day: "Monday to Thursday", time: "9am to 7pm" },
    { day: "Friday", time: "9am to 12pm & 3pm to 7pm" },
    { day: "Saturday", time: "9am to 5pm" },
    { day: "Sunday", time: "By appointment" },
  ],
};

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export const stats = [
  { value: "2019", label: "Building since" },
  { value: "50+", label: "Homes designed & built" },
  { value: "3", label: "Cities served" },
];

/** Branded social posts — shown full-frame, never cropped. */
export const posts = [
  {
    image: img.modernVilla,
    title: "Modern Facade Residence",
    location: "Sialkot",
    tag: "Coming Soon",
  },
  {
    image: img.classicMansion,
    title: "Crafting Classic Beauty",
    location: "Lahore",
    tag: "In Progress",
  },
  { image: img.luxuryHouse, title: "Concept to Creation", location: "Lahore", tag: "In Progress" },
  {
    image: img.courtyard,
    title: "Classical Grand Residence",
    location: "Faisalabad",
    tag: "Coming Soon",
  },
  {
    image: img.completedVilla,
    title: "Classic Villa Handover",
    location: "Lahore",
    tag: "Completed",
  },
  {
    image: img.brickFront,
    title: "Building Dreams",
    location: "Lahore",
    tag: "Under Construction",
  },
  {
    image: img.spanishVilla,
    title: "Constructing Excellence",
    location: "Lahore",
    tag: "Under Construction",
  },
  {
    image: img.luxuryVilla,
    title: "The Reflection — Night",
    location: "Sialkot",
    tag: "Coming Soon",
  },
  {
    image: img.greyClassic,
    title: "The Reflection — Duplex",
    location: "Sialkot",
    tag: "Coming Soon",
  },
];

export const videoGallery = [
  {
    src: "/videogrally/video1.mp4",
    poster: img.luxuryVilla,
    title: "Project Showreel",
    caption: "Design to handover",
  },
  {
    src: "/videogrally/video2.mp4",
    poster: img.spanishVilla,
    title: "Spanish Villa Walkthrough",
    caption: "Elevation study",
  },
  {
    src: "/videogrally/video3.mp4",
    poster: img.luxuryHouse,
    title: "Site Progress Film",
    caption: "Grey structure",
  },
  {
    src: "/videogrally/video4.mp4",
    poster: img.courtyard,
    title: "Interior Reveal",
    caption: "Finishing stage",
  },
];

export const testimonials = [
  {
    name: "Ahmed Raza",
    role: "Homeowner · DHA Phase 6, Lahore",
    quote:
      "They handled drawings, material and labour themselves. I never had to chase three different people — the house looks exactly like the 3D they showed me.",
  },
  {
    name: "Sana Iqbal",
    role: "Homeowner · Citi Housing, Faisalabad",
    quote:
      "The elevation work is beautiful and the finishing is clean. Weekly site photos meant I always knew what was happening on my plot.",
  },
  {
    name: "Bilal Hussain",
    role: "Developer · Sialkot",
    quote:
      "Professional team, honest quantities and on-time slabs. We handed them a second duplex before the first one was even finished.",
  },
  {
    name: "Hira Nadeem",
    role: "Homeowner · Model Town, Lahore",
    quote:
      "Interiors were designed and installed by the same team that built the structure, so nothing had to be broken and redone.",
  },
  {
    name: "Usman Tariq",
    role: "Homeowner · Johar Town, Lahore",
    quote:
      "Renovation of a 20-year-old house — new facade, new layout, finished in time and within the range they quoted.",
  },
];

export const services = [
  {
    slug: "architecture",
    title: "Architecture Design",
    image: img.luxuryHouse,
    short: "2D planning, 3D elevation design and complete working drawings for your plot.",
    body: "2D planning, 3D elevation design and complete working drawings tailored to your plot size and family needs. Every drawing is developed until you approve each detail, so nothing is left to guesswork on site.",
  },
  {
    slug: "construction",
    title: "Construction",
    image: img.brickFront,
    short: "Grey structure and finishing packages with quality material and trained labour.",
    body: "Grey structure and finishing packages with quality material, trained labour and transparent site reporting. Our own supervised crews cast columns, beams and slabs strictly to the approved drawings.",
  },
  {
    slug: "interior",
    title: "Interior Design",
    image: img.greyClassic,
    short: "Living, bedroom, kitchen and ceiling design with lighting and furniture detail.",
    body: "Living, bedroom, kitchen and ceiling design with lighting layouts, furniture detail and execution — designed and installed by the same team that built your structure.",
  },
  {
    slug: "renovation",
    title: "Renovation",
    image: img.completedVilla,
    short: "Facade upgrades, layout changes and full renovation of existing spaces.",
    body: "Facade upgrades, layout changes and full renovation of existing homes and commercial spaces — re-elevated, remodelled and finished without you leaving the neighbourhood you love.",
  },
  {
    slug: "visualisation",
    title: "3D Visualisation",
    image: img.classicMansion,
    short: "Photoreal exterior and interior renders before a single brick is laid.",
    body: "Photoreal exterior and interior renders so you can see your home before a single brick is laid. Materials, lighting and landscaping are all visualised so approvals are quick and confident.",
  },
  {
    slug: "marketing",
    title: "Marketing & Media",
    image: img.spanishVilla,
    short: "Photography, reels and brand content for developers and builders.",
    body: "Photography, reels and brand content for developers and builders who want their work seen — the same media team that produces our own project films.",
  },
];

export const registrations = [
  "Lahore",
  "Faisalabad",
  "Sialkot",
  "Architecture Design",
  "Interior Design Studio",
  "Construction Company",
];

export const process = [
  {
    step: "01",
    title: "Consultation",
    body: "We discuss your plot, budget and requirements — in person or on WhatsApp.",
  },
  {
    step: "02",
    title: "Design",
    body: "Floor plans and 3D elevations are developed until you approve every detail.",
  },
  {
    step: "03",
    title: "Execution",
    body: "Grey structure and finishing delivered by our own supervised site teams.",
  },
  {
    step: "04",
    title: "Handover",
    body: "Final finishing, cleaning and a walk-through before your keys are handed over.",
  },
];

export const galleryImages = [
  img.luxuryVilla,
  img.spanishVilla,
  img.luxuryHouse,
  img.courtyard,
  img.modernVilla,
  img.classicMansion,
  img.greyClassic,
  img.completedVilla,
  img.brickFront,
];
