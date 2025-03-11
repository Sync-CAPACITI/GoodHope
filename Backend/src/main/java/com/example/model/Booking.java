package com.example.model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer bookingId;

    @ManyToOne
    @JoinColumn(name = "caregiver_id")
    private User caregiver; // Assuming Caregiver is a type of User

    @ManyToOne
    @JoinColumn(name = "school_id")
    private School school;

    @ManyToOne
    @JoinColumn(name = "practitioner_id")
    private MedicalPractitioner practitioner;

    private Date bookingDate;

    @Enumerated(EnumType.STRING)
    private Status status; // Enum for status (Pending, Confirmed, Cancelled)

    // Getters and Setters

    public enum Status {
        PENDING, CONFIRMED, CANCELLED
    }
}