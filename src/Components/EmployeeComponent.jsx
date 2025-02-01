// EmployeeComponent.jsx
import React, { useState, useEffect } from 'react';
import { createEmployee, updateEmployee, getEmployeeById } from '../Service/EmployeeService'; // Check this import

const EmployeeComponent = (props) => {
  const [employee, setEmployee] = useState({ first_name: '', last_name: '', email: '' });
  const { id } = props.match.params;

  useEffect(() => {
    if (id) {
      getEmployeeById(id)
        .then(response => {
          setEmployee(response.data);
        })
        .catch(error => {
          console.error('Error fetching employee:', error);
        });
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      updateEmployee(id, employee)
        .then(response => {
          console.log('Employee updated successfully', response);
        })
        .catch(error => {
          console.error('Error updating employee:', error);
        });
    } else {
      createEmployee(employee)
        .then(response => {
          console.log('Employee added successfully', response);
        })
        .catch(error => {
          console.error('Error adding employee:', error);
        });
    }
  };

  return (
    <div>
      <h2>{id ? 'Edit Employee' : 'Add Employee'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={employee.first_name}
          onChange={(e) => setEmployee({ ...employee, first_name: e.target.value })}
          placeholder="First Name"
        />
        <input
          type="text"
          value={employee.last_name}
          onChange={(e) => setEmployee({ ...employee, last_name: e.target.value })}
          placeholder="Last Name"
        />
        <input
          type="email"
          value={employee.email}
          onChange={(e) => setEmployee({ ...employee, email: e.target.value })}
          placeholder="Email"
        />
        <button type="submit">{id ? 'Update' : 'Add'} Employee</button>
      </form>
    </div>
  );
};

export default EmployeeComponent;
