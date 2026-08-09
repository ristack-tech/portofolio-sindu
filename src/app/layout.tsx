import type { Metadata } from 'next'
import './globals.css'

const SITE_URL = 'https://sinduaditya.ristack.tech'
const SITE_NAME = 'Sindu Aditya'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Sindu Aditya - Backend Engineer & Technical Project Lead',
    template: '%s - Sindu Aditya',
  },
  description: 'Backend engineer & technical project lead yang merancang arsitektur, memimpin tim, dan mengirim produk dari sketsa sampai live di produksi.',
  authors: [{ name: 'Sindu Aditya Janadi' }],
  keywords: ['Sindu Aditya', 'Backend Engineer', 'Laravel', 'MQTT', 'IoT', 'Indonesia', 'Semarang', 'Full Stack Developer', 'Project Manager', 'Cybersecurity'],
  robots: { index: true, follow: true },
  openGraph: {
    siteName: SITE_NAME,
    locale: 'id_ID',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@sinduaditya',
    site: '@sinduaditya',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
    apple: '/favicon.svg',
  },
  other: {
    'theme-color': '#e95420',
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Sindu Aditya Janadi',
  jobTitle: 'Backend Engineer & Technical Project Lead',
  url: SITE_URL,
  sameAs: [
    'https://linkedin.com/in/sinduaditya',
    'https://github.com/sinduadityajanadi',
  ],
  email: 'mailto:nduujanadi51@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Semarang',
    addressCountry: 'ID',
  },
  knowsAbout: ['Backend Engineering', 'Laravel', 'PHP', 'MQTT', 'IoT', 'PostgreSQL', 'MySQL', 'Multi-tenant Architecture', 'Cybersecurity', 'Project Management'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="bg-[#2c2c2c] text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
