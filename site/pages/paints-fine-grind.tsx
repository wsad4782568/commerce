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
    <Container className='bg-gray-200'>
      <div className="relative w-full">
        <Image src={bannerImage} alt="banner" className="w-full h-[500px] object-cover"/>
      </div>

      {/* 内容部分 */}
      <div className='px-64'>
        <div className='customFont text-center text-[4rem] pt-8 text-black my-15'>Fine Grind Artists'Watercolor Pain</div>

        <div className="text-[26px] text-secondary pb-2">
          <p>82 brilliant and intense colors</p>
          <p>6l colors with high lightfastness(4~5 stars)12 macaron colors with fantastic coverage, bringing new vitality to the artwork.</p>
          <p>High-quality pigments are selected around the world to ensure more vibrant colors</p>
          <p>Combining traditional and contemporary craftsmanship</p>
          <p>Finely grinding makes the blending process more comfortable and natural</p>
          <p>Most essential colors have excellent diffusion and obvious sedimentary effect.</p>
        </div>

        <div className="relative w-full mt-8 flex py-20 border-t-4 border-gray-300">
          <div className="w-1/4 mx-6 cursor-pointer hover:cursor-pointer relative">
            <Link href="/product/vq-106-602">
              <div>
                <Image src={brushImage1} alt="banner" className="object-contain w-[300px] h-[300px] bg-white hover:brightness-50"/>
              </div>
              <div className='text-left w-[300px]'>
                <span className='bg-black text-[1.5rem] font-bold py-1 px-5'>82 Color / Single</span>
              </div>
              <div className='text-left w-[300px] my-3'>
                <p className='text-[1.2rem] text-black'>ITEM No.: VQ 106-602</p>
                <p className='text-[1.2rem] text-black'>SIZE: 15ML</p>
                {/* <p className='text-[1.2rem] text-black'>PACKING: 3pcs/Box</p> */}
              </div>
            </Link>
          </div>
          <div className="w-1/4 mx-6 cursor-pointer hover:cursor-pointer">
            <Link href="/product/vq-106-602">
              <Image src={brushImage2} alt="banner" className="object-contain w-[300px] h-[300px] bg-white hover:brightness-50"/>
              <div className='text-left w-[300px]'>
                <span className='bg-black text-[1.5rem] font-bold py-1 px-5'>36 Color / Single</span>
              </div>
              <div className='text-left w-[300px] my-3'>
                <p className='text-[1.2rem] text-black'>ITEM No.: VR 106-500</p>
                <p className='text-[1.2rem] text-black'>SIZE: 5ML</p>
              </div>
            </Link>
          </div>
          <div className="w-1/4 mx-6 cursor-pointer hover:cursor-pointer">
            <Link href="/product/wv-0018">
              <Image src={brushImage5} alt="banner" className="object-contain w-[300px] h-[300px] bg-white hover:brightness-50"/>
              <div className='text-left w-[300px]'>
                <span className='bg-black text-[1.5rem] font-bold py-1 px-5'>18 Colors / Set</span>
              </div>
              <div className='text-left w-[300px] my-3'>
                <p className='text-[1.2rem] text-black'>ITEM No.: WV-0018</p>
                <p className='text-[1.2rem] text-black'>SIZE: 5ML x 18</p>
              </div>
            </Link>
          </div>
          <div className="w-1/4 mx-6 cursor-pointer hover:cursor-pointer">
            <Link href="/product/wv-0024">
              <Image src={brushImage6} alt="banner" className="object-contain w-[300px] h-[300px] bg-white hover:brightness-50"/>
              <div className='text-left w-[300px]'>
                <span className='bg-black text-[1.5rem] font-bold py-1 px-5'>24 Colors / Set</span>
              </div>
              <div className='text-left w-[300px] my-3'>
                <p className='text-[1.2rem] text-black'>ITEM No.: WV-0024</p>
                <p className='text-[1.2rem] text-black'>SIZE: 5ML x 24</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="w-1/4 relative w-full flex justify-left pb-10 border-b-4 border-gray-300">
          <div className="w-full mx-6 cursor-pointer hover:cursor-pointer">
            <Link href="/product/wv-0036">
              <Image src={brushImage7} alt="banner" className="object-contain w-[300px] h-[300px] bg-white hover:brightness-50"/>
              <div className='text-left w-[300px]'>
                <span className='bg-black text-[1.5rem] font-bold py-1 px-5'>36 Colors / Set</span>
              </div>
              <div className='text-left w-[300px] my-3'>
                <p className='text-[1.2rem] text-black'>ITEM No.: WV-0036</p>
                <p className='text-[1.2rem] text-black'>SIZE: 5ML x 36</p>
              </div>
            </Link>
          </div>
          {/* <div className="w-1/2 mx-6 cursor-pointer hover:cursor-pointer">
            <Link href="/product/ws-0012">
              <Image src={brushImage8} alt="banner" className="object-contain w-[300px] h-[300px] bg-white hover:brightness-50"/>
              <div className='text-left w-[300px]'>
                <span className='bg-black text-[1.5rem] font-bold py-1 px-5'>656</span>
              </div>
            </Link>
          </div> */}
        </div>

        <div className='customFont text-center text-[4rem] pt-8 text-black my-15'>Artists' Layered Precipitation Color Watercolor Paint</div>

        <div className="text-[26px] text-secondary pb-2">
          <p>Select premium raw materials with extremely high light-fastness, use 2 to 3 colorsblends, and use multiple grinding processes to present different levels of multi-cololprecipitation expression.</p>
          <p>Total: 12 colors.</p>
        </div>
        <div className="relative w-full mt-8 flex justify-start py-20 border-t-4 border-gray-300">
          <div className="w-1/4 mx-6 cursor-pointer hover:cursor-pointer relative">
            <Link href="/product/vq-106-602">
              <div>
                <Image src={brushImage3} alt="banner" className="object-contain w-[300px] h-[300px] bg-white hover:brightness-50"/>
              </div>
              <div className='text-left w-[300px]'>
                <span className='bg-black text-[1.5rem] font-bold py-1 px-5'>12 Colors / Single</span>
              </div>
              <div className='text-left w-[300px] my-3'>
                <p className='text-[1.2rem] text-black'>ITEM No.: FC 001-012</p>
                <p className='text-[1.2rem] text-black'>SIZE: 5ML</p>
              </div>
            </Link>
          </div>
          <div className="w-1/4 mx-6 cursor-pointer hover:cursor-pointer">
            <Link href="/product/vq-106-602">
              <Image src={brushImage4} alt="banner" className="object-contain w-[300px] h-[300px] bg-white hover:brightness-50"/>
              <div className='text-left w-[300px]'>
                <span className='bg-black text-[1.5rem] font-bold py-1 px-5'>12 Colors / Single</span>
              </div>
              <div className='text-left w-[300px] my-3'>
                <p className='text-[1.2rem] text-black'>ITEM No.: FD 001-012</p>
                <p className='text-[1.2rem] text-black'>SIZE: 5ML</p>
              </div>
            </Link>
          </div>
          <div className="w-1/4 mx-6 cursor-pointer hover:cursor-pointer">
            <Link href="/product/ws-0012">
              <Image src={brushImage8} alt="banner" className="object-contain w-[300px] h-[300px] bg-white hover:brightness-50"/>
              <div className='text-left w-[300px]'>
                <span className='bg-black text-[1.5rem] font-bold py-1 px-5'>12 Colors / Set</span>
              </div>
              <div className='text-left w-[300px] my-3'>
                <p className='text-[1.2rem] text-black'>ITEM No.: WS-0012</p>
                <p className='text-[1.2rem] text-black'>SIZE: 5ML</p>
              </div>
            </Link>
          </div>
          <div className="w-1/4 mx-6 cursor-pointer">
            {/* <Link href="/product/wv-0024">
              <Image src={brushImage6} alt="banner" className="object-contain w-[300px] h-[300px] bg-white hover:brightness-50"/>
              <div className='text-left w-[300px]'>
                <span className='bg-black text-[1.5rem] font-bold py-1 px-5'>696</span>
              </div>
            </Link> */}
          </div>
        </div>
      </div>
    </Container>
  )
}

Profile.Layout = Layout