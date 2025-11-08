"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Code, Rocket, HeadphonesIcon } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We understand your goals, target audience, and technical requirements through detailed discussions.",
    icon: Search,
    color: "from-blue-500 to-blue-600",
  },
  {
    number: "02",
    title: "Build MVP",
    description:
      "We ship a working MVP quickly using modern tech stack, following best practices and your timeline.",
    icon: Code,
    color: "from-purple-500 to-purple-600",
  },
  {
    number: "03",
    title: "Launch & Iterate",
    description:
      "We deploy to production, gather feedback, and iterate rapidly to improve user experience and features.",
    icon: Rocket,
    color: "from-primary-500 to-primary-600",
  },
  {
    number: "04",
    title: "Support",
    description:
      "We provide ongoing maintenance, updates, and optimization to keep your product running smoothly.",
    icon: HeadphonesIcon,
    color: "from-green-500 to-green-600",
  },
];

export default function ProcessSteps() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="relative">
      {/* Timeline line (desktop) */}
      <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 via-primary-500 to-green-500 transform -translate-y-1/2" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-shadow h-full">
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 shadow-lg`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-sm font-bold text-gray-400 mb-2">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

