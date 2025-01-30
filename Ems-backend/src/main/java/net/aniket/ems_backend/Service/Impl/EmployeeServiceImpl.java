package net.aniket.ems_backend.Service.Impl;

import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lombok.AllArgsConstructor;
import net.aniket.ems_backend.Dto.EmployeeDto;
import net.aniket.ems_backend.Mapper.EmployeeMapper;
import net.aniket.ems_backend.Repository.EmployeeRepository;
import net.aniket.ems_backend.Service.EmployeeService;
import net.aniket.ems_backend.Entity.Employee;
import net.aniket.ems_backend.Exception.ResourceNotfound;
import java.util.*;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
@Service
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepository employeeRepository;

    @Autowired
    public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    @Transactional
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {

        Employee employee = new Employee();
        employee.setFirstName(employeeDto.getFirstName());  
        employee.setLastName(employeeDto.getLastName());    
        employee.setEmail(employeeDto.getEmail());        

        // Save employee to the database
        Employee savedEmployee = employeeRepository.save(employee);

        // Map the saved employee back to DTO
        EmployeeDto savedEmployeeDto = new EmployeeDto();
        savedEmployeeDto.setFirstName(savedEmployee.getFirstName());  // Ensure correct mapping
        savedEmployeeDto.setLastName(savedEmployee.getLastName());    // Ensure correct mapping
        savedEmployeeDto.setEmail(savedEmployee.getEmail());          // Ensure correct mapping

        return savedEmployeeDto;
    }

    @Override
    @Transactional
    public EmployeeDto getEmployeeById(Long employeeId) {
        System.out.println("Fetching employee with ID: " + employeeId);
    
        Employee employee = employeeRepository.findById(employeeId)
            .orElseThrow(() -> {
                System.out.println("Employee not found with ID: " + employeeId);
                return new ResourceNotfound("Employee not exists with given id " + employeeId);
            });
    
        System.out.println("Found employee: " + employee); // Check if the employee object is null or not
    
        return EmployeeMapper.mapToEmployeeDto(employee);
    }

    @Override
public List<EmployeeDto> getAllEmployees() {
    List<Employee> employees = employeeRepository.findAll();
    return employees.stream()
            .map(employee -> EmployeeMapper.mapToEmployeeDto(employee))
            .collect(Collectors.toList());
}

@Override  
public  EmployeeDto  updateEmployee(long employeeId, EmployeeDto updatedEmployeeId){

    Employee employee= employeeRepository.findById(employeeId).orElseThrow(()->
    new ResourceNotfound("Employees not exist with given id " + employeeId));
    employee.setFirstName(updatedEmployeeId.getFirstName());
    employee.setLastName(updatedEmployeeId.getLastName());
    employee.setEmail(updatedEmployeeId.getEmail());
    Employee updatedobj=employeeRepository.save(employee);

    return EmployeeMapper.mapToEmployeeDto(updatedobj);
}

@Override
public void deleteEmployee(Long employeeId){

    Employee employee = employeeRepository.findById(employeeId)
    .orElseThrow(() -> {
        return new ResourceNotfound("Employee not exists with given id " + employeeId);
    });

    employeeRepository.deleteById(employeeId);
} 

}

