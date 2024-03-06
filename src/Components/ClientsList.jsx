import React, { useState } from 'react'
import C1 from '../assets/c1.png'
import C2 from '../assets/c2.png'
import C3 from '../assets/c3.png'
import C4 from '../assets/c4.png'
import C5 from '../assets/c5.png'
import { Container } from 'react-bootstrap'
import ReactPlayer from 'react-player'

const ClientsList = () => {

    const bestSeller = {
        "bestSellerCollections": {
          "data": [
            {
              "id": 1,
              "productImage": C1,
            },
            {
              "id": 2,
              "productImage": C2,
            },
            {
              "id": 3,
              "productImage": C3,
            },
            {
              "id": 4,
              "productImage": C4,
            },
            {
              "id": 4,
              "productImage": C5,
            }
          ]
        }
      };

      const [isplay, setIsplay] = useState(false);

    const handleplay = () => {
        setIsplay(true);
    };

    const videoStyle = {
        borderRadius: '100px !imoprtant'
    }

  return (
    <section className='d-flex flex-column text-center'>
    <Container>

    <div >
        <h1>We are not alone</h1>

        <div className="d-flex justify-content-evenly mt-5 clientsNames">
        {bestSeller.bestSellerCollections.data.map(data => (
          <div >
                <img src={data.productImage} alt='custome' className='clients'/>
            </div>
        ))}
        </div>
      </div>

        </Container>
        <div className='videoSubWrapper'>
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
        </div>

        
    </section>
  )
}

export default ClientsList