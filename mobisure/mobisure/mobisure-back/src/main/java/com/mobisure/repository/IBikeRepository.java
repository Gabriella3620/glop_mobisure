package com.mobisure.repository;

import com.mobisure.entity.Bike;
import com.mobisure.entity.Car;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

    public interface IBikeRepository extends CrudRepository<Bike, Long> {

        List<Bike> findByBrand(String brand);

        List<Bike> findByCustomerId(Long customerId);
}
