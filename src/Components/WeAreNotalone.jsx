import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import icon1 from '../assets/icon1.svg'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'

const WeAreNotalone = () => {

    const bestseller = {
        "bestSellerCollections": {
          "data": [
            {
              "id": 1,
              "title": "$20 M",
              "productImage": icon1,
              "descripton": "Annual additional revenue from personalized repeat business",
              "priceRange": "₹425.00",
            },
            {
              "id": 2,
              "title": "4B",
              "productImage": icon2,
              "descripton": "Personalized upsells",
            },
            {
              "id": 3,
              "title": "30M",
              "productImage": icon3,
              "descripton": "Personalized upsells",
            },
          ]
        }
      };

  return (
    <>
    <section className='weAreNotAloneSecton'>
        <Container>
            <div className='wearenotAloneTxt'>
                <h3>We are not alone</h3>
            </div>
            <Row className='mt-5'>
                {bestseller.bestSellerCollections.data.map(item => (
                    <Col className='col-lg-4'>
                        <Row className='wearenotaloneWrapper'>
                            <Col className='col-lg-2'>
                                <div>
                                    <img src={item.productImage} alt=''/>
                                </div>
                            </Col>
                            <Col className='col-lg-10'>
                            <div>
                                <div >
                                    <h5 className='mx-3 weAreNotAloneHeadding'>{item.title}</h5>
                                </div>
                                <div >
                                    <p className='weAreNotAloneTxt'>
                                        {item.descripton}
                                    </p>
                                </div>
                            </div>  
                            </Col>
                        </Row>
                    </Col>
                ))}
            </Row>
        </Container>
    </section>
   </>
  )
}

export default WeAreNotalone