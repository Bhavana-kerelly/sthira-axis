import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import IntroSection from '../../components/IntroSection/IntroSection';
import FoundationSection from '../../components/FoundationSection/FoundationSection';
import ApertureTransition from '../../components/ApertureTransition/ApertureTransition';
import FeaturedProjectSection from '../../components/FeaturedProjectSection/FeaturedProjectSection';
import ApproachSection from '../../components/ApproachSection/ApproachSection';
import PeopleSection from '../../components/PeopleSection/PeopleSection';
import PortfolioSection from '../../components/PortfolioSection/PortfolioSection';
import LookingAheadSection from '../../components/LookingAheadSection/LookingAheadSection';
import ContactSection from '../../components/ContactSection/ContactSection';
import { useLocation } from 'react-router-dom';

const HomePage = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    // This allows GSAP to run smoothly on fast renders
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
      if (location.state?.scrollTo) {
        const el = document.getElementById(location.state.scrollTo);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <Navbar />
      <Hero />
      <IntroSection />
      <FoundationSection />
      <ApertureTransition />
      <FeaturedProjectSection />
      <ApproachSection />
      <PeopleSection />
      <PortfolioSection />
      <LookingAheadSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
