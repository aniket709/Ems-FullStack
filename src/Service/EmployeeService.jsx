// src/Service/EmployeeService.js

import axios from 'axios';

// Base URL for the API
const API_URL = 'http://localhost:8080/api/employee';

// Function to get all employees
export const getEmployees = () => {
  return axios.get(API_URL);
};

// Function to get an employee by ID
export const getEmployee = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

// Function to add a new employee
export const addEmployee = (employee) => {
  return axios.post(API_URL, employee);
};

// Function to update an employee
export const updateEmployee = (id, employee) => {
  return axios.put(`${API_URL}/${id}`, employee);
};

// Function to delete an employee
export const deleteEmployee = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
