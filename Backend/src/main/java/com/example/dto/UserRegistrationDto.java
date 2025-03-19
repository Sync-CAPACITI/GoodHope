package com.example.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;

import lombok.Data;


@Data
public class UserRegistrationDto {

    @NotEmpty(message = "Name is required")
    private String name;

    @Email(message = "Email should be valid")
    @NotEmpty(message = "Email is required")
    private String email;

    @NotEmpty(message = "Phone number is required")
    private String phoneNumber;

    @NotEmpty(message = "Address is required")
    private String address;



    private String role;  

}
