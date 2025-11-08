import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | SriTek",
  description: "SriTek Terms of Service",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-20 pb-24 bg-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">
          Terms of Service
        </h1>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="mb-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <p className="mb-4">
            By accessing and using this website, you accept and agree to be
            bound by the terms and provision of this agreement.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Use License</h2>
          <p className="mb-4">
            Permission is granted to temporarily access the materials on
            SriTek&apos;s website for personal, non-commercial transitory
            viewing only.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Disclaimer</h2>
          <p className="mb-4">
            The materials on SriTek&apos;s website are provided on an &apos;as
            is&apos; basis. SriTek makes no warranties, expressed or implied.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Limitations</h2>
          <p className="mb-4">
            In no event shall SriTek or its suppliers be liable for any damages
            arising out of the use or inability to use the materials on
            SriTek&apos;s website.
          </p>
        </div>
      </div>
    </div>
  );
}
