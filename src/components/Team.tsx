import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const Team = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const team = [
    {
      name: "Seydina Mouhammad Diop",
      role: "Front End Developer/UI/UX Designer",
      image: "https://res.cloudinary.com/drxouwbms/image/upload/v1734106807/seydina_ipucvx.png",
      bio: "Digital transformation expert"
    },
    {
      name: "Serigne Fallou Seck",
      role: "Back End Developer/Devops",
      image: "https://res.cloudinary.com/drxouwbms/image/upload/v1734106849/fallou_rjjhkg.png",
      bio: "Full-stack developer and cloud architecture specialist with a passion for scalable solutions."
    },
    {
      name: "Fanta Ndao Tine",
      role: "Full-stack developer",
      image: "https://res.cloudinary.com/drxouwbms/image/upload/v1734106808/fanta_vadbzq.png",
      bio: "Innovation strategist focusing on emerging technologies and digital transformation."
    },
    {
      name: "Ndiaga Lo",
      role: "Front End Developer/UI/UX Designer",
      image: "https://res.cloudinary.com/drxouwbms/image/upload/v1732391040/h3gxu5c7wsfkmwbbkfiq.png",
      bio: "Digital transformation expert"
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="container mx-auto px-4"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2e3192] mb-4">Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the innovative minds behind SPARK Consulting
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2e3192]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex justify-center space-x-4 mb-4">
                      <SocialIcon icon={<Linkedin />} />
                      <SocialIcon icon={<Twitter />} />
                      <SocialIcon icon={<Mail />} />
                    </div>
                    <p className="text-white text-sm">{member.bio}</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold text-[#2e3192]">{member.name}</h3>
                <p className="text-[#f36b22]">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <a
    href="#"
    className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#2e3192] transition-colors duration-300"
  >
    {icon}
  </a>
);

export default Team;