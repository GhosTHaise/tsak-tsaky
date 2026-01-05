import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import React from 'react'

import config from '@/payload.config'
import './styles.css'
import Header, { NavigationSection } from '@/components/shadcn-studio/blocks/hero-section-01/header'
import HeroSection from '@/components/shadcn-studio/blocks/hero-section-01/hero-section-01'

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


export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  return (
    <div className='relative'>
      {/* Header Section */}
      <Header navigationData={navigationData} />

      {/* Main Content */}
      <main className='flex flex-col'>
        <HeroSection />
      </main>
    </div>
  )
}
