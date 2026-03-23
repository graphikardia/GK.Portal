import { TerminalProvider } from '../context/TerminalContext';

export const metadata = {
  title: 'Graphikardia - Professional Digital Marketing Agency',
  description: 'Graphikardia is a leading digital marketing agency offering SEO Services, Social Media Marketing, Website Design, Performance Marketing, AI Chatbots, and Advertising.',
  keywords: 'digital marketing agency, SEO services, social media marketing, website design, performance marketing, AI chatbots, advertising, Bangalore',
  author: 'Graphikardia',
  openGraph: {
    title: 'Graphikardia - Professional Digital Marketing Agency',
    description: 'Leading digital marketing agency offering SEO, Social Media Marketing, Website Design, Performance Marketing, AI Chatbots, and Advertising.',
    type: 'website',
    url: 'https://graphikardia.com',
    siteName: 'Graphikardia',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Graphikardia - Professional Digital Marketing Agency',
    description: 'Leading digital marketing agency offering SEO, Social Media Marketing, Website Design, Performance Marketing, AI Chatbots, and Advertising.',
  },
  robots: 'index, follow',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="robots" content={metadata.robots} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <link rel="canonical" href="https://graphikardia.com" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Graphikardia",
          "description": "Professional digital marketing agency offering SEO Services, Social Media Marketing, Website Design, Performance Marketing, AI Chatbots, and Advertising.",
          "url": "https://graphikardia.com",
          "telephone": "+917975594203",
          "email": "graphikardia@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bangalore",
            "addressRegion": "Karnataka",
            "addressCountry": "IN"
          },
          "areaServed": "IN",
          "priceRange": "$$",
          "openingHours": "Mo-Sa 09:00-19:00",
          "sameAs": [
            "https://facebook.com/graphikardia",
            "https://instagram.com/graphikardia",
            "https://linkedin.com/company/graphikardia",
            "https://twitter.com/graphikardia"
          ],
          "serviceType": [
            "SEO Services",
            "Social Media Marketing",
            "Website Design",
            "Performance Marketing",
            "AI Chatbots",
            "Advertising"
          ]
        }) }} />
      </head>
      <body>
        <TerminalProvider>
          {children}
        </TerminalProvider>
      </body>
    </html>
  );
}
