package com.example.model;
import jakarta.persistence.*;
import java.util.List;
import lombok.Data;

@Data
@Entity
@DiscriminatorValue("SCHOOL")
public class School extends User {



    private String schoolName;
    private String schoolType; // Public, Private, Special Needs
    private Integer capacity;
    private Float rating;

    @OneToMany(mappedBy = "school")
    private List<MedicalPractitioner> affiliatedMedicalPractitioners;

    // Getters and Setters
}
