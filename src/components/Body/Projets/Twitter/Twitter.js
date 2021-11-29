import React from 'react'
import Img from '../../../../assets/img/twitter.jpg'
import Video from '../../../../assets/video/twitter.mp4'
import HoverVideoPlayer from 'react-hover-video-player';


function Twitter() {
    return (
        <div>
            <HoverVideoPlayer
                videoSrc={Video}

                pausedOverlay={
                    <img
                    src={Img}
                    alt="error"
                    style={{
                        // Make the image expand to cover the video's dimensions
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

export default Twitter
