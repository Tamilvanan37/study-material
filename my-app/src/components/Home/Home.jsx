import React from 'react'
import Hero from './hero/Hero';
import Aboutcard from '../About/Aboutcard';
import HAbout from './hero/HAbout';
import Test from './Testionmonal/Test';
import Hblog from './hero/Hblog';
import Hprice from './hero/Hprice';
import Footer from '../common/Footer/Footer';


const Home = () => {
  return (
    <>
    
    <Hero/>
    <Aboutcard/>
    <HAbout/>
    <Test/>
    <Hblog/>
    <Hprice/>
    <Footer/>
   
    </>
  )
}

export default Home