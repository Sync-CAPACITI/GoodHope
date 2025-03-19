package com.example.business.service;

import com.example.dto.SchoolDTO;
import com.example.model.Address;
import com.example.model.School;
import com.example.data.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SchoolService {

    @Autowired
    private SchoolRepository schoolRepository;

    @Autowired
    private AddressRepository addressRepository;

    public School registerSchool(SchoolDTO schoolDTO) {
        School school = new School();
        school.setName(schoolDTO.getName());
        school.setEmail(schoolDTO.getEmail());
        school.setPhoneNumber(schoolDTO.getPhoneNumber());
        school.setPassword(schoolDTO.getPassword());
        school.setSchoolType(schoolDTO.getSchoolType());
        school.setRole("SCHOOL");

        // Save School first
        School savedSchool = schoolRepository.save(school);

        // Save Address
        Address address = new Address();
        address.setStreet(schoolDTO.getAddress().getStreet());
        address.setCity(schoolDTO.getAddress().getCity());
        address.setState(schoolDTO.getAddress().getState());
        address.setPostalCode(schoolDTO.getAddress().getPostalCode());
        address.setCountry(schoolDTO.getAddress().getCountry());
        address.setUser(savedSchool);

        addressRepository.save(address);

        return savedSchool;
    }
}
