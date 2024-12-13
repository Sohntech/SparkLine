import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Rocket, Globe } from 'lucide-react';

const Mission = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="mission" className="py-20 bg-gradient-to-br from-[#2e3192]/5 to-[#f36b22]/5">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="container mx-auto px-4"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2e3192] mb-4">Our Mission</h2>
          <p className="text-grey-300 max-w-3xl mx-auto text-lg">
            To empower businesses through innovative digital solutions and transform the way they operate in the modern world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              icon: <Target className="h-12 w-12" />,
              title: "Vision",
              description: "To be the catalyst for digital transformation, helping businesses thrive in an ever-evolving technological landscape."
            },
            {
              icon: <Rocket className="h-12 w-12" />,
              title: "Innovation",
              description: "Pushing boundaries with cutting-edge solutions that solve real-world problems and drive business growth."
            },
            {
              icon: <Globe className="h-12 w-12" />,
              title: "Impact",
              description: "Creating lasting positive change through digital excellence and knowledge sharing across industries."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <div className="text-[#f36b22] mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-2xl font-semibold text-[#2e3192] mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Mission;