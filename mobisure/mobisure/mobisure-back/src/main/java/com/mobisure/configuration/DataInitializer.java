package com.mobisure.configuration;

import com.mobisure.entity.Bike;
import com.mobisure.entity.Car;
import com.mobisure.entity.Scooter;
import com.mobisure.repository.ICarRepository;
import com.mobisure.repository.IScooterRepository;
import com.mobisure.repository.IBikeRepository;
import com.mobisure.repository.IVehicleTypeRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner initDatabase(
            IVehicleTypeRepository vehicleTypeRepository,
            ICarRepository carRepository,
            IBikeRepository bikeRepository,
            IScooterRepository scooterRepository) {
        return args -> {
            // Initialisation des types de véhicules
            // VehicleType carType = new VehicleType("Car");
            // VehicleType scooterType = new VehicleType("Scooter");
            // VehicleType bikeType = new VehicleType("Bike");
            // vehicleTypeRepository.save(carType);
            // vehicleTypeRepository.save(scooterType);
            // vehicleTypeRepository.save(BikeType);

            // Création de voitures (Car)
            Car car1 = new Car();
            car1.setBrand("Toyota");
            car1.setFuel("diesel");
            car1.setModel("Corolla");
            car1.setPower("150HP");
            car1.setCustomerId(1L);
            // car1.setVehicleType(carType);

            Car car2 = new Car();
            car2.setBrand("Honda");
            car2.setFuel("hybrid");
            car2.setModel("Civic");
            car2.setPower("180HP");
            car2.setCustomerId(2L);
            // car2.setVehicleType(scooterType);

            carRepository.save(car1);
            carRepository.save(car2);

            // Création de scooters (Scooter)
            Scooter scooter1 = new Scooter();
            scooter1.setBrand("Yamaha");
            scooter1.setPower("50cc");
            scooter1.setKilometer(1000F);
            scooter1.setCustomerId(3L);
            scooter1.setModel("test");
            // scooter1.setVehicleType(scooterType);

            Scooter scooter2 = new Scooter();
            scooter2.setBrand("Vespa");
            scooter2.setPower("125cc");
            scooter2.setKilometer(500F);
            scooter2.setCustomerId(4L);
            scooter1.setModel("test2");


            // scooter2.setVehicleType(scooterType);

            scooterRepository.save(scooter1);
            scooterRepository.save(scooter2);

            // Création de vélos (Bike)
            Bike bike1 = new Bike();
            bike1.setBrand("Trek");
            bike1.setModel("Domane SL7");
            bike1.setKilometer(1500F);
            bike1.setHasMotor(false);
            //bike1.setCustomerId(1L);
            // bike1.setVehicleType(bikeType);

            Bike bike2 = new Bike();
            bike2.setBrand("Specialized");
            bike2.setModel("Turbo Levo");
            bike2.setKilometer(200F);
            bike2.setHasMotor(true);
            //bike2.setCustomerId(2L);
            // bike2.setVehicleType(bikeType);

            bikeRepository.save(bike1);
            bikeRepository.save(bike2);


            System.out.println("Base de données initialisée avec succès.");
        };
    }
}
