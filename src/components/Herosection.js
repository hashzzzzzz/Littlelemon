import './Herosection.css';
import foto from "../assets/restauranfood.jpg";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Herosection = () => {
  const navigate = useNavigate(); // Initialize navigate

  // Function to handle button click
  const handleReserveClick = () => {
    navigate('/booking'); // Navigate to the booking page
  };

  return (
    <div className="box">
      <div className='left'>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned <br />Mediterranean restaurant,  <br /> focused on traditional  <br />rescipes and served with modern  <br />twist.</p>
        <button className='btn' onClick={handleReserveClick}>Reserve a Table</button> {/* Attach onClick */}
      </div>
      <div className='foto'>
        <img src={foto} alt="Restaurant Food" />
      </div>
    </div>
  );
};

export default Herosection;
