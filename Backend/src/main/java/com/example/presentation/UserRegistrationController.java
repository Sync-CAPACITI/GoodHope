package com.example.presentation;

import com.example.dto.UserRegistrationDto;
import com.example.business.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import javax.validation.Valid;

@Controller
public class UserRegistrationController {

    @Autowired
    private UserService userService;

    // Display the registration form
    @GetMapping("/registration")
    public String showRegistrationForm(Model model) {
        model.addAttribute("user", new UserRegistrationDto());
        return "registration";
    }

    // Handle form submission (POST)
    @PostMapping("/registration")
    public String registerUserAccount(@ModelAttribute("user") @Valid UserRegistrationDto userDto, BindingResult result, Model model) {
        if (result.hasErrors()) {
            return "registration";  // If there are validation errors, return to the registration page
        }

        try {
            // Call service to register the user
            userService.registerNewUserAccount(userDto);
            model.addAttribute("successMessage", "User successfully registered!");
            return "registration";  // Show success message on the same page
        } catch (Exception e) {
            model.addAttribute("error", e.getMessage());
            return "registration";  // Show error message if registration fails
        }
    }
}
