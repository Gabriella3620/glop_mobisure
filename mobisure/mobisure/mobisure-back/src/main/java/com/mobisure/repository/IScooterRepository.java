package com.mobisure.repository;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import com.mobisure.entity.Scooter;

public interface IScooterRepository extends CrudRepository<Scooter, Long> {

    List<Scooter> findByPower(String power);

    List<Scooter> findByKilometerLessThan(Float kilometer);
}
