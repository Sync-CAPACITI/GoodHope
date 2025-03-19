package com.example.model;
import jakarta.persistence.*;
import lombok.*;
import java.util.List;

@Data
@Entity
@Table(name = "Schools")
@PrimaryKeyJoinColumn(name = "user_id")
public class School extends User {

    @Column(nullable = false)
    private String schoolType; // Public / Private

    @OneToMany(mappedBy = "school", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<MedicalPractitioner> affiliatedMedicalPractitioners;
}
