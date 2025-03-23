package com.example.data.repository;

import com.example.model.School;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SchoolRepository extends JpaRepository<School, Long> {

    Optional<School> findByEmail(String email);
    
}