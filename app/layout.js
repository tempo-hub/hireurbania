import './globals.css';

export const metadata = {
  metadataBase: new URL('https://hireurbaniatempotraveller.com'),
  title: {
    default: 'Hire Force Urbania Tempo Traveller | Luxury Van Rental India',
    template: '%s | Hire Force Urbania',
  },
  description: 'Book ultra-luxury Force Urbania Tempo Traveller across India (Delhi, Noida, Gurugram, Indore, Ujjain, Jaipur, Rishikesh & 100+ routes). Premium 9, 12, 16, 17 & 20 seater variants with pushback recliners & air suspension.',
  keywords: [
    'hire urbania',
    'urbania tempo traveller',
    'force urbania rental',
    '9 seater urbania',
    '12 seater urbania',
    '16 seater urbania',
    '17 seater urbania',
    '20 seater urbania maharaja',
    'delhi to manali urbania',
    'delhi to kedarnath urbania',
    'indore to ujjain urbania',
    'luxury tempo traveller rental'
  ],
  authors: [{ name: 'Hire Urbania Fleet Services' }],
  creator: 'Hire Urbania',
  publisher: 'Hire Urbania Fleet Services',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: 'https://hireurbaniatempotraveller.com',
  },
  openGraph: {
    title: 'Hire Force Urbania Tempo Traveller | Luxury Travel India',
    description: 'Experience premium luxury travel with Force Urbania. 9 to 20 seater variants available for outstation, hill stations, and pilgrimage trips across India.',
    url: 'https://hireurbaniatempotraveller.com',
    siteName: 'Hire Force Urbania Tempo Traveller',
    images: [
      {
        url: '/images/hero.png',
        width: 1200,
        height: 630,
        alt: 'Force Urbania Luxury Tempo Traveller',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire Force Urbania Tempo Traveller | Luxury Travel India',
    description: 'Book ultra-luxury Force Urbania Tempo Traveller (9, 12, 16, 17, 20 seaters) with air suspension, pushback leather seats & certified drivers.',
    images: ['/images/hero.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0770E3',
};

export default function RootLayout({ children }) {
  const jsonLdOrg = {
    '@context': 'https://schema.org',
    '@type': 'AutoRental',
    name: 'Hire Force Urbania Tempo Traveller',
    url: 'https://hireurbaniatempotraveller.com',
    logo: 'https://hireurbaniatempotraveller.com/images/hero.png',
    image: 'https://hireurbaniatempotraveller.com/images/hero.png',
    description: 'Premier Force Urbania luxury van rental service across India. 9 to 20 seater variants available for outstation, pilgrimage, and corporate tours.',
    telephone: '+919876543210',
    priceRange: '₹26 - ₹38 per km',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      addressRegion: 'Delhi NCR & Pan India',
    },
    areaServed: [
      'Delhi', 'Noida', 'Gurugram', 'Ghaziabad', 'Indore', 'Ujjain',
      'Jaipur', 'Rishikesh', 'Haridwar', 'Dehradun', 'Chandigarh', 'Mumbai', 'Ayodhya'
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '2540',
      bestRating: '5',
      worstRating: '1'
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
