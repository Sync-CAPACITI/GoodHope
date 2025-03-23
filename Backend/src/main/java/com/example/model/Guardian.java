package com.example.model;
import jakarta.persistence.*;
import lombok.*;
import java.util.List;

@Data
@Entity
@Table(name = "Guardian")
public class Guardian {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String lastName;
    private String phoneNumber;
    private String email;
    private String schoolType;
    private String password;

    
    @Embedded
    private Address address;

    // @OneToMany(mappedBy = "guardian", cascade = CascadeType.ALL, orphanRemoval = true)
    // private List<Child> children;
}
