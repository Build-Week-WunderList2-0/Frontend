import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import { connect } from 'react-redux'
import * as Yup from 'yup';

import {getLogin} from '../actions/LoginAction.js'

const Login = ({ values, errors, touched, status }) => {
	const [ user, setUser ] = useState([]);

	useEffect(
		() => {
			if (status) {
				setUser([ ...user, status ]);
				// console.log(user);
			}
		},
		[ status ]
	);

	return (
		<div className="register">
			<h1>Log In</h1>
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

const FormikLogin = withFormik({
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
		// console.log(values);
		props.getLogin(values).then(() => props.history.push('/home'))
		setStatus(values);
	}
})(Login);
const mapStateToProps = state => {
	return(
		state
	)
}
export default connect(mapStateToProps, {getLogin}) (FormikLogin);
