import type { GetStaticPropsContext } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import useCustomer from '@framework/customer/use-customer'
import commerce from '@lib/api/commerce'
import { Layout } from '@components/common'
import { Container, Text } from '@components/ui'
import bannerImage from '../public/images/banner-2.png'
import brushImage2 from '../public/images/brush/2.png'
import brushImage3 from '../public/images/brush/3.png'
import brushImage4 from '../public/images/brush/4.png'
import brushImage5 from '../public/images/brush/5.png'
import brushImage6 from '../public/images/brush/6.png'
import brushImage7 from '../public/images/brush/7.png'
import brushImage8 from '../public/images/brush/8.png'
import brushImage9 from '../public/images/brush/9.png'
import brushImage10 from '../public/images/brush/10.png'

export async function getStaticProps({
  preview,
  locale,
  locales,
}: GetStaticPropsContext) {
  const config = { locale, locales }
  const pagesPromise = commerce.getAllPages({ config, preview })
  const siteInfoPromise = commerce.getSiteInfo({ config, preview })
  const { pages } = await pagesPromise
  const { categories } = await siteInfoPromise

  return {
    props: { pages, categories },
  }
}

export default function Profile() {
  const { data } = useCustomer()
  return (
    <Container className='bg-gray-200'>
      <div className="relative w-full">
        <Image src={bannerImage} alt="banner" className="w-full h-[500px] object-cover"/>
      </div>
      <div className='px-64'>
        <div className='customFont text-center text-[8rem] text-black my-10'>Brush</div>
        <div className="relative w-full cursor-pointer hover:cursor-pointer">
          <div className="relative w-full cursor-pointer hover:cursor-pointer">
            <Link href="/brush/mop-brushs">
              <Image src={brushImage2} alt="banner" className="w-full h-auto hover:brightness-50"/>
            </Link>
          </div>
          <div className="relative w-full my-10 cursor-pointer hover:cursor-pointer">
            <Link href="/brush/cats-tongue-brushes">
              <Image src={brushImage3} alt="banner" className="w-full h-auto hover:brightness-50"/>
            </Link>
          </div>
          <div className="relative w-full flex my-10">
            <div className="w-1/2 pr-5 cursor-pointer hover:cursor-pointer">
              <Link href="/brush/flat-wash-brushes">
                <Image src={brushImage4} alt="banner" className="w-full h-auto hover:brightness-50"/>
              </Link>
            </div>
            <div className="w-1/2 pl-5 cursor-pointer hover:cursor-pointer">
              <Link href="/brush/round-pointed-brushes">
                <Image src={brushImage5} alt="banner" className="w-full h-auto hover:brightness-50"/>
              </Link>
            </div>
          </div>
          <div className="relative w-full my-10 cursor-pointer hover:cursor-pointer">
            <Link href="/brush/constellation-series">
              <Image src={brushImage6} alt="banner" className="w-full h-auto hover:brightness-50"/>
            </Link>
          </div>
          <div className="relative w-full flex my-10">
            <div className="w-1/3 pr-5 cursor-pointer hover:cursor-pointer">
              <Link href="/brush/travel-brushes">
                <Image src={brushImage7} alt="banner" className="w-full h-auto hover:brightness-50"/>
              </Link>
            </div>
            <div className="w-1/3 px-5 cursor-pointer hover:cursor-pointer">
              <Link href="/brush/multipurpose-brushes">
                <Image src={brushImage8} alt="banner" className="w-full h-auto hover:brightness-50"/>
              </Link>
            </div>
            <div className="w-1/3 pl-5 cursor-pointer hover:cursor-pointer">
              <Link href="/brush/brush">
                <Image src={brushImage9} alt="banner" className="w-full h-auto hover:brightness-50"/>
              </Link>
            </div>
          </div>
          <div className="relative w-full pb-10 cursor-pointer hover:cursor-pointer">
            <Link href="/brush/brush-set">
              <Image src={brushImage10} alt="banner" className="w-full h-auto hover:brightness-50"/>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  )
}

Profile.Layout = Layout
