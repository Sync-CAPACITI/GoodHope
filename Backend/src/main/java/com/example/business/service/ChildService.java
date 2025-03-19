package com.example.business.service;

import com.example.dto.ChildDTO;
import com.example.model.Child;
import com.example.model.Guardian;
import com.example.data.repository.ChildRepository;
import com.example.data.repository.GuardianRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ChildService {

    private final ChildRepository childRepository;
    private final GuardianRepository guardianRepository;

    @Autowired
    public ChildService(ChildRepository childRepository, GuardianRepository guardianRepository) {
        this.childRepository = childRepository;
        this.guardianRepository = guardianRepository;
    }

    public Child addChild(ChildDTO childDTO) {
        // Fetch the Guardian object from the repository using the Integer ID
        Guardian guardian = guardianRepository.findById(childDTO.getGuardianId())
            .orElseThrow(() -> new IllegalArgumentException("Guardian not found"));

        // Create a new Child entity and map values from the DTO
        Child child = new Child();
        child.setName(childDTO.getChildName());
        child.setSurname(childDTO.getChildSurname());
        child.setAge(childDTO.getChildAge());
        child.setGrade(childDTO.getChildGrade());
        child.setSpecialNeedsCategory(childDTO.getSpecialNeedsCategory());
        child.setOtherNeeds(childDTO.getOtherCategory()); // Use 'otherCategory' when specialNeedsCategory is 'Other'
        child.setMedicalHistory(childDTO.getMedicalHistory());
        child.setGuardian(guardian);

        // Save the child in the repository and return it
        return childRepository.save(child);
    }
}
