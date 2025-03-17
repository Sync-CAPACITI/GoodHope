package com.example.presentation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.business.service.SchoolService;
import com.example.dto.RegisterSchoolDto;
import com.example.model.School;



@RestController
@RequestMapping("/api/register")
public class MainController { 

    @Autowired
    private SchoolService schoolService;

        
    
    


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
