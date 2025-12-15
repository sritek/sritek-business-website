"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { homepageContent } from "@/utils/site-content";
import TiltCard from "@/components/TiltCard";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-24 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {homepageContent.hero.title}
              <br />
              <span className="text-primary-600">With SriTek.</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {homepageContent.hero.description}
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {homepageContent.hero.ctaPrimary}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-primary-600 hover:text-primary-600 transition-all"
              >
                {homepageContent.hero.ctaSecondary}
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: 3D Tilt Cards */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{ perspective: "1000px" }}
          >
            <div className="grid grid-cols-2 gap-4">
              <TiltCard
                image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop&q=80"
                imageAlt="Business Growth and Scaling"
                height="h-48"
                colSpan={2}
                intensity={15}
              >
                <div className="text-white text-center drop-shadow-lg px-4">
                  <p className="text-2xl md:text-3xl font-bold">
                    Build. Launch. Scale.
                  </p>
                  <p className="text-sm md:text-base mt-1 opacity-90">
                    Turn Ideas Into Reality
                  </p>
                </div>
              </TiltCard>
              <TiltCard
                image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=320&fit=crop&q=80"
                imageAlt="Web Development and Coding"
                height="h-32"
                intensity={15}
              >
                <div className="text-white text-center drop-shadow-lg">
                  <p className="text-base md:text-lg font-bold">Web Apps</p>
                  <p className="text-xs mt-1 opacity-90">
                    Full-Stack Development
                  </p>
                </div>
              </TiltCard>
              <TiltCard
                image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=320&fit=crop&q=80"
                imageAlt="Technology and Innovation"
                height="h-32"
                intensity={15}
              >
                <div className="text-white text-center drop-shadow-lg">
                  <p className="text-base md:text-lg font-bold">Modern Stack</p>
                  <p className="text-xs mt-1 opacity-90">
                    Next.js & TypeScript
                  </p>
                </div>
              </TiltCard>
              <TiltCard
                image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=200&fit=crop&q=80"
                imageAlt="SaaS Dashboards and Analytics"
                height="h-24"
                colSpan={2}
                intensity={15}
              >
                <div className="text-white text-center drop-shadow-lg">
                  <p className="text-sm md:text-base font-bold">
                    SaaS Dashboards & Analytics
                  </p>
                </div>
              </TiltCard>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
    </section>
  );
}
