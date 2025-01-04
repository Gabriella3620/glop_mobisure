package com.mobisure.repository;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import com.mobisure.entity.Car;

public interface ICarRepository extends CrudRepository<Car, Long> {

    List<Car> findByFuel(String fuel);

    List<Car> findByPower(String power);

    List<Car> findCarByCustomerId(Long customerId);
}
