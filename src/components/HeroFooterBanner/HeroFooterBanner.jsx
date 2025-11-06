import React from 'react';
import './HeroFooterBanner.css';
import groupImg from '../../assets/images/hero-characters.png'; 
import { ChevronUp } from 'lucide-react';

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function HeroFooterBanner() {
  return (
    <section className="footer-hero-section">
      <div className="container footer-hero-bg position-relative">
        <h1 className="footer-hero-title mb-3">
          Your <span className="footer-hero-hobby">Hobby</span>, Your <span className="footer-hero-community">Community...</span>
        </h1>
        <button className="footer-hero-btn mb-4" type="button">
          Get started
        </button>
        <div className="footer-hero-illustration-row d-flex justify-content-center">
          <img
            src={groupImg}
            alt="Hobby Community Characters"
            className="footer-hero-group-image"
          />
        </div>
        
        <button
          className="go-top-btn"
          onClick={scrollToTop}
        >
          <ChevronUp color="#fff" size={22} />
        </button>
       
      </div>
    </section>
  );
}

export default HeroFooterBanner;
