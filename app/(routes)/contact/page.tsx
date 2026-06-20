"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Side: Contact Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h1>
          <p className="text-lg text-gray-600 mb-8">
            Have questions about our tech stack or want to discuss a potential collaboration? 
            We&apos;d love to hear from you.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Email</h3>
                <p className="text-gray-600">hello@quickcart-demo.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Office</h3>
                <p className="text-gray-600">123 Tech Valley, Digital City, CA 94043</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          {status === "success" ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Message Sent!</h3>
              <p className="text-gray-600 mt-2">Thanks for reaching out. This is a demo, so no email was actually sent.</p>
              <button onClick={() => setStatus("idle")} className="mt-6 text-blue-600 font-medium hover:underline">Send another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input type="text" id="name" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="John Doe" />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" id="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea id="message" rows={4} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="How can we help you?"></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === "submitting"}
                className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors disabled:opacity-50"
              >
                {status === "submitting" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}