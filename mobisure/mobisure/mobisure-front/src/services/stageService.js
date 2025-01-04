import axios from 'axios';

const API_URL = 'http://localhost:8080/stages';

const stageService = {
  getAllStages: () => {
    return axios.get(API_URL);
  },
  getStageById: (id) => {
    return axios.get(`${API_URL}/${id}`);
  },
  addStage: (stage) => {
    return axios.post(API_URL, stage);
  },
  updateStage: (id, stage) => {
    return axios.put(`${API_URL}/${id}`, stage);
  },
  deleteStage: (id) => {
    return axios.delete(`${API_URL}/${id}`);
  },
};

export default stageService;