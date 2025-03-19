import Link from 'next/link';
// Removed unused Image import

export function HeroSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-50 to-white dark:from-primary-900 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
              <span className="text-primary-600 dark:text-primary-400">Verify</span> the truth behind
              <br />
              online content
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
              Our AI-powered platform helps you determine the authenticity of text, images, and videos in real-time. Fight misinformation with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/verify" 
                className="btn-primary text-center flex items-center justify-center focus:ring-2 focus:ring-primary-400 focus:outline-none relative z-10"
                aria-label="Verify content now"
              >
                <span>Verify Content Now</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link 
                href="/pricing" 
                className="btn-secondary text-center focus:ring-2 focus:ring-secondary-400 focus:outline-none relative z-10"
                aria-label="View pricing plans"
              >
                View Pricing
              </Link>
            </div>
            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No credit card required for free tier</span>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 opacity-20 rounded-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-md">
                  <h3 className="text-xl font-semibold mb-4">Content Verification Demo</h3>
                  <div className="flex items-center justify-center mb-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">Paste a URL, upload content, or enter text to verify its authenticity in seconds.</p>
                  <Link 
                    href="/verify" 
                    className="btn-primary w-full block text-center focus:ring-2 focus:ring-primary-400 focus:outline-none relative z-10"
                    aria-label="Try the verification demo"
                  >
                    Try Demo
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary-500 rounded-full opacity-20"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary-500 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}