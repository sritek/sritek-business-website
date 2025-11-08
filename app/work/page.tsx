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
    title: "SaaS Dashboard for Finance Startup",
    description:
      "Built a comprehensive financial dashboard with real-time analytics, reporting, and data visualization for a fintech startup.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    metrics: "40% faster reporting, 28% user engagement increase",
    tech: ["React", "TypeScript", "Chart.js", "Node.js"],
    slug: "finance-dashboard",
  },
  {
    id: 2,
    title: "Marketplace MVP for Local Vendors",
    description:
      "Launched a marketplace platform connecting local vendors with customers. Built and deployed in just 21 days.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
    metrics: "MVP in 21 days, 500+ active vendors",
    tech: ["Next.js", "PostgreSQL", "Stripe", "AWS"],
    slug: "marketplace-mvp",
  },
  {
    id: 3,
    title: "Landing Page for SaaS Launch",
    description:
      "Designed and developed a conversion-optimized landing page that increased signups by 45% and reduced bounce rate.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    metrics: "45% signup increase, 2.3s load time",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    slug: "saas-landing",
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

