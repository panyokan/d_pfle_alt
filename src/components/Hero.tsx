import {
  Users,
  Clock,
  ShieldCheck,
  Home,
  ArrowRight,
  Phone,
  MapPin,
  Building,
  MessageCircle,
  Send,
} from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";

// Desktop images
import hero1 from "@/assets/hero.jpg";
import hero2 from "@/assets/herohero.jpeg";
import hero3 from "@/assets/hug.jpeg";

// Mobile images
import heroMobile1 from "@/assets/newhero.jpeg";
import heroMobile2 from "@/assets/newhero2.jpeg";
import heroMobile3 from "@/assets/newhero4.jpeg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const desktopImages = [hero1, hero2, hero3];
  const mobileImages = [heroMobile1, heroMobile2, heroMobile3];

  const [currentDesktop, setCurrentDesktop] = useState(0);
  const [currentMobile, setCurrentMobile] = useState(0);

  const navigate = useNavigate();
  
  const handleContactClick = () => {
    navigate('/contact');
  };

  // Image rotation
  useEffect(() => {
    const d = setInterval(() => {
      setCurrentDesktop((p) => (p + 1) % desktopImages.length);
    }, 2000); // Increased from 3000 to 5000ms for more time to appreciate each image
    const m = setInterval(() => {
      setCurrentMobile((p) => (p + 1) % mobileImages.length);
    }, 2000); // Increased from 3000 to 5000ms for more time to appreciate each image
    return () => {
      clearInterval(d);
      clearInterval(m);
    };
  }, []);

  // Parallax scroll
  const { scrollY } = useScroll();
  const yDesktop = useTransform(scrollY, [0, 500], [0, 50]);
  const yMobile = useTransform(scrollY, [0, 500], [0, 30]);

  // Mouse motion
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX / window.innerWidth - 0.5);
    mouseY.set(e.clientY / window.innerHeight - 0.5);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative flex flex-col h-screen overflow-hidden font-montserrat"
    >
      {/* ======= BACKGROUNDS ======= */}
      {/* Mobile */}
      <div className="absolute inset-0 md:hidden overflow-hidden">
        {mobileImages.map((img, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${img})`,
              y: i === currentMobile ? yMobile : 0,
            }}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{
              opacity: i === currentMobile ? 1 : 0,
              scale: i === currentMobile ? 1.02 : 1.08,
            }}
            transition={{ 
              duration: 2.5, 
              ease: [0.25, 0.1, 0.25, 1],
              opacity: { duration: 1.8 }
            }}
          >
            {/* Made overlay lighter by reducing opacity */}
            <div className="absolute inset-0 bg-gradient-to-b from-deep-navy/65 via-deep-navy/50 to-deep-navy/75"></div>
          </motion.div>
        ))}
        {/* Mobile accent blur - made brighter */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] bg-[#00b140]/15 blur-[100px] rounded-full"></div>
      </div>

      {/* Desktop */}
      <div className="absolute inset-0 hidden md:block overflow-hidden">
        {desktopImages.map((img, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${img})`,
              y: i === currentDesktop ? yDesktop : 0,
            }}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{
              opacity: i === currentDesktop ? 1 : 0,
              scale: i === currentDesktop ? 1.05 : 1.1,
            }}
            transition={{ 
              duration: 2.5, 
              ease: [0.25, 0.1, 0.25, 1],
              opacity: { duration: 1.8 }
            }}
          >
            {/* Made overlay lighter by reducing opacity */}
            <div className="absolute inset-0 bg-gradient-to-r from-deep-navy/70 via-deep-navy/55 to-deep-navy/35"></div>
          </motion.div>
        ))}
        {/* Desktop accent blur - made brighter */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] bg-[#00b140]/15 blur-[120px] rounded-full"></div>
      </div>

      {/* ======= CONTENT ======= */}
      <div className="relative z-[2] flex flex-col justify-between h-full container mx-auto px-6 py-16 md:py-20">
        {/* ===== DESKTOP SECTION ===== */}
        <div className="hidden md:block max-w-4xl mt-48">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex items-center space-x-3 mb-6 md:mb-8"
          >
            <div className="flex items-center space-x-2 bg-white/25 backdrop-blur-md rounded-full px-5 py-3 border border-white/30 shadow-lg">
              <ShieldCheck className="w-5 h-5 text-[#00b140]" fill="currentColor" />
              <span className="text-white font-semibold text-sm tracking-wide">
                Zertifiziert nach SGB XI/XII
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-6 md:mb-8 space-y-4 mt-8 md:mt-0"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
              <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent animate-gradient">
Qualität ist              </span>
              <span className="block bg-gradient-to-r from-[#00b140] via-[#00d950] to-[#00b140]/80 bg-clip-text text-transparent relative z-10 animate-gradient">
                kein zufall 
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#00b140] to-[#00b140]/80 rounded-full"></div>
          </motion.div>

          {/* Info Boxes */}
          <div className="grid grid-cols-3 gap-6 pt-12 border-t border-white/30">
            {[
              { icon: <Home className="w-6 h-6 text-white" />, title: "Wie Zuhause", desc: "Betreuung in vertrauter Umgebung" },
              { icon: <Clock className="w-6 h-6 text-white" />, title: "24/7 Für Sie da", desc: "Rund um die Uhr Betreuung" },
              { icon: <Users className="w-6 h-6 text-white" />, title: "Multikulturell", desc: "Vielfältiges Betreuerteam" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 + i * 0.2 }}
                className="flex items-center space-x-4 p-4 rounded-2xl bg-white/8 backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-[#00b140] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div>
                  <div className="text-white font-bold text-base group-hover:text-[#00b140] transition-colors duration-300">
                    {item.title}
                  </div>
                  <div className="text-gray-300 text-sm">{item.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ===== MOBILE SECTION ===== */}
        <div className="md:hidden flex flex-col justify-center items-center h-full px-4 pt-8 pb-16">
          {/* Mobile Content Container */}
          <div className="flex flex-col items-center text-center space-y-8 max-w-sm mx-auto">
            {/* Trust Badge Mobile */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 shadow-lg">
                <ShieldCheck className="w-4 h-4 text-[#00b140]" fill="currentColor" />
                <span className="text-white font-medium text-xs tracking-wide">
                  Zertifiziert nach SGB XI/XII
                </span>
              </div>
            </motion.div>

            {/* Mobile Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-3"
            >
              <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight">
                <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent animate-gradient">
                  Mit Herz
                </span>
                <span className="block bg-gradient-to-r from-[#00b140] via-[#00d950] to-[#00b140]/80 bg-clip-text text-transparent animate-gradient">
                  für Menschen
                </span>
              </h1>
              <div className="w-16 h-1 bg-gradient-to-r from-[#00b140] to-[#00b140]/80 rounded-full mx-auto"></div>
            </motion.div>

            {/* Mobile Info Cards */}
            <div className="grid grid-cols-1 gap-3 w-full">
              {[
                { icon: <Home className="w-5 h-5 text-white" />, title: "Wie Zuhause", desc: "Betreuung in vertrauter Umgebung" },
                { icon: <Clock className="w-5 h-5 text-white" />, title: "24/7 Für Sie da", desc: "Rund um die Uhr Betreuung" },
                { icon: <Users className="w-5 h-5 text-white" />, title: "Multikulturell", desc: "Vielfältiges Betreuerteam" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
                  className="flex items-center space-x-4 p-4 rounded-2xl bg-white/12 backdrop-blur-sm border border-white/15 hover:bg-white/18 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-[#00b140] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="text-left flex-1">
                    <div className="text-white font-semibold text-base group-hover:text-[#00b140] transition-colors duration-300">
                      {item.title}
                    </div>
                    <div className="text-gray-300 text-sm leading-tight mt-1">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Contact Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="text-center"
            >
              <a 
                href="tel:+4961038025731" 
                className="text-white/80 hover:text-[#00b140] text-sm font-medium flex items-center justify-center space-x-2 transition-colors duration-300 hover:scale-105 transform"
              >
                <Phone className="w-4 h-4" />
                <span>06103 - 802 57 31</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Gradient */}
      <div className="md:hidden absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-deep-navy via-deep-navy/50 to-transparent pointer-events-none"></div>

      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientMove 6s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;