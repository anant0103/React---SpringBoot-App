/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.anant.springbootreactbackend.repository;

import com.anant.springbootreactbackend.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author anant
 */
@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>{
    
}
