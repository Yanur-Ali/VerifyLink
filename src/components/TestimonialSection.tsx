import Image from 'next/image';

type TestimonialProps = {
  quote: string;
  author: string;
  role: string;
  company: string;
};

const Testimonial = ({ quote, author, role, company }: TestimonialProps) => {
  return (
    <div className="card hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col h-full">
        <div className="mb-6">
          <svg className="h-8 w-8 text-primary-500 mb-4" fill="currentColor" viewBox="0 0 32 32">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          <p className="text-gray-600 dark:text-gray-300 italic">{quote}</p>
        </div>
        <div className="mt-auto">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-primary-600 dark:text-primary-400 font-bold text-lg">
              {author.charAt(0)}
            </div>
            <div className="ml-3">
              <h4 className="font-semibold text-gray-900 dark:text-white">{author}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {role}, {company}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export function TestimonialSection() {
  const testimonials = [
    {
      quote: "VerifyLink has transformed how our newsroom verifies online content. The AI-powered analysis saves us hours of manual verification work and helps us maintain our journalistic integrity.",
      author: "Sarah Johnson",
      role: "Editor-in-Chief",
      company: "Global News Network"
    },
    {
      quote: "As a fact-checker, I rely on VerifyLink daily. The detailed credibility reports and source verification have improved our accuracy by over 40%.",
      author: "Michael Chen",
      role: "Lead Fact-Checker",
      company: "Truth Initiative"
    },
    {
      quote: "We integrated VerifyLink's API into our educational platform, and it's been a game-changer for teaching students about digital literacy and critical thinking.",
      author: "Dr. Emily Rodriguez",
      role: "Director of Digital Education",
      company: "National Education Alliance"
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted by <span className="text-primary-600 dark:text-primary-400">Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            See how organizations are using VerifyLink to combat misinformation and verify content authenticity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
            />
          ))}
        </div>

        <div className="mt-16">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {['TechCorp', 'MediaGroup', 'EduSystems', 'NewsDaily', 'FactCheck'].map((company, index) => (
              <div key={index} className="text-xl font-bold text-gray-400 dark:text-gray-500">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}