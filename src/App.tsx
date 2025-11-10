import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import Home from "./pages/Home";
import Services from "./pages/Services";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Imprint from "./pages/Imprint";
import NotFound from "./pages/NotFound";
import ImprintPage from "./pages/ImprintPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";

const queryClient = new QueryClient();

const AppRoutes = () => {
  useScrollToTop();
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/imprint" element={<ImprintPage/>} />
      <Route path="/privacy" element={<PrivacyPolicyPage/>} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/team" element={<AboutPage />} /> {/* Temporary redirect to About */}
      <Route path="/faq" element={<AboutPage />} /> {/* Temporary redirect to About */}
      <Route path="/blog" element={<AboutPage />} /> {/* Temporary redirect to About */}
      <Route path="/downloads" element={<AboutPage />} /> {/* Temporary redirect to About */}
      <Route path="/privacy" element={<Imprint />} /> {/* Temporary redirect to Imprint */}
      <Route path="/terms" element={<Imprint />} /> {/* Temporary redirect to Imprint */}
      <Route path="/imprint" element={<Imprint />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/d_pfle_alt/">
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
