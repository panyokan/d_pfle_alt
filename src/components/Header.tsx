import { Button } from "@/components/ui/button";
import {
  Phone,
  MapPin,
  Menu,
  X,
  Heart,
  Home,
  Users,
  FileText,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logoImage from "@/assets/logo.jpeg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Scroll effect handler
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Helper function to check if a link is active
  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  // Helper function to get active link styles
  const getActiveStyles = (path: string) => {
    const baseStyles = "pb-1 transition-all duration-300 font-medium";
    const activeStyles =
      "text-[#00b140] font-semibold border-b-2 border-[#00b140]";
    const inactiveStyles = "text-steel-gray hover:text-[#00b140]";

    return `${baseStyles} ${isActive(path) ? activeStyles : inactiveStyles}`;
  };

  // Header background styles based on scroll state
  const headerBackground = isScrolled
    ? "bg-warm-white/95 backdrop-blur-lg shadow-2xl shadow-[#00b140]/20 border-b border-[#00b140]/30"
    : "bg-transparent shadow-none border-none";

  // Text and logo styles based on scroll state
  const textColor = isScrolled ? "text-steel-gray" : "text-white";
  const logoTextGradient = isScrolled
    ? "bg-gradient-to-r from-steel-gray to-[#00b140] bg-clip-text text-transparent"
    : "bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent";

  const logoSubtextColor = isScrolled ? "text-steel-gray/70" : "text-white/80";
  const navTextColor = isScrolled ? "text-steel-gray" : "text-white";
  const borderColor = isScrolled ? "border-[#00b140]/40" : "border-white/40";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBackground}`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 sm:space-x-4 group">
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden border-2 ${borderColor} shadow-lg group-hover:shadow-[#00b140]/30 transition-all duration-300 group-hover:scale-105`}
              >
                <img
                  src={logoImage}
                  alt="Pflegedienst Dreieich Logo"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="hidden sm:block">
                <span className={`text-xl sm:text-2xl font-bold ${logoTextGradient}`}>
               Pflegedienst Dreieich
                </span>
                <div
                  className={`text-xs sm:text-sm font-medium transition-colors duration-300 ${logoSubtextColor}`}
                >
                  Qualität ist kein zufall
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center space-x-6 xl:space-x-8">
            <Link to="/" className={`${getActiveStyles("/")} ${navTextColor}`}>
              <div className="flex items-center space-x-1">
                <Home className="w-4 h-4" />
                <span className="text-sm xl:text-base">Startseite</span>
              </div>
            </Link>
            <Link
              to="/services"
              className={`${getActiveStyles("/services")} ${navTextColor}`}
            >
              <div className="flex items-center space-x-1">
                <Heart className="w-4 h-4" />
                <span className="text-sm xl:text-base">Leistungen</span>
              </div>
            </Link>
            <Link
              to="/about"
              className={`${getActiveStyles("/about")} ${navTextColor}`}
            >
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4" />
                <span className="text-sm xl:text-base">Über uns</span>
              </div>
            </Link>
            <Link
              to="/contact"
              className={`${getActiveStyles("/contact")} ${navTextColor}`}
            >
              <div className="flex items-center space-x-1">
                <FileText className="w-4 h-4" />
                <span className="text-sm xl:text-base">Kontakt</span>
              </div>
            </Link>
          </nav>

          {/* Contact Info & CTA - Desktop */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <div
              className={`hidden xl:flex items-center space-x-4 text-sm transition-colors duration-300 ${
                isScrolled ? "text-steel-gray/70" : "text-white/80"
              }`}
            >
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>06103 - 802 57 31</span>
              </div>
            </div>
            <Link to="/contact">
              <Button
                size="sm"
                className={`text-sm xl:text-base px-6 py-3 bg-white text-[#00b140] hover:bg-[#00b140] hover:text-white font-semibold border-2 border-[#00b140] transition-all duration-300 shadow-lg group/btn relative overflow-hidden hover:shadow-xl hover:border-[#00b140] ${
                  isScrolled
                    ? ""
                    : "bg-white/20 backdrop-blur-md text-white border-2 border-white/40 hover:bg-[#00b140] hover:border-[#00b140]"
                }`}
              >
                {/* Animated background on hover */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#00b140] via-[#00a138] to-[#00b140] transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 origin-left"></span>
                
                {/* Sparkle effect */}
                <Sparkles className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white opacity-0 group-hover/btn:opacity-100 group-hover/btn:animate-pulse transition-opacity duration-300" />
                <Sparkles className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white opacity-0 group-hover/btn:opacity-100 group-hover/btn:animate-pulse transition-opacity duration-300 delay-150" />
                
                {/* Button content */}
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Kontaktieren Sie uns
                  <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300 group-hover/btn:scale-110" />
                </span>
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 transition-colors duration-300 ${
              isScrolled ? "text-steel-gray" : "text-white"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menü öffnen oder schließen"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Simple Mobile Navigation Overlay */}
        {isMenuOpen && (
          <div className="lg:hidden">
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 mt-16"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Simple Mobile Menu */}
            <div
              className={`fixed top-16 left-0 right-0 z-50 bg-warm-white/95 backdrop-blur-lg border-b border-[#00b140]/20 shadow-2xl transform transition-transform duration-300 ${
                isMenuOpen ? 'translate-y-0' : '-translate-y-full'
              }`}
            >
              <div className="container mx-auto px-4 sm:px-6 py-6">
                {/* Simple Navigation Links */}
                <nav className="flex flex-col space-y-2 mb-6">
                  <Link
                    to="/"
                    className={`flex items-center space-x-3 py-4 px-4 rounded-xl transition-all duration-300 ${
                      isActive("/")
                        ? "bg-[#00b140]/20 text-[#00b140] font-semibold"
                        : "text-steel-gray hover:bg-[#00b140]/10 hover:text-[#00b140]"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Home className="w-5 h-5" />
                    <span className="text-lg font-medium">Startseite</span>
                  </Link>
                  <Link
                    to="/services"
                    className={`flex items-center space-x-3 py-4 px-4 rounded-xl transition-all duration-300 ${
                      isActive("/services")
                        ? "bg-[#00b140]/20 text-[#00b140] font-semibold"
                        : "text-steel-gray hover:bg-[#00b140]/10 hover:text-[#00b140]"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Heart className="w-5 h-5" />
                    <span className="text-lg font-medium">Leistungen</span>
                  </Link>
                  <Link
                    to="/about"
                    className={`flex items-center space-x-3 py-4 px-4 rounded-xl transition-all duration-300 ${
                      isActive("/about")
                        ? "bg-[#00b140]/20 text-[#00b140] font-semibold"
                        : "text-steel-gray hover:bg-[#00b140]/10 hover:text-[#00b140]"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Users className="w-5 h-5" />
                    <span className="text-lg font-medium">Über uns</span>
                  </Link>
                  <Link
                    to="/contact"
                    className={`flex items-center space-x-3 py-4 px-4 rounded-xl transition-all duration-300 ${
                      isActive("/contact")
                        ? "bg-[#00b140]/20 text-[#00b140] font-semibold"
                        : "text-steel-gray hover:bg-[#00b140]/10 hover:text-[#00b140]"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <FileText className="w-5 h-5" />
                    <span className="text-lg font-medium">Kontakt</span>
                  </Link>
                </nav>

                {/* Simple Contact Info */}
                <div className="border-t border-[#00b140]/20 pt-6">
                  <div className="flex flex-col space-y-4">
                    {/* Phone Number */}
                    <div className="flex items-center justify-center space-x-3">
                      <div className="flex items-center space-x-2 bg-[#00b140]/10 px-4 py-3 rounded-lg">
                        <Phone className="w-5 h-5 text-[#00b140]" />
                        <span className="text-lg font-semibold text-steel-gray">06103 - 802 57 31</span>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-center justify-center space-x-2 text-steel-gray/70 text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>Dreieich, Deutschland</span>
                    </div>

                    {/* Mobile CTA Button */}
                    <div className="pt-4">
                      <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                        <Button
                          size="lg"
                          className="w-full text-base py-4 bg-white text-[#00b140] hover:bg-[#00b140] hover:text-white font-semibold border-2 border-[#00b140] transition-all duration-300 shadow-lg group/btn relative overflow-hidden hover:shadow-xl hover:border-[#00b140]"
                        >
                          {/* Animated background on hover */}
                          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#00b140] via-[#00a138] to-[#00b140] transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 origin-left"></span>
                          
                          {/* Sparkle effect */}
                          <Sparkles className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white opacity-0 group-hover/btn:opacity-100 group-hover/btn:animate-pulse transition-opacity duration-300" />
                          <Sparkles className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white opacity-0 group-hover/btn:opacity-100 group-hover/btn:animate-pulse transition-opacity duration-300 delay-150" />
                          
                          {/* Button content */}
                          <span className="relative z-10 flex items-center justify-center gap-2">
                            Kontaktieren Sie uns
                            <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300 group-hover/btn:scale-110" />
                          </span>
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;