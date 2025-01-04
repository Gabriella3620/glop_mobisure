package com.mobisure.entity;

import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Car extends Vehicle {

    private String fuel;
    private String power;

}
