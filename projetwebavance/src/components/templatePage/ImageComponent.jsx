import React from 'react'
import Image from 'next/image'


const ImageComponent = ({ srcImg = "/musicFest.jpg", alt = "music" }) => {
  return (
    <>    
     <Image src ={srcImg} alt={alt} width={500} height={300} layout='responsive' objectFit='cover'/>
    </>
  )
}

export default ImageComponent