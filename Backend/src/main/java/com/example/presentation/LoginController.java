package com.example.presentation;

import com.example.model.School;
import com.example.model.MedicalPractitioner;
import com.example.data.repository.SchoolRepository;
import com.example.dto.LoginRequest;
import com.example.data.repository.MedicalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class LoginController {

    @Autowired
    private SchoolRepository schoolRepository;

    @Autowired
    private MedicalRepository medicalRepository;

    @Autowired
    private AuthenticationManager authenticationManager; // Use AuthenticationManager to authenticate


    @PostMapping("/api/app/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        String email = loginRequest.getEmail();
        String password = loginRequest.getPassword();

        // Check if the user exists in any of the repositories
        Optional<School> school = schoolRepository.findBySchoolEmail(email);
        Optional<MedicalPractitioner> medical = medicalRepository.findByMedicalEmail(email);

        // If the user exists, authenticate and set their role
        if (school.isPresent() || medical.isPresent()) {
            return authenticateUser(email, password);
        } else {
            return ResponseEntity.badRequest().body("User not found.");
        }
    }

    private ResponseEntity<?> authenticateUser(String email, String password) {
        try {
            // Create the authentication token
            UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(email, password);

            // Use the AuthenticationManager to authenticate the user
            Authentication authentication = authenticationManager.authenticate(authToken);

            // Set the authentication in the security context
            SecurityContextHolder.getContext().setAuthentication(authentication);

            // Dynamically assign the role based on the input (School or Medical)
            String userRole = getUserRole(authentication);

            // Respond with the user's role
            return ResponseEntity.ok().body("{\"role\": \"" + userRole + "\"}");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Invalid credentials.");
        }
    }

    private String getUserRole(Authentication authentication) {
        // Dynamically assign role based on the authenticated user
        if (authentication.getPrincipal() instanceof User) {
            // You can also customize role retrieval here, depending on your UserDetails implementation
            return ((User) authentication.getPrincipal()).getAuthorities().toString();
        }
        return "Unknown";
    }
}
