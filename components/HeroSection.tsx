"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { homepageContent } from "@/utils/site-content";

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

          {/* Right: Animated Bento Grid Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((item, index) => (
                <motion.div
                  key={item}
                  className={`bg-gradient-to-br ${
                    index === 0
                      ? "from-primary-500 to-primary-700 col-span-2 h-48"
                      : index === 1
                      ? "from-purple-500 to-purple-700 h-32"
                      : index === 2
                      ? "from-blue-500 to-blue-700 h-32"
                      : "from-gray-400 to-gray-600 col-span-2 h-24"
                  } rounded-2xl shadow-xl`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.5 + index * 0.1,
                    duration: 0.5,
                  }}
                  whileHover={{
                    scale: 1.05,
                    rotate: index % 2 === 0 ? 1 : -1,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="h-full flex items-center justify-center text-white text-2xl font-bold">
                    {index === 0 && "🚀"}
                    {index === 1 && "💻"}
                    {index === 2 && "⚡"}
                    {index === 3 && "📊"}
                  </div>
                </motion.div>
              ))}
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
