package com.example.presentation;

import com.example.dto.UserRegistrationDto;

import com.example.model.User;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class MainController {

    // @Autowired
    // private UserService userService;


    // @PostMapping("/login")
    // public ResponseEntity<?> loginUser(@RequestBody User user) {
    //     Optional<User> loggedInUser = userService.loginUser(user.getEmail(), user.getPassword());
    //     if (loggedInUser.isPresent()) {
    //         return ResponseEntity.ok("Login successful!");
    //     }
    //     return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
    // }

    
}
