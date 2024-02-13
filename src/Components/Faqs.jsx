import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';

const Faqs = () => {
  return (
    <section>
        <Container>
            <div>
                <h2>Frequently Asked Questions</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt urna nec ligula </p>
            </div>

        <Accordion defaultActiveKey="0" className='mt-5'>
        <Accordion.Item eventKey="0">
            <Accordion.Header>
                <h4 className='accordianName'>Q. Do you offer customization options for your solutions?</h4>
                </Accordion.Header>
            <Accordion.Body>
                    <span>Absolutely, we offer customization options for your solutions, specifically in various features:</span>
            <div className='mt-2'>
                <b>Segmentation:</b> Our platform provides a range of parameters for filtering customer segments. Should you require additional parameters tailored to your needs, we’ll create them for you. This facilitates segmenting customers based on -average monthly spend, Life time value, no of purchases in this year etc.
            </div>
            <div className='mt-2'>
                <b>Loyalty:</b> Utilize our Loyalty program to retain customers. You can design, automate, and customize tier-based loyalty programs that align with the unique needs of your business and customers.
            </div>
            <div className='mt-2'>
                <b>Offers:</b>  In today’s era of personalization, Qubriux empowers you to create AI-based offers. Our platform enables the delivery of various offer types, and we are capable of adding more options to effectively target your audience and enhance customer lifetime value.
            </div>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header><h4 className='accordianName'>Q. How does Qubriux ensure data security and privacy</h4></Accordion.Header>
            <Accordion.Body>
                    <span>Absolutely, we offer customization options for your solutions, specifically in various features:</span>
            <div className='mt-2'>
                <b>Segmentation:</b> Our platform provides a range of parameters for filtering customer segments. Should you require additional parameters tailored to your needs, we’ll create them for you. This facilitates segmenting customers based on -average monthly spend, Life time value, no of purchases in this year etc.
            </div>
            <div className='mt-2'>
                <b>Loyalty:</b> Utilize our Loyalty program to retain customers. You can design, automate, and customize tier-based loyalty programs that align with the unique needs of your business and customers.
            </div>
            <div className='mt-2'>
                <b>Offers:</b>  In today’s era of personalization, Qubriux empowers you to create AI-based offers. Our platform enables the delivery of various offer types, and we are capable of adding more options to effectively target your audience and enhance customer lifetime value.
            </div>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
            <Accordion.Header><h4 className='accordianName'>Q. Do you offer training or onboarding for new users?</h4></Accordion.Header>
            <Accordion.Body>
                    <span>Absolutely, we offer customization options for your solutions, specifically in various features:</span>
            <div className='mt-2'>
                <b>Segmentation:</b> Our platform provides a range of parameters for filtering customer segments. Should you require additional parameters tailored to your needs, we’ll create them for you. This facilitates segmenting customers based on -average monthly spend, Life time value, no of purchases in this year etc.
            </div>
            <div className='mt-2'>
                <b>Loyalty:</b> Utilize our Loyalty program to retain customers. You can design, automate, and customize tier-based loyalty programs that align with the unique needs of your business and customers.
            </div>
            <div className='mt-2'>
                <b>Offers:</b>  In today’s era of personalization, Qubriux empowers you to create AI-based offers. Our platform enables the delivery of various offer types, and we are capable of adding more options to effectively target your audience and enhance customer lifetime value.
            </div>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
            <Accordion.Header><h4 className='accordianName'>Q. Can I transfer my data from a previous product to Qubriux solution?</h4></Accordion.Header>
            <Accordion.Body>
                    <span>Absolutely, we offer customization options for your solutions, specifically in various features:</span>
            <div>
                <b>Segmentation:</b> Our platform provides a range of parameters for filtering customer segments. Should you require additional parameters tailored to your needs, we’ll create them for you. This facilitates segmenting customers based on -average monthly spend, Life time value, no of purchases in this year etc.
            </div>
            <div>
                <b>Loyalty:</b> Utilize our Loyalty program to retain customers. You can design, automate, and customize tier-based loyalty programs that align with the unique needs of your business and customers.
            </div>
            <div>
                <b>Offers:</b>  In today’s era of personalization, Qubriux empowers you to create AI-based offers. Our platform enables the delivery of various offer types, and we are capable of adding more options to effectively target your audience and enhance customer lifetime value.
            </div>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
            <Accordion.Header><h4 className='accordianName'>Q. How much technical experience do business users need to operate the software?</h4></Accordion.Header>
            <Accordion.Body>
                    <span>Absolutely, we offer customization options for your solutions, specifically in various features:</span>
            <div  className='mt-2'>
                <b>Segmentation:</b> Our platform provides a range of parameters for filtering customer segments. Should you require additional parameters tailored to your needs, we’ll create them for you. This facilitates segmenting customers based on -average monthly spend, Life time value, no of purchases in this year etc.
            </div>
            <div className='mt-2'>
                <b>Loyalty:</b> Utilize our Loyalty program to retain customers. You can design, automate, and customize tier-based loyalty programs that align with the unique needs of your business and customers.
            </div>
            <div className='mt-2'>
                <b>Offers:</b>  In today’s era of personalization, Qubriux empowers you to create AI-based offers. Our platform enables the delivery of various offer types, and we are capable of adding more options to effectively target your audience and enhance customer lifetime value.
            </div>
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>

    </Container>
    </section>
  )
}

export default Faqs