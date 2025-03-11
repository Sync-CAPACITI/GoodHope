package com.example.model;
import jakarta.persistence.*;


@Entity
@DiscriminatorValue("MEDICAL_PRACTITIONER")
public class MedicalPractitioner extends User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    private String specialization; // Therapist, Psychologist, Speech Therapist
    private String qualification;
    private Integer yearsOfExperience;
    private String affiliatedFacility; // Hospital or Independent

    // Getters and Setters
}
