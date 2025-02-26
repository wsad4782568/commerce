import type { GetStaticPathsContext, GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Layout } from '@components/common'
import { Container } from '@components/ui'
import bannerImage from '../../public/images/banner-2.png'

const brushData = {
  'mop-brushs': [
    { name: "SS93", imgSrc: "/images/brush/mop-brush/SS93/1.png" },
    { name: "616", imgSrc: "/images/brush/mop-brush/616/1.png" },
    { name: "611", imgSrc: "/images/brush/mop-brush/611/1.png" },
    { name: "696", imgSrc: "/images/brush/mop-brush/696/1.png" },
    { name: "612", imgSrc: "/images/brush/mop-brush/612/1.png" },
    { name: "656", imgSrc: "/images/brush/mop-brush/656/1.png" },
  ],
  'cats-tongue-brushes': [
    { name: "636", imgSrc: "/images/brush/cats-tongue-brushes/636/1.png" },
    { name: "6000RR", imgSrc: "/images/brush/cats-tongue-brushes/6000RR/1.png" },
    { name: "RG700R", imgSrc: "/images/brush/cats-tongue-brushes/RG700R/1.png" }
  ],
  'flat-wash-brushes': [
    { name: "303", imgSrc: "/images/brush/flat-wash-brushes/303/1.png" },
    { name: "6100R", imgSrc: "/images/brush/flat-wash-brushes/6100R/1.png" },
    { name: "Q728", imgSrc: "/images/brush/flat-wash-brushes/Q728/1.png" }
  ],
  'round-pointed-brushes': [
    { name: "714", imgSrc: "/images/brush/round-pointed-brushes/714/1.png" },
    { name: "717", imgSrc: "/images/brush/round-pointed-brushes/717/1.png" },
    { name: "1096", imgSrc: "/images/brush/round-pointed-brushes/1096/1.png" },
    { name: "1098", imgSrc: "/images/brush/round-pointed-brushes/1098/1.png" },
    { name: "K90", imgSrc: "/images/brush/round-pointed-brushes/K90/1.png" },
    { name: "M7", imgSrc: "/images/brush/round-pointed-brushes/M7/1.png" }
  ],
  "constellation-series": [
    { name: "房", imgSrc: "/images/brush/constellation-series/房/1.png" },
    { name: "井", imgSrc: "/images/brush/constellation-series/井/1.png" },
    { name: "亢", imgSrc: "/images/brush/constellation-series/亢/1.png" },
    { name: "奎", imgSrc: "/images/brush/constellation-series/奎/1.png" },
    { name: "柳", imgSrc: "/images/brush/constellation-series/柳/1.png" },
    { name: "星", imgSrc: "/images/brush/constellation-series/星/1.png" },
    { name: "翼", imgSrc: "/images/brush/constellation-series/翼/1.png" },
    { name: "轸", imgSrc: "/images/brush/constellation-series/轸/1.png" }
  ],
  'travel-brushes': [
    { name: "415", imgSrc: "/images/brush/travel-brushes/415/1.png" },
    { name: "417", imgSrc: "/images/brush/travel-brushes/417/1.png" }
  ],
  'multipurpose-brushes': [
    { name: "511", imgSrc: "/images/brush/multipurpose-brushes/511/1.png" },
    { name: "525", imgSrc: "/images/brush/multipurpose-brushes/525/1.png" },
    { name: "719F", imgSrc: "/images/brush/multipurpose-brushes/719F/1.png" },
    { name: "719U", imgSrc: "/images/brush/multipurpose-brushes/719U/1.png" },
    { name: "719V", imgSrc: "/images/brush/multipurpose-brushes/719V/1.png" },
    { name: "775", imgSrc: "/images/brush/multipurpose-brushes/775/1.png" },
    { name: "776", imgSrc: "/images/brush/multipurpose-brushes/776/1.png" }
  ],
  'brush': [
    { name: "810", imgSrc: "/images/brush/brush/810/1.png" },
    { name: "818", imgSrc: "/images/brush/brush/818/1.png" },
    { name: "819", imgSrc: "/images/brush/brush/819/1.png" },
    { name: "821", imgSrc: "/images/brush/brush/821/1.png" },
    { name: "851", imgSrc: "/images/brush/brush/851/1.png" },
    { name: "861", imgSrc: "/images/brush/brush/861/1.png" },
    { name: "881", imgSrc: "/images/brush/brush/881/1.png" }
  ],
  'brush-set': [
    { name: "BR-WC006", imgSrc: "/images/brush/brush-set/BR-WC006.png" },
    { name: "BR-WC007", imgSrc: "/images/brush/brush-set/BR-WC007.png" },
    { name: "J", imgSrc: "/images/brush/brush-set/J.png" },
    { name: "K", imgSrc: "/images/brush/brush-set/K.png" },
    { name: "L", imgSrc: "/images/brush/brush-set/L.png" },
    { name: "N", imgSrc: "/images/brush/brush-set/N.png" },
    { name: "O", imgSrc: "/images/brush/brush-set/O.png" },
    { name: "P", imgSrc: "/images/brush/brush-set/P.png" },
    { name: "Q", imgSrc: "/images/brush/brush-set/Q.png" },
    { name: "R", imgSrc: "/images/brush/brush-set/R.png" },
    { name: "S", imgSrc: "/images/brush/brush-set/S.png" }
  ],
}

