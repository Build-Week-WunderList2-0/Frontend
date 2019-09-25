import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import ListItems from './ListItems';
import '../../App.css';

const CreateList = ({ status }) => {
	const [ list, setList ] = useState([ { date: '09/24/2019', list: 'Title' } ]);

	useEffect(
		() => {
			if (status) {
				setList([ ...list, status ]);
				console.log(list.id);
			}
		},
		[ status ]
	);

	// function addTask(){
	//     .push(input)
	// }

	function isDaily(item) {
		return !item.month;
	}
	function isMonthly(item) {
		return item.month;
	}

	return (
		<div className="list">
			Create List
			<Form className="form">
				<div>
					Date of list
					<Field type="text" name="date" placeholder="mm/dd/yyyy" />
				</div>
				<div>
					Title:
					<Field type="text" name="list" placeholder="Title" />
				</div>
				Do you want this list to be scheduled weekly?
				<Field type="checkbox" name="week" />
				Do you want this list to be scheduled monthly?
				<Field type="checkbox" name="month" />
				<button>Submit!</button>
			</Form>
			<div className="list-container">
				<h1>Daily ToDo Lists: </h1>
				{list.filter(isDaily).map((list) => (
					<div className="list-items">
						<p>Date: {list.date}</p>
						<p>Title: {list.list}</p>
						<ListItems />
						<button className="list-button">List Complete!</button>
					</div>
				))}
			</div>
			<div className="list-container">
				<h1>Monthly ToDoLists:</h1>
				<div>
					{list.filter(isMonthly).map((list) => (
						<div className="list-items">
							<p>Date: {list.date}</p>
							<p>Title: {list.list}</p>
							<ListItems />
							<button className="list-button">List Complete!</button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

const FormikCreate = withFormik({
	mapPropsToValues({ date, list, week, month, id }) {
		return {
			id: { id },
			date: date || '',
			list: list,
			week: week || false,
			month: month || false
		};
	},
	validationSchema: Yup.object().shape({
		date: Yup.string().required('date is required'),
		list: Yup.string().required('list is required')
	}),
	handleSubmit(values, { setStatus, props }) {
		// props.getUser(values);
		setStatus(values);
	}
})(CreateList);

export default FormikCreate;
