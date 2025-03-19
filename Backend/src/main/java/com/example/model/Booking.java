package com.example.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Optional;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Booking")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer bookingId;

    @ManyToOne
    @JoinColumn(name = "child_id", nullable = false)
    private Child child;

    @ManyToOne
    @JoinColumn(name = "guardian_id", nullable = false)
    private Guardian guardian;

    @Column(nullable = false)
    private LocalDate bookingDate;

    @Column(nullable = false)
    private LocalTime bookingTime;

    @Column(nullable = false)
    private String purpose;

    private String notes;
}
