import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import asset1 from '../assets/S1.png'
import asset2 from '../assets/S2.png'
import asset3 from '../assets/S3.png'
import asset4 from '../assets/S4.png'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Engagementslider = () => {

    const options = {
        loop: true,
        center: true,
        items: 2,
        margin: 5,
        autoplay: true,
        dots: false,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    };

    const bestseller = {
        "bestSellerCollections": {
          "data": [
            {
              "id": 1,
              "title": "User Experience (UX) Design in Software Development",
              "productImage": asset1,
              "descripton": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt urna nec ligula. ",
            },
            {
              "id": 2,
              "title": "Case Studies of Successful Software Implementations",
              "productImage": asset2,
              "descripton": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt urna nec ligula. ",
            },
            {
              "id": 3,
              "title": "Emerging Trends in Software Development :",
              "productImage": asset3,
              "descripton": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt urna nec ligula. ",
            },
            {
              "id": 4,
              "title": "Integrated with Email,SMS,Whatsapp,",
              "productImage": asset4,
              "descripton": "Reach your customers through multiple channels with one click. ",
            },
          ]
        }
      };

  return (
    <secton className="Engagementslider">
        <Container>
            <div className='slidertextWrapper'>
                <h3>Customer Engagement and Loyalty at one place</h3>
                <span>Select a template, Edit Details, Customise your way, and Never miss a chance to Engage your customers!</span>
            </div>
            
            <div className='mainwrapper'>
                <div>
                    <div className='macbookWall'>
                    <OwlCarousel {...options}>
                        {bestseller.bestSellerCollections.data.map(item => (
                            <div className='sliderWrapper'>
                                <div>
                                    <img src={item.productImage} alt=''/>
                                </div>
                                <div className='slioderTxt'>
                                    <h6>{item.title}</h6>
                                    <span>{item.descripton}</span>
                                </div>
                            </div>
                            ))}
                    </OwlCarousel>
                </div>
                </div>
            </div>
        </Container>
    </secton>
  )
}

export default Engagementslider