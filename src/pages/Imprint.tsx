import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Scale, FileText, Shield, Users, Heart } from "lucide-react";

const Imprint = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-muted to-muted/60">
        <div className="container mx-auto px-6 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Rechtliche Informationen
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Wichtige rechtliche Informationen, Lizenzdetails und Compliance-Informationen 
              für die Pflegedienst Dreieich Seniorenwohnanlage.
            </p>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8 animate-fade-in">
              <h2 className="text-4xl font-bold text-foreground">
                Unternehmensinformationen
              </h2>
              
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-[#00b140] rounded-lg flex items-center justify-center">
                      <Building className="w-6 h-6 text-white" />
                    </div>
                    <span>Einrichtungsdetails</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="font-semibold text-foreground">Rechtlicher Name:</div>
                    <div className="text-muted-foreground">Pflegedienst Dreieich Seniorenwohnanlage GmbH</div>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Adresse:</div>
                    <div className="text-muted-foreground">
                      Musterstraße 123<br />
                      63303 Dreieich<br />
                      Deutschland
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Telefon:</div>
                    <div className="text-muted-foreground">+49 (0) 6103 123-456</div>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">E-Mail:</div>
                    <div className="text-muted-foreground">rechtliches@dreieich-pflege.de</div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-8 animate-fade-in">
              <h2 className="text-4xl font-bold text-foreground">
                Geschäftsführung
              </h2>
              
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-[#00b140] rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <span>Führungsteam</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="font-semibold text-foreground">Geschäftsführerin:</div>
                    <div className="text-muted-foreground">Sarah Johnson, Pflegedienstleitung</div>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Medizinischer Leiter:</div>
                    <div className="text-muted-foreground">Dr. Michael Chen, Facharzt für Innere Medizin</div>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Verwaltungsleiterin:</div>
                    <div className="text-muted-foreground">Jennifer Martinez, Verwaltungsleitung</div>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Pflegedienstleitung:</div>
                    <div className="text-muted-foreground">Patricia Williams, Pflegedienstleitung</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Licensing & Compliance */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Lizenzen & Compliance
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Unsere Einrichtung arbeitet in voller Übereinstimmung mit staatlichen und bundesweiten Vorschriften
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-border/50 animate-scale-in">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#00b140] rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-foreground">Landeslizenz</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-2">
                <div className="font-semibold text-foreground">Lizenz Nr.: HE-2024-789</div>
                <div className="text-muted-foreground">Ausgestellt vom Landesgesundheitsamt</div>
                <div className="text-muted-foreground">Gültig bis 31. Dezember 2024</div>
                <div className="text-sm text-[#00b140] font-semibold">5-Sterne Bewertung</div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-border/50 animate-scale-in delay-100">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#00b140] rounded-full flex items-center justify-center">
                  <Scale className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-foreground">MDK Zertifiziert</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-2">
                <div className="font-semibold text-foreground">Anbieter Nr.: 124567</div>
                <div className="text-muted-foreground">Medizinischer Dienst der Krankenversicherung</div>
                <div className="text-muted-foreground">Aktuelle Zertifizierung aktiv</div>
                <div className="text-sm text-[#00b140] font-semibold">Vollständige Compliance</div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-border/50 animate-scale-in delay-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#00b140] rounded-full flex items-center justify-center">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-foreground">Akkreditierungen</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-2">
                <div className="text-muted-foreground">TÜV Süd Zertifiziert</div>
                <div className="text-muted-foreground">Deutscher Pflegeverband Mitglied</div>
                <div className="text-muted-foreground">Bundesverband Mitglied</div>
                <div className="text-sm text-[#00b140] font-semibold">Alle Aktuell</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Legal Notices */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Rechtliche Hinweise
              </h2>
            </div>
            
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Datenschutzerklärung</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  Pflegedienst Dreieich Seniorenwohnanlage ist verpflichtet, die Privatsphäre und Vertraulichkeit 
                  der persönlichen und gesundheitsbezogenen Daten unserer Bewohner zu schützen. Wir halten uns 
                  an alle geltenden Datenschutzgesetze einschließlich der DSGVO (Datenschutz-Grundverordnung) 
                  und unterhalten strenge Protokolle für den Umgang mit sensiblen Informationen.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Unsere Datenschutzpraktiken stellen sicher, dass persönliche Gesundheitsinformationen nur 
                  für Behandlung, Abrechnung und Gesundheitsvorgänge verwendet werden. Wir geben keine 
                  Informationen an Dritte weiter ohne ordnungsgemäße Genehmigung oder gesetzliche Anforderung.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Bewohnerrechte</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Alle Bewohner haben grundlegende Rechte, die durch Bundes- und Landesgesetze geschützt sind. 
                  Diese Rechte umfassen unter anderem:
                </p>
                <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                  <li>Recht auf würdevolles Verhalten und Pflege</li>
                  <li>Recht auf Beteiligung an Pflegeplanungsentscheidungen</li>
                  <li>Recht auf Privatsphäre und Vertraulichkeit</li>
                  <li>Recht auf Beschwerden ohne Vergeltungsmaßnahmen</li>
                  <li>Recht auf Besucher und freie Kommunikation</li>
                  <li>Recht auf Verwaltung persönlicher Finanzen</li>
                  <li>Recht auf Schutz vor Missbrauch, Vernachlässigung und Ausbeutung</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Kontakt für Beschwerden</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Bei Bedenken bezüglich Pflege oder Behandlung kontaktieren Sie bitte:
                </p>
                <div className="space-y-3">
                  <div>
                    <div className="font-semibold text-foreground">Einrichtungsleiterin:</div>
                    <div className="text-muted-foreground">+49 (0) 6103 123-456 Durchwahl 101</div>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Landesombudsmann:</div>
                    <div className="text-muted-foreground">+49 (0) 69 123-456</div>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Landesgesundheitsamt:</div>
                    <div className="text-muted-foreground">+49 (0) 69 987-654</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Notfallverfahren</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Pflegedienst Dreieich unterhält umfassende Notfallvorsorgepläne, die von lokalen und 
                  staatlichen Behörden genehmigt wurden. Unsere Einrichtung ist mit Notstrom, 
                  Kommunikationssystemen und Evakuierungsverfahren ausgestattet. Alle Mitarbeiter 
                  erhalten regelmäßige Notfallreaktionstrainings, und wir führen das ganze Jahr über 
                  obligatorische Übungen durch.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center text-sm text-muted-foreground animate-fade-in">
            <p>
              Diese Website und ihre Inhalte dienen nur zu Informationszwecken. 
              Für spezifische medizinische Beratung oder Pflegeentscheidungen konsultieren Sie bitte unsere Gesundheitsfachkräfte.
            </p>
            <p className="mt-2">
              Zuletzt aktualisiert: Januar 2024 | © 2024 Pflegedienst Dreieich Seniorenwohnanlage GmbH. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Imprint;