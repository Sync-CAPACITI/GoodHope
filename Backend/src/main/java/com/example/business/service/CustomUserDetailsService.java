package com.example.business.service;

import com.example.data.repository.SchoolRepository;
import com.example.data.repository.MedicalRepository;
import com.example.model.School;
import com.example.model.MedicalPractitioner;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {
    @Autowired
    private SchoolRepository schoolRepository;
    @Autowired
    private MedicalRepository medicalRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<School> school = schoolRepository.findBySchoolEmail(email);
        Optional<MedicalPractitioner> medical = medicalRepository.findByMedicalEmail(email);

        if (school.isPresent()) {
            return new User(school.get().getSchoolEmail(), school.get().getSchoolPassword(), AuthorityUtils.createAuthorityList("School"));
        } else if (medical.isPresent()) {
            return new User(medical.get().getMedicalEmail(), medical.get().getMedicalPassword(), AuthorityUtils.createAuthorityList("Medical"));
        } else {
            throw new UsernameNotFoundException("User not found with email: " + email);
        }
    }
}
