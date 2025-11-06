import React from 'react';
import './Testimonials.css';
import { Quote } from 'lucide-react';
 import queen from '../../assets/images/queen.png';

function Testimonials() {
  return (
    <section className="testimonials-section py-5">
      <div className="container">
        <div className="card testimonial-card p-4">
          <div className="d-flex align-items-center mb-3">
            <div className="testimonial-quote-wrapper">
              <Quote color="#A889D4" size={28} />
            </div>
            <h5 className="mb-0 ms-3 fw-semibold">Testimonials</h5>
          </div>
          <p className="testimonial-text mb-4">
            In a fast growing and ever-changing city like Bangalore, it sometimes becomes very difficult to connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
          </p>
          <div className="d-flex align-items-center mt-2 testimonial-footer">
            <div className="audio-bar flex-grow-1 d-flex align-items-center p-2 me-4">
              <button className="audio-play-btn"><span>&#9658;</span></button>
              <div className="audio-line mx-3"></div>
              <span className="audio-time">0:00</span>
              <img className="testimonial-audio-avatar ms-3" src={queen} alt="Shubha Nagarajan" />
            </div>
            <img src={queen} alt="Shubha Nagarajan" className="testimonial-avatar-img ms-2" />
            <div className="ms-3">
              <div className="testimonial-name">Shubha Nagarajan</div>
              <div className="testimonial-role">Classical Dancer</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
