import React from "react";
import logoWomenHealthTwo from '../../../assets/logoWomenHealthTwo.png'

function Header() {
      return(
        <div className="headerBanner">
          <img className="logo" src={logoWomenHealthTwo} alt="logoWomenHealth"/>          <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/presentation">Presentation</a></li>
              <li><a href="/take-action">Take Action</a></li>
              <li><a href="/social-contents">Social Contents</a></li>
          </ul>
        </div>
      );
  }

export default Header;