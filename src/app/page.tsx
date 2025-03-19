import Link from 'next/link';
import { HeroSection } from '@/components/HeroSection';
import { FeatureSection } from '@/components/FeatureSection';
import { PricingSection } from '@/components/PricingSection';
import { TestimonialSection } from '@/components/TestimonialSection';
import { CTASection } from '@/components/CTASection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <FeatureSection />
      <PricingSection />
      <TestimonialSection />
      <CTASection />
    </div>
  );
}