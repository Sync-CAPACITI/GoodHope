package com.example.dto;

import lombok.*;

@Data
public class MedicalPractitionerDTO {
    private String name;
    private String email;
    private String contactNumber;
    private String password;
    private String medicalSpecialization;
    private String medicalQualification;
    private int medicalYearsOfEx;
    private AddressDTO medicalAddress; // Ensure this matches the nested object
    private Long schoolId; // Ensure this matches the "schoolId" key in JSON
}


