import React from 'react';
import './HeroBanner.css';
import heroImg from '../../assets/images/heropng.png';
import AuthTabs from '../AuthTabs/AuthTabs';

function HeroBanner() {
  return (
    <section className="hero-banner-section">
      <div className="container hero-bg">
        <div className="row align-items-center">
          
          <div className="col-lg-7 col-12 hero-left">
            <h1 className="hero-title">
              <span><strong>Explore your <span className="color-hobby">hobby</span> or <span className="color-passion">passion</span></strong></span>
            </h1>
            <p className="hero-desc">
              Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, 
              participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities...
            </p>
            <p className="hero-desc hero-bottom-text">
              If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products, services or events. Hop on your hobbyhorse and enjoy the ride.
            </p>
            <img src={heroImg} alt="Hobby Community" className="hero-image" />
          </div>
          
          <div className="col-lg-5 col-12 d-flex flex-column align-items-end justify-content-center">
            <div className="auth-panel">
              <AuthTabs />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
