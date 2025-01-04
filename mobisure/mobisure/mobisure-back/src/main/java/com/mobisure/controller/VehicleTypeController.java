package com.mobisure.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.mobisure.entity.VehicleType;
import com.mobisure.repository.IVehicleTypeRepository;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/vehicle-types")
@CrossOrigin(origins = "http://localhost:3000")
public class VehicleTypeController {

    @Autowired
    private IVehicleTypeRepository vehicleTypeRepository;

    @GetMapping
    public ResponseEntity<List<VehicleType>> getAllVehicleTypes() {
        try {
            List<VehicleType> vehicleTypes = (List<VehicleType>) vehicleTypeRepository.findAll();
            return new ResponseEntity<>(vehicleTypes, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping
    public ResponseEntity<VehicleType> createVehicleType(@RequestBody VehicleType vehicleType) {
        try {
            VehicleType savedVehicleType = vehicleTypeRepository.save(vehicleType);
            return new ResponseEntity<>(savedVehicleType, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<VehicleType> getVehicleTypeById(@PathVariable Long id) {
        Optional<VehicleType> vehicleType = vehicleTypeRepository.findById(id);
        if (vehicleType.isPresent()) {
            return new ResponseEntity<>(vehicleType.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteVehicleType(@PathVariable Long id) {
        try {
            vehicleTypeRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
