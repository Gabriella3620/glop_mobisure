import axios from 'axios';

const API_URL = 'http://localhost:8080/bikes';

const BikeService = {
  getAllBikes: () => {
    return axios.get(API_URL);
  },
  addBike: (car) => {
    return axios.post(API_URL, car);
  },
  deleteBike: (id) => {
    return axios.delete(`${API_URL}/${id}`);
  },
  updateBike: (id, car) => {
    return axios.put(`${API_URL}/${id}`, car);
  },
  getBikeById: (id) => {
    return axios.get(`${API_URL}/${id}`);
  },
};

export default BikeService;