package com.example.business.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.data.repository.SchoolRepository;
import com.example.model.School;

@Service
public class SchoolService {
    
    @Autowired
    private SchoolRepository schoolRepository;

    public School registerSchool(School school) {
        // This will save the school entity to the database
        return schoolRepository.save(school);
    }
}
