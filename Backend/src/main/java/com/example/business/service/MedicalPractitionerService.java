package com.example.business.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;

import org.springframework.stereotype.Service;

import com.example.data.repository.MedicalPractitionerRepository;
import com.example.data.repository.SchoolRepository;
import com.example.model.Guardian;
import com.example.model.MedicalPractitioner;
import com.example.model.School;

@Service
public class MedicalPractitionerService implements UserService <MedicalPractitioner> {



    private PasswordEncoder passwordEncoder;
    private MedicalPractitionerRepository medicalPractitionerRepository;
    private SchoolRepository schoolRepository;

    @Autowired
    public MedicalPractitionerService(MedicalPractitionerRepository medicalPractitionerRepository, PasswordEncoder passwordEncoder, SchoolRepository schoolRepository) {
        this.medicalPractitionerRepository = medicalPractitionerRepository;
        this.passwordEncoder = passwordEncoder;
        this.schoolRepository= schoolRepository;
    }


@Override
public MedicalPractitioner register(MedicalPractitioner medicalPractitioner) {
    if (medicalPractitionerRepository.findByEmail(medicalPractitioner.getEmail()).isPresent()) {
        throw new RuntimeException("Email is already in use.");
    }

    // Hash password securely
    medicalPractitioner.setPassword(passwordEncoder.encode(medicalPractitioner.getPassword()));

    // Ensure school association, if provided
    if (medicalPractitioner.getSchool() != null) {
        Optional<School> school = schoolRepository.findById((long) medicalPractitioner.getSchool().getId());
        school.ifPresent(medicalPractitioner::setSchool); // Set the associated school
    }

    return medicalPractitionerRepository.save(medicalPractitioner);
}

    

    
    @Override
    public Optional<MedicalPractitioner> findById(Long id) {
        return medicalPractitionerRepository.findById(id);
    }

    
    @Override
    public MedicalPractitioner updateProfile(Long id, MedicalPractitioner updatedPractitioner) {
        return medicalPractitionerRepository.findById(id)
            .map(existingPractitioner -> {
                // Update name
                if (updatedPractitioner.getName() != null) {
                    existingPractitioner.setName(updatedPractitioner.getName());
                }
    
                // Update email
                if (updatedPractitioner.getEmail() != null) {
                    if (!existingPractitioner.getEmail().equals(updatedPractitioner.getEmail()) &&
                        medicalPractitionerRepository.findByEmail(updatedPractitioner.getEmail()).isPresent()) {
                        throw new RuntimeException("Email is already in use.");
                    }
                    existingPractitioner.setEmail(updatedPractitioner.getEmail());
                }
    
                // Update contact number
                if (updatedPractitioner.getContactNumber() != null) {
                    existingPractitioner.setContactNumber(updatedPractitioner.getContactNumber());
                }
    
                // Update medical specialization
                if (updatedPractitioner.getMedicalSpecialization() != null) {
                    existingPractitioner.setMedicalSpecialization(updatedPractitioner.getMedicalSpecialization());
                }
    
                // Update medical qualification
                if (updatedPractitioner.getMedicalQualification() != null) {
                    existingPractitioner.setMedicalQualification(updatedPractitioner.getMedicalQualification());
                }
    
                // Update years of experience
                if (updatedPractitioner.getMedicalYearsOfEx() > 0) {
                    existingPractitioner.setMedicalYearsOfEx(updatedPractitioner.getMedicalYearsOfEx());
                }
    
                // Update school association
                if (updatedPractitioner.getSchool() != null) {
                    Optional<School> school = schoolRepository.findById((long) updatedPractitioner.getSchool().getId());
                    school.ifPresent(existingPractitioner::setSchool);
                }
    
                // Update address
                if (updatedPractitioner.getMedicalAddress() != null) {
                    existingPractitioner.setMedicalAddress(updatedPractitioner.getMedicalAddress());
                }
    
                // Update password
                if (updatedPractitioner.getPassword() != null) {
                    existingPractitioner.setPassword(passwordEncoder.encode(updatedPractitioner.getPassword()));
                }
    
                return medicalPractitionerRepository.save(existingPractitioner);
            })
            .orElseThrow(() -> new RuntimeException("Medical Practitioner not found"));
    }
     
    public Optional<MedicalPractitioner> findByEmail(String email) {
        return medicalPractitionerRepository.findByEmail(email);
        
    }


    @Override
    public void deleteAccount(Long id) {
            medicalPractitionerRepository.deleteById(id);
    }

        

}
