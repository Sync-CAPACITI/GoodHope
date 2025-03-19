package com.example.data.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.model.Guardian;
import com.google.common.base.Optional;

@Repository
public interface GuardianRepository extends JpaRepository<Guardian, Integer> {
    // Use Optional to handle cases where no Guardian is found
    Optional<Guardian> findByEmail(String email);

 
}
