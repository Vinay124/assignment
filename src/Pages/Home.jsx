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
    <div>Home</div>
    </>
  )
}

export default Home