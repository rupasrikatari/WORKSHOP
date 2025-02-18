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
      const response = await axios.post(`${BASE_URL}/events/`, registrationData);
      return response.data;
    } catch (error) {
      console.error("Error registering user:", error.response?.data || error.message);
      throw error;
    }
  };



  // get total events
  export const getTotalEvents = async () => {
    try{
      const response = await axios.get(`${BASE_URL}/events/totalevents`);
      return response.data;
    }catch(e){
      console.error("Error getting data",e);
      throw e;

    }
  }


  // delete event

  export const deleteEvent = async (eventId) => {
    try {
      const response = await axios.delete(`${BASE_URL}/events/${eventId}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting event:", error.response?.data || error.message);
      throw error;
    }
  };

  // update event
  export const updateEvent = async (eventId, updatedData) => {
    try {
      const response = await axios.put(`${BASE_URL}/events/${eventId}`, updatedData);
      return response.data;
    } catch (error) {
      console.error("Error updating event:", error.response?.data || error.message);
      throw error;
    }
  };