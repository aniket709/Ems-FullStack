import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createEmployee, getEmployee, updateEmployee } from '../Service/EmployeeService';
import './EmployeeComponent.css';

const EmployeeComponent = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();
  const { id } = useParams(); // Get the ID from the URL

  // Load employee data if we're editing an existing one
  useEffect(() => {
    if (id) {
      getEmployee(id).then((response) => {
        setFirstName(response.data.first_name);
        setLastName(response.data.last_name);
        setEmail(response.data.email);
        console.log('Loaded employee:', response.data);  // Debugging line
      });
    }
  }, [id]);

  const saveEmployee = (e) => {
    e.preventDefault();

    const employee = { first_name: firstName, last_name: lastName, email };

    if (id) {
      // Update employee if ID is present
      updateEmployee(id, employee)
        .then((response) => {
          console.log("Employee updated successfully:", response.data);
          navigate('/employee');
        })
        .catch((error) => {
          console.error("Error updating employee:", error);
        });
    } else {
      // Create new employee if no ID
      createEmployee(employee)
        .then((response) => {
          console.log("Employee added successfully:", response.data);
          navigate('/employee');
        })
        .catch((error) => {
          console.error("Error creating employee:", error);
        });
    }
  };

  return (
    <div className="employee-container">
      <div className="employee-card">
        <h2 className="header-center">{id ? 'Update Employee' : 'Add Employee'}</h2>
        <form onSubmit={saveEmployee}>
          <div className="form-group">
            <label className="form-label">First Name</label>
            <input
              type="text"
              placeholder="Enter Employee First Name"
              name="firstName"
              value={firstName}
              className="form-control"
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              placeholder="Enter Employee Last Name"
              name="lastName"
              value={lastName}
              className="form-control"
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              placeholder="Enter Employee Email"
              name="email"
              value={email}
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn-save">
            {id ? 'Update Employee' : 'Save Employee'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmployeeComponent;
