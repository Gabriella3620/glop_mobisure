import React, { useState, useEffect } from 'react';
import carService from '../services/carService';
import { ListGroup, Button, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Cars = () => {
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

    return (
        <div className="container mt-4">
            <h2>List of Cars</h2>
            <Button className="mb-3" variant="success" onClick={() => navigate('/cars/add')}>
                Create Car
            </Button>

            <ListGroup>
                {cars.map(car => (
                    <ListGroup.Item key={car.id}>
                        <Row>
                            <Col md={8}>
                                {car.brand} - {car.fuel} - {car.power}
                            </Col>
                            <Col md={4} className="text-right">
                                <Button variant="info" size="sm" className="mr-2" as={Link} to={`/cars/${car.id}`}>
                                    Detail
                                </Button>
                                <Button variant="warning" size="sm" className="mr-2" as={Link} to={`/cars/edit/${car.id}`}>
                                    Edit
                                </Button>
                                <Button variant="danger" size="sm" onClick={() => handleDelete(car.id)}>
                                    Delete
                                </Button>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
};

export default Cars;