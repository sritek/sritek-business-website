import HeroSection from "@/components/HeroSection";
import BentoGrid from "@/components/BentoGrid";
import ServiceCard from "@/components/ServiceCard";
import CaseCard from "@/components/CaseCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import ProcessSteps from "@/components/ProcessSteps";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { homepageContent } from "@/utils/site-content";

export default function Home() {
  const services = [
    {
      id: 1,
      title: "Web App Development",
      description:
        "Full-stack applications built with React, Next.js, and modern TypeScript.",
      icon: "💻",
    },
    {
      id: 2,
      title: "Landing Pages",
      description:
        "High-converting, SEO-optimized landing pages that drive leads.",
      icon: "🚀",
    },
    {
      id: 3,
      title: "SaaS Dashboards",
      description:
        "Beautiful, functional admin dashboards with real-time data visualization.",
      icon: "📊",
    },
    {
      id: 4,
      title: "API & Automation",
      description:
        "Custom APIs, integrations, and workflow automations to streamline operations.",
      icon: "⚡",
    },
    {
      id: 5,
      title: "Maintenance & Support",
      description:
        "Ongoing support, updates, and optimization to keep your product running smoothly.",
      icon: "🔧",
    },
  ];

  const featuredCases = [
    {
      id: 1,
      title: "SaaS Dashboard for Finance Startup",
      description:
        "Built a comprehensive financial dashboard with real-time analytics and reporting.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      metrics: "40% faster reporting, 28% user engagement increase",
      tech: ["React", "TypeScript", "Chart.js"],
      slug: "finance-dashboard",
    },
    {
      id: 2,
      title: "Marketplace MVP for Local Vendors",
      description:
        "Launched a marketplace platform connecting local vendors with customers in 21 days.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
      metrics: "MVP in 21 days, 500+ active vendors",
      tech: ["Next.js", "PostgreSQL", "Stripe"],
      slug: "marketplace-mvp",
    },
    {
      id: 3,
      title: "Landing Page for SaaS Launch",
      description:
        "Designed and developed a conversion-optimized landing page that increased signups by 45%.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      metrics: "45% signup increase, 2.3s load time",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
      slug: "saas-landing",
    },
  ];

  return (
    <div className="min-h-screen">
      <HeroSection />

      {/* Proof Strip */}
      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-1">
                {homepageContent.trustStrip.trustedBy.title}
              </p>
              <div className="flex items-center gap-4 text-gray-400">
                <span className="text-lg font-semibold">
                  {homepageContent.trustStrip.trustedBy.clients.join(", ")}
                </span>
              </div>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary-600">
                {homepageContent.trustStrip.metric.count}+
              </p>
              <p className="text-sm text-gray-600">
                {homepageContent.trustStrip.metric.label}
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600 italic">
                {homepageContent.trustStrip.testimonial}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {homepageContent.services.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {homepageContent.services.description}
            </p>
          </div>
          <BentoGrid>
            {homepageContent.services.services.map((service, index) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                index={index}
              />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {homepageContent.featuredWork.title}
              </h2>
              <p className="text-xl text-gray-600">
                {homepageContent.featuredWork.description}
              </p>
            </div>
            <Link
              href="/work"
              className="hidden md:flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold group"
            >
              View All Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homepageContent.featuredWork.projects.map((project, index) => (
              <CaseCard key={project.id} project={project} index={index} />
            ))}
          </div>
          <div className="text-center mt-12 md:hidden">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
            >
              View All Work
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {homepageContent.howWeWork.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {homepageContent.howWeWork.description}
            </p>
          </div>
          <ProcessSteps />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Clients Say
            </h2>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {homepageContent.finalCTA.title}
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
            {homepageContent.finalCTA.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              {homepageContent.finalCTA.ctaPrimary}
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              {homepageContent.finalCTA.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
