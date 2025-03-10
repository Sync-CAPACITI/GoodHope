package com.example.Authenticator;


import com.example.Components.JwtUtil;
import com.example.dto.UserRegistrationDto;
import com.example.model.User;
import com.example.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;


@Controller
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

    // Register a new user (POST method)
    @PostMapping("/registration")
    public String registerUser(@ModelAttribute("user") User user, Model model) {
    // Check if the username already exists in the database
    if (userService.existsByUsername(user.getUsername())) {
        model.addAttribute("error", "User already exists");
        return "registration"; // Return to the registration page with an error message
    }

        // Assuming that 'user' object contains the necessary data to create a UserRegistrationDto
        // Convert 'user' (from the registration form) into a UserRegistrationDto
        UserRegistrationDto userDto = new UserRegistrationDto();
        userDto.setUsername(user.getUsername());
        userDto.setPassword(user.getPassword());

        // Register the new user (this will handle saving the user)
        userService.registerNewUserAccount(userDto);

        model.addAttribute("success", "User registered successfully");
        return "registration"; // Redirect to registration page with success message
    }

    // Login user and generate JWT token (POST method)
    @PostMapping("/login")
    public String loginUser(@RequestBody User user, Model model) {
        User foundUser = userService.findByUsername(user.getUsername())
                .orElseThrow(() -> new RuntimeException("User not found"));

        // Validate password (in production, never use plain password comparison)
        if (foundUser.getPassword().equals(user.getPassword())) {  // In a real-world scenario, use passwordEncoder.matches()
            String token = jwtUtil.generateToken(foundUser.getUsername());
            model.addAttribute("token", token);
            return "login"; // Return JWT token on successful login (or you can redirect)
        }

        model.addAttribute("error", "Invalid credentials");
        return "login";
    }
}