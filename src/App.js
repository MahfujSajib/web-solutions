import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Solutions from './pages/Solutions/Solutions';
import Services from './pages/Services/Services';
import Portfolio from './pages/Portfolio/Portfolio';
import Header from './pages/Header/Header';
import WebApplication from './pages/WebApplication/WebApplication';
import MobileApplication from './pages/MobileApplication/MobileApplication';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/webapp" element={<WebApplication />} />
          <Route path="/mobileapp" element={<MobileApplication />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
