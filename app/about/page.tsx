import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — SriTek Team | Product Engineering Agency",
  description:
    "Meet the SriTek team: Yashaswi and Ankita. We&apos;re a product engineering agency specializing in MVPs, dashboards, and automations.",
};

const values = [
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
      "You&apos;ll always know what&apos;s happening with regular updates and clear, honest communication.",
  },
  {
    title: "Long-term Partnership",
    description:
      "We&apos;re not just contractors—we&apos;re your engineering partners, invested in your success.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20 pb-24 bg-white">
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            About SriTek
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We&apos;re a product engineering agency that helps startups and businesses
            build, launch, and scale their digital products.
          </p>
        </div>

        {/* Story */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Story</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              SriTek was founded with a simple mission: to help businesses turn
              their ideas into reality through exceptional engineering and
              thoughtful design. We specialize in building MVPs, dashboards, and
              automations using modern JavaScript and TypeScript.
            </p>
            <p className="mb-4">
              What sets us apart is our focus on being a true engineering
              partner—not just a service provider. We work closely with our
              clients to understand their goals, challenges, and vision, then
              deliver solutions that drive real business results.
            </p>
            <p>
              Beyond our core services, SriTek also operates in recruitment and
              SaaS verticals, helping companies build great teams and products.
            </p>
          </div>
        </section>

        {/* Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 mb-6 flex items-center justify-center text-white text-3xl font-bold">
                Y
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">
                Yashaswi
              </h3>
              <p className="text-gray-600 mb-4">Co-founder & Lead Engineer</p>
              <p className="text-gray-700">
                Full-stack engineer with expertise in React, Next.js, and
                TypeScript. Passionate about building products that users love
                and that scale.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 mb-6 flex items-center justify-center text-white text-3xl font-bold">
                A
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Ankita</h3>
              <p className="text-gray-600 mb-4">Co-founder & Product Lead</p>
              <p className="text-gray-700">
                Product strategist and designer focused on user experience and
                conversion optimization. Ensures every product we build solves
                real problems.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Work Culture */}
        <section className="mb-16 bg-gray-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            How We Work
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              We believe in collaboration, transparency, and continuous
              improvement. Our process is designed to keep you in the loop at
              every step, from initial discovery to launch and beyond.
            </p>
            <p>
              We&apos;re always learning, experimenting with new technologies, and
              refining our approach to deliver better results for our clients.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Ready to build something great? Let&apos;s start a conversation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </section>
      </div>
    </div>
  );
}

