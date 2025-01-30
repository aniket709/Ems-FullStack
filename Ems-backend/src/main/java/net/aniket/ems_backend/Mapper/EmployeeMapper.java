package net.aniket.ems_backend.Mapper;

import net.aniket.ems_backend.Dto.EmployeeDto;
import net.aniket.ems_backend.Entity.Employee;


public class EmployeeMapper {

    // Mapping from EmployeeDto to Employee entity
    public static Employee mapToEmployee(EmployeeDto employeeDto) {
        Employee employee = new Employee();
        employee.setFirstName(employeeDto.getFirstName());  // Ensure 'firstName' in DTO is mapped to 'firstName' in Entity
        employee.setLastName(employeeDto.getLastName());    // Ensure 'lastName' in DTO is mapped to 'lastName' in Entity
        employee.setEmail(employeeDto.getEmail());          // Ensure 'email' is mapped correctly
        return employee;
    }

    // Mapping from Employee entity to EmployeeDto
    public static EmployeeDto mapToEmployeeDto(Employee employee) {
        if (employee == null) {
            System.out.println("Employee is null in mapping!");
            return null;
        }
    
        // Log the data before mapping
        System.out.println("Mapping Employee entity: " + employee);
    
        EmployeeDto employeeDto = new EmployeeDto();
        employeeDto.setFirstName(employee.getFirstName());  // Map 'firstName' in Entity to 'firstName' in DTO
        employeeDto.setLastName(employee.getLastName());    // Map 'lastName' in Entity to 'lastName' in DTO
        employeeDto.setEmail(employee.getEmail());          // Map 'email' in Entity to 'email' in DTO
    
        // Log the mapped DTO
        System.out.println("Mapped EmployeeDto: " + employeeDto);
    
        return employeeDto;
    }
}


    