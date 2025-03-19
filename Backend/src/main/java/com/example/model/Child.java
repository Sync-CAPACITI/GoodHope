package com.example.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "Children")
public class Child extends Guardian{


    private String childName;
    private String childSurname;
    private int childAge;
    private int childGrade;
    private String specialNeedsCategory;
    private String otherCategory;
    private String medicalHistory;

    @ManyToOne
    @JoinColumn(name = "guardian_id", referencedColumnName = "userId") // Use userId from Guardian
    private Guardian guardian;
}
