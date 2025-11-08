import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Statement | SriTek",
  description: "SriTek Accessibility Statement",
};

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen pt-20 pb-24 bg-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">
          Accessibility Statement
        </h1>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          <p className="mb-4">
            SriTek is committed to ensuring digital accessibility for people with
            disabilities. We are continually improving the user experience for
            everyone and applying the relevant accessibility standards.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Conformance Status</h2>
          <p className="mb-4">
            We aim to conform to WCAG 2.1 Level AA standards. Our website
            includes:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Semantic HTML structure</li>
            <li>Alt text for images</li>
            <li>Keyboard navigation support</li>
            <li>Proper heading hierarchy</li>
            <li>Color contrast compliance</li>
            <li>Screen reader compatibility</li>
          </ul>
          <h2 className="text-2xl font-bold mt-8 mb-4">Feedback</h2>
          <p>
            If you encounter any accessibility barriers, please contact us at
            hello@sritek.com. We welcome your feedback and will make every
            effort to address your concerns.
          </p>
        </div>
      </div>
    </div>
  );
}

