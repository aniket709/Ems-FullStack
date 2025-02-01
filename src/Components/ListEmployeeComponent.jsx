import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Import useNavigate
import { getEmployees, deleteEmployee } from '../Service/EmployeeService';
import './ListEmployeeComponent.css';

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();  // Initialize navigate hook

  // Fetch the employees data when the component mounts
  useEffect(() => {
    getEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error("Error fetching employees:", error);
      });
  }, []);

  const handleDelete = (id) => {
    if (id) {
      deleteEmployee(id)
        .then(() => {
          // Remove the deleted employee from the state
          setEmployees(employees.filter(employee => employee.id !== id));
          
          // Redirect to the employee list page (or anywhere you want)
          navigate('/');  // Redirect to the home page or list page
        })
        .catch((error) => {
          console.error('Error deleting employee:', error);
        });
    } else {
      console.error("Invalid employee ID:", id);
    }
  };

  return (
    <div className="employee-list-container">
      <h2 className="title">List of Employees</h2>
      <Link to="/add-employee">
        <button className="btn-add">Add Employee</button>
      </Link>
      <table className="employee-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.first_name}</td>
              <td>{employee.last_name}</td>
              <td>{employee.email}</td>
              <td>
                <Link to={`/edit-employee/${employee.id}`}>
                  <button className="edit-button">Edit</button>
                </Link>
                <button className="delete-button" onClick={() => handleDelete(employee.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
