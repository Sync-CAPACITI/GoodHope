package com.example.goodhope.service;

import com.example.goodhope.model.Child;
import com.example.goodhope.repository.ChildRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChildService {

    @Autowired
    private ChildRepository childRepository;

    public Child saveChild(Child child) {
        return childRepository.save(child);
    }

    public Child getChildById(Long id) {
        return childRepository.findById(id).orElse(null);
    }

    public List<Child> getAllChildren() {
        return childRepository.findAll();
    }
}
