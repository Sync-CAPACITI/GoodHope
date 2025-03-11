package com.example.business.service;

import com.example.data.repository.UserRepository;
import com.example.dto.UserRegistrationDto;
import com.example.model.User;

import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.validation.Valid;
import java.util.Optional;

@Data
@Service
public class UserService implements UserDetailsService {  // Implement UserDetailsService

    @Autowired
    private UserRepository userRepository;

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

    public void registerNewUserAccount(@Valid UserRegistrationDto userDto) {
    }
}
