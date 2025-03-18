package com.example.business.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.data.repository.MedicalRepository;
import com.example.model.MedicalPractitioner;

@Service
public class MedicalService {
    
    @Autowired
    private MedicalRepository medicalRepository;

    public MedicalPractitioner registerMedicalPractictioner(MedicalPractitioner medicalPractitioner) {
        // This will save the Medical Practitioner entity to the database
        return medicalRepository.save(medicalPractitioner);
    }
}
