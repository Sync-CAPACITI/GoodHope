package com.example.goodhope.model;

import jakarta.persistence.*;

@Entity
public class School {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String location;
    private String contactInfo;

    // Getters and Setters
}
