'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function SignupPage() {
  const searchParams = useSearchParams();
  const [selectedPlan, setSelectedPlan] = useState('free');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false);

  useEffect(() => {
    // Get plan from URL query parameter
    const plan = searchParams.get('plan');
    if (plan) {
      setSelectedPlan(plan.toLowerCase());
    }
  }, [searchParams]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
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
      console.log('Signup data:', { ...formData, plan: selectedPlan });
      setIsSubmitting(false);
      setSignupSuccess(true);
    }, 1500);
  };

  const plans = [
    {
      id: 'free',
      name: 'Free',
      price: '$0',
      description: 'Basic verification for individuals',
      features: [
        '10 verifications per month',
        'Basic credibility reports',
        'Text verification only',
        'Community support',
      ],
    },
    {
      id: 'pro',
      name: 'Pro',
      price: '$19',
      description: 'Advanced verification for professionals',
      features: [
        'Unlimited verifications',
        'Detailed credibility reports',
        'Text, image, and video verification',
        'API access (100 requests/day)',
        'Priority support',
      ],
    }
  ];

  if (signupSuccess) {
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
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Account Created Successfully!</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Thank you for signing up for our {selectedPlan === 'pro' ? 'Pro' : 'Free'} plan. We've sent a confirmation email to {formData.email}.
          </p>
          <div className="space-y-4">
            <Link href="/verify" className="btn-primary w-full block text-center">
              Start Verifying Content
            </Link>
            <Link href="/" className="text-primary-600 hover:text-primary-500 dark:text-primary-400">
              Return to Home
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
          Create Your <span className="text-primary-600 dark:text-primary-400">Account</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Join thousands of professionals fighting misinformation with our verification tools.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-6 bg-gray-50 dark:bg-gray-900">
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Selected Plan</h2>
              
              {plans.map(plan => (
                <div 
                  key={plan.id}
                  className={`mb-4 p-4 border rounded-lg cursor-pointer transition-all ${selectedPlan === plan.id ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20' : 'border-gray-200 dark:border-gray-700'}`}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-gray-900 dark:text-white">{plan.name}</h3>
                    <div className="text-lg font-bold text-gray-900 dark:text-white">{plan.price}<span className="text-sm font-normal text-gray-500 dark:text-gray-400">{plan.price !== 'Custom' ? '/month' : ''}</span></div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{plan.description}</p>
                  <ul className="space-y-1">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <svg className="h-4 w-4 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              
              <div className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                Need a custom enterprise solution? <Link href="/contact" className="text-primary-600 hover:text-primary-500 dark:text-primary-400">Contact our sales team</Link>
              </div>
            </div>
            
            <div className="md:w-1/2 p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Your Information</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Full Name
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
                    Email Address
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
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                  />
                  {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
                </div>
                
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                  />
                  {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>}
                </div>
                
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary py-2 px-4 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Creating Account...' : `Sign Up for ${selectedPlan === 'pro' ? 'Pro' : 'Free'} Plan`}
                  </button>
                </div>
                
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-4">
                  Already have an account? <Link href="/login" className="text-primary-600 hover:text-primary-500 dark:text-primary-400">Log in</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}