package com.example.model;

import java.util.List;

import jakarta.persistence.*;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "Schools")
public class School {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String phoneNumber;
    private String email;
    private String schoolType; // e.g., Public, Private, etc.

    private String password; // Make sure this is hashed for security purposes

    @Embedded
    private Address address;

    @OneToMany(mappedBy = "school", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<MedicalPractitioner> medicalPractitioners; // Relationship with medical practitioners
}
