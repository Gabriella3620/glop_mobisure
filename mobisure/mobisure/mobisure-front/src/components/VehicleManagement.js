import React, { useState, useEffect } from 'react';
import carService from '../services/carService';
import { ListGroup, Button, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import AddEditBike from "./AddEditBike";
import AddEditCar from "./AddEditCar";
import AddEditScooter from "./AddEditScooter";
import CarTable from "./CarTable";
import BikeTable from "./BikeTable";
import ScooterTable from "./ScooterTable";

const VehicleManagement = () => {
    const options = [
        { value: 'bike', label: 'VELO' },
        { value: 'car', label: 'VOITURE' },
        { value: 'scooter', label: 'SCOOTER' },
    ];
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);

    };

    return (
        <div className="container mt-4">
            <div>
                <label htmlFor="dynamic-select">Type de véhicule </label>
                <select id="dynamic-select" value={selectedValue} onChange={handleChange}>
                    <option value="">--Veuillez choisir une option--</option>
                    {options.map( (option) => (
                        <option key={option.value} value={option.value} >
                            {option.label}
                        </option>
                    ))}
                </select>

                {selectedValue === 'bike' && <BikeTable />}
                {selectedValue === 'car' && <CarTable />}
                {selectedValue === 'scooter' && <ScooterTable />}
            </div>
        </div>
    )
};

export default VehicleManagement;