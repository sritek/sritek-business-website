import CaseCard from "@/components/CaseCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work — Portfolio | SriTek",
  description:
    "Explore our portfolio of successful projects: MVPs, dashboards, landing pages, and web applications built with modern technologies.",
};

const projects = [
  {
    id: 1,
    title: "Carolina Luminary Lounge",
    description:
      "Official website for Carolina Luminary Lounge — an immersive rooftop lounge in Jaipur featuring bespoke cocktails, curated performances, signature dishes, and an unforgettable neon-lit nightlife experience.",
    image: "/carolina.png",
    metrics: "Featured signature menu, reservations, events & gallery sections",
    tech: ["Next.js", "Tailwind CSS", "React", "Vercel Hosting"],
    slug: "carolina-luminary-lounge"
  },  
  {
    id: 2,
    title: "Soni Dental Hospital",
    description:
      "Leading dental care clinic in Jaipur offering advanced treatments including implants, braces & aligners, root canal, crowns, laser dentistry, pediatric care, and more with modern technology and expert specialists.",
    image: "/sonidental.png",
    metrics: "55,000+ happy patients, 5+ expert doctors, 99.5% success rate",
    tech: ["Orthodontics", "Dental Implants", "Laser Dentistry", "Pediatric Dentistry"],
    slug: "soni-dental-hospital"
  },  
  {
    "id": 3,
    "title": "Kismat Silver — Fine Jewellery Storefront",
    "description": "Designed and developed a premium e-commerce storefront for Kismat Silver featuring curated jewellery collections and an AI-powered product selection experience.",
    "image": "/KismatSilver.png",
    "metrics": "Improved product discovery, AI-driven recommendations, optimized shopping flow",
    "tech": ["Next.js", "Tailwind CSS", "Framer Motion", "AWS"],
    "slug": "kismat-silver"
  },  
  {
    id: 4,
    title: "E-commerce Platform with Admin Panel",
    description:
      "Full-stack e-commerce solution with inventory management, order processing, and customer analytics.",
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800",
    metrics: "10k+ products, 99.9% uptime",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    slug: "ecommerce-platform",
  },
  {
    id: 5,
    title: "Real-time Collaboration Tool",
    description:
      "Built a collaborative workspace tool with real-time editing, video calls, and project management features.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
    metrics: "1000+ concurrent users, <100ms latency",
    tech: ["Next.js", "WebSockets", "WebRTC"],
    slug: "collaboration-tool",
  },
  {
    id: 6,
    title: "Healthcare Appointment System",
    description:
      "Developed a patient management system with appointment scheduling, telemedicine, and billing integration.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800",
    metrics: "50% reduction in no-shows, HIPAA compliant",
    tech: ["React", "TypeScript", "PostgreSQL", "Twilio"],
    slug: "healthcare-system",
  },
];

export default function WorkPage() {
  return (
    <div className="min-h-screen pt-20 pb-24 bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Our Work
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real projects, measurable results. Explore our portfolio of
            successful launches across industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <CaseCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

