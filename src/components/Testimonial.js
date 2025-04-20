import React, { useState } from 'react';
import './Testimonial.css';

const testimonials = [
  {
    name: 'Sarah',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
    text: 'Hidden gem with fantastic Mediterranean dishes!'
  },
  {
    name: 'Arta',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    rating: 4,
    text: 'Delicious food, cozy vibes. Would recommend to everyone.'
  },
  {
    name: 'Liridon',
    image: 'https://randomuser.me/api/portraits/men/23.jpg',
    rating: 5,
    text: 'Fast delivery and fresh ingredients. Perfect lunch spot!'
  }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const next = () => setCurrentIndex((currentIndex + 1) % testimonials.length);
  const prev = () => setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);

  const { name, image, rating, text } = testimonials[currentIndex];

  return (
    <section className="testimonial-section">
      <h2 className="title">Testimonials</h2>
      <div className="testimonial-card">
        <button className="arrow" onClick={prev}>❮</button>

        <div className="testimonial-content">
          <img src={image} alt={name} className="profile-img" />
          <h3 className="name">{name}</h3>
          <div className="stars">
            {Array(rating).fill().map((_, i) => <span key={i}>⭐</span>)}
          </div>
          <p className="text"><em>{text}</em></p>
          <div className="quote">”</div>
        </div>

        <button className="arrow" onClick={next}>❯</button>
      </div>
    </section>
  );
};

export default TestimonialSlider;
