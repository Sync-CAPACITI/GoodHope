package com.example.business.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.data.repository.GuardianRepository;
import com.example.dto.GuardianDTO;
import com.example.model.Guardian;
import com.example.model.School;

@Service
public class GuardianService {

    @Autowired
    private GuardianRepository guardianRepository;

     // This will save the guardian entity to the database
    public Guardian registerGuardian(GuardianDTO guardianDTO) {
           
       
        Guardian guardian = new Guardian(); // new enetity to save 
        guardian.setName(guardianDTO.getName());
        guardian.setAge(guardianDTO.getAge());
        guardian.setPhoneNumber(guardianDTO.getPhoneNumber());
        guardian.setRelationship(guardianDTO.getRelationship());
        guardian.setSchoolType(guardianDTO.getPrefferedSchool());
        guardian.setEmail(guardianDTO.getEmail());
        guardian.setPassword(guardianDTO.getPassword());
        guardian.setRole("GUARDIAN");


        return guardianRepository.save(guardian);
    }

    public Guardian findByEmail(String name) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findByEmail'");
    }

    
}
