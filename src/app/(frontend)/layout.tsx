import React from 'react'
import './styles.css'
import Footer from '@/components/layout/footer'
import Header, { NavigationSection } from '@/components/shadcn-studio/blocks/hero-section-01/header'

const navigationData: NavigationSection[] = [
  {
    title: 'Accueil',
    href: '/'
  },
  {
    title: 'Restaurants',
    href: '/restaurants'
  },
  {
    title: 'Commander',
    href: '/commande'
  },
  {
    title: 'Comment ça marche',
    href: '/comment-ca-marche'
  },
  {
    title: 'Devenir partenaire',
    href: '/partenaires'
  },
  {
    title: 'Contact',
    href: '/contact'
  }
]

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <Header navigationData={navigationData} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
