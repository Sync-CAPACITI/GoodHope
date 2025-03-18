package com.example.presentation;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.business.service.MedicalService;
import com.example.business.service.SchoolService;
// import com.example.data.repository.SchoolRepository;
import com.example.dto.MedicalRegistrationDto;
import com.example.dto.RegisterSchoolDto;
import com.example.model.MedicalPractitioner;
import com.example.model.School;
// import java.util.Optional;

@RestController
@RequestMapping("/api/register")
public class MainController {

    @Autowired
    private SchoolService schoolService;

    @Autowired
    private MedicalService medicalService;

    // @Autowired
    // private SchoolRepository schoolRepository;

    private final PasswordEncoder passwordEncoder;

    public MainController(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

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
            school.setPassword(passwordEncoder.encode(registerSchoolDto.getSchoolPassword()));
            school.setAddressDetails(registerSchoolDto.getSchoolAddress()); // Assuming the DTO has an address

            // Save the school using the service
            schoolService.registerSchool(school);

            return ResponseEntity.ok("School registered successfully");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error: " + e.getMessage());
        }
    }

    @PostMapping("/medical")
    public ResponseEntity<?> registerMedicalPractictioner(@RequestBody @Valid MedicalRegistrationDto medicalDto) {
        try {
            MedicalPractitioner medical = new MedicalPractitioner();
            medical.setName(medicalDto.getMedicalName());
            medical.setEmail(medicalDto.getMedicalEmail());
            medical.setPhoneNumber(medicalDto.getMedicalContact());
            medical.setRole("Medical");
            medical.setPassword(passwordEncoder.encode(medicalDto.getMedicalPassword()));
            medical.setSpecialization(medicalDto.getMedicalSpecialization());
            medical.setQualification(medicalDto.getMedicalQualification());
            medical.setYearsOfExperience(medicalDto.getMedicalYearsOfEx());
            medical.setAddressDetails(medicalDto.getMedicalAddress());
            medicalService.registerMedicalPractictioner(medical);
            return ResponseEntity.ok("Medical Practictioner successfully registered!");
        } catch (Exception e) {
            System.err.println("Error registering user: " + e.getMessage()); // Debugging log
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
