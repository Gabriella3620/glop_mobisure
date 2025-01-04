import React, { useState, useEffect } from 'react';
import scooterService from '../services/ScooterService';
import { Table, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const ScooterTable = () => {
    const [scooters, setScooters] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        scooterService.getAllScooters()
            .then(response => {
                setScooters(response.data);
            })
            .catch(error => {
                console.error('Error retrieving scooters:', error);
            });
    }, []);

    const handleDelete = (id) => {
        scooterService.deleteScooter(id)
            .then(() => {
                setScooters(scooters.filter(scooter => scooter.id !== id));
            })
            .catch(error => {
                console.error('Error deleting scooter:', error);
            });
    };

    return (
        <div className="container mt-4">
            <h2>List of Scooters</h2>
            <Table striped bordered hover className="table-responsive">
                <thead className="thead-dark">
                <tr>
                    <th>Brand</th>
                    <th>Model</th>
                    <th>Power</th>
                    <th>Kilometer</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {scooters.map(scooter => (
                    <tr key={scooter.id}>
                        <td>{scooter.brand}</td>
                        <td>{scooter.model}</td>
                        <td>{scooter.power}</td>
                        <td>{scooter.kilometer}</td>
                        <td>
                            <Button variant="info" size="sm" as={Link} to={`/scooters/edit/${scooter.id}`}>
                                Modifier
                            </Button>
                            <Button variant="danger" size="sm" onClick={() => handleDelete(scooter.id)}>
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

export default ScooterTable;
