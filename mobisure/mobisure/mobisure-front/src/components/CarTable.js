import React, { useState, useEffect } from 'react';
import carService from '../services/carService';
import { Table, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const CarTable = () => {
    const [cars, setCars] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        carService.getAllCars()
            .then(response => {
                setCars(response.data);
            })
            .catch(error => {
                console.error('Error retrieving cars:', error);
            });
    }, []);

    const handleDelete = (id) => {
        carService.deleteCar(id)
            .then(() => {
                setCars(cars.filter(car => car.id !== id));
            })
            .catch(error => {
                console.error('Error deleting car:', error);
            });
    };

    const handleOffer = (id) => {
        // Implement offer logic here
        console.log(`Offer made for car with id: ${id}`);
    };

    return (
        <div className="container mt-4">
            <h2>List of Cars</h2>
            <Table striped bordered hover className="table-responsive">
                <thead className="thead-dark">
                <tr>
                    <th>Brand</th>
                    <th>Fuel</th>
                    <th>Power</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {cars.map(car => (
                    <tr key={car.id}>
                        <td>{car.brand}</td>
                        <td>{car.fuel}</td>
                        <td>{car.power}</td>
                        <td>
                            <Button variant="success" size="sm" onClick={() => handleOffer(car.id)}>
                                Offres
                            </Button>
                            <Button variant="info" size="sm" className="mr-2" as={Link} to={`/cars/edit/${car.id}`}>
                                Modifier
                            </Button>
                            <Button variant="danger" size="sm" className="mr-2" onClick={() => handleDelete(car.id)}>
                                Supprimer
                            </Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    );
};

export default CarTable;