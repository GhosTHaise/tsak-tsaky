import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className='section-wrapper'>
      {/* Hero Content */}
      <div className='section-container'>
        <div className='lg:bg-muted flex lg:flex-row flex-col items-center gap-2.5 rounded-full lg:border px-3 py-2 text-description'>
          <Badge>Propulsé par l’IA</Badge>
          <span className='text-muted-foreground max-lg:bg-muted rounded-full max-lg:border leading-4 max-lg:py-1 max-lg:px-2'>Pour la restauration et la livraison</span>
        </div>

        <h1 className='text-3xl leading-[1.29167] font-bold text-balance sm:text-4xl lg:text-5xl'>
          Vos plats préférés,
          <br />
          <span className='relative'>
            livrés
            <svg
              width='223'
              height='12'
              viewBox='0 0 223 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='absolute inset-x-0 bottom-0 w-full translate-y-1/2 max-sm:hidden'
            >
              <path
                d='M1.11716 10.428C39.7835 4.97282 75.9074 2.70494 114.894 1.98894C143.706 1.45983 175.684 0.313587 204.212 3.31596C209.925 3.60546 215.144 4.59884 221.535 5.74551'
                stroke='url(#paint0_linear_10365_68643)'
                strokeWidth='2'
                strokeLinecap='round'
              />
              <defs>
                <linearGradient
                  id='paint0_linear_10365_68643'
                  x1='18.8541'
                  y1='3.72033'
                  x2='42.6487'
                  y2='66.6308'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='var(--primary)' />
                  <stop offset='1' stopColor='var(--primary-foreground)' />
                </linearGradient>
              </defs>
            </svg>
          </span>{' '}
          chaudement et sans effort
        </h1>

        <p className='text-muted-foreground text-description'>
          Plongez dans un monde de saveurs avec les meilleurs restaurants près de chez vous.
          <br />
          Des plats savoureux, des menus variés et une livraison rapide, directement à votre porte.
        </p>

        <Button className='btn-red_primary' size='lg'>
          Commander maintenant
          <ArrowRight />
        </Button>
      </div>

      {/* Image */}
      <img
        src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/hero/image-19.png'
        alt='Dishes'
        className='min-h-67 w-full object-cover'
      />
    </section>
  )
}

export default HeroSection
