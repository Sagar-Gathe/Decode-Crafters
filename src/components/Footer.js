import React from 'react'

const Footer = () => {
  return (
    <div>
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="" alt="Main Logo" className="footer-logo-img" />
          <h2>Decode Crafters</h2>
        </div>

        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#freebies">Freebies</a></li>
            <li><a href="#premium-tools">Premium Tools</a></li>
            <li><a href="#blog">Blog</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Resources</h3>
          <ul>
            <li><a href="#illustrations">Illustrations</a></li>
            <li><a href="#bits-snippets">Bits & Snippets</a></li>
            <li><a href="#affiliate-program">Affiliate Program</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Help & Support</h3>
          <ul>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#knowledge-center">Knowledge Center</a></li>
            <li><a href="#custom-development">Custom Development</a></li>
            <li><a href="#sponsorships">Sponsorships</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li><a href="#terms-conditions">Terms & Conditions</a></li>
            <li><a href="#privacy-policy">Privacy Policy</a></li>
            <li><a href="#licenses">Licenses (EULA)</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>All rights reserved. Copyright © 2024 Decode Crafters by Eagle Team.</p>
      </div>
    </footer>  
    </div>
  )
}

export default Footer
