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
public class MedicalPractitioner extends User {

    @Column(nullable = false)
    private String specialization;

    @Column(nullable = false)
    private String qualification;

    @Column(nullable = false)
    private int yearsOfExperience;

    @ManyToOne
    @JoinColumn(name = "school_id")  // Ensure consistency
    private School school;  // Was `affiliatedSchool`, now changed to `school`
}
