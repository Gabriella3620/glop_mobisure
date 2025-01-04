import React from 'react';
import { useField } from 'formik';



  const MyRadioButton = ({ label, options, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div className="form-group">
            <label className="d-block">{label}</label>
            {options.map((option) => (
                <div key={option.value} className="form-check">
                    <input
                        type="radio"
                        className={`form-check-input ${
                            meta.touched ? (meta.error ? "is-invalid" : "is-valid") : ""
                        }`}
                        {...field}
                        {...props}
                        id={`${props.id || props.name}-${option.value}`}
                        value={option.value}
                        checked={field.value === option.value}
                    />
                    <label
                        className="form-check-label"
                        htmlFor={`${props.id || props.name}-${option.value}`}
                    >
                        {option.label}
                    </label>
                </div>
            ))}
            {meta.touched && meta.error ? (
                <div className="invalid-feedback d-block">{meta.error}</div>
            ) : meta.touched ? (
                <div className="valid-feedback d-block">Ok !</div>
            ) : null}
        </div>
    );
};

  export default MyRadioButton;