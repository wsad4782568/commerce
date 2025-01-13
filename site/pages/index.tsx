import commerce from '@lib/api/commerce'
import { Layout } from '@components/common'
import { ProductCard } from '@components/product'
import { Grid, Marquee, Hero } from '@components/ui'
import Image from 'next/image'
import bannerImage from '../public/images/banner-1.png'
import homeImage2 from '../public/images/home/2.png'
import homeImage3 from '../public/images/home/3.png'
import homeImage4 from '../public/images/home/4.png'
import homeImage5 from '../public/images/home/5.png'
import homeImage6 from '../public/images/home/6.png'
import titleImage1 from '../public/images/home/title-1.png'
import titleImage2 from '../public/images/home/title-2.png'
import titleImage3 from '../public/images/home/title-3.png'
import titleImage4 from '../public/images/home/title-4.png'
// import HomeAllProductsGrid from '@components/common/HomeAllProductsGrid'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'

export async function getStaticProps({
  preview,
  locale,
  locales,
}: GetStaticPropsContext) {
  const config = { locale, locales }
  const productsPromise = commerce.getAllProducts({
    variables: { first: 6 },
    config,
    preview,
    // Saleor provider only
    ...({ featured: true } as any),
  })
  const pagesPromise = commerce.getAllPages({ config, preview })
  const siteInfoPromise = commerce.getSiteInfo({ config, preview })
  const { products } = await productsPromise
  const { pages } = await pagesPromise
  const { categories, brands } = await siteInfoPromise

  return {
    props: {
      products,
      categories,
      brands,
      pages,
    },
    revalidate: 60,
  }
}

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log('products', products)
  return (
    <div className='bg-gray-200'>
      <div className="relative w-full">
        <Image src={bannerImage} alt="banner" className="w-full h-[500px] object-cover" width={1080} height={1080} />
        <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="text-8xl mb-8 tracking-wider">因为有你　所以出彩</div>
          <div className="text-[2.5rem] tracking-[.25em]">IT'S BRILLIANT BECAUSE OF YOU</div>
        </div>
      </div>
      {/* 中间内容部分 */}
      <div className='px-64 w-full'>
        <div className="flex pt-10">
          <div className="w-1/2">
            <Image src={homeImage2} alt="banner" className="w-full h-auto" width={1080} height={1080} />
          </div>
          <div className="w-1/2 bg-white text-black flex flex-col justify-center items-center">
            <div><Image src={titleImage1} alt="title image" width={416} height={82} /></div>
            <div className="text-[18px] px-12 pt-16 pb-16 border-t-4 border-b-4 border-gray-900 mx-20">
              Mairtini is a vibrant brand that focuses on the watercolors. It stands out in the industry for its high-quality professional painting materials. Mairtini is closely involved in and pays attention to the development of painting art and the needs of artists for painting materials. It uses the Mairtini Art Gallery as a carrier to build a platform for watercolor exchanges and holds the annual Mairtini International Watercolor Exhibition. It has gained a good reputation in the field of watercolor art and product quality and creativity. Mairtini adheres to the traditional and modern manufacturing process of water-based materials, pursues the ultimate performance of materials in painting, continuously develops, improves and innovates high-quality painting tools, actively absorbs new experiences and new technologies, and is determined to become a global leading supplier of art materials.
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-1/2 bg-white text-black flex flex-col justify-center items-center">
            <div><Image src={titleImage2} alt="title image" width={416} height={82} /></div>
            <div className="text-[18px] px-12 pt-16 pb-16 border-t-4 border-b-4 border-gray-900 mx-20">
            The Caravaggio series is Mairtini's flagship product line, which is made of top-quality materials to provide artists with an excellent creative experience. We select high-quality raw materials from all over the world, and the pigments are manufactured in Japan. The colors are rich and long-lasting, ensuring that every stroke can show delicate layers and rich expression. The Caravaggio series of watercolor paper and watercolor books are made of pure cotton fiber acid-free watercolor paper by papermakers in French factories following the traditional round screen and cold pressing process. The paper is fine and uniform, with excellent water absorption and durability, providing the best presentation effect and long-term preservation for your artwork. Whether you are a professional artist or an art lover, the Caravaggio series can help you create amazing masterpieces. Choose the Caravaggio series to experience the endless inspiration and creative fun brought by top-quality painting materials.
            </div>
          </div>
          <div className="w-1/2">
            <Image src={homeImage3} alt="banner" className="w-full h-auto" width={1080} height={1080} />
          </div>
        </div>
        <div className="flex">
          <div className="w-1/2">
            <Image src={homeImage4} alt="banner" className="w-full h-auto" width={1080} height={1080} />
          </div>
          <div className="w-1/2 bg-white text-black flex flex-col justify-center items-center">
            <div><Image src={titleImage3} alt="title image" width={416} height={82} /></div>
            <div className="text-[18px] px-12 pt-16 pb-16 border-t-4 border-b-4 border-gray-900 mx-20">
            Bouguereau watercolor paints are made from high-quality raw materials from all over the world. They use pure color powder, and the colors are bright and rich, with excellent diffusion and obvious precipitation effects, and the transparency of the full color system is high. The colors are rich and stable, with excellent solubility, dissolving immediately after dipping, good coloring power, harmonious and comfortable mixing, and active diffusion and precipitation, suitable for professional artists to express rich techniques. This is an artist-grade high-quality watercolor paint that can preserve the work for a long time. Half a block and a full block are available.
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-1/2 bg-white text-black flex flex-col justify-center items-center">
            <div><Image src={titleImage4} alt="title image" width={416} height={82} /></div>
            <div className="text-[18px] px-12 pt-16 pb-16 border-t-4 border-b-4 border-gray-900 mx-20">
            Brilliant Rays Academy watercolors are made of high-quality pigments, using a combination of traditional and modern techniques, and environmentally friendly pigments that do not contain heavy metals. They are made using a cutting process. The fine grinding, rich and bright colors, and a certain diffusion effect make them suitable for the expression of various painting techniques. The ”Oriental Charm” series uses a traditional metal color palette, combined with traditional Oriental painting elements, and the packaging uses environmentally friendly recycled paper boxes, which is more exquisite. The 9-color travel set has a color palette area, which is easy to carry and can be used for indoor and outdoor sketching.
            </div>
          </div>
          <div className="w-1/2">
            <Image src={homeImage5} alt="banner" className="w-full h-auto" width={1080} height={1080} />
          </div>
        </div>
      </div>

      <div className="w-full py-10">
        <Image src={homeImage6} alt="banner" className="w-full h-auto" width={1080} height={1080} />
      </div>
      {/* <Grid variant="filled">
        {products.slice(0, 3).map((product: any, i: number) => (
          <ProductCard
            key={product.id}
            product={product}
            imgProps={{
              alt: product.name,
              width: i === 0 ? 1080 : 540,
              height: i === 0 ? 1080 : 540,
              priority: true,
            }}
          />
        ))}
      </Grid> */}
      {/* <Marquee variant="secondary">
        {products.slice(0, 3).map((product: any, i: number) => (
          <ProductCard key={product.id} product={product} variant="slim" />
        ))}
      </Marquee>
      <Hero
        headline=" Dessert dragée halvah croissant."
        description="Cupcake ipsum dolor sit amet lemon drops pastry cotton candy. Sweet carrot cake macaroon bonbon croissant fruitcake jujubes macaroon oat cake. Soufflé bonbon caramels jelly beans. Tiramisu sweet roll cheesecake pie carrot cake. "
      />
      <Grid layout="B" variant="filled">
        {products.slice(0, 3).map((product: any, i: number) => (
          <ProductCard
            key={product.id}
            product={product}
            imgProps={{
              alt: product.name,
              width: i === 1 ? 1080 : 540,
              height: i === 1 ? 1080 : 540,
            }}
          />
        ))}
      </Grid>
      <Marquee>
        {products.slice(3).map((product: any, i: number) => (
          <ProductCard key={product.id} product={product} variant="slim" />
        ))}
      </Marquee> */}
      {/* <HomeAllProductsGrid
        newestProducts={products}
        categories={categories}
        brands={brands}
      /> */}
    </div>
  )
}

Home.Layout = Layout
