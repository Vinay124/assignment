import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { IoIosCheckmarkCircle } from "react-icons/io";
import Lady from '../assets/lady.png'

const LoyaltyManagement = () => {
  return (
    <section>
        <Container>
            
            <Row className='loyalityManagmentRow'>
                <Col className='col-lg-8 col-md-6 d-flex align-items-center'>
                    <div className='d-flex flex-column '>
                    <div className='mt-5'>
                <div className='loyalmanage'>
                    <h3>Use AI to help in <span className='txtbold'>Loyalty Management</span> & Analytics</h3>
                </div>
                </div>
                    <div className='pt-3 mb-5'>
                        <button className='personalised'>Personalised Offers</button>
                        <button className='Loyalty'>Loyalty and Rewards Management</button>
                        <button className='Loyalty'>Segmentation</button>
                    </div>
                    <div className='d-flex align-items-center'>
                        <div className='loyaltymanagmentwrapper'>
                            <div className='loyaltymanagment'>
                                <h3>Leverage AI for effective Loyalty Management and Analytics.</h3>
                                <p>Generic offers miss opportunities. Personalize your offers for optimal Conversions and Customer Satisfaction. Our AI-driven approach tailors offers to each customer, maximizing revenue and satisfaction.</p>
                            </div>
                            <ul className='loyalityul'>
                                <li><IoIosCheckmarkCircle size={20} color='#DD8738' className='mx-2'/>
                                    Individualized Offer Strategies</li>
                                <li><IoIosCheckmarkCircle size={20} color='#DD8738' className='mx-2'/>
                                    Maximize Revenue Potential</li>
                                <li><IoIosCheckmarkCircle size={20} color='#DD8738' className='mx-2'/>
                                    Enhanced Customer Satisfaction</li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </Col>
                <Col className='col-lg-4 col-md-6 '>
                    <img src={Lady} alt="" className='ladyIMageBanner' style={{width:'132%'}}/>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default LoyaltyManagement