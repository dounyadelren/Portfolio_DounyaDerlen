import React from 'react'
import Img from '../../../../assets/img/snapchat.jpg'
import Video from '../../../../assets/video/my_snapchat.mp4'
import HoverVideoPlayer from 'react-hover-video-player';


function Snapchat() {
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
                        width: '30%',
                        height: '100%',
                        marginLeft: 200
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

export default Snapchat
