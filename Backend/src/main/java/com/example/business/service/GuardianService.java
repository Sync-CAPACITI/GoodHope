package com.example.business.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.data.repository.GuardianRepository;
import com.example.dto.GuardianDTO;
import com.example.model.Guardian;

@Service
public class GuardianService {

    @Autowired
    private GuardianRepository guardianRepository;

    public Guardian registerGuardian(GuardianDTO guardianDTO) {
        Guardian guardian = new Guardian();
        guardian.setName(guardianDTO.getName());
        guardian.setAge(guardianDTO.getAge());
        guardian.setPhoneNumber(guardianDTO.getContact());
        guardian.setRelationship(guardianDTO.getRelationship());
        guardian.setSchoolType(guardianDTO.getPrefferedSchool());
        guardian.setEmail(guardianDTO.getEmail());
        guardian.setPassword(guardianDTO.getPassword());
        guardian.setRole("GUARDIAN");

        return guardianRepository.save(guardian);
    }
}
