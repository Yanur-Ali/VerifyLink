import Link from 'next/link';

export function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-800 dark:to-secondary-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-2/3 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to verify content with confidence?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl">
              Join thousands of professionals who trust VerifyLink to combat misinformation and verify content authenticity.
            </p>
          </div>
          <div className="lg:w-1/3 flex flex-col sm:flex-row lg:flex-col gap-4">
            <Link 
              href="/signup" 
              className="px-6 py-3 bg-white text-primary-600 font-semibold rounded-md hover:bg-gray-100 transition-colors duration-300 text-center"
            >
              Get Started for Free
            </Link>
            <Link 
              href="/demo" 
              className="px-6 py-3 bg-primary-700 text-white font-semibold rounded-md hover:bg-primary-800 transition-colors duration-300 text-center"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}