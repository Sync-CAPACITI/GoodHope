package com.example.business.service;

import com.example.dto.MedicalPractitionerDTO;
import com.example.model.Address;
import com.example.model.MedicalPractitioner;
import com.example.data.repository.*;

import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class MedicalService {

    private final MedicalRepository medicalRepository;
    private final AddressRepository addressRepository;
    private final PasswordEncoder passwordEncoder;

    @Transactional
    public MedicalPractitioner registerMedicalPractitioner(MedicalPractitionerDTO dto) {
        MedicalPractitioner medicalPractitioner = new MedicalPractitioner();
        
        medicalPractitioner.setName(dto.getMedicalName());
        medicalPractitioner.setEmail(dto.getMedicalEmail());
        medicalPractitioner.setPhoneNumber(dto.getMedicalContact());
        medicalPractitioner.setPassword(passwordEncoder.encode(dto.getMedicalPassword()));
        medicalPractitioner.setRole("MEDICAL");
        medicalPractitioner.setSpecialization(dto.getMedicalSpecialization());
        medicalPractitioner.setQualification(dto.getMedicalQualification());
        medicalPractitioner.setYearsOfExperience(dto.getMedicalYearsOfEx());

        // Save user first to generate ID
        medicalPractitioner = medicalRepository.save(medicalPractitioner);

        // Save address
        Address address = new Address();
        address.setUser(medicalPractitioner);
        address.setStreet(dto.getMedicalAddress().getStreet());
        address.setCity(dto.getMedicalAddress().getCity());
        address.setState(dto.getMedicalAddress().getState());
        address.setPostalCode(dto.getMedicalAddress().getPostalCode());
        address.setCountry(dto.getMedicalAddress().getCountry());

        addressRepository.save(address);

        return medicalPractitioner;
    }
}
