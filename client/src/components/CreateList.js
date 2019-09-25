import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import ListItems from './ListItems';
import '../App.css';
// import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';
const CreateList = ({ status }) => {
	const [ list, setList ] = useState([ { date: '09/24/2019', title: 'Title', monthly: false } ]);

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
		return !item.monthly;
	}
	function isMonthly(item) {
		return item.monthly;
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
					<Field type="text" name="title" placeholder="Title" />
				</div>
				Do you want this list to be scheduled weekly?
				<Field type="checkbox" name="weekly" />
				Do you want this list to be scheduled monthly?
				<Field type="checkbox" name="monthly" />
				<button>Submit!</button>
			</Form>
			<div className="list-container">
				<h1>Daily ToDo Lists: </h1>
				{list.filter(isDaily).map((list) => (
					<div className="list-items">
						<p>Date: {list.date}</p>
						<p>Title: {list.title}</p>
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
							<p>Title: {list.title}</p>
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
	mapPropsToValues({ date, title, monthly, id, weekly }) {
		return {
			id: { id },
			date: date || '',
			title: title,
			monthly: monthly || false,
			weekly: weekly || false
		};
	},
	validationSchema: Yup.object().shape({
		date: Yup.string().required('date is required'),
		list: Yup.string().required('list is required')
	}),
	handleSubmit(values, { setStatus, props }) {
		console.log(values);
		// props.getUser(values);
		// https://wunderlist2019.herokuapp.com/tasks/
		// axiosWithAuth()
		// 	.post(`https://wunderlist2019.herokuapp.com/tasks/add`, values)
		// 	.then((response) => {
		// 		console.log('post respone', response);
		// 	})
		// 	.catch((error) => console.log(error.response));
		//setStatus(values);
	}
})(CreateList);

export default FormikCreate;
