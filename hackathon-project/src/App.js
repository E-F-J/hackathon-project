import './App.css';
import Header from './components/Layout/Header/Header';
import banner from './assets/banner.png'


function App() {
  return (
    <>
      <Header />
      <img className="landing-page-img" src={banner} alt="landing page banner"/>
    </>
  );
}

export default App;