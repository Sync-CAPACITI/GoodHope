package com.example.dto;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import lombok.Data;

@Data
public class MedicalRegistrationDto {

    @NotEmpty(message = "Medical Provider Name is required")
    private String medicalProviderName;

    @Email(message = "Email should be valid")
    @NotEmpty(message = "Email is required")
    private String email;

    @NotEmpty(message = "Contact Number is required")
    private String contactNumber;

    @NotEmpty(message = "Password is required")
    @Size(min = 6, message = "Password should have at least 6 characters")
    private String password;

    @NotEmpty(message = "Medical Insurance Number is required")
    private String medicalInsuranceNumber;
}