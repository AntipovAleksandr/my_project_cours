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
    passwordConfirm: yup
        .string()
        .oneOf([yup.ref('password'), null])
        .required('Password confirm is required')
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
        <h1>My Form Sigl up</h1>
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                name="email"
                placeholder='email'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
            />
            {touched.email && errors.email && <div>{errors.email}</div>}
            <div>
                <input
                type="password"
                name="password"
                placeholder='password'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
            />
            </div>


            <div>
                <input
                type="password"
                name="passwordConfirm"
                placeholder='password confirm'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
            />
            </div>

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
            passwordConfirm: '',
        };
    },
    validationSchema: schema,
    validateOnChange: true,
    handleSubmit(values, { props }) {
        //
    },
})(Basic);
