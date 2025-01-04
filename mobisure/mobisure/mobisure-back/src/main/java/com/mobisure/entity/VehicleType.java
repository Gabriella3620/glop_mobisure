package com.mobisure.entity;

import jakarta.persistence.*;
import java.util.List;

@Entity
public class VehicleType {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;

    // @OneToMany(mappedBy = "vehicleType", cascade = CascadeType.ALL, orphanRemoval
    // = true)
    // private List<Vehicle> vehicles;

    // Constructeurs
    public VehicleType() {
    }

    public VehicleType(String name) {
        this.name = name;
    }

    // Getters et Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    // public List<Vehicle> getVehicles() {
    // return vehicles;
    // }

    // public void setVehicles(List<Vehicle> vehicles) {
    // this.vehicles = vehicles;
    // }
}
