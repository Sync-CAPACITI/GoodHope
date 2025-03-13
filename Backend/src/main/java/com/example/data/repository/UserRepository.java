package com.example.data.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.model.User;
import java.util.Optional; // Make sure Optional is imported

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    
}
