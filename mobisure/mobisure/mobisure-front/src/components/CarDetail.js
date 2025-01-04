import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import carService from '../services/carService';

const CarDetail = () => {
    const { id } = useParams();
    const [car, setCar] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            carService.getCarById(id)
                .then(response => {
                    setCar(response.data);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error retrieving car:', error);
                    setLoading(false);
                });
        }
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!car) {
        return <p>Error loading car details.</p>;
    }

    return (
        <div className="container mt-4">
            <h2>Car Details</h2>
            <p><strong>Brand:</strong> {car.brand}</p>
            <p><strong>Fuel:</strong> {car.fuel}</p>
            <p><strong>Power:</strong> {car.power}</p>
            <p><strong>Customer ID:</strong> {car.customerId}</p>
        </div>
    );
};

export default CarDetail;