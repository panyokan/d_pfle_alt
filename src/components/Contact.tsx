import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageCircle, Sparkles, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    service: "",
    message: "",
    privacy: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateField = (name: string, value: string | boolean): string => {
    switch (name) {
      case "firstName":
        if (!value) return "Vorname ist erforderlich";
        if ((value as string).length < 2) return "Vorname muss mindestens 2 Zeichen lang sein";
        return "";
      case "lastName":
        if (!value) return "Nachname ist erforderlich";
        if ((value as string).length < 2) return "Nachname muss mindestens 2 Zeichen lang sein";
        return "";
      case "email":
        if (!value) return "E-Mail ist erforderlich";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value as string)) return "Bitte geben Sie eine gültige E-Mail-Adresse ein";
        return "";
      case "number":
        if (!value) return "Telefonnummer ist erforderlich";
        const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/;
        if (!phoneRegex.test(value as string)) return "Bitte geben Sie eine gültige Telefonnummer ein";
        return "";
      case "service":
        if (!value) return "Bitte wählen Sie eine Dienstleistung aus";
        return "";
      case "message":
        if (!value) return "Nachricht ist erforderlich";
        if ((value as string).length < 10) return "Nachricht muss mindestens 10 Zeichen lang sein";
        return "";
      case "privacy":
        if (!value) return "Sie müssen der Datenschutzerklärung zustimmen";
        return "";
      default:
        return "";
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    const fieldValue = type === "checkbox" ? checked : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: fieldValue
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: Record<string, string> = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      setSubmitStatus({
        type: "error",
        message: "Bitte füllen Sie alle erforderlichen Felder korrekt aus.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("https://algonod.onrender.com/contact-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          number: formData.number,
          company: formData.service,
          subject: formData.service,
          message: formData.message,
          address: "D_pfle"
        }),
      });

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Erfolgreich gesendet! Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
        });
        
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          number: "",
          service: "",
          message: "",
          privacy: false,
        });
        setErrors({});
      } else {
        throw new Error("Fehler beim Senden");
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Etwas ist schiefgelaufen. Bitte versuchen Sie es später erneut.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-secondary/30 font-montserrat">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Kontaktieren Sie uns
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Wir sind für Sie da! Kontaktieren Sie uns für eine kostenlose Beratung 
            oder bei Fragen zu unseren Dienstleistungen.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Sprechen Sie mit uns
              </h3>
              <p className="text-muted-foreground mb-8">
                Unser Team steht Ihnen gerne zur Verfügung für eine persönliche Beratung 
                oder bei Fragen zu unseren Dienstleistungen.
              </p>
            </div>
            
            <div className="space-y-6">
              <Card className="border-[#00b140]/20 hover:shadow-soft transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#00b140] rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Telefon</h4>
                      <p className="text-lg font-bold text-[#00b140]">+491606397787</p>
                      <p className="text-sm text-muted-foreground">Mo-Fr: 9:00 - 15:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-[#00b140]/20 hover:shadow-soft transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#00b140] rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">E-Mail</h4>
                      <p className="text-[#00b140] font-medium">info@dreieich-pflege.de</p>
                      <p className="text-sm text-muted-foreground">Antwort innerhalb 24h</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-[#00b140]/20 hover:shadow-soft transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#00b140] rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Adresse</h4>
                      <p className="text-muted-foreground">Freiherr-vom-Stein-Straße 42</p>
                      <p className="text-muted-foreground">63303 Dreieich-Sprendlingen</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-[#00b140]/20 hover:shadow-soft transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#00b140] rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Öffnungszeiten</h4>
                      <p className="text-muted-foreground">Mo-Fr: 9:00 - 15:00</p>
                      <p className="text-muted-foreground">Sa-So: Geschlossen</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#00b140]/10 to-transparent rounded-full blur-3xl -z-10"></div>
            <CardHeader className="pb-8 relative">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00b140] to-[#00a138] flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                  Kostenlose Beratung
                </CardTitle>
              </div>
              <p className="text-muted-foreground text-base leading-relaxed">
                Füllen Sie das Formular aus und wir melden uns innerhalb von <span className="font-semibold text-[#00b140]">24 Stunden</span> bei Ihnen.
              </p>
            </CardHeader>
            <CardContent className="px-6 pb-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Status Message */}
                {submitStatus.type && (
                  <div
                    className={`p-4 rounded-xl flex items-start gap-3 animate-in fade-in slide-in-from-top-2 duration-300 ${
                      submitStatus.type === "success"
                        ? "bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 shadow-sm"
                        : "bg-gradient-to-r from-red-50 to-rose-50 border-2 border-red-200 shadow-sm"
                    }`}
                  >
                    {submitStatus.type === "success" ? (
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5 animate-in zoom-in duration-300" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5 animate-in zoom-in duration-300" />
                    )}
                    <p
                      className={`text-sm font-semibold ${
                        submitStatus.type === "success"
                          ? "text-green-900"
                          : "text-red-900"
                      }`}
                    >
                      {submitStatus.message}
                    </p>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2 group">
                    <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                      Vorname <span className="text-red-500">*</span>
                    </label>
                    <Input 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Max"
                      className={`h-12 transition-all duration-200 ${
                        errors.firstName 
                          ? "border-red-400 focus-visible:ring-red-400 shadow-sm shadow-red-100" 
                          : "border-gray-300 focus-visible:ring-[#00b140] focus-visible:border-[#00b140] group-hover:border-gray-600"
                      }`}
                    />
                    {errors.firstName && (
                      <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1.5 animate-in slide-in-from-top-1 duration-200">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2 group">
                    <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                      Nachname <span className="text-red-500">*</span>
                    </label>
                    <Input 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Mustermann"
                      className={`h-12 transition-all duration-200 ${
                        errors.lastName 
                          ? "border-red-400 focus-visible:ring-red-400 shadow-sm shadow-red-100" 
                          : "border-gray-300 focus-visible:ring-[#00b140] focus-visible:border-[#00b140] group-hover:border-gray-600"
                      }`}
                    />
                    {errors.lastName && (
                      <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1.5 animate-in slide-in-from-top-1 duration-200">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="space-y-2 group">
                  <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#00b140]" />
                    E-Mail <span className="text-red-500">*</span>
                  </label>
                  <Input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="ihre.email@beispiel.de"
                    className={`h-12 transition-all duration-200 ${
                      errors.email 
                        ? "border-red-400 focus-visible:ring-red-400 shadow-sm shadow-red-100" 
                        : "border-gray-300 focus-visible:ring-[#00b140] focus-visible:border-[#00b140] group-hover:border-gray-600"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1.5 animate-in slide-in-from-top-1 duration-200">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.email}
                    </p>
                  )}
                </div>
                
                <div className="space-y-2 group">
                  <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#00b140]" />
                    Telefon <span className="text-red-500">*</span>
                  </label>
                  <Input 
                    name="number"
                    value={formData.number}
                    onChange={handleInputChange}
                    placeholder="+49 160 1234567"
                    className={`h-12 transition-all duration-200 ${
                      errors.number 
                        ? "border-red-400 focus-visible:ring-red-400 shadow-sm shadow-red-100" 
                        : "border-gray-300 focus-visible:ring-[#00b140] focus-visible:border-[#00b140] group-hover:border-gray-600"
                    }`}
                  />
                  {errors.number && (
                    <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1.5 animate-in slide-in-from-top-1 duration-200">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.number}
                    </p>
                  )}
                </div>
                
                <div className="space-y-2 group">
                  <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                    Gewünschte Dienstleistung <span className="text-red-500">*</span>
                  </label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className={`w-full h-12 px-4 py-2 border rounded-md bg-background transition-all duration-200 ${
                      formData.service === "" ? "text-muted-foreground" : "text-foreground"
                    } ${
                      errors.service 
                        ? "border-red-400 focus:ring-red-400 shadow-sm shadow-red-100" 
                        : "border-gray-300 focus:ring-[#00b140] focus:border-[#00b140] group-hover:border-gray-600"
                    }`}
                  >
                    <option value=""  >Wählen Sie eine Dienstleistung...</option>
                    <option value="Hauswirtschaftliche Hilfe">Hauswirtschaftliche Hilfe</option>
                    <option value="Entlastungsleistungen">Entlastungsleistungen</option>
                    <option value="Beratung & Planung">Beratung & Planung</option>
                    <option value="Gesellschaft & Begleitung">Gesellschaft & Begleitung</option>
                    <option value="Pflegehilfsmittel">Pflegehilfsmittel</option>
                    <option value="Notfallbetreuung">Notfallbetreuung</option>
                  </select>
                  {errors.service && (
                    <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1.5 animate-in slide-in-from-top-1 duration-200">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.service}
                    </p>
                  )}
                </div>
                
                <div className="space-y-2 group">
                  <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                    Ihre Nachricht <span className="text-red-500">*</span>
                  </label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Beschreiben Sie Ihre Situation und Ihre Wünsche..."
                    rows={5}
                    className={`resize-none transition-all duration-200 ${
                      errors.message 
                        ? "border-red-400 focus-visible:ring-red-400 shadow-sm shadow-red-100" 
                        : "border-gray-300 focus-visible:ring-[#00b140] focus-visible:border-[#00b140] group-hover:border-gray-600"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1.5 animate-in slide-in-from-top-1 duration-200">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.message}
                    </p>
                  )}
                </div>
                
                <div className="pt-2">
                  <div className="flex items-start space-x-3 p-4 rounded-lg bg-gray-50/50 border border-gray-100 hover:bg-gray-50 transition-colors duration-200">
                    <input 
                      type="checkbox" 
                      id="privacy" 
                      name="privacy"
                      checked={formData.privacy}
                      onChange={handleInputChange}
                      className={`mt-1 w-4 h-4 rounded border-2 text-[#00b140] focus:ring-[#00b140] transition-all ${
                        errors.privacy ? "border-red-400" : "border-gray-300"
                      }`}
                    />
                    <label htmlFor="privacy" className="text-sm text-muted-foreground font-montserrat leading-relaxed cursor-pointer">
                      Ich stimme der{" "}
                      <Link to="/privacy" className="text-[#00b140] hover:text-[#00a138] underline font-semibold transition-colors">
                        Datenschutzerklärung
                      </Link>{" "}
                      zu <span className="text-red-500">*</span>
                    </label>
                  </div>
                  {errors.privacy && (
                    <p className="text-xs text-red-600 mt-2 flex items-center gap-1.5 animate-in slide-in-from-top-1 duration-200">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.privacy}
                    </p>
                  )}
                </div>
                
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  className="mt-2 h-14 text-lg px-8 bg-gradient-to-r from-[#00b140] to-[#00a138] hover:from-[#00a138] hover:to-[#009030] text-white font-bold shadow-xl hover:shadow-2xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 w-full group/btn relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                {/* Shine effect */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000"></span>
                
                {/* Sparkle effect */}
                <Sparkles className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white opacity-0 group-hover/btn:opacity-100 group-hover/btn:animate-pulse transition-opacity duration-300" />
                <Sparkles className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white opacity-0 group-hover/btn:opacity-100 group-hover/btn:animate-pulse transition-opacity duration-300 delay-150" />
                
                {/* Button content */}
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <MessageCircle className="w-6 h-6" />
                  {isSubmitting ? "Wird gesendet..." : "Jetzt Beratung anfordern"}
                  <ArrowRight className="w-6 h-6 transform group-hover/btn:translate-x-2 transition-transform duration-300" />
                </span>
              </Button>
              
              <p className="text-xs text-center text-muted-foreground font-montserrat pt-3 flex items-center justify-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-[#00b140]"></span>
                Pflichtfelder | Ihre Daten werden vertraulich behandelt
                <span className="w-1 h-1 rounded-full bg-[#00b140]"></span>
              </p>
            </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;