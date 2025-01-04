package com.mobisure.dto;


import com.mobisure.MotorFuelType;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class CarDto extends VehicleDto {
    private String fuel;
    private String power;

}
