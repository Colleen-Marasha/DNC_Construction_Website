import React, { useState } from 'react';

const Footer = ({ logoSrc, companyName }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      console.log("Newsletter signup:", email);
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 5000); // auto hide message
    }
  };

  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container">
        {/* Newsletter Signup */}
        <div className="text-center mb-4">
          <h5 className="text-warning fw-bold mb-3">Subscribe to our Newsletter</h5>
          <form
            className="position-relative mx-auto"
            style={{ maxWidth: '400px' }}
            onSubmit={handleNewsletterSubmit}
          >
            <input
              type="email"
              className="form-control rounded-pill pe-5 text-center"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="position-absolute end-0 top-50 translate-middle-y me-3 border-0 bg-transparent text-dark"
              style={{ outline: 'none' }}
            >
              <i className="fas fa-arrow-right"></i>
            </button>
          </form>
          {submitted && (
            <div className="text-success mt-2">
              <i className="fas fa-check-circle me-2"></i> Thanks for subscribing
            </div>
          )}
        </div>

        <hr className="border-light" />

        {/* Bottom Row */}
        <div className="row align-items-center">
          {/* Left: Company Info */}
          <div className="col-md-4 text-md-start mb-3 mb-md-0">
            <h5>{companyName}</h5>
            <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>

         {/* Center: Social Icons */}
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="social-icons d-flex justify-content-center gap-3">
              <a href="https://www.facebook.com/profile.php?id=61575283086261" style={{ color: '#1877F2' }}> {/* Facebook Blue */}
                <i className="fab fa-facebook-f fa-lg"></i>
              </a>
              <a href="#" style={{ color: '#1DA1F2' }}> {/* Twitter Blue */}
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="#" style={{ color: '#0077B5' }}> {/* LinkedIn Blue */}
                <i className="fab fa-linkedin-in fa-lg"></i>
              </a>
              <a href="#" style={{ color: '#E1306C' }}> {/* Instagram Pink */}
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a href="https://wa.me/c/263782135436" style={{ color: '#25D366' }}> {/* WhatsApp Green */}
                <i className="fab fa-whatsapp fa-lg"></i>
              </a>
            </div>
          </div>


          {/* Right: Logo */}
          <div className="col-md-4 d-flex justify-content-end">
            <img src={logoSrc} alt={`${companyName} Logo`} style={{ height: '60px' }} />
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
