import BentoGrid from "@/components/BentoGrid";
import ServiceCard from "@/components/ServiceCard";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services — What We Build | SriTek",
  description:
    "We offer web app development, landing pages, SaaS dashboards, API & automation, and maintenance services. Full-stack product engineering.",
};

const services = [
  {
    id: 1,
    title: "Web App Development",
    description:
      "Full-stack applications built with React, Next.js, and modern TypeScript. From MVPs to production-ready products that scale.",
    icon: "💻",
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
    id: 2,
    title: "Landing Pages",
    description:
      "High-converting, SEO-optimized landing pages that drive leads and conversions. Built for speed and performance.",
    icon: "🚀",
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
    id: 3,
    title: "SaaS Dashboards",
    description:
      "Beautiful, functional admin dashboards with real-time data visualization, reporting, and user management.",
    icon: "📊",
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
    title: "API & Automation",
    description:
      "Custom APIs, integrations, and workflow automations to streamline operations and connect your tools.",
    icon: "⚡",
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
    id: 5,
    title: "Maintenance & Support",
    description:
      "Ongoing support, updates, and optimization to keep your product running smoothly and securely.",
    icon: "🔧",
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

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-20 pb-24 bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Full-stack product engineering services to take your idea from
            concept to launch.
          </p>
        </div>

        <BentoGrid className="mb-16">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
            />
          ))}
        </BentoGrid>

        {/* Detailed Features */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
            What&apos;s Included
          </h2>
          <div className="space-y-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-200"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl">{service.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                  </div>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {service.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <span className="text-primary-600">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Let&apos;s discuss your project and find the right solution for you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
          >
            Book a 15-min Call
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

