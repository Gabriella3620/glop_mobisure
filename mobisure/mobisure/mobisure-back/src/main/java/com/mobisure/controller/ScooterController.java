package com.mobisure.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.mobisure.entity.Scooter;
import com.mobisure.repository.IScooterRepository;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/scooters")
@CrossOrigin(origins = "http://localhost:3000")
public class ScooterController {

    @Autowired
    private IScooterRepository scooterRepository;

    @GetMapping
    public ResponseEntity<List<Scooter>> getAllScooters() {
        try {
            List<Scooter> scooters = (List<Scooter>) scooterRepository.findAll();
            return new ResponseEntity<>(scooters, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping
    public ResponseEntity<Scooter> createScooter(@RequestBody Scooter scooter) {
        try {
            Scooter savedScooter = scooterRepository.save(scooter);
            return new ResponseEntity<>(savedScooter, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Scooter> getScooterById(@PathVariable Long id) {
        Optional<Scooter> scooter = scooterRepository.findById(id);
        if (scooter.isPresent()) {
            return new ResponseEntity<>(scooter.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteScooter(@PathVariable Long id) {
        try {
            scooterRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
