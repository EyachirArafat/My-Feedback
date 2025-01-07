import React from 'react'
import Container from '../../common/Container'
import ComponentTitle from '../../common/ComponentTitle'
import PhotoGallery from '../../common/PhotoGallery'

const imageGallery = [
  "/Bella-italia-img-1.png",
  "/Bella-italia-img-2.png",
  "/Bella-italia-img-3.png",
  "/Bella-italia-img-4.png",
  "/Bella-italia-img-5.png",
  "/Bella-italia-img-1.png",
  "/Bella-italia-img-2.png",
]

const BIGallery = () => {
  return (
    <Container>
      <div>
        <div>
        <ComponentTitle children=" Discover our magnificent place in photos"
        className="md:font-semibold"/>
        <p className='max-w-[601px]'>The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing.</p>

        <PhotoGallery 
        mainPhoto="/Bella-italia-img-1.2.png"
        photos={imageGallery}/>
        </div>

      </div>
    </Container>
  )
}

export default BIGallery
