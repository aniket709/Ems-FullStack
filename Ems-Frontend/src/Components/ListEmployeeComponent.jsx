import React, { useEffect, useState } from 'react'; // Combine the imports
import { listEmployee } from '../Service/EmployeeService';
import { useNavigate } from 'react-router-dom';

const ListEmployeeComponent = () => {
  const [employee, setEmployee] = useState([]); // Corrected to useState
  const navigator = useNavigate();

  useEffect(() => {
    listEmployee()
      .then(response => {
        setEmployee(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  function addNewEmployee(){
    navigator('/add-employee');
  }

  function updateEmployee(id){
    navigator(`/edit-employee/${id}`);
  }

  return (
    <div className="container">
      <h2 className="text-center">List of Employees</h2>
      <button className='btn btn-primary' onClick={addNewEmployee}> Add Employee</button>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employee.map(employee => (
            <tr key={employee.id}>
              <td>{employee.first_name}</td>
              <td>{employee.last_name}</td>
              <td>{employee.email}</td> {/* Fixed typo: 'emai' to 'email' */}
              <td>
                <button className='btn btn-info' onClick={() => updateEmployee(employee.id)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
