package com.mobisure.repository;

import java.util.Optional;
import org.springframework.data.repository.CrudRepository;
import com.mobisure.entity.VehicleType;

public interface IVehicleTypeRepository extends CrudRepository<VehicleType, Long> {

    Optional<VehicleType> findByName(String name);
}
