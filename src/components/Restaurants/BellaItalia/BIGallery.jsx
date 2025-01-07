import React from 'react'
import Container from '../../common/Container'
import ComponentTitle from '../../common/ComponentTitle'

const BIGallery = () => {
  return (
    <Container>
      <div>
        <div>
        <ComponentTitle children=" Discover our magnificent place in photos"
        className="md:font-semibold"/>
        <p className='max-w-[601px]'>The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing.</p>

        {/* <PhotoGallery photos={photos}/> */}
        </div>

      </div>
    </Container>
  )
}

export default BIGallery
