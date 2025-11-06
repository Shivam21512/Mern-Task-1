import React from 'react';
import './Footer.css';
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Globe
} from 'lucide-react';




function Footer() {
  return (
    <footer className="footer-main-section">
      <div className="container pt-4">
        <div className="row footer-link-row">
          <div className="col-lg-3 col-6 mb-3">
            <div className="footer-col-title">Hobbycue</div>
            <ul>
              <li><a href="/">About Us</a></li>
              <li><a href="/">Our Services</a></li>
              <li><a href="/">Work with Us</a></li>
              <li><a href="/">FAQ</a></li>
              <li><a href="/">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-6 mb-3">
            <div className="footer-col-title">How Do I</div>
            <ul>
              <li><a href="/">Sign Up</a></li>
              <li><a href="/">Add a Listing</a></li>
              <li><a href="/">Claim Listing</a></li>
              <li><a href="/">Post a Query</a></li>
              <li><a href="/">Add a Blog Post</a></li>
              <li><a href="/">Other Queries</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-6 mb-3">
            <div className="footer-col-title">Quick Links</div>
            <ul>
              <li><a href="/">Listings</a></li>
              <li><a href="/">Blog Posts</a></li>
              <li><a href="/">Shop / Store</a></li>
              <li><a href="/">Community</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-12 mb-3">
            <div className="footer-col-title">Social Media</div>
            <div className="footer-social-icons mb-3">
              <a href="/" aria-label="Facebook"><Facebook size={22} /></a>
              <a href="/" aria-label="Twitter"><Twitter size={22} /></a>
              <a href="/" aria-label="instagram"><Instagram size={22} /></a>
              <a href="/" aria-label="globe"><Globe size={22} /></a>
              <a href="/" aria-label="youtube"><Youtube size={22} /></a>
              <a href="/" aria-label="mail"><Mail size={22} /></a>
            </div>
            <div className="footer-invite-title mb-1">Invite Friends</div>
            <div className="footer-invite-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email ID"
                aria-label="Invite Friends Email"
              />
              <button className="btn btn-invite" type="button">Invite</button>
            </div>
          </div>
        </div>
        <div className="footer-bottom text-center py-3 mt-2">
            &copy; Purple Cues Private Limited
        </div>
      </div>
    </footer>
  );
}

export default Footer;
