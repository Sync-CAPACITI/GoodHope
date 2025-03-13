package com.example.presentation;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@RequestMapping("/api/register")
@CrossOrigin(origins = "http://localhost:3000")
public class RegisterController {

    @Autowired
    private SchoolService schoolService;

        
    @PostMapping("/school")
    public ResponseEntity<String> registerSchool(@RequestBody @Validated RegisterSchoolDto registerSchoolDto) {
        try {
            // Convert the DTO to the School entity
            School school = new School();
            school.setSchoolName(registerSchoolDto.getSchoolName());
            school.setContactNumber(registerSchoolDto.getContactNumber());
            school.setSchoolEmail(registerSchoolDto.getSchoolEmail());
            school.setSchoolType(registerSchoolDto.getSchoolType());
            school.setSchoolPassword(registerSchoolDto.getSchoolPassword());
            school.setLocation(registerSchoolDto.getLocation());
            school.setAddressDetails(registerSchoolDto.getAddress()); // Assuming the DTO has an address

            // Save the school using the service
            schoolService.registerSchool(school);

            return ResponseEntity.ok("School registered successfully");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error: " + e.getMessage());
        }
    }
    
    
    @PostMapping("/parent")
    public ResponseEntity<?> registerUser(@RequestBody @Valid UserRegistrationDto userDto) {
        try {
            System.out.println("Registering user: " + userDto.getEmail());  // Debugging log
            userService.registerNewUserAccount(userDto);
            return ResponseEntity.ok("User successfully registered!");
        } catch (Exception e) {
            System.err.println("Error registering user: " + e.getMessage());  // Debugging log
            return ResponseEntity.badRequest().body("Error: " + e.getMessage());
        }
    }

    @PostMapping("/medical")
    public ResponseEntity<?> registerUser(@RequestBody @Valid UserRegistrationDto userDto) {
        try {
            System.out.println("Registering user: " + userDto.getEmail());  // Debugging log
            userService.registerNewUserAccount(userDto);
            return ResponseEntity.ok("User successfully registered!");
        } catch (Exception e) {
            System.err.println("Error registering user: " + e.getMessage());  // Debugging log
            return ResponseEntity.badRequest().body("Error: " + e.getMessage());
        }
    }
    
    
}