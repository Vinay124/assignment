import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import POSSimg from '../assets/poss.png' 

const pos = () => {

    const bestseller = {
        "bestSellerCollections": {
          "data": [
            {
              "id": 1,
              "title": "pOSs",
              "descripton": "Qubriux seamlessly integrates with Point of Sale (POS) systems, streamlining operations and unifying customer interactions. Effortlessly capture in-store data for enhanced engagement, loyalty, and personalized marketing. Revolutionize your connections with insightful analytics.",
            },
            {
              "id": 2,
              "title": "Online ordering",
              "descripton": "Qubriux seamlessly integrates with online ordering platforms, offering a cohesive digital experience. Whether on your website or third-party platforms, Qubriux ensures a 360° view of interactions. Elevate your online presence and turn every order into an opportunity for enhanced engagement.",
            },
            {
              "id": 3,
              "title": "E-commerce store",
              "descripton": "Transform your online store using Qubriux's seamless integration with Shopify and other platforms. Leverage Qubriux's omnichannel marketing automation for tailored promotions, a personalized shopping journey, and lasting customer connections effortlessly.",
            },
          ]
        }
      };

  return (
    <section className='possSection'>
        <Container>
        <div>
            <div className='possTextWrapper'>
                <h2>Integrated with POSs, Online Ordering Platforms, Shopify and more.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. </p>
            </div>
        </div>
        
            <Row className='pt-5 posWrapper'>
                <Col className='col-lg-6 col-md-4'>
                    <img src={POSSimg} alt="" className='possimg' />
                </Col>
                <Col className='col-lg-6 col-md-12 col-sm-12'>
                    <div className='possDescription'>
                    {bestseller.bestSellerCollections.data.map(item => (
                        <div>
                            <div className='posstitle'>
                                <h4>{item.title}</h4>
                            </div>
                            <div>
                                <p className='mt-3'>{item.descripton}</p>
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

export default pos