package com.example.dto;

import lombok.Data;

@Data
public class MedicalPractitionerDTO {
    private String medicalName;
    private String medicalEmail;
    private String medicalContact;
    private String medicalPassword;
    private String medicalSpecialization;
    private String medicalQualification;
    private int medicalYearsOfEx;
    
    private AddressDTO medicalAddress;
}

