import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Home, Users, Shield, Clock, ArrowRight, Sparkles } from "lucide-react";
import CoupleWalking from "@/assets/couple.avif";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Behandlungpflege",
    description: "Professionelle Behandlungspflege nach ärztlicher Verordnung.",
    icon: Home,
    color: "bg-[#00b140]",
    bgColor: "bg-gradient-to-br from-white to-gray-50",
    borderColor: "border-[#00b140]/20"
  },
  {
    title: "Pflegeriche Versorgung",
    description: "Umfassende pflegerische Versorgung für Ihre individuellen Bedürfnisse.",
    icon: Shield,
    color: "bg-[#00b140]",
    bgColor: "bg-gradient-to-br from-white to-gray-50",
    borderColor: "border-[#00b140]/20"
  },
  {
    title: "Beratung & Planung",
    description: "Umfassende Beratung zu Pflegeleistungen, Anträgen und individuellen Betreuungsplänen.",
    icon: Users,
    color: "bg-[#00b140]",
    bgColor: "bg-gradient-to-br from-white to-gray-50",
    borderColor: "border-[#00b140]/20"
  },
  {
    title: "Gesellschaft & Begleitung",
    description: "Menschliche Begleitung, Gespräche und gemeinsame Aktivitäten für mehr Lebensqualität.",
    icon: Heart,
    color: "bg-[#00b140]",
    bgColor: "bg-gradient-to-br from-white to-gray-50",
    borderColor: "border-[#00b140]/20"
  },
  {
    title: "Pflegehilfsmittel",
    description: "Beratung und Unterstützung bei der Beschaffung und Nutzung von Pflegehilfsmitteln.",
    icon: Shield,
    color: "bg-[#00b140]",
    bgColor: "bg-gradient-to-br from-white to-gray-50",
    borderColor: "border-[#00b140]/20"
  },
  {
    title: "24/7 Für Sie erreichbar",
    description: "Rund um die Uhr erreichbar für Ihre Anfragen und Terminwünsche.",
    icon: Clock,
    color: "bg-[#00b140]",
    bgColor: "bg-gradient-to-br from-white to-gray-50",
    borderColor: "border-[#00b140]/20"
  }
];

const Services = () => {
  const navigate = useNavigate();

  const handleServiceClick = (serviceTitle: string) => {
    console.log(`Service clicked: ${serviceTitle}`);
    // Add your service click logic here
  };

  const handleLearnMoreClick = () => {
    navigate('/services');
  };

  return (
    <section
      id="services"
      className="relative py-20 bg-fixed bg-center bg-cover font-montserrat"
      style={{
        backgroundImage: `url(${CoupleWalking})`,
      }}
    > 
      {/* Enhanced overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 via-gray-800/30 to-gray-900/30"></div>

      {/* Content wrapper */}
      <div className="relative container mx-auto px-6">     
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Unsere Dienstleistungen
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Wir bieten ein umfassendes Spektrum an Pflege- und Betreuungsleistungen, 
            die auf Ihre individuellen Bedürfnisse zugeschnitten sind.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`${service.bgColor} ${service.borderColor} group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 shadow-lg cursor-pointer overflow-hidden relative`}
              onClick={() => handleServiceClick(service.title)}
            >
              {/* Premium hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00b140]/5 to-[#00b140]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader className="text-center pb-4 relative z-10">
                <div className={`w-16 h-16 mx-auto mb-4 ${service.color} rounded-full flex items-center justify-center group-hover:animate-float transition-transform duration-300 shadow-lg group-hover:shadow-xl group-hover:scale-110`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900 group-hover:text-[#00b140] transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-center text-gray-600 leading-relaxed mb-4 group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </CardDescription>
                {/* <div className="text-center">
                  <Button 
                    size="lg"
                    className="text-lg px-8 py-6 bg-white text-[#00b140] hover:bg-[#00b140] hover:text-white font-semibold border-2 border-[#00b140] transition-all duration-300 shadow-lg w-full group/btn relative overflow-hidden hover:shadow-xl hover:border-[#00b140]"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLearnMoreClick();
                    }}
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#00b140] via-[#00a138] to-[#00b140] transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 origin-left"></span>
                    
                    <Sparkles className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white opacity-0 group-hover/btn:opacity-100 group-hover/btn:animate-pulse transition-opacity duration-300" />
                    <Sparkles className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white opacity-0 group-hover/btn:opacity-100 group-hover/btn:animate-pulse transition-opacity duration-300 delay-150" />
                    
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Mehr erfahren
                      <ArrowRight className="w-5 h-5 transform group-hover/btn:translate-x-2 transition-transform duration-300 group-hover/btn:scale-110" />
                    </span>
                  </Button>
                </div> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;