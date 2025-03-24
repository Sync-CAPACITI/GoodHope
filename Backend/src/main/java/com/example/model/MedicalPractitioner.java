package com.example.model;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@DiscriminatorValue("MEDICAL_PRACTITIONER")
public class MedicalPractitioner  {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer medicalId;

    private String medicalName;

    private String medicalEmail;

    private String medicalPassword;

    private String contactNumber;

    private String specialization; // Therapist, Psychologist, Speech Therapist
    
 
    private String qualification;
    
 
    private Integer yearsOfExperience;
    // private String affiliatedFacility; // Hospital or Independent
    
    @OneToOne(cascade = CascadeType.ALL)  // Cascade the save operation
    @JoinColumn(name = "address_id")
    private Address address;

    @Column(nullable = false)
    private String role; // Could be "School", "Teacher", "Student", etc.

    @ManyToOne
    @JoinColumn(name = "school_id") // This establishes the relationship
    private School school;
    // Getters and Setters
}
