package com.example.data.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.model.Guardian;

@Repository
public interface GuardianRepository extends JpaRepository<Guardian, Integer> {
    Guardian findByEmail(String email);
}
