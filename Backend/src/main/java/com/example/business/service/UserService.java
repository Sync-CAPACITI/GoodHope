package com.example.business.service;

import com.example.data.repository.UserRepository;
import com.example.data.repository.SchoolRepository;
import com.example.dto.RegisterSchoolDto;
import com.example.dto.UserRegistrationDto;
import com.example.model.Address;
import com.example.model.School;
import com.example.model.User;

import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.validation.Valid;
import java.util.Optional;

@Data
@Service
public class UserService implements UserDetailsService {  // Implement UserDetailsService

    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private SchoolRepository schoolRepository;

    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserService(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<User> user = userRepository.findByEmail(email);
        if (user.isEmpty()) {
            throw new UsernameNotFoundException("User not found with email: " + email);
        }

        return org.springframework.security.core.userdetails.User.builder()
                .username(user.get().getEmail()) // Set email as username
                .password(user.get().getPassword()) // Password should be encoded
                .roles(user.get().getRole().name()) // Use stored role
                .build();
    }

    public Optional<User> loginUser(String email, String password) {
        Optional<User> user = userRepository.findByEmail(email);
        if (user.isPresent() && passwordEncoder.matches(password, user.get().getPassword())) {
            return user;
        }
        return Optional.empty();
    }

    public void registerNewUserAccount(@Valid UserRegistrationDto userDto) {

    }

    public void registerNewSchoolAccount(@Valid RegisterSchoolDto userDto) {
        School school = new School();
    
        school.setEmail(userDto.getSchoolEmail());
        school.setPassword(passwordEncoder.encode(userDto.getSchoolPassword())); // Ensure password is encoded
        school.setRole(User.Role.SCHOOL); // If you have different roles for different types of users
        school.setSchoolName(userDto.getSchoolName());
        school.setContactNumber(userDto.getContactNumber());
        school.setSchoolType(userDto.getSchoolType());
        school.setAddressDetails(userDto.getAddress()); // Make sure the Address is handled correctly
    
        schoolRepository.save(school);
    }
    

}

