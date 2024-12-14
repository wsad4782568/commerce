import { FC, memo } from 'react'
import cn from 'clsx'
import s from './ExternalLinks.module.css'
import { Youtube, Tiktok, Instagram } from '@components/icons'
interface Props {
  className?: string
}

const ExternalLinks: FC<Props> = ({ className }) => {
  return (
    <div className={cn(s.root, className)}>
      <div className={s.iconContainer}>
          <a className={`${s.link} mx-2`} href="https://www.youtube.com/@mairtini_official" target="_blank" rel="noopener noreferrer">
            <Youtube />
          </a>
          <a className={`${s.link} mx-2`} href="https://www.instagram.com/mairtini_official/" target="_blank" rel="noopener noreferrer">
          <Tiktok />
          </a>
          <a className={`${s.link} mx-2`} href="https://www.tiktok.com/@mairtini_official" target="_blank" rel="noopener noreferrer">
          <Instagram />
          </a>
      </div>
    </div>
  )
}

export default memo(ExternalLinks)
