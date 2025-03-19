package com.example.dto;
import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class GuardianDTO {


    private String name;


    private String email;


    private String phoneNumber;


    private String password;

    private int age;

    private String relationship;

    private String schoolType;

    private List<Integer> childIds; // IDs of children linked to the guardian

    private AddressDTO address;
}