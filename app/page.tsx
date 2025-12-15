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
