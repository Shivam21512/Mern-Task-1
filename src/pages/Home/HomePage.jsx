import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import AuthTabs from '../../components/AuthTabs/AuthTabs';
import ListingGrid from '../../components/ListingGrid/ListingGrid';
import AddYourOwn from '../../components/AddYourOwn/AddYourOwn';
import Testimonials from '../../components/Testimonials/Testimonials';
import Footer from '../../components/Footer/Footer';
import './HomePage.css';
import HeroFooterBanner from '../../components/HeroFooterBanner/HeroFooterBanner';

function HomePage() {
  return (
    <>
      <Navbar/>
      <HeroBanner/>
      <ListingGrid/>
      <AddYourOwn/>
      <Testimonials/>
      <HeroFooterBanner/>
      <Footer/>
      
    </>
  );
}

export default HomePage;
