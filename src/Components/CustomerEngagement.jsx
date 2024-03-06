import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import F1 from '../assets/F1.png'
import F2 from '../assets/F2.png'
import F3 from '../assets/F3.png'
import F4 from '../assets/F4.png'

const CustomerEngagement = () => {
    
    const style = {
        width:'20%'
    }

    const bestseller = {
        "bestSellerCollections": {
          "data": [
            {
              "id": 1,
              "title": "Foster customer retention with precision through strategic automation.",
              "productImage": F1,
              "descripton": "Seeking to deliver personalized promotions on your customers' birthdays or win back lost customers? Our automation streamlines the strategic planning and engagement process with your customers, allowing you to focus on the core operations of your business.",
              "priceRange": "₹425.00",
            },
            {
              "id": 2,
              "title": "Partner with other businesses for cross-promotions.",
              "productImage": F2,
              "descripton": "Seeking to deliver personalized promotions on your customers' birthdays or win back lost customers? Our automation streamlines the strategic planning and engagement process with your customers, allowing you to focus on the core operations of your business.",
              "priceRange": "₹425.00",
            },
            {
              "id": 3,
              "title": "Create custom loyalty programs.",
              "productImage": F3,
              "descripton": "Create loyalty program with ease. Create loyalty tiers such as silver,gold, platinum, etc. Our platform takes care of promoting and maintaining customers into tiers.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
              "priceRange": "₹425.00",
            },
            {
              "id": 4,
              "title": "Integrated with Email,SMS,Whatsapp,",
              "productImage": F4,
              "descripton": "Reach your customers through multiple channels with one click. Design campaigns which are integrated with Email, SMS, WhatsApp, Facebook & Instagram. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
              "priceRange": "₹425.00",
            },
          ]
        }
      };

  return (
    <section className='mt-5 pt-5'>
        <Container>
            <div>
                <div className='bannerTxt'>
                    <h1>Simplify <span className='cu'>Customer Engagement</span> with One Affordable Solution.</h1>
                </div>
                <p>You are busy running your business. The last thing you want is to deal with multiple customer platforms.Make your life easy with a one stop platform to handle it all with an affordable pricing.</p>
            </div>
            <div>
            {bestseller.bestSellerCollections.data.map(item => (
                <Row className='d-flex align-items-center mt-5 customerEngagement'>
                <Col className='col-lg-4'>
                    <div>
                        <img src={item.productImage} alt="" className='customerEngIImg'/>
                    </div>
                </Col>
                <Col className='Col-lg-8'>
                    <div>
                        <div>
                            <h3 className='title'>{item.title}</h3>
                            <p className='my-4'>{item.descripton}</p>
                        </div>
                        <div>
                        <button className='bannButton ' style={style}>Know more</button>
                        </div>
                    </div>
                </Col>
            </Row>
            ))}
            </div>
        </Container>
    </section>
  )
}

export default CustomerEngagement