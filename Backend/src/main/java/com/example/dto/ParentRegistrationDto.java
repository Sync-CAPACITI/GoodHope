package com.example.dto;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import lombok.Data;

@Data
public class ParentRegistrationDto {

    @NotEmpty(message = "Full Name is required")
    private String fullName;

    @NotEmpty(message = "Child's Age is required")
    private String childsAge;  // You might want to consider using an Integer if you want to perform age validation.

    @NotEmpty(message = "Contact Number is required")
    private String contactNumber;

    @NotEmpty(message = "Relationship to the Child is required")
    private String relationshipToChild;

    @NotEmpty(message = "Preferred Schools (Public/Private) is required")
    private String preferredSchools;  // Public/Private

    @NotEmpty(message = "Public School preference is required")
    private String publicSchool;  // Option for Public School preference

    @NotEmpty(message = "Number of Dependents is required")
    private String numberOfDependents;  // You could make this an Integer for better validation.

    @NotEmpty(message = "Password is required")
    @Size(min = 6, message = "Password should have at least 6 characters")
    private String password;
}