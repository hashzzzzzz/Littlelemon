import React from 'react';
import BookingForm from './BookingForm';
import './BookingPage.css'; // Import the new CSS

function BookingPage() {
  return (
    <div className="booking-page">
      <div className="booking-header">
        <h2>Reserve a Table</h2>
        <p>Fill out the form below to book your table at Little Lemon!</p>
      </div>

      <div className="booking-section">
        <div className="booking-info">
          <h3>Our Location</h3>
          <p>📍 Main Street 123, Lemon City</p>
          <p>📞 +383 49 123 456</p>
          <p>🕒 Open: Mon–Sun 12:00–23:00</p>
          
          {/* Added Google Map inside the booking-info section */}
          <div className="map-container">
            <iframe
              title="Little Lemon Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.2420575917714!2d-73.99107648454728!3d40.732013179328364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259ae4b4bc573%3A0x49506b6c8d39a602!2sMain%20Street%20123%2C%20Lemon%20City!5e0!3m2!1sen!2sus!4v1639394303411!5m2!1sen!2sus"
              width="100%"
              height="200"
              style={{ border: '0', borderRadius: '8px' }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="booking-form-area">
          <BookingForm />
        </div>
      </div>
    </div>
  );
}

export default BookingPage;
