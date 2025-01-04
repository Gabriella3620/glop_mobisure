package com.mobisure.controller;

import com.mobisure.entity.Bike;
import com.mobisure.repository.IBikeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/bikes")
@CrossOrigin(origins = "http://localhost:3000")
public class BikeController {

    @Autowired
    private IBikeRepository bikeRepository;

    @GetMapping
    public ResponseEntity<List<Bike>> all( ) {
        try {
            List<Bike> bikes = ( List<Bike>) bikeRepository.findAll();
            return new ResponseEntity<>(bikes, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{customerId}")
        public ResponseEntity<List<Bike>> getAllCars(@PathVariable long customerId) {
        try {
            List<Bike> bikes =  bikeRepository.findByCustomerId(customerId);
            return new ResponseEntity<>(bikes, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping
    public ResponseEntity<Bike> create(@RequestBody Bike bike) {
        try {
            Bike savedCar = bikeRepository.save(bike);
            return new ResponseEntity<>(savedCar, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Bike> getBikeById(@PathVariable Long id) {
        Optional<Bike> bike = bikeRepository.findById(id);
        return bike.map(value -> new ResponseEntity<>(value, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(null, HttpStatus.NOT_FOUND));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Bike> updateCar(@PathVariable Long id, @RequestBody Bike bikeDetails) {
        Optional<Bike> existingBike = bikeRepository.findById(id);
        if (existingBike.isPresent()) {
            Bike bike = existingBike.get();
            bike.setKilometer(bikeDetails.getKilometer());
            bike.setHasMotor(bikeDetails.isHasMotor());
            bike.setBrand(bikeDetails.getBrand());
            bike.setCustomerId(bikeDetails.getCustomerId());
            Bike updatedBike = bikeRepository.save(bike);
            return new ResponseEntity<>(updatedBike, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteBike(@PathVariable Long id) {
        try {
            bikeRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
