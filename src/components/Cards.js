import salada from '../assets/greek salad.jpg';
import dessert from '../assets/lemon dessert.jpg'
import burscheta from '../assets/bruchetta1.svg'
import './Cards.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Cards = () => {
    return (
        <div className='all'>
        <div className='Cards'>
            <div className='Carda'>
                <img className='saladfoto' src={salada} alt='Greek Salad' />
                <div className='backgroundi'>
                    <div className='text-section'>
                        <div className='titleprice'>
                            <h2 className='title'>Greek Salad</h2>
                            <h2 className='price'>$12.90</h2>
                        </div>
                        <p className='paragrafi'>
                        Greek salad is a fresh, vibrant mix of tomatoes, cucumbers, onions, olives, and feta cheese, dressed with olive oil, oregano, and sometimes green peppers. It's a healthy and flavorful dish that 
                        is perfect for any occasion, offering a refreshing 
                        and satisfying.
                        </p>
                    </div>
                    <div className='spacer'></div>
                    <h2 className='order-delivery'>Order Delivery <i className="fas fa-bicycle"></i> </h2>
                </div>
            </div>

            <div className='Carda'>
                <img className='saladfoto' src={burscheta} alt='Greek Salad' />
                <div className='backgroundi'>
                    <div className='text-section'>
                        <div className='titleprice'>
                            <h2 className='title'>Bruchetta    </h2>
                            <h2 className='price'>$5.99</h2>
                        </div>
                        <p className='paragrafi'>
                        Bruschetta is a delicious Italian appetizer made with toasted bread topped with fresh tomatoes, garlic, basil, and olive oil. It's a simple, flavorful dish that is perfect as a starter, snack, or light meal for any occasion.
                        </p>
                    </div>
                    <div className='spacer'></div>
                    <h2 className='order-delivery'>Order Delivery <i className="fas fa-bicycle"></i> </h2>
                </div>
            </div>

            <div className='Carda'>
                <img className='saladfoto' src={dessert} alt='Greek Salad' />
                <div className='backgroundi'>
                    <div className='text-section'>
                        <div className='titleprice'>
                            <h2 className='title'>Lemon Dessert</h2>
                            <h2 className='price'>$5.00</h2>
                        </div>
                        <p className='paragrafi'>
                        Lemon dessert is a refreshing treat made with tangy lemon zest, sweetened cream, and a buttery crust. Its light and creamy texture makes it a perfect end to any meal, offering a burst of citrusy freshness that's both sweet and tart.
                        </p>
                    </div>
                    <div className='spacer'></div>
                    <h2 className='order-delivery'>Order Delivery <i className="fas fa-bicycle"></i> </h2>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Cards;
