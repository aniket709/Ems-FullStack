package net.aniket.ems_backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import net.aniket.ems_backend.Entity.Employee;

public interface  EmployeeRepository  extends JpaRepository<Employee ,Long>{
    
}
