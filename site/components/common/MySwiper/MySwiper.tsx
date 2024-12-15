import { FC, useState, useEffect, ReactNode } from 'react'
import Image from 'next/image'
import throttle from 'lodash.throttle'
import cn from 'clsx'
import s from './MySwiper.module.css'

const MySwiper: FC<{ children?: ReactNode; images: any }> = ({ children, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  let interval: NodeJS.Timeout
  useEffect(() => {
    interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images?.length)
    }, 3000) // 每3秒切换一次

    return () => clearInterval(interval) // 清除定时器
  }, [images?.length, currentIndex])

  // const handleMouseEnter = () => {
  //   clearInterval(interval)
  // }

  // const handleMouseLeave = () => {
  //   interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % images?.length)
  //   }, 3000)
  // }

  return (
    <div 
      className={s.root} 
      // onMouseEnter={handleMouseEnter} 
      // onMouseLeave={handleMouseLeave}
    >
      {children}
      <div className="relative">
        <button onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + images?.length) % images?.length)} className="absolute left-0 z-10"></button>
        <div className="overflow-hidden">
          <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {images?.map((src: any, index: number) => (
              <div key={index} className="min-w-full">
                <Image src={src} alt={`Image ${index + 1}`} layout="responsive" />
              </div>
            ))}
          </div>
        </div>
        <button onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % images?.length)} className="absolute right-0 z-10">Next</button>
      </div>
    </div>
  )
}

export default MySwiper
