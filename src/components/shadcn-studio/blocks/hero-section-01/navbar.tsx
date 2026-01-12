import { MenuIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from '@/components/ui/navigation-menu'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import LoginButton from './_components/login-button'

export type NavigationSection = {
  title: string
  href: string
}

type HeaderProps = {
  className?: string
}

export const navigationData: NavigationSection[] = [
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

const Navbar = ({ className }: HeaderProps) => {
  return (
    <header className={cn('bg-background sticky top-0 z-50 h-16 border-b', className)}>
      <div className='mx-auto flex h-full max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8'>
        {/* Logo */}
        <a href='#'>
          <Image src="/logo/logo.svg" alt="Logo" width={124} height={40} />
        </a>

        {/* Navigation */}
        <NavigationMenu className='max-md:hidden'>
          <NavigationMenuList className='flex-wrap justify-start gap-0'>
            {navigationData.map(navItem => (
              <NavigationMenuItem key={navItem.title}>
                <NavigationMenuLink
                  href={navItem.href}
                  className='text-muted-foreground hover:text-primary px-3 py-1.5 text-base! font-medium hover:bg-transparent'
                >
                  {navItem.title}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Login Button */}
        <Button className='rounded-lg max-md:hidden' asChild>
          <a href='#'>Login</a>
        </Button>

        {/* Navigation for small screens */}
        <div className='flex gap-4 md:hidden'>
          <LoginButton />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='outline' size='icon'>
                <MenuIcon />
                <span className='sr-only'>Menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56' align='end'>
              {navigationData.map((item, index) => (
                <DropdownMenuItem key={index}>
                  <a href={item.href}>{item.title}</a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

export default Navbar
