package com.example.business.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.data.repository.SchoolRepository;
import com.example.dto.RegisterSchoolDto;
import com.example.model.Address;
import com.example.model.School;

import jakarta.transaction.Transactional;

@Service
public class SchoolService {
    
    @Autowired
    private SchoolRepository schoolRepository;

    private final PasswordEncoder passwordEncoder;

    public SchoolService(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

    @Transactional
    public ResponseEntity<String> registerSchool(RegisterSchoolDto registerSchoolDto){
        try {

            // Convert the DTO to the School entity
            School school = new School();
            school.setRole("School");
            school.setSchoolContact(registerSchoolDto.getContactNumber());
            school.setSchoolPassword(passwordEncoder.encode(registerSchoolDto.getSchoolPassword()));
            school.setSchoolEmail(registerSchoolDto.getSchoolEmail());
            school.setSchoolName(registerSchoolDto.getSchoolName());
            school.setSchoolType(registerSchoolDto.getSchoolType());
            // school.setUser(user);

            Address address = new Address();
            address.setStreet(registerSchoolDto.getAddress().getStreet());
            address.setCity(registerSchoolDto.getAddress().getCity());
            address.setState(registerSchoolDto.getAddress().getState());
            address.setPostalCode(registerSchoolDto.getAddress().getPostalCode());
            address.setCountry(registerSchoolDto.getAddress().getCountry());
            school.setAddress(address);

            // Save the school using the service
            schoolRepository.save(school);

            return ResponseEntity.ok("School registered successfully");
        } catch (Exception e) {
            e.printStackTrace(); 
            return ResponseEntity.badRequest().body("Error: " + e.getMessage());
        }
    }


}
