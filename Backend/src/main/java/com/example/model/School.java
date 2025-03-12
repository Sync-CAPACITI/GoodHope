package com.example.model;

import jakarta.persistence.*;
import lombok.*;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@DiscriminatorValue("SCHOOL")
public class School extends User {

    @Column(nullable = false)
    private String schoolName;

    @Column(nullable = false)
    private String contactNumber;

    @Column(nullable = false)
    private String schoolType;  // Public / Private

    @Column(nullable = false)
    private String location;


    @OneToMany(mappedBy = "school", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<MedicalPractitioner> affiliatedMedicalPractitioners;
    
    // Getters and Setters
}
