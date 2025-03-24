package com.example.presentation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.business.service.MedicalService;
import com.example.business.service.SchoolService;
import com.example.dto.MedicalRegistrationDto;
import com.example.dto.RegisterSchoolDto;


@RestController
@RequestMapping("/api/register")
public class MainController {

    @Autowired
    private SchoolService schoolService;

    @Autowired
    private MedicalService medicalService;

    @PostMapping("/school")
    public ResponseEntity<?> registerSchool(@RequestBody RegisterSchoolDto registerSchoolDto) {
       try{
        schoolService.registerSchool(registerSchoolDto);
        System.out.println(registerSchoolDto.getAddress());
        return ResponseEntity.ok("School successfully registered!");

       } catch( Exception e){
        return ResponseEntity.badRequest().body("Error: " + e.getMessage());
       }
        
    }

    @PostMapping("/medical")
    public ResponseEntity<?> registerMedicalPractictioner(@RequestBody MedicalRegistrationDto medicalDto) {
        try {
            medicalService.registerMedicalPractictioner(medicalDto);
            return ResponseEntity.ok("Medical Practictioner successfully registered!");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error: " + e.getMessage());
        }
    }

    // @Autowired
    // private UserService userService;

    // @PostMapping("/login")
    // public ResponseEntity<?> loginUser(@RequestBody User user) {
    // Optional<User> loggedInUser = userService.loginUser(user.getEmail(),
    // user.getPassword());
    // if (loggedInUser.isPresent()) {
    // return ResponseEntity.ok("Login successful!");
    // }
    // return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid
    // credentials");
    // }

}
