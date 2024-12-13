import React from 'react';
import { Code, Lightbulb, Users, TrendingUp } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Digital Solutions",
      description: "Custom software development and digital transformation strategies tailored to your needs."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation Consulting",
      description: "Strategic guidance to help your business stay ahead in the digital age."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Masterclasses",
      description: "Expert-led training sessions to elevate your team's digital capabilities."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Growth Strategy",
      description: "Data-driven approaches to scale your business and maximize potential."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2e3192] mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions to help your business thrive in the modern world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl bg-white border border-gray-200 hover:border-[#f36b22] transition-all duration-300 hover:shadow-xl"
            >
              <div className="text-[#f36b22] mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#2e3192] mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;