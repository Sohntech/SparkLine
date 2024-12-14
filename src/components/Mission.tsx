import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Rocket, Globe } from 'lucide-react';

const Mission = () => {
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

  return (
    <section
      id="mission"
      className="relative py-56  bg-white overflow-hidden"
    >
      {/* Animated Neon Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Diagonal neon lines */}
        <div className="absolute w-[200vw] h-[3px] bg-gradient-to-r from-[#2f3193] via-[#f26b23] to-[#2f3193] opacity-70 rotate-45 top-1/3 left-[-50%] animate-line-move"></div>
        <div className="absolute w-[200vw] h-[3px] bg-gradient-to-r from-[#f26b23] via-[#2f3193] to-[#f26b23] opacity-50 rotate-45 top-1/2 left-[-60%] animate-line-move"></div>
        <div className="absolute w-[200vw] h-[3px] bg-gradient-to-r from-[#2f3193] via-[#f26b23] to-[#2f3193] opacity-70 rotate-[-45deg] bottom-1/4 left-[-50%] animate-line-move-reverse"></div>

        {/* Random glowing dots */}
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-gradient-to-br from-[#2f3193] to-[#f26b23] rounded-full blur-lg`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `pulse ${2 + Math.random() * 4}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="container mx-auto px-4 relative z-10"
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#2e3192] mb-4 tracking-wide animated-neon-text">
            Our Mission
          </h2>
          <p className="text-black/50 max-w-3xl mx-auto text-lg">
            To empower businesses through innovative digital solutions and
            transform the way they operate in the modern world.
          </p>
        </motion.div>

        {/* Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              icon: <Target className="h-12 w-12" />,
              title: 'Vision',
              description:
                'To be the catalyst for digital transformation, helping businesses thrive in an ever-evolving technological landscape.',
            },
            {
              icon: <Rocket className="h-12 w-12" />,
              title: 'Innovation',
              description:
                'Pushing boundaries with cutting-edge solutions that solve real-world problems and drive business growth.',
            },
            {
              icon: <Globe className="h-12 w-12" />,
              title: 'Impact',
              description:
                'Creating lasting positive change through digital excellence and knowledge sharing across industries.',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative bg-white/10 bg-opacity-50 backdrop-blur-md rounded-xl p-8 shadow-lg group transform transition-all duration-300 hover:scale-105 hover:shadow-neon"
            >
              {/* Neon Border */}
              <div className="absolute inset-0 rounded-xl border-[1px] border-[#2f3193] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Icon */}
              <div className="text-[#f26b23] mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-[#2e3192] mb-4 tracking-wide">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400">{item.description}</p>

              {/* Animated Neon Line */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/3 h-[2px] bg-gradient-to-r from-[#2f3193] via-[#f26b23] to-[#2f3193] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Mission;
