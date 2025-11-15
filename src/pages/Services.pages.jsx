import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
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
import diningImage from "@/assets/food.jpeg";
import activitiesImage from "@/assets/daily_activity.jpeg";
import outdoor from "@/assets/care-for-the-elderly-6960542_1920.jpg";
import holdingHand from "@/assets/holdHand.jpg";
import newhero from "@/assets/female-nurse-taking-care-elderly-person.jpg";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

// SEO Metadata - This is crucial for vite-plugin-ssr
export { Page };
export const documentProps = {
  title: "Pflegedienstleistungen | Pflegedienst Dreieich - Ambulante Pflege & Betreuung",
  description: "Umfassende Pflegedienstleistungen nach SGB V, XI und XII in Dreieich und Umgebung. Professionelle ambulante Pflege, Betreuung und medizinische Versorgung.",
  keywords: "Pflegedienstleistungen, ambulante Pflege Dreieich, SGB V, SGB XI, SGB XII, Betreuungsleistungen, Verhinderungspflege, Pflegedienst Dreieich",
  canonical: "/services",
  ogImage: "/og-services.jpg"
};

// Structured data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Pflegedienstleistungen - Pflegedienst Dreieich",
  "description": "Umfassende ambulante Pflegedienstleistungen nach deutschen Sozialgesetzbüchern",
  "provider": {
    "@type": "Organization",
    "name": "Pflegedienst Dreieich"
  },
  "areaServed": ["Dreieich", "Neu-Isenburg", "Dietzenbach", "Langen", "Egelsbach"],
  "serviceType": [
    "Ambulante Pflege",
    "Medizinische Versorgung",
    "Betreuungsleistungen",
    "Pflegeberatung"
  ]
};

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

function Page() {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const isMobile = useIsMobile();

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
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <Header />

      {/* Hero Section */}
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
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white drop-shadow-lg leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Umfassende Pflegedienste
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 mx-auto leading-relaxed drop-shadow-md font-medium px-4 sm:px-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Wir bieten ein vollständiges Spektrum an Dienstleistungen, die
              darauf ausgerichtet sind, das körperliche, emotionale und soziale
              Wohlbefinden unserer Bewohner mit personalisierten Pflegeplänen zu
              unterstützen.
            </motion.p>
          </div>
        </div>
      </section>

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
                <img
                  src={diningImage}
                  alt="Pflege und Unterstützungsangebote bei der Ernährung - Pflegedienst Dreieich"
                  className="relative rounded-xl sm:rounded-2xl shadow-card w-full h-48 sm:h-64 md:h-80 object-cover"
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
                    Pflege- & Unterstützungsangebote
                  </span>
                </motion.div>
                <motion.h3
                  className="text-2xl sm:text-3xl md:text-3xl font-bold text-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isHighlightsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.8 }}
                >
                  Individuelle Versorgung & Alltagsbegleitung
                </motion.h3>
                <motion.p
                  className="text-base sm:text-lg text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isHighlightsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 1.0 }}
                >
                  Unsere umfassenden Pflege- und Betreuungsleistungen
                  unterstützen Pflegebedürftige in allen Bereichen des täglichen
                  Lebens. Von der Grundpflege über medizinische
                  Behandlungspflege bis hin zu unterstützenden
                  Entlastungsangeboten bieten wir verlässliche Hilfe.
                </motion.p>
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
                <img
                  src={newhero}
                  alt="Professionelle Pflege und Betreuung durch erfahrenes Pflegepersonal - Pflegedienst Dreieich"
                  className="relative rounded-xl sm:rounded-2xl shadow-card w-full h-48 sm:h-64 md:h-80 object-cover"
                  style={{ objectPosition: "70% 17%" }}
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
                    Betreuungs- & Entlastungsangebote
                  </span>
                </motion.div>
                <motion.h3
                  className="text-2xl sm:text-3xl md:text-3xl font-bold text-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isHighlightsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 1.2 }}
                >
                  Begleitung & Unterstützung
                </motion.h3>
                <motion.p
                  className="text-base sm:text-lg text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isHighlightsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 1.4 }}
                >
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
                <img
                  src={activitiesImage}
                  alt="Aktivitätsprogramme und soziale Betreuung - Pflegedienst Dreieich"
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
}

export default Page;