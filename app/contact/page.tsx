"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Modal from "@/components/Modal";
import { contactPageContent } from "@/utils/site-content";

// Note: Metadata should be in a separate layout or use next/head for client components
// For now, SEO is handled in the root layout

export default function ContactPage() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  return (
    <div className="min-h-screen pt-20 pb-24 bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            {contactPageContent.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {contactPageContent.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>

          {/* Calendly & Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {contactPageContent.bookACall.title}
                  </h3>
                  <p className="text-gray-600">
                    {contactPageContent.bookACall.description}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsCalendlyOpen(true)}
                className="w-full px-6 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
              >
                {contactPageContent.bookACall.action.title}
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-6 text-gray-900">
                {contactPageContent.otherWaysToReach.title}
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Email</p>
                  <a
                    href="mailto:hello@sritek.com"
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    {contactPageContent.otherWaysToReach.email}
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Response Time</p>
                  <p className="text-gray-900 font-medium">
                    We typically respond within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Calendly Modal */}
      <Modal
        isOpen={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
        title="Book a 15-min Call"
      >
        <div className="h-[600px]">
          <iframe
            src="https://calendly.com/sritek/15min"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Calendly Scheduling"
            className="rounded-lg"
          />
        </div>
      </Modal>
    </div>
  );
}
