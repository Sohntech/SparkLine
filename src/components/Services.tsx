import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Lightbulb, Users, TrendingUp } from 'lucide-react';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Digital Solutions',
      description:
        'Custom software development and digital transformation strategies tailored to your needs.',
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Innovation Consulting',
      description:
        'Strategic guidance to help your business stay ahead in the digital age.',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Masterclasses',
      description:
        'Expert-led training sessions to elevate your team\'s digital capabilities.',
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Growth Strategy',
      description:
        'Data-driven approaches to scale your business and maximize potential.',
    },
  ];

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-56  bg-gray-50 overflow-hidden"
    >
      {/* Neon Animated Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-[200vw] h-[3px] bg-gradient-to-r from-[#2f3193] via-[#f26b23] to-[#2f3193] opacity-70 rotate-45 top-1/3 left-[-50%] animate-line-move"></div>
        <div className="absolute w-[200vw] h-[3px] bg-gradient-to-r from-[#f26b23] via-[#2f3193] to-[#f26b23] opacity-50 rotate-[-45deg] top-1/2 left-[-50%] animate-line-move"></div>
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-br from-[#2f3193] to-[#f26b23] rounded-full blur-lg"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `pulse ${2 + Math.random() * 4}s infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Section Content */}
      <motion.div
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="container mx-auto px-4 relative z-10"
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#2f3193] mb-4 tracking-wide animated-neon-text">
            Our Services
          </h2>
          <p className="text-black/50 max-w-3xl mx-auto text-lg">
            Comprehensive digital solutions to help your business thrive in the modern world.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative bg-white/10 bg-opacity-50 backdrop-blur-md rounded-xl p-8 shadow-lg group transform transition-all duration-300 hover:scale-105 hover:shadow-neon"
            >
              <div className="absolute inset-0 rounded-xl border-[1px] border-[#2f3193] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="text-[#f26b23] mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              <h3 className="text-2xl font-semibold text-[#2f3193] mb-4 tracking-wide">
                {service.title}
              </h3>

              <p className="text-gray-400">{service.description}</p>

              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/3 h-[2px] bg-gradient-to-r from-[#2f3193] via-[#f26b23] to-[#2f3193] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
