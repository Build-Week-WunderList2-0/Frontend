import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import { connect } from 'react-redux'

import * as Yup from 'yup';
import {getUser} from '../actions/index'

const Signup = ({ values, errors, touched, status }) => {
	const [ user, setUser ] = useState({username: '', password: '' });
   
	useEffect(
		() => {
            // console.log(status)
			if (status) {
				setUser(status);
				// console.log('Signup.js: useEffect', user);
			}
		},
		[ status ]
	);
        
	return (
		<div className="register">
			<h1>Sign Up</h1>
			<Form>
				<div>
					{touched.username && errors.username && <p>{errors.username}</p>}
					<Field className="username" type="username" name="username" placeholder="Username" />
				</div>
				<div>
					{touched.password && errors.password && <p>{errors.password}</p>}
					<Field className="username" type="password" name="password" placeholder="Password" />
				</div>

				<button>Submit</button>
			</Form>
		</div>
	);
};

const FormikSignup = withFormik({
	mapPropsToValues({ username, password }) {
		return {
			username: username || '',
			password: password || ''
		};
	},
	validationSchema: Yup.object().shape({
		username: Yup.string().required('Username is required'),
		password: Yup.string().required('Password is required')
	}),
	handleSubmit(values, { setStatus, props }) {
        props.getUser(values)
		setStatus(values);
	}
})(Signup);

const mapStatetoProps = state => {
    console.log('Signup.js: mSTP:', state)
    return {
        state
    }
}
export default connect(mapStatetoProps, {getUser} )(FormikSignup);

