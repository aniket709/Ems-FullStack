// src/components/AddEmployeeComponent.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addEmployee } from '../Service/EmployeeService';  // Make sure this import is correct
import './AddEmployeeComponent.css';

const AddEmployeeComponent = () => {
  const [employee, setEmployee] = useState({
    first_name: '',
    last_name: '',
    email: ''
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployee({
      ...employee,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(employee)
      .then(() => {
        navigate('/');  // Redirect to the list page
      })
      .catch((error) => {
        console.error("Error adding employee:", error);
      });
  };

  return (
    <div className="add-employee-container">
      <h2 className="form-title">Add New Employee</h2>
      <form onSubmit={handleSubmit} className="employee-form">
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="first_name"
            value={employee.first_name}
            onChange={handleInputChange}
            required
            placeholder="Enter first name"
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="last_name"
            value={employee.last_name}
            onChange={handleInputChange}
            required
            placeholder="Enter last name"
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={employee.email}
            onChange={handleInputChange}
            required
            placeholder="Enter email"
          />
        </div>
        <button type="submit" className="submit-btn">Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployeeComponent;
