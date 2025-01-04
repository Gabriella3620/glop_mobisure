package com.mobisure.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public abstract class VehicleDto {
    private Long id;
    private String brand;
    private Long customerId;
    private String model;
}
