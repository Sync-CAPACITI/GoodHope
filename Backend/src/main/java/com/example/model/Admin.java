package com.example.model;
import jakarta.persistence.*;


@Entity
@DiscriminatorValue("ADMIN")
public class Admin extends User {
    // You can add any Admin-specific fields here if needed

    // Getters and Setters
}