import type { GetStaticPropsContext } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import useCustomer from '@framework/customer/use-customer'
import commerce from '@lib/api/commerce'
import { Layout } from '@components/common'
import { Container, Text } from '@components/ui'
import brushImage1 from '../public/images/brush/mop-brush/SS93/1.png'
import brushImage2 from '../public/images/brush/mop-brush/616/1.png'
import brushImage3 from '../public/images/brush/mop-brush/611/1.png'
import brushImage4 from '../public/images/brush/mop-brush/696/1.png'
import brushImage5 from '../public/images/brush/mop-brush/612/1.png'
import brushImage6 from '../public/images/brush/mop-brush/656/1.png'

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
      <div className='customFont text-center text-[8rem] text-black my-15'>Mop Brush</div>
      <div className="relative w-full flex py-10 border-t-4 border-gray-300">
        <div className="w-1/4 pr-10 cursor-pointer hover:cursor-pointer">
          <Link href="/product/mop-brush-ss93">
            <Image src={brushImage1} alt="banner" className="w-full h-auto"/>
            <div className='text-center m-8'>
              <span className='bg-black text-[2rem] font-bold py-1 px-5'>SS 93</span>
            </div>
          </Link>
        </div>
        <div className="w-1/4 pr-10 cursor-pointer hover:cursor-pointer">
          <Link href="/product/mop-brush-616">
            <Image src={brushImage2} alt="banner" className="w-full h-auto"/>
            <div className='text-center m-8'>
              <span className='bg-black text-[2rem] font-bold py-1 px-5'>616</span>
            </div>
          </Link>
        </div>
        <div className="w-1/4 pr-10 cursor-pointer hover:cursor-pointer">
          <Link href="/product/mop-brush-611">
            <Image src={brushImage3} alt="banner" className="w-full h-auto"/>
            <div className='text-center m-8'>
              <span className='bg-black text-[2rem] font-bold py-1 px-5'>611</span>
            </div>
          </Link>
        </div>
        <div className="w-1/4 pr-10 cursor-pointer hover:cursor-pointer">
          <Link href="/product/mop-brush-696">
            <Image src={brushImage4} alt="banner" className="w-full h-auto"/>
            <div className='text-center m-8'>
              <span className='bg-black text-[2rem] font-bold py-1 px-5'>696</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="relative w-full flex justify-center pb-10 border-b-4 border-gray-300">
        <div className="w-1/4 pr-10 cursor-pointer hover:cursor-pointer">
          <Link href="/product/mop-brush-612">
            <Image src={brushImage5} alt="banner" className="w-full h-auto"/>
            <div className='text-center m-8'>
              <span className='bg-black text-[2rem] font-bold py-1 px-5'>612</span>
            </div>
          </Link>
        </div>
        <div className="w-1/4 pr-10 cursor-pointer hover:cursor-pointer">
          <Link href="/product/mop-brush-656">
            <Image src={brushImage6} alt="banner" className="w-full h-auto"/>
            <div className='text-center m-8'>
              <span className='bg-black text-[2rem] font-bold py-1 px-5'>656</span>
            </div>
          </Link>
        </div>
      </div>
    </Container>
  )
}

Profile.Layout = Layout
