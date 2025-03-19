package com.example.model;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Entity
@DiscriminatorValue("GUARDIAN")// This will set the role of the Guardian when stored in the user table
public class Guardian extends User {

    @Column(nullable = true)
    private int age;

    @Column(nullable = false)
    private String relationship;

    @Column(nullable = false)
    private String schoolType;
    // Getters and Setters
}