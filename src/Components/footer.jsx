import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.svg'
import icon3 from '../assets/icon3.svg'
import Logo from '../assets/Logo.png'
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import FooterIcon1 from '../assets/Footericon1.svg'
import FooterIcon2 from '../assets/Footericon2.svg'
import FooterIcon3 from '../assets/Footericon3.svg'

const GetinTouch = () => {
  return (
    <section className='getinTouch'>
        <Container>
            <Row className='getintouchMainDiv'>
                <Col className="col-lg-6">
                  <div>
                      <div>
                         <div>
                            <h5>Get In Touch</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt urna nec ligula interdum, in tincidunt sapien tempus. Suspendisse potenti. Sed euismod.</p>
                         </div>
                         <div>
                            <ul className='footerul'>
                              <li>
                                <img src={icon1} alt=''/>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
                              </li>
                              <li>
                                <img src={icon1} alt=''/>
                                <span>(+91) 9930741112</span>
                              </li>
                              <li>
                                <img src={icon1} alt=''/>
                                <span>info@Lorem ipsum.com</span>
                              </li>
                            </ul>
                         </div>
                      </div>
                  </div>
                </Col>
                <Col className="col-lg-6">
                  <div className='formMainWrapper'>
                    <div className='footerTxt'>
                      <h2>Request A Demo</h2>
                    </div>
                    <form>
                      <div className='FormArea'>
                        <div>
                          <input type="text" placeholder='FirstName' className='forminput' />
                        </div>
                        <div>
                          <input type="text" placeholder='LastName' className='forminput'/>
                        </div>
                        <div>
                          <input type="number" placeholder='PhoneNumber' className='forminput'/>
                        </div>
                        <div>
                          <input type="text" placeholder='Email Id' className='forminput'/>
                        </div>
                      </div>
                      <textarea className='textAreaMessage' placeholder='Message'></textarea>
                    
                    <button className='btn-submit'>Submit</button>
                    </form>
                  </div>
                </Col>
            </Row>
        </Container>
        <footer className='footermain container-fluid'>
          <Container>
          <Row className='footerRows'>
            <Col className="col-lg-4">
              <div>
                <div>
                  <img src={Logo} className='' alt=''/>
                </div>
                <div>
                  <div > 
                    <span className='subscribeSpan'>Subscribe to Newsletter</span>
                    <div className='d-flex mt-3'>
                      <input type='email' className='newletterEmial' placeholder='Email id'/>
                      <button type='submit' className='btn-subscribe'>Button</button>
                    </div>
                  </div>
                  <div className='followUsWrapper'>
                    <span>Follow Us:</span>
                    <ul className='followUSul'>
                      <li><FaFacebookSquare color='white' size={23}/></li>
                      <li><FaTwitter color='white' size={23}/></li>
                      <li><FaLinkedin color='white' size={23}/></li>
                      <li><FaInstagram color='white' size={23}/></li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="col-lg-2">
              <div className='footerLinks'>
                <span>Quick Links</span>
                <ul>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Products</li>
                  <li>Industries</li>
                  <li>Pricing</li>
                  <li>Resources</li>
                </ul>
              </div>
            </Col>
            <Col className="col-lg-3">
            <div className='footerLinks'>
                <span>Qubriux</span>
                <ul>
                  <li>Introduction to the Qubriux</li>
                  <li>Our Story</li>
                  <li>Mission, Vision and Value Statement</li>
                  <li> Our Focus</li>
                  <li>Our Values</li>
                </ul>
              </div>
            </Col>
            <Col className="col-lg-2">
            <div className='footerLinks'>
                <span>Explore</span>
                <ul>
                  <li>Get Started</li>
                  <li>resource center</li>
                  <li>blog</li>
                  <li> Press</li>
                </ul>
              </div>
            </Col>
            <Col className="col-lg-1">
              <div className='d-flex'>
                <div>
                  <img src={FooterIcon1} className='footerSocialIcons' alt=''/>
                </div>
                <div>
                  <img src={FooterIcon2} className='footerSocialIcons' alt=''/>
                </div>
                <div>
                  <img src={FooterIcon3} className='footerSocialIcons' alt=''/>
                </div>
              </div>
            </Col>
          </Row>
          <div className='footerBottom'>
           <span>© Qubriux All Right Reserved</span>
           <span>Terms of Use</span>
           <span>Privacy Policy</span>
          </div>
          </Container>
        </footer>
    </section>
  )
}

export default GetinTouch