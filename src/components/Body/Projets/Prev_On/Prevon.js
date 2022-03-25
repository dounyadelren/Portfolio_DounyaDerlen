import React from 'react'
import Img from '../../../../assets/img/prevon.png'
import Video from '../../../../assets/video/prevon.mov'
import HoverVideoPlayer from 'react-hover-video-player';

const Prevon = () => {
  return (
    <div>
      <HoverVideoPlayer
        videoSrc={Video}

        pausedOverlay={
          <img
            src={Img}
            alt="previously-on"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        }
        loadingOverlay={
          <div className="loading-overlay">Loading...
            <div className="loading-spinner" />
          </div>
        }
      />
    </div>
  )
}

export default Prevon