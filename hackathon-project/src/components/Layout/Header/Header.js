import React from "react";
import logoWomenHealth from '../../../assets/logoWomenHealth.png'

// class Header extends React.Component {
//   render() {
//     return(
//       <header className="headerBanner">
//         <img className="logo" src={logoWomenHealth} alt="logoWomenHealth"/>
        
//       </header>
//     );
//   }
// }
// export default Header;

function Header() {
      return(
        <div className="headerBanner">
          <img className="logo" src={logoWomenHealth} alt="logoWomenHealth"/>          <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/presentation">Presentation</a></li>
              <li><a href="/take-action">Take Action</a></li>
              <li><a href="/social-contents">Social Contents</a></li>
          </ul>
        </div>
      );
  }

export default Header;