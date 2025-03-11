package com.example.presentation;


import com.example.security.JwtUtil;
import com.example.model.User;
import com.example.business.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;


@RestController
//@CrossOrigin(htt)
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtUtil;

    // Show the login page
    @GetMapping("/login")
    public String homePage() {
        return "login";  // Render the login Thymeleaf template
    }

    // Show the registration form
    @GetMapping("/registration")
    public String showRegistrationForm(Model model) {
        model.addAttribute("user", new User());
        return "registration"; // Render the registration Thymeleaf template
    }



}