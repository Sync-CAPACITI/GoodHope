package com.example.data.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.model.User;
import java.util.Optional; // Make sure Optional is imported

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
//    boolean existsByUsername(String username); // Added method to check if username exists
//    Optional<User> findByUsername(String username); // Ensure this method exists to fetch a user by username
}
