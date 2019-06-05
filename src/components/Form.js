import React from 'react'
import { Formik, Field } from 'formik';
import { userSchema } from '../yupSchema/userSchema';
import "./Form.scss"


const intitialState = {
    name: "",
    addressOne: "",
    addressTwo: "",
    city: "",
    state: "",
    zipCode: ""
};

function Form(props) {
    return (
        <>
            <Formik
                validateOnChange
                initialValues={intitialState}
                onSubmit={(values, actions) => {
                    console.log(values);
                }}
                validationSchema={userSchema}
            >
                {({ errors, touched, handleSubmit, handleChange, values, dirty, isSubmitting, handleReset }) => (
                    <form onSubmit={handleSubmit} >
                        <Field
                            name="name"
                            className="form-field"
                            onChange={handleChange}
                            value={values.name}
                            type="input"
                            placeholder="Name"
                        /> {errors.name && touched.name ? (
                            <div className="error" >{errors.name}</div>
                        ) : null}
                        <Field
                            type="input"
                            className="form-field"
                            placeholder="Address 1"
                            onChange={handleChange}
                            name="addressOne"
                            value={values.addressOne}
                        />
                        {errors.addressOne && touched.addressOne ? (
                            <div className="error">{errors.addressOne}</div>
                        ) : null}
                        <Field

                            type="input"
                            className="form-field"
                            placeholder="Address 2"
                            onChange={handleChange}
                            name="addressTwo"
                            value={values.addressTwo}
                        />{errors.addressTwo && touched.addressTwo ? (
                            <div className="error" >{errors.addressTwo}</div>
                        ) : null}
                        <Field
                            type="input"
                            className="form-field"
                            placeholder="City"
                            onChange={handleChange}
                            name="city"
                            value={values.city}
                        />{errors.city && touched.city ? (
                            <div className="error" >{errors.city}</div>
                        ) : null}

                        <Field component="select" name="state"
                            className="form-field form-fied-option">
                            <option value="married">Married</option>
                            <option value="notMarried">NotMarried</option>

                        </Field>
                        <Field
                            type="input"
                            className="form-field"
                            placeholder="zipCode"
                            onChange={handleChange}
                            name="zipCode"
                            value={values.zipCode}
                        />{errors.zipCode && touched.zipCode ? (
                            <div className="error" >{errors.zipCode}</div>
                        ) : null}
                        <button
                            type="submit"
                            className="form-field form-field-button"
                            disabled={!dirty && !isSubmitting}
                        >
                            Submit
                        </button>
                        <button
                            className="form-field form-field-button"
                            disabled={!dirty}
                            onClick={handleReset}
                            type="button"

                        >
                            Reset
                        </button>
                    </form>
                )}
            </Formik>
        </>
    )
}
export default Form;
