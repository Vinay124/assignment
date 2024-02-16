import React from 'react'
import './home.moudle.css'
import Nav from '../Components/Header'
import ClientsList from '../Components/ClientsList'
import CustomerEngagement from '../Components/CustomerEngagement'
import POS from '../Components/pos'
import LoyaltyManagement from '../Components/LoyaltyManagement'
import Engagementslider from '../Components/Engagementslider'
import Faqs from '../Components/Faqs'
import WeAreNotalone from '../Components/WeAreNotalone'
import VideoBox from '../Components/VideoBox'
import Featured from '../Components/Featured'
import InfoSlider from '../Components/InfoSlider'
import Footer from '../Components/footer'

const Home = () => {
  return (
    <>
    <Nav/>
    <ClientsList/>
    {/* <VideoBox/> */}
    <WeAreNotalone/>
    <CustomerEngagement/>
    <POS/>
    <LoyaltyManagement/>
    <Engagementslider/>
    <Faqs/>
    <InfoSlider/> 
    <Featured/>
    <Footer/>   
    </>
  )
}

export default Home