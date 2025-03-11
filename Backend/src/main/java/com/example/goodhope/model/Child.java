package com.example.goodhope.model;

import jakarta.persistence.*;

@Entity
public class Child {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private int age;
    private String condition;
    private String parentContact;

    // Getters and Setters
}
