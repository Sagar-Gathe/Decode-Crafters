import React from 'react';
import logo from '../asset/Logos/eagle.png';


import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";


import Typography from "@mui/material/Typography"


const footerData = {
  brand: {
    name: "Decode Crafters",
    image: logo,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/CreativeTim/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/creativetim",
    },
    {
      icon: <GitHubIcon />,
      link: "https://github.com/sagar-gathe",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
    },
  ],
  menus: [
    {
      name: "Company",
      items: [
        { name: "About Us", href: "https://www.creative-tim.com/presentation" },
        { name: "Freebies", href: "https://www.creative-tim.com/templates/free" },
        { name: "Premium Tools", href: "https://www.creative-tim.com/templates/premium" },
        { name: "Blog", href: "https://www.creative-tim.com/blog" },
      ],
    },
    {
      name: "Resources",
      items: [
        { name: "Illustrations", href: "https://iradesign.io/" },
        { name: "Bits & Snippets", href: "https://www.creative-tim.com/bits" },
        { name: "Affiliate Program", href: "https://www.creative-tim.com/affiliates/new" },
      ],
    },
    {
      name: "Help & Support",
      items: [
        { name: "Contact Us", href: "https://www.creative-tim.com/contact-us" },
        { name: "Knowledge Center", href: "https://www.creative-tim.com/knowledge-center" },
        { name: "Custom Development", href: "https://services.creative-tim.com/" },
        { name: "Sponsorships", href: "https://www.creative-tim.com/sponsorships" },
      ],
    },
    {
      name: "Legal",
      items: [
        { name: "Terms & Conditions", href: "https://www.creative-tim.com/terms" },
        { name: "Privacy Policy", href: "https://www.creative-tim.com/privacy" },
        { name: "Licenses (EULA)", href: "https://www.creative-tim.com/license" },
      ],
    },
  ],
  copyright: (
    <Typography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {new Date().getFullYear()} Decode Crafters by Eagle Team.
    </Typography>
  ),
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Main Logo" className="footer-logo-img" />
          <h6>{footerData.brand.name}</h6>
        </div>

        {footerData.menus.map((menu, index) => (
          <div className="footer-section" key={index}>
            <h3>{menu.name}</h3>
            <ul>
              {menu.items.map((item, idx) => (
                <li key={idx}>
                  <a href={item.href}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="footer-section socials">
          <h3>Follow Us</h3>
          <div className="social-icons">
            {footerData.socials.map((social, index) => (
              <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        {footerData.copyright}
      </div>
    </footer>
  );
}

export default Footer;
