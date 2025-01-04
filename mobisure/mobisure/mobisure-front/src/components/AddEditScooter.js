import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../utils/MyTextInput';
import scooterService from "../services/ScooterService";

const AddEditScooter = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [initialValues, setInitialValues] = useState({
        brand: '',
        model: '',
        power: '',
        kilometer: '',
        customerId: ''
    });

    useEffect(() => {
        if (id) {
            scooterService.getScooterById(id)
                .then(response => {
                    setInitialValues(response.data);
                })
                .catch(error => {
                    console.error('Error retrieving scooter:', error);
                });
        }
    }, [id]);

    const validationSchema = Yup.object({
        brand: Yup.string().required('Required'),
        model: Yup.string().required('Required'),
        power: Yup.string().required('Required'),
        kilometer: Yup.number().required('Required').min(0, 'Kilometer must be positive')
    });

    const handleSubmit = (values, { setSubmitting }) => {
        if (id) {
            scooterService.updateScooter(id, values)
                .then(() => {
                    navigate('/vehicle');
                })
                .catch(error => {
                    console.error('Error updating scooter:', error);
                    setSubmitting(false);
                });
        } else {
            scooterService.addScooter(values)
                .then(() => {
                    navigate('/vehicle');
                })
                .catch(error => {
                    console.error('Error adding scooter:', error);
                    setSubmitting(false);
                });
        }
    };

    return (
        <div className="container mt-4">
            <h2>{id ? 'Modification - Scooter' : 'Enregistrement - Scooter'}</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                enableReinitialize
            >
                {({ isSubmitting }) => (
                    <Form>
                        <MyTextInput
                            label="Marque"
                            name="brand"
                            type="text"
                        />
                        <MyTextInput
                            label="Modèle"
                            name="model"
                            type="text"
                        />
                        <MyTextInput
                            label="Puissance"
                            name="power"
                            type="text"
                        />
                        <MyTextInput
                            label="Kilométrage"
                            name="kilometer"
                            type="number"
                        />
                        <button type="submit" className="btn btn-primary mt-4" disabled={isSubmitting}>
                            {isSubmitting ? 'Patientez...' : id ? 'Modifier' : 'Enregistrer'}
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default AddEditScooter;
