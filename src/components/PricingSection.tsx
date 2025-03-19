import Link from 'next/link';

type PricingTierProps = {
  name: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
  highlighted?: boolean;
};

const PricingTier = ({
  name,
  price,
  description,
  features,
  buttonText,
  buttonLink,
  highlighted = false,
}: PricingTierProps) => {
  return (
    <div
      className={`card flex flex-col h-full ${
        highlighted
          ? 'border-2 border-primary-500 relative transform hover:-translate-y-1'
          : 'transform hover:-translate-y-1'
      } transition-all duration-300`}
    >
      {highlighted && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </div>
      )}
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{name}</h3>
        <div className="mb-4">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">{price}</span>
          {price !== 'Custom' && <span className="text-gray-500 dark:text-gray-400">/month</span>}
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg
                className="h-5 w-5 text-primary-500 mr-2 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-600 dark:text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-6 pt-0 mt-auto">
        <Link
          href={buttonLink}
          className={`w-full block text-center py-2 px-4 rounded-md transition-colors duration-300 ${
            highlighted
              ? 'bg-primary-600 hover:bg-primary-700 text-white'
              : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white'
          }`}
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export function PricingSection() {
  const pricingTiers = [
    {
      name: 'Free',
      price: '$0',
      description: 'Basic verification for individuals',
      features: [
        '10 verifications per month',
        'Basic credibility reports',
        'Text verification only',
        'Community support',
      ],
      buttonText: 'Get Started',
      buttonLink: '/signup',
      highlighted: false,
    },
    {
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
      buttonText: 'Subscribe Now',
      buttonLink: '/signup?plan=pro',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Custom solutions for organizations',
      features: [
        'Unlimited verifications',
        'Custom integration options',
        'Dedicated account manager',
        'Unlimited API access',
        'Custom verification workflows',
        'SSO and team management',
      ],
      buttonText: 'Contact Sales',
      buttonLink: '/contact',
      highlighted: false,
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Simple, <span className="text-primary-600 dark:text-primary-400">Transparent</span> Pricing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose the plan that fits your needs. All plans include access to our core verification technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <PricingTier
              key={index}
              name={tier.name}
              price={tier.price}
              description={tier.description}
              features={tier.features}
              buttonText={tier.buttonText}
              buttonLink={tier.buttonLink}
              highlighted={tier.highlighted}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Need a custom solution? Contact our sales team for a personalized quote.
          </p>
          <Link href="/contact" className="btn-secondary inline-block">
            Contact Sales
          </Link>
        </div>
      </div>
    </section>
  );
}