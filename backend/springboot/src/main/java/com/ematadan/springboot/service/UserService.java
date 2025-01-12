package com.ematadan.springboot.service;

import com.ematadan.springboot.model.User;
import com.ematadan.springboot.repo.UserRepo;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    JWTService jwtService;
    @Autowired
    AuthenticationManager authManager;
  
    @Autowired
    private UserRepo userRepo;

   

    BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder(12);

    
    public User register(User user) {
        User existingUser = userRepo.findByUsername(user.getUsername());
        if (existingUser != null) {
            throw new RuntimeException("Username already exists");
        }
    
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
    
        // Save user to the database
        return userRepo.save(user);
    }
    public boolean verify(User user) {
        try {
            Authentication authentication = authManager.authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));
            
            return authentication.isAuthenticated();
        } catch (Exception e) {
            return false;
        }
    }
    public String getUserRole(String username) {
        User user = userRepo.findByUsername(username);
        return user != null ? user.getRole() : null;
    }
    
  

    
    
}
