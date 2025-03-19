package com.example.model;
import jakarta.persistence.*;
import lombok.*;
import java.util.List;


@Setter
@Getter
@Entity
@Table(name = "Guardian")
@PrimaryKeyJoinColumn(name = "user_id") // Inherits userId as primary key
public class Guardian extends User {

    

    private int age;
    private String relationship;
    private String schoolType;

    @OneToMany(mappedBy = "guardian", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Child> children;
}