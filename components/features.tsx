import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Code, 
  Smartphone, 
  Cloud, 
  Palette, 
  Zap, 
  Shield,
  ArrowRight
} from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, responsive websites built with the latest technologies for optimal performance.',
      features: ['React & Next.js', 'TypeScript', 'API Integration', 'SEO Optimized']
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications that engage users and drive results.',
      features: ['iOS & Android', 'React Native', 'App Store Ready', 'Push Notifications']
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions for modern businesses.',
      features: ['AWS & Azure', 'Auto Scaling', 'Load Balancing', '99.9% Uptime']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that convert visitors into customers.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Lightning-fast applications optimized for speed and user experience.',
      features: ['Core Web Vitals', 'Caching', 'CDN Integration', 'Performance Monitoring']
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Enterprise-grade security measures to protect your data and users.',
      features: ['SSL Certificates', 'Data Encryption', 'Security Audits', 'GDPR Compliant']
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
              {' '}InnovateTech?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine technical expertise with creative vision to deliver solutions 
            that exceed expectations and drive real business results.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <feature.icon className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-xl font-bold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">{feature.description}</p>
                <div className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <ArrowRight className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}