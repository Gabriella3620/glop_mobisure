import axios from 'axios';

const API_URL = 'http://localhost:8080/students';

const studentService = {
  getAllStudents: () => {
    return axios.get(API_URL);
  },
  addStudent: (student) => {
    return axios.post(API_URL, student);
  },
  deleteStudent: (id) => {
    return axios.delete(`${API_URL}/${id}`);
  },
  updateStudent: (id, student) => {
    return axios.put(`${API_URL}/${id}`, student);
  },
  getStudentById: (id) => {
    return axios.get(`${API_URL}/${id}`);
  },
};

export default studentService;
