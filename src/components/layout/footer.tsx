import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from 'lucide-react'

import { Separator } from '@/components/ui/separator'

import Image from 'next/image'
import { navigationData } from '../shadcn-studio/blocks/hero-section-01/navbar'

const Footer = () => {
    return (
        <footer>
            <div className='mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 max-md:flex-col sm:px-6 sm:py-6 md:gap-6 md:py-8'>
                <a href='#'>
                    <div className='flex items-center gap-3'>
                        <Image src="/logo/logo.svg" alt="Logo" width={124} height={40} />
                    </div>
                </a>

                <div className='flex flex-col sm:flex-row flex-wrap items-center gap-5 whitespace-nowrap'>
                    {
                        navigationData.map((item, index) => (
                            <a href={item.href} className='opacity-80 transition-opacity duration-300 hover:opacity-100' key={index}>
                                {item.title}
                            </a>
                        ))
                    }
                </div>

                <div className='flex items-center gap-4'>
                    <a href='#'>
                        <FacebookIcon className='size-5' />
                    </a>
                    <a href='#'>
                        <InstagramIcon className='size-5' />
                    </a>
                    <a href='#'>
                        <TwitterIcon className='size-5' />
                    </a>
                    <a href='#'>
                        <YoutubeIcon className='size-5' />
                    </a>
                </div>
            </div>

            <Separator />

            <div className='mx-auto flex max-w-7xl justify-center px-4 py-8 sm:px-6'>
                <p className='text-center font-medium text-balance'>
                    ©{new Date().getFullYear()}{' '}
                    <a href='#' className='hover:underline'>
                        GhostCorp
                    </a>
                    . Vos plats préférés, livrés chez vous en toute simplicité 🛵🍛
                </p>
            </div>
        </footer>
    )
}

export default Footer
