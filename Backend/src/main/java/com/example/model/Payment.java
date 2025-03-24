package com.example.model;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Data

@Entity
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer paymentId;


    private Float amount;
    private Date paymentDate;
    private String paymentMethod;
}