package com.example.presentation;

@RestController
@RequestMapping("/api/register")
public class RegisterController {

    @Autowired
    private SchoolService schoolService
    
    
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