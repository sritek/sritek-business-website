"use client";

import { useState } from "react";
import ContactForm from "@/components/ContactForm";
import Modal from "@/components/Modal";
import { Calendar } from "lucide-react";

// Note: Metadata should be in a separate layout or use next/head for client components
// For now, SEO is handled in the root layout

export default function ContactPage() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  return (
    <div className="min-h-screen pt-20 pb-24 bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Let&apos;s discuss your project and see how we can help you build,
            launch, and scale your product.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              Request a Proposal
            </h2>
            <ContactForm />
          </div>

          {/* Calendly & Info */}
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Book a Call
                  </h3>
                  <p className="text-gray-600">
                    Schedule a 15-minute discovery call
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsCalendlyOpen(true)}
                className="w-full px-6 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
              >
                Open Calendar
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-6 text-gray-900">
                Other Ways to Reach Us
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Email</p>
                  <a
                    href="mailto:hello@sritek.com"
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    hello@sritek.com
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
          </div>
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

