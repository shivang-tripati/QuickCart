import Link from "next/link";
import { 
  Code2, 
  Database, 
  ShieldCheck, 
  Globe, 
  Server, 
  LayoutDashboard, 
  ShoppingCart, 
  CreditCard, 
  Image as ImageIcon, 
  CheckCircle2, 
  ExternalLink,
  Terminal
} from "lucide-react";

export default function ProjectShowcasePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
      
      {/* 1. Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
          QuickCart – Full Stack E-Commerce Platform
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          QuickCart is a production-style e-commerce platform built to demonstrate full-stack engineering skills, modern architecture, database design, authentication, payments, and cloud deployment.
        </p>
        
        {/* Tech Stack Badges */}
        <div className="flex flex-wrap justify-center gap-3 pt-4">
          {["Next.js 14", "TypeScript", "PostgreSQL", "Prisma", "Clerk", "Stripe", "Cloudinary", "Docker"].map((tech) => (
            <span key={tech} className="px-4 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium border border-gray-200">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* 2. Project Overview */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Storefront Card */}
        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
            <ShoppingCart size={24} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Customer Storefront</h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> Browse products with category filtering</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> Detailed product views with variants</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> Persistent shopping cart</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> Secure Stripe checkout flow</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> Fully responsive mobile-first design</li>
          </ul>
        </div>

        {/* Admin Dashboard Card */}
        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-6">
            <LayoutDashboard size={24} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Admin Dashboard</h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> CRUD operations for Products & Categories</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> Billboard & Banner management</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> Color and Size variant configuration</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> Cloudinary image upload integration</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> Protected routes via Clerk Auth</li>
          </ul>
        </div>
      </section>

      {/* 3. Architecture & Infrastructure */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Architecture & Infrastructure</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Frontend */}
          <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
            <Code2 className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="font-bold text-gray-900 mb-2">Frontend</h3>
            <p className="text-sm text-gray-600">Next.js 14 App Router, TypeScript, Tailwind CSS, Responsive UI components.</p>
          </div>

          {/* Backend & Data */}
          <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
            <Database className="w-8 h-8 text-green-600 mb-4" />
            <h3 className="font-bold text-gray-900 mb-2">Data Layer</h3>
            <p className="text-sm text-gray-600">PostgreSQL database, Prisma ORM for type-safe queries, Relational schema design.</p>
          </div>

          {/* Auth & Security */}
          <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
            <ShieldCheck className="w-8 h-8 text-red-600 mb-4" />
            <h3 className="font-bold text-gray-900 mb-2">Authentication</h3>
            <p className="text-sm text-gray-600">Clerk Authentication, Protected admin routes, Session management.</p>
          </div>

          {/* Payments & Media */}
          <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
            <CreditCard className="w-8 h-8 text-purple-600 mb-4" />
            <h3 className="font-bold text-gray-900 mb-2">Integrations</h3>
            <p className="text-sm text-gray-600">Stripe Payment Gateway, Cloudinary Image Hosting, Secure asset management.</p>
          </div>
        </div>
      </section>

      {/* 4. Deployment Details */}
      <section className="bg-slate-900 text-white rounded-2xl p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-3 text-blue-400">
              <Server size={32} />
              <h2 className="text-2xl font-bold">Deployment & DevOps</h2>
            </div>
            <p className="text-slate-300">
              The application is containerized and deployed on a VPS using modern DevOps practices to ensure reliability and security.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <Terminal size={16} /> Docker Containerization
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <Globe size={16} /> Traefik Reverse Proxy
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <ShieldCheck size={16} /> HTTPS (Let&apos;s Encrypt)
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <Database size={16} /> Managed PostgreSQL
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Key Features Grid */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Features</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            "Product Management", "Category Filtering", "Billboard Banners", 
            "Color & Size Variants", "Clerk Authentication", "Image Uploads", 
            "Shopping Cart", "Stripe Checkout", "Responsive Design", "Docker Deployed"
          ].map((feature) => (
            <div key={feature} className="flex items-center gap-2 p-3 bg-white border rounded-lg shadow-sm">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
              <span className="text-sm font-medium text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Project Links */}
      <section className="text-center space-y-8">
        <h2 className="text-3xl font-bold text-gray-900">Explore the Project</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          
          {/* Storefront Link */}
          <Link href="/" className="group flex flex-col items-center p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-500 transition-colors w-full sm:w-64">
            <ShoppingCart className="w-10 h-10 text-gray-400 group-hover:text-blue-600 mb-3 transition-colors" />
            <span className="font-bold text-lg text-gray-900">Storefront</span>
            <span className="text-sm text-gray-500 mt-1">Live Demo</span>
          </Link>

          {/* Admin Link */}
          <a href="https://ecom-admin.duckdns.org" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-purple-500 transition-colors w-full sm:w-64">
            <LayoutDashboard className="w-10 h-10 text-gray-400 group-hover:text-purple-600 mb-3 transition-colors" />
            <span className="font-bold text-lg text-gray-900">Admin Dashboard</span>
            <span className="text-sm text-gray-500 mt-1">ecom-admin.duckdns.org</span>
            <ExternalLink className="w-4 h-4 text-gray-400 mt-2 group-hover:text-purple-600" />
          </a>

        </div>
        
        {/* Demo Credentials Note */}
        <div className="inline-block px-4 py-2 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-yellow-800">
          <strong>Demo Access:</strong> Use the provided test credentials in the Admin Dashboard login screen.
        </div>
      </section>

      {/* 7. Technical Highlights */}
      <section className="border-t pt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-gray-600">
          <div className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
            <p><strong>Component-Driven Architecture:</strong> Reusable UI components built with Tailwind CSS.</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
            <p><strong>Type-Safe Database:</strong> Prisma ORM ensuring data integrity and developer experience.</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
            <p><strong>Server-Side Rendering:</strong> Leveraging Next.js for optimal SEO and performance.</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
            <p><strong>Containerization:</strong> Dockerized environment for consistent development and production.</p>
          </div>
        </div>
      </section>

      {/* 8. Footer Note */}
      <div className="text-center pt-12 border-t">
        <p className="text-sm text-gray-500 italic max-w-2xl mx-auto">
          &ldquo;QuickCart was developed as a portfolio project to demonstrate full-stack development capabilities, software architecture principles, database design, cloud deployment, and modern web engineering practices.&rdquo;
        </p>
      </div>

    </div>
  );
}