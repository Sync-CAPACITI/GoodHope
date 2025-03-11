package com.example.business.service;

import com.example.data.repository.UserRepository;
import com.example.dto.UserRegistrationDto;
import com.example.model.User;
import com.example.model.User.Role;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public void registerNewUserAccount(UserRegistrationDto userDto) throws Exception {
        User newUser = new User();
        newUser.setName(userDto.getName());
        newUser.setEmail(userDto.getEmail());
        newUser.setPhoneNumber(userDto.getPhoneNumber());
        newUser.setAddress(userDto.getAddress());
        newUser.setRole(Role.valueOf(userDto.getRole()));  // Convert string role to enum

        // Save user in database
        userRepository.save(newUser);
    }
}
