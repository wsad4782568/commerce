import type { GetStaticPropsContext } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import useCustomer from '@framework/customer/use-customer'
import commerce from '@lib/api/commerce'
import { Layout } from '@components/common'
import { Container, Text } from '@components/ui'
import { MySwiper } from '@components/common'
import bannerImage11 from '../public/images/banner-11.jpg'
import bannerImage12 from '../public/images/banner-12.jpg'
import bannerImage13 from '../public/images/banner-13.jpg'
import bannerImage14 from '../public/images/banner-14.jpg'
import bannerImage21 from '../public/images/banner-21.jpg'
// import brushImage1 from '../public/images/paints-caravaggio/1.png'
// import brushImage2 from '../public/images/paints-caravaggio/2.png'
// import brushImage3 from '../public/images/paints-caravaggio/3.png'
// import brushImage4 from '../public/images/paints-caravaggio/4.png'
// import brushImage5 from '../public/images/paints-caravaggio/5.png'
// import brushImage6 from '../public/images/paints-caravaggio/6.png'
import brushImage7 from '../public/images/paints-caravaggio/7.png'
import brushImage8 from '../public/images/paints-caravaggio/8.png'
import brushImage9 from '../public/images/paints-caravaggio/9.png'
import brushImage10 from '../public/images/paints-caravaggio/10.png'
import brushImage11 from '../public/images/paints-caravaggio/11.png'
import brushImage12 from '../public/images/paints-caravaggio/12.png'
import brushImage13 from '../public/images/paints-caravaggio/13.png'
import brushImage14 from '../public/images/paints-caravaggio/14.png'
import brushImage15 from '../public/images/paints-caravaggio/15.png'

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
        <MySwiper images={[bannerImage11, bannerImage12, bannerImage13, bannerImage14]}></MySwiper>
      </div>
      {/* 内容部分 */}
      <div className='px-64'>
        <div className='customFont text-center text-[4rem] pt-8 text-black my-15'>Caravaggio Master solid watercolor paint</div>

        <div className="text-[26px] text-secondary pb-2">
          <p>pression while using cobalt and cadmium pigmentsIt pursues high-quality inherent color e)without adding any filler pigment powcers.32 of the 48 colors are single color pigments.Itafter being filled and air-dried about 5 times.Thisis a solid pigment that is concentratedch, stable colors with excellent dissolving power. Itproduct offers high light-fastness and riquickly dissolves upon contact and is easy to mix and blend.</p>
          <p>Total: 48 colors.</p>
        </div>

        <div className="relative w-full mt-8 flex py-10 border-t-4 border-gray-300">
          <div className="w-1/4 mx-10 cursor-pointer hover:cursor-pointer relative">
            <Link href="/product/klwq-0012">
              <div>
                <Image src={brushImage7} alt="banner" className="object-contain w-[300px] h-[300px] bg-white hover:brightness-50"/>
              </div>
              <div className='text-center my-8 w-[300px]'>
                <span className='bg-black text-[2rem] font-bold py-1 px-5'>12 Colors/Set</span>
              </div>
            </Link>
          </div>
          <div className="w-1/4 mx-10 cursor-pointer hover:cursor-pointer">
            <Link href="/product/klwq-0024">
              <Image src={brushImage8} alt="banner" className="object-contain w-[300px] h-[300px] bg-white hover:brightness-50"/>
              <div className='text-center my-8 w-[300px]'>
                <span className='bg-black text-[2rem] font-bold py-1 px-5'>24 Colors/Set</span>
              </div>
            </Link>
          </div>
          <div className="w-1/4 mx-10 cursor-pointer hover:cursor-pointer">
            <Link href="/product/klwq-0036">
              <Image src={brushImage9} alt="banner" className="object-contain w-[300px] h-[300px] bg-white hover:brightness-50"/>
              <div className='text-center my-8 w-[300px]'>
                <span className='bg-black text-[2rem] font-bold py-1 px-5'>36 Colors/Set</span>
              </div>
            </Link>
          </div>
          <div className="w-1/4 mx-10 cursor-pointer hover:cursor-pointer">
            <Link href="/product/klwq-01">
              <Image src={brushImage10} alt="banner" className="object-contain w-[300px] h-[300px] bg-white hover:brightness-50"/>
              <div className='text-center my-8 w-[300px]'>
                <span className='bg-black text-[2rem] font-bold py-1 px-5'>6 Colors/Set</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="relative w-full flex justify-left pb-10">
          <div className="w-1/2 mx-10 cursor-pointer hover:cursor-pointer">
            <Link href="/product/klwq-02">
              <Image src={brushImage11} alt="banner" className="object-contain w-[300px] h-[300px] bg-white hover:brightness-50"/>
              <div className='text-center my-8 w-[300px]'>
                <span className='bg-black text-[2rem] font-bold py-1 px-5'>6 Colors/Set</span>
              </div>
            </Link>
          </div>
          <div className="w-1/2 mx-10 cursor-pointer hover:cursor-pointer">
            <Link href="/product/klwq-03">
              <Image src={brushImage12} alt="banner" className="object-contain w-[300px] h-[300px] bg-white hover:brightness-50"/>
              <div className='text-center my-8 w-[300px]'>
                <span className='bg-black text-[2rem] font-bold py-1 px-5'>6 Colors/Set</span>
              </div>
            </Link>
          </div>
          <div className="w-1/2 mx-10 cursor-pointer hover:cursor-pointer">
            <Link href="/product/klwq-04">
              <Image src={brushImage13} alt="banner" className="object-contain w-[300px] h-[300px] bg-white hover:brightness-50"/>
              <div className='text-center my-8 w-[300px]'>
                <span className='bg-black text-[2rem] font-bold py-1 px-5'>6 Colors/Set</span>
              </div>
            </Link>
          </div>
          <div className="w-1/2 mx-10 cursor-pointer hover:cursor-pointer">
            <Link href="/product/klwq-05">
              <Image src={brushImage14} alt="banner" className="object-contain w-[300px] h-[300px] bg-white hover:brightness-50"/>
              <div className='text-center my-8 w-[300px]'>
                <span className='bg-black text-[2rem] font-bold py-1 px-5'>6 Colors/Set</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="relative w-full flex justify-left pb-10 border-b-4 border-gray-300">
        <div className="w-full mx-10 cursor-pointer hover:cursor-pointer">
            <Link href="/product/klwq-06">
              <Image src={brushImage15} alt="banner" className="object-contain w-[300px] h-[300px] bg-white hover:brightness-50"/>
              <div className='text-center my-8 w-[300px]'>
                <span className='bg-black text-[2rem] font-bold py-1 px-5'>24 Colors/Set</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="relative w-[80%] cursor-pointer hover:cursor-pointer pb-4 mx-[10%]">
        <div className="relative w-full flex my-16">
          <div className="w-1/3 px-24 cursor-pointer hover:cursor-pointer hover:scale-105 transition-transform duration-300">
            <Link href="/product/klwq-0012">
              <Image src={brushImage7} alt="banner" className="w-full h-full object-cover"/>
            </Link>
          </div>
          <div className="w-1/3 px-24 cursor-pointer hover:cursor-pointer hover:scale-105 transition-transform duration-300">
            <Link href="/product/klwq-0024">
              <Image src={brushImage8} alt="banner" className="w-full h-full object-cover"/>
            </Link>
          </div>
          <div className="w-1/3 px-24 cursor-pointer hover:cursor-pointer hover:scale-105 transition-transform duration-300">
            <Link href="/product/klwq-0036">
              <Image src={brushImage9} alt="banner" className="w-full h-full object-cover"/>
            </Link>
          </div>
        </div>
        <div className="relative w-full flex my-36">
          <div className="w-1/3 px-24 cursor-pointer hover:cursor-pointer hover:scale-105 transition-transform duration-300">
            <Link href="/product/klwq-01">
              <Image src={brushImage10} alt="banner" className="w-full h-full object-cover"/>
            </Link>
          </div>
          <div className="w-1/3 px-24 cursor-pointer hover:cursor-pointer hover:scale-105 transition-transform duration-300">
            <Link href="/product/klwq-02">
              <Image src={brushImage11} alt="banner" className="w-full h-full object-cover"/>
            </Link>
          </div>
          <div className="w-1/3 px-24 cursor-pointer hover:cursor-pointer hover:scale-105 transition-transform duration-300">
            <Link href="/product/klwq-03">
              <Image src={brushImage12} alt="banner" className="w-full h-full object-cover"/>
            </Link>
          </div>
        </div>
        <div className="relative w-full flex my-36">
          <div className="w-1/3 px-24 cursor-pointer hover:cursor-pointer hover:scale-105 transition-transform duration-300">
            <Link href="/product/klwq-04">
              <Image src={brushImage13} alt="banner" className="w-full h-full object-cover"/>
            </Link>
          </div>
          <div className="w-1/3 px-24 cursor-pointer hover:cursor-pointer hover:scale-105 transition-transform duration-300">
            <Link href="/product/klwq-05">
              <Image src={brushImage14} alt="banner" className="w-full h-full object-cover"/>
            </Link>
          </div>
        </div>

        <Link href="/product/klwq-06" className="flex items-center justify-between my-16 hover:scale-105 transition-transform duration-300">
          <div className="w-full px-36 cursor-pointer hover:cursor-pointer flex items-center justify-between">
              <div className="">
                <Image src={brushImage15} alt="banner" className="w-full h-auto hover:brightness-50"/>
              </div>
          </div>
        </Link>
      </div> */}
    </Container>
  )
}

Profile.Layout = Layout