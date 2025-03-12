package com.example.Components;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import java.security.Key;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JwtUtil {

    private final JwtConfig jwtConfig;

    public JwtUtil(JwtConfig jwtConfig) {
        this.jwtConfig = jwtConfig;
    }

    // Method to generate JWT token
    public String generateToken(String username) {
        Key key = Keys.hmacShaKeyFor(Decoders.BASE64.decode(jwtConfig.getSecret()));
        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60))  // 1 hours expiration time
                .signWith(key)
                .compact();
    }

    // Method to extract the username from the token
    public String extractUsername(String token) {
        Key key = Keys.hmacShaKeyFor(Decoders.BASE64.decode(jwtConfig.getSecret()));
        return Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }

    // Method to validate the token
    public boolean validateToken(String token, String username) {
        return (username.equals(extractUsername(token)) && !isTokenExpired(token));
    }

    // Method to check if the token is expired
    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    private Date extractExpiration(String token) {
        Key key = Keys.hmacShaKeyFor(Decoders.BASE64.decode(jwtConfig.getSecret()));
        return Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token)
                .getBody()
                .getExpiration();
    }
}