package com.example.Components;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.NonNull;

public class JwtRequestFilter extends OncePerRequestFilter{

    @Autowired
    private JwtUtil jwtUtil;  // Utility class for handling JWT

    @Override
    @NonNull
    protected void doFilterInternal( HttpServletRequest request,  HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {

        // Get the JWT token from the Authorization header
        String token = request.getHeader("Authorization");

        if (token != null && token.startsWith("Bearer ")) {
            token = token.substring(7);  // Remove "Bearer " prefix

            String username = jwtUtil.extractUsername(token);  // Extract the username from the token

            if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
                // You can further validate the token (e.g., check if it's expired)
                if (jwtUtil.validateToken(token, username)) {
                    // Set the authentication context here
                    // Optionally, load user details from the database (e.g., UserDetailsService)
                    // SecurityContextHolder.getContext().setAuthentication(authToken);
                }
            }
        }

        filterChain.doFilter(request, response);  // Continue with the filter chain
    }
}
