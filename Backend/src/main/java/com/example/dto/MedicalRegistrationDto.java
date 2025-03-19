package com.example.dto;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class MedicalRegistrationDto {
    
    @NotEmpty(message = "Medical Provider Name is required")
    private String medicalName;

    @Email(message = "Email should be valid")
    @NotEmpty(message = "Email is required")
    private String medicalEmail;

    @NotEmpty(message = "Contact Number is required")
    private String medicalContact;

    @NotEmpty(message = "Password is required")
    @Size(min = 6, message = "Password should have at least 6 characters")
    private String medicalPassword;

    @NotEmpty(message = "Specialization is required")
    private String medicalSpecialization;

    @NotEmpty(message = "Qualification is required")
    private String medicalQualification;

    @NotEmpty(message = "Years Of Experience Number is required")
    private Integer medicalYearsOfEx;

    @JsonProperty("medAddress")
    private AddressDTO medAddress;

}