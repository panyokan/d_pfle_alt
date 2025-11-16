import { Users, Award, Star, Calendar, ShieldCheck, Heart, Clock, ArrowRight, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import magdalenaImage from "@/assets/_ (1).jpeg";
import puneetImage from "@/assets/ismim.jpeg"; 
import { useNavigate } from "react-router-dom";

const AnimatedCounter = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration, hasStarted]);

  const startAnimation = () => {
    if (!hasStarted) {
      setHasStarted(true);
    }
  };

  return { count, startAnimation };
};

const TeamSection = () => {
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const teamRef = useRef(null);
  const isTeamInView = useInView(teamRef, { once: true, margin: "-100px" });
  const ctaRef = useRef(null);
  const isCtaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  const navigate = useNavigate();
  

  const handleLearnMoreClick = () => {
    navigate('/services');
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  const teamStats = [
    {
      icon: Award,
      target: 25,
      suffix: "+",
      label: "Years of experience",
      description: "In outpatient care",
      duration: 2000,
    },
    {
      icon: Star,
      target: 100,
      suffix: "%",
      label: "Satisfaction",
      description: "Our customers rate us",
      duration: 2000,
    },
    {
      icon: Clock,
      target: 24,
      suffix: "/7",
      label: "Availability",
      description: "Available for you around the clock",
      duration: 2000,
    },
  ];

  const teamMembers = [
    {
      name: "Magdalena Glowa",
      role: "Geschäftsführerin & Pflegedienstleiterin",
      qualification: "Examinierte Altenpflegerin",
      experience: "15+ Jahre Erfahrung",
      specialties: ["Pflegemanagement", "Qualitätssicherung", "Teamleitung"],
      description:
        "Mit über 15 Jahren Erfahrung in der Pflegebranche bringt Magdalena umfassendes Fachwissen und Leidenschaft für die Betreuung älterer Menschen mit. Ihre Expertise in Pflegemanagement und Qualitätssicherung garantiert höchste Standards in der Patientenversorgung.",
      image: magdalenaImage,
    },
    {
      name: "Puneet Kaur Parmar",
      role: "Geschäftsführerin & Stellv. Pflegedienstleiterin",
      qualification: "Krankenschwester",
      experience: "12+ Jahre Erfahrung",
      specialties: ["Medizinische Pflege", "Ausbildung", "Pflegeplanung"],
      description:
        "Puneet verfügt über 12 Jahre Erfahrung als Krankenschwester und kombiniert medizinisches Fachwissen mit empathischer Patientenbetreuung. Ihr Fokus liegt auf der kontinuierlichen Weiterbildung des Teams und der Entwicklung individueller Pflegekonzepte.",
      image: puneetImage,
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
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
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const statsVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8 
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const fadeInUp = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-[#00b140]/10 text-[#00b140] px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            <Users className="w-4 h-4" />
            <span>Unser Team</span>
          </motion.div>
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Vertrauen Sie den Experten
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Erfahrene Fachkräfte mit Leidenschaft für die Pflege - seit über 25 Jahren vertrauen uns Familien
          </motion.p>
        </motion.div>

        {/* Team Members Grid - 2 columns on desktop */}
        <motion.div
          ref={teamRef}
          initial="hidden"
          animate={isTeamInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
            >
              {/* Image Section */}
              <motion.div 
                className="h-80 relative overflow-hidden bg-gray-100"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '50% 20%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <motion.div 
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full border border-[#00b140]/30 shadow-md"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                >
                  <span className="text-sm font-bold text-[#00b140]">
                    Geschäftsführung
                  </span>
                </motion.div>
              </motion.div>

              {/* Content Section */}
              <div className="p-6 flex-1 flex flex-col">
                {/* Name and Role */}
                <div className="text-center mb-4">
                  <motion.h3 
                    className="text-xl font-bold text-gray-900 mb-1"
                    whileHover={{ color: "#00b140" }}
                    transition={{ duration: 0.2 }}
                  >
                    {member.name}
                  </motion.h3>
                  <motion.p 
                    className="text-[#00b140] font-semibold text-sm mb-3"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {member.role}
                  </motion.p>
                  
                  {/* Qualifications */}
                  <motion.div 
                    className="flex flex-col items-center justify-center space-y-2 text-sm"
                    variants={containerVariants}
                  >
                    <motion.div 
                      variants={itemVariants}
                      className="flex items-center space-x-2 bg-[#00b140]/5 px-3 py-1 rounded-full"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 177, 64, 0.1)" }}
                      transition={{ duration: 0.2 }}
                    >
                      <Award className="w-4 h-4 text-[#00b140]" />
                      <span className="text-gray-700 font-medium">{member.qualification}</span>
                    </motion.div>
                    <motion.div 
                      variants={itemVariants}
                      className="flex items-center space-x-2 bg-[#00b140]/5 px-3 py-1 rounded-full"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 177, 64, 0.1)" }}
                      transition={{ duration: 0.2 }}
                    >
                      <Calendar className="w-4 h-4 text-[#00b140]" />
                      <span className="text-gray-700 font-medium">{member.experience}</span>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Description */}
                <motion.div 
                  className="mb-6 flex-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <p className="text-gray-600 text-sm leading-relaxed text-center">
                    {member.description}
                  </p>
                </motion.div>
              </div>

              {/* Decorative Bottom Border */}
              <motion.div 
                className="h-1.5 bg-gradient-to-r from-[#00b140] to-[#00b140]/70"
                whileInView={{ width: "100%" }}
                initial={{ width: "0%" }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Team Stats */}
        <motion.div
          ref={statsRef}
          initial="hidden"
          animate={isStatsInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {teamStats.map((stat, index) => {
            const { count, startAnimation } = AnimatedCounter({
              target: stat.target,
              duration: stat.duration,
            });

            if (isStatsInView) {
              startAnimation();
            }

            return (
              <motion.div
                key={index}
                variants={statsVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <motion.div 
                  className="w-14 h-14 bg-[#00b140] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <stat.icon className="w-7 h-7 text-white" />
                </motion.div>
                <motion.div 
                  className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 100 }}
                >
                  {count}
                  {stat.suffix}
                </motion.div>
                <motion.div 
                  className="font-bold text-gray-800 mb-1 text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {stat.label}
                </motion.div>
                <motion.p 
                  className="text-xs text-gray-600 font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  {stat.description}
                </motion.p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          ref={ctaRef}
          initial="hidden"
          animate={isCtaInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center"
        >
          <motion.div 
            variants={fadeInUp}
            className="mb-6"
          >
            <motion.h3 
              variants={fadeInUp}
              className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4"
            >
              Bereit für ein persönliches Gespräch?
            </motion.h3>
            <motion.p 
              variants={fadeInUp}
              className="text-gray-600 max-w-2xl mx-auto text-lg"
            >
              Lernen Sie unser Team persönlich kennen und erfahren Sie, wie wir Ihnen helfen können.
            </motion.p>
          </motion.div>
          <motion.div 
            variants={containerVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto"
          >
            <motion.div variants={itemVariants}>
              <Button 
                size="lg"
                className="text-lg px-12 py-6 bg-white text-[#00b140] hover:bg-[#00b140] hover:text-white font-semibold border-2 border-[#00b140] transition-all duration-300 shadow-lg w-full group/btn relative overflow-hidden hover:shadow-xl hover:border-[#00b140]"
                onClick={(e) => {
                  e.stopPropagation();
                  handleLearnMoreClick();
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Animated background on hover */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#00b140] via-[#00a138] to-[#00b140] transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 origin-left"></span>
                
                {/* Sparkle effect */}
                {/* <Sparkles className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white opacity-0 group-hover/btn:opacity-100 group-hover/btn:animate-pulse transition-opacity duration-300" />
                <Sparkles className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white opacity-0 group-hover/btn:opacity-100 group-hover/btn:animate-pulse transition-opacity duration-300 delay-150" /> */}
                
                {/* Button content */}
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Mehr erfahren
                  <ArrowRight className="w-5 h-5 transform group-hover/btn:translate-x-2 transition-transform duration-300 group-hover/btn:scale-110" />
                </span>
              </Button>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Button 
                size="lg"
                className="text-lg px-12 py-6 bg-white text-[#00b140] hover:bg-[#00b140] hover:text-white font-semibold border-2 border-[#00b140] transition-all duration-300 shadow-lg w-full group/btn relative overflow-hidden hover:shadow-xl hover:border-[#00b140]"
                onClick={(e) => {
                  e.stopPropagation();
                  handleContactClick();
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Animated background on hover */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#00b140] via-[#00a138] to-[#00b140] transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 origin-left"></span>
                
                {/* Sparkle effect */}
                {/* <Sparkles className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white opacity-0 group-hover/btn:opacity-100 group-hover/btn:animate-pulse transition-opacity duration-300" />
                <Sparkles className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white opacity-0 group-hover/btn:opacity-100 group-hover/btn:animate-pulse transition-opacity duration-300 delay-150" /> */}
                
                {/* Button content */}
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Kontakt aufnehmen
                  <ArrowRight className="w-5 h-5 transform group-hover/btn:translate-x-2 transition-transform duration-300 group-hover/btn:scale-110" />
                </span>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;