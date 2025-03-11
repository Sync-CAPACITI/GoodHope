package com.example.model;
import jakarta.persistence.*;

@Entity
@DiscriminatorValue("GUARDIAN")// This will set the role of the Guardian when stored in the user table
public class Guardian extends User {

    // You can add any Guardian-specific fields here, if needed
    private String relationshipToChild;  // For example: Parent, Uncle, Aunt, etc.

    private String occupation;  // Occupation of the Guardian (optional)

    // Getters and Setters
}