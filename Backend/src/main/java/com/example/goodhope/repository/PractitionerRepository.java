package com.example.goodhope.repository;

import com.example.goodhope.model.Practitioner;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PractitionerRepository extends JpaRepository<Practitioner, Long> {
}