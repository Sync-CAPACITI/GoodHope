package com.example.dto;
import lombok.Data;

@Data
public class GuardianDTO {
    private String name;
    private String email;
    private String phoneNumber;
    private String password;
    private int age;
    private String relationship;
    private AddressDTO address;
}
