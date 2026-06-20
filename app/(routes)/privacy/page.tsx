export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
      
      <div className="prose prose-slate max-w-none text-gray-600">
        <p className="mb-6">
          Last updated: June 20, 2026. This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
        <p className="mb-4">
          We collect information that you provide directly to us when you register for an account, place an order, or communicate with us. This may include:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Personal identifiers (Name, email address)</li>
          <li>Payment information (processed securely via Stripe)</li>
          <li>Usage data and cookies for analytics</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
        <p className="mb-4">
          We use the information we collect to provide, maintain, and improve our services, such as:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Processing your transactions and sending confirmations.</li>
          <li>Responding to your comments and questions.</li>
          <li>Developing new products and services.</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. Data Security</h2>
        <p className="mb-4">
          We implement appropriate technical and organizational measures to protect the security of your personal information. However, please note that no method of transmission over the Internet is 100% secure.
        </p>

        <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-sm text-gray-500">
            <strong>Note:</strong> This is a portfolio project. No real user data is being stored or sold. All data shown is for demonstration purposes only.
          </p>
        </div>
      </div>
    </div>
  );
}