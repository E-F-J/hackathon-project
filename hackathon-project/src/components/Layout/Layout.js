import React from "react"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import  { HashRouter, Routes, Route} from "react-router-dom";
import Presentation from '../Presentation/Presentation'
import TakeAction from '../TakeAction/TakeAction'
import SocialContents from '../SocialContents/SocialContents'

class Layout extends React.Component {
  render(){
    return (
      <>
      <div>
        <Header />
        <main>{this.props.children}</main>
        <Footer />
        <HashRouter>
            <div className="content">
                
                <Routes>
                    <Route path="/" element={Layout}/>
                    <Route path="/presentation" element={Presentation}/>
                    <Route path="/take-action" element={TakeAction}/>
                    <Route path="/social-contents" element={SocialContents}/>
                </Routes>
            </div>
        </HashRouter>
      </div>
      </>
    )
  }
}
export default Layout;