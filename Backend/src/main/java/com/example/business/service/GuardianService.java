package com.example.business.service;

import com.example.dto.AddressDTO;
import com.example.dto.GuardianDTO;
import com.example.model.Address;
import com.example.model.Child;
import com.example.model.Guardian;
import com.example.data.repository.ChildRepository;
import com.example.data.repository.GuardianRepository;
import com.example.data.repository.AddressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import jakarta.transaction.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class GuardianService {

    @Autowired
    private GuardianRepository guardianRepository;

    @Autowired
    private ChildRepository childRepository;

    @Autowired
    private AddressRepository addressRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // Register a new guardian
    @Transactional
    public Guardian registerGuardian(GuardianDTO dto) {
        // Map DTO to Guardian entity
        Guardian guardian = new Guardian();
        guardian.setName(dto.getName());
        guardian.setEmail(dto.getEmail());
        guardian.setPhoneNumber(dto.getPhoneNumber());
        guardian.setPassword(passwordEncoder.encode(dto.getPassword()));
        guardian.setAge(dto.getAge());
        guardian.setRelationship(dto.getRelationship());
        guardian.setSchoolType(dto.getSchoolType());
        guardian.setRole("GUARDIAN");

        // Save guardian first to generate ID
        guardian = guardianRepository.save(guardian);

        // Link children to guardian
        if (dto.getChildIds() != null) {
            List<Child> children = childRepository.findAllById(dto.getChildIds());
            for (Child child : children) {
                child.setGuardian(guardian); // Set the guardian for each child
            }
            guardian.setChildren(children);
        }
        // Handle address
        AddressDTO addressDTO = dto.getAddress();
        Address address = new Address();
        address.setUser(guardian); // Associate address with the guardian
        address.setStreet(addressDTO.getStreet());
        address.setCity(addressDTO.getCity());
        address.setState(addressDTO.getState());
        address.setPostalCode(addressDTO.getPostalCode());
        address.setCountry(addressDTO.getCountry());

        // Save the address
        addressRepository.save(address);

        return guardian;
    }

    // // Fetch guardian details
    // public GuardianDTO getGuardianById(Integer id) {
    //     Guardian guardian = guardianRepository.findById(id)
    //             .orElseThrow(() -> new RuntimeException("Guardian not found"));

    //     // Map Guardian entity to DTO
    //     GuardianDTO dto = new GuardianDTO();
    //     dto.setName(guardian.getName());
    //     dto.setEmail(guardian.getEmail());
    //     dto.setPhoneNumber(guardian.getPhoneNumber());
    //     dto.setAge(guardian.getAge());
    //     dto.setRelationship(guardian.getRelationship());
    //     dto.setSchoolType(guardian.getSchoolType());

    //     // Map Address entity to AddressDTO
    //     if (guardian.getAddressDetails() != null) {
    //         Address address = guardian.getAddressDetails();
    //         AddressDTO addressDTO = new AddressDTO();
    //         addressDTO.setStreet(address.getStreet());
    //         addressDTO.setCity(address.getCity());
    //         addressDTO.setState(address.getState());
    //         addressDTO.setPostalCode(address.getPostalCode());
    //         addressDTO.setCountry(address.getCountry());
    //         dto.setAddress(addressDTO);
    //     }

    //     if (guardian.getChildren() != null) {
    //         dto.setChildIds(
    //             guardian.getChildren().stream()
    //                 .map(Child::getChildId)
    //                 .collect(Collectors.toList())
    //         );
    //     }

    //     return dto;
    // }
}
