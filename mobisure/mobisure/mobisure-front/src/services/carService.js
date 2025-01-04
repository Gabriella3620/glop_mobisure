import axios from 'axios';

const API_URL = 'http://localhost:8080/cars';

const carService = {
  getAllCars: () => {
    return axios.get(API_URL);
  },
  addCar: (car) => {
    return axios.post(API_URL, car);
  },
  deleteCar: (id) => {
    return axios.delete(`${API_URL}/${id}`);
  },
  updateCar: (id, car) => {
    return axios.put(`${API_URL}/${id}`, car);
  },
  getCarById: (id) => {
    return axios.get(`${API_URL}/${id}`);
  },
};

export default carService;