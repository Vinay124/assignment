import React from 'react'
import './home.moudle.css'
import Nav from '../Components/Header'
import ClientsList from '../Components/ClientsList'
import CustomerEngagement from '../Components/CustomerEngagement'
import POS from '../Components/pos'
import LoyaltyManagement from '../Components/LoyaltyManagement'
import Engagementslider from '../Components/Engagementslider'
import Faqs from '../Components/Faqs'

const Home = () => {
  return (
    <>
    <Nav/>
    <ClientsList/>
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