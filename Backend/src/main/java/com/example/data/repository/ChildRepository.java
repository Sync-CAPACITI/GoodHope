package com.example.data.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.model.Child;

@Repository
public interface ChildRepository extends JpaRepository<Child, Integer> {
    Optional<Child> findById(Integer id); // Correct return type
}

