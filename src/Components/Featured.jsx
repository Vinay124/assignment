import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import N1 from '../assets/N1.png'
import N2 from '../assets/N2.png'
import { IoIosShareAlt } from "react-icons/io";


const Featured = () => {

    const restorent = {
        "sliderData": {
          "data": [
            {
              "id": 1,
              "title": "Fortune",
              "image":N1,
              "descripton": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Lorem ipsum..........",
            },
            {
              "id": 2,
              "title": "USA Today",
              "image":N2,
              "descripton": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Lorem ipsum.........",
            },
          ]
        }
      };

  return (
    <section className='featuredmain'>
        <Container>
            <Row className='featuresRow'>
                <Col  className="col-lg-4 d-flex align-items-center">
                    <div className='featured'>
                        <h2>We are featured in</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.</p>
                    </div>
                </Col>
                <Col className="col-lg-6 ">
                    <div className='d-flex newsBlogWrapper'>
                        {restorent.sliderData.data.map((item) =>  (
                            <div className='featuresWrapper'>
                                <div>
                                    <img src={item.image} alt=""/>
                                </div>
                                <div>
                                    <div className='featurescards'>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <h6>{item.title}</h6>
                                            <button className='shareBtn'><IoIosShareAlt color='white'/></button>
                                        </div>
                                        <p>{item.descripton}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Featured