export async function getStaticPaths({ locales }: GetStaticPathsContext) {
  const brushNames = Object.keys(brushData).map((key) => ({ name: key }));
  console.log('brushNames', brushNames);
  return {
    paths: locales
      ? locales.reduce<string[]>((arr, locale) => {
          // 为每个 locale 添加画笔路径
          brushNames.forEach((brush: any) => {
            arr.push(`/${locale}/brush/${brush.name}`);
          });
          return arr;
        }, [])
      : brushNames.map((brush: any) => `/brush/${brush.name}`),
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params, locale, locales, preview }: GetStaticPropsContext<{ name: string }>) {
  const brushName = params?.name as keyof typeof brushData;

  // 确保获取的数据是有效的
  const brushItems = brushData[brushName] || [];

  return {
    props: {
      brushName,
      brushItems,
    },
    revalidate: 200, // 重新生成页面的时间
  };
}

const BrushPage = ({ brushName, brushItems }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  return (
    <Container className='bg-gray-200'>
      <div className="relative w-full">
        <Image src={bannerImage} alt="banner" className="w-full h-[500px] object-cover"/>
      </div>
      <div className='px-64'>
        <div className='customFont text-center text-[4rem] pt-8 text-black my-15'>{brushName}</div>
        <div className="text-[26px] text-secondary pb-2">
          <p>Considered the elite hair for watercolor, Escoda selects only the best Kolinsky male sable hair for this brush. This haircomes from the Tajmyr region in very northern Siberia. Points perfectly and has an extraordinary capacity to retain liquids</p>
        </div>
        <div className="relative w-full flex mt-8 justify-center py-6 flex-wrap border-t-4 border-b-4 border-gray-300">
          {brushItems?.map((item, index) => (
            <div key={index} className="w-1/4 px-10 cursor-pointer hover:cursor-pointer py-4">
              <Link href={`/product/${brushName}-${item.name}`}>
                <img className="w-full h-auto hover:brightness-50" src={item.imgSrc} alt={`Brush ${index + 1}`} />
              </Link>
              <div className='text-left'>
                <span className='bg-black text-[1.5rem] font-bold py-1 px-5'>{item.name}</span>
                <div className='text-left w-[300px] my-3'>
                   <p className='text-[1.2rem] text-black'>ITEM: xxx</p>
                   <p className='text-[1.2rem] text-black'>SIZE: xxx</p>
                 </div>
              </div>
            </div>
            // <Link href={`/product/${brushName}-${item.name}`}>
            //   <img src={item.imgSrc} alt={`Brush ${index + 1}`} className="object-contain w-[300px] h-[300px] bg-white hover:brightness-50"/>
            //   <div className='text-left w-[300px]'>
            //     <span className='bg-black text-[1.5rem] font-bold py-1 px-5'>{item.name}</span>
            //   </div>
            //   {/* <div className='text-left w-[300px] my-3'>
            //     <p className='text-[1.2rem] text-black'>ITEM: xxx</p>
            //     <p className='text-[1.2rem] text-black'>SIZE: xxx</p>
            //   </div> */}
            // </Link>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default BrushPage;

BrushPage.Layout = Layout;