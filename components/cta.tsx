import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-3xl p-12 text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your project and create something amazing together.
            Our team is ready to bring your vision to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8"
            >
              View Our Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-100">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
              Free consultation
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
              No commitment required
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
              Quick response time
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}