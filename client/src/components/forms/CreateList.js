import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

const CreateList = ({ status }) => {
	const [ list, setList ] = useState([ { date: '09/24/2019', list: 'Todo...' } ]);

	useEffect(
		() => {
			if (status) {
				setList([ ...list, status ]);
				console.log(list);
			}
		},
		[ status ]
	);

	return (
		<div className="list">
			Create List
			<Form>
				<div>
					Date of list
					<Field type="text" name="date" placeholder="mm/dd/yyyy" />
				</div>
				<div>
					Create your list:
					<Field component="textarea" type="text" name="list" placeholder="Todo..." />
				</div>
				Do you want this list to be scheduled weekly?
				<Field type="checkbox" name="week" />
				Do you want this list to be scheduled monthly?
				<Field type="checkbox" name="month" />
				<button>Submit!</button>
			</Form>
			{list.map((list) => (
				<div>
					<p>Date: {list.date}</p>
					<p>list: {list.list}</p>
					<button className="list-button">Edit</button>
					<button className="list-button">Complete!</button>
				</div>
			))}
		</div>
	);
};

const FormikCreate = withFormik({
	mapPropsToValues({ date, list, week, month }) {
		return {
			date: date || '',
			list: list || '',
			week: week || false,
			month: month || false
		};
	},
	validationSchema: Yup.object().shape({
		date: Yup.string().required('Username is required'),
		list: Yup.string().required('Password is required')
	}),
	handleSubmit(values, { setStatus, props }) {
		// props.getUser(values);
		setStatus(values);
	}
})(CreateList);

export default FormikCreate;
