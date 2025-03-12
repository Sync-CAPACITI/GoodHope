package com.example.presentation;

import com.example.dto.UserRegistrationDto;
import com.example.business.service.UserService;
import com.example.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000") // Allow requests from React app
public class MainController {

    @Autowired
    private UserService userService;

    // Login endpoint
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User user) {
        System.out.println("User attempting login: " + user.getEmail());
        // Authentication logic here (e.g., checking username/password)
        return ResponseEntity.ok("User logged in successfully!");
    }

    // Show registration form (not needed for React, but keeping it as an API)
    @GetMapping("/registration")
    public ResponseEntity<?> getRegistrationForm() {
        return ResponseEntity.ok("Send user data via POST to register.");
    }

    // Handle user registration
    @PostMapping("/registration")
    public ResponseEntity<?> registerUser(@RequestBody @Valid UserRegistrationDto userDto) {
        try {
            userService.registerNewUserAccount(userDto);
            return ResponseEntity.ok("User successfully registered!");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error: " + e.getMessage());
        }
    }
}
