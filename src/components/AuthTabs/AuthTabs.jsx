import React, { useState } from 'react';
import './AuthTabs.css';
import { Facebook, Circle } from 'lucide-react'; 

function AuthTabs() {
  const [activeTab, setActiveTab] = useState('signin');

  return (
    <div className="auth-tabs-panel">
      <div className="auth-tabs-header">
        <button
          className={`auth-tab-btn ${activeTab === 'signin' ? 'active' : ''}`}
          onClick={() => setActiveTab('signin')}
        >Sign In</button>
        <button
          className={`auth-tab-btn ${activeTab === 'joinin' ? 'active' : ''}`}
          onClick={() => setActiveTab('joinin')}
        >Join In</button>
      </div>
      {activeTab === 'signin' ? (
        <form>
          <button className="auth-btn social-btn w-100 mb-3" type="button">
            <Circle color="#E94235" size={20} style={{marginRight: 10}} />
            Continue with Google
          </button>
          <button className="auth-btn social-btn w-100 mb-3" type="button">
            <Facebook color="#1877F3" size={20} style={{marginRight: 10}} />
            Continue with Facebook
          </button>
          <div className="divider"><span>Or connect with</span></div>
          <input className="form-control mb-2" type="email" placeholder="Email" />
          <div className="mb-2 position-relative">
            <input className="form-control" type="password" placeholder="Password" />
          </div>
          <div className="mb-3 d-flex justify-content-between align-items-center flex-wrap">
            <div>
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe" className="ms-1 small-text">Remember me</label>
            </div>
            <a href="/" className="forgot-link">Forgot password?</a>
          </div>
          <button type="submit" className="auth-btn continue-btn w-100 mt-1">Continue</button>
        </form>
      ) : (
        <form>
          <button className="auth-btn social-btn w-100 mb-3" type="button">
            <Circle color="#E94235" size={20} style={{marginRight: 10}} />
            Continue with Google
          </button>
          <button className="auth-btn social-btn w-100 mb-3" type="button">
            <Facebook color="#1877F3" size={20} style={{marginRight: 10}} />
            Continue with Facebook
          </button>
          <div className="divider"><span>Or connect with</span></div>
          <input className="form-control mb-2" type="email" placeholder="Email" />
          <input className="form-control mb-2" type="password" placeholder="Password" />
          <small className="mb-2 d-block small-text">
            By continuing, you agree to our <a href="/">Terms of Service</a> and <a href="/">Privacy Policy</a>.
          </small>
          <button type="submit" className="auth-btn continue-btn w-100 mt-1">Agree and Continue</button>
        </form>
      )}
    </div>
  );
}

export default AuthTabs;
