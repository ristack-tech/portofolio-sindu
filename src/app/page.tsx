import type { Metadata } from 'next'
import Desktop from '@/components/desktop/Desktop'

export const metadata: Metadata = {
  title: 'Sindu Aditya - Backend Engineer & Technical Project Lead',
  description: 'Backend engineer & technical project lead yang merancang arsitektur, memimpin tim, dan mengirim produk dari sketsa sampai live di produksi - fleet IoT, ERP manufaktur, dan platform multi-tenant.',
  openGraph: {
    type: 'website',
    title: 'Sindu Aditya - Backend Engineer & Technical Project Lead',
    description: 'Backend engineer & technical project lead yang merancang arsitektur, memimpin tim, dan mengirim produk dari sketsa sampai live di produksi - fleet IoT, ERP manufaktur, dan platform multi-tenant.',
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'Sindu Aditya' }],
  },
}

export default function HomePage() {
  return <Desktop />
}
