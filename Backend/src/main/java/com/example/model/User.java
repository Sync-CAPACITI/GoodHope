package com.example.model;

import jakarta.persistence.*;

import lombok.*;

import java.util.List;



@Data
@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "user_type", discriminatorType = DiscriminatorType.STRING)
@Table( name = "Users")
public abstract class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer userId;

    @Setter
    @Column(nullable = false, unique = true)
    private String name;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String phoneNumber;


    @Column(nullable = false)
    private  String password;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Role role;  // Enum for the role (Admin, Caregiver, Medical Practitioner, School, Guardian)

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
    private Address addressDetails;

    @OneToMany(mappedBy = "user")
    private List<Payment> payments;


    public enum Role {
        ADMIN, CAREGIVER, MEDICAL_PRACTITIONER, SCHOOL, GUARDIAN
    }

}
