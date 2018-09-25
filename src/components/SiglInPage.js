import React from 'react';
import { withFormik } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
    email: yup
        .string()
        .email('Please enter valid email')
        .required('Email is required'),
    password: yup
        .string()
        .min(3, 'Please enter a valid password')
        .required('Password is required'),
});

const Basic = ({
                   values,
                   errors,
                   touched,
                   handleChange,
                   handleBlur,
                   handleSubmit,
                   isSubmitting,
               }) => (
    <div>
        <h1>My Form Sigl In</h1>
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
            />

            <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
            />

            {touched.password && errors.password && <div>{errors.password}</div>}
            <button type="submit" disabled={isSubmitting}>
                Submit
            </button>
        </form>
    </div>
);

export default withFormik({
    mapPropsToValues() {
        return {
            email: '',
            password: '',
        };
    },
    validationSchema: schema,
    validateOnChange: true,
    handleSubmit(values, { props }) {
        //
    },
})(Basic);
