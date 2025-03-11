package com.example.model;
import jakarta.persistence.*;
import java.util.Date;

@Entity
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer paymentId;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    private Float amount;
    private Date paymentDate;
    private String paymentMethod;
}