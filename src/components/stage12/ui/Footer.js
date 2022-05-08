import logo from "../assets/logo.svg";
import twitter from "../assets/twitter.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import backToTop from "../assets/backToTop.svg";
import { Link } from "react-router-dom";

const Footer = () => {

  const backtotop = (section) => {
    document.getElementById(section)?.scrollIntoView({
      behavior: 'smooth',
    });
  }

  return (
    <footer>
      <img src={logo} alt={logo} />
      <div className="footer">
        <div className="footer-links">
          <h2>Links</h2>
          <div>
          <Link onClick={() => backtotop('nav')} to="/"> Home </Link>
          <Link onClick={() => backtotop('nav')} to="/about"> About Us </Link>
          <Link onClick={() => backtotop('nav')} to="/contact"> Contact Us </Link>
          </div>
          <img id="top" onClick={() => backtotop('nav')} src={backToTop} alt={backToTop} />
        </div>
        <div className="footer-contact">
          <h2>Contact Us</h2>
          <p>+234 123 456 7890</p>
          <p>reactuarant@gmail.com</p>
          <div className="footer-socials">
            <img src={twitter} alt={twitter} />
            <img src={facebook} alt={facebook} />
            <img src={instagram} alt={instagram} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
