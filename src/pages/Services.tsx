import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Users,
  Clock,
  Stethoscope,
  Utensils,
  Activity,
  Shield,
 
  Dumbbell,
  
} from "lucide-react";
import diningImage from "@/assets/portrait-retired-couple-with-disability-sitting-couch-looking-camera-elder-man-woman-crutches-wheelchair-accessibility-mobility-enjoying-free-time.jpg";
import rehabImage from "@/assets/therapy.jpeg";
import activitiesImage from "@/assets/male-nurse-helping-senior-retired-disabled-woman-wheelchair-rehabilitate-using-dumbbels.jpg";
import outdoor from "@/assets/care-for-the-elderly-6960542_1920.jpg";
import holdingHand from "@/assets/holdHand.jpg";

import newhero from "@/assets/indiviual_care.jpg";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const services = [
  {
    icon: Heart,
    title: "Persönliche Pflege",
    description:
      "Individuelle Pflegepläne, die auf die einzigartigen Bedürfnisse und Vorlieben jedes Bewohners zugeschnitten sind.",
    details: [
      "Tägliche Gesundheitsüberwachung",
      "Medikamentenverwaltung",
      "Hilfe bei der persönlichen Hygiene",
      "Mobilitätsunterstützung",
    ],
  },
  {
    icon: Stethoscope,
    title: "Medizinische Unterstützung",
    description:
      "24/7 Pflege mit medizinischem Fachpersonal vor Ort und regelmäßiger Gesundheitsüberwachung.",
    details: [
      "Lizenzierte Pflegekräfte",
      "Regelmäßige Gesundheitsbewertungen",
      "Notfallreaktion",
      "Arztkoordination",
    ],
  },
  {
    icon: Utensils,
    title: "Nahrhafte Verpflegung",
    description:
      "Koch-zubereitete Mahlzeiten mit diätetischen Anpassungen und flexiblen Essenszeiten.",
    details: [
      "Drei tägliche Mahlzeiten plus Snacks",
      "Besondere Ernährungsbedürfnisse",
      "Frische, lokale Zutaten",
      "Soziale Essenserfahrung",
    ],
  },
  {
    icon: Activity,
    title: "Engagierende Aktivitäten",
    description:
      "Soziale Programme, Fitnesskurse und Freizeitaktivitäten zur Förderung des Wohlbefindens.",
    details: [
      "Tägliche Aktivitätsprogramme",
      "Bewegungsklassen",
      "Kunst und Handwerk",
      "Live-Unterhaltung",
    ],
  },
  {
    icon: Users,
    title: "Familienunterstützung",
    description:
      "Offene Kommunikation und familiäre Beteiligung an Pflegeentscheidungen und Aktivitäten.",
    details: [
      "Regelmäßige Familientreffen",
      "Pflegeplan-Updates",
      "Flexible Besuchszeiten",
      "Familienveranstaltungen",
    ],
  },
  {
    icon: Clock,
    title: "Verhinderungspflege",
    description: "Kurzzeitpflege-Dienste zur Entlastung von Familienpflegern.",
    details: [
      "Tägliche oder wöchentliche Aufenthalte",
      "Notfall-Verhinderungspflege",
      "Probeaufenthalte verfügbar",
      "Umfassende Bewertungen",
    ],
  },
];

