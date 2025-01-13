import { FC } from 'react'
import Link from 'next/link'
import s from './Navbar.module.css'
import NavbarRoot from './NavbarRoot'
import { Logo, Container } from '@components/ui'
import { Searchbar, UserNav, ExternalLinks } from '@components/common'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
console.log('DropdownMenu', DropdownMenu)
interface Link {
  href: string
  label: string
}

interface NavbarProps {
  links?: Link[]
}


const Navbar: FC<NavbarProps> = ({ links }) => (
  <NavbarRoot>
    <Container clean className="mx-auto max-w-8xl px-6">
      <div className="flex justify-center w-full h-[110px] pt-[50px]">
        <Link href="/" className={s.logo} aria-label="Logo">
          <Logo />
        </Link>
      </div>
      <div className={s.nav}>
        <nav className={`${s.navMenu} text-lg`}>
          <Link href="/" className={`${s.link} mx-8`}>
            HOME
          </Link>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger className={`${s.link} mx-8`}>
              PRODUCT
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className={`${s.dropdownContent} mt-2 py-2 px-4 bg-gray-900 bg-opacity-80`}>
              <DropdownMenu.Item className="my-2">
                <Link href="/paints" className={s.link}>
                  PAINTS
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item className="my-2">
                <Link href="/brushes" className={s.link}>
                  BRUSHES
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item className="my-2">
                <Link href="/paper" className={s.link}>
                  PAPER
                </Link>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
          <Link href="/history" className={`${s.link} mx-8`}>
            HISTORY
          </Link>
          <Link href="/brand-story" className={`${s.link} mx-8`}>
            BRAND STORY
          </Link>
          <Link href="/art-museum" className={`${s.link} mx-8`}>
            ART MUSEUM
          </Link>
          <Link href="/contact-us" className={`${s.link} mx-8`}>
            CONTACT US
          </Link>
        </nav>
        <div className="justify-center flex-1 hidden lg:flex">
          <ExternalLinks />
        </div>
        {process.env.COMMERCE_SEARCH_ENABLED && (
          <div className="justify-center flex-1 hidden lg:flex">
            <Searchbar />
          </div>
        )}
        <div className="flex items-center justify-end flex-1 space-x-8">
          <UserNav />
        </div>
      </div>
      {process.env.COMMERCE_SEARCH_ENABLED && (
        <div className="flex pb-4 lg:px-6 lg:hidden">
          <Searchbar id="mobile-search" />
        </div>
      )}
    </Container>
  </NavbarRoot>
)

export default Navbar
