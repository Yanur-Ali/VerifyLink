'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function DemoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    useCase: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      // In a real app, you would send the data to your backend
      console.log('Demo request data:', formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 1500);
  };

  if (submitSuccess) {
    return (
      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
          <div className="mb-6 flex justify-center">
            <div className="h-16 w-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Demo Request Received!</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Thank you for your interest in VerifyLink. Our team will contact you within 24 hours to schedule your personalized demo.
          </p>
          <div className="space-y-4">
            <Link href="/" className="btn-primary w-full block text-center">
              Return to Home
            </Link>
            <Link href="/pricing" className="text-primary-600 hover:text-primary-500 dark:text-primary-400">
              View Pricing Plans
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Request a <span className="text-primary-600 dark:text-primary-400">Demo</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          See how VerifyLink can help your organization combat misinformation with our powerful verification tools.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              
              <div>
                <label htmlFor="useCase" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  How do you plan to use VerifyLink?
                </label>
                <textarea
                  id="useCase"
                  name="useCase"
                  rows={4}
                  value={formData.useCase}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Tell us about your verification needs..."
                ></textarea>
              </div>
              
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary py-2 px-4 disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Request Demo'}
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="mt-12 bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">What to expect in your demo</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <svg className="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-600 dark:text-gray-300">Personalized walkthrough of the VerifyLink platform</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-600 dark:text-gray-300">Live demonstration of our verification technology</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-600 dark:text-gray-300">Q&A session with our product specialists</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-600 dark:text-gray-300">Custom pricing and implementation discussion</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}