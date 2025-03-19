package com.example.model;

import lombok.Data;
import jakarta.persistence.*;




@Data
@Entity
@Table(name = "Address")
public class Address {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer addressId;

    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "userId")
    private User user;

    private String street;
    private String city;
    private String state;
    private String postalCode;
    private String country;
}