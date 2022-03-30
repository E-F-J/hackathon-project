import './App.css';
import Header from './components/Layout/Header/Header';
import UntitledDesign from './assets/UntitledDesign.png'


function App() {
  return (
    <>
      <Header />
      <img className="anding-page-imgo" src={UntitledDesign} alt="landing page banner"/>
    </>
  );
}

export default App;