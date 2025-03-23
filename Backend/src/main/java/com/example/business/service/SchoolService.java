package com.example.business.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.data.repository.SchoolRepository;
import com.example.model.School;

import java.util.Optional;

@Service
public class SchoolService {

    private final SchoolRepository schoolRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public SchoolService(SchoolRepository schoolRepository, PasswordEncoder passwordEncoder) {
        this.schoolRepository = schoolRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public void register(School school) {
        // Check for duplicate email
        if (schoolRepository.findByEmail(school.getEmail()).isPresent()) {
            throw new RuntimeException("Email is already in use.");
        }

        // Hash the password before saving
        school.setPassword(passwordEncoder.encode(school.getPassword()));
        schoolRepository.save(school);
    }

    public Optional<School> findById(Long id) {
        return schoolRepository.findById(id);
    }

    public void deleteSchool(Long id) {
        schoolRepository.deleteById(id);
    }

    public Optional<School> findByEmail(String email) {
        return schoolRepository.findByEmail(email);
    }
}
