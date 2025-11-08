import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | SriTek",
  description: "SriTek Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-20 pb-24 bg-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">
          Privacy Policy
        </h1>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          <p className="mb-4">
            At SriTek, we take your privacy seriously. This Privacy Policy
            explains how we collect, use, and protect your personal information.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
          <p className="mb-4">
            We collect information that you provide directly to us, such as when
            you fill out our contact form, request a proposal, or communicate
            with us.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
          <p className="mb-4">
            We use the information we collect to respond to your inquiries,
            provide our services, and improve our website.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Data Security</h2>
          <p className="mb-4">
            We implement appropriate security measures to protect your personal
            information.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us
            at hello@sritek.com.
          </p>
        </div>
      </div>
    </div>
  );
}

