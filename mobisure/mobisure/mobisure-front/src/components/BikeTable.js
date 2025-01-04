import React, { useState, useEffect } from 'react';
import bikeService from '../services/BikeService'; // Assurez-vous que ce service existe
import { Table, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const BikeTable = () => {
    const [bikes, setBikes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        bikeService.getAllBikes()
            .then(response => {
                setBikes(response.data);
            })
            .catch(error => {
                console.error('Error retrieving bikes:', error);
            });
    }, []);

    const handleDelete = (id) => {
        bikeService.deleteBike(id)
            .then(() => {
                setBikes(bikes.filter(bike => bike.id !== id));
            })
            .catch(error => {
                console.error('Error deleting bike:', error);
            });
    };

    const handleOffer = (id) => {
        // Implémentez la logique d'offre ici
        console.log(`Offer made for bike with id: ${id}`);
    };

    return (
        <div className="container mt-4">
            <h2>List of Bikes</h2>
            <Table striped bordered hover className="table-responsive">
                <thead className="thead-dark">
                <tr>
                    <th>Brand</th>
                    <th>Model</th>
                    <th>Kilometers</th>
                    <th>Has Motor</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {bikes.map(bike => (
                    <tr key={bike.id}>
                        <td>{bike.brand}</td>
                        <td>{bike.model}</td>
                        <td>{bike.kilometer}</td>
                        <td>{bike.hasMotors ? 'Yes' : 'No'}</td>
                        <td>
                            <Button variant="success" size="sm" onClick={() => handleOffer(bike.id)}>
                                Offres
                            </Button>
                            <Button variant="info" size="sm" className="mr-2" as={Link} to={`/bikes/edit/${bike.id}`}>
                                Modifier
                            </Button>
                            <Button variant="danger" size="sm" className="mr-2" onClick={() => handleDelete(bike.id)}>
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

export default BikeTable;