const specialtyServices = [
  {
    icon: Stethoscope,
    title: "Häusliche Krankenpflege / med. Versorgung (SGB V Bereich)",
    description: "Medizinische Versorgungsleistungen z.B.:",
    features: [
      "Verbandswechsel",
      "Medikamentengabe",
      "Medikamente richten",
      "Insulin Injektion",
      "Vitalzeichen Kontrolle und Überwachung",
      "Blutzucker-, Blutdruck-, Pulsmessung",
      "An- Ausziehen von Kompressionsstrümpfen",
    ],
  },
  {
    icon: Heart,
    title: "Pflegeriche Versorgung (SGB XI und XII Bereich)",
    description:
      "Leistungen die bei festgestellter Pflegebedürftigkeit von uns und direkt mit den Pflegekassen oder den Sozialämtern abgerechnet werden:",
    features: [
      "Große Körperpflege z.B. Baden/Duschen",
      "Teilwaschung",
      "Ernährung",
      "Mobilität",
      "Hilfestellung bei Ausscheidung",
      "Hilfe bei der Ernährung",
      "Einkaufen, Hilfe im Haushalt",
    ],
  },
  {
    icon: Users,
    title: "Entlastungsleistungen (§45b SGB XI)",
    description: "Wir bieten zusätzliche Betreuungsleistungen an z.B.:",
    features: [
      "Spaziergänge",
      "Gespräche",
      "Vorlesen",
      "Biographiearbeit",
      "Begleitung bei Veranstaltungen",
      "Begleitung bei Arztbesuchen",
      "Hauswirtschaft",
    ],
  },
  {
    icon: Shield,
    title: "Beratungseinsätze (§37 Abs. 3 SGB XI)",
    description:
      "Wir führen für Sie Beratungsbesuche bei Geldleistung der Pflegeversicherung durch:",
    features: [
      "Vierteljährliche Beratungsbesuche",
      "Halbjährliche Beratungsbesuche",
      "Individuelle Pflegeberatung",
      "Unterstützung bei Anträgen",
      "Dokumentation und Nachweisführung",
      "Qualitätssicherung",
      "Beratung zu Pflegehilfsmitteln",
    ],
  },
];

