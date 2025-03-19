package com.example.presentation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.business.service.ChildService;
import com.example.business.service.GuardianService;
import com.example.business.service.MedicalService;
import com.example.business.service.SchoolService;
import com.example.dto.ChildDTO;
import com.example.dto.GuardianDTO;
import com.example.dto.MedicalPractitionerDTO;
import com.example.dto.SchoolDTO;
import com.example.model.MedicalPractitioner;

@RestController
@RequestMapping("/api/register")
public class MainController {

    private final SchoolService schoolService;
    private final MedicalService medicalService;
    private final GuardianService guardianService;
    private final ChildService childService;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public MainController(SchoolService schoolService, MedicalService medicalService, 
                          GuardianService guardianService, ChildService childService,
                          PasswordEncoder passwordEncoder) {
        this.schoolService = schoolService;
        this.medicalService = medicalService;
        this.guardianService = guardianService;
        this.childService = childService;
        this.passwordEncoder = passwordEncoder;
    }

    // Register school
    @PostMapping("/school")
    public ResponseEntity<String> registerSchool(@RequestBody SchoolDTO schoolDTO) {
        try {
            schoolService.registerSchool(schoolDTO);
            return ResponseEntity.ok("School registered successfully!");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error: " + e.getMessage());
        }
    }

    // Register medical practitioner
    @PostMapping("/medical")
    public ResponseEntity<String> registerMedicalPractitioner(@RequestBody MedicalPractitionerDTO dto) {
        MedicalPractitioner medicalPractitioner = medicalService.registerMedicalPractitioner(dto);
        return ResponseEntity.ok("Medical Practitioner " + medicalPractitioner.getName() + " registered successfully!");
    }

    // Register guardian
    @PostMapping("/guardian")
    public ResponseEntity<?> registerGuardian(@RequestBody @Validated GuardianDTO guardianDTO) {
        try {
            System.out.println("Registering guardian: " + guardianDTO.getName());  // Debugging log
            guardianService.registerGuardian(guardianDTO);
            return ResponseEntity.ok("User successfully registered!");
        } catch (Exception e) {
            System.err.println("Error registering user: " + e.getMessage());  // Debugging log
            return ResponseEntity.badRequest().body("Error: " + e.getMessage());
        }
    }


    @PostMapping("/add")
    public ResponseEntity<ChildDTO> addChild(@RequestBody ChildDTO childDTO) {
        return ResponseEntity.status(HttpStatus.CREATED).body(childService.addChild(childDTO));
    }

    // @GetMapping("/guardian/{guardianId}")
    // public ResponseEntity<List<ChildDTO>> getChildrenByGuardian(@PathVariable Integer guardianId) {
    //     List<ChildDTO> children = childService.getChildrenByGuardian(guardianId);
    //     return children.isEmpty() ? ResponseEntity.noContent().build() : ResponseEntity.ok(children);
    // }
}
