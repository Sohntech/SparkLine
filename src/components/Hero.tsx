  "use client"

  import { useEffect, useRef } from "react";
  import { Sparkles, ArrowRight } from "lucide-react";
  import { motion, useAnimation } from "framer-motion";
  import { TypeAnimation } from "react-type-animation";
  import Particles from "react-tsparticles";
  import { loadFull } from "tsparticles";

  const Hero = () => {
    const controls = useAnimation();
    const particlesInit = useRef(async (engine : any) => {
      await loadFull(engine);
    });

    useEffect(() => {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    }, [controls]);

    return (
      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#2e3192] to-[#1a1b4b]">
        <Particles
          id="tsparticles"
          init={particlesInit.current}
          options={{
            fullScreen: { enable: false },
            background: { color: { value: "transparent" } },
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: { enable: true, mode: "push" },
                onHover: { enable: true, mode: "repulse" },
                resize: true,
              },
              modes: {
                push: { quantity: 4 },
                repulse: { distance: 200, duration: 0.4 },
              },
            },
            particles: {
              color: { value: "#ffffff" },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: { default: "bounce" },
                random: false,
                speed: 2,
                straight: false,
              },
              number: { density: { enable: true, area: 800 }, value: 100 },
              opacity: { value: 0.6 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 5 } },
            },
            detectRetina: true,
          }}
          className="absolute inset-0"
        />

        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/drxouwbms/image/upload/v1734175022/future_mztxr8.avif')] opacity-30 bg-cover bg-center" />
        </div>

        <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
          <motion.div 
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
          >
            <motion.div
              className="animate-float"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Sparkles className="h-16 w-16 text-[#f36b22] mb-6" />
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-md">
              Empowering Your
              <TypeAnimation
                sequence={[
                  " Vision",
                  2000,
                  " Ambition",
                  2000,
                  " Goals",
                  2000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                className="text-[#f36b22]"
              />
            </h1>

            <p className="text-xl text-gray-300 max-w-2xl mb-12">
              Transform your ideas into reality with our cutting-edge technology, expert guidance, and global reach.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <motion.button 
                className="px-8 py-4 bg-[#f36b22] text-white rounded-full flex items-center gap-2 hover:bg-[#e25b12] transition-all shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
                <ArrowRight className="h-5 w-5" />
              </motion.button>
              <motion.button 
                className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-[#2e3192] transition-all shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 bg-white/10 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Why Choose Us?</h3>
                <p className="text-gray-300 text-sm">
                  Discover the unparalleled advantages of working with our team of experts.
                </p>
              </div>
              <div className="p-6 bg-white/10 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Our Mission</h3>
                <p className="text-gray-300 text-sm">
                  We strive to create innovative solutions tailored to your unique needs.
                </p>
              </div>
              <div className="p-6 bg-white/10 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Join the Future</h3>
                <p className="text-gray-300 text-sm">
                  Step into a world of limitless possibilities with cutting-edge technology.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  };

  export default Hero;
