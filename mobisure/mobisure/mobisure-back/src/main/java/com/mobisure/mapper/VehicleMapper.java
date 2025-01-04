package com.mobisure.mapper;

import com.mobisure.dto.BikeDto;
import com.mobisure.dto.CarDto;
import com.mobisure.entity.Bike;
import com.mobisure.entity.Car;
import org.springframework.stereotype.Component;

@Component
public class VehicleMapper {

    public CarDto toDto(Car car){
        CarDto carDto = new CarDto();

        carDto.setId(car.getId());
        carDto.setBrand(car.getBrand());
        carDto.setModel(car.getModel());
        carDto.setFuel(car.getFuel());
        carDto.setPower(car.getPower());
        return carDto;
    }

    public Car toEntity(CarDto carDto){
        Car car = new Car();

        car.setId(carDto.getId());
        car.setBrand(carDto.getBrand());
        car.setModel(carDto.getModel());
        car.setFuel(carDto.getFuel());
        car.setPower(carDto.getPower());
        return car;
    }

    public Bike toEntity(BikeDto bikeDto){
        Bike bike = new Bike();

        bike.setId(bikeDto.getId());
        bike.setBrand(bikeDto.getBrand());
        bike.setModel(bikeDto.getModel());
        bike.setHasMotor(bikeDto.isHasMotor());
        bike.setKilometer(bikeDto.getKilometer());
        return bike;
    }

    public BikeDto toDto(Bike bike){
        BikeDto bikeDto = new BikeDto();

        bikeDto.setId(bike.getId());
        bikeDto.setBrand(bike.getBrand());
        bikeDto.setModel(bike.getModel());
        bikeDto.setHasMotor(bike.isHasMotor());
        bikeDto.setKilometer(bike.getKilometer());
        return bikeDto;
    }
}
