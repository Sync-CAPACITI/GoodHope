package com.example.security;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.example.business.service.CustomUserDetailsService;

// @Configuration
// @EnableWebSecurity
// public class SecurityConfig {

//     @Autowired
//     private CustomUserDetailsService customUserDetailsService;

//     // @Autowired
//     // private BCryptPasswordEncoder bCryptPasswordEncoder;

//     // Define BCryptPasswordEncoder bean
//     @Bean
//     public BCryptPasswordEncoder bCryptPasswordEncoder() {
//         return new BCryptPasswordEncoder();
//     }

//     // Define AuthenticationManager bean
//     @Bean
//     public AuthenticationManager authenticationManager(HttpSecurity http) throws Exception {
//         return http.getSharedObject(AuthenticationManagerBuilder.class)
//                    .userDetailsService(customUserDetailsService)
//                    .passwordEncoder(bCryptPasswordEncoder())
//                    .and()
//                    .build();
//     }

//     @Bean
//     public AuthenticationProvider authenticationProvider() {
//         DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
//         provider.setUserDetailsService(customUserDetailsService);
//         provider.setPasswordEncoder(bCryptPasswordEncoder());
//         return provider;
//     }

//     // Define the SecurityFilterChain bean
//     @Bean
//     public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
//         return httpSecurity
//                 .csrf(csrf -> csrf
//                         .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())  
//                         .ignoringRequestMatchers("/h2-console/**")
//                         .ignoringRequestMatchers("/api/register/school", "/api/register/guardian", "/api/register/medical")
//                 )
//                 .cors(Customizer.withDefaults())
//                 .authorizeHttpRequests(auth -> auth
                        
//                         .requestMatchers("/api/register/school", "/api/register/guardian", "/api/register/medical").permitAll()
//                         .requestMatchers("/school/**").hasRole("School")
//                         .requestMatchers("/medical/**").hasRole("Medical")
//                         .requestMatchers("/guardian/**").hasRole("Guardian")
//                         .anyRequest().authenticated())
//                 .headers(headers -> headers
//                         .frameOptions(frameOptions -> frameOptions
//                                 .disable()
//                         ))
//                 .httpBasic(Customizer.withDefaults())
//                 .build();
//     }

//     // Define CorsConfigurationSource bean
//     @Bean
//     public CorsConfigurationSource corsConfigurationSource() {
//         CorsConfiguration configuration = new CorsConfiguration();
//         configuration.setAllowedOrigins(List.of("http://localhost:3000"));
//         configuration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE"));
//         configuration.setAllowCredentials(true);
//         configuration.addAllowedHeader("*");
//         UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//         source.registerCorsConfiguration("/**", configuration);
//         return source;
//     }
// }
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Autowired
    private CustomUserDetailsService customUserDetailsService;

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
        return httpSecurity
                .csrf(csrf -> csrf
                        .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())  
                        .ignoringRequestMatchers("/h2-console/**")
                        .ignoringRequestMatchers("/api/register/school", "/api/register/guardian", "/api/register/medical")
                        .ignoringRequestMatchers("/api/app/login")  // Disable CSRF for login endpoint
    
                )
                .cors(Customizer.withDefaults())
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/api/register/school", "/api/register/guardian", "/api/register/medical","/api/app/login").permitAll()
                        .requestMatchers("/school/**").hasRole("School")
                        .requestMatchers("/medical/**").hasRole("Medical")
                        .requestMatchers("/guardian/**").hasRole("Guardian")
                        .anyRequest().authenticated())
                .headers(headers -> headers
                        .frameOptions(frameOptions -> frameOptions
                                .disable()
                        ))
                .httpBasic(Customizer.withDefaults())
                .build();
    }

    @Bean
    public AuthenticationManager authenticationManager(HttpSecurity http, PasswordEncoder passwordEncoder) throws Exception {
        // Directly using passwordEncoder() here
        return http.getSharedObject(AuthenticationManagerBuilder.class)
                   .userDetailsService(customUserDetailsService)
                   .passwordEncoder(passwordEncoder) // Correctly using injected passwordEncoder
                   .and()
                   .build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(List.of("http://localhost:3000"));
        configuration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE"));
        configuration.setAllowCredentials(true);
        configuration.addAllowedHeader("*");
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}
