package com.example.dto;

import lombok.Data;

@Data
public class SchoolDTO {
    private String name;
    private String email;
    private String phoneNumber;
    private String password;
    private String schoolType;
    private AddressDTO address;
}
