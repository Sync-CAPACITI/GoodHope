package com.example.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import com.example.Components.JwtRequestFilter;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;


@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Autowired
    private JwtRequestFilter jwtRequestFilter;  // Custom filter to validate JWT

    @Autowired
    private UserDetailsService userService;  // To load user details for authentication

    // Define the Security Filter Chain for the application
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests((requests) -> requests
                .requestMatchers("/h2-console/**").permitAll() // Allow access to the H2 console
                .requestMatchers("/auth/login", "/auth/register").permitAll() // Allow login and register without authentication
                .anyRequest().authenticated() // Protect other requests
            )
            .formLogin((form) -> form
                .loginPage("/auth/login")  // Specify a custom login page (if needed)
                .permitAll()  // Allow public access to the login page
            )
            .logout((logout) -> logout
                .permitAll() // Allow public access to logout
            )
            .headers(headers -> headers
                .frameOptions(frameOptions -> frameOptions
                    .disable()  // Disable frame options (to allow H2 console in a frame)
                )
            )
            .csrf(csrf -> csrf
                .ignoringRequestMatchers("/h2-console/**")  // Disable CSRF for H2 console
            );

        // Add JWT filter before UsernamePasswordAuthenticationFilter
        http.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();  // Return the configured SecurityFilterChain
    }


    // Define PasswordEncoder bean (used for password hashing)
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();  // Use BCrypt for password encoding
    }

    // Define the AuthenticationManager bean
    @Bean
    public AuthenticationManager authenticationManager(HttpSecurity http) throws Exception {
        return http.getSharedObject(AuthenticationManagerBuilder.class)
                   .userDetailsService(userService)  // Set UserService for user details
                   .passwordEncoder(passwordEncoder())  // Use BCryptPasswordEncoder
                   .and()
                   .build();
    }
}