const Services = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const isMobile = useIsMobile();

  const servicesRef = useRef(null);
  const isServicesInView = useInView(servicesRef, {
    once: true,
    margin: "-50px",
  });

  const specialtyRef = useRef(null);
  const isSpecialtyInView = useInView(specialtyRef, {
    once: true,
    margin: "-50px",
  });

  const highlightsRef = useRef(null);
  const isHighlightsInView = useInView(highlightsRef, {
    once: true,
    margin: "-50px",
  });

  const ctaRef = useRef(null);
  const isCtaInView = useInView(ctaRef, { once: true, margin: "-50px" });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <div className="min-h-screen font-montserrat" ref={containerRef}>
      <Header />

      
      <section
        className="py-16 md:py-20 bg-gradient-to-br from-[#00b140] to-[#00b140]/90 text-white relative overflow-hidden"
        style={{
          backgroundImage: `url(${outdoor})`,
          backgroundSize: "cover",
          backgroundPosition: "center left",
          backgroundRepeat: "no-repeat",
          minHeight: "40vh",
          filter: "brightness(1.1)",
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        <motion.div
          className="absolute inset-0 bg-[#00b140]/5"
          style={{ y }}
        ></motion.div>
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10 flex items-center justify-center py-12 md:py-20">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg"
             
            >
               Umfassende Pflegedienste
            </h1>
            <motion.p
              className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-md font-medium"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              Wir bieten ein vollständiges Spektrum an Dienstleistungen, die
              darauf ausgerichtet sind, das körperliche, emotionale und soziale
              Wohlbefinden unserer Bewohner mit personalisierten Pflegeplänen zu
              unterstützen.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      {/* <motion.section 
        ref={servicesRef}
        initial={{ opacity: 0 }}
        animate={isServicesInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="py-12 md:py-20 bg-gradient-to-b from-background to-secondary/30"
        style={{ filter: 'brightness(1.05)' }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
              Kernpflegedienste
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
              Unsere grundlegenden Dienstleistungen bilden die Grundlage für emphatische Seniorenpflege
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isServicesInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.3 + (index * 0.15),
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="h-full"
              >
                <Card className="group hover:shadow-card transition-all duration-300 border-border/50 h-full bg-gradient-to-br from-white to-gray-50">
                  <CardHeader className="text-center px-4 sm:px-6 pt-6">
                    <motion.div 
                      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 bg-[#00b140] rounded-full flex items-center justify-center"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <service.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                    </motion.div>
                    <CardTitle className="text-lg sm:text-xl md:text-xl text-foreground">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="px-4 sm:px-6 pb-6">
                    <CardDescription className="text-center text-muted-foreground leading-relaxed mb-3 md:mb-4 text-sm sm:text-base">
                      {service.description}
                    </CardDescription>
                    <ul className="space-y-1 sm:space-y-2">
                      {service.details.map((detail, detailIndex) => (
                        <motion.li 
                          key={detailIndex} 
                          className="flex items-start space-x-2 text-xs sm:text-sm"
                          initial={{ opacity: 0,  }}
                          animate={isServicesInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ 
                            duration: 0.4, 
                            delay: 0.4 + (index * 0.15) + (detailIndex * 0.08)
                          }}
                        >
                          <motion.div 
                            className="w-1.5 h-1.5 bg-[#00b140] rounded-full mt-1 flex-shrink-0"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: detailIndex * 0.2 }}
                          ></motion.div>
                          <span className="text-muted-foreground">{detail}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section> */}

      {/* Specialty Services */}
      <motion.section
        ref={specialtyRef}
        initial={{ opacity: 0 }}
        animate={isSpecialtyInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="py-12 md:py-20 bg-background"
        style={{ filter: "brightness(1.05)" }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isSpecialtyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
              Unsere pflegeleistunge
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">

              Nach SGB V, XI und XII
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {specialtyServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isSpecialtyInView ? { opacity: 1, y: 0 } : {}}
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
                className="h-full"
              >
                <Card className="group hover:shadow-card transition-all duration-300 border-2 border-[#00b140]/15 hover:border-[#00b140]/40 h-full bg-gradient-to-br from-white to-gray-50">
                  <CardHeader className="px-4 sm:px-6 pt-6">
                    <div className="flex items-center space-x-3 md:space-x-4">
                      <motion.div
                        className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-[#00b140] rounded-lg flex items-center justify-center flex-shrink-0"
                        whileHover={{
                          scale: 1.1,
                          rotate: 5,
                          transition: { duration: 0.3 },
                        }}
                      >
                        <service.icon className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                      </motion.div>
                      <div>
                        <CardTitle className="text-xl sm:text-2xl md:text-2xl text-foreground">
                          {service.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="px-4 sm:px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed mb-3 md:mb-4 text-sm sm:text-base">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="flex items-start space-x-2 text-xs sm:text-sm"
                          initial={{ opacity: 0, y: 20 }}
                          animate={
                            isSpecialtyInView ? { opacity: 1, y: 0 } : {}
                          }
                          transition={{
                            duration: 0.4,
                            delay: 0.4 + index * 0.15 + featureIndex * 0.08,
                          }}
                        >
                          <motion.div
                            className="w-1.5 h-1.5 bg-[#00b140] rounded-full mt-1 flex-shrink-0"
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: featureIndex * 0.3,
                            }}
                          ></motion.div>
                          <span className="text-foreground">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Service Highlights */}
      <motion.section
        ref={highlightsRef}
        initial={{ opacity: 0 }}
        animate={isHighlightsInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="py-12 md:py-20 bg-gradient-to-b from-secondary/30 to-background"
        style={{ filter: "brightness(1.05)" }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="space-y-12 md:space-y-20">
            {/* Dining Services */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={isHighlightsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                className="relative order-1 lg:order-2"
                initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                animate={
                  isHighlightsInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}
                }
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.4 },
                }}
              >
                {/* <motion.div
                  className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 md:-top-4 md:-left-4 w-full h-full bg-gradient-to-br from-[#00b140]/20 to-transparent rounded-xl sm:rounded-2xl"
                  animate={{
                    boxShadow: [
                      "0 0 0 rgba(0, 177, 64, 0.2)",
                      "0 0 20px rgba(0, 177, 64, 0.4)",
                      "0 0 0 rgba(0, 177, 64, 0.2)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                ></motion.div> */}
                <img
                  src={diningImage}
                  alt="Speisesaal"
                  className="relative rounded-xl sm:rounded-2xl shadow-card  shadow-card w-full h-48 sm:h-64 md:h-80 object-cover"
                  // style={{ filter: "brightness(1.1)" }}
                />
              </motion.div>

              <motion.div
                className="space-y-4 md:space-y-6 order-2 lg:order-1"
                initial={{ opacity: 0 }}
                animate={isHighlightsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.div
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0 }}
                  animate={isHighlightsInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  <motion.div
                    className="w-7 h-7 sm:w-8 sm:h-8 bg-[#00b140] rounded-full flex items-center justify-center flex-shrink-0"
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <Utensils className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </motion.div>
                  <span className="text-[#00b140] font-semibold text-sm sm:text-base">
                    {/* Ernährung & Mahlzeitenversorgung */}
                    Pflege- & Unterstützungsangebote
                  </span>
                </motion.div>
                <motion.h3
                  className="text-2xl sm:text-3xl md:text-3xl font-bold text-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isHighlightsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.8 }}
                >
                  {/* Individuelle & ausgewogene Verpflegung */}
                  Individuelle Versorgung & Alltagsbegleitung
                </motion.h3>
                <motion.p
                  className="text-base sm:text-lg text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isHighlightsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 1.0 }}
                >
                  {/* Unser professionelles Küchenteam erstellt köstliche,
                  ernährungsphysiologisch ausgewogene Mahlzeiten mit frischen,
                  lokal bezogenen Zutaten. Besondere Ernährungsbedürfnisse und
                  Vorlieben werden sorgfältig berücksichtigt. */}
                  {/* Wir unterstützen unsere Kund*innen bei der täglichen Ernährung
                  und stellen sicher, dass Mahlzeiten bedarfsgerecht, ausgewogen
                  und nach individuellen Vorlieben oder ärztlichen Vorgaben
                  zubereitet werden. */}
                  Unsere umfassenden Pflege- und Betreuungsleistungen
                  unterstützen Pflegebedürftige in allen Bereichen des täglichen
                  Lebens. Von der Grundpflege über medizinische
                  Behandlungspflege bis hin zu unterstützenden
                  Entlastungsangeboten bieten wir verlässliche Hilfe.
                </motion.p>
                {/* <motion.ul
                  className="space-y-2 md:space-y-3"
                  initial={{ opacity: 0 }}
                  animate={isHighlightsInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 1.2 }}
                >
                  {[
                    "Täglich zubereitete Menüs vom Koch",
                    "Besondere Diätanpassungen",
                    "Flexible Essenszeiten",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0 }}
                      animate={isHighlightsInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 1.4 + index * 0.15 }}
                    >
                      <motion.div
                        className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#00b140] rounded-full mt-1 flex-shrink-0"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2,
                        }}
                      ></motion.div>
                      <span className="text-foreground text-sm sm:text-base">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul> */}
              </motion.div>
            </motion.div>

            {/* Rehabilitation */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={isHighlightsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div
                className="relative order-1 lg:order-1"
                initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
                animate={
                  isHighlightsInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}
                }
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.4 },
                }}
              >
                {/* <motion.div
                  className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 md:-top-4 md:-right-4 w-full h-full bg-gradient-to-br from-[#00b140]/20 to-transparent rounded-xl sm:rounded-2xl"
                  animate={{
                    boxShadow: [
                      "0 0 0 rgba(0, 177, 64, 0.2)",
                      "0 0 20px rgba(0, 177, 64, 0.4)",
                      "0 0 0 rgba(0, 177, 64, 0.2)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.8 }}
                ></motion.div> */}
                <img
                  src={newhero}
                  alt="Rehabilitationsraum"
                  className="relative rounded-xl sm:rounded-2xl shadow-card w-full h-48 sm:h-64 md:h-80 object-cover"
                  style={{ objectPosition: "70% 17%" }}
                  // Adjust the second value (20%) to control vertical position:
                  // 0% = top, 50% = center, 100% = bottom
                />
              </motion.div>

              <motion.div
                className="space-y-4 md:space-y-6 order-2 lg:order-2"
                initial={{ opacity: 0 }}
                animate={isHighlightsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.div
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0 }}
                  animate={isHighlightsInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 1.0 }}
                >
                  <motion.div
                    className="w-7 h-7 sm:w-8 sm:h-8 bg-[#00b140] rounded-full flex items-center justify-center flex-shrink-0"
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <Dumbbell className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </motion.div>
                  <span className="text-[#00b140] font-semibold text-sm sm:text-base">
                    {/* Erholung & Wohlbefinden */}
                    {/* Aktivierung, Erholung & Förderung */}
                    Betreuungs- & Entlastungsangebote
                  </span>
                </motion.div>
                <motion.h3
                  className="text-2xl sm:text-3xl md:text-3xl font-bold text-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isHighlightsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 1.2 }}
                >
                  {/* Rehabilitation & Therapie */}
                  {/* Unterstützende Aktivitäten & Maßnahmen */}
                  Begleitung & Unterstützung
                </motion.h3>
                <motion.p
                  className="text-base sm:text-lg text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isHighlightsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 1.4 }}
                >
                  {/* Unser modernes Rehabilitationszentrum bietet umfassende
                  Therapiedienste zur Erhaltung der Mobilität, Erholung von
                  Verletzungen und Verbesserung der Lebensqualität. */}
                  {/* Zur Förderung der Mobilität, Erholung und des allgemeinen
                  Wohlbefindens bieten wir verschiedene aktivierende und
                  begleitende Leistungen an, welche die Selbstständigkeit und
                  Lebensqualität stärken. */}
                  Unsere zusätzlichen Betreuungsleistungen schaffen Entlastung
                  für Angehörige und fördern zugleich das emotionale und soziale
                  Wohlbefinden der Pflegebedürftigen.
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Activities */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={isHighlightsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div
                className="relative order-1 lg:order-2"
                initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                animate={
                  isHighlightsInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}
                }
                transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.4 },
                }}
              >
                {/* <motion.div
                  className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 md:-top-4 md:-left-4 w-full h-full bg-gradient-to-br from-[#00b140]/20 to-transparent rounded-xl sm:rounded-2xl"
                  animate={{
                    boxShadow: [
                      "0 0 0 rgba(0, 177, 64, 0.2)",
                      "0 0 20px rgba(0, 177, 64, 0.4)",
                      "0 0 0 rgba(0, 177, 64, 0.2)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                ></motion.div> */}
                <img
                  src={activitiesImage}
                  alt="Aktivitätsprogramme"
                  className="relative rounded-xl sm:rounded-2xl shadow-card w-full h-48 sm:h-64 md:h-80 object-cover"
                  style={{ filter: "brightness(1.1)" }}
                />
              </motion.div>

              <motion.div
                className="space-y-4 md:space-y-6 order-2 lg:order-1"
                initial={{ opacity: 0 }}
                animate={isHighlightsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.div
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0 }}
                  animate={isHighlightsInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 1.0 }}
                >
                  <motion.div
                    className="w-7 h-7 sm:w-8 sm:h-8 bg-[#00b140] rounded-full flex items-center justify-center flex-shrink-0"
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <Activity className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </motion.div>
                  <span className="text-[#00b140] font-semibold text-sm sm:text-base">
                    Bereicherungsprogramme
                  </span>
                </motion.div>
                <motion.h3
                  className="text-2xl sm:text-3xl md:text-3xl font-bold text-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isHighlightsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 1.2 }}
                >
                  Tägliche Aktivitäten & Programme
                </motion.h3>
                <motion.p
                  className="text-base sm:text-lg text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isHighlightsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 1.4 }}
                >
                  Unser vielfältiges Aktivitätsprogramm fördert soziale
                  Beteiligung, kognitive Stimulation und persönliche Erfüllung
                  durch eine Vielzahl von Freizeit- und Bildungsmöglichkeiten.
                </motion.p>
                <motion.div
                  className="grid grid-cols-3 gap-3 sm:gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isHighlightsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 1.6 }}
                >
                  {[
                    // { icon: Music, label: "Musiktherapie" },
                    // { icon: Palette, label: "Kunstkurse" },
                    // { icon: Users, label: "Soziale Events" },
                  ].map((activity, index) => (
                    <motion.div
                      key={index}
                      className="text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isHighlightsInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 1.8 + index * 0.2 }}
                      whileHover={{
                        y: -5,
                        scale: 1.05,
                        transition: { duration: 0.3 },
                      }}
                    >
                      <motion.div
                        className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 mx-auto mb-2 bg-[#00b140] rounded-lg flex items-center justify-center"
                        whileHover={{
                          scale: 1.1,
                          rotate: 5,
                          transition: { duration: 0.3 },
                        }}
                      >
                        <activity.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                      </motion.div>
                      <div className="text-xs sm:text-sm text-foreground font-medium leading-tight">
                        {activity.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
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
        className="py-12 md:py-20 bg-gradient-to-r from-[#00b140] to-[#00b140]/90 text-white relative"
        style={{
          backgroundImage: `url(${holdingHand})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(1.1)",
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              Bereit, mehr über unsere Dienste zu erfahren?
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-white/95 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              Vereinbaren Sie eine persönliche Beratung, um zu besprechen, wie
              unsere Dienste die einzigartigen Bedürfnisse Ihres Angehörigen
              erfüllen können.
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
                  className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-white text-[#00b140] hover:bg-gray-100 font-semibold border-2 border-white transition-all duration-300 shadow-lg"
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
  );
};

export default Services;