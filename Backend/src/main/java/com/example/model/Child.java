package com.example.model;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Child")
public class Child {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer childId;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private int age;

    @ManyToOne
    @JoinColumn(name = "guardian_id")
    private Guardian guardian;
}