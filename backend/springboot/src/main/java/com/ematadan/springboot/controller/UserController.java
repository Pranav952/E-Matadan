package com.ematadan.springboot.controller;



import com.ematadan.springboot.model.User;
import com.ematadan.springboot.service.JWTService;
import com.ematadan.springboot.service.UserService;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@CrossOrigin
@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserService userService;
    @Autowired
    private JWTService jwtService;

    BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder(12);

    @GetMapping("/")
    public String index() {
        return "Welcome to Spring Security";
    }

    @GetMapping("/home")
    public String home() {
        return "Welcome to Spring Security Home";
    }

    @PostMapping("/logout")
    public ResponseEntity<Map<String, String>> logout(@RequestBody Map<String, String> request) {
        String token = request.get("token");
    
        if (token == null || token.isEmpty()) {
            return ResponseEntity.badRequest().body(Map.of("message", "Token is required"));
        }
    
        try {
            // Decode and validate token if necessary
            String username = jwtService.extractUserName(token);
    
            // Add the token to the blacklist
            jwtService.blacklistToken(token);
    
            // Optionally, perform additional cleanup (e.g., log logout activity)
            System.out.println("User logged out: " + username);
    
            return ResponseEntity.ok(Map.of("message", "Logout successful"));
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                                 .body(Map.of("message", "An error occurred during logout"));
        }
    }
    
    @PostMapping("/register")
public ResponseEntity<?> register(@RequestBody User user) {
    // Validate user input
    if (user.getUsername() == null || user.getPassword() == null || user.getEmail() == null) {
        return ResponseEntity.badRequest().body("Username, password, and email are required");
    }

    // Encrypt password
    user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));

    User registeredUser = userService.register(user);
    if (registeredUser == null) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Username already exists");
    }

    Map<String, Object> response = new HashMap<>();
    response.put("message", "Registration successful");
    response.put("user", registeredUser); 
    return ResponseEntity.ok(response);
}



    @PostMapping("/login")
public ResponseEntity<Map<String, String>> login(@RequestBody User user) {
    boolean isAuthenticated = userService.verify(user);
    System.out.println("AUthenticating");

    if (isAuthenticated) {

        System.out.println("User authenticated");
        String role = userService.getUserRole(user.getUsername()); 
        user.setRole(role);

    ;
        String jwtToken = jwtService.generateToken(user.getUsername(),role);

        Map<String, String> response = new HashMap<>();
        response.put("message", "Login successful");
        response.put("token", jwtToken);
        response.put("role", role); 
        System.out.println("Role: " + user.getRole());

        return ResponseEntity.ok(response);
    } else {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("message", "Invalid credentials"));
    }



   

    

    
}

    
    
}

    




