package com.example.goodhope.controller;

import com.example.goodhope.model.Child;
import com.example.goodhope.model.School;
import com.example.goodhope.model.Practitioner;
import com.example.goodhope.service.ChildService;
import com.example.goodhope.service.SchoolService;
import com.example.goodhope.service.PractitionerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class GoodHopeController {

    @Autowired
    private ChildService childService;

    @Autowired
    private SchoolService schoolService;

    @Autowired
    private PractitionerService practitionerService;

    @PostMapping("/children")
    public Child addChild(@RequestBody Child child) {
        return childService.saveChild(child);
    }

    @GetMapping("/children/{id}")
    public Child getChild(@PathVariable Long id) {
        return childService.getChildById(id);
    }

    @PostMapping("/schools")
    public School addSchool(@RequestBody School school) {
        return schoolService.saveSchool(school);
    }

    @GetMapping("/schools")
    public List<School> getAllSchools() {
        return schoolService.getAllSchools();
    }

    @GetMapping("/schools/{id}")
    public School getSchool(@PathVariable Long id) {
        return schoolService.getSchoolById(id);
    }

    @PostMapping("/practitioners")
    public Practitioner addPractitioner(@RequestBody Practitioner practitioner) {
        return practitionerService.savePractitioner(practitioner);
    }

    @GetMapping("/practitioners")
    public List<Practitioner> getAllPractitioners() {
        return practitionerService.getAllPractitioners();
    }

    @GetMapping("/practitioners/{id}")
    public Practitioner getPractitioner(@PathVariable Long id) {
        return practitionerService.getPractitionerById(id);
    }
}
