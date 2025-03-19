package com.example.business.service;

import com.example.model.Institution;
import com.example.data.repository.InstitutionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InstitutionService {

    @Autowired
    private InstitutionRepository institutionRepository;

    public List<Institution> searchInstitutions(String query) {
        return institutionRepository.findByNameContainingIgnoreCaseOrLocationContainingIgnoreCase(query, query);
    }
}