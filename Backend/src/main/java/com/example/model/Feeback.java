package com.example.model;
import jakarta.persistence.*;

@Entity
public class Feedback {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer feedbackId;

    @ManyToOne
    @JoinColumn(name = "booking_id")
    private Booking booking;

    @Enumerated(EnumType.STRING)
    private GivenBy givenBy; // Enum for Caregiver or Medical Practitioner

    private Integer rating; // Rating 1-5
    private String comments;

    // Getters and Setters

    public enum GivenBy {
        CAREGIVER, MEDICAL_PRACTITIONER
    }
}
