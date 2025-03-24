package com.example.data.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.model.MedicalPractitioner;
@Repository
public interface MedicalRepository extends JpaRepository<MedicalPractitioner, Integer>{
    Optional<MedicalPractitioner> findByMedicalEmail(String email);
}
