package com.example.presentation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import com.example.business.service.GuardianService;
import com.example.business.service.MedicalPractitionerService;
import com.example.business.service.SchoolService;
import com.example.dto.GuardianDTO;
import com.example.dto.MedicalPractitionerDTO;
import com.example.dto.SchoolDTO;
import com.example.model.Guardian;
import com.example.model.MedicalPractitioner;
import com.example.model.School;
import com.example.model.Address;

@RestController
@RequestMapping("/api/register")
public class RegistrationController {

    private final GuardianService guardianService;
    private final SchoolService schoolService;
    private final MedicalPractitionerService medicalPractitionerService;

    @Autowired
    public RegistrationController(GuardianService guardianService, SchoolService schoolService, MedicalPractitionerService medicalPractitionerService) {
        this.guardianService = guardianService;
        this.schoolService = schoolService;
        this.medicalPractitionerService = medicalPractitionerService;
    }

    // Test endpoint
    @PostMapping("/test")
    public ResponseEntity<String> test() {
        return ResponseEntity.ok("It works!");
    }

    // Register Guardian
    @PostMapping("/guardian")
    public ResponseEntity registerGuardian(@RequestBody @Validated GuardianDTO guardianDTO) {
        Guardian guardian = new Guardian();
        guardian.setName(guardianDTO.getName());
        guardian.setLastName(guardianDTO.getLastName());
        guardian.setPhoneNumber(guardianDTO.getPhoneNumber());
        guardian.setEmail(guardianDTO.getEmail());
        guardian.setPassword(guardianDTO.getPassword());
        guardian.setSchoolType(guardianDTO.getSchoolType());

        if (guardianDTO.getAddress() != null) {
            Address address = new Address();
            address.setStreet(guardianDTO.getAddress().getStreet());
            address.setCity(guardianDTO.getAddress().getCity());
            address.setState(guardianDTO.getAddress().getState());
            address.setPostalCode(guardianDTO.getAddress().getPostalCode());
            address.setCountry(guardianDTO.getAddress().getCountry());
            guardian.setAddress(address);
        }
        Guardian savedGuardian = guardianService.register(guardian);

        return ResponseEntity.ok(savedGuardian);
    }

    // Register School
    @PostMapping("/school")
    public ResponseEntity<String> registerSchool(@RequestBody @Validated SchoolDTO schoolDTO) {
        
        try {
            School school = new School();
            school.setName(schoolDTO.getName());
            school.setPhoneNumber(schoolDTO.getPhoneNumber());
            school.setEmail(schoolDTO.getEmail());
            school.setSchoolType(schoolDTO.getSchoolType());
            school.setPassword(schoolDTO.getPassword());

            if (schoolDTO.getAddress() != null) {
                Address address = new Address();
                address.setStreet(schoolDTO.getAddress().getStreet());
                address.setCity(schoolDTO.getAddress().getCity());
                address.setState(schoolDTO.getAddress().getState());
                address.setPostalCode(schoolDTO.getAddress().getPostalCode());
                address.setCountry(schoolDTO.getAddress().getCountry());
                school.setAddress(address);
            }

            schoolService.register(school);
            return ResponseEntity.ok("School registered successfully");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error: " + e.getMessage());
        }
    }

    // Register Medical Practitioner
    @PostMapping("/medical")
    public ResponseEntity<String> registerMedicalPractitioner(@RequestBody @Validated MedicalPractitionerDTO practitionerDTO) {
        System.out.println("Received Payload: " + practitionerDTO);
        MedicalPractitioner practitioner = new MedicalPractitioner();
        practitioner.setName(practitionerDTO.getName());
        practitioner.setEmail(practitionerDTO.getEmail());
        practitioner.setContactNumber(practitionerDTO.getContactNumber());
        practitioner.setPassword(practitionerDTO.getPassword());
        practitioner.setMedicalSpecialization(practitionerDTO.getMedicalSpecialization());
        practitioner.setMedicalQualification(practitionerDTO.getMedicalQualification());
        practitioner.setMedicalYearsOfEx(practitionerDTO.getMedicalYearsOfEx());

        if (practitionerDTO.getMedicalAddress() != null) {
            Address address = new Address();
            address.setStreet(practitionerDTO.getMedicalAddress().getStreet());
            address.setCity(practitionerDTO.getMedicalAddress().getCity());
            address.setState(practitionerDTO.getMedicalAddress().getState());
            address.setPostalCode(practitionerDTO.getMedicalAddress().getPostalCode());
            address.setCountry(practitionerDTO.getMedicalAddress().getCountry());
            practitioner.setMedicalAddress(address);
        }

        if (practitionerDTO.getSchoolId() != null) {
            School school = schoolService.findById(practitionerDTO.getSchoolId())
                .orElseThrow(() -> new RuntimeException("School not found"));
            practitioner.setSchool(school);
        }

        medicalPractitionerService.register(practitioner);
        return ResponseEntity.ok("Medical Practitioner registered successfully!");
    }
}
