import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import carService from '../services/carService';
import MyTextInput from '../utils/MyTextInput';
import MySelect from "../utils/MySelect";

const AddEditCar = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [initialValues, setInitialValues] = useState({
        brand: '',
        fuel: '',
        power: '',
        model: ''
    });

    useEffect(() => {
        if (id) {
            carService.getCarById(id)
                .then(response => {
                    setInitialValues(response.data);
                })
                .catch(error => {
                    console.error('Error retrieving car:', error);
                });
        }
    }, [id]);

    const validationSchema = Yup.object({
        brand: Yup.string().required('Required'),
        fuel: Yup.string().required('Required'),
        power: Yup.string().required('Required')
    });

    const handleSubmit = (values, { setSubmitting }) => {
        console.log(values);
        if (id) {
            carService.updateCar(id, values)
                .then(() => {
                    navigate('/');
                })
                .catch(error => {
                    console.error('Error updating car:', error);
                    setSubmitting(false);
                });
        } else {

            carService.addCar(values)
                .then(() => {
                    navigate('/');
                })
                .catch(error => {
                    console.error('Error adding car:', error);
                    setSubmitting(false);
                });
        }
    };

    return (
        <div className="container mt-4">
            <h2>{id ? 'Modification - Voiture' : 'Enregistrement - Voiture'}</h2>
            <Formik
                initialValues={initialValues}
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

                        <MySelect
                            label="Type de moteur"
                            name="fuel"
                            options={[
                                { value: "hybrid", label: 'Hybride' },
                                { value: "electric", label: 'Électrique' },
                                { value: "gasoline", label: 'Essence' },
                                { value: "diesel", label: 'Diesel' }
                            ]}
                        />
                        <MyTextInput
                            label="Puissance"
                            name="power"
                            type="text"
                        />

                        <button type="submit" className="btn btn-primary mt-4" disabled={isSubmitting}>
                            {isSubmitting ? 'Patientez...' : id? 'Modifier' :'Enregistrer'}
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default AddEditCar;