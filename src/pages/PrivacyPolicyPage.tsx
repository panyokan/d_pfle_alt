import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, User, Shield, Lock, Cookie, Globe, FileText } from "lucide-react";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen font-montserrat">
      <Header />
      
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-[#00b140] to-[#00b140]/90 text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-2">
            Datenschutzerklärung
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto px-4">
            Informationen zum Umgang mit Ihren personenbezogenen Daten
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Responsible Party */}
            <Card className="mb-8 md:mb-12 border-[#00b140]/20 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-[#00b140]/5 to-[#00b140]/10 p-4 sm:p-6">
                <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-[#00b140]" />
                  Verantwortlicher für die Datenverarbeitung
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                <div>
                  <p className="text-gray-700 mb-4 text-sm sm:text-base">
                    Verantwortliche Stelle im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist:
                  </p>
                  
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-start space-x-3 p-3 sm:p-4 bg-gray-50 rounded-lg">
                      <User className="w-4 h-4 sm:w-5 sm:h-5 text-[#00b140] mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Verantwortliche Personen:</h4>
                        <p className="text-gray-700 text-sm sm:text-base">Magdalena Glowa</p>
                        <p className="text-gray-700 text-sm sm:text-base">Puneet Kaur Parmar</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-3 sm:space-y-4">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900">Anschrift:</h3>
                    
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#00b140] mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-900 text-sm sm:text-base">Pflegedienst 3eich GmbH</div>
                        <div className="text-gray-700 text-sm sm:text-base">Freiherr-vom-Stein-Straße 42</div>
                        <div className="text-gray-700 text-sm sm:text-base">63303 Dreieich-Sprendlingen</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 sm:space-y-4">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900">Kontakt:</h3>
                    
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#00b140] flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-900 text-sm sm:text-base">Telefon:</div>
                        <div className="text-gray-700 text-sm sm:text-base">06103-8025731</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-900 text-sm sm:text-base">Fax:</div>
                        <div className="text-gray-700 text-sm sm:text-base">06103-8025734</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#00b140] flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-900 text-sm sm:text-base">E-mail:</div>
                        <div className="text-gray-700 text-sm sm:text-base break-all">pflegedienst.3eich@yahoo.com</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Datenschutzerklärung */}
            <Card className="mb-6 md:mb-8 border-[#00b140]/20 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-[#00b140]/5 to-[#00b140]/10 p-4 sm:p-6">
                <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900">
                  Datenschutzerklärung
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Wir, die Ambulanter Pflegedienst 3eich GmbH, freuen uns über Ihr Interesse an unserem 
                  Internetauftritt und möchten Ihnen den Aufenthalt auf unserer Homepage so angenehm wie 
                  möglich gestalten. Der Schutz Ihrer Privatsphäre ist für uns sehr wichtig. Nachstehend 
                  informieren wir Sie daher über den Umgang mit Ihren personenbezogenen Daten und die 
                  entsprechenden Rechte.
                </p>
              </CardContent>
            </Card>

            {/* Sections */}
            <div className="space-y-6 md:space-y-8">
              {/* Section 1 */}
              <Card className="border-[#00b140]/20 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-[#00b140]/5 to-[#00b140]/10 p-4 sm:p-6">
                  <CardTitle className="text-lg sm:text-xl font-bold text-gray-900">
                    1. Art und Umfang der Datenverarbeitung
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6">
                  <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-sm sm:text-base">
                    <p>
                      Sie können unsere Webseite besuchen ohne Angaben zu Ihrer Person zu machen. 
                      Wir speichern lediglich Ihre persönlichen Daten in unserem Kontaktformular. 
                      Zusätzlich erheben wir bei einem Aufruf unserer Website die übermittelte IP-Adresse.
                    </p>
                    <p>
                      Die IP-Adresse kann ein personenbezogenes Datum sein, weil es unter bestimmten 
                      Voraussetzungen möglich ist, die Identität des Inhabers des genutzten Internetzugangs 
                      in Erfahrung zu bringen. Die IP-Adresse wird von uns bei Angriffen auf unsere 
                      Internet-Infrastruktur oder einer sonstigen missbräuchlichen Nutzung unserer Webseite 
                      ausgewertet. Daran haben wir im Sinne des Art. 6 Abs. 1 f) DSGVO ein berechtigtes Interesse.
                    </p>
                    <p>
                      Das ergibt sich aus dem Bedürfnis, einen Angriff auf die Internet-Infrastruktur 
                      abzuwehren, den Ursprung des Angriffs zu ermitteln und gegen die verantwortliche 
                      Person straf- und zivilrechtliche Schritte einzuleiten, sowie weiteren Angriffen 
                      effektiv vorzubeugen und die Internetpräsenz störungsfrei zu betreiben. Wenn 
                      ausgeschlossen werden kann, dass ein solcher Angriff erfolgt ist, wird die IP-Adresse 
                      gelöscht. Dies geschieht nach sieben Tagen.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Section 2 */}
              <Card className="border-[#00b140]/20 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-[#00b140]/5 to-[#00b140]/10 p-4 sm:p-6">
                  <CardTitle className="text-lg sm:text-xl font-bold text-gray-900">
                    2. Datenverarbeitung zur Bearbeitung Ihrer Anfragen
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6">
                  <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-sm sm:text-base">
                    <p>
                      Wir bieten Ihnen die Möglichkeit, per E-Mail oder über die auf unserer Webseite 
                      hinterlegten Formulare Kontakt aufzunehmen. Dabei erheben wir nur die personenbezogenen 
                      Daten, die Sie uns bei der Kontaktaufnahme freiwillig mitteilen. Im Fall der Nutzung 
                      eines der hinterlegten Kontaktformulare sind dies:
                    </p>
                    <ul className="list-disc list-inside space-y-1 sm:space-y-2 ml-3 sm:ml-4">
                      <li>Ihr Vor- und Nachname</li>
                      <li>Ihre E-Mail-Adresse</li>
                      <li>Ihre Telefonnummer</li>
                      <li>Betreff und den Inhalt der an uns übermittelten Nachricht</li>
                    </ul>
                    <p>
                      Diese Daten verwenden wir ausschließlich zur Bearbeitung und Beantwortung Ihrer 
                      Anfrage, also insbesondere zum Kontakt mit Ihnen. Bei der Kontaktaufnahme über das 
                      Kontaktformular unserer Homepage holen wir stets Ihr Einverständnis ein, dass wir 
                      die von Ihnen angegebenen Daten für die Beantwortung Ihrer Anfrage nutzen und an 
                      den zuständigen Ansprechpartner weiterleiten dürfen.
                    </p>
                    <p>
                      Damit erfolgt die Verarbeitung Ihrer Daten auf Basis Ihrer ausdrücklichen Einwilligung 
                      nach Art. 6 Abs. 1a) DSGVO. Sofern die Kontaktaufnahme der Erfüllung oder Vorbereitung 
                      eines Vertrages dient, ist die Rechtsgrundlage Art. 6 Abs. 1b) DSGVO, soweit nicht 
                      besondere Kategorien personenbezogener Daten betroffen sind. Ihre Daten werden, unter 
                      Beachtung eventuell bestehender gesetzlicher Aufbewahrungsfristen, gelöscht, sobald 
                      sich Ihre Anfrage vollständig erledigt hat.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Section 3 */}
              <Card className="border-[#00b140]/20 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-[#00b140]/5 to-[#00b140]/10 p-4 sm:p-6">
                  <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 flex items-center">
                    <Lock className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0 text-[#00b140]" />
                    3. SSL- bzw. TLS-Verschlüsselung
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6">
                  <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-sm sm:text-base">
                    <p>
                      Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher 
                      Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber 
                      senden, eine SSL-bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen 
                      Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt 
                      und an dem Schloss-Symbol in Ihrer Browserzeile.
                    </p>
                    <p>
                      Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an 
                      uns übermitteln, nicht von Dritten mitgelesen werden.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Section 4 */}
              <Card className="border-[#00b140]/20 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-[#00b140]/5 to-[#00b140]/10 p-4 sm:p-6">
                  <CardTitle className="text-lg sm:text-xl font-bold text-gray-900">
                    4. Server-Log-Dateien
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6">
                  <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-sm sm:text-base">
                    <p>
                      Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten 
                      Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                    </p>
                    <ul className="list-disc list-inside space-y-1 sm:space-y-2 ml-3 sm:ml-4">
                      <li>Browsertyp und Browserversion</li>
                      <li>verwendetes Betriebssystem</li>
                      <li>Referrer URL</li>
                      <li>Hostname des zugreifenden Rechners</li>
                      <li>Uhrzeit der Serveranfrage</li>
                      <li>IP-Adresse</li>
                    </ul>
                    <p>
                      Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
                    </p>
                    <p>
                      Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO, der die Verarbeitung 
                      von Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Section 5 */}
              <Card className="border-[#00b140]/20 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-[#00b140]/5 to-[#00b140]/10 p-4 sm:p-6">
                  <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 flex items-center">
                    <Cookie className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0 text-[#00b140]" />
                    5. Cookies
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6">
                  <div className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    <p>
                      Wie fast jede moderne Webpräsenz benutzen wir Cookies, um die Benutzung der Website 
                      komfortabler zu gestalten. Ein Cookie ist ein meist kurzer Info-Text, der technische 
                      Informationen über Ihren Besuch auf unserer Website in Ihrem Browser speichert, damit 
                      bestimmte Funktionen zur Verfügung gestellt werden können (wie zum Beispiel eine 
                      Spracheinstellung oder ein Warenkorb). Sie können die Benutzung von Cookies in Ihrem 
                      Browser abschalten. Das kann eingeschränkte Funktionalität zur Folge haben.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Section 9 - Your Rights */}
              <Card className="border-[#00b140]/20 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-[#00b140]/5 to-[#00b140]/10 p-4 sm:p-6">
                  <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 flex items-center">
                    <FileText className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0 text-[#00b140]" />
                    9. Ihre Rechte
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6">
                  <div className="text-gray-700 leading-relaxed space-y-4 sm:space-y-6 text-sm sm:text-base">
                    <p>
                      Bezüglich der oben beschriebenen Verarbeitungsvorgänge haben Sie die nachfolgend 
                      aufgeführten Rechte. Diese können Sie grundsätzlich unentgeltlich in Anspruch nehmen. 
                      Allerdings behalten wir uns vor, bei offenkundig unbegründeten oder bei Anträgen mit 
                      häufigen Wiederholungen ein angemessenes Entgelt zu verlangen, bei dem die entstehenden 
                      Verwaltungskosten berücksichtigt werden.
                    </p>

                    <div className="space-y-3 sm:space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">9.1 Widerruf von erteilten Einwilligungen</h4>
                        <p>
                          Jede Einwilligung, die Sie uns für die Verarbeitung Ihrer personenbezogenen Daten 
                          erteilt haben, können Sie mit Wirkung für die Zukunft widerrufen. Dies berührt 
                          jedoch nicht die Rechtmäßigkeit der aufgrund Ihrer Einwilligung bis zum Widerruf 
                          erfolgten Verarbeitung Ihrer Daten.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">9.2 Bestätigung und Auskunft</h4>
                        <p>
                          Sie können eine Bestätigung darüber verlangen, ob Ihre personenbezogenen Daten 
                          verarbeitet werden. Ist dies der Fall, haben Sie einen Anspruch auf Auskunft über 
                          die in Art. 15 DSGVO genannten Einzelinformationen.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">9.3 Berichtigung und Löschung</h4>
                        <p>
                          Sie können die Berichtigung unrichtiger und die Vervollständigung unvollständiger 
                          personenbezogener Daten (Art. 16 DSGVO) sowie unter den Voraussetzungen von Art. 
                          17 DSGVO die Löschung Ihrer personenbezogenen Daten verlangen.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">9.4 Einschränkung der Verarbeitung</h4>
                        <p>
                          Sie können die Verarbeitung Ihrer personenbezogenen Daten unter den Voraussetzungen 
                          des Art. 18 DSGVO einschränken.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">9.5 Widerspruch</h4>
                        <p>
                          Sie können aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen die 
                          Verarbeitung Ihrer personenbezogenen Daten jederzeit Widerspruch einlegen, wenn 
                          sich diese auf die Rechtsgrundlage Art. 6 Abs. 1 e) oder f) DSGVO stützen. Ihre 
                          personenbezogenen Daten werden nach dem Widerspruch nicht mehr von uns verarbeitet. 
                          Ausgenommen bleibt, wenn wir zwingende schutzwürdige Gründe für die Verarbeitung 
                          nachweisen können, die Ihren Interessen, Rechten und Freiheiten überwiegen oder 
                          wenn die Verarbeitung der Geltendmachung, Ausübung oder Verteidigung von 
                          Rechtsansprüchen dient.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">9.6 Herausgabe der Daten und Datenübertragbarkeit</h4>
                        <p>
                          Sie können Ihre personenbezogenen Daten, die Sie bereitgestellt haben, in einem 
                          strukturierten, gängigen und maschinenlesbaren Format erhalten. Soweit dies technisch 
                          machbar ist, haben Sie das Recht, dass diese Daten auf Ihre Anweisung hin einem 
                          anderen Verantwortlichen übermittelt werden. Das Recht auf Datenübertragung besteht 
                          nur insoweit, als die Verarbeitung auf einer Einwilligung nach Art. 6 Abs. 1a) DSGVO 
                          oder auf einem Vertrag gem. Art. 6 Abs. 1b) DSGVO beruht und die Verarbeitung mittels 
                          automatisierter Verfahren erfolgt. Dieses Recht ist ausgeschlossen, wenn hierdurch 
                          Rechte und Freiheiten anderer Personen (insbesondere personenbezogene Daten Dritter, 
                          unsererseits bestehende Geschäfts- oder Betriebsgeheimnisse, Urheberrechte) 
                          beeinträchtigt würden.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Final Sections */}
              <Card className="border-[#00b140]/20 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-[#00b140]/5 to-[#00b140]/10 p-4 sm:p-6">
                  <CardTitle className="text-lg sm:text-xl font-bold text-gray-900">
                    10. Pflicht zur Bereitstellung von Daten
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6">
                  <div className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    <p>
                      Es besteht für Sie keinerlei gesetzliche oder vertragliche Pflicht zur Bereitstellung 
                      Ihrer personenbezogenen Daten. Falls Sie unsere Leistungen in Anspruch nehmen möchten, 
                      ist die Bereitstellung Ihrer persönlichen Daten zwingend erforderlich, wenn das für 
                      die Erbringung der jeweiligen Leistung notwendig ist.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#00b140]/20 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-[#00b140]/5 to-[#00b140]/10 p-4 sm:p-6">
                  <CardTitle className="text-lg sm:text-xl font-bold text-gray-900">
                    11. Aktualisierung dieser Datenschutzhinweise
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6">
                  <div className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    <p>
                      Durch neue gesetzliche Vorgaben oder durch neue Angebote auf unserer Homepage kann 
                      es erforderlich werden, diese Datenschutzhinweise zu aktualisieren. Darüber werden 
                      wir Sie an dieser Stelle informieren.
                    </p>
                    <p className="mt-3 sm:mt-4 font-semibold text-sm sm:text-base">Stand: Januar 2020</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;