import React from 'react';
import { useNavigate } from 'react-router-dom';
import fbIcon from '../../assets/socialnetworkicons/facebook.svg';
import inIcon from '../../assets/socialnetworkicons/instagram.svg';
import './style.footer.css'

const Footer = () => {
  const navigate = useNavigate();

  const handleEmailClick = () => {
    window.location.href = 'mailto:kudcajavec@gmail.com';
  };

  return (
    <div className="footer_main">
      <div className="footer_sub">
        <div className="footer_content footer_left">
          <h3>Контакт</h3>
          <ul className="footerlist">
            <li>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=44.764885141813%2C17.189412564039"
                target="_blank"
                rel="noopener noreferrer"
              >
                Цара Лазара бр. 1
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=44.764885141813%2C17.189412564039"
                target="_blank"
                rel="noopener noreferrer"
              >
                78000 Бања Лука
              </a>
            </li>
            <li>
              <a href="tel:+38766938114">066 938 114</a>
            </li>
            <li>
              <button onClick={handleEmailClick} className="email-link">
                kudcajavec@gmail.com
              </button>
            </li>
          </ul>
        </div>

        <div className="footer_content footer_center">
          <h3>Корисни линкови</h3>
          <ul className="footerlist">
            <li><a onClick={() => navigate('/')}>Почетна</a></li>
            <li><a onClick={() => navigate('/works')}>Секције</a></li>
            <li><a onClick={() => navigate('/gallery')}>Галерија</a></li>
            <li><a onClick={() => navigate('/contact')}>Контакт</a></li>
          </ul>
        </div>

        <div className="footer_content footer_right">
          <h3>Друштвене мреже</h3>
          <ul className="footerlist">
            <li className="social_network">
              <img className="list_img" src={fbIcon} alt="Facebook" />
              <a
                href="https://www.facebook.com/p/KUD-%C4%8Cajavec-Banja-Luka-100057518017051/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li className="social_network">
              <img className="list_img" src={inIcon} alt="Instagram" />
              <a
                href="https://www.instagram.com/kud_cajavec/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;