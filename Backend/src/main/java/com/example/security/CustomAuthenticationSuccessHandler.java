// package com.example.security;

// import org.springframework.security.core.Authentication;
// import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
// import org.springframework.stereotype.Component;

// import jakarta.servlet.ServletException;
// import jakarta.servlet.http.HttpServletRequest;
// import jakarta.servlet.http.HttpServletResponse;

// import java.io.IOException;

// @Component
// public class CustomAuthenticationSuccessHandler implements AuthenticationSuccessHandler {


//     @Override
//     public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
//             Authentication authentication) throws IOException, ServletException {
//                 String role = authentication.getAuthorities().toString();
//                 if (role.contains("School")) {
//                     response.sendRedirect("/school/dashboard");
//                 } else if (role.contains("ROLE_TEACHER")) {
//                     response.sendRedirect("/teacher/dashboard");
//                 } else if (role.contains("ROLE_STUDENT")) {
//                     response.sendRedirect("/student/dashboard");
//                 }
//     }
// }
