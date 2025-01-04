package com.mobisure.dto;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ScooterDto extends VehicleDto {
    private String power;
    private Float kilometer;

}
