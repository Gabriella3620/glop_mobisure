import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../utils/MyTextInput';
import MySelect from "../utils/MySelect";
import bikeService from "../services/BikeService";

const AddEditBike = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [initialValues, setInitialValues] = useState({
        brand: '',
        model: '',
        kilometer: '',
        hasMotors: false,
    });

    useEffect(() => {
        if (id) {
            bikeService.getBikeById(id)
                .then(response => {
                    setInitialValues(response.data);
                })
                .catch(error => {
                    console.error('Error retrieving bike:', error);
                });
        }
    }, [id]);

    const validationSchema = Yup.object({
        brand: Yup.string().required('Obligatoire'),
        model: Yup.string().required('Obligatoire'),
        kilometer: Yup.number().min(0, 'Doit être positif').required('Obligatoire'),
        hasMotors: Yup.boolean().required('Obligatoire'),
    });

    const handleSubmit = (values, { setSubmitting }) => {
        if (id) {
            bikeService.updateBike(id, values)
                .then(() => {
                    navigate('/bikes');
                })
                .catch(error => {
                    console.error('Error updating bike:', error);
                    setSubmitting(false);
                });
        } else {
            bikeService.addBike(values)
                .then(() => {
                    navigate('/bikes');
                })
                .catch(error => {
                    console.error('Error adding bike:', error);
                    setSubmitting(false);
                });
        }
    };

    return (
        <div className="container mt-4">
            <h2>{id ? 'Modification - Vélo' : 'Enregistrement - Vélo'}</h2>
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
                            label="Kilométrage"
                            name="kilometer"
                            type="number"
                        />
                        <MySelect
                            label="Équipé d'un moteur"
                            name="hasMotors"
                            options={[
                                { value: true, label: 'Oui' },
                                { value: false, label: 'Non' }
                            ]}
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

export default AddEditBike;
