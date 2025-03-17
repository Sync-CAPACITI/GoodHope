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
public class MainController { 

    @Autowired
    private SchoolService schoolService;

        
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
    


    // @Autowired
    // private UserService userService;


    // @PostMapping("/login")
    // public ResponseEntity<?> loginUser(@RequestBody User user) {
    //     Optional<User> loggedInUser = userService.loginUser(user.getEmail(), user.getPassword());
    //     if (loggedInUser.isPresent()) {
    //         return ResponseEntity.ok("Login successful!");
    //     }
    //     return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
    // }

    
}
