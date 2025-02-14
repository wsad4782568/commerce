import { FC } from 'react'
import cn from 'clsx'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import type { Page } from '@commerce/types/page'
import getSlug from '@lib/get-slug'
import { Github } from '@components/icons'
import { Logo, Container } from '@components/ui'
import logoImage from '../../../public/images/logo-1.png'
//切换语言组件
import { I18nWidget } from '@components/common'
//切换主题组件
import ThemeSwitcher from '@components/ui/ThemeSwitcher'
import s from './Footer.module.css'

interface Props {
  className?: string
  children?: any
  pages?: Page[]
}

const links = [
  {
    name: 'Home',
    url: '/',
  },
]

const Footer: FC<Props> = ({ className, pages }) => {
  const { sitePages } = usePages(pages)
  const rootClassName = cn(s.root, className)

  return (
    <footer className={rootClassName}>
      <Container>
        <div className="bg-gray-200 flex justify-center text-[#333] py-10">
          <div className='text-center'>
            <Image alt='Logo' className='mx-auto mt-2 mb-6' src={logoImage} width={138} height={100}></Image>
            <div className="text-2xl pb-8 mb-8 border-b-2 border-gray-500 tracking-[0.2rem]">IT'S BRILLIANT BECAUSE OF YOU</div>
            <div>
              <p className="text-lg m-2">Mairtini (chengDu) Cultural&Creative co.,Ltd.</p>
              <p className="text-lg m-2">E-mail :mairtini.art@gmail.com</p>
              <p className="text-lg m-2">Phone:0086-028-85543120</p>
              <p className="text-lg m-2">WhatsApp:(+86)186-2836-2823</p>
            </div>
          </div>
        </div>
        <div className="pt-6 pb-10 flex flex-col md:flex-row justify-center items-center space-y-4 text-accent-6 text-sm">
          <div className="flex items-center text-primary text-sm">
              <Logo
                className="inline-block my-8 text-primary"
                alt="Maitini Logo"
              />
          </div>
        </div>
      </Container>
    </footer>
  )
}

function usePages(pages?: Page[]) {
  const { locale } = useRouter()
  const sitePages: Page[] = []

  if (pages) {
    pages.forEach((page) => {
      const slug = page.url && getSlug(page.url)
      if (!slug) return
      if (locale && !slug.startsWith(`${locale}/`)) return
      sitePages.push(page)
    })
  }

  return {
    sitePages: sitePages.sort(bySortOrder),
  }
}

// Sort pages by the sort order assigned in the BC dashboard
function bySortOrder(a: Page, b: Page) {
  return (a.sort_order ?? 0) - (b.sort_order ?? 0)
}

export default Footer
