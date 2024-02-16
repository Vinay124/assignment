import React, { useState } from 'react';
import {Col, Container, Row} from 'react-bootstrap'
import Slider1 from '../assets/L1.png'
import Slider2 from '../assets/L2.png'
import Slider3 from '../assets/L3.png'
import Slider4 from '../assets/L4.png'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { IoIosArrowForward } from "react-icons/io";
import I1 from '../assets/i1.png'
import I2 from '../assets/i2.png'
import I3 from '../assets/i3.png'
import I4 from '../assets/i4.png'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";


const InfoSlider = () => {

    const restorent = [
            {
              "id": 1,
              "icon":I1,
              "title": "Restaurant",
              "productImage": Slider1,
              "descripton": "Step up your dining game with Qubriux. Deliver personalized marketing, omnichannel campaigns.....",
            },
            {
              "id": 2,
              "icon":I2,
              "title": "retail",
              "productImage": Slider2,
              "descripton": "Elevate your retail experience with Qubriux, an AI-driven platform offering targeted campaigns, personalized.......",
            },
            {
              "id": 3,
              "icon":I3,
              "title": "e-commerce",
              "productImage": Slider3,
              "descripton": "Boost e-commerce revenue with Qubriux's hyper-personalized marketing. Tailored for......",
            },
            {
              "id": 4,
              "icon":I4,
              "title": "services",
              "productImage": Slider4,
              "descripton": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt urna nec ligula. Lorem ipsum dolor sit",
            },
          ];

      const [selectedItem, setSelectedItem] = useState(0);

    const handleSlideChange = (event) => {
        setSelectedItem(event.item.index);
    };

    const options = {
      items: 3,
      loop: true,
      nav: true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 5000,
      responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1024:{
          items:2,
        },
        1025:{
            items:3
        }},
        navText: ["Prev", "Next"],
    }

  
  return (
    <section>
        <div className='infosliderMain'>
            <Row>
                <Col className='col-lg-4'>
                    <div className='leftSliderWrapper'>
                    {restorent[selectedItem] && (
                    <div className='textDetails'>
                        <h1>{restorent[selectedItem].title}</h1>
                        <p>{restorent[selectedItem].descripton}</p>
                        <button className='viewAll'>View All</button>
                    </div>
              )}
                    </div>
                </Col>
                <Col className='col-lg-8'>
                <OwlCarousel {...options}
              onChange={handleSlideChange}
            >
              {restorent.map((item) => (

                <div key={item.id} className='siderCards'>
                  <div>
                    <img src={item.productImage} alt='' />
                  </div>
                  <div className='productSlider'>
                    <div className='d-flex align-items-flex-end slidericonWrapper'>
                        <img src={item.icon} alt="" style={{width:'50px', height:'50px'}} className='slidericon'  />
                        <h4 className='mx-2 pt-2'>{item.title}</h4>
                    </div>
                    <div>
                        <p>{item.descripton}</p>
                    </div>
                    <button className='knowMore'>Know More <IoIosArrowForward/></button>
                  </div>
                </div>
              ))}
            </OwlCarousel>
                </Col>
            </Row>
        </div>
    </section>
  )
}

export default InfoSlider