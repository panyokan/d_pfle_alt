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
  const isMobile = useIsMobile();

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <div className="min-h-screen font-montserrat">
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
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10 flex items-center justify-center py-12 md:py-20">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
              Umfassende Pflegedienste
            </h1>
            <p className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-md font-medium">
              Wir bieten ein vollständiges Spektrum an Dienstleistungen, die
              darauf ausgerichtet sind, das körperliche, emotionale und soziale
              Wohlbefinden unserer Bewohner mit personalisierten Pflegeplänen zu
              unterstützen.
            </p>
          </div>
        </div>
      </section>

      {/* Specialty Services */}
      <section className="py-12 md:py-20 bg-background" style={{ filter: "brightness(1.05)" }}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
              Unsere pflegeleistunge
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
              Nach SGB V, XI und XII
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {specialtyServices.map((service, index) => (
              <div key={index} className="h-full">
                <Card className="group hover:shadow-card transition-all duration-200 border-2 border-[#00b140]/15 hover:border-[#00b140]/40 h-full bg-gradient-to-br from-white to-gray-50">
                  <CardHeader className="px-4 sm:px-6 pt-6">
                    <div className="flex items-center space-x-3 md:space-x-4">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-[#00b140] rounded-lg flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg sm:text-xl md:text-xl text-foreground tracking-wider">
                          {service.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="px-4 sm:px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed mb-3 md:mb-4 text-sm sm:text-base tracking-wide">
                      {service.description}
                    </p>

                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-start space-x-2 text-xs sm:text-sm tracking-wide"
                        >
                          <div className="w-1.5 h-1.5 bg-[#00b140] rounded-full mt-1 flex-shrink-0"></div>
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-secondary/30 to-background" style={{ filter: "brightness(1.05)" }}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="space-y-12 md:space-y-20">
            {/* Dining Services */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="relative order-1 lg:order-2">
                <img
                  src={diningImage}
                  alt="Speisesaal"
                  className="relative rounded-xl sm:rounded-2xl shadow-card shadow-card w-full h-48 sm:h-64 md:h-80 object-cover"
                />
              </div>

              <div className="space-y-4 md:space-y-6 order-2 lg:order-1">
                <div className="flex items-center space-x-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#00b140] rounded-full flex items-center justify-center flex-shrink-0">
                    <Utensils className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <span className="text-[#00b140] font-semibold text-sm sm:text-base">
                    Pflege- & Unterstützungsangebote
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold text-foreground">
                  Individuelle Versorgung & Alltagsbegleitung
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Unsere umfassenden Pflege- und Betreuungsleistungen
                  unterstützen Pflegebedürftige in allen Bereichen des täglichen
                  Lebens. Von der Grundpflege über medizinische
                  Behandlungspflege bis hin zu unterstützenden
                  Entlastungsangeboten bieten wir verlässliche Hilfe.
                </p>
              </div>
            </div>

            {/* Rehabilitation */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="relative order-1 lg:order-1">
                <img
                  src={newhero}
                  alt="Rehabilitationsraum"
                  className="relative rounded-xl sm:rounded-2xl shadow-card w-full h-48 sm:h-64 md:h-80 object-cover"
                  style={{ objectPosition: "70% 17%" }}
                />
              </div>

              <div className="space-y-4 md:space-y-6 order-2 lg:order-2">
                <div className="flex items-center space-x-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#00b140] rounded-full flex items-center justify-center flex-shrink-0">
                    <Dumbbell className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <span className="text-[#00b140] font-semibold text-sm sm:text-base">
                    Betreuungs- & Entlastungsangebote
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold text-foreground">
                  Begleitung & Unterstützung
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Unsere zusätzlichen Betreuungsleistungen schaffen Entlastung
                  für Angehörige und fördern zugleich das emotionale und soziale
                  Wohlbefinden der Pflegebedürftigen.
                </p>
              </div>
            </div>

            {/* Activities */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="relative order-1 lg:order-2">
                <img
                  src={activitiesImage}
                  alt="Aktivitätsprogramme"
                  className="relative rounded-xl sm:rounded-2xl shadow-card w-full h-48 sm:h-64 md:h-80 object-cover"
                  style={{ filter: "brightness(1.1)" }}
                />
              </div>

              <div className="space-y-4 md:space-y-6 order-2 lg:order-1">
                <div className="flex items-center space-x-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#00b140] rounded-full flex items-center justify-center flex-shrink-0">
                    <Activity className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <span className="text-[#00b140] font-semibold text-sm sm:text-base">
                    Bereicherungsprogramme
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold text-foreground">
                  Tägliche Aktivitäten & Programme
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Unser vielfältiges Aktivitätsprogramm fördert soziale
                  Beteiligung, kognitive Stimulation und persönliche Erfüllung
                  durch eine Vielzahl von Freizeit- und Bildungsmöglichkeiten.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-12 md:py-20 bg-gradient-to-r from-[#00b140] to-[#00b140]/90 text-white relative"
        style={{
          backgroundImage: `url(${holdingHand})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(1.1)",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-white">
              Bereit, mehr über unsere Dienste zu erfahren?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/95 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
              Vereinbaren Sie eine persönliche Beratung, um zu besprechen, wie
              unsere Dienste die einzigartigen Bedürfnisse Ihres Angehörigen
              erfüllen können.
            </p>
            <div className="flex justify-center">
              <Button
                size="lg"
                className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-white text-[#00b140] hover:bg-gray-100 font-semibold border-2 border-white transition-all duration-200 shadow-lg"
                onClick={handleContactClick}
              >
                Kontaktieren Sie uns
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;