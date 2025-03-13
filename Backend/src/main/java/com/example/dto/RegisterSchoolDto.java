package com.example.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import com.example.model.Address;

import lombok.Data;

@Data
public class RegisterSchoolDto {

    @NotEmpty(message = "School Name is required")
    private String schoolName;

    @NotEmpty(message = "Contact Number is required")
    private String contactNumber;

    @Email(message = "School Email should be valid")
    @NotEmpty(message = "School Email is required")
    private String schoolEmail;

    @NotEmpty(message = "School Type is required")
    private String schoolType;  

    @NotEmpty(message = "School Password is required")
    @Size(min = 6, message = "Password should have at least 6 characters")
    private String schoolPassword;

    @NotEmpty(message = "Address is required")
    private Address address;

}
