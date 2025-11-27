import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import TeamSection from "@/components/TeamSection";
import SEO from "@/components/SEO";

const Home = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Pflegedienst Dreieich – Qualität ist kein Zufall"
        description="Professionelle und liebevolle Betreuung in Ihrem gewohnten Umfeld. Wir kommen zu Ihnen nach Hause."
        canonicalUrl="https://www.dreieich-pflege.de"
     
  ogImage="https://www.dreieich-pflege.de/hero-image.jpeg"


        keywords="Pflege, Hauskrankenpflege, Betreuung, Dreieich, Altenpflege, Pflegedienst"
      />
      
      <Header />
      <Hero />
      <About />
      <Services />
      <TeamSection/>
      {/* <Contact /> */}
      <Footer />
    </div>
  );
};

export default Home;