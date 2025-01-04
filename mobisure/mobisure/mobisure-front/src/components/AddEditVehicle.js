import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import carService from '../services/carService';
import MyTextInput from '../utils/MyTextInput';
import AddEditBike from "./AddEditBike";
import AddEditCar from "./AddEditCar";
import AddEditScooter from "./AddEditScooter";

const AddEditVehicle = () => {

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
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>

                {selectedValue === 'bike' && <AddEditBike />}
                {selectedValue === 'car' && <AddEditCar />}
                {selectedValue === 'scooter' && <AddEditScooter />}
            </div>
        </div>
    )

};

export default AddEditVehicle;