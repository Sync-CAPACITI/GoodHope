package com.example.model;

import jakarta.persistence.*;

import lombok.*;

import java.util.List;



@Data
@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@Table( name = "Users")
public abstract class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer userId;

    @Setter
    
    private String name;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String phoneNumber;

    @Column(nullable = true)
    private String username;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String role; // Could be "School", "Teacher", "Student", etc.

    @OneToMany(mappedBy = "user")
    private List<Payment> payments;
}