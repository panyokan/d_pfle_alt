import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Calendar, Car, Ambulance, Bus } from "lucide-react";
import outdoor from "@/assets/dominik-lange-VUOiQW4OeLI-unsplash.jpg";
import holdingHand from "@/assets/holdHand.jpg";
import couplehug from "@/assets/vlad-sargu-ItphH2lGzuI-unsplash.jpg";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

const ContactPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });

  const emergencyRef = useRef(null);
  const isEmergencyInView = useInView(emergencyRef, { once: true, margin: "-50px" });

  const departmentsRef = useRef(null);
  const isDepartmentsInView = useInView(departmentsRef, { once: true, margin: "-50px" });

  const locationRef = useRef(null);
  const isLocationInView = useInView(locationRef, { once: true, margin: "-50px" });

  const contactFormRef = useRef(null);
  const isContactFormInView = useInView(contactFormRef, { once: true, margin: "-50px" });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const openingHours = [
    { day: "Mo-Fr", hours: "9:00 - 15:00" },
    { day: "Sa-So", hours: "Geschlossen" },
  ];

  return (
    <div className="min-h-screen font-montserrat" ref={containerRef}>
      <Header />
      
      {/* Hero Section - Increased height */}
      <section 
        className="py-6 bg-gradient-to-br from-[#00b140] to-[#00b140]/40 text-white relative overflow-hidden"
        style={{
          backgroundImage: `url(${couplehug})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center left',
          backgroundRepeat: 'no-repeat',
          minHeight: '58vh',
          filter: 'brightness(1.1)',
        }}
      >
        {/* Darker overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        <motion.div 
          className="absolute inset-0 bg-[#00b140]/5"
          style={{ y }}
        ></motion.div>
        <div className="container mx-auto px-6 text-center relative z-10 flex items-center justify-center py-12 md:py-28">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
              Kontakt aufnehmen
            </h1>
            <motion.p 
              className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-md font-medium"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              Wir sind hier, um Ihre Fragen zu beantworten, Informationen bereitzustellen und Ihnen zu helfen, 
              zu entdecken, wie Pflegedienst Dreieich das perfekte Zuhause für Ihren Angehörigen sein kann.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <motion.section 
        className="py-2 bg-white"
        initial={{ opacity: 0 }}
        animate={isHeroInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3 }}
        style={{ filter: 'brightness(1.05)' }}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-2">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.2, delay: 0.05 }}
            >
              Kontakt aufnehmen
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              Wir sind hier, um Ihre Fragen zu beantworten, Informationen bereitzustellen und Ihnen zu helfen, 
              zu entdecken, wie Pflegedienst Dreieich das perfekte Zuhause für Ihren Angehörigen sein kann.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Location & Hours */}
      <motion.section 
        ref={locationRef}
        initial={{ opacity: 0 }}
        animate={isLocationInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3 }}
        className="py-12 bg-gradient-to-b from-background to-secondary/20"
        style={{ filter: 'brightness(1.05)' }}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isLocationInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.2, delay: 0.05 }}
            >
              Besuchen Sie unsere Einrichtung
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isLocationInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              Entdecken Sie unser modernes Pflegeheim in zentraler Lage in Dreieich
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Location Info */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={isLocationInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.05 }}
            >
              {[
                {
                  title: "Standort",
                  icon: MapPin,
                  content: (
                    <>
                      <div className="text-lg font-semibold text-foreground">
                        Pflegedienst Dreieich Senior Living
                      </div>
                      <div className="text-muted-foreground">
                        Freiherr-vom-Stein-Straße 42, 63303 Dreieich, Germany
                      </div>
                      <div className="pt-3">
                        <div className="text-sm text-muted-foreground mb-2">Einfach erreichbar über:</div>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Kostenlose Parkplätze verfügbar</li>
                          <li>• Barrierefreier Zugang</li>
                          <li>• Zentrale Lage in Dreieich</li>
                        </ul>
                      </div>
                    </>
                  )
                },
                {
                  title: "Kontakt & Öffnungszeiten",
                  icon: Clock,
                  content: (
                    <>
                      <div className="space-y-4">
                        <div>
                          <div className="font-semibold text-foreground mb-2">Telefon</div>
                          <div className="text-lg font-bold text-[#00b140]">+491606397787</div>
                        </div>
                        
                        <div>
                          <div className="font-semibold text-foreground mb-3">Öffnungszeiten</div>
                          <div className="space-y-2">
                            {openingHours.map((day, index) => (
                              <div key={index} className="flex justify-between text-sm">
                                <span className="text-foreground">{day.day}</span>
                                <span className={day.hours === "Geschlossen" ? "text-red-600" : "text-muted-foreground"}>
                                  {day.hours}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  )
                }
              ].map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={isLocationInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ 
                    duration: 0.2, 
                    delay: 0.1 + (index * 0.1),
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    y: -5,
                    scale: 1.02,
                    transition: { duration: 0.1 }
                  }}
                >
                  <Card className="border-border/50 hover:shadow-card transition-all duration-150 hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50 shadow-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-3">
                        <motion.div
                          className="w-12 h-12 bg-[#00b140] rounded-lg flex items-center justify-center"
                          whileHover={{ 
                            scale: 1.1,
                            rotate: 5,
                            transition: { duration: 0.1 }
                          }}
                        >
                          <card.icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <span className="text-xl text-foreground">{card.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {card.content}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Enhanced Map Section */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
              animate={isLocationInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
            >
              <div className="bg-gradient-to-br from-card to-card/80 rounded-3xl p-6 shadow-2xl border border-border/50">
                {/* Map Header */}
                <motion.div 
                  className="flex items-center justify-between mb-6"
                  initial={{ opacity: 0, y: -20 }}
                  animate={isLocationInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.2, delay: 0.15 }}
                >
                  <div className="flex items-center space-x-3">
                    <motion.div 
                      className="w-10 h-10 bg-[#00b140] rounded-full flex items-center justify-center"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.1 }
                      }}
                    >
                      <MapPin className="w-5 h-5 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">Standort</h3>
                      <p className="text-sm text-muted-foreground">Freiherr-vom-Stein-Straße 42, 63303 Dreieich</p>
                    </div>
                  </div>
                  <motion.button
                    className="px-4 py-2 bg-[#00b140] text-white rounded-lg text-sm font-medium hover:bg-[#00b140]/90 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Route planen
                  </motion.button>
                </motion.div>

                {/* Map Container */}
                <div className="relative rounded-2xl overflow-hidden shadow-lg border border-border/30">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2550.1234567890123!2d8.6969!3d50.0169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDAxJzA5LjQiTiA4wrA0MSc0OC44IkU!5e0!3m2!1sen!2sde!4v1234567890123"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Pflegedienst Dreieich Senior Living Location"
                  ></iframe>
                </div>
              </div>

              {/* Transportation Info - Moved outside the box */}
              <motion.div 
                className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isLocationInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.2, delay: 0.2 }}
              >
                <motion.div 
                  className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-4 border border-border/50 hover:shadow-lg transition-all duration-150 shadow-sm"
                  whileHover={{ 
                    y: -2,
                    scale: 1.02,
                    transition: { duration: 0.1 }
                  }}
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 bg-[#00b140] rounded-full flex items-center justify-center">
                      <Bus className="w-4 h-4 text-white" />
                    </div>
                    <h4 className="font-semibold text-foreground">Öffentliche Verkehrsmittel</h4>
                  </div>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div>Bus OF-64,</div>
                    <div>Dreieich-Sprendlingen</div>
                    <div>Tannenweg</div>
                  </div>
                </motion.div>

                <motion.div 
                  className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-4 border border-border/50 hover:shadow-lg transition-all duration-150 shadow-sm"
                  whileHover={{ 
                    y: -2,
                    scale: 1.02,
                    transition: { duration: 0.1 }
                  }}
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 bg-[#00b140] rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">🚗</span>
                    </div>
                    <h4 className="font-semibold text-foreground">Parken</h4>
                  </div>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div>Kostenlos verfügbar</div>
                    <div>Behindertenparkplätze</div>
                    <div>24/7 Zugang</div>
                  </div>
                </motion.div>

                <motion.div 
                  className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-4 border border-border/50 hover:shadow-lg transition-all duration-150 shadow-sm"
                  whileHover={{ 
                    y: -2,
                    scale: 1.02,
                    transition: { duration: 0.1 }
                  }}
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 bg-[#00b140] rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">⏰</span>
                    </div>
                    <h4 className="font-semibold text-foreground">Besuchszeiten</h4>
                  </div>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div>Mo-Fr: 9:00 - 15:00</div>
                    <div>Führungen nach Vereinbarung</div>
                    <div>Barrierefrei</div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Main Contact Form Section */}
      <motion.div
        ref={contactFormRef}
        initial={{ opacity: 0 }}
        animate={isContactFormInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3 }}
        style={{ filter: 'brightness(1.05)' }}
      >
        <Contact />
      </motion.div>

      <Footer />
    </div>
  );
};

export default ContactPage;