package com.example.dto;

import lombok.Data;

@Data
public class ChildDTO {
    private String childName;
    private String childSurname;
    private int childAge;
    private int childGrade;
    private String specialNeedsCategory;
    private String otherCategory; // Field for "Other" special needs
    private String medicalHistory;
    private Integer guardianId;  // This will be passed from the frontend
}
