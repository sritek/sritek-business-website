import { routes } from "./routes";

const OFFICIAL_CONTACT_EMAIL = "business.sritek@gmail.com";

const servicesContent = [
  {
    id: 1,
    icon: "🚀",
    title: "MVP Development",
    description:
      "Turn your idea into a working prototype in weeks — not months. Perfect for early-stage startups.",
    features: ["MVP development", "Prototype development"],
  },
  {
    id: 2,
    icon: "💻",
    title: "Web App Development",
    description:
      "Full-stack web applications built using latest, performant, and secure technologies.",
    features: [
      "React & Next.js development",
      "TypeScript for type safety",
      "API development & integration",
      "Database design & optimization",
      "Authentication & authorization",
      "Third-party integrations",
    ],
  },
  {
    id: 3,
    icon: "📊",
    title: "SaaS Dashboards",
    description:
      "Beautiful, functional admin dashboards with real-time data visualization, reporting, and user management.",
    features: [
      "Data visualization",
      "Real-time updates",
      "Role-based access",
      "Custom reporting",
      "Export functionality",
      "Responsive design",
    ],
  },
  {
    id: 4,
    icon: "�",
    title: "Landing Pages",
    description:
      "High-converting, SEO-optimized landing pages that drive leads and conversions. Built for speed and performance.",
    features: [
      "Conversion-focused design",
      "SEO optimization",
      "Fast load times (<2s)",
      "Mobile-responsive",
      "A/B testing setup",
      "Analytics integration",
    ],
  },
  {
    id: 5,
    icon: "⚡",
    title: "API & Automation",
    description:
      "Integrate systems, automate workflows, and connect your business tools with reliable APIs.",
    features: [
      "REST & GraphQL APIs",
      "Webhook integrations",
      "Workflow automation",
      "Data synchronization",
      "Third-party connectors",
      "API documentation",
    ],
  },
  {
    id: 6,
    icon: "🔧",
    title: "Maintenance & Support",
    description:
      "Ongoing support, updates, and optimization to keep your product running smoothly and securely.",
    features: [
      "Bug fixes & updates",
      "Performance optimization",
      "Security patches",
      "Feature enhancements",
      "Monitoring & alerts",
      "24/7 support available",
    ],
  },
];

export const headerContent = {
  companyLogo: "/logo.png",
  companyName: "SriTek",
  navLinks: [
    { href: routes.home, label: "Home" },
    { href: routes.work, label: "Work" },
    { href: routes.services, label: "Services" },
    { href: routes.about, label: "About" },
    { href: routes.contact, label: "Contact" },
  ],
  ctaPrimary: "Book a Call",
};

export const footerContent = {
  title: "SriTek",
  description:
    "Your full-stack product engineering team — on demand. We build MVPs, dashboards, and automations using modern JavaScript and TypeScript.",
  email: "hello@sritek.com",
  links: {
    company: [
      { href: routes.home, label: "Home" },
      { href: routes.work, label: "Work" },
      { href: routes.services, label: "Services" },
      { href: routes.about, label: "About" },
      { href: routes.contact, label: "Contact" },
    ],
    legal: [
      { href: routes.privacy, label: "Privacy Policy" },
      { href: routes.terms, label: "Terms of Service" },
      { href: routes.accessibility, label: "Accessibility" },
    ],
    social: {
      linkedin: "https://linkedin.com/company/sritek",
      twitter: "https://twitter.com/sritek",
    },
  },
  copyright: `© ${new Date().getFullYear()} SriTek. All rights reserved.`,
};

