import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Quote,
  Award,
  Users,
  Heart,
  Clock,
  Calendar,
  Star,
} from "lucide-react";
import hug from "@/assets/bright-room-with-big-windows.jpg";
import hug2 from "@/assets/hug2.jpeg";
import room from "@/assets/doctor-talking-with-her-elder-patient.jpg";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO"; // 👈 CHANGED: Import SEO component instead of Helmet

const AboutPage = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });

  const missionRef = useRef(null);
  const isMissionInView = useInView(missionRef, {
    once: true,
    margin: "-50px",
  });

  const testimonialsRef = useRef(null);
  const isTestimonialsInView = useInView(testimonialsRef, {
    once: true,
    margin: "-50px",
  });

  const teamRef = useRef(null);
  const isTeamInView = useInView(teamRef, { once: true, margin: "-50px" });

  const ctaRef = useRef(null);
  const isCtaInView = useInView(ctaRef, { once: true, margin: "-50px" });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleContactClick = () => {
    navigate("/contact");
  };

  const testimonials = [
    {
      quote:
        "Der Pflegedienst 3eich hat sich mit so viel Geduld und Herzlichkeit um meine Mutter gekümmert. Man merkt sofort, dass hier Menschen arbeiten, die ihren Beruf lieben. Wir sind unendlich dankbar.",
      author: "Sabine Müller",
      role: "Tochter einer Patientin",
      rating: 5,
    },
    {
      quote:
        "Als Hausarzt habe ich mit vielen Pflegediensten zusammengearbeitet. Dieser hier gehört ohne Zweifel zu den zuverlässigsten und professionellsten. Die Kommunikation ist vorbildlich.",
      author: "Dr. Andreas Schneider",
      role: "Hausarzt",
      rating: 5,
    },
    {
      quote:
        "Seit ich hier betreut werde, fühle ich mich gut aufgehoben. Die Mitarbeitenden nehmen sich Zeit, hören zu und helfen, wo sie können. Ich fühle mich hier wirklich zuhause.",
      author: "Hannelore Becker",
      role: "Patientin",
      rating: 5,
    },
  ];

  return (
    <>
      {/* 👇 ADD SEO COMPONENT AT THE TOP */}
      <SEO 
        title="Über uns – Pflegedienst 3eich | Unser Team & Werte"
        description="Erfahren Sie mehr über Pflegedienst 3eich in Dreieich. Unser erfahrenes Team bietet professionelle Pflege mit Empathie und Qualität. Jetzt kennenlernen!"
        canonicalUrl="https://www.dreieich-pflege.de/about"
        ogImage="/about-og.jpg"
        keywords="Pflegedienst Dreieich, Über uns, Pflegeteam, Qualitätspflege, ambulante Pflege, Erfahrung, Werte"
      />
      
      <div className="min-h-screen font-montserrat" ref={containerRef}>
        <Header />

        {/* Hero Section */}
        <section
          className="py-16 md:py-20 bg-gradient-to-br from-[#00b140] to-[#00b140]/90 text-white relative overflow-hidden"
          style={{
            backgroundImage: `url(${hug})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "50vh",
            filter: "brightness(1.1)",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>

          <motion.div
            className="absolute inset-0 bg-[#00b140]/5"
            style={{ y }}
          ></motion.div>
          <div className="container mx-auto px-4 sm:px-6 text-center relative z-10 flex items-center justify-center py-12 md:py-20">
            <div className="max-w-4xl">
              <h1
                className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg"
              >
                Über uns
              </h1>
              <motion.p
                className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-md font-medium"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                Unser ambulanter Pflegedienst mit Sitz in Dreieich, bietet seine
                Dienstleitungen auch in den umliegenden Kommunen an. Hierzu
                zählen z.B. Neu-Isenburg, Dietzenbach, Langen und Egelsbach.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <motion.section
          ref={missionRef}
          initial={{ opacity: 0 }}
          animate={isMissionInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="py-16 md:py-20 bg-gradient-to-b from-background to-secondary/30"
          style={{ filter: "brightness(1.05)" }}
        >
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
              <motion.div
                className="space-y-6 md:space-y-8"
                initial={{ opacity: 0 }}
                animate={isMissionInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isMissionInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 md:mb-6">
                    Unsere Mission & Werte
                  </h2>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 md:mb-6">
                    Wir glauben, dass jeder Senior mit Würde leben sollte,
                    umgeben von Pflege, die seine Lebensgeschichte ehrt und
                    seine individuelle Reise unterstützt.
                  </p>
                </motion.div>

                <div className="space-y-4 md:space-y-6">
                  {[
                    {
                      icon: Heart,
                      title: "Mitgefühl",
                      description:
                        "Jede Interaktion wird von Empathie, Freundlichkeit und echter Fürsorge für das Wohlbefinden unserer Bewohner geleitet.",
                      iconBg: "bg-[#00b140]",
                    },
                    {
                      icon: Users,
                      title: "Gemeinschaft",
                      description:
                        "Wir fördern bedeutungsvolle Verbindungen und schaffen eine Umgebung, in der sich jeder zugehörig fühlt.",
                      iconBg: "bg-[#00b140]",
                    },
                    {
                      icon: Award,
                      title: "Exzellenz",
                      description:
                        "Wir streben kontinuierlich nach den höchsten Standards in Pflege, Sicherheit und Servicequalität.",
                      iconBg: "bg-[#00b140]",
                    },
                  ].map((value, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30, scale: 0.9 }}
                      animate={
                        isMissionInView ? { opacity: 1, y: 0, scale: 1 } : {}
                      }
                      transition={{
                        duration: 0.6,
                        delay: 0.3 + index * 0.15,
                        ease: "easeOut",
                      }}
                      whileHover={{
                        y: -5,
                        scale: 1.02,
                        transition: { duration: 0.3 },
                      }}
                    >
                      <Card className="border-border/50 hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50">
                        <CardContent className="p-4 sm:p-6">
                          <div className="flex items-center space-x-3 sm:space-x-4 mb-3">
                            <motion.div
                              className={`w-10 h-10 sm:w-12 sm:h-12 ${value.iconBg} rounded-lg flex items-center justify-center`}
                              whileHover={{
                                scale: 1.1,
                                rotate: 5,
                                transition: { duration: 0.3 },
                              }}
                            >
                              <value.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                            </motion.div>
                            <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                              {value.title}
                            </h3>
                          </div>
                          <p className="text-sm sm:text-base text-muted-foreground">
                            {value.description}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="relative order-first lg:order-last"
                initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                animate={
                  isMissionInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}
                }
                transition={{ duration: 1.2, ease: "easeOut" }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.4 },
                }}
              >
                <motion.div
                  className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-full h-full bg-gradient-to-br from-[#00b140]/20 to-transparent rounded-xl sm:rounded-2xl"
                  animate={{
                    boxShadow: [
                      "0 0 0 rgba(0, 177, 64, 0.2)",
                      "0 0 20px rgba(0, 177, 64, 0.4)",
                      "0 0 0 rgba(0, 177, 64, 0.2)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                ></motion.div>
                <img
                  src={hug2}
                  alt="Gesundheitspersonal bei der Arbeit mit Patienten"
                  className="relative rounded-xl sm:rounded-2xl shadow-card w-full h-64 sm:h-80 md:h-96 object-cover"
                  style={{ filter: "brightness(1.1)" }}
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section
          ref={testimonialsRef}
          initial={{ opacity: 0 }}
          animate={isTestimonialsInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="py-16 md:py-20 bg-background"
          style={{ filter: "brightness(1.05)" }}
        >
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 md:mb-4">
                Was Familien sagen
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
                Das Vertrauen und die Zufriedenheit unserer Familien ist unser
                größter Erfolg
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={
                    isTestimonialsInView ? { opacity: 1, y: 0, scale: 1 } : {}
                  }
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + index * 0.15,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                >
                  <Card className="bg-gradient-to-br from-white to-gray-50 border-border/50 hover:shadow-card transition-all duration-300 hover:-translate-y-2 h-full">
                    <CardContent className="p-6 sm:p-8">
                      <motion.div
                        className="w-8 h-8 text-[#00b140] mb-4"
                        animate={{
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3,
                          ease: "easeInOut",
                        }}
                      >
                        <Quote className="w-8 h-8" />
                      </motion.div>
                      <blockquote className="text-foreground leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-foreground text-sm sm:text-base">
                            {testimonial.author}
                          </div>
                          <div className="text-xs sm:text-sm text-muted-foreground">
                            {testimonial.role}
                          </div>
                        </div>
                        <div className="flex space-x-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ scale: 0 }}
                              animate={isTestimonialsInView ? { scale: 1 } : {}}
                              transition={{
                                duration: 0.5,
                                delay: 0.3 + index * 0.15 + i * 0.1,
                                ease: "easeOut",
                              }}
                              whileHover={{
                                scale: 1.2,
                                transition: { duration: 0.3 },
                              }}
                            >
                              <Star
                                className="w-3 h-3 sm:w-4 sm:h-4 text-[#00b140]"
                                fill="currentColor"
                              />
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section
          ref={teamRef}
          initial={{ opacity: 0 }}
          animate={isTeamInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="py-16 md:py-20 bg-gradient-to-b from-secondary/30 to-background"
          style={{ filter: "brightness(1.05)" }}
        >
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
              <motion.div
                className="relative order-first"
                initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
                animate={
                  isTeamInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}
                }
                transition={{ duration: 1.2, ease: "easeOut" }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.4 },
                }}
              >
                <motion.div
                  className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-full h-full bg-gradient-to-br from-[#00b140]/20 to-transparent rounded-xl sm:rounded-2xl"
                  animate={{
                    boxShadow: [
                      "0 0 0 rgba(0, 177, 64, 0.2)",
                      "0 0 20px rgba(0, 177, 64, 0.4)",
                      "0 0 0 rgba(0, 177, 64, 0.2)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 0.5,
                    ease: "easeInOut",
                  }}
                ></motion.div>
                <img
                  src={room}
                  alt="Unser Pflegeteam bei der Arbeit"
                  className="relative rounded-xl sm:rounded-2xl shadow-card w-full h-64 sm:h-80 md:h-96 object-cover"
                  style={{ filter: "brightness(1.1)" }}
                />
              </motion.div>

              <motion.div
                className="space-y-6 md:space-y-8"
                initial={{ opacity: 0 }}
                animate={isTeamInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.h2
                  className="text-3xl sm:text-4xl font-bold text-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8 }}
                >
                  Unser Team
                </motion.h2>
                <motion.p
                  className="text-base sm:text-lg text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Unser Team besteht aus Mitarbeiterinnen die langjährig in der
                  Pflege tätig gewesen sind und sich nun selbstständig gemacht
                  haben. Ihre Erfahrung möchten Sie einsetzen, um den Menschen
                  zu helfen. Der Mensch steht dabei im Mittelpunkt.
                </motion.p>
                <motion.p
                  className="text-base sm:text-lg text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Wir betrachten die Pflege ganzheitlich und nehmen uns Zeit.
                </motion.p>
                <motion.p
                  className="text-base sm:text-lg text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Als Pflegedienst legen wir großen Wert auf
                  Kommunikationskultur, basierend auf gegenseitiger
                  Wertschätzung, Biografie , Empathie, Respekt und Feedback-Kultur.
                </motion.p>
                <motion.p
                  className="text-base sm:text-lg text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Wir legen großen Wert auf Qualität und arbeiten nach den
                  Expertenstandards in der Pflege.
                </motion.p>
                <motion.p
                  className="text-base sm:text-lg text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Regelmäßige Fortbildungen unserer Personals zählen auch dazu.
                </motion.p>
                <motion.p
                  className="text-base sm:text-lg text-muted-foreground leading-relaxed font-semibold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  Gerne können Sie uns kennenlernen und sich hiervon ein eigenes
                  Bild machen.
                </motion.p>
                <motion.div
                  className="grid grid-cols-2 gap-4 sm:gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  {[
                    {
                      icon: Clock,
                      number: "24/7",
                      label: "Pflege verfügbar",
                      iconBg: "bg-[#00b140]",
                    },
                    {
                      icon: Calendar,
                      number: "365",
                      label: "Tage im Jahr",
                      iconBg: "bg-[#00b140]",
                    },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      className="text-center p-3 sm:p-4 bg-gradient-to-br from-white to-gray-50 rounded-lg border border-border/50 hover:shadow-lg transition-all duration-300"
                      whileHover={{
                        y: -5,
                        scale: 1.05,
                        transition: { duration: 0.4 },
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isTeamInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.6,
                        delay: 1.0 + index * 0.15,
                        ease: "easeOut",
                      }}
                    >
                      <motion.div
                        className={`w-8 h-8 ${stat.iconBg} rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3`}
                        whileHover={{
                          scale: 1.1,
                          rotate: 5,
                          transition: { duration: 0.3 },
                        }}
                      >
                        <stat.icon className="w-4 h-4 text-white" />
                      </motion.div>
                      <motion.div
                        className="text-xl sm:text-2xl font-bold text-[#00b140]"
                        initial={{ scale: 0 }}
                        animate={isTeamInView ? { scale: 1 } : {}}
                        transition={{
                          duration: 0.6,
                          delay: 1.2 + index * 0.15,
                          ease: "easeOut",
                        }}
                      >
                        {stat.number}
                      </motion.div>
                      <div className="text-xs sm:text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          ref={ctaRef}
          initial={{ opacity: 0 }}
          animate={isCtaInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="py-16 md:py-20 bg-gradient-to-r from-[#00b140] to-[#00b140]/90 text-white relative"
          style={{
            backgroundImage: `url(${room})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "brightness(1.1)",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.h2
                className="text-3xl sm:text-4xl font-bold mb-4 md:mb-6 text-white drop-shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                Erleben Sie den Pflegedienst 3eich Unterschied
              </motion.h2>
              <motion.p
                className="text-lg sm:text-xl text-white/95 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-md px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                Besuchen Sie uns, um aus erster Hand zu sehen, wie wir eine
                fürsorgliche Gemeinschaft schaffen, in der Ihr Angehöriger
                wirklich gedeihen kann.
              </motion.p>
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.8 }}
              >
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-white text-[#00b140] hover:bg-gray-100 font-semibold border-2 border-white transition-all duration-300 shadow-lg w-full sm:w-auto"
                    onClick={handleContactClick}
                  >
                    Kontaktieren Sie uns
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        <Footer />
      </div>
    </>
  );
};

export default AboutPage;