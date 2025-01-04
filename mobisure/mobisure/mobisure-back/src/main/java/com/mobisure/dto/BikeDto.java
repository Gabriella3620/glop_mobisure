package com.mobisure.dto;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BikeDto extends VehicleDto{
    private boolean hasMotor;
    private Float kilometer;

}
