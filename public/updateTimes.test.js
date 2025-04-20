// updateTimes.test.js
import { updateTimes } from './path-to-your-functions'; // Import the function
import { fetchAPI } from './path-to-fetchAPI'; // Import the mock API

// Mock the fetchAPI function to simulate API responses
jest.mock('./path-to-fetchAPI'); // Mocking the fetchAPI function

describe('updateTimes', () => {
  it('should update available times when a date is selected', async () => {
    // Mock the response of fetchAPI
    const mockTimes = ['12:00', '14:00', '16:00'];
    fetchAPI.mockResolvedValue(mockTimes); // Resolve with mock times

    // Call the function to test
    const updatedTimes = await updateTimes('2025-04-20');

    // Assert that the updated times are the mock times
    expect(updatedTimes).toEqual(mockTimes);
  });

  it('should return an empty array when the API call fails during update', async () => {
    // Mock the response of fetchAPI to simulate an error
    fetchAPI.mockRejectedValue(new Error('API error')); // Reject with an error

    // Call the function to test
    const updatedTimes = await updateTimes('2025-04-20');

    // Assert that the result is an empty array
    expect(updatedTimes).toEqual([]);
  });
});
