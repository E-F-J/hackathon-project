import React from "react";
import logoWomenHealth from '../../../assets/logoWomenHealth.png'

class Header extends React.Component {
  render() {
    return(
      <header className="headerBanner">
        <img className="logo" src={logoWomenHealth} alt="logoWomenHealth"/>
      </header>
    );
  }
}
export default Header;