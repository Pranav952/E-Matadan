package com.ematadan.springboot.controller;


import com.ematadan.springboot.service.JWTService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.crypto.SecretKey;
import java.util.Base64;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class KeyController {

    @Autowired
    private JWTService jwtService;

    @GetMapping("/key")
    public String getKey() {
        SecretKey key = jwtService.getKey();

        if(key == null){
            return "no key generated";
        }
        System.out.println(key);
        return Base64.getEncoder().encodeToString(key.getEncoded());
    }
}
