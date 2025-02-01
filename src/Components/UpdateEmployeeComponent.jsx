import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getEmployee, updateEmployee } from '../Service/EmployeeService';  // Import getEmployee
import './UpdateEmployeeComponent.css';

const UpdateEmployeeComponent = () => {
  const [employee, setEmployee] = useState({
    first_name: '',
    last_name: '',
    email: ''
  });

  const { id } = useParams(); // Get the employee ID from URL params
  const navigate = useNavigate();

  // Fetch the employee data when the component mounts
  useEffect(() => {
    getEmployee(id)
      .then((response) => {
        setEmployee(response.data);  // Set the employee data in state
      })
      .catch((error) => {
        console.error("Error fetching employee:", error);
      });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployee({
      ...employee,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEmployee(id, employee)
      .then(() => {
        navigate('/');  // Redirect to the employee list page after update
      })
      .catch((error) => {
        console.error("Error updating employee:", error);
      });
  };

  return (
    <div className="update-employee-container">
      <h2 className="form-title">Update Employee</h2>
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
        <button type="submit" className="submit-btn">Update Employee</button>
      </form>
    </div>
  );
};

export default UpdateEmployeeComponent;
