package com.example.business.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.data.repository.GuardianRepository;
import com.example.model.Guardian;

import java.util.Optional;

@Service
public class GuardianService {

    private final GuardianRepository guardianRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public GuardianService(GuardianRepository guardianRepository, PasswordEncoder passwordEncoder) {
        this.guardianRepository = guardianRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public Guardian register(Guardian guardian) {
        // Check for duplicate email
        if (guardianRepository.findByEmail(guardian.getEmail()).isPresent()) {
            throw new RuntimeException("Email is already in use.");
        }

        // Hash the password before saving
        guardian.setPassword(passwordEncoder.encode(guardian.getPassword()));
        return guardianRepository.save(guardian);
    }

    public Optional<Guardian> findById(Long id) {
        return guardianRepository.findById(id);
    }

    public void deleteGuardian(Long id) {
        guardianRepository.deleteById(id);
    }

    public Optional<Guardian> findByEmail(String email) {
        return guardianRepository.findByEmail(email);
    }
}
