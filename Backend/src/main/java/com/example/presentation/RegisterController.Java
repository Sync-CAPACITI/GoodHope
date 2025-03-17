package com.example.presentation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.business.service.SchoolService;
import com.example.dto.RegisterSchoolDto;
import com.example.model.School;
@RestController
@RequestMapping("/api/register")
public class RegisterController {

    @Autowired
    private SchoolService schoolService

    @PostMapping("/school")
    public ResponseEntity<String> registerSchool(@RequestBody @Validated RegisterSchoolDto registerSchoolDto) {
        try {
            
            // Convert the DTO to the School entity
            School school = new School();
            school.setName(registerSchoolDto.getSchoolName());
            school.setPhoneNumber(registerSchoolDto.getContactNumber());
            school.setEmail(registerSchoolDto.getSchoolEmail());
            school.setRole("School");
            
            school.setSchoolType(registerSchoolDto.getSchoolType());
            school.setPassword(registerSchoolDto.getSchoolPassword());
            school.setAddressDetails(registerSchoolDto.getSchoolAddress()); // Assuming the DTO has an address

            // Save the school using the service
            schoolService.registerSchool(school);

            return ResponseEntity.ok("School registered successfully");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error: " + e.getMessage());
        }
    }
    
    
    @PostMapping("/parent")
    public ResponseEntity<?> registerUser(@RequestBody @Valid UserRegistrationDto userDto) {
        try {
            System.out.println("Registering user: " + userDto.getEmail());  // Debugging log
            userService.registerNewUserAccount(userDto);
            return ResponseEntity.ok("User successfully registered!");
        } catch (Exception e) {
            System.err.println("Error registering user: " + e.getMessage());  // Debugging log
            return ResponseEntity.badRequest().body("Error: " + e.getMessage());
        }
    }

    @PostMapping("/medical")
    public ResponseEntity<?> registerUser(@RequestBody @Valid UserRegistrationDto userDto) {
        try {
            System.out.println("Registering user: " + userDto.getEmail());  // Debugging log
            userService.registerNewUserAccount(userDto);
            return ResponseEntity.ok("User successfully registered!");
        } catch (Exception e) {
            System.err.println("Error registering user: " + e.getMessage());  // Debugging log
            return ResponseEntity.badRequest().body("Error: " + e.getMessage());
        }
    }
    
    
}