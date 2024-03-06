import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavigactionData } from './NavigactionData'
import Logo from  '../assets/Logo.png'
import { useNavigate } from 'react-router-dom';
import NavSubMenu from './NavSubMenu';
import { IoSearch } from "react-icons/io5";
import { FaUser } from 'react-icons/fa';
import banner from '../assets/bann.png';
import { Col, Container, Row } from 'react-bootstrap';
import './nav.moudle.css'
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import WhiteLogo from '../assets/white-logo.png'

const Header = () => {

  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const handlemouseEnter = (submenuId) => {
    setActiveSubmenu(submenuId);
  };

  const handleMouseleave = () => {
    setActiveSubmenu(null);
  };

  const [open, setOpen] = useState();

  const openPopup = () => {
    setOpen(!open);
  }

  const navigate = useNavigate();


  const userInformation = localStorage.getItem('Userinfo');
  const useResponse = JSON.parse(userInformation)


  const Styles = {
    textTransform: 'capitalize'
  }


  const [isMenu, setIsMenu] = useState(false);

  const togglebutton = () => {
    setIsMenu(!isMenu);
  };

  return (
    <>
    <header className='headerMain'>
      <div className='container nav-container'>
          <div className='toggleWrapper'>
            <div className='toggleMenuwrapper'>
              <button className='btn-menutoggle' onClick={togglebutton}><HiOutlineMenuAlt2 size={25} color='white'/></button>
              <img src={WhiteLogo} className='whiteLogo'/>
            </div>
          </div>
          <div className={`navMenu ${isMenu ? 'open' : 'close'}`}>
  
        <div className='navmain'>
            <div>
              <div>
                <img src={Logo} alt="Logo" />
              </div>
            </div>
            <div className='navListDiv'>
              <ul className='navlist'>
              {NavigactionData.map((menuItem, i) => {
                    return(
                      <li key={menuItem.id} className="mx-3"
                      onMouseEnter={() => handlemouseEnter(menuItem.id)}
                      onMouseLeave={handleMouseleave}>
                        <Link to={menuItem.url}>
                        <div className="d-flex align-items-center">
                          <div>{menuItem.name}</div>
                          <div className='mx-2 my-1'>{menuItem.icon}</div>
                        </div>
                        </Link>
                        {menuItem.submenus && activeSubmenu === menuItem.id && (
                          <NavSubMenu submenus={menuItem.submenus}/>
                        )}
                    </li>
                    )
                  })}
              </ul>
            </div>
            <div className='otherlinks'>
              <div className='searchlinks'>
                <div >
                  <IoSearch size={20} color='111111'/>
                </div>
                <div className='mx-5'>
                  <FaUser size={20} color='111111'/>
                </div>
              </div>
              <div>
                <button className='contactbutton'>Contact Us</button>
              </div>
            </div>
      </div>
      </div>
      </div>
      <Container>
      <div>
        <Row className='mb-5 pb-5 bannerWrapper'>
          <Col className="Col-lg-6  d-flex align-items-center">
            <div className='d-flex flex-column'>
              <div className='bannerTxt'>
                  <h1>
                    <span className='bold'>Elevate</span> Your Customer Engagement with Qubriux!  
                  </h1>
                  <p>The industry-leading customer loyalty and engagement platform for small and medium enterprises.</p>
              </div>
              <div className='headerCol'>
                <button className='bannButton'>Request Demo</button>
              </div>
            </div>
          </Col>
          <Col className="Col-lg-6">
            <div>
              <img src={banner} alt='banner' className='bannerImg'/>
            </div>
          </Col>
        </Row>
    </div>
    </Container>
    </header>

   
  </>
  )
}

export default Header