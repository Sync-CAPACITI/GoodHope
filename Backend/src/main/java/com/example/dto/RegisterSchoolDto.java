package com.example.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class RegisterSchoolDto {
    
    private String schoolName;

   
    private String contactNumber;

   
    private String schoolEmail;

   
    private String schoolType;  

    
    private String schoolPassword;
    
    @JsonProperty("address") 
    private AddressDTO address;

}
