import React from 'react'
import ImageGallery from 'react-image-gallery';
import Home from "../../../../assets/img/maquette.jpg"
import Keyboard from "../../../../assets/img/keyboard.jpg"
import Mouse from "../../../../assets/img/mouse.jpg"
import Computers from "../../../../assets/img/computers.jpg"

const Maquette = () => {

  const images = [
    {
      original: `${Home}`,
      thumbnail: `${Home}`,
    },
    {
      original: `${Computers}`,
      thumbnail: `${Computers}`,
    },
    {
      original: `${Keyboard}`,
      thumbnail: `${Keyboard}`,
    },
    {
      original: `${Mouse}`,
      thumbnail:`${Mouse}`,
    },
  ];

  return (
    <div className="caroussel" >
      <ImageGallery items={images} showNav={false} showPlayButton={false} />
    </div>
  )
}

export default Maquette