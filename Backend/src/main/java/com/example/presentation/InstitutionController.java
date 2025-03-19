package com.example.presentation;

import com.example.model.Institution;
import com.example.business.service.InstitutionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/institutions")
public class InstitutionController {

    @Autowired
    private InstitutionService institutionService;

    @GetMapping("/search")
    public List<Institution> searchInstitutions(@RequestParam String query) {
        return institutionService.searchInstitutions(query);
    }
}