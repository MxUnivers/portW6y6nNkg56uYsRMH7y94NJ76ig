import React from 'react';
import LandinAbout from '../components/landing/LandinAbout';
import LandingBg from '../components/landing/LandingBg';
import LandingProject from '../components/landing/LandingProject';
import LandingScreem from '../components/landing/LandingScreem';
import LandingService from '../components/landing/LandingService';
import LandingStarted from '../components/landing/LandingStarted';
import LandingTestimonial from '../components/landing/LandingTestimonial';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <>
      <LandingBg />
      <LandingScreem />
      <LandinAbout />
      <LandingStarted />
      <LandingService/>
      <LandingProject/>
      <LandingTestimonial/>
    </>
  )
}

export default LandingPage;