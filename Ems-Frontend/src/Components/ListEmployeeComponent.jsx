import React, { useEffect, useState } from 'react'; // Combine the imports
import { listEmployee } from '../Service/EmployeeService';

const ListEmployeeComponent = () => {
  const [employee, setEmployee] = useState([]); // Corrected to useState

  useEffect(() => {
    listEmployee()
      .then(response => {
        setEmployee(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="container">
      <h2 className="text-center">List of Employees</h2>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Employee first_name</th>
            <th>Employee last_name</th>
            <th>Employee Email</th>
          </tr>
        </thead>
        <tbody>
          {employee.map(employee => (
            <tr key={employee.id}>
              <td>{employee.first_name}</td>
              <td>{employee.last_name}</td>
              <td>{employee.email}</td> {/* Fixed typo: 'emai' to 'email' */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
