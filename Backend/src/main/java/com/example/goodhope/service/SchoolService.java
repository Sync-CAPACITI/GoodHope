package com.example.goodhope.service;

import com.example.goodhope.model.School;
import com.example.goodhope.repository.SchoolRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SchoolService {

    @Autowired
    private SchoolRepository schoolRepository;

    public School saveSchool(School school) {
        return schoolRepository.save(school);
    }

    public School getSchoolById(Long id) {
        return schoolRepository.findById(id).orElse(null);
    }

    public List<School> getAllSchools() {
        return schoolRepository.findAll();
    }
}
