import React from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';

function Main() {
  const navigate = useNavigate();

  // Submit function that will handle the form submission
  const submitForm = async (formData) => {
    try {
      // Make the API call to submit the form data
      const response = await fetch('https://api.example.com/submit-booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        // Navigate to the booking confirmation page if submission is successful
        navigate('/confirmed');
      } else {
        alert('Booking failed. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="main">
      <BookingForm submitForm={submitForm} />
    </div>
  );
}

export default Main;
