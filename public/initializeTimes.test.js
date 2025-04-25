// initializeTimes.test.js
import { initializeTimes } from './path-to-your-functions'; // Import the function
import { fetchAPI } from './path-to-fetchAPI'; // Import the mock API

// Mock the fetchAPI function to simulate API responses
jest.mock('./path-to-fetchAPI'); // Mocking the fetchAPI function

describe('initializeTimes', () => {
  it('should return available times when the API call is successful', async () => {
    // Mock the response of fetchAPI
    const mockTimes = ['12:00', '14:00', '16:00'];
    fetchAPI.mockResolvedValue(mockTimes); // Resolve with mock times

    // Call the function to test
    const times = await initializeTimes('2025-04-20');

    // Assert that the times returned are the mock times
    expect(times).toEqual(mockTimes);
  });

  it('should return an empty array when the API call fails', async () => {
    // Mock the response of fetchAPI to simulate an error
    fetchAPI.mockRejectedValue(new Error('API error')); // Reject with an error

    // Call the function to test
    const times = await initializeTimes('2025-04-20');

    // Assert that the result is an empty array
    expect(times).toEqual([]);
  });
});
