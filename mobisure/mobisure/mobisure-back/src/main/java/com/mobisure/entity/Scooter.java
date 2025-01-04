package com.mobisure.entity;

import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Scooter extends Vehicle {

    private String power;
    private Float kilometer;

}
