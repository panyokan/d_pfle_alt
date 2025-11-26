// components/SEO.js
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "Pflegedienst Dreieich – Qualität ist kein Zufall", 
  description = "Professionelle und liebevolle Betreuung in Ihrem gewohnten Umfeld. Wir kommen zu Ihnen nach Hause.", 
  canonicalUrl = "https://www.dreieich-pflege.de",
  ogImage = "/hero-image.jpeg",
  keywords = "Pflege, Hauskrankenpflege, Betreuung, Dreieich, Altenpflege, Pflegedienst"
}) => {
  
  // Use absolute URL for OG image to ensure it works everywhere
  const fullOgImage = ogImage.startsWith('http') 
    ? ogImage 
    : `https://www.dreieich-pflege.de${ogImage}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="de" />
      <meta name="author" content="Pflegedienst Dreieich" />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Pflegedienst Dreieich" />
      <meta property="og:locale" content="de_DE" />
      <meta property="og:url" content={canonicalUrl} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Additional important tags */}
      <meta name="theme-color" content="#3b82f6" />
    </Helmet>
  );
};

export default SEO;