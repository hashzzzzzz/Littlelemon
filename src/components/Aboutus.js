import './Aboutus.css';
import img1 from '../assets/Mario and Adrian A.jpg';
import img2 from '../assets/Mario and Adrian b.jpg';

const Aboutus = () => {
  return (
    <div className="aboutus-container"> 
      <div className="text-container">
        <h2>About Little Lemon</h2>
        <p>
        Little Lemon is more than just a restaurant — it’s a destination where culinary excellence meets comfort and tradition. Our mission is to provide a dining experience that excites the senses and leaves a lasting impression on each guest. We take pride in offering a diverse menu filled with dishes that blend classic flavors with modern twists. Our chefs use only the freshest, locally sourced ingredients to create meals that cater to every palate. From light, healthy options to rich, indulgent meals, we have something for every craving. Whether you're looking for a quick bite or a leisurely meal with loved ones, Little Lemon is the perfect spot. Our warm, inviting atmosphere ensures that every meal is an experience to remember, where food, family, and friends come together. Whether it’s for a casual lunch or a special evening, we promise you'll leave feeling satisfied and eager to return.


        </p>
      </div>
      <div className="image-container">
        <img src={img1} alt="Mario and Adrian A" />
        <img src={img2} alt="Mario and Adrian B" className="second-img" />
      </div>
    </div>
  );
}

export default Aboutus;