export const homepageContent = {
  hero: {
    title: "Build. Launch. Scale.",
    description:
      "We help startups and businesses turn ideas into production-ready web apps — fast, modern, and built with the right technology stack.",
    ctaPrimary: "Book a 15-min Call",
    ctaSecondary: "View Our Work",
  },
  trustStrip: {
    trustedBy: {
      title: "Trusted by",
      clients: ["StartupCo", "TechCorp", "InnovateLabs"],
    },
    metric: {
      count: 50,
      label: "Projects Delivered",
    },
    testimonial: '"Reduced onboarding dropoff by 28%"',
  },
  services: {
    title: "What We Build",
    description:
      "We help startups and businesses turn ideas into production-ready web apps — fast, modern, and built with the right technology stack.",
    services: servicesContent.map((service) => ({
      id: service.id,
      title: service.title,
      description: service.description,
      icon: service.icon,
    })),
  },
  featuredWork: {
    title: "Featured Work",
    description: "Real projects, measurable results",
    projects: [
      {
        id: 1,
        title: "Carolina Luminary Lounge",
        description:
          "Official website for Carolina Luminary Lounge — an immersive rooftop lounge in Jaipur featuring bespoke cocktails, curated performances, signature dishes, and an unforgettable neon-lit nightlife experience.",
        image: "/carolina.png",
        metrics:
          "Featured signature menu, reservations, events & gallery sections",
        tech: ["Next.js", "Tailwind CSS", "React", "Vercel Hosting"],
        slug: "carolina-luminary-lounge",
      },
      {
        id: 2,
        title: "Soni Dental Hospital",
        description:
          "Leading dental care clinic in Jaipur offering advanced treatments including implants, braces & aligners, root canal, crowns, laser dentistry, pediatric care, and more with modern technology and expert specialists.",
        image: "/sonidental.png",
        metrics:
          "55,000+ happy patients, 5+ expert doctors, 99.5% success rate",
        tech: [
          "Orthodontics",
          "Dental Implants",
          "Laser Dentistry",
          "Pediatric Dentistry",
        ],
        slug: "soni-dental-hospital",
      },
      {
        id: 3,
        title: "Kismat Silver — Fine Jewellery Storefront",
        description:
          "Designed and developed a premium e-commerce storefront for Kismat Silver featuring curated jewellery collections and an AI-powered product selection experience.",
        image: "/KismatSilver.png",
        metrics:
          "Improved product discovery, AI-driven recommendations, optimized shopping flow",
        tech: ["Next.js", "Tailwind CSS", "Framer Motion", "AWS"],
        slug: "kismat-silver",
      },
    ],
  },
  howWeWork: {
    title: "How We Work",
    description:
      "We follow a structured process to deliver high-quality web applications and landing pages.",
  },
  testimonials: {
    title: "What Clients Say",
    testimonials: [
      {
        id: 1,
        name: "Pankaj Soni",
        role: "Founder, Kismat Silver",
        content:
          "SriTek delivered our MVP in just 21 days. The team is professional, responsive, and truly understands product development. Highly recommend!",
        rating: 4,
        image:
          "https://images.lifestyleasia.com/wp-content/uploads/sites/7/2021/11/15123519/KRISHAN-KUMAR-SONI-DIRECTOR-806x740.jpg",
      },
      {
        id: 2,
        name: "Dr.Pawan Soni",
        role: "Founder, Soni Dental Hospital",
        content:
          "Working with SriTek has been a game-changer. They built a complex dashboard that reduced our reporting time by 40%. Exceptional work!",
        rating: 5,
        image: "https://sonidentalhospital.com/images/Dr.Pawan%20Soni.webp",
      },
      {
        id: 3,
        name: "Om Prakash",
        role: "Founder, Carolina Luminary Lounge",
        content:
          "The landing page SriTek created increased our signups by 45%. Their attention to detail and conversion optimization expertise is outstanding.",
        rating: 5,
        image:
          "https://media.licdn.com/dms/image/v2/C5103AQHsf9FK2n-k5g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516515735773?e=2147483647&v=beta&t=J06AxvpB1o62r2AnQAbRKEVDbVsFWWncaLMW7XGMBjE",
      },
    ],
  },
  finalCTA: {
    title: "Ready to Build Your Product?",
    description:
      "Let's discuss your project and see how we can help you launch faster.",
    ctaPrimary: "Book a 15-min Call",
    ctaSecondary: "View Our Work",
  },
};

export const servicesPageContent = {
  title: "Everything You Need to Build and Scale",
  description:
    "From idea validation to full-scale product launches — SriTek offers complete technical and product support to startups and businesses.",
  servicesCards: servicesContent.map((service) => ({
    id: service.id,
    title: service.title,
    description: service.description,
    icon: service.icon,
  })),
  whatIncluded: {
    title: "What's Included",
    description:
      "Every service package includes comprehensive technical and product support to help you build and scale your product.",
    servicesDescriptions: servicesContent.map((service) => ({
      id: service.id,
      icon: service.icon,
      title: service.title,
      description: service.description,
      features: service.features,
    })),
  },
  cta: {
    title: "Ready to Get Started?",
    description:
      "Let's discuss your project and find the right solution for you.",
    ctaPrimary: "Book a 15-min Call",
    ctaSecondary: "View Our Work",
  },
};

export const aboutPageContent = {
  title: "Behind SriTek",
  description:
    "We are a team of crazy developers who are passionate about building products that helps startups and businesses build, launch, and scale their digital products.",
  story: {
    title: "Our Story",
    description:
      "SriTek is a modern software agency founded by engineers who love building things that matter. We’re a small, focused team — combining experience, creativity, and speed to ship products people love to use.",
  },
  ourValues: {
    title: "Our Values",
    values: [
      {
        title: "Quality First",
        description:
          "We write clean, maintainable code and follow best practices to ensure your product is built to last.",
      },
      {
        title: "Fast Delivery",
        description:
          "We move quickly without sacrificing quality, helping you launch faster and iterate sooner.",
      },
      {
        title: "Transparent Communication",
        description:
          "You'll always know what's happening with regular updates and clear, honest communication.",
      },
      {
        title: "Long-term Partnership",
        description:
          "We're not just contractors—we're your engineering partners, invested in your success.",
      },
    ],
  },
  howWeWork: {
    title: "How We Work",
    description: {
      d1: '"We believe in collaboration, transparency, and continuous improvement. Our process is designed to keep you in the loop at every step, from initial discovery to launch and beyond.",',
      d2: "We're always learning, experimenting with new technologies, and refining our approach to deliver better results for our clients.",
    },
  },
  cta: {
    title: "Let's Work Together",
    description: "Ready to build something great? Let's start a conversation.",
    ctaPrimary: "Get in Touch",
  },
};

export const contactPageContent = {
  title: "Get in Touch",
  description:
    "Let's discuss your project and see how we can help you build, launch, and scale your product.",
  bookACall: {
    title: "Book a Call",
    description: "Schedule a 15-minute discovery call",
    action: {
      title: "Open Calendar",
    },
  },
  otherWaysToReach: {
    title: "Other Ways to Reach Us",
    email: OFFICIAL_CONTACT_EMAIL,
    responseTime: "We typically respond within 24 hours",
  },
};
