package com.example.presentation;

import com.example.dto.UserRegistrationDto;
import com.example.business.service.UserService;
import com.example.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import javax.validation.Valid;

@Controller
public class MainController {

    @Autowired
    private UserService userService;

    @GetMapping("/login")
    public String showLoginForm(Model model) {
        User user = new User();
        model.addAttribute("user", user);
        System.out.println("User object added to model: " + user);
        return "login";
    }
    

    // Show the registration form
    @GetMapping("/registration")
    public String showRegistrationForm(Model model) {
        model.addAttribute("user", new UserRegistrationDto());
        return "registration";
    }

    // Handle user registration
    @PostMapping("/registration")
    public String registerUser(@ModelAttribute("user") @Valid UserRegistrationDto userDto, BindingResult result, Model model) {
        if (result.hasErrors()) {
            return "registration";
        }

        try {
            userService.registerNewUserAccount(userDto);
            model.addAttribute("successMessage", "User successfully registered!");
        } catch (Exception e) {
            model.addAttribute("error", e.getMessage());
        }
        return "registration";
    }
}
