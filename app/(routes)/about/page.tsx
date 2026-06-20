import { Code2, Database, Globe, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
          Building the Future of E-Commerce
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          QuickCart is a demonstration of modern web architecture, blending 
          performance, scalability, and beautiful design.
        </p>
      </div>

      {/* Mission & Tech Stack Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            This platform was built to showcase the power of the 
            <span className="font-semibold text-black"> Modular Monolith</span> architecture. 
            By leveraging Next.js for the frontend and a robust backend structure, 
            we ensure that every interaction is seamless and every transaction is secure.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-800">Next.js 14</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-800">TypeScript</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-800">Prisma ORM</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-800">Tailwind CSS</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Code2 className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="font-bold text-gray-900">Clean Code</h3>
            <p className="text-sm text-gray-500 mt-1">Maintainable and scalable architecture.</p>
          </div>
          <div className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Database className="w-8 h-8 text-green-600 mb-3" />
            <h3 className="font-bold text-gray-900">Robust Data</h3>
            <p className="text-sm text-gray-500 mt-1">Powered by PostgreSQL & Prisma.</p>
          </div>
          <div className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Globe className="w-8 h-8 text-purple-600 mb-3" />
            <h3 className="font-bold text-gray-900">Global Reach</h3>
            <p className="text-sm text-gray-500 mt-1">Optimized for performance worldwide.</p>
          </div>
          <div className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <ShieldCheck className="w-8 h-8 text-red-600 mb-3" />
            <h3 className="font-bold text-gray-900">Secure</h3>
            <p className="text-sm text-gray-500 mt-1">Enterprise-grade security standards.</p>
          </div>
        </div>
      </div>
    </div>
  );
}