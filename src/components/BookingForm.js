import React, { useState, useEffect } from 'react';
import './BookingForm.css';

// Function to fetch available times from the API
const fetchAPI = async (date) => {
    try {
      // Replace this with your real API URL for fetching available time slots
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      const data = await response.json();
      console.log('Available Times:', data); // Log response for debugging

      // Generate times every 2 hours instead of 5 minutes
      return data.slice(0, 5).map((item, index) => {
        const hour = 12 + (index * 2); // Start at 12 PM, increment by 2 hours each
        return {
          id: item.id,
          time: `${hour}:00`, // Format time every 2 hours
        };
      });
    } catch (error) {
      console.error('Error fetching available times:', error);
      return []; // Return empty array on error
    }
};

// Fetch available times based on the selected date
const fetchAvailableTimes = async (date) => {
  try {
    const availableTimes = await fetchAPI(date);
    return availableTimes.map(item => `${item.time} PM`); // Map data to a human-readable time format
  } catch (error) {
    console.error('Error fetching available times:', error);
    return [];
  }
};

function BookingForm({ submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('');
  const [availableTimes, setAvailableTimes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({}); // Track validation errors

  // Fetch available times whenever the date changes
  useEffect(() => {
    if (date) {
      setLoading(true);
      fetchAvailableTimes(date).then((times) => {
        setAvailableTimes(times);
        setLoading(false);
      });
    }
  }, [date]);

  // Form validation function
  const validateForm = () => {
    const newErrors = {};

    // Date validation: Ensure the date is not in the past
    const today = new Date().toISOString().split('T')[0];
    if (date && date < today) {
      newErrors.date = 'Date cannot be in the past';
    }

    // Time validation: Ensure time is selected
    if (!time) {
      newErrors.time = 'Please select a time';
    }

    // Guests validation: Ensure guests number is valid
    if (guests < 1 || guests > 10) {
      newErrors.guests = 'Number of guests must be between 1 and 10';
    }

    // Occasion validation: Ensure occasion is selected
    if (!occasion) {
      newErrors.occasion = 'Please select an occasion';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Create the form data object
    const formData = {
      date,
      time,
      guests,
      occasion,
    };

    // Call the submitForm function passed as a prop
    submitForm(formData);
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      {errors.date && <p className="error">{errors.date}</p>}

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      >
        <option value="">Select a time</option>
        {loading ? (
          <option value="">Loading available times...</option>
        ) : (
          availableTimes.length > 0 ? (
            availableTimes.map((t, index) => (
              <option key={index} value={t}>
                {t}
              </option>
            ))
          ) : (
            <option value="">No available times</option>
          )
        )}
      </select>
      {errors.time && <p className="error">{errors.time}</p>}

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        required
      />
      {errors.guests && <p className="error">{errors.guests}</p>}

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
      >
        <option value="">Select</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      {errors.occasion && <p className="error">{errors.occasion}</p>}

      <button type="submit" className="submit-button">
        Make Reservation
      </button>
    </form>
  );
}

export default BookingForm;
