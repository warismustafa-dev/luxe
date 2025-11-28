'use client'
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { getMediaUrl } from "@/lib/utils";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full container-padding mt-20">
        <div
          className="relative h-[532px] rounded-luxe-xl bg-cover bg-center overflow-hidden"
          style={{
            backgroundImage: "url('/assets/images/Contact-Banner-Img.png')"
          }}
        >
          <div className="absolute inset-0 bg-black/40 rounded-luxe-xl"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <h1 className="luxe-heading-display text-luxe-white uppercase text-center">
              CONTACT US
            </h1>
          </div>
        </div>
      </section>

      {/* Find Us On Map Section */}
      <section className="section-padding container-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="luxe-heading-1 text-luxe-gray-dark uppercase mb-4">
            FIND US ON MAP
          </h2>
          <p className="luxe-text-body-large text-luxe-gray-medium text-center max-w-[1320] mx-auto mb-12">
            Find us on maps to visit our office and start your journey with us today. Let our team bring your dream destinations within reach.
          </p>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="container-padding mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="w-full h-[400px] rounded-luxe-lg overflow-hidden shadow-lg border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.5!2d-16.629129!3d28.291565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDE3JzI5LjYiTiAxNsKwMzcnNDQuOSJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus&q=C.+Hellada,+8.38678+Adeje,+Santa+Cruz+de+Tenerife,+Spain"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Luxe Excursions Tenerife Location - C. Hellada, 8.38678 Adeje, Santa Cruz de Tenerife, Spain"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="container-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 section-gap">
            {/* Left Side - Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full h-16 px-4 border border-luxe-black rounded-luxe-md"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full h-16 px-4 border border-luxe-black rounded-luxe-md"
                      placeholder="Email"
                    />
                  </div>
                </div>

                <div>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full h-[229px] px-4 py-3 border border-luxe-black rounded-luxe-lg resize-y"
                    placeholder="Message"
                  />
                </div>

                <Button
                  type="submit"
                  variant="luxe"
                  className="px-8 py-3"
                >
                  Send
                </Button>
              </form>
            </div>

            {/* Right Side - Contact Information */}
            <div className="space-y-5">
              {/* Phone */}
              <Card className="border xl:max-h-[91px] max-h-fit border-gray-200 rounded-luxe-lg overflow-hidden">
                <CardContent className="p-5 flex items-center gap-4">
                  <div className="w-12 h-12 bg-luxe-gold rounded-luxe-lg flex items-center justify-center flex-shrink-0">
                    <img src={getMediaUrl("/assets/images/Contact-Us-Phone.svg")} alt="phone" />
                  </div>
                  <div>
                    <h3 className="luxe-heading-3 text-luxe-gray-dark mb-2">Phone Number</h3>
                    <p className="luxe-text-body text-luxe-gray-medium">+34 722 645 670</p>
                  </div>
                </CardContent>
              </Card>

              {/* Email - with special background */}
              <Card className="bg-luxe-gold xl:max-h-[91px] max-h-fit border-0 rounded-luxe-lg overflow-hidden">
                <CardContent className="p-5 flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-luxe-lg flex items-center justify-center flex-shrink-0">
                    <img src={getMediaUrl("/assets/images/Contact-Us-Envelope.svg")} alt="email" />
                  </div>
                  <div>
                    <h3 className="luxe-heading-3 text-luxe-gray-light mb-2">Email Address</h3>
                    <p className="luxe-text-body text-luxe-gray-light">luxeexcursionstenerife@gmail.com</p>
                  </div>
                </CardContent>
              </Card>

              {/* Company Address */}
              <Card className="border xl:max-h-[91px] max-h-fit border-gray-200 rounded-luxe-lg overflow-hidden">
                <CardContent className="p-5 flex items-center gap-4">
                  <div className="w-12 h-12 bg-luxe-gold rounded-luxe-lg flex items-center justify-center flex-shrink-0">
                    <img src={getMediaUrl("/assets/images/Contact-Us-Location.svg")} alt="phone" />
                  </div>
                  <div>
                    <h3 className="luxe-heading-3 text-luxe-gray-dark mb-2">Company Address</h3>
                    <p className="luxe-text-body text-luxe-gray-medium">C. Hellada, 8.38678 Adeje, Santa Cruz de Tenerife, Spain</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
