package com.example.dto;

import lombok.*;
import java.time.LocalDate;
import java.time.LocalTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BookingDto {
    private Integer childId;
    private LocalDate bookingDate;
    private LocalTime bookingTime;
    private String purpose;
    private String notes;
}
