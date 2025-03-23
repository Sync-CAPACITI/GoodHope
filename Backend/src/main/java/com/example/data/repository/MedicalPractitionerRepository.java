package com.example.data.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.model.MedicalPractitioner;

import java.util.Optional;

public interface MedicalPractitionerRepository extends JpaRepository<MedicalPractitioner, Long> {


    Optional<MedicalPractitioner> findByEmail(String email);
}
