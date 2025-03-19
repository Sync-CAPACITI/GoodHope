package com.example.model;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "MedicalPractitioners")
@PrimaryKeyJoinColumn(name = "user_id")
public class MedicalPractitioner extends User {

    private String specialization; // Therapist, Psychologist, Speech Therapist
    
 
    private String qualification;
    @Column(nullable = true)
    private String businessName; // Optional
    
 
    private Integer yearsOfExperience;
    // private String affiliatedFacility; // Hospital or Independent


    @ManyToOne
    @JoinColumn(name = "school_id") // This establishes the relationship
    private School school;
    // Getters and Setters
}
