// src/pages/index.page.jsx
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

export { Page };

export const documentProps = {
  title: "Startseite | Muster Pflegeheim - Betreuung & Pflege",
  description: "Willkommen im Muster Pflegeheim. Wir bieten erstklassige Pflege, individuelle Betreuung und ein engagiertes Team für Senioren in Deutschland.",
  keywords: "Pflegeheim, Seniorenbetreuung, Altenpflege, Pflegedienst, Betreuung, Senioren, Pflege",
  canonical: "/",
  ogImage: "/og-image.jpg"
};

function Page() {
  return (
    <div className="min-h-screen transition-all duration-500 ease-in-out">
      {/* Structured Data for SEO */}
      <StructuredData />
      
      {/* Language specification for better SEO */}
      <div lang="de">
        <Header />
        <Hero />
        <About />
        <Services />
        <TeamSection />
        <Footer />
      </div>
    </div>
  );
}