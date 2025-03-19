'use client';

import { PricingSection } from '@/components/PricingSection';
import { CTASection } from '@/components/CTASection';

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          <span className="text-primary-600 dark:text-primary-400">Pricing</span> Plans
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
          Choose the plan that fits your needs. All plans include access to our core verification technology.
        </p>
      </div>
      <PricingSection />
      <CTASection />
    </div>
  );
}