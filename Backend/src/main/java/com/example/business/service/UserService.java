package com.example.business.service;

import com.example.data.repository.SchoolRepository;
import com.example.data.repository.UserRepository;
import com.example.dto.RegisterSchoolDto;
import com.example.model.School;
import com.example.model.User;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


@Service
public class UserService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private SchoolRepository schoolRepository;

    private final PasswordEncoder passwordEncoder;

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
                .username(user.get().getEmail())
                .password(user.get().getPassword())
                .roles(user.get().getRole())
                .build();
    }

    public Optional<User> loginUser(String email, String password) {
        Optional<User> user = userRepository.findByEmail(email);
        if (user.isPresent() && passwordEncoder.matches(password, user.get().getPassword())) {
            return user;
        }
        return Optional.empty();
    }
    
    public void registerNewSchoolAccount(RegisterSchoolDto userDto) {
        School school = new School();
        school.setEmail(userDto.getSchoolEmail());
        school.setPassword(passwordEncoder.encode(userDto.getSchoolPassword()));
        school.setRole("School");
        school.setName(userDto.getSchoolName());
        school.setPhoneNumber(userDto.getContactNumber());
        school.setSchoolType(userDto.getSchoolType());
        school.setAddressDetails(userDto.getSchoolAddress());
        schoolRepository.save(school);
    }
}


