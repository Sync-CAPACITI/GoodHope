package com.example.model;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@DiscriminatorValue("MEDICAL_PRACTITIONER")
public class MedicalPractitioner extends User {

    private String specialization; // Therapist, Psychologist, Speech Therapist
    private String qualification;
    private Integer yearsOfExperience;
    private String affiliatedFacility; // Hospital or Independent


    @ManyToOne
    @JoinColumn(name = "school_id") // This establishes the relationship
    private School school;
    // Getters and Setters
}
