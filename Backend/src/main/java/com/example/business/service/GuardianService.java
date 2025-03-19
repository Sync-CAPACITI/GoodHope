package com.example.business.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.data.repository.AddressRepository;
import com.example.data.repository.GuardianRepository;
import com.example.dto.GuardianDTO;
import com.example.model.Address;
import com.example.model.Guardian;
import com.example.model.School;

@Service
public class GuardianService {

    @Autowired
    private GuardianRepository guardianRepository;

    @Autowired
    private AddressRepository addressRepository;

     // This will save the guardian entity to the database
    public Guardian registerGuardian(GuardianDTO guardianDTO) {
           
       
        Guardian guardian = new Guardian(); // new enetity to save 
        guardian.setName(guardianDTO.getName());
        guardian.setAge(guardianDTO.getAge());
        guardian.setPhoneNumber(guardianDTO.getPhoneNumber());
        guardian.setRelationship(guardianDTO.getRelationship());
       // guardian.setSchoolType(guardianDTO.getPrefferedSchool());
        guardian.setEmail(guardianDTO.getEmail());
        guardian.setPassword(guardianDTO.getPassword());
        guardian.setRole("GUARDIAN");

        // Save Guardian first
        Guardian savedGuardian = guardianRepository.save(guardian);


        Address address = new Address();
        address.setStreet(guardianDTO.getAddress().getStreet());
        address.setCity(guardianDTO.getAddress().getCity());
        address.setState(guardianDTO.getAddress().getState());
        address.setPostalCode(guardianDTO.getAddress().getPostalCode());
        address.setCountry(guardianDTO.getAddress().getCountry());
        address.setUser(savedGuardian);

        addressRepository.save(address);

        return savedGuardian;
    }

    public Guardian findByEmail(String name) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findByEmail'");
    }

    
}
