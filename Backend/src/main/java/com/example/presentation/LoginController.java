package com.example.presentation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import com.example.business.service.*;
import com.example.dto.LoginRequest;
import com.example.model.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
public class LoginController {

    private final GuardianService guardianService;
    private final SchoolService schoolService;
    private final MedicalPractitionerService medicalPractitionerService;
    private final PasswordEncoder passwordEncoder;


    @Autowired
    public LoginController(GuardianService guardianService, SchoolService schoolService, MedicalPractitionerService medicalPractitionerService, PasswordEncoder passwordEncoder) {
        this.medicalPractitionerService = medicalPractitionerService;
        this.guardianService = guardianService;
        this.schoolService = schoolService;
        this.passwordEncoder = passwordEncoder;
    }
    
    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> login(@RequestBody LoginRequest loginRequest) {
        String email = loginRequest.getEmail();
        String password = loginRequest.getPassword();
        Map<String, String> response = new HashMap<>();

        // First check Guardian
        Optional<Guardian> guardian = guardianService.findByEmail(email);
        if (guardian.isPresent() && passwordEncoder.matches(password, guardian.get().getPassword())) {
            response.put("role", "Guardian");
            response.put("message", "Guardian login successful!");
            return ResponseEntity.ok(response);
        }

        // Then check School
        Optional<School> school = schoolService.findByEmail(email);
        if (school.isPresent() && passwordEncoder.matches(password, school.get().getPassword())) {
            response.put("role", "School");
            response.put("message", "School login successful!");
            return ResponseEntity.ok(response);
        }

        // Finally check Medical Practitioner
        Optional<MedicalPractitioner> practitioner = medicalPractitionerService.findByEmail(email);
        if (practitioner.isPresent() && passwordEncoder.matches(password, practitioner.get().getPassword())) {
            response.put("role", "Medical");
            response.put("message", "Medical Practitioner login successful!");
            return ResponseEntity.ok(response);
        }

    response.put("message", "Invalid email or password");
    return ResponseEntity.status(401).body(response);
    }
}
