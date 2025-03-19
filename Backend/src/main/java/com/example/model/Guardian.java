package com.example.model;
import jakarta.persistence.*;
import lombok.Data;
import java.util.List;


@Data
@Entity
@Table(name = "Guardian")
@PrimaryKeyJoinColumn(name = "user_id")
public class Guardian extends User {


    private int age;
    private String relationship;
    private String schoolType;

    @OneToMany(mappedBy = "guardian", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Child> children;
}