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
    private  String password;

    @Enumerated(EnumType.STRING)
    private Role role;  // Enum for the role (Admin, Caregiver, Medical Practitioner, School, Guardian)

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
    private Address addressDetails;

    @OneToMany(mappedBy = "user")
    private List<Payment> payments;

    public String getPassword() {
        return this.password;
    }

    public enum Role {
        ADMIN, CAREGIVER, MEDICAL_PRACTITIONER, SCHOOL, GUARDIAN
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public Address getAddressDetails() {
        return addressDetails;
    }

    public void setAddressDetails(Address addressDetails) {
        this.addressDetails = addressDetails;
    }

    public List<Payment> getPayments() {
        return payments;
    }

    public void setPayments(List<Payment> payments) {
        this.payments = payments;
    }
}
