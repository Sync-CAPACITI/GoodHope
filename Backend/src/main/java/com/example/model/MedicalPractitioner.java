package com.example.model;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@DiscriminatorValue("MEDICAL")
@Table(name = "MedicalPractitioners") 
public class MedicalPractitioner { 
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) 
    private Long id; 
    private String name; 
    private String email; 
    private String contactNumber; 
    private String password; 
    private String medicalSpecialization; 
    private String medicalQualification; 
    private int medicalYearsOfEx; 
    @ManyToOne @JoinColumn(name = "school_id") // Ensure consistency 
    private School school; // Was `affiliatedSchool`, now changed to `school` 
    @Embedded private Address medicalAddress;
  
}