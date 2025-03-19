package com.example.business.service;

import com.example.dto.ChildDTO;
import com.example.model.Child;
import com.example.model.Guardian;
import com.example.data.repository.ChildRepository;
import com.example.data.repository.GuardianRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;


@Service
@RequiredArgsConstructor
public class ChildService {

    private final ChildRepository childRepository;
    private final GuardianRepository guardianRepository;

    public ChildDTO addChild(ChildDTO childDTO) {
        Guardian guardian = guardianRepository.findById(childDTO.getGuardianId())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Guardian not found"));
    
        Child child = new Child();
        child.setChildName(childDTO.getChildName());
        child.setChildSurname(childDTO.getChildSurname());
        child.setChildAge(childDTO.getChildAge());
        child.setChildGrade(childDTO.getChildGrade());
        child.setSpecialNeedsCategory(childDTO.getSpecialNeedsCategory());
        child.setOtherCategory(childDTO.getOtherCategory());
        child.setMedicalHistory(childDTO.getMedicalHistory());
        child.setGuardian(guardian);
    
        Child savedChild = childRepository.save(child);
    
        childDTO.setGuardianId(savedChild.getGuardian().getUserId()); // Set guardian ID
        return childDTO;
        
    }
    
    public List<ChildDTO> getChildrenByGuardian(Integer guardianId) {
        Optional<Child> children = childRepository.findById(guardianId);
        return children.stream().map(child -> {
            ChildDTO dto = new ChildDTO();
            dto.setChildName(child.getChildName());
            dto.setChildSurname(child.getChildSurname());
            dto.setChildAge(child.getChildAge());
            dto.setChildGrade(child.getChildGrade());
            dto.setSpecialNeedsCategory(child.getSpecialNeedsCategory());
            dto.setOtherCategory(child.getOtherCategory());
            dto.setMedicalHistory(child.getMedicalHistory());
            dto.setGuardianId(child.getGuardian().getUserId());
            return dto;
        }).collect(Collectors.toList());
    }
}
