package com.mobisure.repository;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import com.mobisure.entity.Vehicle;

public interface IVehicleRepository extends CrudRepository<Vehicle, Long> {

    List<Vehicle> findByBrand(String brand);

    List<Vehicle> findByCustomerId(Long customerId);
}
