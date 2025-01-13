import type { GetStaticPropsContext } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import useCustomer from '@framework/customer/use-customer'
import commerce from '@lib/api/commerce'
import { Layout } from '@components/common'
import { Container, Text } from '@components/ui'
import bannerImage from '../public/images/banner-4.png'
import brushImage1 from '../public/images/paper/1-1.jpg'
import brushImage2 from '../public/images/paper/1-2.jpg'
import brushImage3 from '../public/images/paper/1-3.jpg'
import brushImage4 from '../public/images/paper/2-1.jpg'
import brushImage5 from '../public/images/paper/2-2.jpg'
import brushImage6 from '../public/images/paper/2-3.jpg'
import brushImage7 from '../public/images/paper/7.jpg'
import titleImage2 from '../public/images/home/title-2.png'
import titleImage3 from '../public/images/home/title-3.png'

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
      <div className='customFont text-center text-[8rem] text-secondary my-10'>Paper</div>
      <div className="relative w-full cursor-pointer hover:cursor-pointer px-64">
        <div className="w-full bg-secondary text-[#333] flex flex-col justify-center items-center">
          <div className='mt-10'><Image src={titleImage2} alt="title image" width={400} height={100} /></div>
          <div className="text-[26px] px-12 pt-8 pb-2 mx-20">
            <p>Caravaggio professional watercolor paper is manufactured by a French factory, using cylinder molds and high-quality natural cotton fiber as raw material.This watercolor paper has a pleasant natural texture that absorbs wet paint well, allowing for smooth color rendering and blending without watermarks.The delicate cotton fibers makes the paintings more colorful and rich in layers.Premium cotton fibers material makes the painting paper less prone to yellowing,ensuring that the artwork can be preserved for a long time with colors as vibrant as when first created.</p>
            <br />
            <p>This series is Mairtini's flagship product, suitable for professional artists with the highest quality requirements and the creation of important artworks.</p>
            <p className='mt-10 text-black font-bold tracking-wider'>@100%Cotton &nbsp;/&nbsp; 300g &nbsp;/&nbsp; Cold-pressed &nbsp;/&nbsp; Hot-pressed &nbsp;/&nbsp; Rough</p>
          </div>
          <div className="relative w-full flex mb-10">
            <div className="w-1/3 cursor-pointer hover:cursor-pointer">
              <Link href="/product/watercolor-paper">
                <Image src={brushImage1} alt="banner" className="w-full h-auto hover:brightness-50"/>
              </Link>
            </div>
            <div className="w-1/3 cursor-pointer hover:cursor-pointer">
              <Link href="/product/leather-4-sided-glue-pad">
                <Image src={brushImage2} alt="banner" className="w-full h-auto hover:brightness-50"/>
              </Link>
            </div>
            <div className="w-1/3 cursor-pointer hover:cursor-pointer">
              <Link href="/product/caravaggio-4-sided-glue-pad">
                <Image src={brushImage3} alt="banner" className="w-full h-auto hover:brightness-50"/>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 w-full bg-white text-[#333] flex flex-col justify-center items-center">
          <div className='mt-10'><Image src={titleImage3} alt="title image" width={400} height={100} /></div>
          <div className="text-[26px] px-12 pt-8 pb-2 mx-20">
            <p>Bouguereau watercolor paper is crafted from acid-free 100% cotton fibers. It possesses a harmonious natural texture, offers uniform absorption and penetration without watermarks. It enhances the expression of pigments and is suitable for artists and watercolor enthusiasts.</p>
            <br />
            <p>This watercolor pad is glued on all 4 sides,which can effectively isolate the corrosion of environmental moisture.With an opening in the center, you can easily divide it after finishing a painting and continue to use the next page, which is convenient and practical.</p>
            <p className='mt-10 text-black font-bold tracking-wider'>@100%Cotton &nbsp;/&nbsp; 300g &nbsp;/&nbsp; Cold-pressed &nbsp;/&nbsp; Hot-pressed &nbsp;/&nbsp; Rough</p>
          </div>
          <div className="relative w-full flex mb-10">
            <div className="w-1/3 cursor-pointer hover:cursor-pointer">
              <Link href="/product/bouguereau-4-sided-glue-pad">
                <Image src={brushImage4} alt="banner" className="w-full h-auto hover:brightness-50"/>
              </Link>
            </div>
            <div className="w-1/3 cursor-pointer hover:cursor-pointer">
              <Link href="/product/bouguereau-art-gallery-watercolor-postcards">
                <Image src={brushImage5} alt="banner" className="w-full h-auto hover:brightness-50"/>
              </Link>
            </div>
            <div className="w-1/3 cursor-pointer hover:cursor-pointer">
              <Link href="/product/bouguereau-cold-pressed-300g-watercolor-paper">
                <Image src={brushImage6} alt="banner" className="w-full h-auto hover:brightness-50"/>
              </Link>
            </div>
          </div>
        </div>

        <div className='mt-10 pt-16 pb-10 w-full text-center text-6xl bg-secondary text-secondary'>BRILLIANT RAYS</div>
        <div className="flex relative w-full pb-10 cursor-pointer hover:cursor-pointer bg-secondary">
          <div className="w-1/2 bg-white text-black flex justify-center pt-10">
            <div className="text-[26px] px-12 ml-20 mr-10 text-[#333]">
            <p>Brilliant Rays Academy Watercolor paper is made of acid-free 100% cotton fibers with harmonious natural texture, uniform absorption and penetration, and without watermarks. It can improve the expression of the pigment and is suitable for a variety of watercolor painting techniques.</p>
            <p className='mt-10 text-black font-bold tracking-wider'>@100%Cotton &nbsp;/&nbsp; 300g &nbsp;/&nbsp; Cold-pressed &nbsp;/&nbsp; Hot-pressed &nbsp;/&nbsp; Rough</p>
            </div>
          </div>
          <div className="w-1/2 bg-secondary">
            <div className="p-10">
              <Link href="/product/academy-watercolor-pad">
                <Image src={brushImage7} alt="banner" className="w-full h-auto hover:brightness-50"/>
              </Link>
              <div className='text-secondary text-center mt-10'>
                <p className='text-3xl customFont tracking-wide'>BRILLIANT RAYS</p>
                <p className='text-2xl tracking-wider'>Academy Watercolor Pad</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

Profile.Layout = Layout
