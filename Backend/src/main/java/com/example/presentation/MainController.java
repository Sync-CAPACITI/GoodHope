package com.example.presentation;

import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.business.service.GuardianService;
import com.example.business.service.MedicalService;
import com.example.business.service.SchoolService;
import com.example.data.repository.BookingRepository;
import com.example.data.repository.ChildRepository;
import com.example.dto.BookingDto;
import com.example.dto.GuardianDTO;
// import com.example.data.repository.SchoolRepository;
import com.example.dto.MedicalRegistrationDto;
import com.example.dto.RegisterSchoolDto;
import com.example.dto.UserRegistrationDto;
import com.example.model.Booking;
import com.example.model.Child;
import com.example.model.Guardian;
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

    @Autowired
    private GuardianService guardianService;

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
          //  school.setUserType("School"); // Add this line
            school.setPassword(passwordEncoder.encode(registerSchoolDto.getSchoolPassword()));
            school.setAddressDetails(registerSchoolDto.getSchoolAddress());

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
            // Create a new MedicalPractitioner entity
            MedicalPractitioner medical = new MedicalPractitioner();
            
            // Map DTO fields to entity fields
            medical.setName(medicalDto.getMedicalName());
            medical.setEmail(medicalDto.getMedicalEmail());
            medical.setPhoneNumber(medicalDto.getMedicalContact());
            medical.setRole("Medical");
    
            // Here, map medicalPassword from DTO to password in entity
            medical.setPassword(passwordEncoder.encode(medicalDto.getMedicalPassword()));  // Encrypt password
    
            medical.setSpecialization(medicalDto.getMedicalSpecialization());
            medical.setQualification(medicalDto.getMedicalQualification());
            medical.setYearsOfExperience(medicalDto.getMedicalYearsOfEx());
            medical.setAddressDetails(medicalDto.getMedicalAddress());  // Assuming you have an address object
            
            // Save the medical practitioner (assuming you have a service layer)
            medicalService.registerMedicalPractictioner(medical);
    
            return ResponseEntity.ok("Medical Practitioner successfully registered!");
        } catch (Exception e) {
            System.err.println("Error registering user: " + e.getMessage());  // Debugging log
            return ResponseEntity.badRequest().body("Error: " + e.getMessage());
        }
    }
    

    @PostMapping("/guardian")
    public ResponseEntity<?> registerUser(@RequestBody @Valid GuardianDTO guardianDTO) {
        try {
            System.out.println("Registering guardian: " + guardianDTO.getName());  // Debugging log
            guardianService.registerGuardian(guardianDTO);
            return ResponseEntity.ok("User successfully registered!");
        } catch (Exception e) {
            System.err.println("Error registering user: " + e.getMessage());  // Debugging log
            return ResponseEntity.badRequest().body("Error: " + e.getMessage());
        }
    }

}
