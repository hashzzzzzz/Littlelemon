import './Herosection.css';
import foto from "..//assets/restauranfood.jpg";
const Herosection  = () =>{

    return(
        <div className="box">
            <div className='left'>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned <br />Mediterranean restaurant,  <br /> focused on traditional  <br /> rescipes and served with modern  <br />twist.</p>
            <button className='btn'>Reserve a Table</button>
            </div>
            <div className='foto'>
            <img src={foto}></img>
            </div>
</div>

    )

}
export default Herosection;