package com.example.model;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;



@Data
@Table(name = "Users")
@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "user_type", discriminatorType = DiscriminatorType.STRING)
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer userId;

    private String name;
    private String email;
    private String phoneNumber;
    private String address;

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