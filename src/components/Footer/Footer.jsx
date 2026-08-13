import React from "react";
import "./Footer.css";
import youtubeIcon from "../../assets/greatstack/youtube_icon.png";
import twitterIcon from "../../assets/greatstack/twitter_icon.png";
import instagramIcon from "../../assets/greatstack/instagram_icon.png";
import facebookIcon from "../../assets/greatstack/facebook_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerIcons">
        <img src={facebookIcon} alt="" />
        <img src={instagramIcon} alt="" />
        <img src={twitterIcon} alt="" />
        <img src={youtubeIcon} alt="" />
      </div>

      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Coorperate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className="copyright">© 1997-2026 Netflix, Inc.</p>
    </div>
  );
};

export default Footer;
