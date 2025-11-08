import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";

interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  tech: string[];
  metrics: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

const caseStudies: CaseStudy[] = [
  {
    slug: "finance-dashboard",
    title: "SaaS Dashboard for Finance Startup",
    description:
      "Built a comprehensive financial dashboard with real-time analytics and reporting.",
    problem:
      "The client needed a way to visualize complex financial data in real-time, with customizable reports and dashboards for different user roles.",
    solution:
      "We built a modern React dashboard with TypeScript, implementing real-time data updates, interactive charts, and role-based access control. The solution included automated report generation and export functionality.",
    tech: ["React", "TypeScript", "Chart.js", "Node.js", "PostgreSQL"],
    metrics: [
      "40% faster reporting time",
      "28% increase in user engagement",
      "99.9% uptime",
      "Sub-2s page load time",
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
    liveUrl: "https://example.com",
  },
  {
    slug: "marketplace-mvp",
    title: "Marketplace MVP for Local Vendors",
    description:
      "Launched a marketplace platform connecting local vendors with customers in 21 days.",
    problem:
      "Local vendors needed a platform to reach customers online, but existing solutions were too expensive and complex for small businesses.",
    solution:
      "We built a streamlined MVP using Next.js with a focus on simplicity and speed. The platform included vendor onboarding, product listings, payment processing, and order management.",
    tech: ["Next.js", "PostgreSQL", "Stripe", "AWS", "Tailwind CSS"],
    metrics: [
      "MVP launched in 21 days",
      "500+ active vendors",
      "10k+ monthly transactions",
      "4.8/5 average vendor rating",
    ],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200",
  },
  {
    slug: "saas-landing",
    title: "Landing Page for SaaS Launch",
    description:
      "Conversion-optimized landing page that increased signups by 45%.",
    problem:
      "The existing landing page had a high bounce rate and low conversion rate, failing to communicate value effectively.",
    solution:
      "We redesigned the landing page with a focus on clear value propositions, social proof, and optimized CTAs. Implemented A/B testing and performance optimizations.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    metrics: [
      "45% increase in signups",
      "2.3s page load time",
      "60% reduction in bounce rate",
      "Lighthouse score: 95+",
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200",
  },
];

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const caseStudy = caseStudies.find((cs) => cs.slug === params.slug);
  if (!caseStudy) {
    return {
      title: "Case Study Not Found | SriTek",
    };
  }
  return {
    title: `${caseStudy.title} | SriTek Case Study`,
    description: caseStudy.description,
  };
}

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const caseStudy = caseStudies.find((cs) => cs.slug === params.slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-20 pb-24 bg-white">
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-primary-600 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Work
        </Link>

        <article>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            {caseStudy.title}
          </h1>
          <p className="text-xl text-gray-600 mb-12">{caseStudy.description}</p>

          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden mb-12">
            <Image
              src={caseStudy.image}
              alt={caseStudy.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                The Problem
              </h2>
              <p className="text-gray-700 leading-relaxed">{caseStudy.problem}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                Our Solution
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-3">
              {caseStudy.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {caseStudy.metrics.map((metric, index) => (
                <div
                  key={index}
                  className="p-6 bg-gray-50 rounded-xl border border-gray-200"
                >
                  <p className="text-lg font-semibold text-gray-900">
                    {metric}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {(caseStudy.liveUrl || caseStudy.githubUrl) && (
            <div className="flex flex-wrap gap-4">
              {caseStudy.liveUrl && (
                <a
                  href={caseStudy.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold"
                >
                  View Live Site
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
              {caseStudy.githubUrl && (
                <a
                  href={caseStudy.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-primary-600 hover:text-primary-600 transition-colors font-semibold"
                >
                  View Code
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
          )}
        </article>
      </div>
    </div>
  );
}

