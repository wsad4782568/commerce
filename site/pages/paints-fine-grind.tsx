import type { GetStaticPropsContext } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import useCustomer from '@framework/customer/use-customer'
import commerce from '@lib/api/commerce'
import { Layout } from '@components/common'
import { Container, Text } from '@components/ui'
import bannerImage from '../public/images/banner-5.png'
import brushImage1 from '../public/images/paints-fine-grind/1.png'
import brushImage2 from '../public/images/paints-fine-grind/2.png'
import brushImage3 from '../public/images/paints-fine-grind/3.png'
import brushImage4 from '../public/images/paints-fine-grind/4.png'
import brushImage5 from '../public/images/paints-fine-grind/5.png'
import brushImage6 from '../public/images/paints-fine-grind/6.png'
import brushImage7 from '../public/images/paints-fine-grind/7.png'
import brushImage8 from '../public/images/paints-fine-grind/8.png'

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
    <Container className='bg-white'>
      <div className="relative w-full">
        <Image src={bannerImage} alt="banner" className="w-full h-auto"/>
      </div>
      <div className='text-center text-[2rem] text-secondary my-5 font-bold'>Fine Grind Artists'Watercolor Pain</div>

      <div className="text-[26px] text-secondary pl-36 pr-24 pb-2 mx-40">
        <p>82 brilliant and intense colors</p>
        <p>6l colors with high lightfastness(4~5 stars)12 macaron colors with fantastic coverage, bringing new vitality to the artwork.</p>
        <p>High-quality pigments are selected around the world to ensure more vibrant colors</p>
        <p>Combining traditional and contemporary craftsmanship</p>
        <p>Finely grinding makes the blending process more comfortable and natural</p>
        <p>Most essential colors have excellent diffusion and obvious sedimentary effect.</p>
      </div>

      <div className="relative w-[60%] cursor-pointer hover:cursor-pointer pb-4 mx-[20%]">
        {/* <div className="relative w-full flex my-16">
          <div className="w-1/4 pr-12 cursor-pointer hover:cursor-pointer">
            <Link href="/product/vq-106-602">
              <Image src={brushImage1} alt="banner" className="w-full h-auto"/>
              <div className='text-center m-8'>
                <span className='bg-black rounded-lg text-[2rem] font-bold py-1 px-5'>15ml</span>
              </div>
            </Link>
          </div>
          <div className="w-1/4 pr-12 cursor-pointer hover:cursor-pointer">
            <Link href="/product/vq-106-602">
              <Image src={brushImage2} alt="banner" className="w-full h-auto"/>
              <div className='text-center m-8'>
                <span className='bg-black rounded-lg text-[2rem] font-bold py-1 px-5'>5ml</span>
              </div>
            </Link>
          </div>
          <div className="w-1/4 pr-12 cursor-pointer hover:cursor-pointer">
            <Link href="/product/vq-106-602">
              <Image src={brushImage3} alt="banner" className="w-full h-auto"/>
              <div className='text-center m-8'>
                <span className='bg-black rounded-lg text-[2rem] font-bold py-1 px-5'>15ml</span>
              </div>
            </Link>
          </div>
          <div className="w-1/4 pr-12 cursor-pointer hover:cursor-pointer">
            <Link href="/product/vq-106-602">
              <Image src={brushImage4} alt="banner" className="w-full h-auto"/>
              <div className='text-center m-8'>
                <span className='bg-black rounded-lg text-[2rem] font-bold py-1 px-5'>5ml</span>
              </div>
            </Link>
          </div>
        </div> */}

        <div className="flex flex-col">
          <Link href="/product/wv-0018" className="flex items-center justify-between my-16 hover:scale-105 transition-transform duration-300">
            <div className="w-1/2 pr-12 cursor-pointer hover:cursor-pointer flex items-center justify-between">
              <div className="h-full">
                <Image src={brushImage5} alt="banner" className="w-full h-auto"/>
              </div>
            </div>
            <div className='m-8'>
              <p className='bg-black rounded-lg text-[2rem] font-bold py-1 px-5 text-center mb-2'>18 Colors / Set</p>
              <p className='text-secondary text-[1.2rem] leading-[2rem] tracking-[0.15rem]'>ITEMNO.: WV-0018</p>
              <p className='text-secondary text-[1.2rem] leading-[2rem] tracking-[0.2rem]'>SIZE:5ML</p>
            </div>
          </Link>
          <Link href="/product/wv-0024" className="flex items-center justify-between my-16 hover:scale-105 transition-transform duration-300">
            <div className="w-1/2 pr-12 cursor-pointer hover:cursor-pointer flex items-center justify-between">
              <div className="h-full">
                <Image src={brushImage6} alt="banner" className="w-full h-auto"/>
              </div>
            </div>
            <div className='m-8'>
              <p className='bg-black rounded-lg text-[2rem] font-bold py-1 px-5 text-center mb-2'>24 Colors / Set</p>
              <p className='text-secondary text-[1.2rem] leading-[2rem] tracking-[0.15rem]'>ITEMNO.: WV-0024</p>
              <p className='text-secondary text-[1.2rem] leading-[2rem] tracking-[0.2rem]'>SIZE:5ML</p>
            </div>
          </Link>
          <Link href="/product/wv-0036" className="flex items-center justify-between my-16 hover:scale-105 transition-transform duration-300">
            <div className="w-1/2 pr-12 cursor-pointer hover:cursor-pointer flex items-center justify-between">
              <div className="h-[230px]">
                <Image src={brushImage7} alt="banner" className="w-full h-auto"/>
              </div>
            </div>
            <div className='m-8'>
              <p className='bg-black rounded-lg text-[2rem] font-bold py-1 px-5 text-center mb-2'>36 Colors / Set</p>
              <p className='text-secondary text-[1.2rem] leading-[2rem] tracking-[0.15rem]'>ITEMNO.: WV-0036</p>
              <p className='text-secondary text-[1.2rem] leading-[2rem] tracking-[0.2rem]'>SIZE:5ML</p>
            </div>
          </Link>
        </div>
      </div>
      <div className='text-center text-[2rem] text-secondary my-5 font-bold'>Artists' Layered Precipitation Color Watercolor Paint</div>
      <div className="text-[26px] text-secondary pl-36 pr-24 pb-2 mx-40">
        <p>Select premium raw materials with extremely high light-fastness, use 2 to 3 colorsblends, and use multiple grinding processes to present different levels of multi-cololprecipitation expression.</p>
        <p>Total: 12 colors.</p>
      </div>

      <div className="relative w-[60%] cursor-pointer hover:cursor-pointer pb-4 mx-[20%]">
        <Link href="/product/ws-0012" className="flex items-center justify-between my-16 hover:scale-105 transition-transform duration-300">
            <div className="w-1/2 pr-12 cursor-pointer hover:cursor-pointer flex items-center justify-between">
                <div className="h-[230px]">
                <Image src={brushImage8} alt="banner" className="w-full h-auto"/>
                </div>
            </div>
            <div className='m-8'>
                <p className='bg-black rounded-lg text-[2rem] font-bold py-1 px-5 text-center mb-2'>12 Colors / Set</p>
                <p className='text-secondary text-[1.2rem] leading-[2rem] tracking-[0.15rem]'>ITEMNO.: WS-0012</p>
                <p className='text-secondary text-[1.2rem] leading-[2rem] tracking-[0.2rem]'>SIZE:5ML</p>
            </div>
        </Link>
      </div>
    </Container>
  )
}

Profile.Layout = Layout