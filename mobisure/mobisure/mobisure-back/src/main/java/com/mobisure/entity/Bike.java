package com.mobisure.entity;

import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Bike extends Vehicle {
    private boolean hasMotor;
    private Float kilometer;

}
