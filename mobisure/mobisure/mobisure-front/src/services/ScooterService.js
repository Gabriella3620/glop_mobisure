import axios from 'axios';

const API_URL = 'http://localhost:8080/scooters';

const scooterService = {
  getAllScooters: () => {
    return axios.get(API_URL);
  },
  addScooter: (Scooter) => {
    return axios.post(API_URL, Scooter);
  },
  deleteScooter: (id) => {
    return axios.delete(`${API_URL}/${id}`);
  },
  updateScooter: (id, Scooter) => {
    return axios.put(`${API_URL}/${id}`, Scooter);
  },
  getScooterById: (id) => {
    return axios.get(`${API_URL}/${id}`);
  },
};

export default scooterService;