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

import com.example.dto.GuardianDTO;
import com.example.dto.MedicalPractitionerDTO;
import com.example.dto.SchoolDTO;

import com.example.model.MedicalPractitioner;

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
    public ResponseEntity<String> registerSchool(@RequestBody SchoolDTO schoolDTO) {
        try {
            schoolService.registerSchool(schoolDTO);
            return ResponseEntity.ok("School registered successfully!");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error: " + e.getMessage());
        }
    }

    @PostMapping("/medical")
    public ResponseEntity<String> registerMedicalPractitioner(@RequestBody MedicalPractitionerDTO dto) {
        MedicalPractitioner medicalPractitioner = medicalService.registerMedicalPractitioner(dto);
        return ResponseEntity.ok("Medical Practitioner " + medicalPractitioner.getName() + " registered successfully!");
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
