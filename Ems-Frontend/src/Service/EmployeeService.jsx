import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/employee';

export const listEmployee = () => axios.get(REST_API_BASE_URL);

export const createEmployee = (employee) => axios.post(REST_API_BASE_URL, employee);

export const updateEmployee = (id, employee) => {
    return axios.put(`${REST_API_BASE_URL}/${id}`, employee);  // Corrected API URL
};
