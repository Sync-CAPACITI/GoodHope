package com.example.data.repository;

import com.example.model.Institution;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InstitutionRepository extends JpaRepository<Institution, Long> {
    List<Institution> findByNameContainingIgnoreCaseOrLocationContainingIgnoreCase(String name, String location);
}