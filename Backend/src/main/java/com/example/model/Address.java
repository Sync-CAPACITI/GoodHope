package com.example.model;

import lombok.Data;
import jakarta.persistence.*;




@Entity
@Data

public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer addressId;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    
    private String street;
    private String city;
    private String state;
    private String postalCode;
    private String country;

}
