import axios from 'axios';

const BASE_URL = "http://localhost:8008/api/v1";

export const getEvents = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/events`);
    return response.data;
  } catch (error) {
    console.error('Error getting events:', error);
    throw error;
  }
};




export const registerWorkshop = async (registrationData) => {
    try {
      const response = await axios.post(`${BASE_URL}/workshops/`, registrationData);
      return response.data;
    } catch (error) {
      console.error("Error registering user:", error.response?.data || error.message);
      throw error;
    }
  };

  export const getWorkshop = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/workshops`);
      return response.data;
    } catch (error) {
      console.error('Error getting events:', error);
      throw error;
    }
  };