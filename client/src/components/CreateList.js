import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import ListItems from './ListItems';
import { Link } from 'react-router-dom';
import '../App.css';
// import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import SearchForm from './SearchForm';

const CreateList = ({ status }) => {
	const [ list, setList ] = useState([ { due_by: '09/24/2019', title: 'Title', monthly: false } ]);

	useEffect(() => {
		axiosWithAuth()
			.get(`https://wunderlist2019.herokuapp.com/tasks/all`)
			.then((response) => {
				console.log(response);
				response.data.map((item) => {
					console.log('item', item);
					// setList([ ...list, item ]);
					setList([ ...list, item ]);
				});

				//setStatus(response.data);
			})
			.catch((error) => {
				console.log('the data was not displayed', error);
			});
	}, []);

	useEffect(
		() => {
			if (status) {
				setList([ ...list, status ]);
				console.log('Our list', list);
			}
		},
		[ status ]
	);

	// useEffect(() => {
	// 	axiosWithAuth()
	// 		.get(`https://wunderlist2019.herokuapp.com/tasks/all`)
	// 		.then((response) => {
	// 			console.log('data', response.data);
	// 			setList([ ...list, response.data ]);

	// 			//setStatus(response.data);
	// 		})
	// 		.catch((error) => {
	// 			console.log('the data was not displayed', error);
	// 		});
	// }, []);

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
			<Link to="/search" className="links">
				<h3>Search</h3>
			</Link>
			<h1>Create List:</h1>
			<Form className="form">
				<div>
					<h4>Date of list:</h4>
					<Field type="text" name="due_by" placeholder="mm/dd/yyyy" />
				</div>
				<div>
					<h4>Title:</h4>
					<Field type="text" name="title" placeholder="Title" />
				</div>
				Do you want this list to be scheduled weekly?
				<Field type="checkbox" name="weekly" />
				Do you want this list to be scheduled monthly?
				<Field type="checkbox" name="monthly" />
				<button>Submit!</button>
			</Form>
			<div className="list-container">
				<h1>Daily ToDo Lists:</h1>
				{list.filter(isDaily).map((list) => (
					<div className="list-items">
						<p>Date: {list.due_by}</p>
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
							<p>Date: {list.due_by}</p>
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
	mapPropsToValues({ due_by, title, monthly, weekly, completed, user_id, description, segment }) {
		return {
			user_id: user_id || '1',
			due_by: due_by || '',
			title: title,
			weekly: weekly || false,
			monthly: monthly || false,
			completed: completed || false,
			description: description || 'none',
			segment: segment || 'none'
		};
	},
	validationSchema: Yup.object().shape({
		due_by: Yup.string().required('date is required'),
		title: Yup.string().required('list is required')
	}),
	handleSubmit(values, { setStatus, props }) {
		// props.getUser(values);
		// https://wunderlist2019.herokuapp.com/tasks/
		axiosWithAuth()
			.post(`https://wunderlist2019.herokuapp.com/tasks/add`, values)
			.then((response) => {
				console.log('CreateList.js: handleSubmit: post response', response);
				localStorage.setItem('token', response.data.payload);
			})
			.catch((error) => console.log(error.response));
		setStatus(values);
	}
})(CreateList);

export default FormikCreate;
