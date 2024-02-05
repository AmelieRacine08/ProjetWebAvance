import React from 'react'
import Image from 'next/image'

export const ImageComponent = ({srcImg="/DALL·E LOGO.png", alt="music"}) => {
  return (
    <>   
    <Image src={srcImg} alt={alt} fill/>
    </>
  )
}
