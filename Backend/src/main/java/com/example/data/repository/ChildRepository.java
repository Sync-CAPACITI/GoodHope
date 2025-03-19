package com.example.data.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.model.Child;

@Repository
// In ChildRepository
public interface ChildRepository extends JpaRepository<Child, Integer> {
    List<Child> findByGuardian_Id(Integer guardianId);  // This assumes Child has a 'guardian' field mapped correctly
}



