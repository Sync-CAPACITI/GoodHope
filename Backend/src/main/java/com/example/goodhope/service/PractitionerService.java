package com.example.goodhope.service;

import com.example.goodhope.model.Practitioner;
import com.example.goodhope.repository.PractitionerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PractitionerService {

    @Autowired
    private PractitionerRepository practitionerRepository;

    public Practitioner savePractitioner(Practitioner practitioner) {
        return practitionerRepository.save(practitioner);
    }

    public List<Practitioner> getAllPractitioners() {
        return practitionerRepository.findAll();
    }

    public Practitioner getPractitionerById(Long id) {
        Optional<Practitioner> practitioner = practitionerRepository.findById(id);
        return practitioner.orElse(null);
    }
}