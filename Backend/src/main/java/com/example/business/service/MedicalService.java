package com.example.business.service;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import com.example.data.repository.MedicalRepository;
import com.example.dto.MedicalRegistrationDto;
import com.example.model.Address;
import com.example.model.MedicalPractitioner;

import jakarta.transaction.Transactional;

@Service
public class MedicalService {
    
    @Autowired
    private MedicalRepository medicalRepository;
    

    private  PasswordEncoder passwordEncoder;

    public MedicalService(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

    @Transactional
    public ResponseEntity<?> registerMedicalPractictioner(@RequestBody @Valid MedicalRegistrationDto medicalDto) {
        try {
            MedicalPractitioner medical = new MedicalPractitioner();
            medical.setMedicalName(medicalDto.getMedicalName());
            medical.setMedicalEmail(medicalDto.getMedicalEmail());
            medical.setContactNumber(medicalDto.getMedicalContact());
            medical.setRole("Medical");
            medical.setMedicalPassword(passwordEncoder.encode(medicalDto.getMedicalPassword()));
            medical.setSpecialization(medicalDto.getMedicalSpecialization());
            medical.setQualification(medicalDto.getMedicalQualification());
            medical.setYearsOfExperience(medicalDto.getMedicalYearsOfEx());

            Address address = new Address();
            address.setStreet(medicalDto.getMedAddress().getStreet());
            address.setCity(medicalDto.getMedAddress().getCity());
            address.setState(medicalDto.getMedAddress().getState());
            address.setPostalCode(medicalDto.getMedAddress().getPostalCode());
            address.setCountry(medicalDto.getMedAddress().getCountry());
            medical.setAddress(address);

            medicalRepository.save(medical);
            return ResponseEntity.ok("Medical Practictioner successfully registered!");
        } catch (Exception e) {
            System.err.println("Error registering user: " + e.getMessage()); // Debugging log
            return ResponseEntity.badRequest().body("Error: " + e.getMessage());
        }
    }

}
