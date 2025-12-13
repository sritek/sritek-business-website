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
    slug: "carolina-luminary-lounge",
    title: "Carolina Luminary Lounge",
    description:
      "An immersive rooftop lounge experience in Jaipur featuring bespoke cocktails, signature dishes, curated music events, and a vibrant nightlife atmosphere.",
    problem:
      "The client wanted a dynamic online presence that captures the ambience, menu offerings, events, and reservation experience for visitors in a visually appealing way.",
    solution:
      "We developed a modern, responsive Next.js site highlighting Carolina’s menu, curated events, gallery, and table reservations — aimed at boosting customer engagement and on-site bookings.",
    tech: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    metrics: [
      "Interactive menu & events showcase",
      "Online reservations integration",
      "Gallery to boost visual engagement",
      "Multi-section user flow (Menu, Events, Contact)"
    ],
    image: "/carolina.png",
    liveUrl: "https://carolina-website-orcin.vercel.app/"
  },  
  {
    slug: "soni-dental-hospital",
    title: "Soni Dental Hospital",
    description:
      "Premier dental clinic in Jaipur offering comprehensive dental services including implants, braces & aligners, root canal, crowns, pediatric care, laser dentistry, and more with expert care and modern technology.",
    problem:
      "Patients in Jaipur needed a trusted dental care provider that could offer advanced treatments, personalized care, and a full range of services under one roof using the latest technology.",
    solution:
      "We designed and presented a professional website for Soni Dental Hospital showcasing their range of dental services, expert team, patient testimonials, and easy appointment booking to enhance patient engagement and online presence.",
    tech: ["Next.js", "Responsive Web Design", "CMS/SEO Optimization", "Tailwind CSS"],
    metrics: [
      "55,000+ happy patients",
      "5+ expert doctors",
      "99.5% treatment success rate",
      "24/7 emergency care availability"
    ],
    image: "/sonidental.png",
    liveUrl: "https://sonidentalhospital.com/"
  },  
  {
    "slug": "kismat-silver",
    "title": "Kismat Silver — Premium Jewellery E-Commerce Experience",
    "description": "A modern, visually immersive jewellery storefront showcasing handcrafted silver collections with an AI-powered product selection experience.",
    "problem": "Kismat Silver needed a polished, high-conversion online shopping experience that highlights product craftsmanship, supports curated collections, and builds brand trust.",
    "solution": "We built a fully responsive Next.js storefront with Tailwind CSS and Framer Motion, featuring curated collections (Lunar, Ethereal, Celestial, Artisan), an AI-powered 'Find Your Soul Stone' selector, smooth product browsing, and brand storytelling sections. Integrated SEO, fast hosting, and optimized images for improved conversions.",
    "tech": ["Next.js", "Tailwind CSS", "Framer Motion", "AWS", "SEO Optimization"],
    "metrics": [
      "AI-powered product selector improves discovery",
      "Enhanced conversions with optimized UI/UX",
      "Curated collections improving user navigation",
      "10% first-order discount integration (KISMAT10)"
    ],
    "image": "/KismatSilver.png",
    "liveUrl": "https://kismatsilver.netlify.app/"
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

