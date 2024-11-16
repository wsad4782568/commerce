import Link from 'next/link'
// import Image from 'next/image'
import { useRouter } from 'next/router'
import { Layout } from '@components/common'
import { Container } from '@components/ui'

const brushData = {
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

const BrushPage = () => {
  const router = useRouter()
  const { name } = router.query
  const brushItems = brushData[name as keyof typeof brushData]

  return (
    <Container className='bg-gray-200'>
      <div className='customFont text-center text-[8rem] text-black my-15'>{name}</div>
      <div className="relative w-full flex justify-center py-6 flex-wrap border-t-4 border-b-4 border-gray-300">
        {brushItems?.map((item, index) => (
          <div key={index} className="w-1/4 pr-10 cursor-pointer hover:cursor-pointer py-4">
            <Link href={`/product/${name}-${item.name}`}>
              <img className="w-full h-auto" src={item.imgSrc} alt={`Brush ${index + 1}`} />
            </Link>
            <div className='text-center m-8'>
              <span className='bg-black text-[2rem] font-bold py-1 px-5'>{item.name}</span>
            </div>
          </div>
          ))}
      </div>
    </Container>
  )
}

export default BrushPage

BrushPage.Layout = Layout