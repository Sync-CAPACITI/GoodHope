package com.example.model;

import jakarta.persistence.*;
import java.util.List;
import lombok.*;

@Data
@Entity
@DiscriminatorValue("SCHOOL")
public class School{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer schoolId;

    @Column(nullable = false)
    private String schoolName;

    @Column(nullable = false)
    private String schoolEmail;

    @Column(nullable = false)
    private String schoolPassword;

    @Column(nullable = false)
    private String schoolContact;

    @Column(nullable = false)
    private String schoolType;

    @OneToOne(cascade = CascadeType.ALL)  // Cascade the save operation
    @JoinColumn(name = "address_id")
    private Address address;

    @Column(nullable = false)
    private String role; // Could be "School", "Teacher", "Student", etc.

    @OneToMany(mappedBy = "school", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<MedicalPractitioner> affiliatedMedicalPractitioners;
    

}
