'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function VerifyPage() {
  const [url, setUrl] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [result, setResult] = useState<null | { score: number; details: string[] }>(null);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    setIsVerifying(true);
    setResult(null);

    // Simulate API call with timeout
    setTimeout(() => {
      // Mock verification result
      const mockResult = {
        score: Math.floor(Math.random() * 100),
        details: [
          'Content analyzed using AI pattern recognition',
          'Source credibility evaluation completed',
          'Cross-referenced with verified databases'
        ]
      };
      
      setResult(mockResult);
      setIsVerifying(false);
    }, 2000);
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          <span className="text-primary-600 dark:text-primary-400">Verify</span> Content
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Enter a URL, upload content, or paste text to verify its authenticity.
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <form onSubmit={handleVerify} className="space-y-6">
          <div>
            <label htmlFor="url" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              URL or Text to Verify
            </label>
            <input
              type="text"
              id="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com/article or paste text here"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
              required
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <label className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <input type="checkbox" className="mr-2 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded" />
                Deep analysis (takes longer)
              </label>
            </div>
            <div>
              <button
                type="button"
                className="text-sm text-primary-600 hover:text-primary-500 dark:text-primary-400 mr-4"
                onClick={() => document.getElementById('file-upload')?.click()}
              >
                Upload File
              </button>
              <input id="file-upload" type="file" className="hidden" />
            </div>
          </div>
          
          <button
            type="submit"
            disabled={isVerifying || !url}
            className="w-full btn-primary py-2 px-4 disabled:opacity-50"
          >
            {isVerifying ? 'Verifying...' : 'Verify Now'}
          </button>
        </form>

        {result && (
          <div className="mt-8 p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Verification Result</h3>
              <div className="flex items-center">
                <div className={`h-10 w-10 rounded-full flex items-center justify-center ${result.score > 70 ? 'bg-green-100 text-green-600' : result.score > 40 ? 'bg-yellow-100 text-yellow-600' : 'bg-red-100 text-red-600'}`}>
                  {result.score > 70 ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : result.score > 40 ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </div>
                <span className="ml-2 text-lg font-bold">{result.score}% Authentic</span>
              </div>
            </div>
            
            <div className="space-y-3">
              {result.details.map((detail, index) => (
                <div key={index} className="flex items-start">
                  <svg className="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">{detail}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Want more detailed analysis? <Link href="/pricing" className="text-primary-600 hover:text-primary-500 dark:text-primary-400">Upgrade to Pro</Link>
              </p>
              <div className="flex space-x-4">
                <button className="btn-secondary text-sm py-2 px-4">
                  Download Report
                </button>
                <button className="text-sm text-primary-600 hover:text-primary-500 dark:text-primary-400">
                  Share Result
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}