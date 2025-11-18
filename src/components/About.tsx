import { Card, CardContent } from "@/components/ui/card";
import { Quote, Users, Heart, Globe, Clock, Shield } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768; 
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: isMobile ? 0.1 : 0.3,
        rootMargin: isMobile ? '0px 0px 50px 0px' : '-50px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const values = [
    {
      icon: Heart,
      title: "Mit Herz",
      description: "Liebevolle Betreuung mit Empathie und Respekt für jeden Menschen.",
      color: "bg-[#00b140]",
      borderColor: "border-trust-green/20",
      bgColor: "bg-gradient-to-br from-white to-gray-50"
    },
    {
      icon: Shield,
      title: "Professionell",
      description: "Qualifizierte Fachkräfte mit langjähriger Erfahrung und kontinuierlicher Weiterbildung.",
      color: "bg-[#00b140]",
      borderColor: "border-trust-green/20",
      bgColor: "bg-gradient-to-br from-white to-gray-50"
    },
    {
      icon: Globe,
      title: "Multikulturell",
      description: "Vielfältiges Team mit Verständnis für verschiedene Kulturen und Sprachen.",
      color: "bg-[#00b140]",
      borderColor: "border-trust-green/20",
      bgColor: "bg-gradient-to-br from-white to-gray-50"
    },
    {
      icon: Clock,
      title: "Verlässlich",
      description: "24/7 Erreichbarkeit.",
      color: "bg-[#00b140]",
      borderColor: "border-trust-green/20",
      bgColor: "bg-gradient-to-br from-white to-gray-50"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-20 bg-gradient-to-b from-slate-50 to-white overflow-hidden relative font-montserrat"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className={`transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Individuelle Betreuung mit{" "}
                <span className="text-[#00b140]">
                  Verantwortung
                </span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Pflegedienst 3eich ist Ihr vertrauensvoller Partner für professionelle 
                und liebevolle Betreuung zu Hause. Wir verstehen, dass jeder Mensch einzigartig ist 
                und verdient individuelle Aufmerksamkeit.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Unser multikulturelles Team bringt nicht nur fachliche Kompetenz, sondern auch 
                kulturelle Vielfalt und menschliche Wärme in jeden Haushalt. Wir behandeln 
                jede Familie wie unsere eigene.
              </p>
            </div>
            
            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card 
                  key={index}
                  className={`${value.borderColor} ${value.bgColor} border-0 shadow-md transition-all duration-800 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 150 + 300}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`w-12 h-12 ${value.color} rounded-full flex items-center justify-center shadow-lg`}>
                        <value.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {value.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="space-y-8">
            {/* Testimonial with top shadow */}
            <Card 
              className={`bg-gradient-to-br from-white to-gray-50 border-trust-green/20 border-0 shadow-lg relative overflow-hidden ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              } transition-all duration-1200 ease-out`}
              style={{ transitionDelay: '800ms' }}
            >
              {/* Top shadow effect */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#00b140]/20 via-[#00b140]/10 to-transparent"></div>
              
              <CardContent className="p-8">
                <Quote className="w-8 h-8 text-[#00b140] mb-4" />
                <p className="text-lg text-gray-800 italic mb-6 leading-relaxed">
                  "Pflegedienst 3eich hat unserer Familie in einer schwierigen Zeit geholfen. 
                  Die Betreuer sind nicht nur kompetent, sondern auch herzlich und einfühlsam. 
                  Wir fühlen uns wie eine große Familie."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-[#00b140] rounded-full flex items-center justify-center shadow-lg">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Familie Schmidt</div>
                    <div className="text-sm text-gray-600">Dreieich</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;