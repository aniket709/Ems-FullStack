package net.aniket.ems_backend.Service;

import java.util.List;

import net.aniket.ems_backend.Dto.EmployeeDto;

public interface  EmployeeService {

    EmployeeDto createEmployee(EmployeeDto employeeDto);

    EmployeeDto getEmployeeById(Long employeeId);

        List<EmployeeDto> getAllEmployees();

        EmployeeDto updateEmployee(long employeeId,EmployeeDto updatedEmployeeId);

        void deleteEmployee (Long id);


    
  
    
}
