// package com.example.presentation;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.ResponseEntity;
// import org.springframework.validation.annotation.Validated;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import com.example.business.service.SchoolService;
// import com.example.dto.RegisterSchoolDto;
// import com.example.model.School;

@RestController
@RequestMapping("/api/bookings")
public class BookingController {

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private ChildRepository childRepository;

    @Autowired
    private GuardianService guardianService;

    @PostMapping
    public ResponseEntity<?> createBooking(@RequestBody @Valid BookingDto bookingDTO, Principal principal) {
        // Fetch the logged-in guardian using their email
        Guardian guardian = guardianService.findByEmail(principal.getName());

        // Fetch the child by ID and ensure it exists
        Child child = childRepository.findById(bookingDTO.getChildId())
                .orElseThrow(() -> new RuntimeException("Child not found"));

        // Ensure the child belongs to the logged-in guardian
        if (!child.getGuardian().equals(guardian)) {
            return ResponseEntity.status(403).body("You do not have permission to book for this child.");
        }

        // Create and save the booking
        Booking booking = new Booking();
        booking.setChild(child);
        booking.setGuardian(guardian);
        booking.setBookingDate(bookingDTO.getBookingDate());
        booking.setBookingTime(bookingDTO.getBookingTime());
        booking.setPurpose(bookingDTO.getPurpose());
        booking.setNotes(bookingDTO.getNotes());

        bookingRepository.save(booking);

        return ResponseEntity.ok("Booking created successfully!");
    }
}

//     @Autowired
//     private SchoolService schoolService;


//     @PostMapping("/school")
//     public ResponseEntity<String> registerSchool(@RequestBody @Validated RegisterSchoolDto registerSchoolDto) {
//         try {
            
//             // Convert the DTO to the School entity
//             School school = new School();
//             school.setName(registerSchoolDto.getSchoolName());
//             school.setPhoneNumber(registerSchoolDto.getContactNumber());
//             school.setEmail(registerSchoolDto.getSchoolEmail());
//             school.setRole("School");
            
//             school.setSchoolType(registerSchoolDto.getSchoolType());
//             school.setPassword(registerSchoolDto.getSchoolPassword());
//             school.setAddressDetails(registerSchoolDto.getSchoolAddress()); // Assuming the DTO has an address

//             // Save the school using the service
//             schoolService.registerSchool(school);

//             return ResponseEntity.ok("School registered successfully");
//         } catch (Exception e) {
//             return ResponseEntity.badRequest().body("Error: " + e.getMessage());
//         }
//     }
    
    
    


//     @PostMapping("/medical")
//     public ResponseEntity<?> registerUser(@RequestBody @Valid UserRegistrationDto userDto) {
//         try {
//             System.out.println("Registering user: " + userDto.getEmail());  // Debugging log
//             userService.registerNewUserAccount(userDto);
//             return ResponseEntity.ok("User successfully registered!");
//         } catch (Exception e) {
//             System.err.println("Error registering user: " + e.getMessage());  // Debugging log
//             return ResponseEntity.badRequest().body("Error: " + e.getMessage());
//         }
//     }
    
    
// }