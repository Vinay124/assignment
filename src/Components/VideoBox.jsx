import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ReactPlayer from 'react-player'

const VideoBox = () => {

    const [isplay, setIsplay] = useState(false);

    const handleplay = () => {
        setIsplay(true);
    };

    const videoStyle = {
        borderRadius: '100px !imoprtant'
    }

  return (
    <section className='videoBox'>
        <Container>
                <div className='video-wrapper'onClick={handleplay}>
                    {isplay && (
                        

                            <ReactPlayer
                            className='react-player'
                            url='https://media.istockphoto.com/id/1333944196/video/4k-video-footage-of-a-hacker-using-a-computer.mp4?s=mp4-640x640-is&k=20&c=MaBOpzRj_9nopH0jQtWVg_4P-vJZEDbNKtteUkhwUS0=' // Replace with your video URL
                            width='100%'
                            height='100%'
                            styles={videoStyle}
                            muted={true}
                            controls={false}
                            playing={isplay}
                            onEnded={() => setIsplay(false)}/>   
                    )}
                    
                </div>
                <div className='videoMainWrapper'>

                <div className='videoDescripion'>
                    <h4>Qubriux Odyssey: Elevate Your Business with AI-Driven Brilliance!</h4>
                    <p>Ready for a game-changer in customer engagement? Welcome to Qubriux - where AI meets marketing magic for unparalleled customer experiences. Qubriux is your gateway to a new era of customer engagement. Embrace the forward-thinking fusion of marketing automation, predictive analytics, and seamlessly integrated loyalty management within a robust platform.</p>
                </div>
                </div>
        </Container>
    </section>
  )
}

export default VideoBox