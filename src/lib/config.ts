/**
 * Home Service Template — Site Configuration
 *
 * Change these values to "remix" the site for any home service business.
 * Everything downstream reads from this file.
 */

export const siteConfig = {
  // ── Business Identity ──────────────────────────────────────────
  businessName: "Peak Home Services",
  tagline: "Reliable home services you can trust.",
  phone: "(555) 123-4567",
  phoneRaw: "15551234567",          // E.164 for Hermes
  email: "hello@peakhomeservices.com",
  address: "742 Evergreen Terrace, Springfield, IL 62704",
  // Google Maps embed URL — set per client
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3094.6!2d-89.65!3d39.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDQ2JzQ4LjAiTiA4OcKwMzknMDAuMCJX!5e0!3m2!1sen!2sus!4v1",

  // ── Geography ───────────────────────────────────────────────────
  city: "Springfield",
  state: "IL",
  serviceAreaNote: "Serving Springfield and surrounding 30-mile area.",

  // ── Hero ────────────────────────────────────────────────────────
  heroTitle: "Your Home Deserves the Best",
  heroSubtitle:
    "Licensed, insured, and committed to getting the job done right the first time. Free estimates available.",
  heroCta: "Get a Free Estimate",
  heroImageAlt: "Professional home service technician at work",
  heroImageUrl: "https://images.unsplash.com/photo-1621905252507-b3545d2a4c22?w=1920&q=80&auto=format&fit=crop",

  // ── About / Why Choose Us ──────────────────────────────────────
  aboutHeadline: "Why Homeowners Trust Us",
  aboutPoints: [
    {
      icon: "ShieldCheck",
      title: "Licensed & Insured",
      description: "Full licensing and comprehensive insurance coverage — your home is in safe hands.",
    },
    {
      icon: "Clock",
      title: "On-Time Guarantee",
      description: "We respect your schedule. If we're late, you'll know why and when we'll arrive. Period.",
    },
    {
      icon: "DollarSign",
      title: "Transparent Pricing",
      description: "Detailed quotes before we start. No surprise charges, no hidden fees, ever.",
    },
  ],

  // ── Services ───────────────────────────────────────────────────
  services: [
    {
      icon: "Wrench",
      title: "Repairs & Maintenance",
      description:
        "Fast, reliable repairs that fix the root cause — not just the symptom.",
      backgroundImage: "https://images.unsplash.com/photo-1581578731548-c64695cc9a90?w=600&q=80&auto=format&fit=crop",
      features: ["Same-day service available", "1-year labor warranty", "Free diagnostic with repair"],
    },
    {
      icon: "ShieldCheck",
      title: "Inspections & Diagnostics",
      description:
        "Thorough inspections to catch problems early and give you honest recommendations.",
      backgroundImage: "https://images.unsplash.com/photo-1504307651254-35680f354e3c?w=600&q=80&auto=format&fit=crop",
      features: ["Detailed written report", "Photo documentation", "Priority scheduling"],
    },
    {
      icon: "Hammer",
      title: "Installation & Replacement",
      description:
        "Professional installation built to last, with materials and workmanship guaranteed.",
      backgroundImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80&auto=format&fit=crop",
      features: ["Premium-grade materials", "Manufacturer warranty", "Permit handling included"],
    },
    {
      icon: "Zap",
      title: "Emergency Service",
      description:
        "When something goes wrong after hours, we're available to help — fast.",
      backgroundImage: "https://images.unsplash.com/photo-1585771724684-1892e2d6a4b6?w=600&q=80&auto=format&fit=crop",
      features: ["24/7 availability", "1-hour response time", "No overtime charges"],
    },
    {
      icon: "DollarSign",
      title: "Free Estimates",
      description:
        "Every estimate is free, transparent, and no-pressure. Know your options before you commit.",
      backgroundImage: "https://images.unsplash.com/photo-1554224155-67204b0227d6?w=600&q=80&auto=format&fit=crop",
      features: ["No-obligation quote", "Price-match guarantee", "Financing available"],
    },
    {
      icon: "Award",
      title: "Licensed & Insured",
      description:
        "Fully licensed, bonded, and insured for your protection and peace of mind.",
      backgroundImage: "https://images.unsplash.com/photo-1454165804609-c3daddbcbee3?w=600&q=80&auto=format&fit=crop",
      features: ["General liability insured", "Workers comp coverage", "Bonded & background checked"],
    },
  ],

  // ── Pricing Tiers ───────────────────────────────────────────────
  pricingTiers: [
    {
      name: "Basic",
      price: "99",
      description: "Diagnostic & minor repair",
      features: [
        "Full diagnostic inspection",
        "Minor repair included",
        "Written report & recommendations",
        "30-day labor warranty",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Standard",
      price: "249",
      description: "Repair + preventive maintenance",
      features: [
        "Everything in Basic",
        "Preventive maintenance tune-up",
        "Priority scheduling",
        "1-year labor warranty",
        "10% off future services",
      ],
      cta: "Most Popular",
      highlighted: true,
    },
    {
      name: "Premium",
      price: "499",
      description: "Full service + ongoing support",
      features: [
        "Everything in Standard",
        "Annual maintenance plan",
        "Emergency priority (skip queue)",
        "Lifetime parts warranty",
        "Dedicated service coordinator",
      ],
      cta: "Go Premium",
      highlighted: false,
    },
  ],

  // ── Reviews ─────────────────────────────────────────────────────
  reviews: [
    {
      name: "Sarah M.",
      location: "Springfield",
      rating: 5,
      text: "They showed up on time, explained everything clearly, and did quality work. Would absolutely call them again.",
      avatar: "SM",
    },
    {
      name: "James T.",
      location: "Oak Park",
      rating: 5,
      text: "Honest pricing and no upsell pressure. They fixed what needed fixing and told me what could wait. That's rare.",
      avatar: "JT",
    },
    {
      name: "Linda R.",
      location: "Decatur",
      rating: 5,
      text: "After getting three quotes, these guys were the most straightforward. Quality work, fair price, done on schedule.",
      avatar: "LR",
    },
    {
      name: "Marcus P.",
      location: "Chatham",
      rating: 4,
      text: "Had an emergency on a Saturday morning and they had someone out within the hour. Can't recommend them enough.",
      avatar: "MP",
    },
    {
      name: "Denise K.",
      location: "Springfield",
      rating: 5,
      text: "Clean, professional, respectful of our home. They put down drop cloths, cleaned up after, and the result looks great.",
      avatar: "DK",
    },
    {
      name: "Tom B.",
      location: "Sherman",
      rating: 5,
      text: "Second time using them and they're consistent. Same quality, same professionalism. They've earned a repeat customer.",
      avatar: "TB",
    },
  ],

  // ── Google Review Aggregate ─────────────────────────────────────
  googleReviewAvg: 4.9,
  googleReviewCount: 187,

  // ── Gallery / Slideshow ─────────────────────────────────────────
  galleryImages: [
    {
      src: "https://images.unsplash.com/photo-1621905252507-b3545d2a4c22?w=800&q=80&auto=format&fit=crop",
      alt: "Technician inspecting home system",
    },
    {
      src: "https://images.unsplash.com/photo-1581578731548-c64695cc9a90?w=800&q=80&auto=format&fit=crop",
      alt: "Kitchen renovation in progress",
    },
    {
      src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80&auto=format&fit=crop",
      alt: "Professional installation work",
    },
    {
      src: "https://images.unsplash.com/photo-1504307651254-35680f354e3c?w=800&q=80&auto=format&fit=crop",
      alt: "Team working on residential project",
    },
    {
      src: "https://images.unsplash.com/photo-1585771724684-1892e2d6a4b6?w=800&q=80&auto=format&fit=crop",
      alt: "Emergency repair service",
    },
    {
      src: "https://images.unsplash.com/photo-1554224155-67204b0227d6?w=800&q=80&auto=format&fit=crop",
      alt: "Completed home improvement project",
    },
  ],

  // ── Satisfaction Guarantee ───────────────────────────────────────
  guaranteeHeadline: "Our Satisfaction Guarantee",
  guaranteeText: "If you're not 100% satisfied with our work, we'll come back and make it right — at no additional cost. That's our promise to every customer, on every job.",
  guaranteePoints: [
    "100% satisfaction or we fix it free",
    "No questions asked — we stand behind our work",
    "Valid for 30 days after service completion",
  ],

  // ── Contact Form ────────────────────────────────────────────────
  serviceOptions: [
    "Repair",
    "Installation / Replacement",
    "Inspection / Diagnostic",
    "Emergency Service",
    "Other",
  ],

  // ── Zapier / Hermes webhook ────────────────────────────────────
  formWebhookUrl: "https://hooks.zapier.com/hooks/catch/YOUR/HOOK/",
  formSource: "home-service-template",

  // ── Trust badges ───────────────────────────────────────────────
  badges: ["Licensed & Insured", "Free Estimates", "5-Star Rated", "Locally Owned"],

  // ── Footer ─────────────────────────────────────────────────────
  footerYear: new Date().getFullYear(),
  establishedYear: 2010,
  footerLinks: {
    services: [
      "Repairs & Maintenance",
      "Inspections & Diagnostics",
      "Installation & Replacement",
      "Emergency Service",
      "Free Estimates",
    ],
    company: [
      { label: "About Us", href: "#about" },
      { label: "Our Guarantee", href: "#guarantee" },
      { label: "Reviews", href: "#reviews" },
      { label: "Gallery", href: "#gallery" },
      { label: "Contact", href: "#contact" },
    ],
  },
  socialLinks: {
    facebook: "https://facebook.com/peakhomeservices",
    instagram: "https://instagram.com/peakhomeservices",
    google: "https://g.page/peakhomeservices",
  },
};

/** Types */
export type ServiceItem = (typeof siteConfig.services)[number];
export type ReviewItem = (typeof siteConfig.reviews)[number];
export type PricingTier = (typeof siteConfig.pricingTiers)[number];
export type GalleryImage = (typeof siteConfig.galleryImages)[number];