import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import BookingForm from './BookingForm';

// Mock the submitForm function
const mockSubmitForm = jest.fn();

describe('BookingForm', () => {
  beforeEach(() => {
    render(<BookingForm submitForm={mockSubmitForm} />);
  });

  test('should display an error message if date is in the past', () => {
    const pastDate = '2023-01-01';
    const dateInput = screen.getByLabelText(/choose date/i);
    
    // Set the date to a past date
    fireEvent.change(dateInput, { target: { value: pastDate } });

    // Submit the form
    fireEvent.submit(screen.getByRole('button'));

    // Check for the validation error
    expect(screen.getByText(/date cannot be in the past/i)).toBeInTheDocument();
  });

  test('should display an error message if no time is selected', () => {
    const timeSelect = screen.getByLabelText(/choose time/i);
    
    // Leave the time unselected and submit the form
    fireEvent.submit(screen.getByRole('button'));
    
    // Check for the validation error
    expect(screen.getByText(/please select a time/i)).toBeInTheDocument();
  });

  test('should display an error message if guests number is invalid', () => {
    const guestsInput = screen.getByLabelText(/number of guests/i);

    // Set an invalid number of guests (e.g., 0)
    fireEvent.change(guestsInput, { target: { value: '0' } });

    // Submit the form
    fireEvent.submit(screen.getByRole('button'));

    // Check for the validation error
    expect(screen.getByText(/number of guests must be between 1 and 10/i)).toBeInTheDocument();
  });

  test('should display an error message if occasion is not selected', () => {
    const occasionSelect = screen.getByLabelText(/occasion/i);

    // Leave the occasion unselected and submit the form
    fireEvent.submit(screen.getByRole('button'));
    
    // Check for the validation error
    expect(screen.getByText(/please select an occasion/i)).toBeInTheDocument();
  });

  test('should call submitForm with correct data if form is valid', async () => {
    const validDate = '2025-12-25';
    const validTime = '12:00 PM';
    const validGuests = '5';
    const validOccasion = 'Birthday';

    // Set all form fields to valid values
    fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: validDate } });
    fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: validTime } });
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: validGuests } });
    fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: validOccasion } });

    // Submit the form
    fireEvent.submit(screen.getByRole('button'));

    // Wait for the mock submitForm to be called and check if the data is correct
    await waitFor(() => expect(mockSubmitForm).toHaveBeenCalledWith({
      date: validDate,
      time: validTime,
      guests: validGuests,
      occasion: validOccasion,
    }));
  });

  test('should show available times when date is selected', async () => {
    const mockTimes = ['12:00 PM', '2:00 PM', '4:00 PM'];
    
    // Mock the fetchAPI function to return predefined times
    jest.mock('./BookingForm', () => ({
      fetchAPI: jest.fn().mockResolvedValue(mockTimes),
    }));

    const dateInput = screen.getByLabelText(/choose date/i);
    
    // Set a valid date
    fireEvent.change(dateInput, { target: { value: '2025-12-25' } });

    // Wait for the available times to appear in the dropdown
    await waitFor(() => expect(screen.getByText(/12:00 PM/i)).toBeInTheDocument());
    expect(screen.getByText(/2:00 PM/i)).toBeInTheDocument();
    expect(screen.getByText(/4:00 PM/i)).toBeInTheDocument();
  });
});
