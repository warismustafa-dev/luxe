import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'CEO, TechStartup Inc.',
      content: 'InnovateTech transformed our vision into reality. Their attention to detail and technical expertise exceeded our expectations. The team delivered on time and within budget.',
      rating: 5,
      company: 'TechStartup Inc.'
    },
    {
      name: 'Marcus Johnson',
      role: 'CTO, DataFlow Solutions',
      content: 'Working with InnovateTech was a game-changer for our business. They built a scalable platform that has helped us grow from 1,000 to 50,000 users seamlessly.',
      rating: 5,
      company: 'DataFlow Solutions'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, HealthTech Pro',
      content: 'The mobile app they developed for us has received outstanding reviews. Their UI/UX design skills are top-notch, and the technical implementation was flawless.',
      rating: 5,
      company: 'HealthTech Pro'
    },
    {
      name: 'David Chen',
      role: 'VP Engineering, FinanceFirst',
      content: 'InnovateTech&apos;s cloud infrastructure setup saved us months of development time. Their expertise in AWS and modern deployment practices is exceptional.',
      rating: 5,
      company: 'FinanceFirst'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
              {' '}Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what some of our amazing clients
            have to say about working with InnovateTech.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-blue-600 mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  &quot;{testimonial.content}&quot;
                </p>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                    <div className="text-gray-500 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}