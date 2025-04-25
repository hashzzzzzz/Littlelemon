import './App.css';
import { Routes, Route } from 'react-router-dom';
import Herosection from './components/Herosection';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Cards from './components/Cards';
import Testimonial from './components/Testimonial';
import Aboutus from './components/Aboutus';
import Footer from './components/Footer';
import BookingPage from './components/BookingPage'; 
import ConfirmedBooking from './components/ConfirmedBooking';

function Home() {
  return (
    <>
      <Herosection />
      <div id="menu">
        <Menu />
      </div>
      <div id="cards">
        <Cards />
      </div>
      <div id="testimonial">
        <Testimonial />
      </div>
      <div id="about">
        <Aboutus />
      </div>
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<BookingPage />} /> 
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </div>
  );
}

export default App;
