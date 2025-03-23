package com.example.business.service;

import java.util.Optional;

public interface UserService<T> {
    T register(T user);
    Optional<T> findById(Long id);
    T updateProfile(Long id, T updatedUser);
    void deleteAccount(Long id);
}
