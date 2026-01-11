import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import React from 'react'

import config from '@/payload.config'
import './styles.css'
import Header, { NavigationSection } from '@/components/shadcn-studio/blocks/hero-section-01/navbar'
import HeroSection from '@/components/shadcn-studio/blocks/hero-section-01/hero-section-01'
import TasteSection from '@/components/home/taste-section'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  return (
    <div className='relative'>
      {/* Header Section */}
      {/* Main Content */}
      <main className='flex flex-col'>
        <TasteSection />
        <HeroSection />
      </main>
    </div>
  )
}
