import { FC, useState, useEffect, ReactNode } from 'react'
import type { GetStaticPropsContext } from 'next'
import { MySwiper } from '@components/common'
import Link from 'next/link'
import Image from 'next/image'
import useCustomer from '@framework/customer/use-customer'
import commerce from '@lib/api/commerce'
import { Layout } from '@components/common'
import { Container, Text } from '@components/ui'
import bannerImage7 from '../public/images/banner-7.jpg'
import bannerImage8 from '../public/images/banner-8.jpg'
import bannerImage9 from '../public/images/banner-9.jpg'
import bannerImage10 from '../public/images/banner-10.jpg'
import bannerImage20 from '../public/images/banner-20.jpg'
import bannerImage21 from '../public/images/banner-21.jpg'
import brushImage3 from '../public/images/paint/3.png'
import brushImage4 from '../public/images/paint/4.png'
import brushImage5 from '../public/images/paint/5.png'
import brushImage6 from '../public/images/paint/6.png'

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
        <MySwiper images={[bannerImage8, bannerImage7, bannerImage10, bannerImage20, bannerImage21, bannerImage9]}></MySwiper>
      </div>
      <div className='customFont text-center text-[8rem] text-black my-10'>Watercolor Paint</div>
      <div className="relative w-full cursor-pointer hover:cursor-pointer pb-1">
        <div className="relative w-full flex my-10 px-64">
          <div className="w-1/4 pr-10 cursor-pointer hover:cursor-pointer">
            <Link href="/paints-fine-grind">
              <Image src={brushImage3} alt="banner" className="w-full h-auto hover:brightness-50"/>
            </Link>
          </div>
          <div className="w-1/4 pr-10 cursor-pointer hover:cursor-pointer">
            <Link href="/paint/Caravaggio">
              <Image src={brushImage4} alt="banner" className="w-full h-auto hover:brightness-50"/>
            </Link>
          </div>
          <div className="w-1/4 pr-10 cursor-pointer hover:cursor-pointer">
            <Link href="/paint/Bouyereau">
              <Image src={brushImage5} alt="banner" className="w-full h-auto hover:brightness-50"/>
            </Link>
          </div>
          <div className="w-1/4 pr-10 cursor-pointer hover:cursor-pointer">
            <Link href="/paint/Brilliant-Rays">
              <Image src={brushImage6} alt="banner" className="w-full h-auto hover:brightness-50"/>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  )
}

Profile.Layout = Layout