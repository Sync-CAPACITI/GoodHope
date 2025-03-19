package com.example.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Child {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    
    private String name;
    private String surname;
    private int age;
    private int grade;
    private String specialNeedsCategory;
    private String otherNeeds;
    private String medicalHistory;
    
    @ManyToOne
    @JoinColumn(name = "guardian_id")
    private Guardian guardian;
}