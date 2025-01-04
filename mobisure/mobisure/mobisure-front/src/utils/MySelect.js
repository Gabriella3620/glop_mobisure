import React from 'react';
import { Field } from 'formik';

const MySelect = ({ label, name, options }) => {
    return (
        <div className="form-group mt-2 mb-1">
            <label htmlFor={name}>{label}</label>
            <Field as="select" id={name} name={name} className="form-select-sm form-control">
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </Field>
        </div>
    );
};

export default MySelect;